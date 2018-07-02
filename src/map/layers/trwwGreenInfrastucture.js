export default {
  id: "3rww-gi-inventory",
  type: "vector",
  geoType: "point",
  name: "3 Rivers Wet Weather Green Infrastructure Inventory",
  legend: {
    display: true,
    type: "single",
    items: [
      { category: "Green Wall", color: "#8dd3c7" },
      { category: "Rain Garden / Bioretention", color: "#ffffb3" },
      { category: "Riparian Buffer / Stream Restoration", color: "#bebada" },
      { category: "Porous Pavement", color: "#fb8072" },
      { category: "Cistern / Rain Barrel", color: "#80b1d3" },
      { category: "Stormwater Wetland", color: "#fdb462" },
      { category: "Green Roof", color: "#b3de69" },
      { category: "Bioswale", color: "#fccde5" },
      { category: "Naturalized Meadow", color: "#d9d9d9" },
      { category: "Stormwater Tree Pit", color: "#bc80bd" },
      { category: "Constructed Wetland", color: "#ccebc5" },
      { category: "Infiltration / Storage Trench", color: "#ffed6f" },
      { category: "Stormwater Planter", color: "#72edfb" },
      { category: "rain gaRain Garden / Bioretentionrden", color: "#ffffb3" },
      { category: "TBD", color: "black" },
      { category: "Other", color: "gray" }
    ]
  },
  legendColor: "#0F2",
  legendDisplay: true,
  category: "urban-green-features",
  visible: false,
  popupProperties: [
    { id: "urban_grower", name: "Urban Grower" },
    { id: "category", name: "Category" }
  ],
  source: {
    type: "carto-vector",
    minzoom: 10,
    sql:
      "SELECT *, projectname as map_name, objectid as map_identifier  FROM table_3rww_gi_inventory"
  },
  layers: {
    labels: [],
    style: [
      {
        id: "3rww-gi-inventory-circle",
        type: "circle",
        interactive: true,
        source: "3rww-gi-inventory",
        "source-layer": "3rww-gi-inventory",
        layout: {},
        paint: {
          "circle-radius": {
            stops: [[10, 4], [15, 8]]
          },
          "circle-color": {
            property: "projectdescription",
            type: "categorical",
            stops: [
              ["Green Wall", "#8dd3c7"],
              ["Rain Garden / Bioretention", "#ffffb3"],
              ["Riparian Buffer / Stream Restoration", "#bebada"],
              ["Porous Pavement", "#fb8072"],
              ["Cistern / Rain Barrel", "#80b1d3"],
              ["Stormwater Wetland", "#fdb462"],
              ["Green Roof", "#b3de69"],
              ["Bioswale", "#fccde5"],
              ["Naturalized Meadow", "#d9d9d9"],
              ["Stormwater Tree Pit", "#bc80bd"],
              ["Constructed Wetland", "#ccebc5"],
              ["Infiltration / Storage Trench", "#ffed6f"],
              ["Stormwater Planter", "#72edfb"],
              ["rain gaRain Garden / Bioretentionrden", "#ffffb3"],
              ["TBD", "black"],
              ["Other", "gray"]
            ]
          },
          "circle-stroke-width": { stops: [[10, 1], [15, 2]] },
          "circle-stroke-color": "#013220"
        }
      }
    ]
  }
};
