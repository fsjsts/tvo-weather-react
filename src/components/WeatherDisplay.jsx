import React from "react";

const WeatherDisplay = ({ weatherData }) => {
    if (!weatherData) return null;

    return (
        <div>
            <h2>{weatherData.name}</h2>
            <p>{weatherData.weather[0].description}</p>
            <p>Temperature: {weatherData.main.temp}</p>
        </div>
    );
};

export default WeatherDisplay;
