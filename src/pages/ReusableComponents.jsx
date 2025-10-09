import React, { useState } from "react";
import { componentsData } from "../sections/components/componentDocs/index";
import { useNavigate } from "react-router-dom";

const ReusableComponents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredComponents = componentsData.filter((comp) =>
    comp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold text-white">
          Reusable Components
        </h1>

        {/* Search Bar */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
        </div>
      </div>

      {/* Grid of component titles */}
      {filteredComponents.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredComponents.map((comp, index) => (
            <div
              key={index}
              onClick={() => navigate(`/components/${comp.name.toLowerCase()}`)}
              className="cursor-pointer bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-primary hover:shadow-md hover:border-white transition-all"
            >
              <h2 className="text-xl font-semibold text-white">
                {comp.name}
              </h2>
              <p className="text-gray-400 mt-2 text-sm line-clamp-2">
                {comp.overview}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center pt-10">
          No components match your search.
        </p>
      )}
    </div>
  );
};

export default ReusableComponents;
