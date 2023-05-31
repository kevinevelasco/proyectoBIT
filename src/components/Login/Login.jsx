import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link desde React Router
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para iniciar sesión con los datos proporcionados
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
   <main className='seccion-login'>
    <Navbar/>
    
     <section className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <article className='login-container-div'>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </article>
        <article className='login-container-div'>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </article>
        <button type="submit">Iniciar sesión</button>
      </form>
      <p>No tienes una cuenta? <Link className="navbar-register" to={"/registro"}>Registrate</Link></p> 
    </section>
    <Footer/>
   </main>
  );
};

export default Login;
