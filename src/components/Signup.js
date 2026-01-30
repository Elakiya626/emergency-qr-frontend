import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      alert("Signup successful!");
      navigate("/patient-form", {
        state: { username: form.username },
      });
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-indigo-200 p-5">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">
          Signup
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            className="mt-4 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            Signup
          </button>

          {error && (
            <p className="text-red-500 text-center mt-2">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
