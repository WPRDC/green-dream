import {ac} from "../../publishers";

const color = '#41ab5d';

export default {
  id: "park-node",
  type: "vector",
  name: "Park Nodes",
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
    sql: "SELECT * FROM greenways_final WHERE type = 'Park Node'"
  },
  information: {
    description: "Park nodes",
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
        id: "park-node-borders",
        type: "line",
        source: "park-node",
        "source-layer": "park-node",
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
        id: "park-node-fill",
        type: "fill",
        source: "park-node",
        "source-layer": "park-node",
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
