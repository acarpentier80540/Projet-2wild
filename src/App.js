import React from 'react'
import Accueil from './Accueil';
import './App.css';
import Navbar from './Navbar';
import Video from "./video/Projet2.mp4";

function App() {
  return (
    <div className="App">
  <video className="background-video"autoPlay={true} loop muted={true}>

<source src={Video} type="video/mp4" />

</video>
  <Navbar />
  <Accueil />
    </div>
  );
}

export default App;
