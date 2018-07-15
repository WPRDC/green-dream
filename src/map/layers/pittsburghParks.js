import {pgh} from "../publishers";

export default {
  id: 'pittsburgh-parks',
  type: 'vector',
  geoType: 'polygon',
  legend: {
    display: true,
    type: "single",
    items: [{category: "Park", color: "#7bc24e"}],
  },
  legendColor: '#7bc24e',
  legendDisplay: true,
  name: 'City Parks',
  category: 'urban-green-features',
  visible: false,
  source: {
    type: 'carto-vector',
    minzoom: 0,
    sql: 'SELECT *, objectid as map_identifier, updatepknm as map_name FROM wprdc.pittsburgh_parks',
  },
  information: {
    description: "Parks managed by the City of Pittsburgh",
    extent: "Pittsburgh",
    publisher: pgh,
    source: {
      title: "WPRDC - Pittsburgh Parks",
      link: "https://data.wprdc.org/dataset/pittsburgh-parks"
    },
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "pittsburgh-parks-borders",
        "type": "line",
        "source": "pittsburgh-parks",
        "source-layer": "pittsburgh-parks",
        "layout": {
          "line-join": "round",
        },
        "paint": {
          "line-width": 1,
          "line-opacity": {
            "stops": [
              [8, 0],
              [13, 0.5],
              [18, 0.8]
            ]
          },
          "line-color": "#7bc24e",
        }
      },
      {
        "id": "pittsburgh-parks-fill",
        "type": "fill",
        "interactive": true,
        "source": "pittsburgh-parks",
        "source-layer": "pittsburgh-parks",
        "layout": {},
        "paint": {
          "fill-color": '#7bc24e',
          "fill-opacity": {
            "stops": [
              [8, 0],
              [13, 0.2],
              [18, 0.4]
            ]
          }
        }
      },
    ]
  }
}
