import axios from "axios";
import { apiKey } from "../components/Util";

  
export const fetchWeatherByCoordinates = async (latitude, longitude, apiKey) => {
 try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Unable to fetch weather for your location. Please try again.');
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
    throw new Error('City not found. Please try again.');
  }
};

export const fetchWeeklyForecast = async (latitude, longitude, apiKey) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`
    );
    return response.data.daily;
  } catch (error) {
    console.error(error);
    throw new Error('Unable to fetch weekly forecast. Please try again.');
  }
};