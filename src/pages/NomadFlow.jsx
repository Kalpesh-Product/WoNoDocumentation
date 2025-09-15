import React, { useState } from "react";
import sections from "../sections.js";

const NomadFlow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("user"); // "user" | "system"

  const handleScroll = (e) => {
    const container = e.target;
    const sectionHeight = container.clientHeight;
    const newIndex = Math.round(container.scrollTop / sectionHeight);
    setActiveIndex(newIndex);
  };

  return (
    <div className="p-6 bg-transparent text-white mx-auto border-[1px] border-dashed border-gray-700 border-t-0 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left column → scrollable text with snap */}
      <div
        className="h-screen overflow-y-scroll snap-y snap-mandatory pr-4"
        onScroll={handleScroll}
      >
        {sections.map((section) => (
          <div
            key={section.id}
            className="h-screen snap-start flex flex-col justify-center space-y-6"
          >
            <h2 className="text-2xl font-bold">{section.title}</h2>

            {/* Tabs */}
            <div className="flex space-x-4 border-b border-gray-300">
              <button
                onClick={() => setActiveTab("user")}
                className={`pb-2 ${
                  activeTab === "user"
                    ? "border-b-2 border-blue-600 font-semibold text-gray-100"
                    : "text-gray-300"
                }`}
              >
                User View
              </button>
              <button
                onClick={() => setActiveTab("system")}
                className={`pb-2 ${
                  activeTab === "system"
                    ? "border-b-2 border-blue-600 font-semibold text-gray-100"
                    : "text-gray-600"
                }`}
              >
                System View
              </button>
            </div>

            {/* Tab Content */}
            <ul className="list-disc pl-6 space-y-4">
              {section.points.map((p, i) => (
                <li key={i}>
                  {activeTab === "user" ? p.user : p.system}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Right column → sticky image that changes */}
      <div className="hidden md:flex justify-center items-center">
        <div className="sticky top-20">
          <img
            src={sections[activeIndex]?.image}
            alt={sections[activeIndex]?.title}
            className="border rounded shadow-md max-w-full max-h-[80vh] transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default NomadFlow;
