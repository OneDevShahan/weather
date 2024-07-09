import React from "react";
import { iconUrlFromCode } from "./Util";

const WeeklyForecast = ({ forecast }) => {
  return (
    <div name="weeklyForecast" className="m-6 p-6">
      <h2 className="text-xl font-bold text-center mb-4 text-white">
        7-Day Forecast
      </h2>
      <div
        className="grid grid-cols-2 sm:grid-cols-7 gap-4 my-8 md:my-4"
        //className="gap-4 md:p-2 flex flex-col items-center justify-center"
      >
        {forecast.map((day, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center"
          >
            <div className="text-xl mb-2">
              {new Date(day.dt * 1000).toLocaleDateString()}
            </div>
            <div className="text-lg">{day.main.temp}</div>
            <div className="text-sm">{day.weather[0].description}</div>
            <div className="text-2xl mt-2">
              <img
                className="w-12 inline-block cursor-pointer mx-auto"
                src={iconUrlFromCode(day.weather[0].icon)}
                alt="icon"
                title={day.weather[0].main}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyForecast;
