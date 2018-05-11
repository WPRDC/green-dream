export default {
  id: "city-steps",
  type: "vector",
  name: "City Steps",
  category: "transportation",
  visible: false,
  geoType: "line",
  legend: {
    display: true,
    type: "single",
    items: [{ category: "City Steps", color: "rgba(120, 2, 222, 1)" }]
  },
  legendColor: "rgba(120, 2, 222, 1)",
  legendDisplay: true,
  source: {
    type: "carto-vector",
    minzoom: 10,
    sql: "SELECT * FROM stepsimg"
  },
  layers: {
    labels: [],
    style: [
      {
        id: "city-steps-routes",
        type: "line",
        source: "city-steps",
        "source-layer": "city-steps",
        paint: {
          "line-width": {
            stops: [[10, 0], [15, 4]]
          },
          "line-color": "rgba(120, 2, 222, 1)",
          "line-opacity": {
            stops: [[10, 0], [15, 1]]
          }
        },
        layout: {
          "line-cap": "round"
        }
      }
    ]
  }
};
