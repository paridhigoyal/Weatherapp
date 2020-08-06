import { FETCH_HISTORY } from "../actions/action_Type"

const initialState = {
  city: []

}
const cityList = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_HISTORY: {
      return {
        ...state, city: [...state.city, action.payload]
      }
    }
    default: return state
  }
}
export default cityList;