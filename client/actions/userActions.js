export function setMeals(meals, days) {
  return {
    type: 'SET_MEALS',
    payload: {meals, days},
  }
}

