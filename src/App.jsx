import { useState, useEffect } from 'react'
import './App.css'
import Weather from './Weather.jsx'
import Add_city from './Add_city.jsx'
import useFetchWeatherAPI from './useFetchWeatherAPI'
import dayjs from 'dayjs';


function App() {


  const [addCityName, setAddCityName] = useState("")
  const [cityListArr, setCityListArr] = useState([])

  const date = dayjs().format('DD-MM-YYYY')

  function handleChange(event) {
    setAddCityName(prevList => event.target.value)
  }

  // useEffect(() => {
  //   const temp = localStorage.getItem(date) //string
  //   const loaded = JSON.parse(temp)
  //   setCityListArr(loaded) // not working
  // },[])

  // useEffect(() => {
  //   const temp = JSON.stringify(cityListArr)
  //   // console.log(typeof(temp))
  //   localStorage.setItem(date, temp)
  //   // localStorage.setItem(date, JSON.stringify(cityListArr));
  // }, [cityListArr]);

  function add_new_city(e) {
    e.preventDefault();
    const newCity = {
      key: Math.random(),
      value: addCityName
    }
    const newListArr = [...cityListArr, newCity];
    if (addCityName !== "") setCityListArr(newListArr);
    setAddCityName("");
    localStorage.setItem(date, JSON.stringify(cityListArr))
    // const temp = JSON.stringify(cityListArr)
    // localStorage.setItem(date, temp)

  
  }




  // const [cityListArr, setCityListArr] = useState([])
  // // const [cityListArr, setCityListArr] = useFetchWeatherAPI("")

  // function handleChange(event) {
  //   setAddCityName(prevList => event.target.value)
  // }

  // const newCity = {
  //   key: Math.random(),
  //   value:addCityName
  // }
  // console.log(newCity)

  // function add_new_city(e) {
  //   e.preventDefault();
    
  //   const newListArr = [...cityListArr, newCity];
  //   if (addCityName !== "") {
  //     setCityListArr(newListArr);
  //     setAddCityName("");
  //     localStorage.setItem(newCity.key, JSON.stringify(newCity.value));
  //   };
  // }

//  useEffect(() => {
//     // const a = localStorage.getItem(key, JSON.stringify(value))
//     // const a = JSON.parse(localStorage.getItem(addCityName))
//     // const addedcity = JSON.parse(localStorage.getItem(addCityName))
//     const addedcity = localStorage.getItem(newCity.key)
//     console.log(addedcity)

//     if (addedcity !== null) {
//       JSON.parse(addedcity)
//       setCityListArr(addedcity)
//     }
//   }, [newCity])

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
