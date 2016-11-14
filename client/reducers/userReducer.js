export default function reducer(state={
    id: null,
    meals: null,
    days: null,
    venues: null,
  }, action) {

    switch (action.type) {
      case 'SET_MEALS': {
        return {
          ...state,
          meals: action.payload.meals,
          days: action.payload.days,
        }
      }

        case 'SET_VENUES': {
            return {
                ...state,
                venues: action.payload
            }
        }
    }

    return state
}
