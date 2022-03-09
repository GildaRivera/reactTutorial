import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function Component1() {
  const [user, setUser] = useState("Gilda rivera");

  return (
    <UserContext.Provider value={user}>
      <h4>{`Hola ${user}!`}</h4>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Componente 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Componente 3</h1>
      <h2>{`Hola ${user}  desde componente 3!`}</h2>
    </>
  );
}

