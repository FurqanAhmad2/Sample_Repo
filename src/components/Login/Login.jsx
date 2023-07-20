import React, { useState } from "react";
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import Modal from "react-bootstrap/Modal";
import './login.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
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
      
      <div className="signin">

                    <div className="login-input">
                        <label htmlFor="Username" className="form-label row-1-lab-singin">
                        Username
                        </label>
                        <input
                            type="text"
                            className="form-control rounded-pill"
                            id="Username"
                            style={{ fontSize: "1.25rem", width: "300px" }}
                            required
                        />
                    </div>
                 
                    <div className="login-input password-input">

                            <label htmlFor="Contraseña" className="form-label row-1-lab">
                            Contraseña   
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                id="Contraseña"
                                style={{ fontSize: "1.25rem", width: "300px" }}
                                required
                            />
                    </div>
                
      </div>
     
     
      <button type="button" className=" signin-btn btn btn-danger rounded rounded-pill">
      Entrar
        </button>

      <Footer className="footer"/>
    </div>
  );
};

export default Login;
