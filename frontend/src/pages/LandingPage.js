import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to AI Tax Filing</h1>
      <p className="text-lg text-gray-700 mb-6">Simplify your tax filing with AI-powered automation.</p>
      <div className="space-x-4">
        <Link to="/login" className="px-6 py-3 bg-blue-500 text-white rounded-lg">Login</Link>
        <Link to="/signup" className="px-6 py-3 bg-gray-500 text-white rounded-lg">Sign Up</Link>
      </div>
    </div>
  );
}

export default LandingPage;
