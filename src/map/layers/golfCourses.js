import {ac} from "../publishers";

export default {
  id: "golf-courses",
  type: "vector",
  name: "Golf Courses",
  geoType: "polygon",
  legend: {
    display: true,
    type: "single",
    items: [{category: "Park", color: "#4c7737"}],
  },
  legendColor: "#4c7737",
  legendDisplay: true,
  category: "urban-green-features",
  visible: false,
  source: {
    type: "carto-vector",
    minzoom: 0,
    sql: "SELECT * FROM greenways_final WHERE type = 'Golf Courses'"
  },
  information: {
    description: "Golf courses in Allegheny County🏌️ \uFE0F🏌️🏌️",
    extent: "Allegheny County",
    publisher: ac,
    source: {
      title: "WPRDC - Allegheny County Greenways",
      link: "https://data.wprdc.org/dataset/allegheny-county-greenways"
    },
  },
  layers: {
    labels: [],
    style: [
      {
        id: "golf-courses-borders",
        type: "line",
        source: "golf-courses",
        "source-layer": "golf-courses",
        layout: {
          "line-join": "round"
        },
        paint: {
          "line-width": 1,
          "line-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          },
          "line-color": "#4c7737"
        }
      },
      {
        id: "golf-courses-fill",
        type: "fill",
        source: "golf-courses",
        "source-layer": "golf-courses",
        layout: {},
        paint: {
          "fill-color": "#4c7737",
          "fill-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          }
        }
      }
    ]
  }
};
