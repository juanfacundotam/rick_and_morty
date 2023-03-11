import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar({ onSearch }) {
  return (
    <div className={style.nav}>
      <div className={style.divLinks} >
        <Link to={`/home`} className={style.link}>Home</Link>
        <Link to={`/about`} className={style.link}>About</Link>
      </div>
      <div className={style.divNavSearch}>
      <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}
