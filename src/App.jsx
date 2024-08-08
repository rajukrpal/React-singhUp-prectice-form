import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    conformPassword: "",
    isJoin: false,
  });

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.password === formData.conformPassword) {
      console.log("Successfully signed up");
    } else {
      return console.log("Passwords do not match");
    }

    if (formData.isJoin) {
      console.log("Thanks for signing up for our newsletter!");
    }
  }

  const handleData = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((pre) => ({
      ...pre,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          value={formData.email}
          onChange={handleData}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          value={formData.password}
          onChange={handleData}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="conformPassword"
          value={formData.conformPassword}
          onChange={handleData}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="isJoin"
            checked={formData.isJoin}
            onChange={handleData}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button type="submit" className="form--submit">
          Sign up
        </button>
      </form>
    </div>
  );
}
