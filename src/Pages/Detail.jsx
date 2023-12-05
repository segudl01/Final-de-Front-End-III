import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";
import axios from "axios";
import "/src/Styles/detail.css";

const Detail = () => {

  const { id } = useParams();

  const userUrl = "https://jsonplaceholder.typicode.com/users/" + id;
  const { state, dispatch } = useContextGlobal()
  const doctor = state.doctor

  useEffect(() => {
    axios(userUrl).then((res) => {
      dispatch({ type: "GET_DOCTOR", payload: res.data });
    });
  },[]);
  return (
    <div className="detail">
      <h2>Dentist Id: {doctor.id} </h2>
      <h4>Name: {doctor.username} </h4>
      <img src="../../public/images/doctor.jpg" alt="doctor-img" />
      <h4>Email:{doctor.email} </h4>
      <h4>Phone:{doctor.phone}</h4>
      <h4>Website:{doctor.website} </h4>
    </div>
  );

};

export default Detail;
