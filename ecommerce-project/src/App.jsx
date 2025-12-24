import {Route, Routes} from 'react-router';
import HomePage from "./pages/HomePage.jsx";
import CheckoutPage from "./pages/checkout/CheckoutPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";
import Tracking from "./pages/Tracking.jsx";
import './App.css'
import NotFoundPage from "./pages/notfound/NotFoundPage.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data);
      })
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} />} />
        <Route path="tracking" element={<Tracking />} />
        <Route path="*" element={<NotFoundPage cart={cart}/>} />
      </Routes>

    </>
  )
}

export default App
