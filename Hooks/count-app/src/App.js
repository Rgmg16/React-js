import React from 'react'
import { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0);
const addOne = () =>{
    setCount(count + 1)
}
const subtractOne = () =>{
    setCount(count - 1)
}
  return (
    <div>
        <p>Color is {count}</p>
        <button onClick={addOne}>Add One</button>
        <button onClick={subtractOne}>Subtract One</button>


        
    </div>

  )

}

export default Count
