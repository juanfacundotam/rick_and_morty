import React from "react";
import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";
import { useDispatch } from "react-redux";
import { getFavorites } from "../../redux/actions.js";
import { useEffect } from "react";

export default function Cards({ characters, closeCharacter}) {
  //CUANDO MAPEAMOS AGREGAR LA KEY
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getFavorites())
  }, [])

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


