import React from 'react';
import { useState } from 'react';
import './App.css'

function Color() {
  const [color, setColor] = useState('red')
  return (
    <div>
      <h1>My favorite color is {color}</h1>
      <button onClick={() => setColor('blue')}>Blue</button>
      <button onClick={() => setColor('green')}>Green</button>
      <button onClick={() => setColor('black')}>Black</button>
    </div>
  )
}
export default Color