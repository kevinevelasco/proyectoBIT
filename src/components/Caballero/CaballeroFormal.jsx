import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Caballero.css';
import Products from '../Products/Products';

const CaballeroFormal = () => {
  return (
    <section>
      <main className='seccion-caballero-formal'>
      <Navbar/>
    
       Productos CaballeroFormal
       <Products genero="Caballero" tipo="Formal"></Products>
       <Footer/>
    </main>
    </section>
  )
}

export default CaballeroFormal