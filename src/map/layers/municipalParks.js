import {ac} from "../publishers";

export default {
  id: "municipal-parks",
  type: "vector",
  name: "Municipal Parks",
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
    sql: "SELECT * FROM greenways_final WHERE type = 'Municipal Parks'"
  },
  information: {
    description: "Municipal Parks in Allegheny County",
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
        id: "municipal-parks-borders",
        type: "line",
        source: "municipal-parks",
        "source-layer": "municipal-parks",
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
        id: "municipal-parks-fill",
        type: "fill",
        source: "municipal-parks",
        "source-layer": "municipal-parks",
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
