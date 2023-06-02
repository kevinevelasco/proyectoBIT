import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Dama.css';
import Products from '../Products/Products';

const DamaFormal = () => {
  return (
    <section>
      <Navbar/>
      <h1>Productos Dama Formal</h1>
      <Products genero="Dama" tipo="Formal"></Products>
      <h2>Productos de DamaFormal</h2>
      
      
      
      </section>
  )
}

export default DamaFormal