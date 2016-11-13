import { combineReducers } from "redux"

import search from "./fourSquareVenueSearchReducer"
import user from "./userReducer"

export default combineReducers({
  search,
  user,
})
