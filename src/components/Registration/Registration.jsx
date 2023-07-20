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
    // Add your form submission logic here
    // For example, you can handle form validation and API requests
    setShowModal(true); // Show a success modal or any message on successful submission
  };

  return (
    <div>
      <Navbar />
      
      <div className="signup-row-1">
        
                  <label htmlFor="nombre" className="form-label row-1-lab">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="nombre"
                    style={{ fontSize: "1.25rem", width: "300px" }}
                    required
                  />

                <label htmlFor="Provincia" className="form-label row-1-lab">
                  Provincia   
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="Provincia"
                    style={{ fontSize: "1.25rem", width: "300px" }}
                    required
                  />
      </div>
      <div className="signup-row-1">
                  <label htmlFor="Contraseña" className="form-label row-2-lab">
                  Contraseña
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="Contraseña"
                    style={{ fontSize: "1.25rem", width: "300px" }}
                    required
                  />

                <label htmlFor="Ocupacion" className="form-label row-2-lab">
                Ocupacion   
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="Ocupacion"
                    style={{ fontSize: "1.25rem", width: "300px" }}
                    required
                  />
      </div>
      <div className="signup-row-1">
                  <label htmlFor="Email" className="form-label row-3-lab">
                  Email
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="Email"
                    style={{ fontSize: "1.25rem", width: "300px" }}
                    required
                  />

                <label htmlFor="Curso" className="form-label row-3-lab">
                Curso   
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="Curso"
                    style={{ fontSize: "1.25rem", width: "300px" }}
                    required
                  />
      </div>

      <div className="signup-row-date">
      <label htmlFor="fechaNacimiento" className="form-label row-4-lab">
                  Fecha de nacimiento
                </label>
                <input
                  type="date"
                  className="form-control rounded-pill"
                  id="fechaNacimiento"
                  style={{ fontSize: "1.25rem", width: "25%" }}
                  required
                />

      </div>
     
      <button type="button" className="signup-btn btn btn-danger rounded rounded-pill">
      Registrarse
        </button>

      <Footer className="footer"/>
    </div>
  );
};

export default SignUp;
