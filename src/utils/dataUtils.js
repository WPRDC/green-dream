import React from 'react';

const PARCEL_ID_PATTERN = /^(\d{4}\D\d{4}[a-zA-Z0-9]{7})$/;

/**
 * Checks that all properties of object have values.
 *
 * @param obj
 * @return {boolean}
 */
export function hasValues(obj) {
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      if (obj[k] === null || typeof(obj[k]) === 'undefined' || obj[k] === '')
        return false;
    }
  }
  return true;
}


/**
 * Check if all `things` exist
 *
 * @param {stuff} things - variable amount of arguments to test for existence
 * @return {boolean} `true` if all things exist, `false` otherwise
 */
export function exists(...things) {
  for (let thing of things) {
    if (typeof(thing) === 'undefined') {
      return false;
    }
  }
  return true;
}

export function monify(number, decimal) {
  let dec = 0;
  if (number !== 0 && (!number || isNaN(number)))
    return '';
  if (decimal)
    dec = 2;

  // Set decimals and commas
  try {
    number = parseFloat(number)
  } catch (err) {
    console.log(err);
    return '';
  }
  number = number.toFixed(dec).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return '$' + number;
}


/**
 * Check if arrays a and b contain the same items.
 * NOTE: this is currently a shallow check.  If complex data structures are stored in the arrays, this may
 * return false even though the the two lists are actually different
 * @param {array} a - first array
 * @param {array} b - second array
 * @return {boolean} True if they are different, False if the same
 */
export const arraysAreDifferent = (a, b) => {
  if (!a || !b) {
    return true;
  }

  return (a.length !== b.length ||
    !(a.every((item, i) => {
      return item === b[i]
    }))
  );
};


/**
 * Checks search query, first to see if it's a Parcel ID, then if it's not, it assumes it's an address.
 *
 * @param {string} query - query entered by user could be parcel ID or address
 * @return {Promise} - Promise that resolves with the parcel_id
 */
export const checkSearchQuery = query => {
  if (PARCEL_ID_PATTERN.test(query)) {
    return new Promise((resolve, reject) => {
      resolve(query.toUpperCase());
    })
  }
  else {
    return getParcelIdFromAddress(query)
  }
};

export const extractAddressFromData = data => {
  return (
    {
      "number": data['assessments'][0]['PROPERTYHOUSENUM'],
      "street": data['assessments'][0]['PROPERTYADDRESS'],
      "city": data['assessments'][0]['PROPERTYCITY'],
      "state": data['assessments'][0]['PROPERTYSTATE'],
      "zip": data['assessments'][0]['PROPERTYZIP'],
    }
  )
}

export const makeAddressLine = addressParts => {
  const {number, street, city, state, zip} = addressParts;
  return `${number} ${street} ${city} ${state} ${zip}`
}


/**
 * Extract single field from source data and format it if necessary.
 *
 * @param sourceData
 * @param fieldMapping
 * @return {*}
 */
export const extractField = (sourceData, fieldMapping) => {
  let value = sourceData[fieldMapping.resource][0][fieldMapping.id];
  if (typeof(fieldMapping.formatter) !== 'undefined') {
    value = fieldMapping.formatter(value);
  }
  return value;
}

/**
 * Pulls out key-value mapping {title: value} from a source of data
 * @param data
 * @param fieldMapping
 * @param index
 * @return {{}}
 */
export const extractKeyValueSubset = (data, fieldMapping, index = 0) => {
  let subset = {};

  for (let field of fieldMapping) {
    let title = '',
      value = '';

    // items not dependent on `data`
    if (exists(field.value, field.title)) {
      title = field.title;
      value = field.value;

    }
    // items pulled from data
    else if (exists(field.resource, field.field)) {
      if (exists(field.title))
        title = field.title;
      else
        title = field.field;
      if (data[field.resource].length && data[field.resource][index].hasOwnProperty(field.field))
        value = data[field.resource][index][field.field]
    }

    if (exists(field.formatter))
      subset[title] = field.formatter(value);
    else
      subset[title] = value;
  }

  return subset;
}

/**
 * Pulls a table ( [[]...] ) from  a source of data
 * @param data
 * @param tableMapping
 * @param colLabels
 * @param rowLabels
 * @return {Array}
 */
export const extractTable = (data, tableProps) => {
  let table = [];

  // Generate heading row
  if (tableProps.showHeading) {
    let heading = [];
    for (let field of tableProps.heading) {
      if (field === '__label__')
        heading.push('');
      else
        heading.push(field)
    }
    table.push(heading);
  }

  // Collect Data for rows
  for (let row of tableProps.rows) {
    let tempRow = [];
    for (let field of tableProps.heading) {
      if (field === '__label__')
        tempRow.push(row[field]);
      else
        tempRow.push(extractField(data, row[field]))
    }
    table.push(tempRow);
  }

  return table;
};

export const nl2br = multilineString => {
  return <div>
    {
      multilineString.split('\n').map((item, key) =>
        <span key={key}>{item}<br/></span>)
    }
  </div>
}

export const guid = () => {
  const S4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

export const sentenceCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


export const limitString = (string, len) => {
  if (string.length - len > 3) return (string.slice(0, len) + '...')
  else return string
}


export function shortenNumber(number) {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(2) + 'B'
  }
  else if (number >= 1000000) {
    return (number / 1000000).toFixed(2) + 'M'
  } else if (number >= 10000)
    return (number / 1000).toFixed(2) + 'K'
  else {
    return number
  }
}
const geocodeUrl = "http://tools.wprdc.org/geo/api/v0/geocode/";


export const getParcelIdFromAddress = address => {
  return new Promise((resolve, reject) => {
    fetch(geocodeUrl + '?addr=' + address)
      .then((response) => {
        response.json()
          .then((data) => {
            if (data.data.parcel_id)
              resolve(data.data.parcel_id);
            else
              reject("Parcel not found");
          }, (err) => reject(err))
      }, (err) => {
        reject(err);
      })
  })
};