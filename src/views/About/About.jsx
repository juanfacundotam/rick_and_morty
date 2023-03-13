import React from "react";
import style from "../About/About.module.css";
import foto from "../../assets/foto.jpg"

const About = () => {
  return (
    <div className={style.divAbout}>
      <div className={style.divText}>
        <h1>Rick and Morty APP</h1>
        <p>Aplicacion interactiva hecha a base de JavaScript, React y Redux.</p>
        <h3>Sobre Mí</h3>
        <p>FullStack Developer</p>
      </div>
        <img src={foto} className={style.image} alt="Imagen del desarrollador" />
    </div>
  );
};

export default About;
