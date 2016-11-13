export default function reducer(state={
    id: null,
    meals: null,
    days: null,
  }, action) {

    switch (action.type) {
      case 'SET_MEALS': {
        return {
          ...state,
          meals: action.payload.meals,
          days: action.payload.days,
        }
      }
    }

    return state
}
