import React, { useState } from "react";
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import Modal from "react-bootstrap/Modal";
import './register.css'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      Nombre: event.target.nombre.value,
      Provincia: event.target.Provincia.value,
      Contraseña: event.target.Contraseña.value,
      Ocupacion: event.target.Ocupacion.value,
      Email: event.target.Email.value,
      Curso: event.target.Curso.value,
      Fecha_de_nacimiento: event.target.fechaNacimiento.value,
    };
    console.log("Data is being Sent to Server");
    console.log(data);

    // Example code in React.js frontend to send a POST request
    fetch('http://localhost:3001/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Response from the server after storing the data
        setShowModal(true); // Show a success modal or any message on successful submission
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };


  return (
    <div>
      <Navbar />

      <div className="login-page">

      <h3 style={{marginLeft:'2%', color: 'white'}}>Sign Up</h3>
      <form onSubmit={handleSubmit}>
      <div className="signup-row-1">
        
                  <label htmlFor="nombre" className="form-label row-1-lab" style={{color: 'white', fontWeight: 'bold'}}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="nombre"
                    name="nombre"
                    style={{ fontSize: "1.25rem", width: "300px" , backgroundColor: "transparent"}}
                    required
                  />

                <label htmlFor="Provincia" className="form-label row-1-lab" style={{color: 'white', fontWeight: 'bold'}}>
                  Provincia   
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="Provincia"
                    name="Provincia"

                    style={{ fontSize: "1.25rem", width: "300px" , backgroundColor: "transparent"}}
                    required
                  />
      </div>
      <div className="signup-row-1">
                  <label htmlFor="Contraseña" className="form-label row-2-lab" style={{color: 'white', fontWeight: 'bold'}}>
                  Contraseña
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="Contraseña"
                    name="Contraseña"
                    style={{ fontSize: "1.25rem", width: "300px", backgroundColor: "transparent" }}
                    required
                  />

                <label htmlFor="Ocupacion" className="form-label row-2-lab" style={{color: 'white', fontWeight: 'bold'}}>
                Ocupacion   
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="Ocupacion"
                    name="Ocupacion"
                    style={{ fontSize: "1.25rem", width: "300px", backgroundColor: "transparent" }}
                    required
                  />
      </div>
      <div className="signup-row-1">
                  <label htmlFor="Email" className="form-label row-3-lab" style={{color: 'white', fontWeight: 'bold'}}>
                  Email
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="Email"
                    name="Email"
                    style={{ fontSize: "1.25rem", width: "300px" , backgroundColor: "transparent"}}
                    required
                  />

                <label htmlFor="Curso" className="form-label row-3-lab" style={{color: 'white', fontWeight: 'bold'}}>
                Curso   
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="Curso"
                    name="Curso"
                    style={{ fontSize: "1.25rem", width: "300px", backgroundColor: "transparent" }}
                    required
                  />
      </div>

      <div className="signup-row-date">
      <label htmlFor="fechaNacimiento" className="form-label row-4-lab" style={{color: 'white', fontWeight: 'bold'}}>
                  Fecha de nacimiento
                </label>
                <input
                  type="date"
                  className="form-control rounded-pill"
                  id="fechaNacimiento"
                  name="fechaNacimiento"
                  style={{ fontSize: "1.25rem", width: "50%", backgroundColor: "transparent" }}
                  required
                />

      </div>
     
      <button type="submit" className="btn btn-danger rounded rounded-pill" style={{marginLeft: '35%',width: '30%', marginBottom: '10%'}}>
      Registrarse
        </button>
        </form>
      </div>
      
      <Footer className="footer"/>
    </div>
  );
};

export default SignUp;
