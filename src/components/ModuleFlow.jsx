// src/components/SalesModuleFlow.jsx
import React from "react";

const renderWithFormatting = (text) => {
  return text.split("\n").map((line, i) => {
    // Split line into bold identifiers
    const parts = line.split(/(\*\*.*?\*\*)/g);

    // If line contains bold heading followed by description
    if (parts.length > 1) {
      return (
        <p key={i} className="mb-2">
          {parts.map((part, idx) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={idx} className="text-white font-semibold">
                {part.replace(/\*\*/g, "")}{" "}
                <span className="text-gray-300">–</span>{" "}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    }

    // Normal line (no bold)
    return (
      <p key={i} className="mb-2">
        {line}
      </p>
    );
  });
};

const SalesModuleFlow = ({ sectionData }) => {
  return (
    <div className="space-y-8 border-l-[1px] border-gray-700">
      {sectionData.map((section) => (
        <div key={section.id} className="rounded-lg bg-transparent">
          <ul className="space-y-6">
            {section.content.map((item, idx) => (
              <li key={idx} className="rounded-lg p-4">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                  {item.heading}
                </h3>
                <div className="text-gray-300 leading-relaxed">
                  {renderWithFormatting(item.description)}
                </div>
                <hr className="mt-10 bg-gray-700 border-gray-700" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SalesModuleFlow;
