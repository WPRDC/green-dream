import {nasa} from '../publishers'

export default {
  id: "landslides",
  type: "vector",
  geoType: "point",
  name: "Landslides",
  legend: {
    display: true,
    type: "single",
    items: [
      {category: "Landslide", color: "black"}
    ],
  },
  legendColor: "black",
  legendDisplay: true,
  information: {
    description: "Previously reported landslides.",
    extent: "Allegheny County",
    publisher: nasa,
    source: {
      title: "WPRDC - Landslides",
      link: "https://data.wprdc.org/dataset/landslides"
    },
    notes: 'This data is reported to NASA by "Citizen Scientists" (primarily news organizations). Therefore, accuracy can not be guaranteed.'
  },
  category: "natural-features",
  visible: false,
  popupProperties: [
    { id: "ev_title", name: "Title" },
    { id: "ev_description", name: "Description" },
    { id: "src_name", name: "Reporting Source" }
  ],
  source: {
    type: "carto-vector",
    minzoom: 10,
    sql:
      "SELECT a.*, a.ev_title as map_name, a.cartodb_id as map_identifier FROM wprdc.globallandslides as a, wprdc.allegheny_county_boundary as b WHERE ST_Intersects(a.the_geom, b.the_geom) "
  },
  layers: {
    labels: [],
    style: [
      {
        id: "landslides-circle",
        type: "circle",
        source: "landslides",
        "source-layer": "landslides",
        layout: {},
        interactive: true,
        paint: {
          "circle-radius": {
            stops: [[10, 4], [15, 8]]
          },
          "circle-color": "black",
          "circle-stroke-width": { stops: [[10, 1], [15, 2]] },
          "circle-stroke-color": "black"
        }
      }
    ]
  }
};
