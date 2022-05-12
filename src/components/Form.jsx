import { useState } from 'react'
import { useWeather } from '../hooks/useWeather';

const Form = () => {
    const { alert, setAlert, search, searchData, checkWeather } = useWeather();
    const { city, country } = search;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(search).includes('')) {
            setAlert('Los campos son obligatorios');
            return;
        }
        checkWeather(search);
    }
    return (
        <div className="contenedor">
            {alert &&
                <p className="alert"> {alert} </p>}
            <form
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <div className="campo">
                    <label htmlFor="city">Ciudad</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        onChange={searchData}
                        value={city}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="country">País</label>
                    <select
                        name="country"
                        id="country"
                        onChange={searchData}
                        value={country}
                    >
                        <option value="">-- Selecciona un país --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                </div>
                <input type="submit" value="Consultar Clima" />
            </form>

        </div>
    )
}

export default Form