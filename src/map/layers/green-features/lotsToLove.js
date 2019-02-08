import {grounded} from "../../publishers";

export default {
  id: "lots-to-love",
  type: "vector",
  geoType: "point",
  name: "Lots To Love",
  legend: {
    display: true,
    type: "single",
    items: [
      {category: "Lot to Love", color: "#c53b33"}
    ],
  },
  legendColor: "#c53b33",
  legendDisplay: true,
  category: "urban-green-features",
  visible: false,
  information: {
    description: "Vacant lot projects that are implemented, in progress, or just an idea.",
    extent: "Allegheny County",
    publisher: grounded,
    source: {
      title: "WPRDC - Lots to Love",
      link: "https://data.wprdc.org/dataset/lots-to-love"
    },
    notes: ''
  },
  popupProperties: [
    { id: "map_name", name: "Name" },
    { id: "description", name: "Description" }
  ],
  source: {
    type: "vector",
    minzoom: 10,
    sql:
      "SELECT *, name as map_name, cartodb_id as map_identifier FROM lots_to_love"
  },
  layers: {
    labels: [],
    style: [
      {
        id: "lots-to-love-circle",
        type: "circle",
        source: "lots-to-love",
        "source-layer": "lots-to-love",
        layout: {},
        interactive: true,
        paint: {
          "circle-radius": {
            stops: [[10, 4], [15, 8]]
          },
          "circle-color": "#c53b33",
          "circle-stroke-width": {stops: [[10, 1], [15, 2]]},
          "circle-stroke-color": "black"
        }
      }
    ]
  }
};
