export default {
  id: 'bike-trails',
  type: 'vector',
  name: 'Bike Trails',
  visible: 'true',
  geoType: 'line',
  legendColor: '#5C5248',
  source: {
    type: 'carto-vector',
    minzoom: 8,
    sql: 'SELECT * FROM bike_trails_may17',
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "bike-trails",
        "type": "line",
        "source": "bike-trails",
        "source-layer": "bike-trails",
        "paint": {
          "line-width":  {
            "stops": [
              [10, 1],
              [15,4]
            ]
          },
          "line-color": "#5C5248",
          "line-opacity": {
            "stops": [
              [10, 1],
              [15,1]
            ]
          }
        },
        "layout": {
          "line-cap": "round"
        }
      }
    ]
  }
}
