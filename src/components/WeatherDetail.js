import React, { Component } from 'react';


function WeatherDetail({ weather }) {
  const name = weather.weather.name;


  return weather.loading ? (
    <h2>loading</h2>) : weather.error ? (<h2> {weather.error}</h2>) :
      (<ul>

        {weather.weather.main && weather.weather.main.temp}
        <li>City: {name} </li>
        <li> Id: {weather.weather.id}</li>



      </ul>)
};


export default WeatherDetail