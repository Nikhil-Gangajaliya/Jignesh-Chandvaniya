import React from 'react';
import "./Components.css";

function Navbar() {
    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <h2>Jignesh Chandvaniya</h2>
                </div>

                <div className="menu">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;