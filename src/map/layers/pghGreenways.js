import {pgh} from "../publishers";

export default {
  id: "pittsburgh-greenways",
  type: "vector",
  name: "Greenways",
  geoType: "polygon",
  legend: {
    display: true,
    type: "single",
    items: [{ category: "Greenway", color: "#01796F" }]
  },
  legendColor: "#01796F",
  legendDisplay: true,
  category: "urban-green-features",
  visible: false,
  source: {
    type: "carto-vector",
    minzoom: 0,
    sql: "SELECT * FROM wprdc.pghodgreenways"
  },
  information: {
    description: "Greenways in the City of Pittsburgh",
    extent: "Pittsburgh",
    publisher: pgh,
    source: {
      title: "WPRDC - Greenways",
      link: "https://data.wprdc.org/dataset/greenways"
    },
  },
  layers: {
    labels: [],
    style: [
      {
        id: "pittsburgh-greenways-borders",
        type: "line",
        source: "pittsburgh-greenways",
        "source-layer": "pittsburgh-greenways",
        layout: {
          "line-join": "round"
        },
        paint: {
          "line-width": 1,
          "line-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          },
          "line-color": "#01796F"
        }
      },
      {
        id: "pittsburgh-greenways-fill",
        type: "fill",
        source: "pittsburgh-greenways",
        "source-layer": "pittsburgh-greenways",
        layout: {},
        paint: {
          "fill-color": "#01796F",
          "fill-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          }
        }
      }
    ]
  }
};
