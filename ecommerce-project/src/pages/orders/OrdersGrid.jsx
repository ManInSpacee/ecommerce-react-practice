import React, {Fragment} from 'react';
import dayjs from "dayjs";
import {formatMoney} from "../../utils/money.js";
import OrderDetailsGrid from "./OrderDetailsGrid.jsx";
import OrderHeader from "./OrderHeader.jsx";

const OrdersGrid = ({ orders }) => {
  return (
    <>
      <div className="orders-grid">
        {orders.map((order) => {
          return (
            <div key={order.id} className="order-container">
              <OrderHeader order={order} />
              <OrderDetailsGrid order={order} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OrdersGrid;