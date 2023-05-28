import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./CartContent.css"

const CartElements = () => {
const { cart } = useContext(dataContext);
  return cart.map ((product) => {
    return (
      <div className="cartContent" key={product.id}>
        <img src={product.img} alt="productCard"/>
        <h3 className="name">{product.nombre}</h3>
        <h4 className="price">{product.precio} $ </h4>
      </div>
    )
  })
}

export default CartElements