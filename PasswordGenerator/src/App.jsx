import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // Used Ref Hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvxwyz"
    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "@#$%&*+_-"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPassword = useCallback(() =>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  }, [password] )

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg  px-4 py-3 my-8 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input  type="text" value={password} className='outline-none w-full px-3 py-1 text-black' placeholder={password} readOnly ref={passwordRef}/>
          <button onClick={copyPassword} className='outline-none bg-blue-500 text-white py-0.5 px-3 shrink-0'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className='flex items-center gap-x-1'>
            <input type="range" className='cursor-pointer' min={8} max={40} value={length} onChange={(e)=>{setLenght(e.target.value)}} />
            <label className='text-white'> Lenght: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked= {numberAllowed} id='numberInput' onChange={() =>{setNumberAllowed((prev) => !prev)}}/>
            <label className='text-white'>Number</label>

            <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked= {charAllowed} id='charInput' onChange={() =>{setCharAllowed((prev) => !prev)}}/>
            <label className='text-white'>Charecter</label>
          </div>
          </div>
        </div>
    </div>
  )
}

export default App
