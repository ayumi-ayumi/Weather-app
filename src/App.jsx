import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './dist.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1 className="text-7xl text-red-50 font-bold underline">
      Hello world!
    </h1>
    </div>
    
  )
}

export default App
