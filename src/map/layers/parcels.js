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
    sql: `SELECT pb.*, (asmt.propertyhousenum || ' ' || asmt.propertyaddress || ' ' || asmt.propertycity || ' ' || asmt.propertystate || ' ' || asmt.propertyzip) as map_name, pb.pin as map_identifier FROM wprdc.allegheny_county_parcel_boundaries as pb JOIN wprdc.assessments as asmt ON pb.pin = asmt.parid`
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "parcels-select-fill",
        "type": "fill",
        "source": "parcels",
        "source-layer": "parcels",
        filter: ['in', 'pin', ''],

        "layout": {},
        "paint": {
          "fill-color": '#5F5',
          "fill-opacity": 1,
          // 'fill-extrusion-color': 'blue',
          //
          // // Get fill-extrusion-height from the source 'height' property.
          // 'fill-extrusion-height': 5,
          //
          // // Get fill-extrusion-base from the source 'base_height' property.
          // 'fill-extrusion-base': 0,
          //
          // // Make extrusions slightly opaque for see through indoor walls.
          // 'fill-extrusion-opacity': 1
        },
      },
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
      },
      {
        "id": "parcels-highlight-fill",
        "type": "fill",
        "interactive": true,
        "source": "parcels",
        "source-layer": "parcels",
        "layout": {},
        filter: ['in', 'pin', ''],
        "paint": {
          "fill-color": '#222',
          "fill-opacity": {
            "stops": [
              [15, 0],
              [16, 0.2],
              [18, 0.2]
            ]
          }
        }
      },

      // {
      //   "id": "parcels-select-fill",
      //   "type": "fill",
      //   "interactive": true,
      //   "source": "parcels",
      //   "source-layer": "parcels",
      //   "layout": {},
      //   filter: ['in', 'pin', ''],
      //   "paint": {
      //     "fill-color": 'blue',
      //     "fill-opacity": 0.8
      //   }
      // },
      {
        "id": "parcels-select-border",
        "type": "line",
        "interactive": true,
        "source": "parcels",
        "source-layer": "parcels",
        "layout": {
          "line-cap": "round"
        },
        filter: ['in', 'pin', ''],
        "paint": {
          "line-width": {
            stops: [
              [14, 2],
              [18,5]
            ]
          }
        }
      }
    ]
  }
}

