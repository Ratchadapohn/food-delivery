import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./SearchPopup.css";

const SearchPopup = ({ setShowSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const { foodList } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const results = foodList.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(results);
  };

  const handleItemClick = (itemId) => {
    navigate(`/menu/${itemId}`);
    setShowSearch(false);
  };

  return (
    <div className={`search-popup-container`}>
      <div className="search-popup-content">
        <div className="search-popup-title">
          <h2>what's your fav food?</h2>
          <button onClick={() => setShowSearch(false)}>x</button>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search-popup-input"
        />
        <div className="search-results">
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <div
                key={item.id}
                className="search-result-item"
                onClick={() => handleItemClick(item.id)}
              >
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
