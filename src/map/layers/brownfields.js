export default {
  id: "brownfields",
  type: "vector",
  geoType: "point",
  name: "EPA Brownfields",
  legendColor: "brown",
  legendDisplay: true,
  category: "other",
  visible: false,
  popupProperties: [
    { id: "grant_recipient_name", name: "Grant Recipient Name" },
    { id: "type_of_funding", name: "Type of Funding" },
    { id: "current_owner", name: "Current Owner" },

  ],
  source: {
    type: "carto-vector",
    minzoom: 10,
    sql: "SELECT *, property_name as map_name, cartodb_id as map_identifier FROM brownfields"
  },
  layers: {
    labels: [],
    style: [
      {
        id: "brownfields-circle",
        type: "circle",
        source: "brownfields",
        "source-layer": "brownfields",
        layout: {},
        interactive: true,
        paint: {
          "circle-radius": {
            stops: [[10, 2], [15, 5]]
          },
          "circle-color": "brown",
          "circle-stroke-width": {stops: [[10,1], [15,2]]},
          "circle-stroke-color": "#013220"
        }
      }
    ]
  }
};
