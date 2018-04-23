import {combineReducers} from 'redux';

import * as mapReducers from './mapReducers'

const allReducers = Object.assign({}, mapReducers);
const rootReducer = combineReducers(allReducers);

export default rootReducer