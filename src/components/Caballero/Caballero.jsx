import React from 'react';
import './Caballero.css';

const Caballero = () => {
  return (
    <main className="caballero-section">
      <section className='caballero-section-1'>
        <article className="image-container">
          <a href="/calzado-caballero">
            <img src="/assets/caballero.jpeg" alt="Imagen-1" id='imagen-1' />
          </a>
        </article>
      </section>
      <section className='caballero-section-2'>
        <article className="image-container">
          <a href="/calzado-caballero-deportivo">
            <img src="/assets/deportivo-caballero.jpeg" alt="Imagen-2" id='imagen-2' />
          </a>
        </article>
        <article className="image-container">
          <a href="/calzado-caballero-formal">
            <img src="/assets/formal-caballero.jpeg" alt="Imagen-3" id='imagen-3' />
          </a>
        </article>
      </section>
    </main>
  );
};

export default Caballero;
