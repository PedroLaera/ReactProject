import axios from "axios";
import { useState } from "react";
const Pokedex = () => {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [Pokemon, setPokemon] = useState();
  const searchPokemon = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/${inputText.toLowerCase()}"
      );
      console.log({ data });
      setPokemon(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <input
        placeholder="Digite o nome do Pokemon"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={searchPokemon}>Pesquisar</button>
      <p>Nome: {Pokemon?.name}</p>
      <p>Altura: {Pokemon?.weight}</p>
      <p>imagens: {Pokemon?.sprites.front_default}</p>
    </div>
  );
};

export default Pokedex;
