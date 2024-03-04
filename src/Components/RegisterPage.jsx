import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../Components/RegisterPage.css";
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dates, setDates] = useState("");

  const history = useNavigate();

  const handleRegister = () => {
    localStorage.setItem(name, lastName, email, password, confirmPassword);
    history.push("/SigninPage");
  };
  return (
    <div className="App">
      <h2>Register</h2>
      <div className="registerForm">
        <label>
          {" "}
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        <label>
          Country{" "}
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>

        <label>
          Email:{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        <label>
          Date of Birth
          <input
            type="date"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
          />
        </label>

        <br />
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;
