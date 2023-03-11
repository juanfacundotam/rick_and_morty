import React from "react";
import Cards from "../../components/Cards/Cards";
import style from "../Home/Home.module.css"

const Home = ({characters, closeCharacter}) => {
  return (
    <div className={style.divCards}>
      <Cards characters={characters} closeCharacter={closeCharacter} />
    </div>
  );
};

export default Home;
