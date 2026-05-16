import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="brand-link">Sheriyance</a>
      </div>

      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="/" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/about" className="navbar-link">About</a>
        </li>
        <li className="navbar-item">
          <a href="/services" className="navbar-link">Services</a>
        </li>
        <li className="navbar-item">
          <a href="/contact" className="navbar-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;