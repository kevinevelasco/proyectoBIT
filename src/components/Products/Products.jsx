import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";

const Products = ({ tipo, genero }) => {
  const { data, cart, setCart } = useContext(dataContext);

  const buyProducts = (product) => {
    console.log(product);
    setCart([...cart, product]);
  };

  const filteredProducts = data.filter((product) => product.tipo === tipo && product.genero === genero);

  return filteredProducts.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img src={product.img} alt="img-product" />
        <h3>{product.nombre}</h3>
        <h4>{product.tipo}</h4>
        <h4>{product.genero}</h4>
        <button onClick={() => buyProducts(product)}>Comprar</button>
      </div>
    );
  });
};

export default Products;
