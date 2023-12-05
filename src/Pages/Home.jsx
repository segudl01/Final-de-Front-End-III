import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import "/src/Styles/home.css";
const Home = () => {
  const { state } = useContextGlobal()
  return (
    <div className="home">
      {state.data.map((doctor) => (
        <Card key={doctor.id} doctor={doctor}></Card>
      ))}
    </div>
  );
};

export default Home;
