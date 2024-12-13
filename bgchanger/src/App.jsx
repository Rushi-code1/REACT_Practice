import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [bgColor, setBgColor] = useState('white');

  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };

  useEffect(() => {
      document.body.style.backgroundColor = bgColor;
    }, [bgColor]);

  return (
    <>
       <button onClick={() => changeBackgroundColor('red')} className="bg-red-500">red</button>
       <button onClick={() => changeBackgroundColor('blue')} className='bg-blue-500'>blue</button>
       <button  onClick={() => changeBackgroundColor('yellow')} className='bg-yellow-500'>yellow</button>
       <button onClick={() => changeBackgroundColor('green')} className='bg-green-500'>green</button>
    </>
  );
}

export default App
