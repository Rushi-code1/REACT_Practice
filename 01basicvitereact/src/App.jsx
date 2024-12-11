import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './component/cart'

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
    <button className='bg-green-400 rounded-xl  m-2' onClick={increCounter}>increCounter</button>
    <button className="bg-green-400 rounded-xl" onClick={decreCounter}>decreCounter</button>
    <Card username='Rushikesh'/>
   </>
  )
}

export default App
