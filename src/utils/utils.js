export const objectsAreTheSame = (obj1, obj2) => {
  //Loop through properties in object 1
  for (let p in obj1) {
    //Check property exists on both objects
    if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;

    switch (typeof (obj1[p])) {
      //Deep compare objects
      case 'object':
        if (!objectsAreTheSame(obj1[p], obj2[p])) return false;
        break;
      //Compare function code
      case 'function':
        if (typeof (obj2[p]) === 'undefined' || (p !== 'compare' && obj1[p].toString() !== obj2[p].toString())) return false;
        break;
      //Compare values
      default:
        if (obj1[p] !== obj2[p]) return false;
    }
  }

  //Check object 2 for any extra properties
  for (let p in obj2) {
    if (typeof (obj1[p]) === 'undefined') return false;
  }
  return true;
};


export const layerListChanged = (oldList, newList) => {

  if (oldList.length !== newList.length) {
    return true;
  }

  for (let i in oldList) {
    if (!objectsAreTheSame(oldList[i], newList[i])) {
      return true;
    }
  }

  return false;
}

export const guid = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export const getBounds = geom => {
  const coords = flatten(geom.coordinates);
  let maxX = Number.MIN_SAFE_INTEGER;
  let maxY = Number.MIN_SAFE_INTEGER;
  let minX = Number.MAX_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;
  for (let i in coords) {
    maxX = Math.max(coords[i][0], maxX);
    maxY = Math.max(coords[i][1], maxY);
    minX = Math.min(coords[i][0], minX);
    minY = Math.min(coords[i][1], minY);
  }

  return [[minX, minY], [maxX, maxY]]

};

export const flatten = coordArray => {
  let newArray = [].concat(...coordArray);
  if (Array.isArray(newArray[0][0])) {
    return flatten(newArray)
  } else {
    return newArray
  }
}