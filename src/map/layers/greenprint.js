import {alt} from "../publishers";

export default {
  id: "greenprint",
  type: "vector",
  name: "Original Greenprint",
  geoType: "polygon",
  legend: {
    display: true,
    type: "single",
    items: [{ category: "Greenprint", color: "#a5ffb9" }]
  },
  legendColor: "#a5ffb9",
  legendDisplay: true,
  category: "urban-green-features",
  visible: false,
  source: {
    type: "carto-vector",
    minzoom: 0,
    sql: "SELECT * FROM wprdc.greenprint"
  },
  information: {
    description: "Original ALT Greenprint Plan",
    extent: "Allegheny County",
    publisher: alt,
    // source: {
    //   title: "WPRDC - Pittsburgh City Steps",
    //   link: "https://data.wprdc.org/dataset/city-steps"
    // },
  },
  layers: {
    labels: [],
    style: [
      {
        id: "greenprint-border",
        type: "line",
        source: "greenprint",
        "source-layer": "greenprint",
        layout: {
          "line-join": "round"
        },
        paint: {
          "line-width": 1,
          "line-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          },
          "line-color": "#222"
        }
      },
      {
        id: "greenprint-fill",
        type: "fill",
        source: "greenprint",
        "source-layer": "greenprint",
        layout: {},
        paint: {
          "fill-color": "#a5ffb9",
          "fill-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          }
        }
      }
    ]
  }
};
