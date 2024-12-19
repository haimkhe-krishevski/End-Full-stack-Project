

import { useState } from "react";
import Projects from "./pages/projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import ProjectsContainerHeader from "./components/ProjectsContainerHeader";
import ContactUs from './pages/ContactUs';
import { useRoutes } from "react-router";
function App() {
  return (
    <div id="root">
      <header className="header">Header</header>
      <main className="main-content">
      <Projects />
      </main>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;





//         <Projects />
//         <ContactUs />

