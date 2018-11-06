import  {ac} from "../../publishers";

export default {
  id: "allegheny-flood-zones",
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
    sql: "SELECT * FROM wprdc.s_fld_haz_ar WHERE fld_zone LIKE 'A%'"
  },
  information: {
    description: "Flood-prone areas in Allegheny County",
    extent: "Allegheny County",
    publisher: ac,
    source: {
      title: 'WPRDC - Allegheny County FEMA Flood Zones',
      link: 'https://data.wprdc.org/dataset/allegheny-county-fema-flood-zones'
    }
  },
  layers: {
    labels: [],
    style: [
      {
        id: "allegheny-flood-zones-border",
        type: "line",
        source: "allegheny-flood-zones",
        "source-layer": "allegheny-flood-zones",
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
        id: "allegheny-flood-zones-fill",
        type: "fill",
        source: "allegheny-flood-zones",
        "source-layer": "allegheny-flood-zones",
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
