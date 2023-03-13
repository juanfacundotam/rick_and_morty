import React from "react";
import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {

  const [character, setCharacter] = useState("");

  const handleChange = (event) => {
    setCharacter(event.target.value)
  }

  return (
    <div className={style.divSearchBar}>
      <input className={style.input} type="search" onChange={handleChange}/>
      <button className={style.btn} onClick={() => {onSearch(character)}}>Agregar</button>
      <button className={style.btnRandom} onClick={() => onSearch(String(Math.floor(Math.random() * 826) + 1))}>R</button>
    </div>
  );
}
