export default {
  id: 'pittsburgh-flood-zones',
  type: 'vector',
  name: 'PGH Flood Zones',
  geoType: 'polygon',
  legendColor: '#007791',
  category: 'natural-hazards',
  visible: true,
  source: {
    type: 'carto-vector',
    minzoom: 0,
    sql: 'SELECT * FROM wprdc.pittsburgh_fema_flood_zones',
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "pittsburgh-flood-zones-border",
        "type": "line",
        "source": "pittsburgh-flood-zones",
        "source-layer": "pittsburgh-flood-zones",
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
          "line-color": "#082567",
        }
      },
      {
        "id": "pittsburgh-flood-zones-fill",
        "type": "fill",
        "source": "pittsburgh-flood-zones",
        "source-layer": "pittsburgh-flood-zones",
        "layout": {},
        "paint": {
          "fill-color": '#007791',
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
