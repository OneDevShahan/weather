import React from "react";
import {
  FaCompressArrowsAlt,
  FaTemperatureHigh,
  FaTemperatureLow,
} from "react-icons/fa";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { ImManWoman } from "react-icons/im";
import { MdOutlineVisibilityOff, MdOutlineWindPower } from "react-icons/md";
import { PiThermometerHotThin } from "react-icons/pi";
import { WiHumidity, WiNightSleetStorm } from "react-icons/wi";
import {
  GetColorGradientForWeatherCards,
  GetDayFromUTC,
  capitalizeFirstLetter,
  convertUnixTimeStampToLocalTime,
  iconUrlFromCode,
} from "./Util";

const WeeklyForecast = ({ forecast }) => {
  const cityData = forecast.city;
  const forecastData = forecast.list;

  return (
    <div name="weeklyForecast" className="dark:text-white m-6 p-6">
      <h2 className="text-xl font-bold text-center mb-4">
        8-Day Forecast {cityData.name}, {cityData.country}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 my-8 md:my-4">
        {forecastData.map((day, index) => (
          <div
            key={index}
            className={`shadow-md rounded-lg p-6 ${
              day
                ? GetColorGradientForWeatherCards(day.weather[0].main)
                : "bg-gradient-to-r from-blue-500 to-purple-500"
            } hover:scale-105 ease-in-out duration-700`}
          >
            <div className="flex justify-between items-center text-xl font-bold">
              <div className="flex">
                {GetDayFromUTC(day.dt, index).day}
                {", "}
                {GetDayFromUTC(day.dt, index).formattedDate}
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="w-11 inline-block cursor-pointer mx-auto"
                  src={iconUrlFromCode(day.weather[0].icon)}
                  alt="icon"
                  title={day.weather[0].main}
                />{" "}
                {capitalizeFirstLetter(day.weather[0].description)}
              </div>
            </div>
            <hr />
            <div className="flex justify-center items-center overflow-x-auto w-full">
              <div className="flex w-full">
                <div className="flex flex-col justify-center items-center p-3">
                  <div className="flex justify-center items-center font-semibold">
                    Feels
                    <p className="p-1">
                      <PiThermometerHotThin />
                    </p>
                  </div>
                  <div className="text-sm">
                    {Math.round(day.main.feels_like)}°C
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center p-3 min-w-[100px]">
                  <div className="flex justify-center items-center font-semibold">
                    Min
                    <p className="p-1">
                      <FaTemperatureLow />
                    </p>
                  </div>
                  <div className="text-sm">
                    {Math.round(day.main.temp_min)}°C
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center p-3 min-w-[100px]">
                  <div className="flex justify-center items-center font-semibold">
                    Max{" "}
                    <p className="p-1">
                      <FaTemperatureHigh />
                    </p>
                  </div>
                  <div className="text-sm">
                    {Math.round(day.main.temp_max)}°C
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center p-3 min-w-[100px]">
                  <div className="flex justify-center items-center font-semibold">
                    Sunrise{" "}
                    <p className="p-1">
                      <GiSunrise size={17} />
                    </p>
                  </div>
                  <div className="text-sm">
                    {convertUnixTimeStampToLocalTime(cityData.sunrise)}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center p-3 min-w-[100px]">
                  <div className="flex justify-center items-center font-semibold">
                    Sunset{" "}
                    <p className="p-1">
                      <GiSunset size={17} />
                    </p>
                  </div>
                  <div className="text-sm">
                    {convertUnixTimeStampToLocalTime(cityData.sunset)}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center p-3 min-w-[100px]">
                  <div className="flex justify-center items-center font-semibold">
                    Weather
                    <p className="p-1">
                      <WiNightSleetStorm size={20} />
                    </p>
                  </div>
                  <div className="text-sm">
                    {capitalizeFirstLetter(day.weather[0].description)}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center p-3 min-w-[100px]">
                  <div className="flex justify-center items-center font-semibold">
                    Wind{" "}
                    <p className="p-1">
                      <MdOutlineWindPower />
                    </p>
                  </div>
                  <div className="text-sm">{day.wind.speed}km/h</div>
                </div>

                <div className="flex flex-col justify-center items-center p-3 min-w-[100px]">
                  <div className="flex justify-center items-center font-semibold">
                    Humidity{" "}
                    <p className="p-1">
                      <WiHumidity size={20} />
                    </p>
                  </div>
                  <div className="text-sm">{day.main.humidity}%</div>
                </div>
                <div className="flex flex-col justify-center items-center p-3 min-w-[100px]">
                  <div className="flex justify-center items-center font-semibold">
                    Pressure{" "}
                    <p className="p-1">
                      <FaCompressArrowsAlt />
                    </p>
                  </div>
                  <div className="text-sm">{day.main.pressure}</div>
                </div>
                <div className="flex flex-col justify-center items-center p-3 min-w-[100px]">
                  <div className="flex justify-center items-center font-semibold">
                    Population{" "}
                    <p className="p-1">
                      <ImManWoman />
                    </p>
                  </div>
                  <div className="text-sm">{cityData.population}</div>
                </div>
                <div className="flex flex-col justify-center items-center p-3 min-w-[100px]">
                  <div className="flex justify-center items-center font-semibold">
                    Visibility{" "}
                    <p className="p-1">
                      <MdOutlineVisibilityOff />
                    </p>
                  </div>
                  <div className="text-sm">{day.visibility}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyForecast;
