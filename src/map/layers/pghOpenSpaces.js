export default {
  id: "pgh-parks-openspace",
  type: "vector",
  name: "Open Space Plan",
  geoType: "polygon",
  legend: {
    display: true,
    type: "category",
    items: [
      {category: "Divest", color: '#66c2a5'},
      {category: "Invest", color: '#fc8d62'},
      {category: "Redevelop", color: '#8da0cb'},
      {category: "Expand", color: '#e78ac3'},
      {category: "Naturalize", color: '#a6d854'},
    ]
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
              ['divest', "#66c2a5"],
              ['invest', "#fc8d62"],
              ['redevelop', "#8da0cb"],
              ['expand', "#e78ac3"],
              ['naturalize', "#a6d854"]
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
