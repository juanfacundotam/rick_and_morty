import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "./Nav.module.css"

export default function Nav({onSearch}){
    return(
        <div className={style.nav}>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}