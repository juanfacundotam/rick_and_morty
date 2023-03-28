import axios from "axios";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";
export const RESET_FAVORITES = "RESET_FAVORITES"
const URL_BASE = "http://localhost:3001";

export const addFavorite = (favorite) => {
  // axios.post(`${URL_BASE}/rickandmorty/fav`, favorite)
  return { type: ADD_FAVORITE, payload: favorite };
};
export const deleteFavorite = (id) => {
  try {
    const response = axios.delete(`${URL_BASE}/rickandmorty/fav/${id}`);
    return { type: DELETE_FAVORITE, payload: id };
  } catch (error) {
    return {error: error.message}
  }
};

export const getCharacterDetail = (id) => {
  return function (dispatch) {
    // const URL_BASE = "https://be-a-rym.up.railway.app/api";
    // const API_KEY = "b755a0b71e3e.670b9fc34bc30567595d";
    axios(`${URL_BASE}/detail/${id}`)
      .then((response) => dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data })); //axios devuelve la response, dentro de ella esta data, dentro las propiedades de la api
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const filterCards = (gender) => {
  return { type: FILTER_CARDS, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER_CARDS, payload: id };
};

export const resetFavorites = () => {
  return { type: RESET_FAVORITES}
}
