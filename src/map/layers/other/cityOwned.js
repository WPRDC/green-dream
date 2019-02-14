import {pgh} from "../../publishers";

const color = "#F0F";

export default {
  id: 'city-owned',
  type: 'vector',
  name: 'City Owned Properties',
  geoType: 'polygon',
  legend: {
    display: true,
    type: "category",
    items: [
      {category: "City Owned Property", color: color, hollow: true},
    ]
  },
  legendColor: color,
  legendDisplay: true,
  category: 'other',
  information: {
    description: "Properties owned by the City of Pittsburgh",
    extent: "Pittsburgh",
    publisher: pgh,
    source: {
      title: "WPRDC - City-Owned Property",
      link: "https://data.wprdc.org/dataset/city-owned-property"
    },
  },
  visible: false,
  source: {
    type: 'vector',
    minzoom: 10,
    sql: `SELECT pb.the_geom, pb.the_geom_webmercator, copp.cartodb_id as map_identifier, copp.pin as map_name 
FROM wprdc.table_4ff5eb17_e2ad_4818_97c4_8f91fc6b6396 as copp JOIN
allegheny_county_parcel_boundaries as pb
ON copp.pin = pb.pin`
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "city-owned-borders",
        "type": "line",
        "source": "city-owned",
        "source-layer": "city-owned",
        "layout": {},

        "paint": {
          "line-width": {
            "stops": [
              [12, 1],
              [15, 2],
              [18, 3]
            ]
          },
          "line-color": color,
          "line-opacity": {
            "stops": [
              [15, 1],
              [18, 1]
            ]
          }
        }
      }
    ]
  }
}
