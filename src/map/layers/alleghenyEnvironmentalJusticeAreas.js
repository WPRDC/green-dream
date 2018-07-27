import {ac} from "../publishers";

export default {
  id: "allegheny-county-environmental-justice-areas",
  type: "vector",
  name: "Environmental Justice Areas",
  geoType: "polygon",
  legend: {
    display: true,
    type: "single",
    items: [{category: "Environmental Justice Area", color: "#e38633"}]
  },
  legendColor: "#e38633",
  legendDisplay: true,
  category: "other",
  visible: false,
  source: {
    type: "carto-vector",
    minzoom: 0,
    sql: "SELECT * FROM wprdc.environmental_justice_areas WHERE ej_area = 1"
  },
  information: {
    description: "The Health Department defines an environmental justice area as any census tract where at least 20 percent of the population lives in poverty, and/or 30 percent or more of the population is minority.",
    extent: "Allegheny County",
    publisher: ac,
    source: {
      title: "WPRDC - Allegheny County Environmental Justice Areas",
      link: "https://data.wprdc.org/dataset/environmental-justice-census-tracts"
    },
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
          "line-color": "black"
        }
      },
      {
        id: "allegheny-county-environmental-justice-areas-fill",
        type: "fill",
        source: "allegheny-county-environmental-justice-areas",
        "source-layer": "allegheny-county-environmental-justice-areas",
        layout: {},
        paint: {
          "fill-color": "#e38633",
          "fill-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          }
        }
      }
    ]
  }
};
