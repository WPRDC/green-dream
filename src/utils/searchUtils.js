const PARCEL_ID_PATTERN = /^(\d{4}\D\d{4}[a-zA-Z0-9]{7})$/;
const geocodeUrl = "https://tools.wprdc.org/geo/api/v0/geocode/";

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