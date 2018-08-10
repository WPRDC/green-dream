import {hr} from "../publishers";

export default {
  id: 'healthy-ride-stations',
  type: 'vector',
  geoType: 'point',
  legend: {
    display: true,
    type: "single",
    items: [{category: 'Healthy Ride Station', color: "#00abe0"}]
  },
  legendDisplay: true,
  legendColor: "#00abe0",

  name: 'Healthy Ride Stations',
  category: 'transportation',
  source: {
    type: 'carto-vector',
    minzoom: 10,
    sql: 'SELECT * FROM healthyridestations2017',
  },
  information: {
    description: "Healthy Ride Stations",
    extent: "Pittsburgh",
    publisher: hr,
    source: {
      title: "WPRDC - Healthy Ride Stations",
      link: "https://data.wprdc.org/dataset/healthyride-stations"
    },
  },
  layers: {
    labels: [],
    style:  [
      {
        id: "healthy-ride-stations-circle",
        type: "circle",
        source: "healthy-ride-stations",
        "source-layer": "healthy-ride-stations",
        layout: {},
        interactive: true,
        paint: {
          "circle-radius": {
            stops: [[10, 2], [15, 5]]
          },
          "circle-color": "#00abe0",
          "circle-stroke-width": { stops: [[10, .3], [15, 2]] },
          "circle-stroke-color": "black"
        }
      }
    ]
  }
}
