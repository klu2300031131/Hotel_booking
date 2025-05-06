import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";  // ✅ Import Register component
import CategoryPage from "./Components/CategoryPage";
import Favorites from "./Components/Favorites";
import Layout from "./Components/Layout";
import Location from "./Components/Location";
import Booking from "./Components/Booking"; 
import About from "./Components/About";
import Packages from "./Components/Packages";
import Forgot from "./Components/Forgot";
import Admin from "./Components/Admin";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page */}
        <Route path="/login" element={<Login />} />  {/* Login page */}
        <Route path="/register" element={<Register />} />  {/* ✅ Register page */}
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/layout/:hotelId" element={<Layout />} />
        <Route path="/location" element={<Location />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/Packages" element={<Packages />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/Admin" element={<Admin />} />
             
      </Routes>
    </BrowserRouter>
  );
};

export default App;
