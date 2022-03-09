import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Counter from './components/state';
import { useState } from 'react';
function App() {
  const [main,setMain] = useState()
  let handleState=(params)=>{
    setMain(params)
  }
  return (
    <div>
     <h1>Hola</h1>
     <Main user="gilda"/>
     <Counter liftState={handleState} />
     <h1>Estado de componente counter: {main}</h1>
    </div>
  );
}

export default App;
