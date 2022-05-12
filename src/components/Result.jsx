import React from 'react'
import { useWeather } from '../hooks/useWeather'

const Result = () => {
    const { resultWeather } = useWeather();
    const { name, main } = resultWeather;
    const kelvin = 273.15
    return (
        <div className="contenedor clima">
            <h2>El clima de  {name} es: </h2>
            <p>
                {parseInt(main.temp - kelvin)} <span>°C</span>
            </p>
            <div className="temp_min_max">
                <p>
                    Min:{parseInt(main.temp_min - kelvin)} <span>°C</span>
                </p>
                <p>
                    Max:{parseInt(main.temp_max - kelvin)} <span>°C</span>
                </p>
            </div>
        </div>
    )
}

export default Result