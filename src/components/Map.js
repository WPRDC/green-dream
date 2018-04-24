import React, {Component} from 'react'
import ReactMapGL from 'react-map-gl'
import {connect} from 'react-redux'

import Dimensions from 'react-dimensions'

import {updateLayer, initLayers} from '../actions/mapActions'

import {BASE_STYLE, generateMapboxStyle} from '../utils/maps/mapbox'
import {generateSourceWithTiles} from "../utils/maps/carto";
import basemap from "../map/basemaps/basemap";
import transit from "../map/layers/transit";
import {layerListChanged} from "../utils/utils";


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 40.4393509,
        longitude: -79.9647331,
        zoom: 10,
        minZoom: 9,
      },
      width: window.innerWidth,
      height: window.innerHeight,
      mapStyle: BASE_STYLE,
      tooltip: null,
    }
  }

  componentDidMount = () => {
      const {mapLayers, initLayers } = this.props;
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


  render() {
    const {width, height} = this.state;

    if (this.state.mapStyle !== null) {
      return (
        <ReactMapGL
          mapStyle={this.state.mapStyle}
          onViewportChange={(viewport) => this.setState({viewport})}
          onHover={this._onHover}
          transitionDuration={1000}

          {...{...this.state.viewport, ...{width: width - 10, height: height - 64}}}

        >
          <p style={{fontWeight: 800}}>{this.state.viewport.zoom}</p>
        </ReactMapGL>
      )
    } else {
      return <div/>
    }
  }
}

const mapStateToProps = state => {
  const {mapLayers} = state;
  return {mapLayers}
}

const mapDispatchToProps = dispatch => {
  return {
    updateLayer: layerConfig =>
      dispatch(updateLayer(layerConfig)),
    initLayers: layerConfigs =>
      dispatch(initLayers(layerConfigs))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dimensions()(Map));