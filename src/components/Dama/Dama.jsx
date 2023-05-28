import React from 'react';
import './Dama.css';

export const Dama = () => {
  return (
    <main className="dama-section">
      <section className='dama-section-1'>
        <article className="image-container">
          <a href="/calzado-dama">
            <img src="/assets/dama.jpeg" alt="Imagen-1" id='imagen-1' />
          </a>
        </article>
      </section>
      <section className='dama-section-2'>
        <article className="image-container">
          <a href="/calzado-dama-deportivo">
            <img src="/assets/deportivo-dama.jpeg" alt="Imagen-2" id='imagen-2' />
          </a>
        </article>
        <article className="image-container">
          <a href="/calzado-dama-formal">
            <img src="/assets/formal-dama.jpeg" alt="Imagen-3" id='imagen-3'/>
          </a>
        </article>
      </section>
    </main>
  );
}
