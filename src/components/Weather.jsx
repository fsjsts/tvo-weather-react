// Weather.jsx
import React, { useState, useEffect } from "react";
import WeatherForm    from "./WeatherForm.jsx";
import WeatherDisplay from "./WeatherDisplay.jsx";
import axios from "axios";

const Weather = ({ weatherData, setWeatherData }) => {
    const [city, setCity] = useState("Toronto");
    // const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_KEY}`
                );
                setWeatherData(response.data);
                setError(null);
            } catch (error) {
                console.error(error);
                setError("City name not found. Please try again.");
                setWeatherData(null);
            }
        };

        fetchWeatherData(); // Fetch weather data on component mount
    }, [city]); // Fetch data whenever city changes

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchWeatherData(); // Refetch weather data on form submit
    };

    return (
        <div className='col-8'>
            <WeatherForm city={city} setCity={setCity} handleSubmit={handleSubmit} />
            {error && <p className="displayerror">{error}</p>}
            <WeatherDisplay weatherData={weatherData} />
        </div>
    );
};

export default Weather;
