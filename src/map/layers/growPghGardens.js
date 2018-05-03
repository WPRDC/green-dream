import Place from 'material-ui-icons/Place'

export default {
  id: 'grow-pgh-gardens',
  type: 'vector',
  geoType: 'point',
  name: 'Grow Pittsburgh Gardens',
  legendColor: '#0F2',
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
        "type": "symbol",
        "source": "grow-pgh-gardens",
        "source-layer": "grow-pgh-gardens",
        "layout": {
          'symbol-placement': 'point',
          'icon-image': 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-256.png',
        },
        "paint": {}
      }
    ]
  }
}
