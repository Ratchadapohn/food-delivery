import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <h2>order your favorite food here</h2>
        <p>
          choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise Our mission
          is to satisfy your cravings and elevate your dining experience, one
          delicious meal at a time
        </p>
        <button>view menu</button>
      </div>
    </div>
  );
};

export default Header;
