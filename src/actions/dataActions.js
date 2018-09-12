import {getStreetViewImage} from "../utils/apiUtils";
import {extractAddressFromData, checkSearchQuery, makeAddressLine} from "../utils/dataUtils";

export const SELECT_PARCEL = "SELECT_PARCEL";
export const SELECT_NEIGHBORHOOD = "SELECT_NEIGHBORHOOD";
export const INVALIDATE_PARCEL = "INVALIDATE_PARCEL";
export const REQUEST_PARCEL_DATA = "REQUEST_PARCEL_DATA";
export const RECEIVE_PARCEL_DATA = "RECEIVE_PARCEL_DATA";
export const REQUEST_PARCEL_IMAGE = "REQUEST_PARCEL_IMAGE";
export const RECEIVE_PARCEL_IMAGE = "RECEIVE_PARCEL_IMAGE";
export const CLOSE_DISPLAY = "CLOSE_DISPLAY";
export const OPEN_ABOUT_DIALOG = "OPEN_ABOUT_DIALOG";
export const CLOSE_ABOUT_DIALOG = "CLOSE_ABOUT_DIALOG";

export const requestPropertyData = parcelId => {
  return {type: REQUEST_PARCEL_DATA, parcelId};
};


export const SELECT = "SELECT";
export const select = (objectType, id, name, properties, previousSelection) => {
  return {type: SELECT, objectType, id, name, properties, previousSelection};
};

export const closeDisplay = (currentSelection) => {
  return {type: CLOSE_DISPLAY, currentSelection};
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
  return function (dispatch) {
    dispatch(requestPropertyData(parcelId));

    return fetch(`https://tools.wprdc.org/property-api/v1/parcels/${parcelId}`)
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

export const searchForParcel = query => {
  // Search query
  return function (dispatch, getState) {
    console.log('searching');
    const {previousSelection} = getState();
    return (checkSearchQuery(query))
      .then(
        parcelId => {

          dispatch(fetchParcelDataIfNeeded(parcelId))
            .then(() => {
              const {geo, data} = getState().parcelDataById[parcelId];
              const centroid = geo.centroid.coordinates;
              const address = makeAddressLine(extractAddressFromData(data));
              dispatch(select('parcels', parcelId, address, {centroid}, previousSelection));
            })
        },
        // on a unsuccessful search, pop up an error
        error => {
          console.log('ERROR', error);
        }
      )
  }
};

//===============//
// PARCEL IMAGE
//==============//

export const requestParcelImage = parcelId => {
  return {type: REQUEST_PARCEL_IMAGE, parcelId};
};

export const receiveParcelImage = (parcelId, imageUrl) => {
  return {type: RECEIVE_PARCEL_IMAGE, parcelId, imageUrl};
};

export const fetchParcelImage = (parcelId, address) => {
  return function (dispatch) {
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
  return {type: REQUEST_NEIGHBORHOOD_DATA, hoodId};
};

export const receiveNeighborhoodData = (hoodId, data) => {
  return {
    type: RECEIVE_NEIGHBORHOOD_DATA,
    hoodId,
    data: data.results[0],
    receivedAt: Date.now()
  };
};

export const fetchNeighborhoodData = (regionType, hoodId) => {
  return function (dispatch) {
    dispatch(requestNeighborhoodData(hoodId));
    console.log(hoodId)
    return fetch(`https://tools.wprdc.org/neighborhood-api/v0/region/${regionType}/${hoodId}`)
      .then(response => response.json(), error => console.log("ERROR", error))
      .then(data => {
        console.log(data)
        dispatch(receiveNeighborhoodData(hoodId, data));
      });
  };
};

const shouldFetchNeighborhoodData = (state, hoodId) => {
  const data = state.neighborhoodDataById[hoodId];
  if (!data) {
    return true;
  } else if (data.isFetching) {
    return false;
  } else {
    return data.didInvalidate; // is always false  TODO: implement invalidation of data
  }
};

export const fetchNeighborhoodDataIfNeeded = (regionType, hoodId) => {
  return (dispatch, getState) => {
    if (shouldFetchNeighborhoodData(getState(), hoodId)) {
      return dispatch(fetchNeighborhoodData(regionType, hoodId));
    } else {
      return Promise.resolve();
    }
  };
};





export const openAboutDialog = () => {
  return {
    type: OPEN_ABOUT_DIALOG
  }
};

export const closeAboutDialog = () => {
  return {
    type: CLOSE_ABOUT_DIALOG
  }
}
