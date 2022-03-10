import { useEffect, useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const Incrementar = () => {
    setCounter((prev) => prev + 1);
  };
  const Decrementar = () => {
    setCounter((prev) => prev - 1);
  };
  useEffect(()=>{
      if(counter<0){
          return ()=>{setCounter(0)}
      }

  }, [counter] )
  const lift=()=>props.liftState(counter)
  return (
    <>
      <h1>Valor: {counter}</h1>
      <button onClick={Incrementar}>Incrementar</button>
      <button onClick={Decrementar}>Decrementar</button>
      <button onClick={lift}>Lift the state up!</button>
    </>
  );
};
export function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export function tick() {
  return<Clock date={new Date()} />
}



export default Counter;


