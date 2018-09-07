import {ac} from "../../publishers";

const color = '#4F4D24';

export default {
  id: "trails",
  type: "vector",
  name: "Trails",
  geoType: "line",
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
    sql: "SELECT * FROM greenways_final WHERE type = 'Trails'"
  },
  information: {
    description: "Trails throughout Allegheny County🏌️🏌️",
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
        id: "trails-borders",
        type: "line",
        source: "trails",
        "source-layer": "trails",
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
        id: "trails-fill",
        type: "fill",
        source: "trails",
        "source-layer": "trails",
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
