import {pgh} from "../../publishers";

const color = "#F00"

export default {
  id: 'tax-delinquent',
  type: 'vector',
  name: 'Tax Delinquent',
  geoType: 'polygon',
  legend: {
    display: true,
    type: "category",
    items: [
      {category: "Delinquent > 1yr", color: color},
    ]
  },
  legendColor: color,
  legendDisplay: true,
  category: 'other',
  information: {
    description: "Properties that have been tax delinquent for more than 1 year.",
    extent: "Pittsburgh",
    publisher: pgh,
    source: {
      title: "WPRDC - City of Pittsburgh Property Tax Delinquency",
      link: "https://data.wprdc.org/dataset/city-of-pittsburgh-property-tax-delinquency"
    },
  },
  visible: false,
  source: {
    type: 'vector',
    minzoom: 10,
    sql: `SELECT pb.the_geom, pb.the_geom_webmercator, td.cartodb_id as map_identifier, td.cartodb_id as map_name,  td.current_delq, td.prior_years
FROM wprdc.ed0d1550_c300_4114_865c_82dc7c23235b_1 as td JOIN
allegheny_county_parcel_boundaries as pb
ON td.pin = pb.pin
WHERE td.prior_years > 1`
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "tax-delinquent-fill",
        "type": "fill",
        "source": "tax-delinquent",
        "source-layer": "tax-delinquent",
        "layout": {},
        "paint": {
          "fill-color": color,
          "fill-opacity": 1,
        },
      },
      {
        "id": "tax-delinquent-borders",
        "type": "line",
        "source": "tax-delinquent",
        "source-layer": "tax-delinquent",
        "layout": {},

        "paint": {
          "line-width": {
            "stops": [
              [10, 0],
              [13, 1],
              [15, 1],
              [18, 2]
            ]
          },
          "line-color": "rgba(2, 2, 2, 1)",
          "line-opacity": {
            "stops": [
              [10, 0],
              [13, 0],
              [15, .4],
            ]
          }
        }
      },
    ]
  }
}
