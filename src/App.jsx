import { useState } from 'react'
import './dist.css'
import Weather from './Weather.jsx'

function App() {
  return (
    <div className="App">
    <h1 className="text-3xl text-red-50 bg-green-800 font-bold underline">
      Hello world!
    </h1>
      <Weather city_name = "Tokyo" />
    </div>
    
  )
}

export default App
