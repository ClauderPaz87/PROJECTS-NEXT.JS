"use client";
import { useWeatherStore } from "@/store/WeatherStore";
import { Card } from "./ui/card";

const WeatherDays = () => {
  const { weatherDay } = useWeatherStore();
  const fiveDay = Object.values(weatherDay).slice(0, 5);

  const convertDate = (date) => {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
    });
    return newDate;
  };

  return (
    <div>
      <Card className="p-3 rounded-md w-full flex">
        <div className="flex flex-row justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {fiveDay.map((fore) => (
                <Card className="p-2.5 rounded-md w-44" key={fore.dt}>
                  <p className="text-center">{convertDate(fore)}</p>
                  <img
                    src={`http://openweathermap.org/img/wn/${fore.weather[0].icon}.png`}
                  />
                  <p className="text-center">{fore.weather[0].description}</p>
                  <p className="text-center">
                    {Math.round(fore.main.temp_min)}°C /{" "}
                    {Math.round(fore.main.temp_max)}°C
                  </p>
                </Card>
              ))}
            </div>
        </div>
      </Card>
    </div>
  );
};

export default WeatherDays;
