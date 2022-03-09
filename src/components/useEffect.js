import useFetch from "./effect";
export const Home = () => {
    const [data] = useFetch("https://rickandmortyapi.com/api/character/248");
  console.log(data)
    return (
      <>
      <h3>{data? data.name : "Nada"}</h3>
      </>
    );
  };