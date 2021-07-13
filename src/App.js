import { useState } from "react";
import "./App.css";
import PokemonContainer from "./Components/PokemonContainer";

function App() {
  const [id, setId] = useState([1, 2, 3]);

  const prevButton = () => {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      if (id[i] === 1) {
        return;
      }
      arr[i] = id[i] - 3;
    }
    setId(arr);
  };

  const nextButton = () => {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      arr[i] = id[i] + 3;
    }
    setId(arr);
  };

  return (
    <div className="app">
      <div className="flex--Container" data-testid="pokemon-container">
        <PokemonContainer pokemonId={id[0]} />
        <PokemonContainer pokemonId={id[1]} />
        <PokemonContainer pokemonId={id[2]} />
      </div>
      <div className="flex--Buttons">
        <button
          data-testid="prev-button"
          className="app--prevButton"
          onClick={prevButton}
        >
          PREV
        </button>
        <button
          data-testid="next-button"
          className="app--nextButton"
          onClick={nextButton}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default App;
