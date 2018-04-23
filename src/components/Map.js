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
      mapStyle: BASE_STYLE,
      tooltip: null,
    }
  }

  componentDidMount = () => {
      const {mapLayers, initLayers } = this.props;
      initLayers(mapLayers);
  };


  _onHover = event => {
    if (event.features.length) {
      this.setState({
        tooltip: event.features[0].properties.pin
      }, console.log(this.state.tooltip))
    } else if (this.state.tooltip) {
      this.setState({tooltip: null})
      this.setState({tooltip: null})
    }
  }


  componentDidUpdate = (prevProps, prevState) => {
    const {mapLayers: oldLayers} = prevProps;
    const {mapLayers: newLayers} = this.props;

    if (layerListChanged(oldLayers, newLayers)) {
      this.setState({mapStyle: generateMapboxStyle(newLayers)})
    }

  };


  render() {
    const {containerWidth: width, containerHeight: height} = this.props;
    if (this.state.mapStyle !== null) {
      return (
        <ReactMapGL
          mapStyle={this.state.mapStyle}
          onViewportChange={(viewport) => this.setState({viewport})}
          onHover={this._onHover}
          transitionDuration={1000}

          {...{...this.state.viewport, ...{width: width - 10, height}}}

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