import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { IoTrashBin } from "react-icons/io5";

const Cart = () => {
  const { itemCart, foodList, removeCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Prices</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <br />
      <hr />
      {foodList.map((item, index) => {
        if (itemCart[item.id] > 0) {
          return (
            <div key={index}>
              <div className="cart-items-title cart-items-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{itemCart[item.id]}</p>
                <p>${item.price * itemCart[item.id]}</p>
                <p onClick={() => removeCart(item.id)} className="cross">
                  <IoTrashBin />
                </p>
              </div>
              <hr />
            </div>
          );
        }
      })}
      <div className="cart-buttom">
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
            <button
              onClick={() => {
                navigate("/PlaceOrder");
              }}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
        <div className="cart-promocode">
          <p>if you have a promotion code , Enter it here!</p>
          <div className="cart-promo-code-input">
            <input type="text" placeholder="promotion code" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
