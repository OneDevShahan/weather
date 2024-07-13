import axios from "axios";
import { apiKey } from "../components/Util";

export const fetchWeatherByCoordinates = async (
  latitude,
  longitude,
  apiKey
) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Unable to fetch weather for your location. Please try again."
    );
  }
};

export const fetchWeather = async (cityName) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return "City not found. Please try again.";
  }
};

export const fetchWeatherByCity = async (cityName) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return "City not found. Please try again.";
  }
};

//`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API key}`
export const fetchWeeklyForecast = async (cityNameOrLatAndLon) => {
  let url = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&cnt=8&units=metric`;
  if (typeof cityNameOrLatAndLon === "string") {
    url += `&q=${cityNameOrLatAndLon}`;
  } else {
    const { lat, lon } = cityNameOrLatAndLon;
    url += `&lat=${lat}&lon=${lon}`;
  }

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("City not found");
    } else {
      throw new Error("Failed to fetch forecast data");
    }
    //console.error(error);
    //return "Unable to fetch weekly forecast. Please try again.";
  }
};

export const fetchLatLongByCityName = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return "Unable to fetch Lat-Log details. Please try again.";
  }
};
