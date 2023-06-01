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
    axios("data/users.json").then((res) => setUsersData(res.data));
  }, []);

  return <dataContext.Provider value={{ data, usersData, loggedInUser, setLoggedInUser, cart, setCart }}>{children}</dataContext.Provider>;
};

export default DataProvider;