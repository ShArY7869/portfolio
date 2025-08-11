import React, { useState } from "react";

const API_KEY = "40535f7ff0ef02034bf6055359ada3c1";

function unixToTime(unix, timezone) {
  const date = new Date((unix + timezone) * 1000);
  return date.toUTCString().match(/(\d{2}:\d{2})/)[0];
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, { weekday: "short", day: "numeric" });
}

function groupForecastByDay(list) {
  const days = {};
  list.forEach((item) => {
    const day = item.dt_txt.split(" ")[0];
    if (!days[day]) days[day] = [];
    days[day].push(item);
  });
  return days;
}

function getDailySummary(dayList) {
  // Average temp, most common weather condition icon & description
  const temps = dayList.map((i) => i.main.temp);
  const avgTemp = temps.reduce((a, b) => a + b, 0) / temps.length;

  // Pick the weather icon & description from the item with the highest pop (chance of rain) or the middle one
  const sortedByPop = dayList.slice().sort((a, b) => b.pop - a.pop);
  const mainWeather = sortedByPop[0].weather[0];

  return {
    avgTemp: Math.round(avgTemp),
    icon: mainWeather.icon,
    description: mainWeather.description,
  };
}

function getBackgroundClass(weatherMain) {
  // Return CSS class based on weather condition
  switch (weatherMain.toLowerCase()) {
    case "rain":
    case "drizzle":
    case "thunderstorm":
      return "rainy";
    case "snow":
      return "snowy";
    case "clear":
      return "clear";
    case "clouds":
      return "cloudy";
    default:
      return "clear";
  }
}

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null); // current weather
  const [forecast, setForecast] = useState(null); // 5-day forecast
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeatherData = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);
    setForecast(null);

    try {
      const [weatherRes, forecastRes] = await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city
          )}&appid=${API_KEY}&units=metric`
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
            city
          )}&appid=${API_KEY}&units=metric`
        ),
      ]);

      if (!weatherRes.ok) throw new Error("City not found");
      if (!forecastRes.ok) throw new Error("Forecast not found");

      const weatherData = await weatherRes.json();
      const forecastData = await forecastRes.json();

      setWeather(weatherData);

      const daysGrouped = groupForecastByDay(forecastData.list);
      const dailySummaries = Object.entries(daysGrouped).map(([day, list]) => ({
        day,
        summary: getDailySummary(list),
      }));

      setForecast(dailySummaries.slice(0, 5)); // first 5 days

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") fetchWeatherData();
  };

  const bgClass = weather ? getBackgroundClass(weather.weather[0].main) : "clear";

  return (
    <>
      <style>{`
        /* Background animations */
        body, #root {
          margin: 0; padding: 0; height: 100%;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .app-container {
          min-height: 100vh;
          padding: 30px 20px;
          box-sizing: border-box;
          background-color: #a0c8f0;
          transition: background-color 0.8s ease;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          color: #222;
        }
        .clear {
          background: linear-gradient(to top, #fceabb, #f8b500);
        }
        .rainy {
          background: linear-gradient(to top, #4a90e2, #142850);
          overflow: hidden;
          position: relative;
          color: #f0f0f0;
        }
        .rainy .raindrop {
          position: absolute;
          bottom: 100%;
          width: 2px;
          height: 15px;
          background: rgba(255, 255, 255, 0.7);
          animation: rain-fall linear infinite;
          opacity: 0.6;
          border-radius: 1px;
        }
        @keyframes rain-fall {
          to {
            transform: translateY(100vh);
          }
        }
        .snowy {
          background: linear-gradient(to top, #dae6f3, #a3c1f0);
          color: #222;
        }
        .cloudy {
          background: linear-gradient(to top, #d7dde7, #7f8c8d);
          color: #222;
        }

        .container {
          background-color: rgba(255, 255, 255, 0.9);
          max-width: 460px;
          border-radius: 14px;
          padding: 25px 25px 40px 25px;
          box-shadow: 0 0 25px rgba(0,0,0,0.15);
          margin: 0 auto;
          color: #222;
        }

        input[type=text] {
          padding: 14px 12px;
          font-size: 18px;
          width: 100%;
          border-radius: 10px;
          border: 1px solid #ccc;
          margin-bottom: 16px;
          box-sizing: border-box;
          outline: none;
        }
        input[type=text]:focus {
          border-color: #0984e3;
          box-shadow: 0 0 8px #74b9ff;
        }
        button {
          width: 100%;
          padding: 14px;
          background-color: #0984e3;
          color: white;
          border: none;
          font-size: 18px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 700;
          letter-spacing: 1px;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #74b9ff;
        }

        h2 {
          margin-top: 0;
          text-align: center;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .current-weather {
          text-align: center;
          margin-bottom: 30px;
        }
        .current-weather img {
          width: 120px;
          height: 120px;
        }
        .temp {
          font-size: 56px;
          font-weight: 700;
          margin: 10px 0;
        }
        .desc {
          text-transform: capitalize;
          font-style: italic;
          font-size: 22px;
          margin-bottom: 15px;
          color: #636e72;
        }

        .details {
          font-size: 16px;
          margin-bottom: 6px;
        }

        .forecast {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          flex-wrap: nowrap;
          overflow-x: auto;
          padding-bottom: 10px;
        }
        .forecast-day {
          background-color: #0984e3;
          color: white;
          flex: 0 0 72px;
          border-radius: 10px;
          padding: 10px 8px;
          text-align: center;
          box-shadow: 0 0 8px rgba(9, 132, 227, 0.5);
          cursor: default;
          user-select: none;
        }
        .forecast-day img {
          width: 50px;
          height: 50px;
          margin-bottom: 6px;
        }
        .forecast-day .day-name {
          font-weight: 700;
          margin-bottom: 4px;
        }
        .forecast-day .temp {
          font-weight: 700;
          font-size: 20px;
        }

        /* Raindrop animations */
        .raindrop:nth-child(1) {
          left: 10%;
          animation-duration: 0.8s;
          animation-delay: 0s;
          height: 15px;
        }
        .raindrop:nth-child(2) {
          left: 20%;
          animation-duration: 1s;
          animation-delay: 0.2s;
          height: 10px;
        }
        .raindrop:nth-child(3) {
          left: 35%;
          animation-duration: 0.75s;
          animation-delay: 0.1s;
          height: 14px;
        }
        .raindrop:nth-child(4) {
          left: 50%;
          animation-duration: 0.9s;
          animation-delay: 0.3s;
          height: 12px;
        }
        .raindrop:nth-child(5) {
          left: 65%;
          animation-duration: 1.1s;
          animation-delay: 0.25s;
          height: 14px;
        }
        .raindrop:nth-child(6) {
          left: 80%;
          animation-duration: 0.85s;
          animation-delay: 0.15s;
          height: 13px;
        }
      `}</style>

      <div className={`app-container ${bgClass}`}>
        {bgClass === "rainy" && (
          <>
            <div className="raindrop"></div>
            <div className="raindrop"></div>
            <div className="raindrop"></div>
            <div className="raindrop"></div>
            <div className="raindrop"></div>
            <div className="raindrop"></div>
          </>
        )}

        <div className="container">
          <h2>🌤 Weather & Forecast</h2>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={fetchWeatherData}>Get Weather</button>

          {loading && <p style={{ textAlign: "center", marginTop: 20 }}>Loading...</p>}
          {error && <p style={{ color: "red", marginTop: 20, textAlign: "center" }}>{error}</p>}

          {weather && (
            <>
              <div className="current-weather">
                <h3>
                  {weather.name}, {weather.sys.country}
                </h3>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                  alt={weather.weather[0].description}
                />
                <p className="temp">{Math.round(weather.main.temp)}°C</p>
                <p className="desc">{weather.weather[0].description}</p>

                <p className="details">Feels like: {Math.round(weather.main.feels_like)}°C</p>
                <p className="details">Humidity: {weather.main.humidity}%</p>
                <p className="details">Wind: {weather.wind.speed} m/s</p>
                <p className="details">
                  Sunrise: {unixToTime(weather.sys.sunrise, weather.timezone)} (local)
                </p>
                <p className="details">
                  Sunset: {unixToTime(weather.sys.sunset, weather.timezone)} (local)
                </p>
              </div>

              {forecast && (
                <div className="forecast" aria-label="5 day weather forecast">
                  {forecast.map(({ day, summary }) => (
                    <div key={day} className="forecast-day">
                      <div className="day-name">{formatDate(day)}</div>
                      <img
                        src={`https://openweathermap.org/img/wn/${summary.icon}@2x.png`}
                        alt={summary.description}
                      />
                      <div className="temp">{summary.avgTemp}°C</div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
