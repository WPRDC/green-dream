export default {
  id: 'neighborhoods',
  type: 'vector',
  name: 'PGH Neighborhoods',
  geoType: 'polygon',
  legendColor: '#708090',
  category: 'base-layers',
  visible: true,
  source: {
    type: 'carto-vector',
    minzoom: 0,
    sql: 'SELECT *, hood as map_identifier, hood as map_name FROM pittsburgh_neighborhoods',
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
              [0, 1],
              [9, 1],
              [18, 3]
            ]
          },
          "line-opacity": {
            "stops": [
              [10, 0],
              [13, 0.4]
            ]
          },
          "line-color": "black",
        }
      },
      {
        id: 'neighborhoods-labels',
        type: 'symbol',
        source: 'neighborhoods',
        'source-layer': 'neighborhoods',
        layout: {
          'text-field': '{hood}',
          'text-font': [
            'Open Sans Regular',
            'Arial Unicode MS Regular',
          ],
          'text-size': 11,
        },
        paint: {
          "text-opacity": {
            "stops": [
              [10, 0],
              [13,1]
            ]
          },
          'icon-color': 'rgba(193, 193, 193, 1)',
          'text-color': '#222',
          'text-halo-color': 'rgba(152, 152, 152, 0)',
        },
      },
      {
        "id": "neighborhoods-fill",
        "type": "fill",
        "interactive": true,
        "source": "neighborhoods",
        "source-layer": "neighborhoods",
        "layout": {},
        "paint": {
          "fill-color": '#708090',
          "fill-opacity": {
            "stops": [
              [10, 0],
            ]
          }
        }
      },
      {
        "id": "neighborhoods-highlight-fill",
        "type": "fill",
        "interactive": true,
        "source": "neighborhoods",
        "source-layer": "neighborhoods",
        "layout": {},
        filter: ['in', 'hood', ''],
        "paint": {
          "fill-color": '#708090',
          "fill-opacity": {
            "stops": [
              [11, 0],
              [12, 0.6],
              [15, 0.2],
              [16, 0.0]
            ]
          }
        }
      },
      {
        "id": "neighborhoods-select-fill",
        "type": "fill",
        "interactive": true,
        "source": "neighborhoods",
        "source-layer": "neighborhoods",
        "layout": {},
        filter: ['in', 'hood', ''],
        "paint": {
          "fill-color": '#5F5',
          "fill-opacity": {
            "stops": [
              [11, 0],
              [12, 0.6],
              [15, 0.2],
              [16, 0.0]
            ]
          }
        }
      },
      {
        "id": "neighborhoods-select-border",
        "type": "line",
        "interactive": true,
        "source": "neighborhoods",
        "source-layer": "neighborhoods",
        "layout": {
          "line-cap": "round"
        },
        filter: ['in', 'hood', ''],
        "paint": {
          "line-width": {
            stops: [
              [14, 4],
              [18,8]
            ]
          }
        }
      }
    ]
  }
}
