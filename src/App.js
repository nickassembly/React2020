import React from 'react';

import WeatherCard from './components/WeatherCard/component';
import './App.css';

function App() {
  return (
    <div className='App'>
      <WeatherCard temp={-20} />
      <WeatherCard temp={20} />
      <WeatherCard temp={40} />
    </div>
  );
}

export default App;
