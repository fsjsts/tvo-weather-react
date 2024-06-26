import React, { useState } from "react";
import WeatherForm from "./WeatherForm.jsx";
import WeatherDisplay from "./WeatherDisplay.jsx";
import axios from "axios";

const Weather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeatherData = async () => {
        try {
            console.log(import.meta.env.VITE_WEATHER_KEY)
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_KEY}`
            );
            setWeatherData(response.data);
            setError(null);
        } catch (error) {
            console.error(error);
            setError("Failed to fetch weather data. Please try again.");
            setWeatherData(null);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchWeatherData();
    };

    return (
        <div>
            <WeatherForm city={city} setCity={setCity} handleSubmit={handleSubmit} />
            {error && <p>{error}</p>}
            <WeatherDisplay weatherData={weatherData} />
        </div>
    );
};

export default Weather;
