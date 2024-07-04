import React from "react";
import { getWeatherCardIcon } from "./Util";

const WeatherCard = ({ name, value, icon }) => {
  return (
    <div
      name="weatherCard"
      className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-md rounded-lg p-3 md:p-2 flex flex-col items-center justify-center"
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
