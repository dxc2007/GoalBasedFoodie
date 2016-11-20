import axios from "axios";
import store from "../store";

export function callOneOffApi() {
  const ApiStuff = store.getState().search;
  const params = {
    ll: ApiStuff.coords.lat + ',' + ApiStuff.coords.lng,
    limit: ApiStuff.limit,
    categoryId: ApiStuff.categories,
    radius: ApiStuff.distance,
    client_id: ApiStuff.foursquare.clientId,
    client_secret: ApiStuff.foursquare.clientSecret,
    v: ApiStuff.foursquare.v,
    intent: ApiStuff.foursquare.intent,
    m: ApiStuff.foursquare.m,
  };
  console.log(params);

  return function(dispatch) {
    axios.get("https://api.foursquare.com/v2/venues/search", { params })
        .then((response) => {
          dispatch({type: 'CALL_API_FULFILLED', payload: response.data.response.venues})
        })
        .catch((err) => {
          dispatch({type: 'CALL_API_REJECTED', payload: err})
        })
  }
}

export function callSearchApi(query) {
  const ApiStuff = store.getState().search;
  const params = {
    ll: ApiStuff.coords.lat + ',' + ApiStuff.coords.lng,
    limit: ApiStuff.limit,
    query: query,
    client_id: ApiStuff.foursquare.clientId,
    client_secret: ApiStuff.foursquare.clientSecret,
    v: ApiStuff.foursquare.v,
    intent: ApiStuff.foursquare.intent,
    m: ApiStuff.foursquare.m,
  };
  console.log(params);

  return function(dispatch) {
    axios.get("https://api.foursquare.com/v2/venues/search", { params })
        .then((response) => {
          dispatch({type: 'CALL_API_FULFILLED', payload: response.data.response.venues})
        })
        .catch((err) => {
          dispatch({type: 'CALL_API_REJECTED', payload: err})
        })
  }
}

export function callPopularApi() {
  const ApiStuff = store.getState().search;
  const params = {
    ll: ApiStuff.coords.lat + ',' + ApiStuff.coords.lng,
    limit: ApiStuff.limit,
    section: ApiStuff.section,
    client_id: ApiStuff.foursquare.clientId,
    client_secret: ApiStuff.foursquare.clientSecret,
    v: ApiStuff.foursquare.v,
    m: ApiStuff.foursquare.m,
  };
  console.log(params);

  return function(dispatch) {
    axios.get("https://api.foursquare.com/v2/venues/explore", { params })
        .then((response) => {
          dispatch({type: 'CALL_API_FULFILLED', payload: response.data.response.groups[0].items})
        })
        .catch((err) => {
          dispatch({type: 'CALL_API_REJECTED', payload: err})
        })
  }
}

export function callMultipleApi() {
  const ApiStuff = store.getState().search;
  const params = {
    ll: ApiStuff.coords.lat + ',' + ApiStuff.coords.lng,
    limit: ApiStuff.limit,
    price: "1",
    section: "food",
    client_id: ApiStuff.foursquare.clientId,
    client_secret: ApiStuff.foursquare.clientSecret,
    v: ApiStuff.foursquare.v,
    intent: ApiStuff.foursquare.intent,
    m: ApiStuff.foursquare.m,
  };

  // function legitFood() {
  //   params.categoryId = "4bf58dd8d48988d145941735,4bf58dd8d48988d111941735,4bf58dd8d48988d14e941735,4bf58dd8d48988d10c941735,52e81612bcbc57f1066b7a05";
  //   axios.get("https://api.foursquare.com/v2/venues/search", { params });
  //   console.log(params);
  // }
  //
  // function randomFood() {
  //   params.categoryId = "4bf58dd8d48988d120951735,4bf58dd8d48988d16d941735,52e81612bcbc57f1066b79f4";
  //   axios.get("https://api.foursquare.com/v2/venues/search", { params });
  //   console.log(params);
  // }

  // return function(dispatch) {
  //   axios.all([legitFood(), randomFood()])
  //       .then(axios.spread(function(legitfood, randomfood) {
  //         dispatch({type: 'MULTIPLE_API_FULFILLED', payload: legitfood.data.response.venues});
  //         dispatch({type: 'MULTIPLE_API_FULFILLED', payload: randomfood.data.response.venues});
  //       }))
  //       .catch((err) => {
  //         dispatch({type: 'MULTIPLE_API_REJECTED', payload: err})
  //       })
  // }
  console.log(params);
  return function(dispatch) {
    axios.get("https://api.foursquare.com/v2/venues/explore", { params })
        .then((response) => {
          dispatch({type: 'MULTIPLE_API_FULFILLED', payload: response.data.response.groups[0].items})
        })
        .catch((err) => {
          dispatch({type: 'MULTIPLE_API_REJECTED', payload: err})
        })
  }
}

export function setCoords(coords) {
  return {
    type: 'SET_COORDS',
    payload: coords,
  }
}

export function setCategories(cats) {
  return {
    type: 'SET_CATEGORIES',
    payload: cats
  }
}

export function setPriceFilter(price) {
  return {
    type: 'SET_PRICE_FILTER',
    payload: price
  }
}

export function setDistance(distance) {
  return {
    type: 'SET_DISTANCE',
    payload: distance
  }
}


