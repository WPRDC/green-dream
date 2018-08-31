export default {
  id: "aerial",
  type: "vector",
  name: "Aerial Imagery",
  geoType: "polygon",
  legend: {
    display: false,
    type: "category",
    items: []
  },
  legendColor: "green",
  legendDisplay: false,
  category: "natural-features",
  visible: true,
  source: {
    type: "raster",
    tileSize: 256,
    tiles: [
      "https://imagery.pasda.psu.edu/arcgis/services/pasda/AlleghenyCountyImagery2017/MapServer/WMSServer?format=image/png&service=WMS&version=1.3.0&request=GetMap&srs=EPSG:4326&width=256&height=256&layers=image"
    ]
  },
  layers: {
    labels: [],
    style: [
      {
        id: "aerial-raster",
        type: "raster",
        source: "aerial",
        "source-layer": "aerial",
        layout: []
      },
    ]
  }
};
