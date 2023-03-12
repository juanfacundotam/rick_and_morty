import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";

export default function NavBar({ onSearch, logout}) {

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={style.nav}>
      <div className={style.divLinks} >
        <NavLink to={`/home`} className={({isActive}) => isActive? style.active : style.disable}>Home</NavLink>
        <NavLink to={`/about`} className={({isActive}) => isActive? style.active : style.disable}>About</NavLink>
      </div>
      <div className={style.divNavSearch}>
      <SearchBar onSearch={onSearch} />
      </div>
<Link className={style.btnLogout}>
<button onClick={handleLogout}>Logout</button>
</Link>
    </div>
  );
}
