export const SELECT_PARCEL = 'SELECT_PARCEL';
export const SELECT_NEIGHBORHOOD= 'SELECT_NEIGHBORHOOD';
export const INVALIDATE_PARCEL = 'INVALIDATE_PARCEL';
export const REQUEST_PARCEL_DATA = 'REQUEST_PARCEL_DATA';
export const RECEIVE_PARCEL_DATA = 'RECEIVE_PARCEL_DATA';
export const REQUEST_PARCEL_IMAGE = 'REQUEST_PARCEL_IMAGE';
export const RECEIVE_PARCEL_IMAGE = 'RECEIVE_PARCEL_IMAGE';
export const CLOSE_DISPLAY = 'CLOSE_DISPLAY';

export const requestPropertyData = parcelId => {
  return {
    type: REQUEST_PARCEL_DATA,
    parcelId
  }
};

export const selectParcel = parcelId => {
  return {
    type: SELECT_PARCEL,
    parcelId
  }
};

export const selectNeighborhood = hoodId => {
  return {
    type: SELECT_NEIGHBORHOOD,
    hoodId
  }
};

export const closeDisplay = () => {
  return {
    type: CLOSE_DISPLAY
  }
}


export const receivePropertyData = (parcelId, data) => {
  return {
    type: RECEIVE_PARCEL_DATA,
    parcelId,
    data: Object.assign({}, data.results[0].data, {owner: data.results[0].owner}),
    geo: data.results[0].geos,
    receivedAt: Date.now()
  }
};


export const fetchParcelData = (parcelId) => {
  return function (dispatch) {
    dispatch(requestPropertyData(parcelId));

    return fetch(`http://tools.wprdc.org/property-api/v1/parcels/${parcelId}`)
      .then(
        response => response.json(),
        error => console.log('ERROR', error)
      )
      .then(
        data => {
          dispatch(receivePropertyData(parcelId, data));
        }
      )
  }
};

const shouldFetchParcelData = (state, parcelId) => {
  const parcelData = state.parcelDataById[parcelId];
  if (!parcelData) {
    return true
  } else if (parcelData.isFetching) {
    return false
  } else {
    return parcelData.didInvalidate  // is always false  TODO: implement invalidation of data
  }
};

export const fetchParcelDataIfNeeded = parcelId => {
  let returnedThunk;

  return (dispatch, getState) => {
    if (shouldFetchParcelData(getState(), parcelId)) {
      return dispatch(fetchParcelData(parcelId))
    } else {
      return Promise.resolve();
    }

  }
}