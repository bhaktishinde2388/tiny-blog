import React from 'react'
import { Link } from "react-router";

function Login() {
  return (
      <div className="bg-gradient-to-tr from-gray-600 via-gray-900 to-black flex items-center justify-center min-h-screen ">
      <div className="bg-gradient-to-tr from-white  via-purple-300 to-gray-500 p-8 rounded-2xl shadow-lg  w-full max-w-md  transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create an Account
        </h2>

        <form  className="space-y-6">

    
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            />
          </div>

         
          <button
            type="submit"
            className="w-full bg-gray-800 text-gray-100 py-2 rounded-xl hover:opacity-90 transition"
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