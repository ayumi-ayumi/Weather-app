import { useState } from 'react'
import './App.css'
import Weather from './Weather.jsx'
import Add_city from './Add_city.jsx'

function App() {
  return (
    <div className="App">
    <h1 className="text-3xl text-red-50 bg-green-800 font-bold underline">
      Hello world!
    </h1>
    <Add_city />
    <div className='grid grid-cols-4'>
      <Weather city_name = "Tokyo" />
      <Weather city_name = "Berlin" />
      <Weather city_name = "London" />
      <Weather city_name = "Istanbul" />
    </div>
    </div>
    
  )
}

export default App
