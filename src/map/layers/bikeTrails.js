export default {
  id: "bike-trails",
  type: "vector",
  name: "Bike Trails",
  category: "transportation",
  visible: false,
  geoType: "line",
  legend: {
    display: true,
    type: "single",
    items: [{category: "Bike Trail", color: "#5C5248"}],
  },
  legendColor: "#5C5248",
  legendDisplay: true,
  source: {
    type: "carto-vector",
    minzoom: 8,
    sql: "SELECT * FROM bike_trails_may17"
  },
  layers: {
    labels: [],
    style: [
      {
        id: "bike-trails",
        type: "line",
        source: "bike-trails",
        "source-layer": "bike-trails",
        paint: {
          "line-width": {
            stops: [[10, 1], [15, 4]]
          },
          "line-color": "#5C5248",
          "line-opacity": {
            stops: [[10, 1], [15, 1]]
          }
        },
        layout: {
          "line-cap": "round"
        }
      }
    ]
  }
};
