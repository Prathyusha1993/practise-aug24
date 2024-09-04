import React, { useEffect, useState } from 'react'

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState('');

    const getWeatherDetails = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY`)
        const data = await response.json();
        setWeather(data);
    };

    useEffect(() => {
        getWeatherDetails();
    }, []);

  return (
    <div>
        <input  type='text' value={location} onChange={(e) => setLocation(e.target.value)}/>
        <button onClick={getWeatherDetails}>Get Weather</button>
        {weather && (
            <div>
                <h3>{weather.name}</h3>
                <p>{weather.weather[0]}</p>
            </div>
        )}
    </div>
  )
}

export default Weather;