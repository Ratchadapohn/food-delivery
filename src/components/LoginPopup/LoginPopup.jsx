import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("sign up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        if (typeof window !== "undefined" && window.localStorage) {
          localStorage.setItem("token", response.data.token);
        }

        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert(
        `Error: ${error.response?.data?.message || "Something went wrong"}`
      );
    }

    console.log(localStorage.getItem("token"));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  return (
    <div className="login-popup">
      <form className="login-popup-countainer" onSubmit={onLogin}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currState === "login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={handleChange}
              value={data.name}
              type="text"
              placeholder="your name"
              required
            />
          )}
          <input
            name="email"
            onChange={handleChange}
            value={data.email}
            type="email"
            placeholder="email"
            required
          />
          <input
            name="password"
            onChange={handleChange}
            value={data.password}
            type="password"
            placeholder="password"
            required
          />
        </div>
        <button type="submit">
          {currState === "Sign up" ? "create account" : "login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "login" ? (
          <p>
            create new account
            <span onClick={() => setCurrState("Sign up")}>Click here </span>
          </p>
        ) : (
          <p>
            Already have an account
            <span onClick={() => setCurrState("login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
