import React, { useEffect, useState } from "react";
import axios from "axios";
import { convertUnixTimeStampToLocalTime, iconUrlFromCode } from "./Util";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const [city, setCity] = useState("Hyderabad");
  const [weather, setWeather] = useState(null);
  const apiKey = "f9ff7ad4a6c4c0ca4155b5fda8bd0e22";
  const fetchWeather = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleSearch = () => {
    fetchWeather(city);
  };

  const predefinedCities = ["Delhi", "Kolkata", "Chennai", "Kerala", "Gujrat"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="flex justify-around mb-4">
        {predefinedCities.map((cityName) => (
          <button
            key={cityName}
            onClick={() => fetchWeather(cityName)}
            className="text-black dark:text-white px-4 py-2 rounded hover:bg-gradient-to-r from-purple-500 to-blue-500 transition duration-300"
          >
            {cityName}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center w-full m-4">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 dark:text-white bg-blue-600 border border-purple-500 rounded mb-2 md:w-full max-w-lg"
        />
        <button
          onClick={handleSearch}
          className="border border-purple-500 shadow-2xl hover:bg-gradient-to-r from-purple-500 to-blue-600 dark:text-white p-2 rounded md:w-full max-w-lg"
        >
          Get Weather
        </button>
      </div>
      {weather && (
        <div className="text-center dark:text-white">
          <div className="text-xl font-semibold">
            {weather.name}{" "}
            <span className="font-medium">
              {Math.round(weather.main.temp)} °C
            </span>
            <img
              className="w-12 inline-block"
              src={iconUrlFromCode(weather.weather[0].icon)}
              alt="icon"
            />
          </div>
          <div className="m-3">
            <div className="grid grid-cols-4 gap-4 mt-4">
              <WeatherCard
                name="Wind"
                value={`${weather.wind.speed} km/h`}
                icon=""
                //icon="🌬️"
              />
              <WeatherCard
                name="Humidity"
                value={`${weather.main.humidity} km/h`}
                icon=""
                //icon="🌬️"
              />
              <WeatherCard
                name="Feels like"
                value={`${Math.round(weather.main.feels_like)} °C`}
                icon=""
                // icon="🌡️"
              />
              <WeatherCard
                name="Min"
                value={`${Math.round(weather.main.temp_min)} °C`}
                icon=""
                //icon="🌡️"
              />
              <WeatherCard
                name="Max"
                value={`${Math.round(weather.main.temp_max)} °C`}
                icon=""
                //icon="🌡️"
              />
              <WeatherCard
                name="Sunrise"
                value={`${convertUnixTimeStampToLocalTime(
                  weather.sys.sunrise
                )}`}
                icon=""
                //icon="🌡️"
              />
              <WeatherCard
                name="Sunset"
                value={`${convertUnixTimeStampToLocalTime(weather.sys.sunset)}`}
                icon=""
                //icon="🌡️"
              />
              <WeatherCard
                name="Sea Level"
                value={`${weather.main.sea_level} hPa`}
                icon=""
                //icon="🌬️"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
