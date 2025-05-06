import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Step 1: Request OTP
  const handleRequestOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("User not found");
      }

      setMessage("OTP sent to your email.");
      setStep(2); // Move to OTP verification step
    } catch (error) {
      console.error("Error:", error);
      setMessage(error.message || "Error sending OTP.");
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      if (!response.ok) {
        throw new Error("Invalid OTP");
      }

      setMessage("OTP verified. Enter your new password.");
      setStep(3); // Move to password reset step
    } catch (error) {
      console.error("Error:", error);
      setMessage(error.message || "Invalid OTP.");
    }
  };

  // Step 3: Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword }),
      });

      if (!response.ok) {
        throw new Error("Failed to reset password.");
      }

      setMessage("Password reset successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error("Error:", error);
      setMessage(error.message || "Error resetting password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="brand">
          <h1 className="brand-name">H<span>Δ</span>VENLY</h1>
        </div>

        <div className="form-wrapper">
          {step === 1 && (
            <>
              <h3>Forgot Password</h3>
              <form onSubmit={handleRequestOtp}>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button className="login-btn" type="submit">
                  Send OTP
                </button>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <h3>Verify OTP</h3>
              <form onSubmit={handleVerifyOtp}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                <button className="login-btn" type="submit">
                  Verify OTP
                </button>
              </form>
            </>
          )}

          {step === 3 && (
            <>
              <h3>Reset Password</h3>
              <form onSubmit={handleResetPassword}>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Enter new password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <button className="login-btn" type="submit">
                  Reset Password
                </button>
              </form>
            </>
          )}

          {message && <p className="message">{message}</p>}

          <p className="toggle-text">
            Remember your password?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
