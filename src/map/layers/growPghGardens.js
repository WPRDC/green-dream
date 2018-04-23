export default {
  id: 'grow-pgh-gardens',
  type: 'vector',
  name: 'Grow Pittsburgh Gardens',
  visible: true,
  source: {
    type: 'carto-vector',
    minzoom: 15,
    sql: 'SELECT * FROM growpghgardens201712',
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "grow-pgh-gardens",
        "type": "circle",
        "source": "grow-pgh-gardens",
        "source-layer": "grow-pgh-gardens",
        "layout": {},
        "paint": {
          "circle-color": '#0F2',
          "circle-radius": {
            "stops": [
              [15, 4],
              [19, 8]
            ]
          }
        }
      }
    ]
  }
}
