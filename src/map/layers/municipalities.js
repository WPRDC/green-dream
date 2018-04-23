export default {
  id: 'municipalities',
  type: 'vector',
  layerName: 'Allegheny County Municipalities',
  visible: true,
  source: {
    type: 'carto-vector',
    minzoom: 0,
    sql: 'SELECT * FROM wprdc.allegheny_county_municipal_boundaries',
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "municipalities-borders",
        "type": "line",
        "source": "municipalities",
        "source-layer": "municipalities",
        "layout": {
          "line-join": "round",
        },
        "paint": {
          "line-width": {
            "stops": [
              [0,1],
              [9,1],
              [18, 10]
            ]
          },
          "line-opacity": {
            "stops": [
              [1, 0],
              [9, .9],
              [12, 0.4]
            ]
          },
          "line-color": "black",
        }
      },
    ]
  }
}
