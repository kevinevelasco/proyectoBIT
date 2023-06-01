import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';

const Navbar = () => {
  const { loggedInUser } = useContext(dataContext);
  return (
    <section className='nav-container'>
      <nav className='navbar'>
        <h1 className='navbar-logo'><Link to={"/"}>Solarte Store</Link></h1>

        <ul className="navbar-menu">
          <li>
            <Link to={"/dama-completo"}>
              <a href="#dama">Dama</a>
            </Link>
            <ul className="submenu">
              <li><Link to={"/dama-formal"}>Formal</Link></li>
              <li><Link to={"/dama-deportivo"}>Deportivo</Link></li>
            </ul>
          </li>
          <li>
            <Link to={"/caballero-completo"}>
              <a href="#caballero">Caballero</a>
            </Link>
            <ul className="submenu">
              <li><Link to={"/caballero-formal"}>Formal</Link></li>
              <li><Link to={"/caballero-deportivo"}>Deportivo</Link></li>
            </ul>
          </li>
          <li>
            <Link to={"/contacto"}>
              <a href="#contacto">Contacto</a>
            </Link>
            <ul className="submenu">
              <li><Link to={"/contacto"}>Formulario</Link></li>
            </ul>
          </li>
        </ul>
        {!loggedInUser && (
          <>
            <div className="navbar-auth">
              <Link className="navbar-login" to={"/login"}>Login</Link>
              <Link className="navbar-register" to={"/registro"}>Registro</Link>
            </div>
            <div className="navbar-search">
              <input type="text" placeholder="Buscar..." />
              <button className="search-button">Buscar</button>
            </div>
          </>)
        }
        {loggedInUser && (
          <Link className="navbar-carrito" to={"/cart"}>🛒</Link>
        )}
      </nav>
    </section>
  );
}

export default Navbar;
