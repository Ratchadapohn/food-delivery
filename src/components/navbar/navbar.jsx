import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets"; // นำเข้า assets ที่นี่
import { StoreContext } from "../../context/StoreContext";
import "./navbar.css";

const Navbar = ({ setShowLogin, setShowSearch }) => {
  const [menu, setMenu] = useState("");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>

      <div className="navbar-right">
        <img
          onClick={() => {
            console.log("Search button clicked");
            setShowSearch(true); // แก้ไขให้ใช้เฉพาะฟังก์ชันนี้
          }}
          src={assets.search_icon}
          alt="Search"
        />

        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};
export default Navbar;
