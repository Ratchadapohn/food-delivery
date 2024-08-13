import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import "./MenuList.css";
import ClipLoader from "react-spinners/ClipLoader";

const MenuList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { foodList, itemCart, addCart, removeCart } = useContext(StoreContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    const item = foodList.find((item) => item.id === id);
    setSelectedItem(item);
  }, [id, foodList]);

  const handleItemClick = (itemId) => {
    navigate(`/menu/${itemId}`);
  };

  if (!selectedItem)
    return (
      <p>
        <ClipLoader size={80} />
      </p>
    );

  return (
    <>
      {overlayVisible && (
        <div className="overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className="menu-details">
        <img src={selectedItem.image} alt={selectedItem.name} />
        <div className="menu-content">
          {!itemCart[id] ? (
            <img
              className="add-button"
              onClick={() => addCart(id)}
              src={assets.add_icon_white}
              alt="Add Item"
              aria-label={`Add ${selectedItem.name} to cart`}
            />
          ) : (
            <div className="item-counter">
              <img
                onClick={() => removeCart(id)}
                src={assets.remove_icon_red}
                alt="Decrease Item Count"
                aria-label={`Decrease count of ${selectedItem.name}`}
              />
              <p>{itemCart[id]}</p>
              <img
                onClick={() => addCart(id)}
                src={assets.add_icon_green}
                alt="Increase Item Count"
                aria-label={`Increase count of ${selectedItem.name}`}
              />
            </div>
          )}
        </div>
        <h1>{selectedItem.name}</h1>
        <p>
          Food provides essential nutrients for overall health and well-being.
        </p>
        <p>${selectedItem.price}</p>
      </div>

      <hr className="horizontal-rule" />
      <div className="recommended-section">
        <h2>Recommended Dishes</h2>
        <div className="recommended-list">
          {foodList.map((item) => (
            <div
              key={item.id}
              className="recommended-item"
              onClick={() => handleItemClick(item.id)}
            >
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="horizontal-rule" />
    </>
  );
};

export default MenuList;
