import {
  GET_ALL_FILMS,
  GET_CHARACTER,
  GET_CHARACTERS_ALL,
  GET_FILM_SUCCESS,
  LOADING,
} from "./type";

const initialState = {
  allFilms: [],
  selectedFilm: {},
  allCharacters: [],
  character: [],
  loading: false,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_ALL_FILMS:
      return { ...state, allFilms: action.payload, loading: false };
    case GET_FILM_SUCCESS:
      return { ...state, selectedFilm: action.payload, loading: false };
    case GET_CHARACTERS_ALL:
      return { ...state, allCharacters: action.payload, loading: false };
    case GET_CHARACTER:
      return { ...state, character: action.payload, loading: false };
    default:
      return state;
  }
};
