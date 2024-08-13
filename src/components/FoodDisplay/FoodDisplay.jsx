import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-item-list">
        {foodList.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={`${item.id}-${index}`}
                name={item.name}
                id={item.id}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
