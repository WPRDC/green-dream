/**
 * Map object representing everything that makes up a map.
 */

class Map {
  constructor() {
    this.sources = {};
    this.layers = {};
    this.mapStyle = {};

    this.overlayLayers = [];
    this.dataLayers = [];
    this.basemaps = [];

  }


  getSource = id => {
    return this.sources[id]
  }

  getLayer = id => {
    return this.layers[id]
  }

}

class Source {
  constructor(name, type, attribution) {
    this.name = name;
    this.type = type;
    this.attribution = attribution;
  }

  get source() {

  }
}

class VectorSource extends Source() {
  constructor(name, dataSource, {bounds, minzoom, maxzoom, attribution}) {
    super(name, 'vector', attribution);

    if (typeof dataSource === 'string')
      this.url = dataSource;
    else if (Array.isArray(dataSource))
      this.tiles = dataSource;
    else if (typeof dataSource === 'undefined')
      throw TypeError('datasource is required.')
    else
      throw TypeError('Data source must be url string or array of tile urls.')

    this.bounds = bounds;
    this.minzoom = minzoom;
    this.maxzoom = maxzoom;
  }
}


class Layer {
  constructor(id, type, source, sourceLayer, paint, layout, {minzoom, maxzoom, filter, metadata}) {
    this.id = id;
    this.type = type;
    this.source = source;
    this.sourceLayer = sourceLayer;
    this.layout = layout;
    this.paint = paint;

    this.metadata;
    this.minzoom;
    this.maxzoom
    this.filter;

  }
}