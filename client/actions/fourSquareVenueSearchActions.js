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