import React, { useState } from "react";
import axios from "axios";
import '../assets/styles/Header.css';

const HeaderRight = ({ weatherData, onSaveWeather }) => {
    const [weatherHistory, setWeatherHistory] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false); 

    const handleShowWeather = async () => {
        try {
            const response = await axios.get('https://tvo.onrender.com/weather');
            setWeatherHistory(response.data);
        } catch (error) {
            console.error("Error fetching weather history:", error);
        }
    };

    const handleSaveWeather = async () => {
        if (weatherData) {
            const { name: city, main: { temp: temperature } } = weatherData;
            const now = new Date();
            const date = now.toISOString().split('T')[0]; // YYYY-MM-DD
            const time = now.toTimeString().split(' ')[0]; // HH:MM:SS

            const newWeatherData = { city, temperature, date, time };

            try {
                await axios.post('https://tvo.onrender.com/weather', newWeatherData);
                console.log("Weather data saved:", newWeatherData);
                setShowConfirmation(true);                          // Show confirmation message
                setTimeout(() => setShowConfirmation(false), 1000); // Hide message after 3 seconds
            } catch (error) {
                console.error("Error saving weather data:", error);
            }
        } else {
            console.log("No weather data available to save.");
        }
    };

    return (
        <div className='user_title'>
            <h1>Express</h1>
            <button className='btn btn-outline-info' onClick={handleSaveWeather}>Save Weather</button>
            <button className='btn btn-outline-info' onClick={handleShowWeather}>Show History</button>
            {showConfirmation && <p className="confirmation-message">Weather Saved!</p>}
            {weatherHistory && (
                <div className='weather-history'>
                    <ul>
                        {weatherHistory.map((data, index) => (
                            <li key={index}>
                                {data.city}: {data.temperature} °C, {data.date} {data.time}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HeaderRight;
