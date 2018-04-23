export const DISPLAY_LAYER = 'DISPLAY_LAYER';
export const HIDE_LAYER = 'HIDE_LAYER';

export const UPDATE_LAYER = 'UPDATE_LAYER';

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
}

