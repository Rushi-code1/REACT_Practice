import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)
  const increCounter = () =>{
    setCount(count + 1)
  }
  const decreCounter = () =>{
    setCount(count - 1)
  }
  return (
   <>
    <h1>Well- come To Website </h1>
    <h1>Counter Val: {count}</h1>
    <button className='bg-gree' onClick={increCounter}>increCounter</button>
    <button onClick={decreCounter}>decreCounter</button>
   </>
  )
}

export default App
