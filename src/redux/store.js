import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { worksReducer } from "./reducers";

export default createStore(
    combineReducers({ works: worksReducer }),
    composeWithDevTools(applyMiddleware(thunk))
);