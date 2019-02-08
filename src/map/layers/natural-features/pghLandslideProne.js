import {pgh} from "../../publishers";

export default {
  id: "pittsburgh-landslide-prone",
  type: "vector",
  name: "Landslide Prone Areas",
  geoType: "polygon",
  legend: {
    display: true,
    type: "single",
    items: [{ category: "Landslide Prone", color: "#9F8170" }]
  },
  legendColor: "#9F8170",
  legendDisplay: true,
  category: "natural-features",
  visible: false,
  source: {
    type: "vector",
    minzoom: 0,
    sql: "SELECT * FROM wprdc.landslide_prone_areas"
  },
  information: {
    description: "Landslide Prone areas in the City of Pittsburgh",
    extent: "Pittsburgh",
    publisher: pgh,
    source: {
      title: "WPRDC - Pittsburgh Landslide Prone",
      link: "https://data.wprdc.org/dataset/pittsburgh-landslide-prone"
    },
  },
  layers: {
    labels: [],
    style: [
      {
        id: "pittsburgh-landslide-prone-border",
        type: "line",
        source: "pittsburgh-landslide-prone",
        "source-layer": "pittsburgh-landslide-prone",
        layout: {
          "line-join": "round"
        },
        paint: {
          "line-width": 1,
          "line-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          },
          "line-color": "#5C5248"
        }
      },
      {
        id: "pittsburgh-landslide-prone-fill",
        type: "fill",
        source: "pittsburgh-landslide-prone",
        "source-layer": "pittsburgh-landslide-prone",
        layout: {},
        paint: {
          "fill-color": "#9F8170",
          "fill-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          }
        }
      }
    ]
  }
};
