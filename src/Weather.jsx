import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);


function Weather(props) {
  const [weather, setWeather] = useState()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city_name}&APPID=${import.meta.env.VITE_Openweather_APIKEY}&units=metric`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setLoading(false);
      });
  }, [props.city_name]);

  if (loading) {
    return <div></div>
  }

// Time
  const timezone = weather.timezone
  const date = dayjs.utc().utcOffset(timezone/60)
  const current_time = date.format("HH:mm")
  const current_time_unix = date.unix()
  // City name
  const city_name = weather.name

  // Temperature
  const current_temp = Math.round(weather.main.temp)
  const max_temp = Math.round(weather.main.temp_max)
  const min_temp = Math.round(weather.main.temp_min)

  // Sunrise time
  const sunrise_time_date = dayjs.unix(weather.sys.sunrise).utcOffset(timezone/60)
  const sunrise_time = sunrise_time_date.format("HH:mm")
  const sunrise_time_unix = sunrise_time_date.unix()
  
  // Sunset time
  const sunset_time_date = dayjs.unix(weather.sys.sunset).utcOffset(timezone/60)
  const sunset_time = sunset_time_date.format("HH:mm")
  const sunset_time_unix = sunset_time_date.unix()

  // Weather condition icon
  const icon_id = weather.weather[0].icon + "@2x.png"
  const icon_URL = import.meta.env.VITE_OW_ICON_URL + icon_id

  // background color
  const morning_bgc = "bg-gradient-to-r from-yellow-300//75 to-yellow-500//75";
  const day_bgc = "bg-gradient-to-r from-cyan-300/75 to-blue-500/75 ";
  const evening_bgc = "bg-gradient-to-br from-amber-600/75 to-purple-900/75 "
  const night_bgc = "bg-gradient-to-br from-violet-900/75 to-indigo-900/75 "

  const backGroundColor = 
  current_time_unix <= sunrise_time_unix || current_time_unix >= sunset_time_unix + (3600*1) ? night_bgc: // 19-23
  current_time_unix <= sunset_time_unix + (3600*1) && current_time_unix >= sunset_time_unix - (3600*1) ? evening_bgc : // 16-19
  current_time_unix >= sunrise_time_unix && current_time_unix <= 11 ? morning_bgc : //6-11
  day_bgc;

  return (
    <div>
      <div className={`m-3 p-6 h-30 rounded-md shadow-xl ${backGroundColor}`}>
        <div> {/* Top */}
          <div className='flex flex-row place-content-between'>
            <div className='text-xl'>{city_name}</div> {/* City name */}
            <div>{current_time}</div> {/* Time */}
          </div>
          <div className='flex justify-center'>
            <img src={icon_URL}></img>
          </div>
        </div>
        <div className='text-center mb-2'> {/* Middle */}
          <div className="">{weather.weather[0].description}</div>
          <div>{current_temp}&#8451;</div> {/* Current temp */}
        </div>
        <div> {/* Bottom */}
        <div className='flex flex-row place-content-around mb-2'>
          <div>H:{max_temp}&#8451;</div> {/* Max temp */}
          <div>L:{min_temp}&#8451;</div> {/* Min temp */}
        </div>
        <div className='flex  flex-row place-content-around'>
          <div>Sunrise {sunrise_time}</div> {/* Sunset time  */}
          <div>Sunset {sunset_time}</div> {/* Sunrise time */}
        </div>
        </div>

      </div>

    </div>
  )
}

export default Weather
