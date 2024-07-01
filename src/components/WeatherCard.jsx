import React from "react";

const WeatherCard = ({ name, value, icon }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-md rounded-lg p-3 md:p-2 flex flex-col items-center justify-center">
      <div className="font-semibold">{name}</div>
      <div className="text-sm px-2">{value}</div>
      <div className="text-sm">{icon}</div>
    </div>
  );
};

export default WeatherCard;
