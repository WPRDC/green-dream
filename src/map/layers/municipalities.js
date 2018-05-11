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
    type: "carto-vector",
    minzoom: 0,
    sql: "SELECT * FROM wprdc.allegheny_county_municipal_boundaries"
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
            stops: [[1, 0], [9, 0.9], [12, 0.4]]
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
          "text-field": "{f0_name}",
          "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
          "text-size": 11
        },
        paint: {
          "text-opacity": 1,
          "icon-color": "rgba(193, 193, 193, 1)",
          "text-color": "rgba(154, 154, 154, 1)",
          "text-halo-color": "rgba(152, 152, 152, 0)"
        }
      }
    ]
  }
};
