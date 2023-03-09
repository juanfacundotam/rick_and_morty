import React from "react";
import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";

export default function Cards({ characters, closeCharacter}) {
  //CUANDO MAPEAMOS AGREGAR LA KEY
  return (
    <div className={styles.containerCards}>
      {characters.map(({ id, name, species, gender, image}) => {
        return (

          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={closeCharacter}
          />
        );
      })}
    </div>
  );
}

// const { characters } = props;
// {console.log(characters)}
// const CharactersList = characters.map((char) => {
//   return <li key={char.id} style={{ listStyle: 'none', margin: "30px"}}>
//     <button onClick={() => window.alert('Emulamos que se cierra la card')}>X</button>
//     <h2>{char.name}</h2>
//     <h2>{char.species}</h2>
//     <h2>{char.gender}</h2>
//     <img src={char.image} alt="Imagen de {props.name}" />
//   </li>;
// });
// {console.log(CharactersList)}
// return (

//   <div>
//     <ul style={{ display: 'flex', justifyContent: 'center', padding: '0'}}>{CharactersList}</ul>
//   </div>
// );
