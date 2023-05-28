import React from 'react';
import './Caballero.css';

const Caballero = () => {
  return (
    <main className="caballero-section">
      <section className='caballero-section-1'>
      <article className="image-container">
        <img src="/assets/caballero.jpeg" alt="Imagen-1" />
      </article>
      </section>
     <section className='caballero-section-2'>
     <article className="image-container">
        <img src="/assets/deportivo-caballero.jpeg" alt="Imagen-2" />
      </article>
      <article className="image-container">
        <img src="/assets/formal-caballero.jpeg" alt="Imagen-3" />
      </article>
     </section>
    </main>
  );
};

export default Caballero;
