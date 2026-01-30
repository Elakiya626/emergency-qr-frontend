import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(""); // ✅ for showing errors

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // reset error when typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      setError("Username and password are required");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      // ✅ Redirect to PatientForm with username
      navigate("/patient-form", {
        state: { username: form.username, qrId: res.data.qrId },
      });
    } catch (err) {
      // Show backend error or default
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-200 to-purple-200 p-5">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>

          {/* ✅ Show error message */}
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
