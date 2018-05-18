import {
  SELECT_PARCEL,
  SELECT,
  INVALIDATE_PARCEL,
  REQUEST_PARCEL_DATA,
  RECEIVE_PARCEL_DATA,
  REQUEST_PARCEL_IMAGE,
  RECEIVE_PARCEL_IMAGE,
  REQUEST_NEIGHBORHOOD_DATA,
  RECEIVE_NEIGHBORHOOD_DATA,
  CLOSE_DISPLAY,
  SELECT_NEIGHBORHOOD
} from "../actions/dataActions";
import {
  CLOSE_ALERT_MESSAGE,
  OPEN_ALERT_MESSAGE
} from "../actions/dataActions";

const DEFAULT_PARCEL = "0028F00194000000";

export const currentSelection = (state = {}, action) => {
  switch (action.type) {
    case SELECT:
      const { objectType, id, name } = action;
      return { objectType, id, name };
    case CLOSE_DISPLAY:
      return { objectType: null };
    default:
      return state;
  }
};

const parcelData = (
  state = { isFetching: false, didInvalidate: false, data: {} },
  action
) => {
  switch (action.type) {
    case INVALIDATE_PARCEL:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_PARCEL_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_PARCEL_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        data: action.data,
        geo: action.geo,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

export const parcelDataById = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_PARCEL:
    case RECEIVE_PARCEL_DATA:
    case REQUEST_PARCEL_DATA:
      return Object.assign({}, state, {
        [action.parcelId]: parcelData(state[action.parcelId], action)
      });
    default:
      return state;
  }
};

const neighborhoodData = (
  state = { isFetching: false, didInvalidate: false, data: {} },
  action
) => {
  switch (action.type) {
    case REQUEST_NEIGHBORHOOD_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_NEIGHBORHOOD_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        data: action.data,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

export const neighborhoodDataById = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_NEIGHBORHOOD_DATA:
    case REQUEST_NEIGHBORHOOD_DATA:
      return Object.assign({}, state, {
        [action.hoodId]: neighborhoodData(state[action.hoodId], action)
      });
    default:
      return state;
  }
};




export const dataDisplay = (state = null, action) => {
  switch (action.type) {
    case SELECT_PARCEL:
      return "parcels";
    case SELECT_NEIGHBORHOOD:
      return "neighborhoods";
    case CLOSE_DISPLAY:
      return null;
    default:
      return state;
  }
};

export const parcelImage = (
  state = { isFetching: false, imageUrl: null },
  action
) => {
  switch (action.type) {
    case REQUEST_PARCEL_IMAGE:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_PARCEL_IMAGE:
      return Object.assign({}, state, {
        isFetching: false,
        imageUrl: action.imageUrl
      });
    default:
      return state;
  }
};

export const parcelImagesById = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PARCEL_IMAGE:
    case REQUEST_PARCEL_IMAGE:
      return Object.assign({}, state, {
        [action.parcelId]: parcelImage(state[action.parcelId], action)
      });
    default:
      return state;
  }
};
