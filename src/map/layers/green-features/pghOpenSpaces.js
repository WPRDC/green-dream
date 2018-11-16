import {pgh} from "../../publishers";

export default {
  id: "pgh-parks-openspace",
  type: "vector",
  name: "Open Space Plan",
  geoType: "polygon",
  legend: {
    display: true,
    type: "category",
    items: [
      {category: "Divest", color: '#8dd3c7'},
      {category: "Invest", color: '#ffffb3'},
      {category: "Redevelop", color: '#bebada'},
      {category: "Expand", color: '#fb8072'},
      {category: "Naturalize", color: '#80b1d3'},
    ]
  },
  information: {
    description: "City of Pittsburgh Open Space Plan",
    extent: "Pittsburgh",
    publisher: pgh,
  },
  legendColor: "green",
  legendDisplay: true,
  category: "urban-green-features",
  visible: false,
  source: {
    type: "carto-vector",
    minzoom: 0,
    sql: `SELECT *, objectid as map_id, park_name as map_name,
      CASE
        WHEN divest = 'x' THEN 'divest'
        WHEN invest = 'x' THEN 'invest'
        WHEN redevelop = 'x'  THEN 'redevelop'
        WHEN expand = 'x'  THEN 'expand'
        WHEN naturalize = 'x'  THEN 'naturalize'
        ELSE ''
      END as plan
    FROM wprdc.pghwebparksosptransition`
  },
  layers: {
    labels: [],
    style: [
      {
        id: "pgh-parks-openspace-borders",
        type: "line",
        source: "pgh-parks-openspace",
        "source-layer": "pgh-parks-openspace",
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
        id: "pgh-parks-openspace-fill",
        type: "fill",
        source: "pgh-parks-openspace",
        "source-layer": "pgh-parks-openspace",
        layout: {},
        paint: {
          "fill-color": {
            property: "plan",
            type: "categorical",
            stops: [
              ['divest', "#8dd3c7"],
              ['invest', "#ffffb3"],
              ['redevelop', "#bebada"],
              ['expand', "#fb8072"],
              ['naturalize', "#80b1d3"]
            ]
          },
          "fill-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          }
        }
      }
    ]
  }
};
