class Map {
    constructor(mapConfig) {

    }
}

class Source {
    constructor(name, type) {
        this.name = name;
    }
}

class VectorSource extends Source {
    constructor(name, {url, tiles}) {
        super(name, 'vector');
        if (typeof(url) !== "undefined")
            this.url = url;
        else if(typeof(title) !== "undefined")
            this.tiles = tiles;
        else
            throw Error("VectorSource must contain a 'url' or 'tiles'.")
    }
}