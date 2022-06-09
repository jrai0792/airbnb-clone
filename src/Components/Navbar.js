import React from 'react';
import Logo from "../images/Logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className="nav-logo" />
    </nav>
  )
}