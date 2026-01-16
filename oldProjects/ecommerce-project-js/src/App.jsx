import HomePage from "./pages/home/HomePage.jsx";
import CheckoutPage from "./pages/checkout/CheckoutPage.jsx";
import OrdersPage from "./pages/orders/OrdersPage.jsx";
import Tracking from "./pages/Tracking.jsx";
import NotFoundPage from "./pages/notfound/NotFoundPage.jsx";
import {Route, Routes} from 'react-router';
import {useEffect, useState} from "react";
import axios from "axios";
import './App.css'

window.axios = axios;

function App() {

  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  }

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart}/>} />
        <Route path="tracking/:orderId/:productId}" element={<Tracking />} />
        <Route path="*" element={<NotFoundPage cart={cart}/>} />
      </Routes>

    </>
  )
}

export default App;
