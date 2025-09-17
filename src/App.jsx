import React, { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const mockWeather = {
    London: { name: "London", country: "GB", temp: 18, description: "Cloudy" },
    Paris: { name: "Paris", country: "FR", temp: 21, description: "Sunny" },
    Tokyo: { name: "Tokyo", country: "JP", temp: 25, description: "Rainy" }
  }

  async function fetchWeather() {
    if (!city.trim()) return;
    setLoading(true);
    setErr(null);

    setTimeout(() => {
      const result = mockWeather[city];
      if (result) {
        setData(result)
      }
      else {
        setErr("City not found")
        setData(null);
      }
      setLoading(false);
    }, 1000)
  }

  return (
    <div>
      <h3>Weather</h3>
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City" />
      <button onClick={fetchWeather}>Search</button>
      {loading && <p>Loading...</p>}
      {err && <p>{err}</p>}
      {data && (
        <div>
          <h4>
            {data.name} -- {data.country}
          </h4>
          <p>Temp:{data.temp}C</p>
          <p>Weather:{data.description}</p>
        </div>
      )}
    </div>
  )
}