// WeatherForm.jsx
import React from "react";
import '../assets/styles/Form.css'

const WeatherForm = ({ city, setCity, handleSubmit }) => {
    return (
        <form className='form' onSubmit={handleSubmit}>
            <input className = 'input'
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(event) => setCity(event.target.value)}
            />
            <button className='btn btn-outline-info' type="submit">Get Weather</button>
        </form>
    );
};

export default WeatherForm;
