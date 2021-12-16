import { combineReducers } from "redux";

import getReducer from "./getReducer";
import viewReducer from "./viewReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
    get: getReducer,
    view: viewReducer,
    search: searchReducer
})

export default rootReducer;