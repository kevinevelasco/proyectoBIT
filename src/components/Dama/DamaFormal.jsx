import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Dama.css';
import Products from '../Products/Products';

const DamaFormal = () => {
  return (
    <section>
      <Navbar/>
      <Products genero="Dama" tipo="Formal"></Products>
      <h2>Productos de DamaFormal</h2>
      <Footer/>
      
      
      </section>
  )
}

export default DamaFormal