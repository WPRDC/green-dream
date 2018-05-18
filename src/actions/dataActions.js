import { getStreetViewImage } from "../utils/apiUtils";
import { extractAddressFromData, checkSearchQuery } from "../utils/dataUtils";

export const SELECT_PARCEL = "SELECT_PARCEL";
export const SELECT_NEIGHBORHOOD = "SELECT_NEIGHBORHOOD";
export const INVALIDATE_PARCEL = "INVALIDATE_PARCEL";
export const REQUEST_PARCEL_DATA = "REQUEST_PARCEL_DATA";
export const RECEIVE_PARCEL_DATA = "RECEIVE_PARCEL_DATA";
export const REQUEST_PARCEL_IMAGE = "REQUEST_PARCEL_IMAGE";
export const RECEIVE_PARCEL_IMAGE = "RECEIVE_PARCEL_IMAGE";
export const CLOSE_DISPLAY = "CLOSE_DISPLAY";

export const requestPropertyData = parcelId => {
  return { type: REQUEST_PARCEL_DATA, parcelId };
};

export const selectParcel = parcelId => {
  return { type: SELECT_PARCEL, parcelId };
};

export const SELECT = "SELECT";
export const select = (objectType, id, name) => {
  return { type: SELECT, objectType, id, name };
};

export const selectNeighborhood = hoodId => {
  return { type: SELECT_NEIGHBORHOOD, hoodId };
};

export const closeDisplay = () => {
  return { type: CLOSE_DISPLAY };
};

export const receivePropertyData = (parcelId, data) => {
  return {
    type: RECEIVE_PARCEL_DATA,
    parcelId,
    data: Object.assign({}, data.results[0].data, {
      owner: data.results[0].owner
    }),
    geo: data.results[0].geos,
    receivedAt: Date.now()
  };
};

export const fetchParcelData = parcelId => {
  return function(dispatch) {
    dispatch(requestPropertyData(parcelId));

    return fetch(`http://tools.wprdc.org/property-api/v1/parcels/${parcelId}`)
      .then(response => response.json(), error => console.log("ERROR", error))
      .then(data => {
        dispatch(receivePropertyData(parcelId, data));
      });
  };
};

const shouldFetchParcelData = (state, parcelId) => {
  const parcelData = state.parcelDataById[parcelId];
  if (!parcelData) {
    return true;
  } else if (parcelData.isFetching) {
    return false;
  } else {
    return parcelData.didInvalidate; // is always false  TODO: implement invalidation of data
  }
};

export const fetchParcelDataIfNeeded = parcelId => {
  let returnedThunk;

  return (dispatch, getState) => {
    if (shouldFetchParcelData(getState(), parcelId)) {
      return dispatch(fetchParcelData(parcelId));
    } else {
      return Promise.resolve();
    }
  };
};

//===============//
// PARCEL IMAGE
//==============//

export const requestParcelImage = parcelId => {
  return { type: REQUEST_PARCEL_IMAGE, parcelId };
};

export const receiveParcelImage = (parcelId, imageUrl) => {
  return { type: RECEIVE_PARCEL_IMAGE, parcelId, imageUrl };
};

export const fetchParcelImage = (parcelId, address) => {
  return function(dispatch) {
    dispatch(requestParcelImage(parcelId));
    return getStreetViewImage(address).then(
      imgUrl => dispatch(receiveParcelImage(parcelId, imgUrl)),
      error => console.log("ERROR", error)
    );
  };
};

export const shouldFetchParcelImage = (state, parcelId) => {
  const parcelImage = state.parcelImagesById[parcelId];
  if (!parcelImage) {
    return true;
  } else if (parcelImage.isFetching) {
    return false;
  } else {
    return false; // TODO implement some invalidation scheme
  }
};

export const fetchParcelImageIfNeeded = (parcelId, address) => {
  return (dispatch, getState) => {
    if (shouldFetchParcelImage(getState(), parcelId)) {
      return dispatch(fetchParcelImage(parcelId, address));
    } else {
      return Promise.resolve();
    }
  };
};

export const REQUEST_NEIGHBORHOOD_DATA = "REQUEST_NEIGHBORHOOD_DATA";
export const RECEIVE_NEIGHBORHOOD_DATA = "RECEIVE_NEIGHBORHOOD_DATA";

export const requestNeighborhoodData = hoodId => {
  return { type: REQUEST_NEIGHBORHOOD_DATA, hoodId };
};

export const receiveNeighborhoodData = (hoodId, data) => {
  return {
    type: RECEIVE_NEIGHBORHOOD_DATA,
    hoodId,
    data: data.results[0],
    receivedAt: Date.now()
  };
};

export const fetchNeighborhoodData = hoodId => {
  return function(dispatch) {
    dispatch(requestNeighborhoodData(hoodId));

    return fetch(`https://tools.wprdc.org/neighborhood-api/v0/hood/${hoodId}`)
      .then(response => response.json(), error => console.log("ERROR", error))
      .then(data => {
        dispatch(receiveNeighborhoodData(hoodId, data));
      });
  };
};

const shouldFetchNeighborhoodlData = (state, hoodId) => {
  const data = state.neighborhoodDataById[hoodId];
  if (!data) {
    return true;
  } else if (data.isFetching) {
    return false;
  } else {
    return data.didInvalidate; // is always false  TODO: implement invalidation of data
  }
};

export const fetchNeighborhoodDataIfNeeded = hoodId => {
  return (dispatch, getState) => {
    if (shouldFetchNeighborhoodlData(getState(), hoodId)) {
      return dispatch(fetchNeighborhoodData(hoodId));
    } else {
      return Promise.resolve();
    }
  };
};
