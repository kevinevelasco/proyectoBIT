import React from 'react';
import './Slider.css';

const Slider = () => {
  return (
    <main className='slider'>
      <section className='slider-container'>
        <h2>Aquí irá el slider</h2>
        <article className="slider-imagenes">
          <img src="/assets/slider1.png" alt="Imagen 1" />
          <img src="/assets/slider2.png" alt="Imagen 2" />
          <img src="imagen3.jpg" alt="Imagen 3" />
          
        </article>
      </section>
    </main>
  );
};

export default Slider;
