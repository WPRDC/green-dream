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
  return {
    type: REQUEST_PARCEL_DATA,
    parcelId
  };
};

export const selectParcel = parcelId => {
  return {
    type: SELECT_PARCEL,
    parcelId
  };
};

export const SELECT = "SELECT";
export const select = (objectType, id, name) => {
  return {
    type: SELECT,
    objectType,
    id,
    name
  };
};

export const selectNeighborhood = hoodId => {
  return {
    type: SELECT_NEIGHBORHOOD,
    hoodId
  };
};

export const closeDisplay = () => {
  return {
    type: CLOSE_DISPLAY
  };
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
      returnedThunk = dispatch(fetchParcelData(parcelId));
    } else {
      // no need to wait
      returnedThunk = Promise.resolve();
    }
    return returnedThunk.then(() => {
      return dispatch(fetchParcelImageIfNeeded(parcelId));
    });
  };
};

export const requestParcelImage = parcelId => {
  return {
    type: REQUEST_PARCEL_IMAGE,
    parcelId
  };
};

export const receiveParcelImage = (parcelId, imageUrl) => {
  return {
    type: RECEIVE_PARCEL_IMAGE,
    parcelId,
    imageUrl
  };
};

export const fetchParcelImage = (state, parcelId) => {
  const addressParts = extractAddressFromData(
    state.parcelDataById[parcelId].data
  );

  return function(dispatch) {
    dispatch(requestParcelImage(parcelId));
    return getStreetViewImage(addressParts).then(
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

export const fetchParcelImageIfNeeded = parcelId => {
  return (dispatch, getState) => {
    if (shouldFetchParcelImage(getState(), parcelId)) {
      return dispatch(fetchParcelImage(getState(), parcelId));
    } else {
      return Promise.resolve();
    }
  };
};
