import { useState, useEffect } from 'react'
import './App.css'
import Weather from './Weather.jsx'
import Add_city from './Add_city.jsx'
import useFetchWeatherAPI from './useFetchWeatherAPI'

function App() {


  const [addCityName, setAddCityName] = useState("")
  const [cityListArr, setCityListArr] = useState([{key:0, value:"Tokyo"},])
  // const [cityListArr, setCityListArr] = useFetchWeatherAPI("")

  function handleChange(event) {
    setAddCityName(prevList => event.target.value)
  }

  function add_new_city(e) {
    e.preventDefault();
    const newCity = {
      key: Math.random(),
      value:addCityName
    }
    
    const newListArr = [...cityListArr, newCity];
    if (addCityName !== "") {
      setCityListArr(newListArr);
      setAddCityName("");
    };
    // localStorage.setItem(addCityName,addCityName);
  }

//  useEffect(() => {
//     const a = localStorage.getItem(addCityName)
//     // const a = JSON.parse(localStorage.getItem(addCityName))
//     if (a) {
//       console.log(a)
//     }
//   }, [])

  return (
    <div className="App font-body">
      <Add_city
        add_city_name={addCityName}
        handleChange={handleChange}
        add_new_city={add_new_city}
      />
      <div className='grid lg:grid-cols-4 sm:grid-cols-2  grid-flow-row-dense mx-10'>
        {cityListArr.map((city) => (
          <Weather city_name={city.value} />
        ))}
      </div>
    </div>
  )
}

export default App
