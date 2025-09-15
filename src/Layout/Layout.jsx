import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-800">

      {/* Header */}
      <header className="m-4 rounded-2xl bg-black/60 backdrop-blur-lg shadow-lg border  flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-extrabold text-white drop-shadow-sm">
          Workflow Documentation
        </h1>
        <nav className="space-x-6">
          <Link
            to="/"
            className="px-3 py-1.5 rounded-xl  backdrop-blur-md shadow hover:shadow-md text-white font-medium border border-white/20 transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/nomad"
            className="px-3 py-1.5 rounded-xl  backdrop-blur-md shadow hover:shadow-md text-white font-medium border border-white/20 transition-all duration-200"
          >
            Nomad Website (B2C)
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 rounded-2xl  overflow-y-auto">
        <Outlet /> {/* This is where child routes render */}
      </main>
    </div>
  );
};

export default Layout;
