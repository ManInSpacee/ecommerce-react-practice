import {Route, Routes} from 'react-router';
import HomePage from "./pages/HomePage.jsx";
import CheckoutPage from "./pages/checkout/CheckoutPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";
import Tracking from "./pages/Tracking.jsx";
import './App.css'
import NotFoundPage from "./pages/notfound/NotFoundPage.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<Tracking />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </>
  )
}

export default App
