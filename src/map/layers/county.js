export default {
  id: 'allegheny-county',
  type: 'vector',
  name: 'Allegheny County Border',
  visible: false,
  geoType: 'polygon',
  legendColor: 'navy',
  source: {
    type: 'carto-vector',
    minzoom: 0,
    sql: 'SELECT * FROM allegheny_county_boundary',
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "allegheny-county-borders",
        "type": "line",
        "source": "allegheny-county",
        "source-layer": "allegheny-county",
        "layout": {
          "line-join": "round",
        },
        "paint": {
          "line-width": {
            "stops": [
              [0,1],
              [9,4],
              [18, 10]
            ]
          },
          "line-opacity": 0.8,
          "line-color": "navy",
        }
      },
    ]
  }
}
