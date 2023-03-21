import React from "react";
import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {

  const [character, setCharacter] = useState("");
  const [value, setValue] = useState({
    value: ''
  })

  const handleChange = (event) => {
    setCharacter(event.target.value)
    setValue({...value, value: event.target.value})
  }
  
  const dobleFuncion = (event) => {
    const fun = () => {onSearch(character)};
    fun();
    setValue({...value, value: ''});
    console.log(value)
  }

  return (
    <div className={style.divSearchBar}>
      <input className={style.input} name="value" type="search" value={value.value} onChange={handleChange}/>
      <button className={style.btn} onClick={dobleFuncion}>Agregar</button>
      <button className={style.btnRandom} onClick={() => onSearch(String(Math.floor(Math.random() * 826) + 1), console.log(Math.random()*10)+1)}>R</button>
    </div>
  );
}

// () => {onSearch(character)}