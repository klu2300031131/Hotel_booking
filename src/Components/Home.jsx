import React from "react";
import Navbar from "./Navbar"; // Assuming you have a Navbar component
import Search from "./Search"; // Assuming you have a Search component
import Stays from "./Stays"; // Assuming you have a Stays component
import Ad from "./Ad";
import Location from "./Location"; // Assuming you have an Ad component

const Home = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Ad />
      <Stays />
     <Location />
    </div>
  );
};

export default Home;