import {pwsa} from "../publishers";

export default {
  id: 'pwsa-gi-concept',
  type: 'vector',
  geoType: 'polygon',
  legend: {
    display: true,
    type: "category",
    items: [
      {'category': 'A42-M29-M16', color: "blue"},
      {'category': 'A42-O27-M19', color: "green"}
      ]
  },
  legendDisplay: true,
  legendColor: "black",

  name: 'Green First Plan',
  category: 'other',
  source: {
    type: 'carto-vector',
    minzoom: 10,
    sql: 'SELECT \'cwa42m29m16\' as type, cartodb_id, the_geom, the_geom_webmercator \n' +
      ' FROM wprdc.cwa42m29m16giconcept\n' +
      'UNION\n' +
      'SELECT \'cwa41o27m19\' as type, (cartodb_id + 2000) as cartodb_id, the_geom, the_geom_webmercator \n' +
      ' FROM wprdc.cwa41o27m19giconcept',
  },
  information: {
    description: "Identifies opportunity sites throughout various sewersheds for stormwater infrastructure that could fulfill both stormwater management needs and support healthy communities and neighborhoods.",
    extent: "Pittsburgh",
    publisher: pwsa,
    source: {
      title: "WPRDC - A42-M29-M16 Green Infrastructure Concept",
      link: "https://data.wprdc.org/dataset/a42-m29-m16-gi-concept"
    },
  },
  layers: {
    labels: [],
    style: [
      {
        id: "pwsa-gi-concept-border",
        type: "line",
        source: "pwsa-gi-concept",
        "source-layer": "pwsa-gi-concept",
        layout: {
          "line-join": "round"
        },
        paint: {
          "line-width": 1,
          "line-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          },
          "line-color": "black"
        }
      },
      {
        id: "pwsa-gi-concept-fill",
        type: "fill",
        source: "pwsa-gi-concept",
        "source-layer": "pwsa-gi-concept",
        layout: {},
        paint: {
          "fill-color": {
            property: "type",
            type: "categorical",
            stops: [
              ["cwa42m29m16", 'blue'],
              ["cwa41o27m19", 'green'],
            ]
          },
          "fill-opacity": {
            stops: [[8, 0], [13, 0.4], [18, 0.8]]
          }
        }
      }
    ]
  }
}
