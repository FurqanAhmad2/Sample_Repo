import React from "react";
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import './faq.css';

const Faq = () => {
  return (
    <div>
      <Navbar />

      <div className="faq-container">
        <h1>Perguntas Frequentes sobre Música</h1>
        <div className="faq-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">O que é música?</h5>
              <p className="card-text">Música é uma forma de expressão artística que combina sons e ritmos de maneira harmoniosa.</p>
            </div>
          </div>
        </div>
        <div className="faq-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Quais são os principais estilos musicais?</h5>
              <p className="card-text">Alguns dos principais estilos musicais incluem rock, pop, hip-hop, eletrônica, samba e fado.</p>
            </div>
          </div>
        </div>
        <div className="faq-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Qual é o instrumento musical mais popular?</h5>
              <p className="card-text">A guitarra é um dos instrumentos musicais mais populares e amplamente utilizados em várias culturas.</p>
            </div>
          </div>
        </div>
        <div className="faq-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Como posso aprender a tocar um instrumento?</h5>
              <p className="card-text">Você pode começar a aprender a tocar um instrumento por meio de aulas particulares, tutoriais online ou cursos de música.</p>
            </div>
          </div>
        </div>
        <div className="faq-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Onde posso assistir a apresentações musicais ao vivo?</h5>
              <p className="card-text">Você pode assistir a apresentações musicais ao vivo em casas de shows, teatros, festivais e bares que oferecem música ao vivo.</p>
            </div>
          </div>
        </div>
      </div>

      
      <button type="button" className="signup-btn btn btn-danger rounded rounded-pill">
        Explora
        </button>





      <Footer />
    </div>
  );
}

export default Faq;
