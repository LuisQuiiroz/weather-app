import React from 'react'
import { useWeather } from '../hooks/useWeather'
import Form from './Form'
import Result from './Result';
import Spinner from './Spinner';

const AppWeather = () => {
    const { resultWeather, loading } = useWeather();
    return (
        <>
            <main className="dos-columnas">
                <Form />
                {loading
                    ? <Spinner />
                    : resultWeather?.name && <Result />}
            </main>
        </>
    )
}

export default AppWeather