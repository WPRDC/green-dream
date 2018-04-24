export default {
  id: 'transit-routes',
  type: 'vector',
  geoType: 'line',
  name: 'Port Authority Routes',
  source: {
    type: 'carto-vector',
    minzoom: 15,
    sql: 'SELECT * FROM paac_routes_1611',
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "transit-routes",
        "type": "line",
        "source": "transit-routes",
        "source-layer": "transit-routes",
        "paint": {
          "line-width": 4,
          "line-color": "rgba(120, 2, 222, 1)",
          "line-opacity": {
            "stops": [
              [15, 0],
              [18, 1]
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
