import { useState, useEffect } from 'react';
// import './App.css'


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

  // Time
  const timezone = weather.timezone
  let date = new Date((new Date().getTime())+ timezone * 1000)
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const time = hour + ":" + minute

  const city_name = weather.name
  const current_temp = Math.round(weather.main.temp) 
  const max_temp = Math.round(weather.main.temp_max)
  const min_temp = Math.round(weather.main.temp_min)

  const sunrise_time_date = new Date((weather.sys.sunrise + timezone) * 1000)
  console.log(sunrise_time_date)
  const sunrise_hour = sunrise_time_date.getHours().toString().padStart(2, '0');
  const sunrise_minute = sunrise_time_date.getMinutes().toString().padStart(2, '0');
  const sunrise_time = sunrise_hour + ":" + sunrise_minute

  const sunset_time_date = new Date((weather.sys.sunset + timezone) * 1000)
  const sunset_hour = sunset_time_date.getHours().toString().padStart(2, '0');
  const sunset_minute = sunset_time_date.getMinutes().toString().padStart(2, '0');
  const sunset_time = sunset_hour + ":" + sunset_minute

  const icon_id = weather.weather[0].icon + "@2x.png"
  const icon_URL = import.meta.env.VITE_OW_ICON_URL + icon_id
  console.log(icon_URL)

  return (
    <div>
      <div className='w-1/4 m-5 p-10 h-30 border-0 rounded bg-gradient-to-r from-indigo-500 to-blue-500'>
        <div className='bg-orange-300 m-1'> {/* Top */}
          <div>{time}</div> {/* Time */}
          <div>{city_name}</div> {/* City name */}
          <img src={icon_URL}></img>
        </div>
        <div> {/* Middle */}
          <div className="text-lg font-medium tracking-widest">{weather.weather[0].main}</div>
          <div>{current_temp}&#8451;</div> {/* Current temp */}
        </div>
        <div> {/* Bottom */}
          <div>H:{max_temp}&#8451;</div> {/* Max temp */}
          <div>L:{min_temp}&#8451;</div> {/* Min temp */}
          <div>{sunrise_time}</div> {/* Sunset time  */}
          <div>{sunset_time}</div> {/* Sunrise time */}
        </div>

      </div>

    </div>
  )
}

export default Weather