export default {
  id: 'pittsburgh',
  type: 'vector',
  name: 'Pittsburgh Border',
  geoType: 'polygon',
  legend: {
    display: true,
    type: "single",
    color: "black"
  },
  legendColor: 'black',
  category: 'base-layers',
  legendDisplay: false,
  visible: false,
  source: {
    type: 'vector',
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
            stops: [[0, 1], [9, 4], [18, 10]]
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
