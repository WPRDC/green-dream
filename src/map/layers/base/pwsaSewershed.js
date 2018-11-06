import {pwsa} from "../../publishers";

export default {
  id: "pwsa-combined-sewersheds",
  type: "vector",
  name: "Combined Sewershed",
  geoType: "polygon",
  legend: {
    display: true,
    type: "category",
    items: [
      {category: "Upper Mon", color: 'blue'},
      {category: "Chartiers", color: 'green'},
      {category: "Saw Mill Run", color: 'red'},
      {category: "LOGR", color: 'purple'},
      {category: "Upper Allegheny", color: 'yellow'},
      {category: "Main Rivers", color: 'orange'},
    ]
  },
  legendColor: "black",
  legendDisplay: true,
  category: "base-layers",
  visible: false,
  source: {
    type: "carto-vector",
    minzoom: 0,
    sql: "SELECT * FROM wprdc.pghcombinedsewersheds"
  },
  information: {
    description: "Combined sewersheds in the City of Pittsburgh.",
    extent: "Pittsburgh",
    publisher: pwsa,
    source: {
      title: "WPRDC - Combined Sewershed",
      link: "https://data.wprdc.org/dataset/combined-sewershed"
    },
  },
  layers: {
    labels: [],
    style: [
      {
        id: "pwsa-combined-sewersheds-border",
        type: "line",
        source: "pwsa-combined-sewersheds",
        "source-layer": "pwsa-combined-sewersheds",
        layout: {
          "line-join": "round"
        },
        paint: {
          "line-width": 1,
          "line-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          },
          "line-color": "black"
        }
      },
      {
        id: "pwsa-combined-sewersheds-fill",
        type: "fill",
        source: "pwsa-combined-sewersheds",
        "source-layer": "pwsa-combined-sewersheds",
        layout: {},
        paint: {
          "fill-color": {
            property: "mod_basin",
            type: "categorical",
            stops: [
              ["Upper Mon", 'blue'],
              ["Chartiers", 'green'],
              ["Saw Mill Run", 'red'],
              ["LOGR", 'purple'],
              ["Upper Allegheny", 'yellow'],
              ["Main Rivers", 'orange'],
            ]
          },
          "fill-opacity": {
            stops: [[8, 0], [13, 0.1], [18, 0.1]]
          }
        }
      }
    ]
  }
};
