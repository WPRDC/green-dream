import {generateCartoVectorSource} from './carto'
import basemap from "../../map/basemaps/basemap";

export const BASE_STYLE = {
  "version": 8,
  "name": "test-map",
  "glyphs": "https://free.tilehosting.com/fonts/{fontstack}/{range}.pbf?key=9EBDGiwYdzNXmPRgscb4",
  "sprite": "https://free.tilehosting.com/styles/positron/sprite",
  "sources": basemap.sources,
  "layers": basemap.layers
}

export const generateMapboxStyle = (layerConfigs, baseStyle = BASE_STYLE) => {
  return layerConfigs.reduce(
    (style, currConfig) => {
      const s = Object.assign({}, style);
      s.sources[currConfig.id] = currConfig.mapboxSource;
      const nl = generateStyleLayers(currConfig);
      s.layers = s.layers.concat(nl);
      return s;
    },
    baseStyle)
}


/**
 * Takes in a custom layerConfig and returns mapbox gl source definition
 * https://www.mapbox.com/mapbox-gl-js/style-spec#sources
 */
export const generateMapSource = layerConfig => {
  switch (layerConfig.source.type) {
    case 'carto-vector':
      if (layerConfig.mapboxSource)
        return Promise.resolve(layerConfig.mapboxSource);
      else
        return generateCartoVectorSource(layerConfig)
  }
};

export const generateLabelLayers = layerConfig => {
  return layerConfig.layers.labels;

};

export const generateStyleLayers = layerConfig => {
  const {layers, visible} = layerConfig;

  return layers.style.map(layer => {
    layer.layout.visibility = visible ? 'visible' : 'none'
    return layer
  })
}

