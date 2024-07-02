import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import {
  Cities,
  apiKey,
  convertUnixTimeStampToLocalTime,
  iconUrlFromCode,
} from "./Util";
import WeatherCard from "./WeatherCard";
import { fetchWeatherByCoordinates } from "../services/Service";

const Weather = () => {
  const [city, setCity] = useState("Hyderabad");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

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
  }, [city]);

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

  const getCurrentLocation = () => {
    if (!apiKey) {
      setError("Please enter an API key.");
      return;
    }

    if (navigator.geolocation) {
      setError("");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoordinates(latitude, longitude, apiKey).then((data) =>
            setWeather(data)
          );
        },
        (error) => {
          console.error(error);
          setError(
            "Unable to retrieve your location. Please check your location settings."
          );
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="flex justify-center w-1/3">
        {Cities.map((cityName) => (
          <button
            key={cityName}
            onClick={() => fetchWeather(cityName)}
            className="text-black px-2 dark:text-white md:px-4  hover:scale-110 ease-in-out"
          >
            {cityName}
          </button>
        ))}
      </div>
      <div className="flex justify-center items-center w-1/3 m-4">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onKeyPress={handleKeyPress}
          onChange={handleInputChange}
          className="p-2 m-2 dark:text-white bg-blue-600 border-none  rounded md:w-full max-w-lg hover:scale-105 ease-in-out duration-500"
        />
        <div className="cursor-pointer dark:text-white hover:scale-110 ease-in-out duration-200 p-2">
          <IoSearchSharp onClick={handleSearch} size={25} />
        </div>
        <div>
          <IoLocationOutline
            size={42}
            onClick={getCurrentLocation}
            className="cursor-pointer dark:text-white hover:scale-110 ease-in-out duration-200 p-2"
          />
        </div>
      </div>
      <div>
        {error && <p className="font-semibold text-red-900 mb-2">{error}</p>}
      </div>
      {weather && (
        <div className="w-full md:w-2/3 dark:text-white">
          <div className="flex justify-evenly items-center font-semibold">
            <p className="text-xl pt-4">{weather.name} </p>
            <span className="font-medium">
              {" "}
              {Math.round(weather.main.temp)}°C
            </span>
            <img
              className="w-12 inline-block cursor-pointer"
              src={iconUrlFromCode(weather.weather[0].icon)}
              alt="icon"
              title={weather.weather[0].main}
            />
          </div>
          <div className="m-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8 md:my-4">
              <WeatherCard
                name="Wind"
                value={`${weather.wind.speed} km/h`}
                icon=""
                //icon="🌬️"
              />
              <WeatherCard
                name="Humidity"
                value={`${weather.main.humidity} %`}
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
                name="Pressure"
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
