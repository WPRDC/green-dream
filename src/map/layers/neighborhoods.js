export default {
  id: 'neighborhoods',
  type: 'vector',
  name: 'PGH Neighborhoods',
  visible: true,
  source: {
    type: 'carto-vector',
    minzoom: 0,
    sql: 'SELECT * FROM pittsburgh_neighborhoods',
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "neighborhoods-borders",
        "type": "line",
        "source": "neighborhoods",
        "source-layer": "neighborhoods",
        "layout": {
          "line-join": "round",
        },
        "paint": {
          "line-width": {
            "stops": [
              [0,1],
              [9,1],
              [18, 3]
            ]
          },
          "line-opacity": {
            "stops": [
              [10,0],
              [13, 0.4]
            ]
          },
          "line-color": "black",
        }
      },
    ]
  }
}
