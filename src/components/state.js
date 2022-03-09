import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const Incrementar = () => {
    setCounter((prev) => prev + 1);
  };
  const Decrementar = () => {
    setCounter((prev) => prev - 1);
  };
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

export default Counter;
