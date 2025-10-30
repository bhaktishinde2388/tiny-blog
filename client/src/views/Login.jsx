import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link } from "react-router";

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginUser = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/login`,
      user
    )
  };
  return (
      <div className="bg-gradient-to-tr from-gray-600 via-gray-900 to-black flex items-center justify-center min-h-screen ">
      <div className="bg-gradient-to-tr from-white  via-purple-300 to-gray-500 p-8 rounded-2xl shadow-lg  w-full max-w-md  transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
         Login
        </h2>

        <form  className="space-y-6">

    
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
               value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

     
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
               value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

         
          <button
            type="submit"
            className="w-full bg-gray-800 text-gray-100 py-2 rounded-xl hover:opacity-90 transition"
            onClick={loginUser}
          >
           Login
          </button>

             <p className="mt-6 text-gray-700 font-sm text-center">
                Don’t have an account?
            <Link to="/signup" className="text-indigo-500 hover:underline">
              Sign Up
            </Link>
      </p>
        </form>
      </div>
    </div>
  )
}

export default Login