import React, { useEffect } from "react";
import style from "./Favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { filterCards, getCharacters, orderCards } from "../../redux/actions";

const Favorites = () => {
  const {myFavorites} = useSelector((state) => state);
  // const {favorites} = useSelector((state) => state);
  // const myFavorites = useSelector((state) => state.myFavorites)
  const dispatch = useDispatch();
  
  // useEffect(() => {
  //   dispatch(getCharacters());
  // }, [])

  const handlerOrder = (event) => {
    console.log(event.target.value)
    dispatch(orderCards(event.target.value))
    console.log(myFavorites)
    
  };
  const handlerFilter = (event) => {
    console.log(event.target.value)
    dispatch(filterCards(event.target.value))
    // console.log(favorites)
  };


  return (
    <div>
      <div>
        <select onChange={handlerOrder}>
          <option value="order" disabled='disabled'>Order By</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handlerFilter}>
          <option value="filter" disabled='disabled'>Filter By</option>
          <option value="Todos">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Gender</option>
        </select>
      </div>
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
    </div>
  );
};

export default Favorites;
