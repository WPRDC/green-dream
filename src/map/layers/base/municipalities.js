export default {
  id: "municipalities",
  type: "vector",
  name: "Municipalities",
  geoType: "polygon",
  legend: {
    display: true,
    type: "single",
    color: "black"
  },
  legendColor: "black",
  legendDisplay: false,
  category: "base-layers",
  visible: true,
  source: {
    type: "vector",
    minzoom: 0,
    sql: "SELECT *, f0_label as map_identifier, f0_label as map_name FROM wprdc.allegheny_county_municipal_boundaries"
  },
  layers: {
    labels: [],
    style: [
      {
        id: "municipalities-borders",
        type: "line",
        source: "municipalities",
        "source-layer": "municipalities",
        layout: {
          "line-join": "round"
        },
        paint: {
          "line-width": {
            stops: [[0, 1], [9, 1], [18, 10]]
          },
          "line-opacity": {
            stops: [[1, 0], [9, 0.9], [14, 0]]
          },
          "line-color": "black"
        }
      },
      {
        id: "municipalities-labels",
        type: "symbol",
        source: "municipalities",
        "source-layer": "municipalities",
        layout: {
          "text-field": "{hood}",
          "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
          "text-size": 11
        },
        paint: {
          "text-opacity": 1,
          "icon-color": "rgba(193, 193, 193, 1)",
          "text-color": "#222",
          "text-halo-color": "rgba(152, 152, 152, 0)"
        }
      },
      {
        id: "municipalities-fill",
        type: "fill",
        interactive: true,
        source: "municipalities",
        "source-layer": "municipalities",
        layout: {},
        paint: {
          "fill-color": "#708090",
          "fill-opacity": 0
        }
      },
      {
        id: "municipalities-highlight-fill",
        type: "fill",
        interactive: true,
        source: "municipalities",
        "source-layer": "municipalities",
        layout: {},
        filter: ["in", "map_identifier", ""],
        paint: {
          "fill-color": "#708090",
          "fill-opacity": {
            stops: [[1, 0], [9, 0.6],[15, 0.2], [16, 0.0]]
          }
        }
      },
      {
        id: "municipalities-select-fill",
        type: "fill",
        interactive: true,
        source: "municipalities",
        "source-layer": "municipalities",
        layout: {},
        filter: ["in", "map_identifier", ""],
        paint: {
          "fill-color": "#5F5",
          "fill-opacity": {
            stops: [[1, 0.1], [9, 0.6], [15, 0.2], [16, 0.0]]
          }
        }
      },
      {
        id: "municipalities-select-border",
        type: "line",
        interactive: true,
        source: "municipalities",
        "source-layer": "municipalities",
        layout: {
          "line-cap": "round"
        },
        filter: ["in", "map_identifier", ""],
        paint: {
          "line-width": {
            stops: [[14, 4], [18, 8]]
          }
        }
      }
    ]
  }
};
