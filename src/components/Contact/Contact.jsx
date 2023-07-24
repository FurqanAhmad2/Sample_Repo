import React from "react";
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import './contact.css';

const Contact = () => {
  return (
    <div>
      <Navbar />

<form>
   <div className="reg-row-1">
        
                  <label htmlFor="nombre" className="form-label row-1-lab">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="nombre"
                    style={{ fontSize: "1.25rem", width: "300px" , border: "1px solid #000000"}}
                    required
                  />

                <label htmlFor="Provincia" className="form-label row-1-lab">
                  Provincia   
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="Provincia"
                    style={{ fontSize: "1.25rem", width: "300px", border: "1px solid #000000" }}
                    required
                  />
      </div>

      <div className="reg-row-1">
      <label htmlFor="Mensaje" className="form-label row-1-lab">
      Mensaje   
       </label>
       <textarea
         className="form-control rounded msgArea"
         rows={4}
       
       >

       </textarea>
       
      
       </div>
       <button type="button" className="contact-btn btn btn-danger rounded rounded-pill">
      Registrarse
        </button>


      </form>



      <Footer />
    </div>
  );
}

export default Contact;
