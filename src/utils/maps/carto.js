const MAPS_API_VERSION = "1.3.1";
const CARTO_CSS_VERSION = "2.1.1";
const CARTO_USER = "wprdc";
const MAPS_API_ENDPOINT = "https://" + CARTO_USER + ".carto.com/api/v1/map";

const mapInstantiationParams = (id, sql) => {
  return {
    "layers": [{
      id,
      options: {
        sql,
      }
    }]
  };
};

export const extractCartoTileUrls = data => {
  return data.metadata.tilejson.vector.tiles;
};

export const generateCartoVectorSource = layer => {
  const config =  encodeURIComponent(JSON.stringify(mapInstantiationParams(layer.id, layer.source.sql)));
  return new Promise((resolve, reject) => {
    fetch(MAPS_API_ENDPOINT + "?config=" + config, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(response => response.json(), error => console.log(error))
      .then(
        data => {
          console.log(extractCartoTileUrls(data));
          resolve({
            type: layer.type,
            tiles: extractCartoTileUrls(data),
            minzoom: layer.source.minzoom || 0,
            maxzoom: layer.source.maxzoom || 22
          })
        },
        error => console.log(error)
      );
  });
};
