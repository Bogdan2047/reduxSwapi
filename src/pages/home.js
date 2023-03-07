import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilmsBlock } from "../components/filmBlock";
import { getFilmsSelector, loadingSelector } from "../redux/selectors";
import { getFilms } from "../redux/thunk";
import "./css/home.css";

export const Home = (props) => {
  const dispatch = useDispatch();
  const films = useSelector(getFilmsSelector);
  const loading = useSelector(loadingSelector);
  useEffect(() => {
    dispatch(getFilms());
  }, []);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="content">
          <FilmsBlock data={films} />
        </div>
      )}
    </>
  );
};
