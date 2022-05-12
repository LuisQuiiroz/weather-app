import { createContext, useState } from "react";
import axios from 'axios';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

    const [alert, setAlert] = useState('');
    const [loading, setLoading] = useState(false);

    const [search, setSearch] = useState({
        city: '',
        country: ''
    });
    const [resultWeather, setResultWeather] = useState({});

    const searchData = (e) => {
        setSearch({
            ...search,
            [e.target.name]: [e.target.value]
        })
    }
    const checkWeather = async (data) => {
        setLoading(true);
        try {
            const { city, country } = data;

            const appId = import.meta.env.VITE_API_KEY;

            const limit = 1;

            const urlCity = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=${limit}&appid=${appId}`

            const { data: dataCity } = await axios(urlCity);

            const { lat, lon } = dataCity[0];

            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const { data: dataWeather } = await axios(urlWeather);

            setResultWeather(dataWeather);
            setAlert('');
        } catch (error) {
            console.log(error)
            setAlert('La ciudad o el país no es válido')
        }
        setLoading(false);

    }

    return (
        <WeatherContext.Provider
            value={{
                alert,
                setAlert,
                loading,
                search,
                resultWeather,
                searchData,
                checkWeather
            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}