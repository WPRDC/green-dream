const MAPS_API_VERSION = "1.3.1";
const CARTO_CSS_VERSION = "2.1.1";
const CARTO_USER = "wprdc";
const MAPS_API_ENDPOINT = "https://" + CARTO_USER + ".carto.com/api/v1/map";

const buildTileRequest = (id, sql) => {
  return {
    version: MAPS_API_VERSION,
    layers: [
      {
        id,
        type: "cartodb",
        options: {
          cartocss_version: CARTO_CSS_VERSION,
          cartocss: "#layer {polygon-fill: #000;}",
          sql
        }
      }
    ]
  };
};

export const extractCartoTileUrls = data => {
  return data.metadata.tilejson.vector.tiles;
};

export const generateCartoVectorSource = layer => {
  const body = buildTileRequest(layer.id, layer.source.sql);
  return new Promise((resolve, reject) => {
    fetch(MAPS_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json(), error => console.log(error))
      .then(
        data =>
          resolve({
            type: layer.type,
            tiles: extractCartoTileUrls(data),
            minzoom: layer.source.minzoom || 0,
            maxzoom: layer.source.maxzoom || 22
          }),
        error => console.log(error)
      );
  });
};
