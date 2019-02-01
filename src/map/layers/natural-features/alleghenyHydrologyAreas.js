import {ac} from "../../publishers";

const color = '#89CFF0'

export default {
  id: "allegheny-county-hydrology-areas",
  type: "vector",
  name: "Hydrology Areas",
  geoType: "polygon",
  legend: {
    display: true,
    type: "single",
    items: [{category: "Hydrology Area", color}]
  },
  legendColor: color,
  legendDisplay: true,
  category: "natural-features",
  visible: false,
  source: {
    type: "vector",
    minzoom: 0,
    sql: "SELECT * FROM wprdc.allegheny_county_hydrology_areas"
  },
  information: {
    description: "The Hydrology Feature Dataset contains photogrammetrically compiled water drainage features and structures including rivers, streams, drainage canals, locks, dams, lakes, ponds,...",
    extent: "Allegheny County",
    publisher: ac,
    source: {
      title: "WPRDC - Allegheny County Hydrology Areas",
      link: "https://data.wprdc.org/dataset/allegheny-county-hydrology-areas"
    },
  },
  layers: {
    labels: [],
    style: [
      {
        id: "allegheny-county-hydrology-areas-border",
        type: "line",
        source: "allegheny-county-hydrology-areas",
        "source-layer": "allegheny-county-hydrology-areas",
        layout: {
          "line-join": "round"
        },
        paint: {
          "line-width": 1,
          "line-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          },
          "line-color": "navy"
        }
      },
      {
        id: "allegheny-county-hydrology-areas-fill",
        type: "fill",
        source: "allegheny-county-hydrology-areas",
        "source-layer": "allegheny-county-hydrology-areas",
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
