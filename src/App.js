import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Counter from './components/state';
import { useState } from 'react';
import Component1 from './components/context';
import { Home } from './components/useEffect';
import { Element } from './components/1-jsx';
import { Test } from './components/2-propsClass';
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
     <Component1/>
     <Home/>
     <Element />
     <Test />
    </div>
  );
}

export default App;
