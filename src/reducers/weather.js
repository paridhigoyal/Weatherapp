import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  // FETCH_HISTORY
} from '../actions/action_Type'

const initialState = {
  loading: false,
  weather: {},
  error: ''
}

const weather = (state = initialState, action) => {
  // console.log(action.type)
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_WEATHER_SUCCESS:
      return {
        loading: false,
        weather: action.payload,
        error: ''
      }
    case FETCH_WEATHER_FAILURE:
      return {
        loading: false,
        weather: {},
        error: action.payload
      }
    // case FETCH_HISTORY:
    // return state.map(item=>item.city===action.city ? { ...city, cities: city } : city)



    default: return state
  }
}

export default weather;