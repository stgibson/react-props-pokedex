import "./Pokecard.css";

const Pokecard = (props) => {
  return (
    <div className="Pokecard">
      <div className="Pokecard-title">{ props.name}</div>
      <img src={ props.image }/>
      <div>
        <div>Type: { props.type }</div>
        <div>EXP: { props.experience }</div>
      </div>
    </div>
  );
};

export default Pokecard;