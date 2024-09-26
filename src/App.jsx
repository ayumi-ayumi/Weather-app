import { useState } from 'react'
import './App.css'
import Weather from './Weather.jsx'
import Add_city from './Add_city.jsx'
import dayjs from 'dayjs';

function App() {
  const date = dayjs().format('DD-MM-YYYY')
  const [cityListArr, setCityListArr] = useState([])

  return (
    <div className="App font-body">
      <Add_city
        date={date}
        cityListArr={cityListArr}
        setCityListArr={setCityListArr}
      />
      <div className='container mx-auto'>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2  grid-flow-row-dense px-15'>
      {cityListArr.map((city) => (
        <Weather city_name={city.value} key={city.key}/>
      ))}
      </div>
      </div>
    </div>
  )
}

export default App
