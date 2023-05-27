import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";

const Products = () => {
  const { data } = useContext(dataContext);
  return data.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img src={product.img} alt="img-product" />
        <h3>{product.tipo}</h3>
        <h4>{product.genero}</h4>
        <button>Comprar</button>
      </div>
    );
  });
};

export default Products;