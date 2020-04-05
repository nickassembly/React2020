import React, {useState, useEffect} from 'react';
import WeatherCard from './WeatherCard/component';

const WeatherEngine = ({location}) => {
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const apiKey = 'APPID=' + process.env.REACT_APP_SECRET_KEY;

  // react hooks setstate and useeffect (see below)
  // hooks take a variable and a function

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async (q) => {
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
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />

      <form>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
};

export default WeatherEngine;
