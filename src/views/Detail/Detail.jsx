import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import style from "./Detail.module.css";
import axios from "axios";

const Detail = () => {
  const [character, setCharacter] = useState([]);
  const { detailId } = useParams();
  console.log(detailId);

  useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY = "b755a0b71e3e.670b9fc34bc30567595d";
    axios(`${URL_BASE}/character/${detailId}?key=${API_KEY}`)
      .then((response) => {
        if (response.data.name) {
          setCharacter(response.data); //axios devuelve la response, dentro de ella esta data, dentro las propiedades de la api
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.divDetail}>
      {character.name ? (
        <>
          <div className={style.divText}>
            <div className={style.divButton}>
              <Link to={"/home"}>
                <button className={style.button}>&lt;&lt;</button>
              </Link>
            </div>
            <h1>{character.name}</h1>
            <h3>{character.status}</h3>
            <h3>{character.species}</h3>
            <h3>{character.gender}</h3>
            <h3>{character.origin?.name}</h3>
          </div>
          <div className={style.divImg}>
            <img src={character.image} alt="Foto Personaje" />
          </div>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
