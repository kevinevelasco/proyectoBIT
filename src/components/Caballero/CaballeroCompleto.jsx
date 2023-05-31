import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './CaballeroCompleto.css';
import Products from '../Products/Products';

export const CaballeroCompleto = () => {
  return (
    <section>
        <Navbar/>
      <Footer/>
       Productos Caballero Completos
       <Products genero="Caballero" tipo="Deportivo"></Products>
       <Products genero="Caballero" tipo="Formal"></Products>

        
    </section>
  )
}
