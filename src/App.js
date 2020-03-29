import React from 'react';

import WeatherCard from './components/WeatherCard/component';
import './App.css';

function App() {
  return (
    <div className='App'>
      <WeatherCard temp={-10} condition='Clear' city='Sydney' country='AU' />
      <WeatherCard temp={20} condition='Dust' city='New Orleans' country='US' />
      <WeatherCard temp={40} condition='Tornado' city='London' country='GB' />
    </div>
  );
}

export default App;
