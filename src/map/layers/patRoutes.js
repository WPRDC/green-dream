import {pat} from "../publishers";

export default {
  id: 'transit-routes',
  type: 'vector',
  geoType: 'line',
  legend: {
    display: true,
    type: "single",
    items: [{category: 'Transit Route', color: "#9999FF"}]
  },
  legendDisplay: true,
  legendColor: "#9999FF",

  name: 'Public Transit Routes',
  category: 'transportation',
  source: {
    type: 'carto-vector',
    minzoom: 10,
    sql: 'SELECT * FROM paac_routes_1611',
  },
  information: {
    description: "Public Transit routes",
    extent: "Allegheny County",
    publisher: pat,
    source: {
      title: "WPRDC - Port Authority of Allegheny County Transit Routes",
      link: "https://data.wprdc.org/dataset/port"
    },
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "transit-routes",
        "type": "line",
        "source": "transit-routes",
        "source-layer": "transit-routes",
        "paint": {
          "line-width": {
            "stops": [
              [10, 1],
              [18, 4]
            ]
          },
          "line-color": "#9999FF",
          "line-opacity": {
            "stops": [
              [15, .5],
              [18, 1]
            ]
          }
        },
        "layout": {
          "line-cap": "round"
        }
      }
    ]
  }
}
