import {
  ADD_FAVORITE,
  CLEAN_DETAIL,
  DELETE_FAVORITE,
  FILTER_CARDS,
  GET_CHARACTERS,
  GET_CHARACTER_DETAIL,
  ORDER_CARDS,
  RESET_FAVORITES,
} from "./actions";

const initialState = {
  myFavorites: [],
  characterDetail: {},
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload], //necesitamos dos estados que manejen la misma info para hacer los filtrados sin perder el original
      };
    case DELETE_FAVORITE:
      const filtered = state.myFavorites.filter(
        (char) => char.id !== action.payload
      );
      return {
        ...state,
        myFavorites: filtered,
        allCharacters: filtered,
      };
    case GET_CHARACTER_DETAIL:
      return { ...state, characterDetail: action.payload };
    case CLEAN_DETAIL:
      return { ...state, characterDetail: {} };
    case FILTER_CARDS:
      let allCharsFiltered = [];
      if (action.payload !== "Todos") {
        allCharsFiltered = state.allCharacters.filter(
          (char) => char.gender === action.payload
        );
      } else {
        allCharsFiltered = state.allCharacters;
      }
      return { ...state, myFavorites: allCharsFiltered };

    case ORDER_CARDS:
      // no hace falta destructurar allCharacter de nuevo porque estamos en el mismo bloque. tambien podemos usar state.allCharacter
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente"
            ? state.allCharacters.sort((a, b) => a.id - b.id)
            : state.allCharacters.sort((a, b) => b.id - a.id),
      };
    case RESET_FAVORITES:
      return {
        ...state, myFavorites: state.allCharacters
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
