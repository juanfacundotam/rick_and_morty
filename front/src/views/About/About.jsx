import React, { useState } from "react";
import style from "../About/About.module.css";
import foto from "../../assets/foto.jpg";

const About = () => {
  const [imageLoad, setImageLoad] = useState(false);

  const handleImage = () => {
    setImageLoad(true);
  };

  return (
    <div className={style.divAbout}>
      {imageLoad ? (
        <>
          <div className={style.divText}>
            <h1>Rick and Morty APP</h1>
            <p>
              Aplicacion WEB interactiva hecha a base de JavaScript - React -
              Redux.
            </p>
            <h3>Sobre Mí</h3>
            <p>Juan Facundo Tam</p>
            <p>FullStack - SoyHenry</p>
          </div>
          <img
            src={foto}
            className={style.image}
            alt="Imagen del desarrollador"
            onLoad={handleImage}
            style={{ display: imageLoad ? "block" : "none" }}
          />
        </>
      ) : (
        <div className={style.divLoader}>
          <div className={style.customLoader}></div>
          <img
            src={foto}
            className={style.image}
            alt="Imagen del desarrollador"
            onLoad={handleImage}
            style={{ display: "none"  }}
          />
        </div>
      )}
    </div>
  );
};

export default About;
