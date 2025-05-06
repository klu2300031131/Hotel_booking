import React, { useState, useEffect } from "react";
import Hotels from "./Hotel";
import "./Favorites.css";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")); // Check if user is logged in
    if (storedUser) {
      setUser(storedUser);
      const storedFavorites = JSON.parse(localStorage.getItem(`favorites_${storedUser.email}`)) || [];
      setFavorites(storedFavorites);
    }
  }, []);

  const handleRemoveFavorite = (hotelId) => {
    if (!user) return;

    const updatedFavorites = favorites.filter((id) => id !== hotelId);
    setFavorites(updatedFavorites);
    localStorage.setItem(`favorites_${user.email}`, JSON.stringify(updatedFavorites));
    alert("Removed from favorites");
  };

  return (
    <div className="favorites-container">
      {/* Branding Section */}
      <div className="brand">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21W8sE-3Yyohgre_dJ1I7se9JEN_UxcBLOw&s"
          alt="HAVENLY"
          className="brand-logo"
        />
      </div>

      {/* If not logged in, show login message */}
      {!user ? (
        <h2 className="login-message">Please log in to HΔVENLY first to see your favorite hotels.</h2>
      ) : (
        <>
          <h2>Your Favorite Hotels</h2>
          {favorites.length === 0 ? (
            <p className="no-favorites">No favorite hotels yet.</p>
          ) : (
            <div className="favorites-grid">
              {favorites.map((hotelId) => {
                const hotel = Hotels.find((h) => h.id === hotelId);
                if (!hotel) return null;

                return (
                  <div key={hotel.id} className="favorite-card">
                    <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                    <div className="hotel-details">
                      <h3 className="hotel-name">{hotel.name}</h3>
                      <p className="hotel-location">{hotel.location}</p>

                      {/* Amenities Section */}
                      <div className="hotel-amenities">
                        <strong>Amenities:</strong>
                        <ul>
                          {hotel.amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                          ))}
                        </ul>
                      </div>

                      <button className="remove-button" onClick={() => handleRemoveFavorite(hotel.id)}>
                        Remove from Favorites
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Favorite;
