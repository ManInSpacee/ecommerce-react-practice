import React, {useEffect, useState} from 'react';
import './general.css'
import './Tracking.css'
import Header from "../components/Header.jsx";
import {Link, useParams} from "react-router";
import axios from "axios";
import dayjs from "dayjs";

const Tracking = () => {

  const {orderId, productId} = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchTrackingData = async () => {
      const response = await axios.get(`api/orders/${orderId}?expand=products`);
      setOrder(response.data);
    }
    fetchTrackingData();
  }, [orderId]);

  if (!order) {
    return null;
  }

  const orderProduct = order.products.find((orderProduct) => {
    return orderProduct.productId === productId;
  })

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="src/assets/images/icons/tracking-favicon.png"/>
      <title>Tracking</title>

      <Header/>

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            Arriving on {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
          </div>

          <div className="product-info">
            {orderProduct.product.name}
          </div>

          <div className="product-info">
            Quantity: 1
          </div>

          <img className="product-image" src="src/assets/images/products/athletic-cotton-socks-6-pairs.jpg"/>

          <div className="progress-labels-container">
            <div className="progress-label">
              Preparing
            </div>
            <div className="progress-label current-status">
              Shipped
            </div>
            <div className="progress-label">
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracking;