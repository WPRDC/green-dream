import {ac} from "../../publishers";

const color = '#f781bf'

export default {
  id: "golf-courses",
  type: "vector",
  name: "Golf Courses",
  geoType: "polygon",
  legend: {
    display: true,
    type: "single",
    items: [{category: "Golf Course", color: color}],
  },
  legendColor: color,
  legendDisplay: true,
  category: "urban-green-features",
  visible: false,
  source: {
    type: "carto-vector",
    minzoom: 0,
    sql: "SELECT * FROM greenways_final WHERE type = 'Golf Courses'"
  },
  information: {
    description: "Golf courses in Allegheny County",
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
          "line-color": color
        }
      },
      {
        id: "golf-courses-fill",
        type: "fill",
        source: "golf-courses",
        "source-layer": "golf-courses",
        layout: {},
        paint: {
          "fill-color": color,
          "fill-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          }
        }
      }
    ]
  }
};
