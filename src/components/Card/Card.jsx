import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import styles from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useDispatch, useSelector, connect } from "react-redux";

// { id, name, species, gender, image, onClose }

export default function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      dispatch(deleteFavorite(props.id));
      // props.deleteFavorite(props.id)
      setIsFav(false);
    } else {
      dispatch(addFavorite(props));
      setIsFav(true);
    }
  };

  const handleDelete = () => {
    props.onClose(props.id);
    // props.deleteFavorite(props.id)
    dispatch(deleteFavorite(props.id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.divButton}>
        {/* {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
} */}

        <button
          className={`${isFav ? styles.actHeart : styles.desHeart} ${
            styles.heartbtn
          }`}
          onClick={handleFavorite}
        >
          ❤
        </button>

        {pathname !== "/favorites" && (
          <button className={styles.closebtn} onClick={handleDelete}>
            X
          </button>
        )}
      </div>
      <img className={styles.image} src={props.image} alt="Imagen de Rick" />
      <div className={styles.containertitles}>
        <Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
          <h2 className={styles.title}>{props.name}</h2>
        </Link>
        <div className={styles.divhab}>
          <h2>{props.species}</h2>
          <h2>{props.gender}</h2>
        </div>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }
// const mapDispatchToProps = (dispatch) => {
// return {
//   deleteFavorite: (id) => {
//     dispatch(deleteFavorite(id))
//   }
// }
// }

//sacar el export de arriba para poner el de abajo
// export default connect(mapStateToProps, mapDispatchToProps)(Card);
