import { MdOutlineWindPower } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { PiThermometerHotThin } from "react-icons/pi";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { GiSunset, GiSunrise } from "react-icons/gi";
import {
  FaTemperatureLow,
  FaTemperatureHigh,
  FaCompressArrowsAlt,
} from "react-icons/fa";

export const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export const convertUnixTimeStampToLocalTime = (timestamp) => {
  // Assuming you have `weather` object with sunrise and sunset Unix timestamps
  const sunriseTimestamp = timestamp * 1000; // Convert seconds to milliseconds

  // Create Date objects
  const sunriseDate = new Date(sunriseTimestamp);

  // Format time into AM/PM format
  const sunriseTime = sunriseDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  // Example output: "6:18 AM"
  return sunriseTime;
  // in-short
  //const date = new Date(timestamp * 1000);
  //return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
};

export const GetDayFromUTC = (dt, index) => {
  const date = new Date();
  date.setDate(date.getDate() + index); // Increment the date by the index
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const dayNumber = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const formattedDate = `${dayNumber}/${month}`;
  if (index === 0) {
    return { day: `Today`, formattedDate };
  }
  return { day, formattedDate }; // e.g., Monday 01/07
};

export const Cities = ["Delhi", "Kolkata", "Chennai", "Kochi", "Ahmadabad"];
export const apiKey = "f9ff7ad4a6c4c0ca4155b5fda8bd0e22";
export const GetColorGradient = (weather) => {
  switch (weather) {
    case "Rain":
      return "bg-gradient-to-r from-gray-700 via-gray-900 to-black";
    case "Clear":
      return "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600";
    case "Snow":
      return "bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500";
    case "Clouds":
      return "bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500";
    case "Drizzle":
      return "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600";
    case "Thunderstorm":
      return "bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800";
    case "Mist":
      return "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400";
    default:
      return "bg-gradient-to-r from-blue-500 to-purple-500";
  }
};

export const GetColorGradientForWeatherCards = (weather) => {
  switch (weather) {
    case "Rain":
      return "bg-gradient-to-r from-blue-500 to-blue-600";
    case "Clear":
      return "bg-gradient-to-r from-yellow-300 to-orange-500";
    case "Snow":
      return "bg-gradient-to-r from-blue-200 to-blue-400";
    case "Clouds":
      return "bg-gradient-to-r from-gray-400 to-gray-600";
    case "Drizzle":
      return "bg-gradient-to-r from-blue-500 to-blue-800";
    case "Thunderstorm":
      return "bg-gradient-to-r from-purple-500 to-purple-800";
    case "Mist":
      return "bg-gradient-to-r from-sky-500 to-blue-400";
    case "Haze":
      return "bg-gradient-to-r from-fuchsia-400 to-pink-500";
    default:
      return "bg-gradient-to-r from-green-300 to-green-500";
  }
};

export const getWeatherCardIcon = (iconForAttribute) => {
  switch (iconForAttribute) {
    case "Wind":
      return <MdOutlineWindPower />;
    case "Humidity":
      return <WiHumidity size={20} />;
    case "Feels":
      return <PiThermometerHotThin />;
    case "Min":
      return <FaTemperatureLow />;
    case "Max":
      return <FaTemperatureHigh />;
    case "Sunrise":
      return <GiSunrise size={17} />;
    case "Sunset":
      return <GiSunset size={17} />;
    case "Pressure":
      return <FaCompressArrowsAlt />;
    default:
      return <TiWeatherWindyCloudy />;
  }
};

export function convertLatAndLongFromDDToDMS(latOrLong) {
  const degree = Math.floor(latOrLong);
  const minutesFloat = (latOrLong - degree) * 60;
  const minutes = Math.floor(minutesFloat);
  const secondFloat = (minutesFloat - minutes) * 60;
  const seconds = Math.round(secondFloat);
  // Output: 34° 3' 8"
  return `${degree}° ${minutes}' ${seconds}"`;
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
