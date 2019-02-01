import {ac} from "../../publishers";

export default {
  id: "allegheny-parks",
  type: "vector",
  name: "County Parks",
  geoType: "polygon",
  legend: {
    display: true,
    type: "single",
    items: [{category: "Park", color: "#00441b"}],
  },
  legendColor: "#00441b",
  legendDisplay: true,
  category: "urban-green-features",
  visible: false,
  source: {
    type: "vector",
    minzoom: 0,
    sql: "SELECT * FROM allegheny_county_parks_outlines_2"
  },
  information: {
    description: "Parks managed by Allegheny County",
    extent: "Allegheny County",
    publisher: ac,
    source: {
      title: "WPRDC - Allegheny County Parks",
      link: "https://data.wprdc.org/dataset/allegheny-county-parks-outlines"
    },
  },
  layers: {
    labels: [],
    style: [
      {
        id: "allegheny-parks-borders",
        type: "line",
        source: "allegheny-parks",
        "source-layer": "allegheny-parks",
        layout: {
          "line-join": "round"
        },
        paint: {
          "line-width": 1,
          "line-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          },
          "line-color": "#00441b"
        }
      },
      {
        id: "allegheny-parks-fill",
        type: "fill",
        source: "allegheny-parks",
        "source-layer": "allegheny-parks",
        layout: {},
        paint: {
          "fill-color": "#00441b",
          "fill-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          }
        }
      }
    ]
  }
};
