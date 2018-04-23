import {collectMapboxStyles, generateMapboxStyle, generateMapSource} from "../utils/maps/mapbox";
import {guid} from "../utils/utils";

export const DISPLAY_LAYER = 'DISPLAY_LAYER';
export const HIDE_LAYER = 'HIDE_LAYER';
export const UPDATE_LAYER = 'UPDATE_LAYER';


export const UPDATE_MAP_STYLE = 'UPDATE_MAP_STYLE';

export const displayLayer = (layerId) => {
  return {
    type: DISPLAY_LAYER,
    layerId
  }
};

export const hideLayer = (layerId) => {
    return {
      type: HIDE_LAYER,
      layerId
    }
};

export const updateLayer = (layer) => {
  return {
    type: UPDATE_LAYER,
    layer
  }
};

/**
 * Collects all of the source information for the given layerConfigs
 * and updates layerConfigs in store to contain the source information
 */
export const initLayers = (layerConfigs) => {
  return (dispatch, getState) => {
    Promise.all(
      layerConfigs.map((layerConfig) =>
        generateMapSource(layerConfig).then(
          // update layer in store with mapbox source data
          source => {
            dispatch(updateLayer(Object.assign({}, layerConfig, {mapboxSource: source, version: guid()})));
            return Promise.resolve(source)
          }
        )
      )
    )
  }
};