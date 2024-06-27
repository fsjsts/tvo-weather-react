import HeaderLeft from "./components/HeaderLeft.jsx";
import Weather from "./components/Weather.jsx";
import './assets/styles/App.css'

function App() {
    return (
        <div className="app-wrapper">
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <HeaderLeft />
                    </div>
                    <div className='col-8'>
                        <Weather />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;