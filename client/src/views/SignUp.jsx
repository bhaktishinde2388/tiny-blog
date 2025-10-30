import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signupUser = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const response = await axios.post( `${import.meta.env.VITE_API_URL}/signup`, user);
      console.log("Signup success:", response.data);
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-gray-600 via-gray-900 to-black flex items-center justify-center min-h-screen">
      <div className="bg-gradient-to-tr from-white via-purple-300 to-gray-500 p-8 rounded-2xl shadow-lg w-full max-w-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create an Account
        </h2>

        <form onSubmit={signupUser} className="space-y-4">
           <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />

 <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

 <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <button
            type="submit"
            className="w-full bg-gray-800 text-gray-100 py-2 rounded-xl hover:opacity-90 transition"
            onClick={signupUser}
          >
            Sign Up
          </button>

          <p className="mt-6 text-gray-700 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
