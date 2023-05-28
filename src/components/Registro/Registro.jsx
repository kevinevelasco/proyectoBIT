import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Registro.css'

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [numeroIdentificacion, setNumeroIdentificacion] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [numeroTelefono, setNumeroTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    // a un servidor o realizar cualquier otra acción que desees
    console.log('Datos del formulario:', {
      nombre,
      fechaNacimiento,
      numeroIdentificacion,
      correoElectronico,
      numeroTelefono
    });
  };

  return (
    <main className='seccion-registro'>
      <Navbar/>
      <Footer/>
      <section className='Formulario-registro'>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <article className='formulario-registro-div'>
          <label>Nombre completo:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </article>
        <article className='formulario-registro-div'>
          <label>Fecha de nacimiento:</label>
          <input
            type="date"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            required
          />
        </article>
        <article className='formulario-registro-div'>
          <label>Número de identificación:</label>
          <input
            type="text"
            value={numeroIdentificacion}
            onChange={(e) => setNumeroIdentificacion(e.target.value)}
            required
          />
        </article>
        <article className='formulario-registro-div'>
          <label>Correo electrónico:</label>
          <input
            type="email"
            value={correoElectronico}
            onChange={(e) => setCorreoElectronico(e.target.value)}
            required
          />
        </article>
        <article className='formulario-registro-div'>
          <label>Número de teléfono (móvil y/o fijo):</label>
          <input
            type="text"
            value={numeroTelefono}
            onChange={(e) => setNumeroTelefono(e.target.value)}
            required
          />
        </article>
        <button type="submit">Registrar</button>
      </form>
    </section>
    </main>
  );
};

export default Registro;
