import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCharacterSelector, loadingSelector } from "../redux/selectors";
import { getCharacter } from "../redux/thunk";
import "./css/infoCharacter.css";

export const InfoCharacher = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const person = useSelector(getCharacterSelector);
  const loading = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(getCharacter());
  }, []);

  //   let infoPerson = person.find((item) => {
  //     if (item.name == id) {
  //       return true;
  //     }
  //   });

  console.log(person);

  //   return infoPerson ? (
  //     <div className="card" key={infoPerson.mass}>
  //       <h1 className="card-header">{infoPerson.name}</h1>
  //       <div className="card-body">
  //         <h2 className="card-title">Birth day: {infoPerson.birth_year}</h2>
  //         <hr />
  //         <p className="card-text">
  //           <h4>Gender: {infoPerson.gender}</h4>
  //         </p>
  //         <hr />
  //         <h3>Height: {infoPerson.height}</h3>
  //         <hr />
  //         <h3>Eye: {infoPerson.eye_color}</h3>
  //       </div>
  //     </div>
  //   ) : (
  //     <h1>Loading...</h1>
  //   );
};
