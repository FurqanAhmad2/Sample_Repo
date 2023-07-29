import React from "react";
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import './contact.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
<div className="login-page">

  <h3 style={{color: 'white', fontWeight: 'bold',marginLeft: "3%",padding: "2%"}}>Contact US</h3>
<form>
   <div className="reg-row-1">
        
                  <label htmlFor="nombre" className="form-label row-1-lab " style={{color: 'white', fontWeight: 'bold'}}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="nombre"
                    style={{ fontSize: "1.25rem", width: "300px" , border: "1px solid #000000"  , backgroundColor: "transparent"}}
                    required
                  />

                <label htmlFor="Provincia" className="form-label row-1-lab" style={{color: 'white', fontWeight: 'bold'}}>
                  Provincia   
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="Provincia"
                    style={{ fontSize: "1.25rem", width: "300px", border: "1px solid #000000"  , backgroundColor: "transparent"}}
                    required
                  />
      </div>

      <div className="reg-row-1">
      <label htmlFor="Mensaje" className="form-label row-1-lab" style={{color: 'white', fontWeight: 'bold'}}>
      Mensaje   
       </label>
       <textarea
         className="form-control rounded msgArea "
         rows={4}
         style={{ backgroundColor: "transparent"}}
       
       >

       </textarea>
       
      
       </div>
       <button type="button" className="contact-btn btn btn-danger rounded rounded-pill">
      Registrarse
        </button>


      </form>

</div>



      <Footer />
    </div>
  );
}

export default Contact;
