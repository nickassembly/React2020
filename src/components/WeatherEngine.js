import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard/component';
import PulseLoader from 'react-spinners/PulseLoader';

const WeatherEngine = ({ location }) => {
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const apiKey = 'APPID=' + process.env.REACT_APP_SECRET_KEY;

  // react hooks setstate and useeffect (see below)
  // hooks take a variable and a function

  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async (q) => {
    setLoading(true);
    setQuery('');
    try {
      const apiRes = await fetch(
        `
      ${baseUrl}?q=${q}&units=metric&${apiKey}
      `
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].name,
        country: resJSON.sys.country,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  // will run once when component is mounted, will run again if dependency array changes
  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div>
      {!loading && !error ? (
        <div>
          {' '}
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
            getWeather={getWeather}
          />

        </div>
      ) : loading ? (
        <div style={{ display: 'flex', width: '200px', height: '240px', justifyContent: 'center', alignItems: 'center' }}>
          <PulseLoader size={15} color="purple" />
        </div>
      ) : !loading && error ? (
        <div style={{ color: 'black' }}>
          Error, unable to retrieve data.
          <br />
          <button onClick={() => setError(false)}>Reset</button>
        </div>
      ) : null
      }
    </div >
  );
};

export default WeatherEngine;
