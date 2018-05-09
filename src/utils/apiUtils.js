import { makeAddressLine } from "./dataUtils";

const STREET_VIEW_BASE_URL = "https://maps.googleapis.com/maps/api/streetview";
const geocodeUrl = "http://tools.wprdc.org/geo/api/v0/geocode/";

const streetViewParams = {
  key: "AIzaSyCcLG-dRLxiRB22U9cSv1jaP6XxoOn5aSY",
  location: "",
  size: "600x300"
};

export const makeStreetViewUrl = addressParts => {
  let params = JSON.parse(JSON.stringify(streetViewParams)); // hack way to copy object
  params["location"] = makeAddressLine(addressParts);

  return STREET_VIEW_BASE_URL + "?" + paramaterize(params);
};

export function paramaterize(params) {
  let paramList = [];
  for (let p in params) {
    if (params.hasOwnProperty(p)) {
      paramList.push(
        encodeURIComponent(p) + "=" + encodeURIComponent(params[p])
      );
    }
  }
  return paramList.join("&");
}

export const getParcelIdFromAddress = address => {
  return new Promise((resolve, reject) => {
    fetch(geocodeUrl + "?addr=" + address).then(
      response => {
        response.json().then(
          data => {
            if (data.data.parcel_id) resolve(data.data.parcel_id);
            else reject("Parcel not found");
          },
          err => reject(err)
        );
      },
      err => {
        reject(err);
      }
    );
  });
};

export function getStreetViewImage(addressParts) {
  const urlWithParameters = makeStreetViewUrl(addressParts);

  window.URL = window.URL || window.webkitURL;

  return new Promise((resolve, reject) => {
    fetch(urlWithParameters)
      .then(response => response.blob(), err => reject(err))
      .then(
        imgBlob => resolve(window.URL.createObjectURL(imgBlob)),
        err => reject(err)
      );
  });
}
