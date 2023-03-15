import { useState } from 'react'
import './dist.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1 className="text-3xl text-red-50 bg-green-800 font-bold underline">
      Hello world!
    </h1>
    </div>
    
  )
}

export default App
