import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import {
  Cities,
  GetColorGradient,
  apiKey,
  convertLatAndLongFromDDToDMS,
  convertUnixTimeStampToLocalTime,
  iconUrlFromCode,
} from "./Util";
import WeatherCard from "./WeatherCard";
import {
  fetchLatLongByCityName,
  fetchWeatherByCity,
  fetchWeatherByCoordinates,
  fetchWeeklyForecast,
} from "../services/Service";
import WeeklyForecast from "./WeeklyForecast";
import Loader from "./Loader";

const Weather = () => {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("Hyderabad");
  const [weather, setWeather] = useState(null);
  const [weeklyForecast, setWeeklyForecast] = useState([]);
  const [error, setError] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const fetchWeather = async (cityName) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setLoading(false);
      setError("");
    } catch (error) {
      console.error(error);
      setError("City not found. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
    fetchLatLongByCityName(city)
      .then((data) => {
        setLatitude(data[0].lat);
        setLongitude(data[0].lon);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (!city || city.trim() === "") {
      setError("Please enter a city.");
    } else {
      const weatherData = await fetchWeatherByCity(city);
      const latLonData = await fetchLatLongByCityName(city);
      setWeather(weatherData);
      setLatitude(latLonData[0].lat);
      setLongitude(latLonData[0].lon);
      setLoading(false);
      // const forecastData = await fetchWeeklyForecast(
      //   weatherData.coord.lat,
      //   weatherData.coord.lon,
      //   apiKey
      // );
      // setWeeklyForecast(forecastData);
      setError("");
    }
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    // Validate input using regex to allow only alphabetic characters
    if (/^[A-Za-z]+$/.test(event.target.value) || event.target.value === "") {
      setCity(event.target.value);
      setError(""); // Clear error when input is valid
    } else {
      setError("Please enter only alphabetic characters.");
    }
  };
  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  const getCurrentLocation = () => {
    if (!apiKey) {
      setError("Please enter an API key.");
      return;
    }

    if (navigator.geolocation) {
      setLoading(true);
      setError("");
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const weatherData = await fetchWeatherByCoordinates(
              latitude,
              longitude,
              apiKey
            );
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            setWeather(weatherData);
            setLoading(false);
            // const forecastData = await fetchWeeklyForecast(
            //   latitude,
            //   longitude,
            //   apiKey
            // );
            // console.log("7 Days", forecastData);
            // setWeeklyForecast(forecastData);
            setError("");
          } catch (err) {
            setError(err.message);
            setLoading(false);
          }
        },
        (error) => {
          console.error(error);
          setError(
            "Unable to retrieve your location. Please check your location settings."
          );
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  };

  const fetchLatAndLonWithCityDefaultName = async (cityOrLatLon) => {
    setLoading(true);
    try {
      const [weatherData, latitudeAndLongitudeData] = await Promise.all([
        fetchWeatherByCity(cityOrLatLon),
        fetchLatLongByCityName(cityOrLatLon),
      ]);
      setWeather(weatherData);
      setLatitude(latitudeAndLongitudeData[0].lat);
      setLongitude(latitudeAndLongitudeData[0].lon);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div
      name="weather"
      className={`flex flex-col items-center justify-center h-screen ${
        weather
          ? GetColorGradient(weather.weather[0].main)
          : "bg-gradient-to-r from-blue-500 to-purple-500"
      }`}
    >
      <div className="flex justify-center w-1/3">
        {Cities.map((cityName) => (
          <button
            key={cityName}
            onClick={() => fetchLatAndLonWithCityDefaultName(cityName)}
            className="text-black px-2 dark:text-white md:px-4  hover:scale-110 ease-in-out"
          >
            {cityName}
          </button>
        ))}
      </div>
      <form className="flex justify-center items-center w-1/3 m-4">
        <input
          id="city"
          name="city"
          type="text"
          placeholder="Enter city"
          value={city}
          onKeyDown={handleOnKeyDown}
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
      </form>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>
            {error && (
              <p className="font-semibold text-red-900 mb-2">{error}</p>
            )}
          </div>
          {weather && (
            <div className="w-full md:w-2/3 dark:text-white">
              <div className="flex justify-evenly items-center font-bold">
                <div>
                  <p className="text-xl">
                    {weather.name}, {weather.sys.country}{" "}
                  </p>
                  <span> {Math.round(weather.main.temp)}°C</span>
                  <img
                    className="w-12 inline-block cursor-pointer mx-auto"
                    src={iconUrlFromCode(weather.weather[0].icon)}
                    alt="icon"
                    title={weather.weather[0].main}
                  />
                </div>
                <div>
                  <p>{convertLatAndLongFromDDToDMS(latitude)} N</p>
                  <p>{convertLatAndLongFromDDToDMS(longitude)} E</p>
                </div>
              </div>
              <div className="m-3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8 md:my-4">
                  <WeatherCard
                    name="Wind"
                    value={`${weather.wind.speed} km/h`}
                    weather={weather.weather[0].main}
                    icon=""
                    //icon="🌬️"
                  />
                  <WeatherCard
                    name="Humidity"
                    value={`${weather.main.humidity} %`}
                    weather={weather.weather[0].main}
                    icon=""
                    //icon="🌬️"
                  />
                  <WeatherCard
                    name="Feels"
                    value={`${Math.round(weather.main.feels_like)} °C`}
                    weather={weather.weather[0].main}
                    icon=""
                    // icon="🌡️"
                  />
                  <WeatherCard
                    name="Min"
                    value={`${Math.round(weather.main.temp_min)} °C`}
                    weather={weather.weather[0].main}
                    icon=""
                    //icon="🌡️"
                  />
                  <WeatherCard
                    name="Max"
                    value={`${Math.round(weather.main.temp_max)} °C`}
                    weather={weather.weather[0].main}
                    icon=""
                    //icon="🌡️"
                  />
                  <WeatherCard
                    name="Sunrise"
                    value={`${convertUnixTimeStampToLocalTime(
                      weather.sys.sunrise
                    )}`}
                    weather={weather.weather[0].main}
                    icon=""
                    //icon="🌡️"
                  />
                  <WeatherCard
                    name="Sunset"
                    value={`${convertUnixTimeStampToLocalTime(
                      weather.sys.sunset
                    )}`}
                    weather={weather.weather[0].main}
                    icon=""
                    //icon="🌡️"
                  />
                  <WeatherCard
                    name="Pressure"
                    value={`${weather.main.sea_level} hPa`}
                    weather={weather.weather[0].main}
                    icon=""
                    //icon="🌬️"
                  />
                </div>
              </div>
            </div>
          )}
          {weeklyForecast > 0 && <WeeklyForecast forecast={weeklyForecast} />}
        </>
      )}
    </div>
  );
};

export default Weather;
