"use client";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaTemperatureHigh } from "react-icons/fa";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FaTemperatureLow } from "react-icons/fa6";
import { RiDropFill } from "react-icons/ri";
import { FiWind } from "react-icons/fi";
import { useWeatherStore } from "@/store/WeatherStore";
import { useRef } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import WeatherDays from "@/components/WeatherDays";

export default function Home() {
  const inputCity = useRef(null);
  const { weather, apiData, loading,weatherDay } = useWeatherStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await apiData(inputCity.current.value);
    console.log(weatherDay)
  };

  return (
    <div className="flex flex-col gap-6 justify-center min-h-screen items-center">
      <div className="bg-white rounded-xl p-2 w-80">
        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-md mx-auto"
        >
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaLocationDot className="text-zinc-700" />
          </span>
          <Input
            placeholder="Buscar cidade"
            className="pl-10 pr-10 w-full shadow-sm"
            ref={inputCity}
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          >
            <FaSearch className="text-zinc-700" />
          </button>
        </form>
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="flex flex-col mt-3">
            <div className="flex justify-center">
              <p className="font-semibold text-xl">{weather.name}</p>
            </div>

            {weather.weather && weather.weather.length > 0 && (
              <div>
                <div className="w-full bg-indigo-700 text-white rounded-xl mt-2.5 p-5">
                  <div className="flex justify-around h-16 items-center w-72">
                    {weather.weather && weather.weather.length > 0 && (
                      <Image
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                        alt="Ícone do clima"
                        className="w-28 h-28 mx-auto"
                        width={250}
                        height={100}
                      />
                    )}
                    {weather.weather && weather.weather.length > 0 && (
                      <p className="font-extrabold text-6xl flex pr-6">
                        {Math.round(weather.main.temp)}
                        <span className="h-auto flex items-start text-4xl">
                          ºC
                        </span>
                      </p>
                    )}
                  </div>
                  {weather.weather && weather.weather.length > 0 && (
                    <div className="flex justify-center mt-1 font-medium text-lg">
                      {weather.weather[0].description}
                    </div>
                  )}
                </div>

                <div className="mt-2.5 grid grid-cols-2 gap-4">
                  <Card className="p-1 rounded-md">
                    <div className="flex gap-2">
                      <div className="h-auto flex items-center">
                        <span>
                          <FaTemperatureHigh className="text-orange-700 w-7 h-7" />
                        </span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <p className="font-semibold text-sm">Temp.max</p>
                        <p className="flex">{weather.main.temp_max}<TbTemperatureCelsius className="w-4 h-4"/></p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-1 rounded-md">
                    <div className="flex gap-2">
                      <div className="h-auto flex items-center">
                        <span>
                          <FaTemperatureLow className="text-cyan-600 w-7 h-7" />
                        </span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <p className="font-semibold text-sm">Temp.min</p>
                        <p className="flex">{weather.main.temp_min}<TbTemperatureCelsius className="w-4 h-4"/></p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-1 rounded-md">
                    <div className="flex gap-2">
                      <div className="h-auto flex items-center">
                        <span>
                          <RiDropFill className="text-cyan-800 w-7 h-7" />
                        </span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <p className="font-semibold text-sm">Humidity</p>
                        <p className="flex">{weather.main.humidity}<TbTemperatureCelsius className="w-4 h-4"/></p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-1 rounded-md">
                    <div className="flex gap-2">
                      <div className="h-auto flex items-center">
                        <span>
                          <FiWind className="text-purple-700 w-7 h-7" />
                        </span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <p className="font-semibold text-sm">Wind</p>
                        <p className="flex">{weather.wind.speed} Km/h</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {weather.weather && weather.weather.length > 0 && (
      <WeatherDays/>
      )}
    </div>
  );
}
