export default {
  id: "lots-to-love",
  type: "vector",
  geoType: "point",
  name: "grounded Lots To Love",
  legend: {
    display: true,
    type: "single",
    items: [
      {category: "Lot to Love", color: "#39ff01"}
    ],
  },
  legendColor: "#39ff01",
  legendDisplay: true,
  category: "urban-green-features",
  visible: false,
  popupProperties: [
    { id: "map_name", name: "Name" },
    { id: "description", name: "Description" }
  ],
  source: {
    type: "carto-vector",
    minzoom: 10,
    sql:
      "SELECT *, name as map_name, cartodb_id as map_identifier FROM lots_to_love"
  },
  layers: {
    labels: [],
    style: [
      {
        id: "lots-to-love-circle",
        type: "circle",
        source: "lots-to-love",
        "source-layer": "lots-to-love",
        layout: {},
        interactive: true,
        paint: {
          "circle-radius": {
            stops: [[10, 4], [15, 8]]
          },
          "circle-color": "#39ff01",
          "circle-stroke-width": {stops: [[10, 1], [15, 2]]},
          "circle-stroke-color": "#013220"
        }
      }
    ]
  }
};
