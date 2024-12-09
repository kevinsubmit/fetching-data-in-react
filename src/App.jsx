import { useState, useEffect } from "react";
import WeatherSearch from "./components/WeatherSearch.jsx";
import WeatherDetails from "./components/WeatherDetails.jsx";
import { show } from "./services/weatherService.js";
import "./App.css";

const App = () => {
  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState("");
  const [loading, setLoading] = useState(false);

  // A component onload/mounted effect
  useEffect(() => {
    console.log("Component has mounted");
    // Get coords and use that for search
    // navigator.geolocation.getCurrentPosition(async (position) => {
    //   const lat = position.coords.latitude
    //   const lon = position.coords.longitude
    //   const weather = await show(`${lat},${lon}`)
    //   setTemp(weather.current.temp_f)
    //   setLocation(weather.location.name)
    // });

    // Random initial weather
    const initialWeather = async () => {
      setLoading(true);
      const weather = await show("New York");
      setLocation("New York");
      setTemp(weather.current.temp_f);
      setLoading(false);
    };
    initialWeather();
  }, []);

  // A component updated effect
  useEffect(() => {
    console.log("Component state has been updated");
  }, [location]);

  // A component has been deleted/unmounted effect
  useEffect(() => {
    return () => {
      setLocation("");
      setTemp("");
    };
  }, []);

  const getWeather = async () => {
    const weather = await show(location);
    setTemp(weather.current.temp_f);
  };

  return (
    <div>
      <h1>Weather Station</h1>
      <WeatherDetails loading={loading} temp={temp} location={location} />
      <WeatherSearch
        setLocation={setLocation}
        setTemp={setTemp}
        temp={temp}
        getWeather={getWeather}
      />
    </div>
  );
};

export default App;