import {bikepgh} from "../publishers";

const colors = [
  '#1b9e77',
  '#d95f02',
  '#7570b3',
  '#e7298a',
  '#66a61e',
]


export default {
  id: 'all-bike-lanes',
  type: 'vector',
  geoType: 'line',
  legend: {
    display: true,
    type: "single",
    items: [
      {category: "On-street Route", color: colors[0]},
      {category: "Cautionary Route", color: colors[1]},
      {category: "Sharrow", color: colors[2]},
      {category: "Protected Bike Lane", color: colors[3]},
      {category: "Bike Lane", color: colors[4]},
    ]
  },
  legendDisplay: true,
  legendColor: "#9999FF",

  name: 'Bike Lanes',
  category: 'transportation',
  source: {
    type: 'carto-vector',
    minzoom: 10,
    sql: `SELECT *, ROW_NUMBER() OVER (ORDER BY type) as map_identifier, type as map_name
      FROM
      (SELECT *
        FROM (SELECT 'on_street_bike_route' as type, the_geom, the_geom_webmercator FROM on_street_bike_route) as on_street
        UNION SELECT 'cautionary_bike_route' as type, the_geom, the_geom_webmercator FROM cautionary_bike_route
        UNION SELECT 'sharrows' as type, the_geom, the_geom_webmercator FROM sharrows
        UNION SELECT 'bike_lanes' as type, the_geom, the_geom_webmercator FROM bike_lanes
        UNION SELECT 'protected_bike_lane' as type, the_geom, the_geom_webmercator FROM protected_bike_lane
      ) as all_lanes`
  },
  information: {
    description: "All Bike Lanes",
    extent: "Allegheny County",
    publisher: bikepgh,
    source: {
      title: "WPRDC - BikePGH's Pittsburgh Bike Map Geographic Data",
      link: "https://data.wprdc.org/dataset/shape-files-for-bikepgh-s-pittsburgh-bike-map"
    },
  },
  layers: {
    labels: [],
    style: [
      {
        "id": "all-bike-lanes-line",
        "type": "line",
        "source": "all-bike-lanes",
        "source-layer": "all-bike-lanes",
        "paint": {
          "line-width": {
            "stops": [
              [10, 1],
              [18, 5]
            ]
          },
          "line-color": {
            property: 'type',
            type: 'categorical',
            stops: [
              ["on_street_bike_route", colors[0]],
              ["cautionary_bike_route", colors[1]],
              ["sharrows", colors[2]],
              ["bike_lanes", colors[3]],
              ["protected_bike_lane", colors[4]],
            ]
          },
          "line-opacity": {
            "stops": [
              [10, .5],
              [15, 1],
              [18, 1]
            ]
          }
        },
        "layout": {
          "line-cap": "round"
        }
      }
    ]
  }
}
