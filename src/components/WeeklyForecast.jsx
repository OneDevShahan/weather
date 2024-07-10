import React from "react";
import {
  GetColorGradientForWeatherCards,
  iconUrlFromCode,
  GetDayFromUTC,
  capitalizeFirstLetter,
} from "./Util";

const WeeklyForecast = ({ forecast, city }) => {
  return (
    <div name="weeklyForecast" className="dark:text-white m-6 p-6">
      <h2 className="text-xl font-bold text-center mb-4">
        7-Day Forecast, {city}
      </h2>
      <div className="grid grid-cols-2  sm:grid-cols-7 gap-5 my-8 md:my-4">
        {forecast.map((day, index) => (
          <div
            key={index}
            className={`shadow-md rounded-lg p-6 flex flex-col items-center justify-center ${
              day
                ? GetColorGradientForWeatherCards(day.weather[0].main)
                : "bg-gradient-to-r from-blue-500 to-purple-500"
            }`}
          >
            <div className="text-xl mb-3">
              <div>{GetDayFromUTC(day.dt, index).day}</div>
              <div>{GetDayFromUTC(day.dt, index).formattedDate}</div>
            </div>
            <div className="text-lg">{Math.round(day.main.temp)}°C</div>
            <div className="text-sm">
              {capitalizeFirstLetter(day.weather[0].description)}
            </div>
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
