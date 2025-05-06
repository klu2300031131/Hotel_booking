import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import "./Login.css";  

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/register", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {  
        throw new Error("Registration failed. Please try again.");
      }

      const data = await response.json();
      
      if (data.message === "Registration successful") {
        setMessage("✅ Successfully Registered! Redirecting to login...");
        
        // ✅ Store user details in localStorage
       // Save current user
localStorage.setItem("user", JSON.stringify({ name, email }));

// Save to allUsers list
const existingUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
existingUsers.push({ name, email, password });
localStorage.setItem("allUsers", JSON.stringify(existingUsers));


        setTimeout(() => navigate("/login"), 2000); 
      } else {
        setMessage(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage(error.message || "Server error");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="brand">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21W8sE-3Yyohgre_dJ1I7se9JEN_UxcBLOw&s"
            alt="HAVENLY"
          />
        </div>

        <div className="form-wrapper">
          <h3>Register</h3>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="login-btn" type="submit">
              Register
            </button>
          </form>
          {message && <p className="message">{message}</p>}
          <p className="toggle-text">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
