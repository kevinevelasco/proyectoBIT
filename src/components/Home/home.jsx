import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Caballero from "../Caballero/Caballero";
import { Dama } from "../Dama/Dama";
import Products from "../Products/Products";
import Contacto from "../Contacto/Contacto";
import Registro from "../Registro/Registro";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
  <>
  <Navbar/>
  <Slider/>
  <Products/> 
  <Caballero/>
  <Dama/>
  <Contacto/>
  <Registro/>
  <Login/>
  <Footer/>

  </>
  );
};

export default Home;
  