/**
 * CartProvider til state transport af data til indkøbskurv
 * Bruges til at vise indkøbskurven, vareantal på ikon i toppen og 
 * varer der allerede er tilføjet til kurven
 */
import axios from "axios";
import { useAuth } from "./AuthProvider";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([])
  const { loginData } = useAuth()


  useEffect(() => {
    const getData = async () => {

      const options = {
        headers: {
          Authorization: `Bearer ${loginData.access_token}`
        }
      }

      console.log(options);

      const endpoint = `http://localhost:4000/cart`

      try {
        
          const result = await axios.get(endpoint, options)
          setCartData(result.data)
        
      } catch (err) {
        console.error(`Fejl i kald af cart: ${err}`);
      }
    }
    if(loginData && loginData.access_token){
      getData()
    }


   
  }, [children, loginData]);

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  )
}

const useCartData = () => useContext(CartContext)

export { CartProvider, useCartData }