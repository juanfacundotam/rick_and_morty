import React from "react";
import style from "./Favorites.module.css";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  return (
    <div className={style.divFavorites}>
      <div>
        <select name="" id="">
          <option value="order" disabled='disabled'>Order By</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="" id="">
          <option value="filter" disabled='disabled'>Filter By</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Gender">Gender</option>
        </select>
      </div>
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
