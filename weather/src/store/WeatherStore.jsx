import { create } from "zustand";
import axios from "axios";

export const useWeatherStore = create((set) => ({
  weather: {},
  weatherDay: "",

  apiData: async (city) => {
    try {
      const key = "33d0cb806c46ea4ad2a90ca42631c058";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
      const urlDay = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

      const { data } = await axios.get(url);
      const { data:dataDay } = await axios.get(urlDay);

      console.log(dataDay.list)

      const forecasts = dataDay.list;
      let dailyForeCast = {};

      forecasts.forEach((forecast, index) => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();

        if (!dailyForeCast[date]) {
          dailyForeCast[date] = forecast;
        }
      });

      set(() => ({
        weather: data,
        weatherDay: dailyForeCast,
      }));
    } catch (error) {
      console.error("Erro na requisição da API:", error);
      alert(
        "Erro ao buscar dados da cidade. Verifique se o nome está correto."
      );
    }
  },
}));
