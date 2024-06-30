import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Cities,
  convertUnixTimeStampToLocalTime,
  iconUrlFromCode,
} from "./Util";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const [city, setCity] = useState("Hyderabad");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const apiKey = "f9ff7ad4a6c4c0ca4155b5fda8bd0e22";

  const fetchWeather = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setError("");
    } catch (error) {
      console.error(error);
      setError("City not found. Please try again.");
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = () => {
    if (!city || city.trim() === "") {
      setError("Please enter a city.");
    } else {
      fetchWeather(city);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Validate input using regex to allow only alphabetic characters
    if (/^[A-Za-z]+$/.test(inputValue) || inputValue === "") {
      setCity(inputValue);
      setError(""); // Clear error when input is valid
    } else {
      setError("Please enter only alphabetic characters.");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="flex justify-around mb-4">
        {Cities.map((cityName) => (
          <button
            key={cityName}
            onClick={() => fetchWeather(cityName)}
            className="text-black text-xl px-2 dark:text-white md:px-4  hover:scale-110 ease-in-out"
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
          onKeyPress={handleKeyPress}
          onChange={handleInputChange}
          className="p-2 dark:text-white bg-blue-600 border border-purple-500 rounded mb-2 md:w-full max-w-lg hover:scale-110 ease-in-out duration-500"
        />
        <button
          onClick={handleSearch}
          className="border border-purple-500 shadow-2xl hover:bg-gradient-to-r from-purple-500 to-blue-600 dark:text-white p-2 rounded md:w-full max-w-lg"
        >
          Check
        </button>
        {error && <p className="text-red-900 mt-2">{error}</p>}
      </div>
      {weather && (
        <div className="text-center dark:text-white">
          <div className="flex justify-evenly items-center font-semibold">
            <p className="text-xl">{weather.name} </p>
            <span className="font-medium">
              {" "}
              {Math.round(weather.main.temp)}°C
            </span>
            <img
              className="w-12 inline-block"
              src={iconUrlFromCode(weather.weather[0].icon)}
              alt="icon"
            />
          </div>
          <div className="m-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
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
                name="Feels"
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
