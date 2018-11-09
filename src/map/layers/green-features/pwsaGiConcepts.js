import {pwsa} from "../../publishers";

export default {
  id: 'pwsa-gi-concept',
  type: 'vector',
  geoType: 'polygon',
  legend: {
    display: true,
    type: "category",
    items: [
      {'category': 'Detention', color: "blue"},
      {'category': 'Bioswale', color: "green"},
      {'category': 'Pervious', color: "Red"},
      {'category': 'Retention', color: "navy"}
    ]
  },
  legendDisplay: true,
  legendColor: "black",

  name: 'Green First Plan',
  category: 'urban-green-features-planned',
  source: {
    type: 'carto-vector',
    minzoom: 10,
    sql: `SELECT 'cwa42m29m16' as grp, layer as type,  cartodb_id, the_geom, the_geom_webmercator
FROM wprdc.cwa42m29m16giconcept
UNION

SELECT 'cwa41o27m19' as grp, 
CASE 
 WHEN bmp = 'Major Storage' THEN 'p-retention'
 WHEN bmp = 'Distributed Storage' THEN 'p-detention'
 ELSE 'other'
END AS type, 

(cartodb_id + 2000) as cartodb_id, the_geom, the_geom_webmercator
FROM wprdc.cwa41o27m19giconcept`
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
              ["p-detention", 'blue'],
              ["p-bioswale", 'green'],
              ["p-pervious", 'red'],
              ["p-retention", 'navy'],
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
