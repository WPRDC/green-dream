export default {
  id: "allegheny-land-use-areas",
  type: "vector",
  name: "Allegheny County Land Use Areas",
  geoType: "polygon",
  legend: {
    display: true,
    type: "category",
    items: [
      {category: "Uncoded Land Area", color: 'blue'},
      {category: "Woodland", color: 'green'},
      {category: "Nursery or Orchard", color: 'red'},
      {category: "Cultivated Field", color: 'purple'},
      {category: "Athletic Field", color: 'yellow'},
    ]
  },
  legendColor: "green",
  legendDisplay: true,
  category: "natural-features",
  visible: false,
  source: {
    type: "carto-vector",
    minzoom: 0,
    sql: `SELECT *,
  CASE
  	WHEN featurecod = 300 THEN 'Uncoded Land Area'
  	WHEN featurecod = 310 THEN 'Woodland'
  	WHEN featurecod = 340 THEN 'Nursery or Orchard'
  	WHEN featurecod = 350 THEN 'Cultivated Field'
  	WHEN featurecod = 620 THEN 'Athletic Field'
      ELSE ''
  END as feature
FROM wprdc.allegheny_county_land_use_areas`
  },
  layers: {
    labels: [],
    style: [
      {
        id: "allegheny-land-use-areas-borders",
        type: "line",
        source: "allegheny-land-use-areas",
        "source-layer": "allegheny-land-use-areas",
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
        id: "allegheny-land-use-areas-fill",
        type: "fill",
        source: "allegheny-land-use-areas",
        "source-layer": "allegheny-land-use-areas",
        layout: {},
        paint: {
          "fill-color": {
            property: "featurecod",
            type: "categorical",
            stops: [
              [300, "blue"],
              [310, "green"],
              [340, "red"],
              [350, "purple"],
              [620, "yellow"]
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
