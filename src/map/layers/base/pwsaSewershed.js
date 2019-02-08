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
      {category: "Upper Mon", color: '#e41a1c'},
      {category: "Chartiers", color: '#377eb8'},
      {category: "Saw Mill Run", color: '#4daf4a'},
      {category: "LOGR", color: '#984ea3'},
      {category: "Upper Allegheny", color: '#ff7f00'},
      {category: "Main Rivers", color: '#ffff33'},
    ]
  },
  legendColor: "black",
  legendDisplay: true,
  category: "base-layers",
  visible: false,
  source: {
    type: "vector",
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
              ["Upper Mon", '#e41a1c'],
              ["Chartiers", '#377eb8'],
              ["Saw Mill Run", '#4daf4a'],
              ["LOGR", '#984ea3'],
              ["Upper Allegheny", '#ff7f00'],
              ["Main Rivers", '#ffff33'],
            ]
          },
          "fill-opacity": {
            stops: [[8, 0], [13, 0.2], [18, 0.2]]
          }
        }
      }
    ]
  }
};
