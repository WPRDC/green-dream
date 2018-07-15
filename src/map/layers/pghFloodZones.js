import  {pgh} from "../publishers";

export default {
  id: "pittsburgh-flood-zones",
  type: "vector",
  name: "Flood Zones",
  geoType: "polygon",
  legend: {
    display: true,
    type: "single",
    items: [{ category: "Flood Zones", color: "#007791" }]
  },
  legendColor: "#007791",
  legendDisplay: true,
  category: "natural-features",
  visible: false,
  source: {
    type: "carto-vector",
    minzoom: 0,
    sql: "SELECT * FROM wprdc.pittsburgh_fema_flood_zones"
  },
  information: {
    description: "Flood-prone areas in City of Pittsburgh",
    extent: "Pittsburgh",
    publisher: pgh,
    source: {
      title: "WPRDC - Pittsburgh FEMA Flood Zones",
      link: "https://data.wprdc.org/dataset/pittsburgh-fema-flood-zones"
    },
  },
  layers: {
    labels: [],
    style: [
      {
        id: "pittsburgh-flood-zones-border",
        type: "line",
        source: "pittsburgh-flood-zones",
        "source-layer": "pittsburgh-flood-zones",
        layout: {
          "line-join": "round"
        },
        paint: {
          "line-width": 1,
          "line-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          },
          "line-color": "#082567"
        }
      },
      {
        id: "pittsburgh-flood-zones-fill",
        type: "fill",
        source: "pittsburgh-flood-zones",
        "source-layer": "pittsburgh-flood-zones",
        layout: {},
        paint: {
          "fill-color": "#007791",
          "fill-opacity": {
            stops: [[8, 0], [13, 0.5], [18, 0.8]]
          }
        }
      }
    ]
  }
};
