export default {
  id: 'pittsburgh-parks',
  type: 'vector',
  layerName: 'PGH Parks',
  visible: true,
  source: {
    type: 'carto-vector',
    minzoom: 0,
    sql: 'SELECT * FROM wprdc.pittsburgh_parks',
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "pittsburgh-parks-borders",
        "type": "line",
        "source": "pittsburgh-parks",
        "source-layer": "pittsburgh-parks",
        "layout": {
          "line-join": "round",
        },
        "paint": {
          "line-width": 1,
          "line-opacity": {
            "stops": [
              [8, 0],
              [13, 0.5],
              [18, 0.8]
            ]
          },
          "line-color": "green",
        }
      },
      {
        "id": "pittsburgh-parks-fill",
        "type": "fill",
        "source": "pittsburgh-parks",
        "source-layer": "pittsburgh-parks",
        "layout": {},
        "paint": {
          "fill-color": 'green',
          "fill-opacity": {
            "stops": [
              [8, 0],
              [13, 0.5],
              [18, 0.8]
            ]
          }
        }
      }
    ]
  }
}
