import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Dama.css';
import Products from '../Products/Products';

const DamaDeportivo = () => {
  return (
    <section>
      <Navbar></Navbar>
      <Products genero="Dama" tipo="Deportivo"></Products>
      <h2>Sección Dama</h2>
      <Footer/>
      
    </section>
  );
};

export default DamaDeportivo;