// App.jsx
import {useState} from 'react'
import HeaderLeft from "./components/HeaderLeft.jsx";
import HeaderRight from "./components/HeaderRight.jsx";
import Weather from "./components/Weather.jsx";
import './assets/styles/App.css'

function App() {
    const [weatherData, setWeatherData] = useState(null);

    const saveWeatherData = (data) => {
        console.log("Saving weather data to database:", data);
        // axios.post('/api/savedata', data).then(response => { console.log(response); });
    };

    return (
        <div className="app-wrapper">
            <div className='container'>
                <div className='row'>
                    <div className='col'>       <HeaderLeft />                                                           </div>
                    <div className='col-6'>     <Weather weatherData={weatherData} setWeatherData={setWeatherData} />    </div>
                    <div className='col colr'>  <HeaderRight weatherData={weatherData} onSaveWeather={saveWeatherData} /></div>
                </div>
            </div>
        </div>
    );
}

export default App;