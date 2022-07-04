import React, { useState, useEffect } from "react";
import "./Navbaraccueuil.css"
import Logo from "./Logo.jpg";
import concert from "./img/concert.png";
import serveur from "./img/burger.png";
import a_votre_santé from "./img/a-votre-sante.png";
import inscri from "./img/contracter.png";

import {Link} from "react-router-dom"


function Navbaraccueuil() {
  
  return (
    <nav className="barnav" >
      {/* <ul className="liste">
                        <li className='items' >🎤</li>
                        <li className='items'>🍻</li>
                         <img className="logo" src={Logo} alt=""/> 
                        <li className='items'>🍔</li>
                        <li className='items'>🚖</li>
                </ul> */}
      <ul className="liste">
        
        <Link className="link" to="./evenement/event"><img src={concert} alt="" className="icone" /></Link>
        <Link className="link" to="./evenement/event"><img src={a_votre_santé} alt="" className="icone" /></Link>
        <Link className="link" to="./"><img src={Logo} alt="" className="logo" /></Link>
        <Link className="link" to="./evenement/event"><img src={serveur} alt="" className="icone" /></Link>
        <Link className="link" to="./evenement/event"><img src={inscri} alt="" className="icone" /></Link>
     
      </ul>
    </nav>
  );
}
export default Navbaraccueuil;
