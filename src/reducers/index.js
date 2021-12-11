import { combineReducers } from "redux";

import getReducer from "./getReducer";
import viewReducer from "./viewReducer";

const rootReducer = combineReducers({
    get: getReducer,
    view: viewReducer
})

export default rootReducer;