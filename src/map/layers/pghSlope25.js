export default {
  id: 'pittsburgh-slope-25',
  type: 'vector',
  name: 'PGH Slope > 25%',
  geoType: 'polygon',
  legendColor: '#708090',
  category: 'base-layers',
  visible: false,
  source: {
    type: 'carto-vector',
    minzoom: 0,
    sql: 'SELECT * FROM wprdc.slope25polygon_pgh_1 WHERE objectid = 2',
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "pittsburgh-slope-25-border",
        "type": "line",
        "source": "pittsburgh-slope-25",
        "source-layer": "pittsburgh-slope-25",
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
          "line-color": "#708090",
        }
      },
      {
        "id": "pittsburgh-slope-25-fill",
        "type": "fill",
        "source": "pittsburgh-slope-25",
        "source-layer": "pittsburgh-slope-25",
        "layout": {},
        "paint": {
          "fill-color": '#708090',
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
