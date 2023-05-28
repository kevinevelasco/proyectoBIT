import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className='nav-container'>
      <nav className='navbar'>
        <h1 className='navbar-logo'><Link to={"/"}>Solarte Store</Link></h1>

        <ul className="navbar-menu">
          <li>
            <a href="#dama">Dama</a>
            <ul className="submenu">
              <li><Link to={"/dama-formal"}>Formal</Link></li>
              <li><Link to={"/dama-deportivo"}>Deportivo</Link></li>
            </ul>
          </li>
          <li>
            <a href="#caballero">Caballero</a>
            <ul className="submenu">
              <li><Link to={"/caballero-formal"}>Formal</Link></li>
              <li><Link to={"/caballero-deportivo"}>Deportivo</Link></li>
            </ul>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
            <ul className="submenu">
              <li><Link to={"/contacto"}>Formulario</Link></li>
            </ul>
          </li>
        </ul>
        
        <div className="navbar-auth">
          <Link className="navbar-login" to={"/login"}>Login</Link>
          <Link className="navbar-register" to={"/registro"}>Registro</Link>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Buscar..." />
          <button className="search-button">Buscar</button>
        </div>
        <Link className="navbar-carrito" to={"/cart"}>🛒</Link>
      </nav>
    </section>
  );
}

export default Navbar;
