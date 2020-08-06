import React from 'react';

function WeatherDetail({ weather }) {
    const name = weather.weather.name;
    const main = weather.weather.main;

    return weather.loading ? (
        <h2>loading</h2>) : weather.error ? (<h2> {weather.error}</h2>) :
            (<ul>
                {console.log(main)}

                <li>City: {name} </li>
                <li> Id: {weather.weather.id}</li>


            </ul>)
};

export default WeatherDetail