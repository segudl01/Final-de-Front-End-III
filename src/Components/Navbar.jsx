import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import "../Styles/navfoo.css";


const Navbar = () => {
 
  const { state, dispatch } = useContextGlobal();
  const isLight = state.theme === "light";
  return (
    <nav className={"nav-"+state.theme}>
      <img className="logo" src="images/DH.png" alt="logo" />
      <div className="navbar">
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/contact">
          <h4>Contact</h4>
        </Link>
        <Link to="/favs">
          <h4>Favs</h4>
        </Link>
        
        <button className={"button-"+state.theme} onClick={() => dispatch({ type: "CHANGE_THEME" })}>{isLight ? "☀" : "🌓"}</button>
      </div>
    </nav>
  );
};

export default Navbar;
