import React from "react";
import style from "./Favorites.module.css";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  return (
    <div className={style.divFavorites}>
      {myFavorites.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
            // onClose={closeCharacter}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
