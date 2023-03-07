import react from "react";
import { NavLink } from "react-router-dom";
import "./css/header.css";

export const Header = () => {
  return (
    <ul className="nav justify-content-center">
      <li class="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/">
          Main
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="#">
          new
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </li>
    </ul>
  );
};
