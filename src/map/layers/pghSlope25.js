import {pgh} from "../publishers";

export default {
  id: "pittsburgh-slope-25",
  type: "vector",
  name: "PGH Slope > 25%",
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
    sql: "SELECT * FROM wprdc.slope25polygon_pgh_1 WHERE objectid = 2"
  },
  information: {
    description: "Land in Pittsburgh with a sloper greater than 25%",
    extent: "Pittsburgh",
    publisher: pgh,
    source: {
      title: "WPRDC - 25% or Greater Slope",
      link: "https://data.wprdc.org/dataset/25-or-greater-slope"
    },
  },
  layers: {
    labels: [],
    style: [
      {
        id: "pittsburgh-slope-25-border",
        type: "line",
        source: "pittsburgh-slope-25",
        "source-layer": "pittsburgh-slope-25",
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
        id: "pittsburgh-slope-25-fill",
        type: "fill",
        source: "pittsburgh-slope-25",
        "source-layer": "pittsburgh-slope-25",
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
