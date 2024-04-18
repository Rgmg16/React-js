import logo from './logo.svg';
import './index.css';
import './App.css';
import { useState } from 'react';

function App() {
  const handleClick = () => {
    alert("Button Clicked")
  }

  const [key, setKey] = useState("");
  const handleKeyDown = (evnt) => {
    setKey(evnt.key);
  };

  const [isHovered, setIsHovered]= useState(false);

  const hmo = ()=>{
    setIsHovered(true);
  };

  const hm0 = ()=>{
    setIsHovered(false);
  };

  const handleDrag = () => {
    alert("Where are you taking me!?");
  };

  return (
    <div>
      <button class="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={handleClick}>Click mwah</button>

      {key && <h2>Pressed key: {key}</h2>}
      <input type="text" onKeyDown={handleKeyDown} placeholder="Press something (^^)"></input>

      <div
        onMouseOver={hmo}
        onMouseOut={hm0}
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: isHovered ? 'green' : 'red',
          color: 'white',
          textAlign: 'center',
          lineHeight: '200px',
        }}
      >
        {isHovered ? 'Hovered!' : 'Not Hovered'}
      </div>

      <div
      draggable={true}
      onDrag={handleDrag}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'lightblue',
        color: 'black',
        textAlign: 'center',
        lineHeight: '200px',
      }}
    >
      An innocent bystander
    </div>

    </div>
  );
}

export default App;
