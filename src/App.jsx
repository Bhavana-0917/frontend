import { useState } from "react";
import "./App.css";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {

    const response = await fetch(
      `http://localhost:5000/weather/${city}`
    );

    const data = await response.json();

    setWeather(data);
  };

  return (
    <div className="container">

      <h1>Weather Forecast</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>
        Get Weather
      </button>

      {weather && (
        <div className="weather-box">

          <h2>{weather.city}</h2>

          <p>
            Temperature: {weather.temperature} °C
          </p>

          <p>
            Weather: {weather.description}
          </p>

        </div>
      )}

    </div>
  );
}

export default App;