// // import React from 'react';
// import '../styles/Header.css';
// import logo from "../media/logo.png";


//  const Header = () => {
//     return (
//         <header className="header">
//             <img src={logo} alt="Logo" className="logo" />
//             <h1>Yossi Shpigler</h1>
//             <h3>Music & Sound Design</h3>
//         </header>
//     );
// };
// export default Header

// קוד חדש להתאמה עם הקוד היחדש ב App

// import '../styles/header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <h1>Welcome to My Portfolio</h1>
//     </header>
//   );
// };

// export default Header;








// import "./Header.css";
// import { Link, useLocation } from "react-router-dom";

// function Header() {
//   const location = useLocation();

//   return (
//     <header className="header">
//       {location.pathname !== "/ContactUs" && (
//         <Link to="/ContactUs" className="contact-button">
//           Contact Us
//         </Link>
//       )}
//       {location.pathname !== "/AboutMe" && (
//         <Link to="/AboutMe" className="about-button">
//           About Me
//         </Link>
//       )}
//       {location.pathname !== "/" && (
//         <Link to="/" className="projects-button">
//           Projects
//         </Link>
//       )}
//     </header>
//   );
// }

// export default Header;
