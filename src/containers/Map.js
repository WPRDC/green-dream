import React, {Component} from "react";
import ReactMapGL, {FlyToInterpolator, Popup} from "react-map-gl";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core/styles";

import WebMercatorViewport from "viewport-mercator-project"

import Dimensions from "react-dimensions";

import {updateLayer, initLayers} from "../actions/mapActions";

import {BASE_STYLE, generateMapboxStyle} from "../utils/maps/mapbox";
import {getBounds, objectsAreTheSame} from "../utils/utils";
import ReactTooltip from "react-tooltip";

import {layerListChanged} from "../utils/utils";
import LayerControl from "./LayerControl";
import InfoPopup from '../components/InfoPopup'
import {fromJS, toJS} from "immutable";
import {
  fetchParcelDataIfNeeded,
  fetchParcelImageIfNeeded,
  fetchNeighborhoodDataIfNeeded,
  select
} from "../actions/dataActions";
import Legend from "../components/Legend";

const makePopupFields = (layer, feature) => {
  return layer.popupProperties.reduce((acc, curr) => {
    acc[curr.name] = feature.properties[curr.id]
    return acc;
  }, {});
};

const extractLayerTypeFromId = layerId => {
  const h = layerId.indexOf("highlight");
  const s = layerId.indexOf("select");
  const end = Math.max(h, s) - 1;

  if (end >= 0) return layerId.substr(0, end);
  else return layerId.substr(0, layerId.lastIndexOf("-"));
};

const clearLayers = (mapStyle, layerType) => {
  const mapLayers = mapStyle.get('layers')
  let oldLayersIndices = []
  for (let i = 0; i < mapLayers.size; i++) {
    if (mapLayers.get(i).get('id').includes(`-${layerType}-`)) {
      oldLayersIndices.push(i)
    }
  }

  let clearedMapStyle = mapStyle;
  for (let i of oldLayersIndices) {
    clearedMapStyle = clearedMapStyle.setIn(['layers', i, 'filter', 2], 'nnn')
  }
  return clearedMapStyle
}

const styles = theme => ({
  root: {
    zIndex: 1,
    overflow: "auto",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%"
  },
  legendWrapper: {
    zIndex: 2,
    position: "absolute",
    bottom: "76px"
  }
});

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 40.4393509,
        longitude: -79.9647331,
        zoom: 10,
        minZoom: 9,
        transitionDuration: 300,
        transitionInterpolator: new FlyToInterpolator()
      },
      width: window.innerWidth,
      height: window.innerHeight,
      mapStyle: fromJS(BASE_STYLE),
      tooltip: null,
      popup: {latitude: null}
    };
    this.map = React.createRef();
  }

  componentDidMount = () => {
    const {mapLayers, initLayers} = this.props;
    initLayers(mapLayers);
    window.addEventListener("resize", this.updateDimensions);
  };

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const {mapLayers: oldLayers, currentSelection: oldSelection} = prevProps;
    const {mapLayers: newLayers, currentSelection} = this.props;
    console.log(this.state.mapStyle.toJS());
    if ((currentSelection.objectType || oldSelection.objectType) && !objectsAreTheSame(oldSelection, currentSelection)) {
      this.handleSelectionChange(currentSelection);
    }


    if (layerListChanged(oldLayers, newLayers)) {
      this.setState({mapStyle: generateMapboxStyle(newLayers)});
    }
  };

  handleClick = event => {
    const {mapStyle, width, height} = this.state;
    const {selectFeature, mapLayers, currentSelection} = this.props;
    if (event && event.features.length) {
      // 0. Clear out old highlighted layers

      // 1. Determine the feature of interest and get data about it
      const feature = event.features[0];
      const bounds = getBounds(feature.geometry);
      const layerType = extractLayerTypeFromId(feature.layer.id);
      const {map_identifier: id, map_name: name} = feature.properties;

      const properties = {bounds};
      console.log(feature)

      // 1st class info displays - info panel
      if (["parcels", "neighborhoods", "municipalities"].includes(layerType)) {
        selectFeature(layerType, id, name, properties, currentSelection);
      }

      // 2nd class info displays - popups
      // TODO: move this to it's own method
      if (["grow-pgh-gardens", "brownfields", "landslides", "3rww-gi-inventory", "lots-to-love"].includes(layerType))
        this.setState({
          popup: {
            name: name,
            latitude: event.lngLat[1],
            longitude: event.lngLat[0],
            data: makePopupFields(
              mapLayers.find(layer => layer.id === layerType),
              feature
            )
          }
        });
    }
  };

  handleHover = event => {
    const {mapStyle} = this.state;

    if (event && event.features.length) {
      const workingStyle = mapStyle.toJS();
      // 1. Determine the feature of interest and find its map layer
      const feature = event.features[0];
      const layerType = extractLayerTypeFromId(feature.layer.id);
      const layerIndex = workingStyle.layers.findIndex(
        layer => layer.id === layerType + "-highlight-fill"
      );
      // 2. Change the style of that layer  and display name in tooltip

      const clearedMapStyle = clearLayers(mapStyle, 'highlight')
      const newState = {tooltip: feature.properties["map_name"]};
      if (layerIndex >= 0) {
        newState["mapStyle"] = clearedMapStyle.setIn(
          ["layers", layerIndex, "filter", 2],
          feature.properties["map_identifier"]
        );
      }
      this.setState(newState);
    } else {
      this.setState({tooltip: null});
    }
  };

  highlightOnMap = (layerType, id, properties) => {
    const {mapStyle, width, height} = this.state;
    const {previousSelection} = this.props;
    const workingStyle = mapStyle.toJS();

    let fillIndex, lineIndex, oldFillIndex, oldLineIndex;

    if (layerType) {
      fillIndex = workingStyle.layers.findIndex(
        layer => layer.id === layerType + "-select-fill"
      );
      lineIndex = workingStyle.layers.findIndex(
        layer => layer.id === layerType + "-select-border"
      );
    }
    if (previousSelection.objectType) {
      oldFillIndex = workingStyle.layers.findIndex(
        layer => layer.id === previousSelection.objectType + "-select-fill"
      );
      oldLineIndex = workingStyle.layers.findIndex(
        layer => layer.id === previousSelection.objectType + "-select-border"
      );
    }

    const clearedMapStyle = clearLayers(mapStyle, 'select')


    // Something selected and previous selection on map
    if (oldFillIndex && oldLineIndex && fillIndex && lineIndex && oldFillIndex >= 0 && oldLineIndex >= 0) {
      this.setState({
        mapStyle: clearedMapStyle
          .setIn(["layers", fillIndex, "filter", 2], id)
          .setIn(["layers", lineIndex, "filter", 2], id)
      });
    }

    // Selection on an empty (no current selections) map
    else if (lineIndex >= 0 && fillIndex >= 0) {
      this.setState({
        mapStyle: clearedMapStyle
          .setIn(["layers", fillIndex, "filter", 2], id)
          .setIn(["layers", lineIndex, "filter", 2], id)
      });
    }

    if (["parcels", "neighborhoods", 'municipalities'].includes(layerType)) {
      const {bounds, centroid} = properties;
      const vp = new WebMercatorViewport({width, height});
      const padding = height / 3.5;
      const {latitude, longitude, zoom} = centroid ? {
        latitude: parseFloat(centroid[1]),
        longitude: parseFloat(centroid[0]),
        zoom: 16
      } : vp.fitBounds(bounds, {padding});
      this._onViewportChange(
        Object.assign(this.state.viewport, {
          zoom: Math.min(zoom, 17),
          latitude, longitude,
          transitionDuration: 300
        })
      );
    }
  };

  getMap = () => {
    return this.map.current.getMap();
  };

  handleSelectionChange = (selection) => {
    const {displayInfo} = this.props;
    const {objectType, name, id, properties} = selection;
    displayInfo(objectType, id, name);

    this.highlightOnMap(objectType, id, properties)
  }

  _onViewportChange = viewport => {
    this.setState({viewport});
  };

  render() {
    const {width, height, tooltip} = this.state;
    const {layerMenu, classes, mapLayers} = this.props;

    const legendEntries = mapLayers.reduce((acc, curr) => {
      if (curr.visible && curr.legendDisplay) {
        acc.push({
          legend: curr.legend,
          label: curr.name,
          type: curr.geoType
        });
        return acc;
      } else return acc;
    }, []);

    if (this.state.mapStyle !== null) {
      return (
        <div className={classes.root}>
          <LayerControl/>
          {tooltip && (
            <ReactTooltip place="right" id="identifier" style={{zIndex: 2}}>
              <span>{tooltip}</span>
            </ReactTooltip>
          )}
          <a
            data-tip
            data-for="identifier"
            style={{position: "absolute", zIndex: 1, width: "100%"}}
          >
            <ReactMapGL
              ref={this.map}
              mapStyle={this.state.mapStyle}
              onViewportChange={this._onViewportChange}
              onHover={this.handleHover}
              onClick={this.handleClick}
              {...{
                ...this.state.viewport,
                ...{width: width, height: height - 64}
              }}
            >
              {this.state.popup.latitude ? (
                <Popup
                  latitude={this.state.popup.latitude}
                  longitude={this.state.popup.longitude}
                  closeButton={false}
                  onClose={() => this.setState({popup: {latitude: null}})}
                  closeOnClick={true}
                  anchor={"bottom"}
                  captureDrag={false}
                  tipSize={10}
                >
                  <InfoPopup name={this.state.popup.name} displayData={this.state.popup.data}/>
                </Popup>
              ) : null}
            </ReactMapGL>
          </a>
          {legendEntries && legendEntries.length ? (
            <div
              className={classes.legendWrapper}
              style={{left: layerMenu.open ? "292px" : "12px"}}
            >
              <Legend entries={legendEntries}/>
            </div>
          ) : null}
        </div>
      );
    } else {
      return <div/>;
    }
  }
}

const mapStateToProps = state => {
  const {mapLayers, layerMenu, currentSelection, previousSelection} = state;
  return {mapLayers, layerMenu, currentSelection, previousSelection};
};

const mapDispatchToProps = dispatch => {
  return {
    updateLayer: layerConfig => dispatch(updateLayer(layerConfig)),
    initLayers: layerConfigs => dispatch(initLayers(layerConfigs)),
    selectFeature: (type, id, name, properties, prevSelection) => {
      dispatch(select(type, id, name, properties, prevSelection));
    },
    displayInfo: (type, id, name) => {
      if (type === "parcels") {
        dispatch(fetchParcelDataIfNeeded(id));
        dispatch(fetchParcelImageIfNeeded(id, name));
      }
      if (type === "neighborhoods") {
        const hoodId = id.toLowerCase().replace(/(\-|\s)/g, "_").replace(/\./g, '')
        dispatch(fetchNeighborhoodDataIfNeeded('pittsburgh_neighborhood', hoodId))
      }
      if (type === 'municipalities') {
        const muniId = id.toLowerCase().replace(/(\-|\s)/g, "_").replace(/\./g, '')
        dispatch(fetchNeighborhoodDataIfNeeded('allegheny_county_municipality', muniId))
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Dimensions()(withStyles(styles)(Map))
);
