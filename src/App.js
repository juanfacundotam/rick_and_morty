import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import Home from "./views/Home/Home.jsx";
import About from "./views/About/About";
import NavBar from "./components/Nav/NavBar";
import Detail from "./views/Detail/Detail";
import Error from "./views/Error/Error";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
//
function App() {
  const [characters, setCharacters] = useState([]);
 
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const username = "facutam@gmail.com";
  const password = "123456";
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const closeCharacter = (id) => {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
  };
  // `https://rickandmortyapi.com/api/character/${character}`
  const URL_BASE = "https://be-a-rym.up.railway.app/api";
  const API_KEY = "b755a0b71e3e.670b9fc34bc30567595d";
  const onSearch = (character) => {
    if (characters.find((char) => char.id === character)) {
      alert("No se permiten ID repetidos");
    } else {
      fetch(`${URL_BASE}/character/${character}?key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    }
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && (
        <div className="divSearch">
          <NavBar onSearch={onSearch} />
        </div>
      )}

      <div className="divRoutes">
        <Routes>
          <Route path="/" element={<Form login={login}/>} />
          <Route
            path="/home"
            element={
              <Home characters={characters} closeCharacter={closeCharacter} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
