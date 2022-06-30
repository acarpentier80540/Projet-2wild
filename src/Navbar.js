import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "./Logo.jpg";
import concert from "./img/concert.png";
import serveur from "./img/burger.png";
import a_votre_santé from "./img/a-votre-sante.png";
import inscri from "./img/contracter.png";





function Navbar() {
  
  return (
    <nav >
      {/* <ul className="liste">
                        <li className='items' >🎤</li>
                        <li className='items'>🍻</li>
                         <img className="logo" src={Logo} alt=""/> 
                        <li className='items'>🍔</li>
                        <li className='items'>🚖</li>
                </ul> */}
      <ul className="liste">
        <img className="icone"  src={concert} alt=""/>
        <img className="icone" src={a_votre_santé} alt="" />
        <img className="logo" src={Logo} alt="" />
        <img className="icone" src={serveur} alt="" />
        <img className="icone" src={inscri} alt="" />
      </ul>
    </nav>
  );
}
export default Navbar;
