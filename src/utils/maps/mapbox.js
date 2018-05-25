import { generateCartoVectorSource } from "./carto";
import basemap from "../../map/basemaps/terrain";
import { fromJS } from "immutable";

export const BASE_STYLE = {
  version: 8,
  name: "test-map",
  glyphs:
    "https://free.tilehosting.com/fonts/{fontstack}/{range}.pbf?key=9EBDGiwYdzNXmPRgscb4",
  sources: basemap.sources,
  layers: basemap.layers
};

export const generateMapboxStyle = (layerConfigs, baseStyle = BASE_STYLE) => {
  const mapStyle = layerConfigs.reduce((style, currConfig) => {
    const s = Object.assign({}, style);
    s.sources[currConfig.id] = currConfig.mapboxSource;
    const nl = generateStyleLayers(currConfig);
    s.layers = s.layers.concat(nl);
    return s;
  }, baseStyle);
  return fromJS(mapStyle);
};

/**
 * Takes in a custom layerConfig and returns mapbox gl source definition
 * https://www.mapbox.com/mapbox-gl-js/style-spec#sources
 */
export const generateMapSource = layerConfig => {
  if (layerConfig.mapboxSource)
    return Promise.resolve(layerConfig.mapboxSource);

  switch (layerConfig.source.type) {
    case "carto-vector":
      return generateCartoVectorSource(layerConfig);
    case "raster":
      console.log('here')
      const { tiles, tileSize } = layerConfig.source;
      return Promise.resolve({ tiles, tileSize, type: "raster" });
  }
};

export const generateLabelLayers = layerConfig => {
  return layerConfig.layers.labels;
};

export const generateStyleLayers = layerConfig => {
  const { layers, visible } = layerConfig;
  if (Object.keys(layers).length === 0) return {}
  return layers.style.map(layer => {
    layer.layout.visibility = visible ? "visible" : "none";
    return layer;
  });
};
