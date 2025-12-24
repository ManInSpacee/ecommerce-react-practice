import React, {useEffect, useState} from 'react';
import './CheckoutPage.css';
import axios from "axios";
import CheckoutHeader from "./CheckoutHeader.jsx";
import {formatMoney} from "../../utils/money.js";
import OrderSummary from "./OrderSummary.jsx";
import PaymentSummary from "./PaymentSummary.jsx";

const CheckoutPage = ({ cart }) => {

  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {

    const fetchCheckoutData = async () => {
      let response = await axios.get(
        '/api/delivery-options?expand=estimatedDeliveryTime'
      );
      setDeliveryOptions(response.data);

      response = await axios.get('/api/payment-summary');
      setPaymentSummary(response.data);
    };
    fetchCheckoutData();
  }, []);

  return (
    <div>
      <link rel="icon" type="image/svg+xml" href="src/assets/images/icons/cart-favicon.png"/>
      <title>Checkout</title>

      <CheckoutHeader cart={cart}/>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cart={cart} />
          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;