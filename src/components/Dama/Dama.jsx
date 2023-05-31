import React from 'react';
import './Dama.css';
import { Link } from 'react-router-dom';

export const Dama = () => {
  return (
    <main className="dama-section">
      <section className='dama-section-1'>
      <article className="image-container">
          <Link to= {"/dama-completo"}>
            <img src="/assets/dama.jpeg" alt="Imagen-1" id='imagen-1' title='Catálogo para Dama'/>
          </Link>
        </article>
      </section>
      <section className='dama-section-2'>
      <article className="image-container">
          <Link to= {"/dama-deportivo"}>
            <img src="/assets/deportivo-dama.jpeg" alt="Imagen-3" id='imagen-3' title='Calzado Deportivo para Dama'/>
          </Link>
        </article>
        <article className="image-container">
          <Link to= {"/dama-formal"}>
            <img src="/assets/formal-dama.jpeg" alt="Imagen-3" id='imagen-3' title='Calzado Formal para Dama'/>
          </Link>
        </article>
        
      </section>
    </main>
  );
}
