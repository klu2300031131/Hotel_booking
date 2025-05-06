import React, { useState } from "react";
import Hotels from "./Hotel";
import "./Layout.css";

const Layout = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <div className="hotel-container">
      {/* Show single hotel if selected, else show all */}
      {selectedHotel ? (
        <div className="hotel-card large">
          <img src={selectedHotel.image} alt={selectedHotel.name} className="hotel-image" />
          <div className="hotel-details">
            <h2 className="hotel-name">{selectedHotel.name}</h2>
            <p className="hotel-location">{selectedHotel.location}</p>
            <p className="hotel-amenities">{selectedHotel.amenities}</p>
            <p className="hotel-price">
              <span className="discounted-price">${selectedHotel.discountedPrice}</span>
              <span className="original-price">${selectedHotel.originalPrice}</span>
              <span className="discount">({selectedHotel.discount}% OFF)</span>
            </p>
            <button className="book-now">Book Now</button>
            <button className="back-button" onClick={() => setSelectedHotel(null)}>Back</button>
          </div>
        </div>
      ) : (
        Hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card" onClick={() => setSelectedHotel(hotel)}>
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-details">
              <h2 className="hotel-name">{hotel.name}</h2>
              <p className="hotel-location">{hotel.location}</p>
              <p className="hotel-price">
                <span className="discounted-price">${hotel.discountedPrice}</span>
                <span className="original-price">${hotel.originalPrice}</span>
                <span className="discount">({hotel.discount}% OFF)</span>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Layout;