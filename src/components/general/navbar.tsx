import { useState } from "react";
import './navbar.css';
import logo from '../../assets/myto.png'
import { FaBars, FaTimes } from "react-icons/fa";
import { NavbarDrawer } from "./navbarDrawer";

interface NavbarProps {
  mensaje: string;
}

export const Navbar = ({ mensaje }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <header className="navbar-header">
        <div className="navbar-brand">
          <a className="navbar-logo-link" href="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </a>
          <a className="navbar-title" href="/">
            <h1>MYTO - Masajes y Terapias Orientales</h1>
          </a>
        </div>

        <div className="menu-icon" onClick={toggleDrawer}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>

      <NavbarDrawer 
        isOpen={isOpen} 
        onClose={closeDrawer} 
        mensaje={mensaje}
      />
      
      <div 
        className={`navbar-overlay ${isOpen ? 'visible' : ''}`}
        onClick={closeDrawer}
      />
    </div>
  );
};
