import React, { useState } from "react";
import {
  GetColorGradientForWeatherCards,
  iconUrlFromCode,
  GetDayFromUTC,
  capitalizeFirstLetter,
  convertUnixTimeStampToLocalTime,
} from "./Util";
import { PiThermometerHotThin } from "react-icons/pi";
import {
  FaCompressArrowsAlt,
  FaTemperatureHigh,
  FaTemperatureLow,
} from "react-icons/fa";
import { ImManWoman } from "react-icons/im";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdOutlineWindPower, MdOutlineVisibilityOff } from "react-icons/md";
import { WiHumidity, WiNightSleetStorm } from "react-icons/wi";

const WeeklyForecast = ({ forecast }) => {
  const cityData = forecast.city;
  const forecastData = forecast.list;

  return (
    <div name="weeklyForecast" className="dark:text-white m-6 p-6">
      <h2 className="text-xl font-bold text-center mb-4">
        8-Day Forecast {cityData.name}, {cityData.country}
      </h2>
      {/* <div className="grid grid-cols-2  sm:grid-cols-8 gap-5 my-8 md:my-4"> */}
      <div className="grid grid-cols-1  sm:grid-cols-1 gap-5 my-8 md:my-4">
        {forecastData.map((day, index) => (
          <div
            key={index}
            // className={`shadow-md rounded-lg p-6 flex flex-col items-center justify-center ${
            className={`shadow-md rounded-lg p-6 ${
              day
                ? GetColorGradientForWeatherCards(day.weather[0].main)
                : "bg-gradient-to-r from-blue-500 to-purple-500"
            }`}
          >
            <div className="flex justify-between items-center text-xl font-bold">
              <div className="flex">
                {GetDayFromUTC(day.dt, index).day}
                {", "}
                {GetDayFromUTC(day.dt, index).formattedDate}
              </div>
              {/* <div>{GetDayFromUTC(day.dt, index).formattedDate}</div> */}
              <div className="flex">
                <img
                  className="w-12 inline-block cursor-pointer mx-auto"
                  src={iconUrlFromCode(day.weather[0].icon)}
                  alt="icon"
                  title={day.weather[0].main}
                />{" "}
                {capitalizeFirstLetter(day.weather[0].description)}
              </div>
            </div>
            <hr />
            <div className="flex overflow-x-auto">
              <div className="p-3">
                <div className="flex items-center font-semibold">
                  Feels
                  <PiThermometerHotThin />
                </div>
                {/* <div>
                  <PiThermometerHotThin />
                </div> */}
                <div className="text-sm">
                  {Math.round(day.main.feels_like)}°C
                </div>
              </div>

              <div className="p-3">
                <div className="flex items-center font-semibold">
                  Min
                  <FaTemperatureLow />
                </div>
                <div className="text-sm">{Math.round(day.main.temp_min)}°C</div>
              </div>

              <div className="p-3">
                <div className="flex items-center font-semibold">
                  Max
                  <FaTemperatureHigh />
                </div>
                <div className="text-sm">{Math.round(day.main.temp_max)}°C</div>
              </div>

              <div className="p-3">
                <div className="flex items-center font-semibold">
                  Sunrise <GiSunrise size={17} />
                </div>
                <div className="text-sm">
                  {convertUnixTimeStampToLocalTime(cityData.sunrise)}
                </div>
              </div>

              <div className="p-3">
                <div className="flex items-center font-semibold">
                  Sunset <GiSunset size={17} />
                </div>
                <div className="text-sm">
                  {convertUnixTimeStampToLocalTime(cityData.sunset)}
                </div>
              </div>

              {/* </div> */}

              {/* <div className="flex"> */}
              <div className="p-3">
                <div className="flex items-center font-semibold">
                  Weather <WiNightSleetStorm size={25} />
                  {/* <img
                    className="w-12 inline-block cursor-pointer mx-auto"
                    src={iconUrlFromCode(day.weather[0].icon)}
                    alt="icon"
                    title={day.weather[0].main}
                  /> */}
                </div>
                {/* <div className="text-2xl mt-2">
                    <img
                      className="w-12 inline-block cursor-pointer mx-auto"
                      src={iconUrlFromCode(day.weather[0].icon)}
                      alt="icon"
                      title={day.weather[0].main}
                    />
                  </div> */}
                <div className="text-sm">
                  {capitalizeFirstLetter(day.weather[0].description)}
                </div>
              </div>

              <div className="p-3">
                <div className="flex items-center font-semibold">
                  Wind <MdOutlineWindPower />
                </div>
                <div className="text-sm">{day.wind.speed}km/h</div>
              </div>

              <div className="p-3">
                <div className="flex items-center font-semibold">
                  Humidity <WiHumidity size={20} />
                </div>
                <div className="text-sm">{day.main.humidity}%</div>
              </div>
              <div className="p-3">
                <div className="flex items-center font-semibold">
                  Pressure
                  <FaCompressArrowsAlt />
                </div>
                <div className="text-sm">{day.main.pressure}</div>
              </div>
              <div className="p-3">
                <div className="flex items-center font-semibold">
                  Population
                  <ImManWoman />
                </div>
                <div className="text-sm">{cityData.population}</div>
              </div>
              <div className="p-3">
                <div className="flex items-center font-semibold">
                  Visibility
                  <MdOutlineVisibilityOff />
                </div>
                <div className="text-sm">{day.visibility}</div>
              </div>
            </div>
            {/* </div> */}

            {/* <div className="text-lg">{Math.round(day.main.temp)}°C</div> */}
            {/* <div className="text-sm">
              {capitalizeFirstLetter(day.weather[0].description)}
            </div>
            <div className="text-2xl mt-2">
              <img
                className="w-12 inline-block cursor-pointer mx-auto"
                src={iconUrlFromCode(day.weather[0].icon)}
                alt="icon"
                title={day.weather[0].main}
              />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyForecast;
