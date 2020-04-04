import React from 'react';

import WeatherCard from './components/WeatherCard/component';
import './App.css';

function App() {
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const apiKey = process.env.REACT_APP_SECRET_KEY;

  const data = async () => {
    const apiRes = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=London,gb&units=metric' + apiKey
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };

  return (
    <div className='App'>
      <WeatherCard temp={-10} condition='Clear' city='Sydney' country='AU' />
      <WeatherCard temp={20} condition='Dust' city='New Orleans' country='US' />
      <WeatherCard temp={40} condition='Tornado' city='London' country='GB' />
    </div>
  );
}

export default App;
