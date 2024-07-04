import React from "react";

const WeeklyForecast = ({ forecast }) => {
  return (
    <div name="weeklyForecast" className="mt-6">
      <h2 className="text-xl font-bold text-center mb-4 text-white">
        7-Day Forecast
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {forecast.map((day, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center"
          >
            <div className="text-xl mb-2">
              {new Date(day.dt * 1000).toLocaleDateString()}
            </div>
            <div className="text-lg">{day.temp.day}</div>
            <div className="text-sm">{day.weather[0].description}</div>
            <div className="text-2xl mt-2">{/* Add weather icon here */}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyForecast;
