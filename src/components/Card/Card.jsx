import React from "react";
import { useState } from "react";
import styled from "styled-components";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #1a1b1ad6;

  border-radius: 10px;
  width: 150px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* flex-wrap: wrap; */
`;

export default function Card({ id, name, species, gender, image, onClose }) {
  const handleDelete = () => {
    onClose(id);
  };

  return (
    <Container className={styles.container}>
      <button className={styles.closebtn} onClick={handleDelete}>
        X
      </button>
      <img className={styles.image} src={image} alt="Imagen de Rick" />
      <div className={styles.containertitles}>
        <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
          <h2 className={styles.title}>{name}</h2>
        </Link>
        {/* <hr className={styles.linea}/> */}
        <div className={styles.divhab}>
          <h2>{species}</h2>
          <h2>{gender}</h2>
        </div>
      </div>
    </Container>
  );
}
