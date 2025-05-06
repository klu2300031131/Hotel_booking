import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await response.json();
      setMessage(data.message || "Login successful");

      if (data.message === "Login successful") {
        
        // ✅ Store user details in localStorage
        localStorage.setItem("user", JSON.stringify({ name: data.name, email }));
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage(error.message || "Server error. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* ✅ Updated Brand Name Instead of Image */}
        <div className="brand">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21W8sE-3Yyohgre_dJ1I7se9JEN_UxcBLOw&s"
            alt="HAVENLY"
          />
        </div>

        <div className="form-wrapper">
          <h3>Sign In</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
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
              Login
            </button>
          </form>
          {message && <p className="message">{message}</p>}

          {/* ✅ Added Forgot Password Link */}
          <p className="toggle-text">
            Forgot Password?{" "}
            <span onClick={() => navigate("/forgot")}>Click Here</span>
          </p>

          <p className="toggle-text">
            Don't have an account?{" "}
            <span onClick={() => navigate("/register")}>Register</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
