import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Caballero.css';
import Products from '../Products/Products';

const CaballeroDeportivo = () => {
  return (
    <section  >
      <Navbar/>
    
       Productos CaballeroDeportivo
       <Products genero="Caballero" tipo="Deportivo"></Products>
       <Footer/>
    </section>
  )
}

export default CaballeroDeportivo