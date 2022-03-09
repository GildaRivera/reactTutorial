import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Counter from './components/state';
function App() {
  return (
    <div>
     <h1>Hola</h1>
     <Main user="gilda"/>
     <Counter />
    </div>
  );
}

export default App;
