import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = (props) => {
  return (
    <>
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex">
        {
          props.pokemons.map(pokemon => (
            <Pokecard
              name={ pokemon.name }
              image={
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
              }
              type={ pokemon.type }
              experience={ pokemon.base_experience }
            >
            </Pokecard>
          ))
        }
      </div>
    </>
  );
}

export default Pokedex;