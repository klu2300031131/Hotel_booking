import React, { useState } from "react";
import "./Search.css";
import { FaSearchLocation, FaCalendarAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const locations = ["Mumbai", "Chennai", "Delhi", "Visakhapatnam", "Vijayawada", "Bangkok"];

const Search = () => {
  const [query, setQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    setFilteredLocations(locations.filter((loc) => loc.toLowerCase().includes(value.toLowerCase())));
  };

  const handleSelectLocation = (location) => {
    setQuery(location);
    setFilteredLocations([]);
  };

  const handleSearch = () => {
    if (query) {
      navigate(`/category/${query.toLowerCase()}`);
    }
  };

  return (
    <div className="search-container">
      <h1>Where To?</h1>
      <div className="search-box">
        {/* Destination Input */}
        <div className="input-group">
          <FaSearchLocation className="icon" />
          <input
            type="text"
            placeholder="Where to?"
            value={query}
            onChange={handleInputChange}
          />
          {filteredLocations.length > 0 && (
            <ul className="dropdown">
              {filteredLocations.map((location, index) => (
                <li key={index} onClick={() => handleSelectLocation(location)}>
                  {location}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* From/To Date Picker */}
        <div className="input-group">
          <input type="date" placeholder="From Date" />
          <input type="date" placeholder="To Date" />
        </div>

        {/* Travellers Input */}
        <div className="input-group">
          <FaUser className="icon" />
          <input type="number" min="1" placeholder="Travellers" />
        </div>

        {/* Search Button */}
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Search;
