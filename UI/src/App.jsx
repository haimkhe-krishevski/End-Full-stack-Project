

// import { useState } from "react";
// import Projects from "./pages/projects";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import "./App.css";
// import ProjectsContainerHeader from "./components/ProjectsContainerHeader";
// import AboutMe from "./pages/AboutMe";
// import {BrowserRouter, Route, Routes } from 'react-router-dom';
// import ContactForm from "./components/ContactForm";
// // import ContactUs from "./pages/ContactUs";


// function App() {
//   return (
//     <div id="root">
//       <header className="header">
//         <button className="contact-button" onClick={() => {window.location.href = "/ContactUs"}}>Contact Us</button>
//         <button className="about-button" onClick={() => {window.location.href = "/AboutMe"}}>About Me</button>
//       </header>
//       <BrowserRouter>
//       <main className="main-content">
//         <Routes>
//           <Route path="/" element={<Projects />} />
//           <Route path="/AboutMe" element={<AboutMe /> } />
//           <Route path="/ContactUs" element={<ContactForm /> } />
//           {/* <Route path="/ContactUs" element={<ContactUs /> } /> */}
//         </Routes>
//       {/* //         <Projects />/ */}

//       </main>
//       </BrowserRouter>
//       <footer className="footer">
//         Footer
//       </footer>
//     </div>
//   );
// }

// export default App;







import { useState } from "react";
import { BrowserRouter, Route, Routes, Link, useLocation } from "react-router-dom";
import Projects from "./pages/projects";
import AboutMe from "./pages/AboutMe";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";
import "./styles/Header.css";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      {location.pathname !== "/ContactUs" && (
        <Link to="/ContactUs" className="contact-button">
          Contact Us
        </Link>
      )}
      {location.pathname !== "/AboutMe" && (
        <Link to="/AboutMe" className="about-button">
          About Me
        </Link>
      )}
      {location.pathname !== "/" && (
        <Link to="/" className="projects-button">
          Projects
        </Link>
      )}
    </header>
  );
}



function App() {
  return (
    <div id="root">
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/ContactUs" element={<ContactForm />} />
          </Routes>
        </main>
        <footer className="footer">Footer</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
