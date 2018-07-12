import { defaultLayers } from "../map/layers";
import {
  CLOSE_LAYER_MENU,
  DISPLAY_LAYER,
  HIDE_LAYER,
  OPEN_LAYER_MENU,
  TOGGLE_LAYER_MENU,
  UPDATE_LAYER,
  UPDATE_LAYERS,
  SELECT_PRIMARY_FEATURE
} from "../actions/mapActions";

export const mapLayers = (state = defaultLayers.reverse(), action) => {
  switch (action.type) {
    case DISPLAY_LAYER:
    case HIDE_LAYER:
      const visible = action.type === DISPLAY_LAYER;
      return state.map(layer => {
        if (layer.id === action.layerId)
          return Object.assign({}, layer, { visible });
        else return layer;
      });

    case UPDATE_LAYER:
      return state.map(layer => {
        if (layer.id === action.layer.id)
          return Object.assign({}, layer, action.layer);
        else return layer;
      });

    case UPDATE_LAYERS:
      return state.map(layer => {
        const newLayer = action.layers.find(
          updatedLayer => updatedLayer.id === layer.id
        );
        if (newLayer) return Object.assign({}, layer, newLayer);
        else return layer;
      });

    default:
      return state;
  }
};

export const basemap = (state = {}, action) => {
  return state;
};

export const layerMenu = (state = { open: true }, action) => {
  switch (action.type) {
    case CLOSE_LAYER_MENU:
      return Object.assign({}, state, { open: false });
    case OPEN_LAYER_MENU:
      return Object.assign({}, state, { open: true });
    default:
      return state;
  }
};
