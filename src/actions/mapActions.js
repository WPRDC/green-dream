import { generateMapSource } from "../utils/maps/mapbox";
import { guid } from "../utils/utils";

export const DISPLAY_LAYER = "DISPLAY_LAYER";
export const HIDE_LAYER = "HIDE_LAYER";
export const UPDATE_LAYER = "UPDATE_LAYER";
export const UPDATE_LAYERS = "UPDATE_LAYERS";

export const OPEN_LAYER_MENU = "OPEN_LAYER_MENU";
export const CLOSE_LAYER_MENU = "CLOSE_LAYER_MENU";
export const TOGGLE_LAYER_MENU = "TOGGLE_LAYER_MENU";

export const UPDATE_MAP_STYLE = "UPDATE_MAP_STYLE";

export const displayLayer = layerId => {
  return {
    type: DISPLAY_LAYER,
    layerId
  };
};

export const hideLayer = layerId => {
  return {
    type: HIDE_LAYER,
    layerId
  };
};

export const updateLayer = layer => {
  return {
    type: UPDATE_LAYER,
    layer
  };
};

export const updateLayers = layers => {
  return {
    type: UPDATE_LAYERS,
    layers
  };
};

/**
 * Collects all of the source information for the given layerConfigs
 * and updates layerConfigs in store to contain the source information
 */
export const initLayers = layerConfigs => {
  return (dispatch, getState) => {
    Promise.all(
      layerConfigs.map(layerConfig =>
        generateMapSource(layerConfig).then(
          // update layer in store with mapbox source data
          source => {
            return Promise.resolve(
              Object.assign({}, layerConfig, {
                mapboxSource: source,
                version: guid()
              })
            );
            // dispatch(updateLayer(Object.assign({}, layerConfig, {mapboxSource: source, version: guid()})));
          }
        )
      )
    ).then(layers => {
      console.log(layers);
      dispatch(updateLayers(layers));
    });
  };
};

export const closeLayerMenu = () => {
  return {
    type: CLOSE_LAYER_MENU
  };
};

export const openLayerMenu = () => {
  return {
    type: OPEN_LAYER_MENU
  };
};

export const toggleLayerMenu = () => {
  return (dispatch, getState) => {
    const { open } = getState().layerMenu;
    if (open) dispatch(closeLayerMenu());
    else dispatch(openLayerMenu());
  };
};
