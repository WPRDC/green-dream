import {ac} from "../publishers";

export default {
  id: "slope-25",
  type: "vector",
  name: "Slope > 25%",
  geoType: "polygon",
  legend: {
    display: true,
    type: "single",
    items: [{ category: "Slope > 25%", color: "#708090" }]
  },
  legendColor: "#708090",
  legendDisplay: true,
  category: "natural-features",
  visible: false,
  source: {
    type: "carto-vector",
    minzoom: 0,
    sql: "SELECT * FROM wprdc.slope_25"
  },
  information: {
    description: "Land with a slope greater than 25%",
    extent: "Allegheny County",
    publisher: ac,
    source: {
      title: "WPRDC - Slope > 25%",
      link: "https://data.wprdc.org/dataset/slope-25"
    },
  },
  layers: {
    labels: [],
    style: [
      {
        id: "slope-25-border",
        type: "line",
        source: "slope-25",
        "source-layer": "slope-25",
        layout: {
          "line-join": "round"
        },
        paint: {
          "line-width": 1,
          "line-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          },
          "line-color": "#708090"
        }
      },
      {
        id: "slope-25-fill",
        type: "fill",
        source: "slope-25",
        "source-layer": "slope-25",
        layout: {},
        paint: {
          "fill-color": "#708090",
          "fill-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          }
        }
      }
    ]
  }
};
