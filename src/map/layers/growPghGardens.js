export default {
  id: "grow-pgh-gardens",
  type: "vector",
  geoType: "point",
  name: "Grow Pittsburgh Gardens",
  legendColor: "#0F2",
  legendDisplay: true,
  category: "green-infrastructure",
  visible: true,
  source: {
    type: "carto-vector",
    minzoom: 10,
    sql: "SELECT * FROM growpghgardens201712"
  },
  layers: {
    labels: [],
    style: [
      {
        id: "grow-pgh-gardens",
        type: "circle",
        source: "grow-pgh-gardens",
        "source-layer": "grow-pgh-gardens",
        layout: {},
        paint: {
          "circle-radius": {
            stops: [[10, 2], [15, 5]]
          },
          "circle-color": "#0F2",
          "circle-stroke-width": {stops: [[10,1], [15,2]]},
          "circle-stroke-color": "#013220"
        }
      }
    ]
  }
};
