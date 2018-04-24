export default {
  id: 'parcels',
  type: 'vector',
  name: 'Parcels',
  geoType: 'polygon',
  legendColor: 'rgba(2, 2, 2, 1)',
  visible: true,
  source: {
    type: 'carto-vector',
    minzoom: 15,
    sql: 'SELECT * FROM allegheny_county_parcel_boundaries',
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "parcels-borders",
        "type": "line",
        "source": "parcels",
        "source-layer": "parcels",
        "layout": {},

        "paint": {
          "line-width": {
            "stops": [
              [15, 1],
              [18, 2]
            ]
          },
          "line-color": "rgba(2, 2, 2, 1)",
          "line-opacity": {
            "stops": [
              [15, 0],
              [18, .3]
            ]
          }
        }
      },
      {
        "id": "parcels-fill",
        "type": "fill",
        "interactive": true,
        "source": "parcels",
        "source-layer": "parcels",
        "layout": {},
        "paint": {
          "fill-color": '#333',
          "fill-opacity": {
            "stops": [
              [15, 0],
              [16, 0.2],
              [18, 0.2]
            ]
          }
        }
      }
    ]
  }
}
