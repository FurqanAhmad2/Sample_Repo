import React from "react";
import Navbar from '../Navbar/Navbar';
import clip from "../../assets/clip.mp4"
import './home.css'; // Import the CSS file for the Home component
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      
    <Navbar />

    <div className="hero-image">
      <div className="hero-text">
        <h1>Cursos de Musica</h1>
        <p>Descubre el mundo</p>
        <button type="button" className="courses-btn btn btn-danger rounded rounded-pill">Cursos</button>
      </div>
    </div>
    <br />


    <div className="container">

    <div>
        <h5>Hello</h5>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.asasa
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.asasa
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.asasa
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.asasa
        </p>

    </div>
    <video src={clip} controls autoPlay></video>
    </div>
    <div className="Music-heading">
        <h1 >Discover the Music</h1> 
    </div>

<div className="containerList">
    <div className="listOne">
        <h3>Teoria Musical</h3>
        <ul>
        <li>Benefit 1</li>
        <li>Benefit 2</li>
        <li>Benefit 3</li>
        <li>Benefit 4</li>
        </ul>
        <button type="button" className="courses-btn btn btn-danger rounded rounded-pill">
        Explora
        </button>
    </div>

    <div className="listTwo" >
        <h3>Teoria Musical</h3>
        <ul>
        <li>Benefit 1</li>
        <li>Benefit 2</li>
        <li>Benefit 3</li>
        <li>Benefit 4</li>
        </ul>
        <button type="button" className="courses-btn btn btn-danger rounded rounded-pill">
        Explora
        </button>
    </div>

  </div>


  <div className="text_Sobre">
    <h4>Sobre la profesora </h4>
    <p>Sonia es una profesora con 10 años de <br/>experiencia en escuelas de todo tipo</p>
  </div>



    <div className="footer">
    <Footer />
    </div>
 
  </div>
);
}

export default Home;
