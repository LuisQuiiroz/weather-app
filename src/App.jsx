import AppWeather from "./components/AppWeather"
import { WeatherProvider } from "./context/WeatherPovider"

function App() {

  return (
    <WeatherProvider>
      <header>
        <h1>Buscador de Clima</h1>
      </header>
      <AppWeather />
    </WeatherProvider>

  )
}

export default App
