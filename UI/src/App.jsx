

import { useState } from "react";
import Projects from "./pages/projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import ProjectsContainerHeader from "./components/ProjectsContainerHeader";
import AboutMe from "./pages/AboutMe";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactForm from "./components/ContactForm";


function App() {
  return (
    <div id="root">
      <header className="header">
        <button className="contact-button" onClick={() => {window.location.href = "/ContactUs"}}>Contact Us</button>
        <button className="about-button" onClick={() => {window.location.href = "/AboutMe"}}>About Me</button>
      </header>
      <BrowserRouter>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/AboutMe" element={<AboutMe /> } />
          <Route path="/ContactUs" element={<ContactForm /> } />
        </Routes>
      {/* //         <Projects />/ */}

      </main>
      </BrowserRouter>
      <footer className="footer">
        Footer
      </footer>
    </div>
  );
}

export default App;

{/* <AboutMe /> */}
