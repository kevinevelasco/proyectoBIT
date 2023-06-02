import React from 'react';
import './Caballero.css';
import { Link } from 'react-router-dom';

const Caballero = () => {
  return (
    <main className="caballero-section">
      <section className='caballero-section-1'>
        <article className="image-container">
          <Link to="/caballero-completo">
            <img src="/assets/caballero.jpeg" alt="Imagen-1" id='imagen-1' title='Cátalogo para Caballero' />
            <button>Ir a Caballero Completo</button>
          </Link>
        </article>
      </section>
      <section className='caballero-section-2'>
        <article className="image-container">
          <Link to="/caballero-deportivo">
            <img src="/assets/deportivo-caballero.jpeg" alt="Imagen-2" id='imagen-2' title='Calzado Deportivo para Caballero' />
            <button>Ir a Caballero Deportivo</button>
          </Link>
        </article>
        <article className="image-container">
          <Link to="/caballero-formal">
            <img src="/assets/formal-caballero.jpeg" alt="Imagen-3" id='imagen-3' title='Calzado Formal para Caballero' />
            <button>Ir a Caballero Formal</button>
          </Link>
        </article>
      </section>
    </main>
  );
};

export default Caballero;
