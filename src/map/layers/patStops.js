import {pat} from "../publishers";

export default {
  id: 'transit-stops',
  type: 'vector',
  geoType: 'point',
  legend: {
    display: true,
    type: "single",
    items: [{category: 'Transit Stop', color: "#4C4C7F"}]
  },
  legendDisplay: true,
  legendColor: "#4C4C7F",
  name: 'Public Transit Stops',
  category: 'transportation',
  source: {
    type: 'carto-vector',
    minzoom: 10,
    sql: 'SELECT * FROM paac_stops_1611',
  },
  information: {
    description: "Public Transit stops",
    extent: "Allegheny County",
    publisher: pat,
    source: {
      title: "WPRDC - Port Authority of Allegheny County Transit Stops",
      link: "https://data.wprdc.org/dataset/port-authority-of-allegheny-county-transit-stops"
    },
  },
  layers: {
    labels: [],
    style:  [
      {
        id: "transit-stops-circle",
        type: "circle",
        source: "transit-stops",
        "source-layer": "transit-stops",
        layout: {},
        interactive: true,
        paint: {
          "circle-radius": {
            stops: [[10, 2], [15, 5]]
          },
          "circle-color": "#4C4C7F",
          "circle-stroke-width": { stops: [[10, .3], [15, 2]] },
          "circle-stroke-color": "black"
        }
      }
    ]
  }
}
