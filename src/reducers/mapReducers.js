import {defaultLayers} from '../map/layers'
import {DISPLAY_LAYER, HIDE_LAYER, UPDATE_LAYER} from "../actions/mapActions";




export const sources = (state = {}, action) => {
  return state
};

export const mapLayers = (state = defaultLayers, action) => {
  switch(action.type){
    case DISPLAY_LAYER:
    case HIDE_LAYER:
      const visible = action.type === DISPLAY_LAYER;
      return state.map( layer => {
        if (layer.id === action.layerId)
          return Object.assign({}, layer, {visible})
        else
          return layer
      });

    case UPDATE_LAYER:
      return state.map( layer => {
        if (layer.id === action.layer.id)
          return Object.assign({}, layer, action.layer)
        else return layer
      });

    default:
      return state
  }
};

export const basemap = (state = {}, action) => {
  return state
}

