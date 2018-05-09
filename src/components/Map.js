import React, { Component } from "react";
import ReactMapGL, { FlyToInterpolator } from "react-map-gl";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";

import Drawer from "material-ui/Drawer";

import Dimensions from "react-dimensions";

import { updateLayer, initLayers } from "../actions/mapActions";

import { BASE_STYLE, generateMapboxStyle } from "../utils/maps/mapbox";
import ReactTooltip from "react-tooltip";

import { layerListChanged } from "../utils/utils";
import LayerControl from "../containers/LayerControl";

import { fromJS, toJS } from "immutable";
import {
  fetchParcelDataIfNeeded,
  selectNeighborhood,
  selectParcel,
  select
} from "../actions/dataActions";
import Legend from "./Legend";

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
      tooltip: null
    };
  }

  componentDidMount = () => {
    const { mapLayers, initLayers } = this.props;
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
    const { mapLayers: oldLayers } = prevProps;
    const { mapLayers: newLayers } = this.props;

    if (layerListChanged(oldLayers, newLayers)) {
      this.setState({ mapStyle: generateMapboxStyle(newLayers) }, () =>
        console.log("changing that state")
      );
    }
  };

  handleClick = event => {
    const { mapStyle } = this.state;
    const { collectData } = this.props;
    if (event && event.features.length) {
      const workingStyle = mapStyle.toJS();

      // 1. Determine the feature of interest
      const feature = event.features[0];
      const layerType = feature.layer.id.split("-")[0];
      const { map_identifier: id, map_name: name } = feature.properties;

      const fillIndex = workingStyle.layers.findIndex(
        layer => layer.id === layerType + "-select-fill"
      );
      const lineIndex = workingStyle.layers.findIndex(
        layer => layer.id === layerType + "-select-border"
      );

      //TODO: get new viwe port using this
      //https://github.com/uber/react-map-gl/blob/3e52aa397a57081fa2c44bb79f8fa48c41ff510f/docs/upgrade-guide.md


      this.setState(
        {
          mapStyle: mapStyle
            .setIn(["layers", fillIndex, "filter", 2], id)
            .setIn(["layers", lineIndex, "filter", 2], id)
        },
        () =>
          this._onViewportChange(
            Object.assign(this.state.viewport, {
              zoom: layerType === "parcels" ? 17 : 14,
              longitude: event.lngLat[0],
              latitude: event.lngLat[1],
              transitionDuration: 300
            })
          )
      );
      collectData(layerType, id, name);
    }
  };

  handleHover = event => {
    const { mapStyle } = this.state;

    if (event && event.features.length) {
      const workingStyle = mapStyle.toJS();
      // 1. Determine the feature of interest
      const feature = event.features[0];
      const layerType = feature.layer.id.split("-")[0];
      const layerIndex = workingStyle.layers.findIndex(
        layer => layer.id === layerType + "-highlight-fill"
      );

      // 2. Change the style of that layer  (todo: do this in layer store and not directly in style)
      this.setState({
        mapStyle: mapStyle.setIn(
          ["layers", layerIndex, "filter", 2],
          event.features[0].properties["map_identifier"]
        ),
        tooltip: event.features[0].properties["map_name"]
      });
    } else {
      this.setState({ tooltip: null });
    }
  };

  _onViewportChange = viewport => {
    this.setState({ viewport });
  };

  render() {
    const { width, height, tooltip } = this.state;
    const { layerMenu, classes, mapLayers } = this.props;

    const legendEntries = mapLayers.reduce((acc, curr) => {
      if (curr.visible && curr.legendDisplay) {
        acc.push({
          color: curr.legendColor,
          label: curr.name,
          type: curr.geoType
        });
        return acc;
      } else return acc;
    }, []);

    if (this.state.mapStyle !== null) {
      return (
        <div className={classes.root}>
          <LayerControl />
          {tooltip && (
            <ReactTooltip
              place="right"
              id="identifier"
              style={{ zIndex: 1000 }}
            >
              <span>{tooltip}</span>
            </ReactTooltip>
          )}
          <a
            data-tip
            data-for="identifier"
            style={{ position: "absolute", zIndex: 1, width: "100%" }}
          >
            <ReactMapGL
              mapStyle={this.state.mapStyle}
              onViewportChange={this._onViewportChange}
              onHover={this.handleHover}
              onClick={this.handleClick}
              {...{
                ...this.state.viewport,
                ...{ width: width, height: height - 64 }
              }}
            >
              <p style={{ fontWeight: 800 }}>{this.state.viewport.zoom}</p>
            </ReactMapGL>
          </a>
          <div
            className={classes.legendWrapper}
            style={{ left: layerMenu.open ? "292px" : "12px" }}
          >
            <Legend entries={legendEntries} />
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => {
  const { mapLayers, layerMenu } = state;
  return { mapLayers, layerMenu };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLayer: layerConfig => dispatch(updateLayer(layerConfig)),
    initLayers: layerConfigs => dispatch(initLayers(layerConfigs)),
    collectData: (type, id, name) => {
      if (type === "parcels") {
        dispatch(select(type, id, name));
        dispatch(fetchParcelDataIfNeeded(id));
      }
      if (type === "neighborhoods") {
        dispatch(select(type, id, name));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Dimensions()(withStyles(styles)(Map))
);
