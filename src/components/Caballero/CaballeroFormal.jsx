import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Caballero.css';
import Products from '../Products/Products';

const CaballeroFormal = () => {
  return (
    <main className='seccion-caballero-formal'>
      <Navbar/>
      <Footer/>
       Productos CaballeroFormal
       <Products genero="Caballero" tipo="Formal"></Products>
    </main>
  )
}

export default CaballeroFormal