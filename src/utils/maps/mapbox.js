import {generateCartoVectorSource} from './carto'
import basemap from "../../map/basemaps/basemap";




export const collectMapboxStyles = (layerConfigs) => {
  // Get map tiles
  return new Promise(
    (resolve, reject) => {
      Promise.all(layerConfigs.map((layerConfig) => generateMapSource(layerConfig)))
        .then(sources => {
          const flatSources = sources.reduce((accum, curr) => accum = {...accum, ...curr}, {});
          resolve(layerConfigs.map(layerConfig =>
            Object.assign({}, layerConfig, {
                mapboxSource: flatSources[layerConfig.id]
              }
            )
          ))
        })
    })
};

export const generateMapboxStyle = (layerConfigs, baseStyle) => {
  const mapStyle = layerConfigs.reduce(
    (style, currConfig) => {
      const s = Object.assign({}, style);
      s.sources[currConfig.id] = currConfig.mapboxSource;
      const nl = generateStyleLayers(currConfig);
      console.log(nl);
      s.layers = s.layers.concat(nl);
      return s;
    },
    baseStyle);
  console.log((mapStyle))
  return mapStyle
}


/**
 * Takes in a custom layerConfig and returns mapbox gl source definition
 * https://www.mapbox.com/mapbox-gl-js/style-spec#sources
 */
export const generateMapSource = layerConfig => {
  switch (layerConfig.source.type) {
    case 'carto-vector':
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

