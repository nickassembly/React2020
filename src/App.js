import React, {useState, useEffect} from 'react';

import WeatherCard from './components/WeatherCard/component';
import './App.css';

function App() {
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const apiKey = 'APPID=' + process.env.REACT_APP_SECRET_KEY;

  // react hooks setstate and useeffect (see below)
  // hooks take a varable and a function
  const [query, setQuery] = useState('Sydney, au');
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const data = async (q) => {
    const apiRes = await fetch(
      `
${baseUrl}?q=${q}&units=metric&${apiKey}
      `
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };

  const handleSearch = (e) => {
    e.preventDefault();

    data(query).then((res) => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].name,
        country: res.sys.country,
      });
    });
  };

  // will run once when component is mounted, will run again if dependency array changes
  useEffect(() => {
    data(query).then((res) => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].name,
        country: res.sys.country,
      });
    });
  }, []);

  return (
    <div className='App'>
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
}

export default App;
