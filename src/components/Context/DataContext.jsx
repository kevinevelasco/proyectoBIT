import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [cart, setCart] = useState([]); // Estado del carrito
  const [loggedInUser, setLoggedInUser] = useState(false); // Estado de inicio de sesión

  useEffect(() => {
    axios("data/data.json").then((res) => setData(res.data));
    fetch('https://6478216f362560649a2d3d21.mockapi.io/api/users/users')
      .then(response => response.json())
      .then(data => setUsersData(data))
      .catch(error => console.error('Error al obtener los datos de la API:', error));
  }, []);   

  return <dataContext.Provider value={{ data, usersData, setUsersData, loggedInUser, setLoggedInUser, cart, setCart }}>{children}</dataContext.Provider>;
};

export default DataProvider;