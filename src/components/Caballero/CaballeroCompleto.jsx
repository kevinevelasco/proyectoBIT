import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './CaballeroCompleto.css';
import Products from '../Products/Products';

export const CaballeroCompleto = () => {
  return (
    <section >
        <Navbar/>
      
       Productos Caballero Completos
       <Products genero="Caballero" tipo="Deportivo"></Products>
       <Products genero="Caballero" tipo="Formal"></Products>
       <Footer/>
    </section>
  )
}
