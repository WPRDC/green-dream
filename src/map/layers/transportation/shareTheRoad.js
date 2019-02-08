import {ac} from "../../publishers";

const color = '#89837E';

export default {
  id: "share-the-road",
  type: "vector",
  name: "Bike Lane/Share the Road",
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
    type: "vector",
    minzoom: 0,
    sql: "SELECT * FROM greenways_final WHERE type LIKE 'BIKE%'"
  },
  information: {
    description: "Areas designated as Bike Lanes",
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
        id: "share-the-road-borders",
        type: "line",
        source: "share-the-road",
        "source-layer": "share-the-road",
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
        id: "share-the-road-fill",
        type: "fill",
        source: "share-the-road",
        "source-layer": "share-the-road",
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
