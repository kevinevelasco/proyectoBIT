import React from 'react';
import './Dama.css';
import { Link } from 'react-router-dom';

export const Dama = () => {
  return (
    <main className="dama-section">
      <section className='dama-section-1'>
      <article className="image-container">
          <Link to= {"/"}>
            <img src="/assets/dama.jpeg" alt="Imagen-1" id='imagen-1'/>
          </Link>
        </article>
      </section>
      <section className='dama-section-2'>
      <article className="image-container">
          <Link to= {"/dama-deportivo"}>
            <img src="/assets/deportivo-dama.jpeg" alt="Imagen-3" id='imagen-3'/>
          </Link>
        </article>
        <article className="image-container">
          <Link to= {"/dama-formal"}>
            <img src="/assets/formal-dama.jpeg" alt="Imagen-3" id='imagen-3'/>
          </Link>
        </article>
        
      </section>
    </main>
  );
}
