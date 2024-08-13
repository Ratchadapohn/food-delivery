import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multifields">
          <input type="text" placeholder="firstname" />
          <input type="text" placeholder="lastname" />
        </div>
        <input type="email" placeholder="email address" />
        <input type="text" placeholder="street" />
        <div className="multifields">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <div className="multifields">
          <input type="text" placeholder="zip code" />
          <input type="text" placeholder="country" />
        </div>
        <input type="text" placeholder="phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount() + 2}</p>
            </div>
            <button>Proceed to payment</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
