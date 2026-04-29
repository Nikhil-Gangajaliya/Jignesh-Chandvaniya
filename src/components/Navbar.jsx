import React, { useState } from 'react';
import "./Components.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="container">
            <div className="navbar">
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
                </div>

                <div className="logo">
                    <h2>Jignesh Chandvaniya</h2>
                </div>
            </div>

            {/* OVERLAY */}
            {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

            {/* MENU */}
            <div className={`menu ${isOpen ? "active" : ""}`}>
                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#services" onClick={closeMenu}>Services</a>
                <a href="#pricing" onClick={closeMenu}>Pricing</a>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
            </div>
        </div>
    );
}

export default Navbar;