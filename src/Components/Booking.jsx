import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

const Booking = () => {
  const [reservedHotels, setReservedHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    const storedReservedHotels = JSON.parse(localStorage.getItem(`bookings_${user.email}`)) || [];
    setReservedHotels(storedReservedHotels);
  }, []);

  const handleRemoveBooking = (hotelId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    const updatedBookings = reservedHotels.filter((hotel) => hotel.id !== hotelId);
    setReservedHotels(updatedBookings);
    localStorage.setItem(`bookings_${user.email}`, JSON.stringify(updatedBookings));
  };

  return (
    <div className="booking-container">
      <h2>Your Booked Hotels</h2>

      {reservedHotels.length > 0 ? (
        reservedHotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-details">
              <h2 className="hotel-name">{hotel.name}</h2>
              <p className="hotel-location">{hotel.location}</p>
              <p className="hotel-price">
                <span className="discounted-price">₹{hotel.discountedPrice}</span>
                <span className="original-price">₹{hotel.originalPrice}</span>
                <span className="discount">({hotel.discountPercentage}% OFF)</span>
              </p>
              <button className="remove-button" onClick={() => handleRemoveBooking(hotel.id)}>Remove</button>
            </div>
          </div>
        ))
      ) : (
        <p>No bookings yet. Start reserving your favorite hotels!</p>
      )}

      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Booking;
