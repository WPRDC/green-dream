import {ac} from "../../publishers";

const color = '#4c7737';

export default {
  id: "land-trust-property",
  type: "vector",
  name: "Land Trust Property",
  geoType: "polygon",
  legend: {
    display: true,
    type: "single",
    items: [{category: "Land Trust Property", color: color}],
  },
  legendColor: color,
  legendDisplay: true,
  category: "urban-green-features",
  visible: false,
  source: {
    type: "vector",
    minzoom: 0,
    sql: "SELECT * FROM greenways_final WHERE type = 'Land Trust Property'"
  },
  information: {
    description: "Properties owned by Land Trusts",
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
        id: "land-trust-property-borders",
        type: "line",
        source: "land-trust-property",
        "source-layer": "land-trust-property",
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
        id: "land-trust-property-fill",
        type: "fill",
        source: "land-trust-property",
        "source-layer": "land-trust-property",
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
