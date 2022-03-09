import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const Incrementar = () => {
    setCounter((prev) => prev + 1);
  };
  const Decrementar = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <>
      <h1>Valor: {counter}</h1>
      <button onClick={Incrementar}>Incrementar</button>
      <button onClick={Decrementar}>Decrementar</button>
    </>
  );
};

export default Counter;
