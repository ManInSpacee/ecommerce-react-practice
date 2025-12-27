import React, {Fragment, useEffect, useState} from 'react';
import './OrdersPage.css';
import Header from "../../components/Header.jsx";
import axios from "axios";
import dayjs from "dayjs";
import {formatMoney} from "../../utils/money.js";
import OrdersGrid from "./OrdersGrid.jsx";

const OrdersPage = ({cart}) => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get('api/orders?expand=products');
      setOrders(response.data);
    };
    fetchOrdersData();
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="src/assets/images/icons/orders-favicon.png"/>
      <title>Orders</title>

      <Header cart={cart}/>

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} />
      </div>

    </>
  );
};

export default OrdersPage;