import React from "react";

const WeatherCard = ({ name, value, icon }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-md rounded-lg p-1 md:p-2 flex flex-col items-center justify-center">
      <div className="text-xl mb-2">{name}</div>
      <div className="text-sm">{value}</div>
      <div className="text-xl mt-2">{icon}</div>
    </div>
  );
};

export default WeatherCard;
