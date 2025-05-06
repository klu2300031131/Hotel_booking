import React from "react";
import "./Packages.css";

const packages = [
  {
    id: 1,
    title: "Romantic Getaway",
    image: "https://www.getzype.com/wp-content/uploads/2023/12/Planning-Your-Perfect-Honeymoon-Destination_-Top-Romantic-Getaways-in-India.webp",
    description:
      "Enjoy a luxurious stay with candlelight dinner, spa treatment, and private sightseeing for a perfect romantic escape.",
    price: "₹12,999",
  },
  {
    id: 2,
    title: "Adventure Explorer",
    image: "https://adventureexplorer.in/wp-content/uploads/2022/11/himalayan-motor-bike-tour-by-adventure-explorer.webp",
    description:
      "Thrilling trekking, rafting, and camping experiences in scenic locations. Includes guided adventure tours and bonfire nights.",
    price: "₹9,499",
  },
  {
    id: 3,
    title: "Family Fun",
    image: "https://www.nationaldaycalendar.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:eco%2Cw_768/MjA2NTkxNzUwMjYzODA5NDcw/website-feature---national-family-fun-day--sunday-before-memorial-day.png",
    description:
      "Perfect for families with kids. Includes theme park tickets, kids' play areas, and complimentary meals.",
    price: "₹15,999",
  },
  {
    id: 4,
    title: "Wellness & Spa Retreat",
    image: "https://www.taj51buckinghamgate.co.uk/files-sbbasic/ba_taj51buckinghamgate_gb/taj-51-wellness-02.jpg",
    description:
      "Rejuvenate with yoga sessions, full-body massage, organic meals, and nature walks in a peaceful retreat.",
    price: "₹10,999",
  },
  {
    id: 5,
    title: "Cultural & Heritage Tour",
    image: "https://images.jdmagicbox.com/quickquotes/listicle/listicle_1686140315148_74ycs_1040x500.jpg",
    description:
      "Stay in a heritage hotel, experience traditional performances, and explore historic sites with expert guides.",
    price: "₹8,999",
  },
  {
    id: 6,
    title: "Budget Backpacker",
    image: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8fDB8fHww",
    description:
      "Affordable hostel stays, local food vouchers, and city tours for solo travelers and students on a budget.",
    price: "₹5,499",
  },
];

const Packages = () => {
  return (
    <div className="packages-container">
      
     

      <h2 className="packages-title">Special Travel Packages</h2>
      <p className="packages-subtitle">
        Exclusive offers for a unique and unforgettable experience.
      </p>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.image} alt={pkg.title} className="package-image" />
            <div className="package-details">
              <h3 className="package-title">{pkg.title}</h3>
              <p className="package-description">{pkg.description}</p>
              <div className="package-footer">
                <span className="package-price">{pkg.price}</span>
                <span className="contact-info">📞 Contact: +91 98765 43210</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
