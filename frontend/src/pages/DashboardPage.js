import React from "react";
import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg text-gray-600">Welcome to your dashboard. You can upload and manage your tax documents here.</p>
      <Link to="/upload" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Go to Upload Page</Link>
    </div>
  );
}

export default DashboardPage;
