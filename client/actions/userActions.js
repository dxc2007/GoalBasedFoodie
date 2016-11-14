export function setMeals(meals, days) {
  return {
    type: 'SET_MEALS',
    payload: {meals, days},
  }
}

export function setVenues(venues) {
  return {
    type: 'SET_VENUES',
    payload: venues,
  }
}
