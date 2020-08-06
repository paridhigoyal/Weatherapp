import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,

} from '../actions/action_Type'

const initialState = {
  loading: false,
  weather: {},
  error: '',

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






    default: return state
  }
}

export default weather;