import { combineReducers } from "redux";

import * as mapReducers from "./mapReducers";
import * as dataReducers from "./dataReducers";

const allReducers = Object.assign({}, mapReducers, dataReducers);
const rootReducer = combineReducers(allReducers);

export default rootReducer;
