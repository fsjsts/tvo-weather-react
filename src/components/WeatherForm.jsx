import React from "react";

const WeatherForm = ({ city, setCity, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(event) => setCity(event.target.value)}
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default WeatherForm;
