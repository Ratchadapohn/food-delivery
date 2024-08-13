import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, image, price }) => {
  const { itemCart, addCart, removeCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt={name} />
        {!itemCart[id] ? (
          <img
            className="add"
            onClick={() => addCart(id)}
            src={assets.add_icon_white}
            alt="Add Item"
            aria-label={`Add ${name} to cart`}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeCart(id)}
              src={assets.remove_icon_red}
              alt="Decrease Item Count"
              aria-label={`Decrease count of ${name}`}
            />
            <p>{itemCart[id]}</p>
            <img
              onClick={() => addCart(id)}
              src={assets.add_icon_green}
              alt="Increase Item Count"
              aria-label={`Increase count of ${name}`}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <h2>{name}</h2>
          <img src={assets.rating_starts} alt="Rating Stars" />
        </div>
        <p className="food-item-desc">
          Food provides essential nutrients for overall health and well-being
        </p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
