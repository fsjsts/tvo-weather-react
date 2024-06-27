// WeatherDisplay.jsx
import React from "react";
import '../assets/styles/Weather.css'

const WeatherDisplay = ({ weatherData }) => {
    if (!weatherData) return null;

    return (
        <div className="display">
            <p><strong>Location:</strong> <span>{weatherData.name}, {weatherData.sys.country}</span></p>
            <p><strong>Temperature:</strong> <span>{weatherData.main.temp} °C</span></p>
            <p><strong>Description: </strong> <span>{weatherData.weather[0].description}</span></p>
            <p><strong>Humidity: </strong> <span>{weatherData.main.humidity}</span></p>
            <p><strong>Wind Speed: </strong> <span>{weatherData.wind.speed}</span></p>
        </div>
    );
};

export default WeatherDisplay;
