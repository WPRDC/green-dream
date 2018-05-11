export default {
  id: 'pittsburgh-parks',
  type: 'vector',
  geoType: 'polygon',
  legend: {
    display: true,
    type: "single",
    items: [{category: "Park", color: "green"}],
  },
  legendColor: 'green',
  legendDisplay: true,
  name: 'PGH Parks',
  category: 'urban-green-features',
  visible: false,
  source: {
    type: 'carto-vector',
    minzoom: 0,
    sql: 'SELECT *, objectid as map_identifier, updatepknm as map_name FROM wprdc.pittsburgh_parks',
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "pittsburgh-parks-borders",
        "type": "line",
        "source": "pittsburgh-parks",
        "source-layer": "pittsburgh-parks",
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
          "line-color": "green",
        }
      },
      {
        "id": "pittsburgh-parks-fill",
        "type": "fill",
        "interactive": true,
        "source": "pittsburgh-parks",
        "source-layer": "pittsburgh-parks",
        "layout": {},
        "paint": {
          "fill-color": 'green',
          "fill-opacity": {
            "stops": [
              [8, 0],
              [13, 0.2],
              [18, 0.4]
            ]
          }
        }
      },
      // {
      //
      //   "id": "pittsburgh-parks-fill-extrusion",
      //   "type": "fill-extrusion",
      //   "source": "pittsburgh-parks",
      //   "source-layer": "pittsburgh-parks",
      //   "layout": {},
      //   "paint": {
      //     'fill-extrusion-color': 'green',
      //
      //     // Get fill-extrusion-height from the source 'height' property.
      //     'fill-extrusion-height': 250,
      //
      //     // Get fill-extrusion-base from the source 'base_height' property.
      //     'fill-extrusion-base': 100,
      //
      //     // Make extrusions slightly opaque for see through indoor walls.
      //     'fill-extrusion-opacity': 1
      //   }
      // },

    ]
  }
}
