import {ac} from "../../publishers";

export default {
  id: 'vacant-lots',
  type: 'vector',
  name: 'Vacant Lots',
  geoType: 'polygon',
  legend: {
    display: true,
    type: "single",
    items: [{ category: "Vacant Lot", color: "#800000" }]
  },
  legendColor: '#800000',
  legendDisplay: true,
  category: 'other',
  visible: false,
  source: {
    type: 'carto-vector',
    minzoom: 10,
    sql: `SELECT pb.the_geom, pb.the_geom_webmercator, pb.cartodb_id, asmt.usedesc
FROM allegheny_county_parcel_boundaries pb
JOIN assessments asmt
ON asmt.parid = pb.pin
WHERE asmt.usedesc like '%VACANT%'`
  },
  information: {
    description: "Parcels with a \"Land Use\" description of \"Vacant Lot\" in Allegheny County's Real Estate Assessment data.",
    extent: "Allegheny County",
    publisher: ac,
    source: {
      title: "WPRDC - Assessments",
      link: "https://data.wprdc.org/dataset/property-assessments"
    },
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "vacant-lots-borders",
        "type": "line",
        "source": "vacant-lots",
        "source-layer": "vacant-lots",
        "layout": {},
        "paint": {
          "line-width": {
            "stops": [
              [12, 1],
              [18, 2]
            ]
          },
          "line-color": "rgba(2, 2, 2, 1)",
          "line-opacity": {
            "stops": [
              [12, 0],
              [18, .8]
            ]
          }
        }
      },
      {
        "id": "vacant-lots-fill",
        "type": "fill",
        "interactive": true,
        "source": "vacant-lots",
        "source-layer": "vacant-lots",
        "layout": {},
        "paint": {
          "fill-color": '#800000',
          "fill-opacity": {
            "stops": [
              [12, 0.1],
              [18, 0.8]
            ]
          }
        }
      },
    ]
  }
}
