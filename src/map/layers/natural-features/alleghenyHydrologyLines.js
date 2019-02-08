import {ac} from "../../publishers";

const color = 'navy'

export default {
  id: "allegheny-county-hydrology-lines",
  type: "vector",
  name: "Hydrology Lines",
  geoType: "line",
  legend: {
    display: true,
    type: "single",
    items: [{category: "Hydrology Line", color}]
  },
  legendColor: color,
  legendDisplay: true,
  category: "natural-features",
  visible: false,
  source: {
    type: "vector",
    minzoom: 0,
    sql: "SELECT * FROM wprdc.allegheny_county_hydrology_lines"
  },
  information: {
    description: "The Hydrology Feature Dataset contains photogrammetrically compiled water drainage features and structures including rivers, streams, drainage canals, locks, dams, lakes, ponds,...",
    extent: "Allegheny County",
    publisher: ac,
    source: {
      title: "WPRDC - Allegheny County Hydrology lines",
      link: "https://data.wprdc.org/dataset/allegheny-county-hydrology-lines"
    },
  },
  layers: {
    labels: [],
    style: [
      {
        id: "allegheny-county-hydrology-lines-border",
        type: "line",
        source: "allegheny-county-hydrology-lines",
        "source-layer": "allegheny-county-hydrology-lines",
        layout: {
          "line-join": "round"
        },
        paint: {
          "line-width": 2,
          "line-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          },
          "line-color": color
        }
      }
    ]
  }
};
