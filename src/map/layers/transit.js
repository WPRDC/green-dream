import {pat} from "../publishers";

export default {
  id: 'transit-routes',
  type: 'vector',
  geoType: 'line',
  legend: {
    display: true,
    type: "single",
    color: "black"
  },
  name: 'Public Transit Routes',
  category: 'transportation',
  source: {
    type: 'carto-vector',
    minzoom: 15,
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
          "line-width": 4,
          "line-color": "rgba(120, 2, 222, 1)",
          "line-opacity": {
            "stops": [
              [15, 0],
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
