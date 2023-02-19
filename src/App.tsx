import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { getAllPokemon } from "./api/pokemon";

function App() {
  useEffect(() => {
    (async () => {
      const pokemons = (await getAllPokemon()).results;
      console.log("POKEMONS", pokemons);
    })();
  }, []);
  return <div>Hello world</div>;
}

export default App;
