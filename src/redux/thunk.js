import {
  getFilmSuccessAction,
  getAllFilmsAction,
  getAllCharactersAction,
  getCharacterAction,
} from "./actionType";
import { GET_CHARACTERS_ALL, LOADING, GET_CHARACTER } from "./type";
import axios from "axios";

export const url = "https://swapi.dev/api/films/";

export const getFilms = () => (dispatch) => {
  dispatch({ type: LOADING });
  axios.get(url).then(({ data }) => dispatch(getAllFilmsAction(data.results)));
};

export const getFilm = (id) => (dispatch) => {
  dispatch({ type: LOADING });
  axios.get(`${url}/${id}`).then(({ data }) => {
    dispatch(getFilmSuccessAction(data));
  });
};

export const getCharacters = (links) => async (dispatch) => {
  dispatch({ type: GET_CHARACTERS_ALL });
  const res = [];
  for await (const link of links) {
    const characterData = await axios
      .get(link)
      .then((data) => res.push(data.data));
  }
  dispatch(getAllCharactersAction(res));
};

export const getCharacter = (links) => async (dispatch) => {
  dispatch({ type: GET_CHARACTER });
  const res2 = [];
  for await (const link of links) {
    const characterData = await axios
      .get(link)
      .then((data) => res2.push(data.data));
  }
  dispatch(getCharacterAction(res2));
};
