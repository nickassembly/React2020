import React from 'react';

const WeatherCard = (props) => {
  return (
    <div className='card'>
      <h1>Sydney</h1>
      <h3>AU</h3>
      <img src='' alt='Weather Icon' />
      <h1>20 °C</h1>
      <h3>Clouds</h3>
    </div>
  );
};

export default WeatherCard;
