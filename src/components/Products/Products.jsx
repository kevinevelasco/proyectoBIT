import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import './Products.css'
import axios from "axios";

const Products = ({ tipo, genero, limit}) => {
  const { data, cart, setCart } = useContext(dataContext);
  const { loggedInUser } = useContext(dataContext); 
  const buyProducts = (product) => {
    if (loggedInUser) {
      console.log(product);
      setCart([...cart, product]);
    } else {
      alert('Debes iniciar sesión para comprar');
    }
    
    //variable para almacenar que producto se esta repitiendo
    const productRepeat = cart.find((item) => item.id === product.id);

    if(productRepeat){
      setCart(cart.map((item) => (item.id === product.id ? {...product, cantidad: productRepeat.cantidad + 1} : item )));
    } else {
      setCart([...cart, product]);
    }
  };

  const filteredProducts = data.filter((product) => product.tipo === tipo && product.genero === genero);

  const limitedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;


  return (
    <div className="productCardContainer">
      {limitedProducts.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.img} alt="img-product" />
          <h3>{product.nombre}</h3>
          <h4>{product.tipo}</h4>
          <h4>{product.genero}</h4>
          <button onClick={() => buyProducts(product)}>Comprar</button>
        </div>
      ))}
    </div>
  );
};
export default Products;
