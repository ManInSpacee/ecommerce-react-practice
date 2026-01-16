import React, {Fragment} from 'react';
import dayjs from "dayjs";
import {formatMoney} from "../../utils/money.ts";
import OrderDetailsGrid from "./OrderDetailsGrid.jsx";
import OrderHeader from "./OrderHeader.jsx";

const OrdersGrid = ({ orders, loadCart }) => {
  return (
    <>
      <div className="orders-grid">
        {orders.map((order) => {
          return (
            <div key={order.id} className="order-container">
              <OrderHeader order={order} />
              <OrderDetailsGrid order={order} loadCart={loadCart} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OrdersGrid;