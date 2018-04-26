export default {
  id: 'neighborhoods',
  type: 'vector',
  name: 'PGH Neighborhoods',
  geoType: 'polygon',
  legendColor: 'black',
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
    ]
  }
}
