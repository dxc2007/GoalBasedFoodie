export default function reducer(state={
  data: [],
  error: "",
  coords: {},
  limit: 10,
  categories: "",
  query: "",
  section: "food",
  distance: "",
  priceFilter: "",
  foursquare: {
    mainLink: "https://api.foursquare.com/v2/venues/search",
    exploreLink: "https://api.foursquare.com/v2/venues/explore",
    clientId: "PGJIGCAHNKFUYF0SIAP51HC3NWKRQAXVB02BTPSDQJFWOHNP",
    clientSecret:"OWEQ325MR2JIVYMZB5Q2JVRE0AGGQFFVASXZVURJNM2QWLDD",
    v: 20160606,
    intent: "checkin",
    m: "foursquare",
  },
  }, action) {

    switch (action.type) {
      case "SET_COORDS": {
        return Object.assign({}, state, {
          coords: action.payload
        })
      }

      case "SET_CATEGORIES": {
        return Object.assign({}, state, {
          categories: action.payload
        })
      }

      case "SET_PRICE_FILTER": {
        return Object,assign({}, state, { priceFilter: action.payload})
      }

      case "SET_DISTANCE": {
        return Object,assign({}, state, { distance: action.payload})
      }

      case "CALL_API_FULFILLED": {
        return Object,assign({}, state, { data: action.payload})
      }

      case "CALL_API_REJECTED": {
        return Object,assign({}, state, { error: action.payload})
      }

      case "MULTIPLE_API_FULFILLED": {
        return Object,assign({}, state, { data: state.data.slice(0).concat(action.payload)})
      }

      case "MULTIPLE_API_REJECTED": {
        return Object,assign({}, state, { error: action.payload})
      }

    }

    return state
}
