import {
  SELECT_PARCEL,
  INVALIDATE_PARCEL,
  REQUEST_PARCEL_DATA,
  RECEIVE_PARCEL_DATA,
  REQUEST_PARCEL_IMAGE,
  RECEIVE_PARCEL_IMAGE,
  CLOSE_DISPLAY, SELECT_NEIGHBORHOOD
} from "../actions/dataActions";
import {CLOSE_ALERT_MESSAGE, OPEN_ALERT_MESSAGE} from "../actions/dataActions";


const DEFAULT_PARCEL = '0028F00194000000';

export const currentParcelId = (state = DEFAULT_PARCEL, action) => {
  switch (action.type) {
    case SELECT_PARCEL:
      return action.parcelId;
    default:
      return state
  }
};

const parcelData = (state = {isFetching: false, didInvalidate: false, data: {}}, action) => {
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
      return state
  }
};

export const dataDisplay = (state = null, action) => {
  switch (action.type) {
    case SELECT_PARCEL:
      return 'parcels';
    case SELECT_NEIGHBORHOOD:
      return 'neighborhoods';
    case CLOSE_DISPLAY:
      return null;
    default:
      return state;
  }
}
