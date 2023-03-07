import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCharacters, getFilm } from "../redux/thunk";
import {
  getSelectedFilmSelector,
  loadingSelector,
  getAllCharactersSelector,
} from "../redux/selectors";
import "./css/info.css";
import { NavLink } from "react-router-dom";

export const Info = () => {
  const { title, opening_crawl, director, producer, release_date, characters } =
    useSelector(getSelectedFilmSelector);

  const loading = useSelector(loadingSelector);

  const person = useSelector(getAllCharactersSelector);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getFilm(id));
  }, []);

  useEffect(() => {
    dispatch(getCharacters(characters));
  }, [characters]);

  return loading ? (
    <h1>Loading ...</h1>
  ) : (
    <div className="card">
      <div className="card-header">
        <h1>{title}</h1>
        <h3>Year: {release_date}</h3>
      </div>
      <div className="card-body">
        <h2 className="card-title">{opening_crawl}</h2>
        <hr />
        <h4 className="card-text">Director: {director}</h4>
        <hr />
        <h4 className="card-text">Producer: {producer}</h4>
      </div>
      <hr />
      <div className="characters">
        <h2>Characters: </h2>
        {person ? (
          person.map((item) => (
            <h4>
              <NavLink to={`/info/character/${item.name}`} className="inf">
                {item.name}
              </NavLink>
            </h4>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};
