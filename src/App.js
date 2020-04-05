import React from 'react';
import './App.css';
import WeatherEngine from './components/WeatherEngine';

function App() {
  return (
    <div className='App'>
      <WeatherEngine location='Sydney, Au' />
    </div>
  );
}

export default App;
