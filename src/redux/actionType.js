import {
  GET_FILM_SUCCESS,
  GET_ALL_FILMS,
  GET_CHARACTERS_ALL,
  GET_CHARACTER,
} from "./type";

export const getAllFilmsAction = (payload) => ({
  type: GET_ALL_FILMS,
  payload,
});

export const getFilmSuccessAction = (payload) => ({
  type: GET_FILM_SUCCESS,
  payload,
});

export const getAllCharactersAction = (payload) => ({
  type: GET_CHARACTERS_ALL,
  payload,
});

export const getCharacterAction = (payload) => ({
  type: GET_CHARACTER,
  payload,
});
