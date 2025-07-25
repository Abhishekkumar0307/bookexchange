/*import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      console.log("⏳ Sending login request...");
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("❌ Server did not return JSON:", text);
        throw new Error("Server returned non-JSON response");
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      alert("✅ Login successful!");

      // ✅ Store login data
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("userId", data.userId); // ✅ Save userId
      sessionStorage.setItem("email", email);

      navigate("/");
    } catch (error) {
      console.error("❌ Login fetch failed:", error);
      alert("Login error: " + error.message);
    }
  };

  return (
    <div className="bp-login-page">
      <div className="bp-login-left"></div>
      <div className="bp-login-right">
        <div className="bp-login-form-container">
          <h2>Welcome to BookLoop!</h2>
          <p className="bp-login-subtext">Join our community of readers!</p>

          <div className="bp-login-switch-buttons">
            <Link to="/login" className="bp-login-switch-btn active">
              Sign In
            </Link>
            <Link to="/signup" className="bp-login-switch-btn">
              Sign Up
            </Link>
          </div>

          <form onSubmit={handleLogin}>
            <input type="email" placeholder="email@example.com" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign in</button>
          </form>

          <div className="bp-login-skip-btn">
            <button
              type="button"
              className="bp-skip-btn"
              onClick={() => {
                sessionStorage.setItem("isLoggedIn", "true");
                sessionStorage.setItem("userRole", "guest");
                navigate("/");
              }}
            >
              Skip for now
            </button>
          </div>

          <div className="bp-login-toggle">
            <Link to="/forgot">Forgot password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
*/
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      console.log("⏳ Sending login request...");
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("❌ Server did not return JSON:", text);
        throw new Error("Server returned non-JSON response");
      }

      const data = await response.json();
      console.log("✅ Received login response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Validate and store login data
      const userId = data.userId || (data.user && data.user._id);
      if (!userId) {
        throw new Error("Login failed: Missing userId in response");
      }

      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("userId", userId);
      sessionStorage.setItem("email", email);

      alert("✅ Login successful!");
      navigate("/");
    } catch (error) {
      console.error("❌ Login fetch failed:", error);
      alert("Login error: " + error.message);
    }
  };

  return (
    <div className="bp-login-page">
      <div className="bp-login-left"></div>
      <div className="bp-login-right">
        <div className="bp-login-form-container">
          <h2>Welcome to BookLoop!</h2>
          <p className="bp-login-subtext">Join our community of readers!</p>

          <div className="bp-login-switch-buttons">
            <Link to="/login" className="bp-login-switch-btn active">
              Sign In
            </Link>
            <Link to="/signup" className="bp-login-switch-btn">
              Sign Up
            </Link>
          </div>

          <form onSubmit={handleLogin}>
            <input type="email" placeholder="email@example.com" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign in</button>
          </form>

          <div className="bp-login-skip-btn">
            <button
              type="button"
              className="bp-skip-btn"
              onClick={() => {
                sessionStorage.setItem("isLoggedIn", "true");
                sessionStorage.setItem("userRole", "guest");
                navigate("/");
              }}
            >
              Skip for now
            </button>
          </div>

          <div className="bp-login-toggle">
            <Link to="/forgot">Forgot password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
