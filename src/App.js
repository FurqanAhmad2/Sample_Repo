import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from "./components/Home/Home";
import SignUp from './components/Registration/Registration';
import Faq from "./components/Faq/Faq";
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';
import CoursePage from './components/CoursePage/CoursePage';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/CoursePage" element={<CoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;
