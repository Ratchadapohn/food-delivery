import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import SearchPopup from "./components/SearchPopup/SearchPopup";
import MenuList from "./pages/MenuList/MenuList";
import Navbar from "./components/navbar/navbar";
import Time from "./components/Time/Time";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      {showSearch && <SearchPopup setShowSearch={setShowSearch} />}

      <Time />
      <div className="app">
        <Navbar setShowLogin={setShowLogin} setShowSearch={setShowSearch} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/menu/:id" element={<MenuList />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
