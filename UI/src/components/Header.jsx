// import React from 'react';
import '../styles/Header.css';
import logo from "../media/logo.png";


 const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />
            <h1>Yossi Shpigler</h1>
            <h3>Music & Sound Design</h3>
        </header>
    );
};
export default Header