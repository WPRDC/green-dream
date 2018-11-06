import {ac} from "../../publishers";

const color = '#BF9B37';

export default {
  id: "agricultural-easement",
  type: "vector",
  name: "Agricultural Easements",
  geoType: "polygon",
  legend: {
    display: true,
    type: "single",
    items: [{category: "Park", color: color}],
  },
  legendColor: color,
  legendDisplay: true,
  category: "urban-green-features",
  visible: false,
  source: {
    type: "carto-vector",
    minzoom: 0,
    sql: "SELECT * FROM greenways_final WHERE type = 'Agricultural Easements'"
  },
  information: {
    description: "Sensitive slope areas🏌️🏌️",
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
        id: "agricultural-easement-borders",
        type: "line",
        source: "agricultural-easement",
        "source-layer": "agricultural-easement",
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
        id: "agricultural-easement-fill",
        type: "fill",
        source: "agricultural-easement",
        "source-layer": "agricultural-easement",
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
