import React from "react";
import { Link } from "react-router-dom";
import "/src/Styles/card.css";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ doctor }) => {
  const { state, dispatch } = useContextGlobal();
  const addFav = () => {
    const findFav = state.favs.find((fav) => fav.id == doctor.id);
    if (findFav) {
      dispatch({ type: "DELETE_FAV", payload: doctor.id });
      alert("eliminado de favoritos");
    } else {
      dispatch({ type: "ADD_FAV", payload: doctor });
      alert("agregado a favoritos");
    }
  };

  return (
    <div className="card">
      <Link to={"/detail/" + doctor.id}>
        <img src="images/doctor.jpg" alt="doctores" />
        <h4>
          {doctor.username} Id: {doctor.id}
        </h4>
      </Link>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
