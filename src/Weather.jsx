import { useState, useEffect } from 'react';

function Weather(props) {
  const [weather, setWeather] = useState()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city_name}&APPID=${import.meta.env.VITE_Openweather_APIKEY}&units=metric`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        console.log(result)
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div></div>
  }
  return (
    <div className='border-solid border-0 bg-gradient-to-r from-indigo-500 to-blue-500'>
      <div> {/* Top */}
        <div></div> {/* Time */}
        <div></div> {/* City name */}
      </div>
      <div> {/* Middle */}
        <div className="text-lg font-medium tracking-widest">{weather.weather[0].main}</div>
        <div></div> {/* Current temp */}
      </div>
      <div> {/* Bottom */}
        <div></div> {/* Max temp */}
        <div></div> {/* Min temp */}
        <div></div> {/* Sunset time  */}
        <div></div> {/* Sunrise time */}
      </div>
    
    </div>
  )
}

export default Weather