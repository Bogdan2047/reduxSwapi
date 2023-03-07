import react from "react";
import { NavLink } from "react-router-dom";

export const FilmsBlock = (props) => {
  return (
    <>
      {props.data.map((item) => {
        return (
          <div className="card" key={item.episode_id}>
            <div className="card-header">
              <h1>Film: {item.title}</h1>
              <h3>Year: {item.release_date}</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">{item.opening_crawl}</h5>
              <h4 className="card-text">Director: {item.director}</h4>
              <h5 className="card-text">Producer: {item.producer}</h5>

              <NavLink
                to={`/info/${item.episode_id}`}
                className="btn btn-primary"
              >
                Show film
              </NavLink>
            </div>
          </div>
        );
      })}
    </>
  );
};
