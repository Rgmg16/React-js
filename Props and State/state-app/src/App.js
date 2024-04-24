import logo from './logo.svg';
import './App.css';
import Firstcomp from './Components/Firstcomp';

function App() {
  return (
    <div className="App">
     <Firstcomp firstname="Mike" secondname = "Black" birthdate={10042000} />
     <Fisrtcomp firstname="M" secondname = "B" birthdate={1} />
     <Secondcomp firstname="M" secondname = "B" birthdate={1} />
    </div>
  );
}

export default App;
