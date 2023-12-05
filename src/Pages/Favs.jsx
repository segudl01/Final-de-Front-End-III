import React from "react";
import { useContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";
import "/src/Styles/favs.css";
const Favs = () => {
  const { state } = useContextGlobal();
  return (
    <div className="favs">
      {state.favs.map((fav) => (
        <Card key={fav.id} doctor={fav}></Card>
      ))}
    </div>
  );
};

export default Favs;
