

import React, { useState } from "react";
import api from "./api"; // Your API functions

const LoginShop = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.login(email, password); // Call your login API function
      setUser(response.data.user); // Update user state
      localStorage.setItem("token", response.data.token); // Store token in localStorage
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error (show error message, etc.)
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginShop;