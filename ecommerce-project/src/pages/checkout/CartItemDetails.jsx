import React, {useState} from 'react';
import {formatMoney} from "../../utils/money.js";
import axios from "axios";

const CartItemDetails = ({ cartItem, deleteCartItem, loadCart }) => {

  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const updateQuantityCount = (event) => {
    setQuantity(event.target.value);
  }

  const updateQuantity = async () => {
    if (isUpdatingQuantity) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
      setIsUpdatingQuantity(false);
    } else {
      setIsUpdatingQuantity(true);
    }
  }

  const handleQuantityDownKey = (event) => {
    if (event.key === 'Enter') {
      updateQuantity();
    }
    else if (event.key === 'Escape') {
      setQuantity(cartItem.quantity);
      setIsUpdatingQuantity(false);
    }
  }

  return (
    <>
      <img className="product-image" src={cartItem.product.image}/>

      <div className="cart-item-details">
        <div className="product-name">
          {cartItem.product.name}
        </div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
                    <span>
                      Quantity: <span className="quantity-label">
                      { isUpdatingQuantity ? <input className="update-quantity-field"
                                                type="text"
                                                value={quantity}
                                                onChange={updateQuantityCount}
                                                onKeyDown={handleQuantityDownKey}
                      /> : cartItem.quantity}
                    </span>
                    </span>
          <span className="update-quantity-link link-primary"
                onClick={updateQuantity}>
                      Update
                    </span>
          <span className="delete-quantity-link link-primary"
          onClick={deleteCartItem}>
                      Delete
                    </span>
        </div>
      </div>
    </>
  );
};

export default CartItemDetails;