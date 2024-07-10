import React from "react";
import { GetColorGradientForWeatherCards, getWeatherCardIcon } from "./Util";

const WeatherCard = ({ name, value, weather, icon }) => {
  return (
    <div
      name="weatherCard"
      className={`shadow-md rounded-lg p-3 md:p-2 flex flex-col items-center justify-center ${
        weather
          ? GetColorGradientForWeatherCards(weather)
          : "bg-gradient-to-r from-blue-500 to-purple-500"
      }`}
    >
      <div className="text-lg font-semibold flex justify-center items-center gap-2">
        {name} <div>{getWeatherCardIcon(name)}</div>
      </div>
      <div className="text-sm px-2">{value}</div>
      <div className="text-sm">{icon}</div>
    </div>
  );
};

export default WeatherCard;
