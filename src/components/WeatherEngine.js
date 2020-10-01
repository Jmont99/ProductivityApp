import React, { useState, useEffect } from "react";

import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({ location }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    chanceRainToday: [null, null, null, null, null],
    chanceRainWeek: [null, null, null, null, null, null, null, null],
    chanceRainLast: null,
    hour: null,
    hour2: null,
    hour3: null,
  });

  const getWeather = async (q) => {
    setLoading(true);
    try {
      //temperature
      const apiResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=imperial&APPID=58734bbc9b55fea160be6d235a8e0463`
      );
      const resJSON = await apiResponse.json();

      //lat&lng
      const apiResponse1 = await fetch(
        `http://open.mapquestapi.com/geocoding/v1/address?key=JwlAf5zKmLAdAAnvxKJPEL2j5sfLd7Fx&location=${q}`
      );
      const resJSON1 = await apiResponse1.json();

      //chance of rain
      const apiResponse2 = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${resJSON1.results[0].locations[1].displayLatLng.lat}&lon=${resJSON1.results[0].locations[1].displayLatLng.lng}&%20exclude=current,minutely,daily&appid=58734bbc9b55fea160be6d235a8e0463`
      );
      const resJSON2 = await apiResponse2.json();
      console.log(resJSON2);
      //time
      const apiResponse3 = await fetch(
        `http://worldtimeapi.org/api/timezone/${resJSON2.timezone}`
      );
      const resJSON3 = await apiResponse3.json();
      console.log(resJSON3.datetime[6]);
      console.log(resJSON3);

      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        //
        condition: resJSON.weather[0].main,
        chanceRainWeek: [
          resJSON2.daily[1].pop,
          resJSON2.daily[2].pop,
          resJSON2.daily[3].pop,
          resJSON2.daily[4].pop,
          resJSON2.daily[5].pop,
          resJSON2.daily[6].pop,
          resJSON2.daily[6].pop,
        ],
        chanceRainToday: [
          resJSON2.hourly[0].pop,
          resJSON2.hourly[1].pop,
          resJSON2.hourly[2].pop,
          resJSON2.hourly[3].pop,
          resJSON2.hourly[4].pop,
        ],
        chanceRainLast: resJSON2.daily[7].pop,
        hour: resJSON3.datetime.substring(11, 13),
        hour2: resJSON3.datetime.substring(11, 13).charAt(0),
        hour3: resJSON3.datetime.substring(11, 13).charAt(1),
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  if (error) {
    return (
      <div style={{ color: "black" }}>
        <button onClick={() => setError(false)}>Try again</button>
      </div>
    );
  }
  if (loading) {
    return <div style={{ color: "black" }}>Loading</div>;
  }
  return (
    <WeatherCard
      temp={weather.temp}
      condition={weather.condition}
      city={weather.city}
      getWeather={getWeather}
      cT0={weather.chanceRainToday[0]}
      cT1={weather.chanceRainToday[1]}
      cT2={weather.chanceRainToday[2]}
      cT3={weather.chanceRainToday[3]}
      cT4={weather.chanceRainToday[4]}
      cW1={weather.chanceRainWeek[1]}
      cW2={weather.chanceRainWeek[2]}
      cW3={weather.chanceRainWeek[3]}
      cW4={weather.chanceRainWeek[4]}
      cW5={weather.chanceRainWeek[5]}
      cW6={weather.chanceRainWeek[6]}
      cW7={weather.chanceRainLast}
      hour={weather.hour}
      hour2={weather.hour2}
      hour3={weather.hour3}
    />
  );
};

export default WeatherEngine;
