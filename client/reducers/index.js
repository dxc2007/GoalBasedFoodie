import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import search from "./fourSquareVenueSearchReducer"
import user from "./userReducer"

export default combineReducers({
  search,
  user,
  routing: routerReducer
})
