import React, {Component} from 'react'
import {connect} from 'react-redux'
import {displayLayer, hideLayer} from "../actions/mapActions";

const LayerControl = props => {
  const {mapLayers, handleChange} = props

  return (
    <div>
      {mapLayers.map(layer =>
        <label style={{display: 'block'}} key={layer.id}>
          <input type='checkbox' checked={layer.visible} onChange={handleChange(layer)}/>
          {layer.id}
        </label>
      )}
    </div>
  )

}

const mapStateToProps = state => {
  const {mapLayers} = state;
  return {
    mapLayers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange: layer => () => {
      if (layer.visible)
        dispatch(hideLayer(layer.id));
      else
        dispatch(displayLayer(layer.id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LayerControl)