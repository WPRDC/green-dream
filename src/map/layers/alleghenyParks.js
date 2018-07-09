export default {
  id: "allegheny-parks",
  type: "vector",
  name: "Allegheny County Parks",
  geoType: "polygon",
  legend: {
    display: true,
    type: "single",
    items: [{category: "Park", color: "#4c7737"}],
  },
  legendColor: "#4c7737",
  legendDisplay: true,
  category: "urban-green-features",
  visible: false,
  source: {
    type: "carto-vector",
    minzoom: 0,
    sql: "SELECT * FROM allegheny_county_parks_outlines_2"
  },
  layers: {
    labels: [],
    style: [
      {
        id: "allegheny-parks-borders",
        type: "line",
        source: "allegheny-parks",
        "source-layer": "allegheny-parks",
        layout: {
          "line-join": "round"
        },
        paint: {
          "line-width": 1,
          "line-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          },
          "line-color": "#4c7737"
        }
      },
      {
        id: "allegheny-parks-fill",
        type: "fill",
        source: "allegheny-parks",
        "source-layer": "allegheny-parks",
        layout: {},
        paint: {
          "fill-color": "#4c7737",
          "fill-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          }
        }
      }
    ]
  }
};
