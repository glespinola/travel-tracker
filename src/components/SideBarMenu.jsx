import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const SideBarMenu = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);


  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };



  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hamburger-menu-button ${isOpen ? "open" : ""}`}
      >
        <span className="hamburger-menu-button__line"></span>
        <span className="hamburger-menu-button__line"></span>
        <span className="hamburger-menu-button__line"></span>
      </button>
      <nav className={`hamburger-menu-nav ${isOpen ? "open" : ""}`}>
        <Link to='/' onClick={() => setIsOpen(!isOpen)}>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {(user) && (
          <a className='btn-logout' onClick={handleLogout}>Logout</a>
        )}
        <p className="hamburger-menu-p">Made by<a href="https://github.com/glespinola" target='_blank'>glespinola</a></p>
      </nav>
    </>
  );
};

export default SideBarMenu;
