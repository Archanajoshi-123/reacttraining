import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <div className="navbar-title">Enormous</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/hello" onClick={() => setIsOpen(false)}>About Us</Link>
        <Link to="/bye" onClick={() => setIsOpen(false)}>Bye</Link>
        <Link to="/hi" onClick={() => setIsOpen(false)}>Hi</Link>
        <Link to="/hey" onClick={() => setIsOpen(false)}>Hey</Link>
      </div>
    </nav>
  );
};

export default Navbar;
