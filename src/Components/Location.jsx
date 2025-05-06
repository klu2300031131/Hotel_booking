import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Location.css";

const locations = [
  { name: "Mumbai", category: "mumbai", country: "Maharashtra, India", img: "https://images.pexels.com/photos/13371115/pexels-photo-13371115.jpeg" },
  { name: "Visakhapatnam", category: "visakhapatnam", country: "Andhra Pradesh, India", img: "https://oneday.tours/wp-content/uploads/one-day-visakhapatnam-vizag-local-sightseeing-tour-package-private-cab-header.jpg" },
  { name: "Chennai", category: "chennai", country: "Tamil Nadu, India", img: "https://www.holidify.com/images/bgImages/CHENNAI%20.jpg" },
  { name: "Bangkok", category: "bangkok", country: "Bangkok Province, Thailand", img: "https://media.istockphoto.com/id/483816132/photo/bangkok-cityscape.jpg?s=612x612&w=0&k=20&c=58yp-hppLeL4rmCav2Kvs7IgAfhlqn_JSWh9Jw2QiXs=" },
  { name: "Vijayawada", category: "vijayawada", country: "India", img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/LR-6085.jpg" },
  { name: "Delhi", category: "delhi", country: "India", img: "https://www.dwih-newdelhi.org/files/2019/05/iStock-474239634_1600x907.jpg" }
];

const Location = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleLocationClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="location-container">
      <h2>Explore stays in popular destinations</h2>
      <div className="location-wrapper">
        <div className="location-scroll" ref={scrollRef}>
          {locations.map((place, index) => (
            <div 
              key={index} 
              className="location-card"
              onClick={() => handleLocationClick(place.category)}
            >
              <img src={place.img} alt={place.name} />
              <h3>{place.name}</h3>
              <p>{place.country}</p>
            </div>
          ))}
        </div>
        <button className="scroll-btn next-btn" onClick={handleNext}>Next ➡</button>
      </div>
    </div>
  );
};

export default Location;
