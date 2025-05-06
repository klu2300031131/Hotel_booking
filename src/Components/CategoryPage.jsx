import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Hotels from "./Hotel";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [bookingDetails, setBookingDetails] = useState({
    numPeople: "",
    numDays: "",
    numRooms: "",
    totalCost: 0,
  });
  const [bookings, setBookings] = useState([]);
  const [showQRCode, setShowQRCode] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    const storedFavorites = JSON.parse(localStorage.getItem(`favorites_${user.email}`)) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleHotelClick = (hotelId) => {
    const selected = Hotels.find((hotel) => hotel.id === hotelId);
    setSelectedHotel(selected);
    setBookingDetails({ numPeople: "", numDays: "", numRooms: "", totalCost: 0 });
    setShowQRCode(false);
  };

  const handleBackClick = () => {
    setSelectedHotel(null);
    setShowQRCode(false);
  };

  const handleBookingChange = (event) => {
    const { name, value } = event.target;
    setBookingDetails((prev) => {
      const updatedDetails = { ...prev, [name]: value };
      if (updatedDetails.numPeople > 0 && updatedDetails.numDays > 0 && updatedDetails.numRooms > 0) {
        updatedDetails.totalCost = selectedHotel.discountedPrice * updatedDetails.numRooms * updatedDetails.numDays;
      } else {
        updatedDetails.totalCost = 0;
      }
      return updatedDetails;
    });
  };

  const handleReserve = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please log in first.");
      return;
    }

    const newBooking = { ...selectedHotel, ...bookingDetails };
    const userBookingsKey = `bookings_${user.email}`;
    const existingBookings = JSON.parse(localStorage.getItem(userBookingsKey)) || [];
    const updatedBookings = [...existingBookings, newBooking];

    localStorage.setItem(userBookingsKey, JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
    alert("Hotel reserved successfully!");
  };

  const handlePay = () => {
    setShowQRCode(true);
  };

  const handleFavorite = (hotelId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please log in first.");
      return;
    }

    const storedFavorites = JSON.parse(localStorage.getItem(`favorites_${user.email}`)) || [];
    const isFavorited = storedFavorites.includes(hotelId);

    if (isFavorited) {
      const updatedFavorites = storedFavorites.filter((id) => id !== hotelId);
      localStorage.setItem(`favorites_${user.email}`, JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
      alert("Removed from favorites");
    } else {
      const updatedFavorites = [...storedFavorites, hotelId];
      localStorage.setItem(`favorites_${user.email}`, JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
      alert("Added to favorites!");
    }
  };

  const filteredHotels = Hotels.filter((hotel) => hotel.category.toLowerCase() === categoryName.toLowerCase());
  const mapCenter = filteredHotels.length > 0 ? [filteredHotels[0].latitude, filteredHotels[0].longitude] : [20.5937, 78.9629];

  return (
    <div className="category-container">
      {!selectedHotel ? (
        <>
          <div className="hotels-grid">
            {filteredHotels.map((hotel) => (
              <div key={hotel.id} className="hotel-card" onClick={() => handleHotelClick(hotel.id)}>
                <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                <div className="hotel-details">
                  <h2 className="hotel-name">{hotel.name}</h2>
                  <p className="hotel-location">{hotel.location}</p>
                  <p className="hotel-amenities">{hotel.amenities.join(", ")}</p>
                  <p className="hotel-price">
                    <span className="discounted-price">₹{hotel.discountedPrice}</span>
                    <span className="original-price">₹{hotel.originalPrice}</span>
                    <span className="discount">({hotel.discountPercentage}% OFF)</span>
                  </p>
                  <p
                    className={`favorite-text ${favorites.includes(hotel.id) ? "favorited" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFavorite(hotel.id);
                    }}
                  >
                    {favorites.includes(hotel.id) ? "Remove from Favorites" : "Add to Favorite"}
                  </p>
                </div>
              </div>
            ))}
            
          </div>

          {!selectedHotel && (
            <MapContainer center={mapCenter} zoom={10} className="hotel-map">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {filteredHotels.map((hotel) => (
                <Marker key={hotel.id} position={[hotel.latitude, hotel.longitude]}>
                  <Popup>{hotel.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </>
      ) : (
        <div className="landscape-layout">
          <div className="hotel-card large">
            <img src={selectedHotel.image} alt={selectedHotel.name} className="hotel-image" />
            <div className="hotel-details">
              <h2 className="hotel-name">{selectedHotel.name}</h2>
              <p className="hotel-location">{selectedHotel.location}</p>
              <p className="hotel-amenities">{selectedHotel.amenities.join(", ")}</p>
              <p className="hotel-price">
                <span className="discounted-price">₹{selectedHotel.discountedPrice}</span>
                <span className="original-price">₹{selectedHotel.originalPrice}</span>
                <span className="discount">({selectedHotel.discountPercentage}% OFF)</span>
              </p>
              <button className="back-button" onClick={handleBackClick}>Back</button>
            </div>
          </div>

          <div className="booking-and-qr-container">
            <div className="booking-container">
              <h2 style={{ textAlign: "center", marginBottom: "15px", color: "#444" }}>Book Your Stay</h2>
              <div className="booking-inputs">
                <div className="booking-field">
                  <label>👥 Number of People</label>
                  <input type="number" name="numPeople" value={bookingDetails.numPeople} onChange={handleBookingChange} placeholder="e.g., 2" />
                </div>
                <div className="booking-field">
                  <label>📅 Number of Days</label>
                  <input type="number" name="numDays" value={bookingDetails.numDays} onChange={handleBookingChange} placeholder="e.g., 3" />
                </div>
                <div className="booking-field">
                  <label>🛏️ Number of Rooms</label>
                  <input type="number" name="numRooms" value={bookingDetails.numRooms} onChange={handleBookingChange} placeholder="e.g., 1" />
                </div>

                <p className="total-cost">💰 Total Cost: <strong>₹{bookingDetails.totalCost}</strong></p>

                <div className="button-group">
                  <button className="reserve-button" onClick={handleReserve}>✅ Reserve</button>
                  <button className="pay-button" onClick={handlePay}>💳 Pay</button>
                </div>
              </div>
            </div>

            {showQRCode && (
              <div className="qr">
                <p><strong>Scan to Pay via UPI:</strong></p>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=gsnithinhari06@okhdfcbank&pn=BoxOfficeX&tn=MovieTicket&am=${bookingDetails.totalCost}&cu=INR&size=200x200`}
                  alt="UPI QR Code"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
