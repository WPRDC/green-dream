export default {
  id: "allegheny-county-environmental-justice-areas",
  type: "vector",
  name: "Environmental Justice Area",
  geoType: "polygon",
  legend: {
    display: true,
    type: "single",
    items: [{ category: "Environmental Justice Area", color: "orange" }]
  },
  legendColor: "orange",
  legendDisplay: true,
  category: "other",
  visible: false,
  source: {
    type: "carto-vector",
    minzoom: 0,
    sql: "SELECT * FROM wprdc.environmental_justice_areas WHERE ej_area = 1"
  },
  layers: {
    labels: [],
    style: [
      {
        id: "allegheny-county-environmental-justice-areas-border",
        type: "line",
        source: "allegheny-county-environmental-justice-areas",
        "source-layer": "allegheny-county-environmental-justice-areas",
        layout: {
          "line-join": "round"
        },
        paint: {
          "line-width": 1,
          "line-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          },
          "line-color": "red"
        }
      },
      {
        id: "allegheny-county-environmental-justice-areas-fill",
        type: "fill",
        source: "allegheny-county-environmental-justice-areas",
        "source-layer": "allegheny-county-environmental-justice-areas",
        layout: {},
        paint: {
          "fill-color": "orange",
          "fill-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          }
        }
      }
    ]
  }
};
