import { useContext } from "react";
import { WeatherContext } from "../context/WeatherPovider";

export const useWeather = () => useContext(WeatherContext);