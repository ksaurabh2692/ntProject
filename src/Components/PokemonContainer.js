import { useEffect, useState } from "react";
import "./PokemonContainer.css";
function PokemonContainer({ pokemonId }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setData(
        await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
          (res) => res.json()
        )
      );
    };
    fetchData();
  }, [pokemonId]);

  return (
    <div className="pokemon--container">
      <div className="flex--container">
        <p data-testid="name-pokemon">{data?.forms[0].name}</p>
        <p>ID:{data?.id}</p>
      </div>
      <div className="img--Size">
        <img
          data-testid="img-pokemon"
          src={data?.sprites.front_default}
          alt="img-pokemon"
        />
      </div>
    </div>
  );
}

export default PokemonContainer;
