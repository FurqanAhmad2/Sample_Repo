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
    console.log("I am clicked")
        // Example code in React.js frontend to send a POST request
      const data = {
        name: 'John Doe',
        email: 'john@example.com'
      };

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
        })
        .catch(error => {
          console.error('Error:', error);
        });

    setShowModal(true); // Show a success modal or any message on successful submission
  };

  


  return (
    <div>
      <Navbar />
      
      <div className="login-page">
      <h3 style={{marginLeft:'2%', color: 'white'}}>Login</h3>


      <div>
        <form onSubmit={handleSubmit}>
      <div className="signin">

                    <div className="login-input">
                        <label htmlFor="Username" className="form-label row-1-lab-singin" style={{color: 'white'}}>
                        Username
                        </label>
                        <input
                            type="text"
                            className="form-control rounded-pill"
                            id="Username"
                            style={{ fontSize: "1.25rem", width: "300px",backgroundColor: "transparent" }}
                            required
                        />
                    </div>
                 
                    <div className="login-input password-input">

                            <label htmlFor="Contraseña" className="form-label row-1-lab" style={{color: 'white'}}>
                            Contraseña   
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                id="Contraseña"
                                style={{ fontSize: "1.25rem", width: "300px" ,backgroundColor: "transparent"}}
                                required
                            />
                    </div>
                
      </div>
     
     
      <button type="submit"  className=" signin-btn btn btn-danger rounded rounded-pill">
      Entrar
        </button>
    </form>
      </div>
    
      </div>

      <Footer className="footer"/>
    </div>
  );
};

export default Login;
