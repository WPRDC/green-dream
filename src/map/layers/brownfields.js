import {epa} from "../publishers";

export default {
  id: "brownfields",
  type: "vector",
  geoType: "point",
  name: "Brownfields",
  legend: {
    display: true,
    type: "single",
    items: [
      {category: "Brownfield", color: "#80632d"}
    ],
  },
  legendColor: "#80632d",
  legendDisplay: true,
  category: "other",
  visible: false,
  popupProperties: [
    { id: "grant_recipient_name", name: "Grant Recipient Name" },
    { id: "type_of_funding", name: "Type of Funding" },
    { id: "current_owner", name: "Current Owner" }
  ],
  source: {
    type: "carto-vector",
    minzoom: 10,
    sql:
      "SELECT *, property_name as map_name, cartodb_id as map_identifier FROM brownfields"
  },
  information: {
    description: "EPA’s Brownfields Program provides grants and technical assistance to communities, states, tribes and others to assess, safely clean up and sustainably reuse contaminated properties.",
    extent: "Allegheny County",
    publisher: epa,
    // source: {
    //   title: "WPRDC - Pittsburgh Bike Map Geographic Data",
    //   link: "https://data.wprdc.org/dataset/shape-files-for-bikepgh-s-pittsburgh-bike-map\n"
    // },
  },
  layers: {
    labels: [],
    style: [
      {
        id: "brownfields-circle",
        type: "circle",
        source: "brownfields",
        "source-layer": "brownfields",
        layout: {},
        interactive: true,
        paint: {
          "circle-radius": {
            stops: [[10, 4], [15, 8]]
          },
          "circle-color": "#80632d",
          "circle-stroke-width": { stops: [[10, 1], [15, 2]] },
          "circle-stroke-color": "black"
        }
      }
    ]
  }
};
