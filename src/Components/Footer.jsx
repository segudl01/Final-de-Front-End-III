import React from "react";

import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
const Footer = () => {
  const { state } = useContextGlobal();
  return (
    <footer className={"footer-"+state.theme}>
      <Link to="/">
      <h4>Volver al inicio</h4>
        </Link>
      
      <div className="navFooter">
        <img className="logo" src="images/DH.png" alt="DH-logo" />
        <nav>
          <a href="">
            <img src="images/ico-instagram.png" alt="instagram" />
          </a>

          <a href="">
            <img src="images/ico-facebook.png" alt="facebook" />
          </a>

          <a href="">
            <img src="images/ico-whatsapp.png" alt="whatsapp" />
          </a>

          <a href="">
            <img src="images/ico-tiktok.png" alt="tiktok" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
