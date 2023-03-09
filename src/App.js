import "./App.css";
import { useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
//
function App() {
  const [characters, setCharacters] = useState([]);

  const closeCharacter = (id) => {
    setCharacters((oldChars) => oldChars.filter(char => char.id !== id))
  };
  const onSearch = (character) => {
    if(!characters.some((char) => char.id === Number(character))) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
    } else {
      alert("No se permiten ID repetidos")
    }
  };


  return (
    <div className="App" style={{ padding: "25px" }}>
      <div className="divSearch">
        <Nav onSearch={onSearch} />
      </div>
      <div className="divCards">
        <Cards characters={characters} closeCharacter={closeCharacter} />
      </div>
    </div>
  );
}

export default App;
