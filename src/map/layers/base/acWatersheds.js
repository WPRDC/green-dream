import {ac} from "../../publishers";

const color = '#000080';

export default {
  id: "ac-watersheds",
  type: "vector",
  name: "Watershed Boundaries",
  geoType: "polygon",
  legend: {
    display: true,
    type: "category",
    items: [
      {category: "Watershed Boundaries", color: color, hollow: true},

    ]
  },
  legendColor: color,
  legendDisplay: true,
  category: "base-layers",
  visible: false,
  source: {
    type: "vector",
    minzoom: 0,
    sql: "SELECT *, fid as map_identifier, descr as map_name FROM wprdc.allegheny_county_watershed_boundaries"
  },
  information: {
    description: "Watershed Boundaries in Allegheny County",
    extent: "Allegheny County",
    publisher: ac,
    source: {
      title: "WPRDC - Allegheny County Watershed Boundaries",
      link: "https://data.wprdc.org/dataset/allegheny-county-watershed-boundaries"
    },
  },
  layers: {
    labels: [],
    style: [
      {
        id: "ac-watersheds-borders",
        type: "line",
        source: "ac-watersheds",
        "source-layer": "ac-watersheds",
        layout: {
          "line-join": "round"
        },
        paint: {
          "line-width": {
            stops: [[0, 1], [9, 1], [18, 5]]
          },
          "line-opacity": {
            stops: [[1, 0], [9, 0.4], [14, 0.8]]
          },
          "line-color": color
        }
      },
      {
        id: "ac-watersheds-labels",
        type: "symbol",
        source: "ac-watersheds",
        "source-layer": "ac-watersheds",
        layout: {
          "text-field": "{map_name}",
          "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
          "text-size": 11,
        },
        paint: {
          "icon-color": color,
          "text-color": color,
          "text-opacity": {
            stops: [[1, 0], [9, 0.9], [14, 0.4]]
          },
          "text-halo-color": "rgba(152, 152, 152, .3)"
        }
      },
    ]
  }
};
