import React, {Component} from 'react'
import ReactMapGL from 'react-map-gl'
import {connect} from 'react-redux'

import Dimensions from 'react-dimensions'

import {updateLayer} from '../actions/mapActions'

import {collectMapboxStyles, generateMapboxStyle} from '../utils/maps/mapbox'
import {generateSourceWithTiles} from "../utils/maps/carto";
import basemap from "../map/basemaps/basemap";
import transit from "../map/layers/transit";
import {layerListChanged} from "../utils/utils";


const defaultStyle = {
  "version": 8,
  "name": "test-map",
  "glyphs": "https://free.tilehosting.com/fonts/{fontstack}/{range}.pbf?key=",
  "sprite": "https://free.tilehosting.com/styles/positron/sprite",
  "sources": basemap.sources,
  "layers": basemap.layers
}


function visibleChanged(layers, oldLayers) {
  console.log('checkin vis')
  for (let i in layers) {
    const layer = layers[i];
    const oldLayer = oldLayers.find(l => l.id === layer.id)
    if (layer.visible !== oldLayer.visible) {
      return true
    }
  }
  return false
}


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
      mapStyle: defaultStyle,
      tooltip: null,
    }
  }

  componentDidMount = () => {
    const {mapLayers, updateLayer} = this.props;
    collectMapboxStyles(mapLayers, defaultStyle)
      .then(newLayers => {
          newLayers.map(newLayer => updateLayer(newLayer));
          this.setState({mapStyle: generateMapboxStyle(newLayers, defaultStyle)})
        }
      )
  }


  _onHover = event => {
    if (event.features.length) {
      this.setState({
        tooltip: event.features[0].properties.pin
      }, console.log(this.state.tooltip))
    } else if (this.state.tooltip) {
      this.setState({tooltip: null})
    }
  }

  _onClick = event => {
    generateSourceWithTiles(transit)
      .then(tiles => {
        this.setState()
      })
  };

  componentDidUpdate = (prevProps, prevState) => {
    //  todo:  handle all map style gneration in thunk actions, and only provide the map style to this component


  }


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
      dispatch(updateLayer(layerConfig))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dimensions()(Map));