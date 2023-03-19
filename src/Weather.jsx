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
        // console.log(result.timezone)
        setLoading(false);
      });
  }, []);

  // console.log(weather)
  const timezone = weather.timezone
  let date = new Date((new Date().getTime())+ timezone *1000)
  // let date = new Date((new Date().getTime())+32400*1000)
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const time = hour + ":" + minute
  // console.log(time);

  
  if (loading) {
    return <div></div>
  }

  return (
    <div>
      <div className='w-1/4 m-5 p-10 h-30 border-0 rounded bg-gradient-to-r from-indigo-500 to-blue-500'>
        <div className='bg-orange-300 m-1'> {/* Top */}
          <div>{time}</div> {/* Time */}
          <div>b</div> {/* City name */}
        </div>
        <div> {/* Middle */}
          <div className="text-lg font-medium tracking-widest">{weather.weather[0].main}</div>
          <div>c</div> {/* Current temp */}
        </div>
        <div> {/* Bottom */}
          <div></div> {/* Max temp */}
          <div></div> {/* Min temp */}
          <div></div> {/* Sunset time  */}
          <div></div> {/* Sunrise time */}
        </div>

      </div>

    </div>
  )
}

export default Weather