export default {
  id: 'pittsburgh',
  type: 'vector',
  name: 'Pittsburgh Border',
  geoType: 'polygon',
  legendColor: 'black',
  category: 'base-layers',
  legendDisplay: false,
  visible: true,
  source: {
    type: 'carto-vector',
    minzoom: 0,
    sql: `SELECT * FROM wprdc.allegheny_county_municipal_boundaries WHERE f0_name = 'PITTSBURGH'`,
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "pittsburgh-borders",
        "type": "line",
        "source": "pittsburgh",
        "source-layer": "pittsburgh",
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
