import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Intro Section */}
      <section className="intro-section">
        <div className="intro-content">
          
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21W8sE-3Yyohgre_dJ1I7se9JEN_UxcBLOw&s"
            alt="HΔVENLY"
            className="about-logo"
          />
        </div>
        <p>
          Welcome to HΔVENLY Stays, where we redefine the travel experience by offering carefully curated hotels, resorts, and unique accommodations 
          in India’s most sought-after destinations. Whether you seek a relaxing retreat, a luxurious stay, or an adventure-filled escape, 
          we ensure a seamless and memorable journey for every traveler.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <img
          src="https://images.unsplash.com/photo-1522156373667-4c7234bbd804"
          alt="Our Mission"
          className="section-image"
        />
        <div className="text-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide world-class stays that blend comfort, elegance, and affordability. At Havenly Stays, we believe in creating 
            unforgettable experiences by offering accommodations that suit all types of travelers, from solo explorers to families and business professionals. 
            Every stay is designed to bring comfort, exceptional service, and a unique ambiance tailored to your preferences.
          </p>
          <p>
            With a commitment to hospitality and quality, we aim to be your trusted companion for all your travel stays, ensuring ease in booking and a hassle-free experience.
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="about-section reverse">
        <div className="text-content">
          <h2>Our Locations</h2>
          <p>
            We take pride in offering accommodations in some of India's most scenic and vibrant locations. Each destination is carefully selected to 
            ensure an enriching and relaxing stay, whether you are looking for a peaceful escape or a bustling city experience.
          </p>
          <ul>
            <li><strong>Kerala</strong> – Immerse yourself in nature, serene backwaters, and cultural richness.</li>
            <li><strong>Goa</strong> – A paradise for beach lovers, offering stunning resorts and exciting nightlife.</li>
            <li><strong>Mumbai</strong> – Experience the city’s energy with luxury stays in the heart of India’s financial capital.</li>
            <li><strong>Chennai</strong> – A blend of tradition and modernity, with coastal beauty and rich heritage.</li>
          </ul>
          <p>
            No matter your destination, Havenly Stays ensures that your accommodation is comfortable, stylish, and tailored to your needs.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
          alt="Our Locations"
          className="section-image"
        />
      </section>
    </div>
  );
};

export default About;
