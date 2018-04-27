import React, {Component} from 'react'
import ReactMapGL, {FlyToInterpolator} from 'react-map-gl'
import {connect} from 'react-redux'
import {withStyles} from 'material-ui/styles';

import Drawer from 'material-ui/Drawer'

import Dimensions from 'react-dimensions'

import {updateLayer, initLayers} from '../actions/mapActions'

import {BASE_STYLE, generateMapboxStyle} from '../utils/maps/mapbox'
import ReactTooltip from 'react-tooltip'

import {layerListChanged} from "../utils/utils";
import LayerControl from '../containers/LayerControl'

import {fromJS, toJS} from 'immutable'
import {fetchParcelDataIfNeeded, selectParcel} from "../actions/dataActions";


const styles = theme => ({
  root: {
    zIndex: 1,
    overflow: 'auto',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
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
    }
  }

  componentDidMount = () => {
    const {mapLayers, initLayers} = this.props;
    initLayers(mapLayers);
    window.addEventListener('resize', this.updateDimensions)
  };

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  };


  componentDidUpdate = (prevProps, prevState) => {
    const {mapLayers: oldLayers} = prevProps;
    const {mapLayers: newLayers} = this.props;

    if (layerListChanged(oldLayers, newLayers)) {
      this.setState({mapStyle: generateMapboxStyle(newLayers)}, () => console.log('changing that state'))
    }

  };

  handleClick = (event) => {
    const {mapStyle} = this.state;
    const {collectData} = this.props;
    const workingStyle = mapStyle.toJS();
    if (event && event.features.length) {
      const fillIndex = workingStyle.layers.findIndex(layer => layer.id === 'parcels-select-fill');
      const lineIndex = workingStyle.layers.findIndex(layer => layer.id === 'parcels-select-border');
      this.setState({
          mapStyle: mapStyle
            .setIn(['layers', fillIndex, 'filter', 2], event.features[0].properties['map_identifier'])
            .setIn(['layers', lineIndex, 'filter', 2], event.features[0].properties['map_identifier']),
        },
        () => this._onViewportChange(Object.assign(this.state.viewport, {
          zoom: 17,
          longitude: event.lngLat[0],
          latitude: event.lngLat[1],
          transitionDuration: 300,
          pitch: 45,
        }))
      );
      collectData(event.features[0].properties['map_identifier'])

    }

  };


  handleHover = event => {
    const {mapStyle} = this.state;
    const workingStyle = mapStyle.toJS();
    if (event && event.features.length) {
      const parcelHighlightLayerIndex = workingStyle.layers.findIndex(layer => layer.id === 'parcels-highlight-fill');
      this.setState({
        mapStyle: mapStyle.setIn(['layers', parcelHighlightLayerIndex, 'filter', 2], event.features[0].properties['map_identifier']),
        tooltip: event.features[0].properties['map_name']
      });
    } else {
      this.setState({tooltip: null});
    }
  };

  _onViewportChange = viewport => {
    this.setState({viewport})
  }

  render() {
    const {width, height, tooltip} = this.state;
    const {layerMenu, classes} = this.props;

    if (this.state.mapStyle !== null) {
      return (
        <div className={classes.root}>
          <LayerControl/>
          {tooltip &&
          <ReactTooltip place="right" id="identifier"
                        style={{zIndex: 1000}}>
            <span>{tooltip}</span>
          </ReactTooltip>
          }
          <a data-tip data-for="identifier" style={{position: 'absolute', zIndex: 1, width: '100%'}}>
            <ReactMapGL
              mapStyle={this.state.mapStyle}
              onViewportChange={this._onViewportChange}
              onHover={this.handleHover}
              onClick={this.handleClick}

              {...{...this.state.viewport, ...{width: width, height: height - 64}}}
            >
              <p style={{fontWeight: 800}}>{this.state.viewport.zoom}</p>
            </ReactMapGL>
          </a>


        </div>
      )
    } else {
      return <div/>
    }
  }
}

const mapStateToProps = state => {
  const {mapLayers, layerMenu} = state;
  return {mapLayers, layerMenu}
};

const mapDispatchToProps = dispatch => {
  return {
    updateLayer: layerConfig =>
      dispatch(updateLayer(layerConfig)),
    initLayers: layerConfigs =>
      dispatch(initLayers(layerConfigs)),
    collectData: parcelId => {
      dispatch(selectParcel(parcelId));
      dispatch(fetchParcelDataIfNeeded(parcelId));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Dimensions()(
    withStyles(styles)(
      Map
    )
  )
);