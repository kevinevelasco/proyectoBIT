import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <section className='nav-container'>
      <nav className='navbar'>
        <h1 className='navbar-logo'>Solarte Store</h1>
        <h2 className="navbar-carrito">🛒</h2>
        <ul className="navbar-menu">
          <li>
            <a href="#dama">Dama</a>
            <ul className="submenu">
              <li><a href="#dama-formal">Formal</a></li>
              <li><a href="#dama-deportivo">Deportivo</a></li>
            </ul>
          </li>
          <li>
            <a href="#caballero">Caballero</a>
            <ul className="submenu">
              <li><a href="#caballero-formal">Formal</a></li>
              <li><a href="#caballero-deportivo">Deportivo</a></li>
            </ul>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
            <ul className="submenu">
              <li><a href="#formulario">Formulario</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
