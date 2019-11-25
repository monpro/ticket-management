import { createStore, combineReducers, applyMiddleware } from "redux";

import reducers from "./reducers";
import thunk from "redux-thunk";

export default createStore(
  combineReducers(reducers),
  {
    from: "Sydney",
    to: "Melbourne",
    isCitySelectorVisible: false,
    currentSelectingLeftCity: false,
    cityDate: null,
    isLoadingCityData: false,
    isDateSelectorVisible: false,
    highSpeed: false
  },
  applyMiddleware(thunk)
);
