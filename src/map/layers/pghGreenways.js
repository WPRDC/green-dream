export default {
  id: 'pittsburgh-greenways',
  type: 'vector',
  name: 'PGH Greenways',
  geoType: 'polygon',
  legendColor: '#01796F',
  visible: true,
  source: {
    type: 'carto-vector',
    minzoom: 0,
    sql: 'SELECT * FROM wprdc.pghodgreenways',
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "pittsburgh-greenways-borders",
        "type": "line",
        "source": "pittsburgh-greenways",
        "source-layer": "pittsburgh-greenways",
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
          "line-color": "#01796F",
        }
      },
      {
        "id": "pittsburgh-greenways-fill",
        "type": "fill",
        "source": "pittsburgh-greenways",
        "source-layer": "pittsburgh-greenways",
        "layout": {},
        "paint": {
          "fill-color": '#01796F',
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
