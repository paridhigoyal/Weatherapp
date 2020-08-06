import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
    API_KEY
} from './action_Type'

export const fetchWeather = (city) => {
    return (dispatch) => {

        dispatch(fetchWeatherRequest())
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(response => response.json()).then(data => {

                const city = data
                console.log(city.main.temp);
                dispatch(fetchWeatherSuccess(city))
            })
            .catch(error => {

                dispatch(fetchWeatherFailure(error.message))
            })
    }
}

export const fetchWeatherRequest = () => {
    return {
        type: FETCH_WEATHER_REQUEST
    }
}

export const fetchWeatherSuccess = city => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        payload: city
    }
}

export const fetchWeatherFailure = error => {
    return {
        type: FETCH_WEATHER_FAILURE,
        payload: error
    }
}

// export const fetchhistory= city =>{
//     return{
//         type:FETCH_HISTORY,
//         city
//     }
// }