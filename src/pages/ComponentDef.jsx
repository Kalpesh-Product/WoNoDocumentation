import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { componentsData } from "../sections/components/componentDocs/index";

const ComponentDef = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const component = componentsData.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );

  if (!component) {
    return (
      <div className="p-6 text-gray-300">
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:underline mb-4"
        >
          ← Back
        </button>
        <p>Component not found.</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      <button
        onClick={() => navigate(-1)}
        className="text-white cursor-pointer hover:underline mb-4"
      >
        ← Back
      </button>

      <div className="bg-gray-900 text-gray-200 p-6 rounded-lg shadow-lg border border-gray-700 space-y-6">
        <h1 className="text-3xl font-bold text-primary">{component.name}</h1>
        <p className="text-sm text-gray-400 italic">{component.file}</p>

        {/* Overview */}
        <section>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-white">🧩 Overview</h3>
          <p>{component.overview}</p>
        </section>

        {/* Props */}
        <section>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-white">⚙️ Props</h3>
          <table className="w-full text-sm border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800 text-gray-300">
                <th className="border border-gray-700 px-3 py-2">Prop</th>
                <th className="border border-gray-700 px-3 py-2">Type</th>
                <th className="border border-gray-700 px-3 py-2">Default</th>
                <th className="border border-gray-700 px-3 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {component.props.map((prop, i) => (
                <tr key={i}>
                  <td className="border border-gray-700 px-3 py-2">{prop.name}</td>
                  <td className="border border-gray-700 px-3 py-2">{prop.type}</td>
                  <td className="border border-gray-700 px-3 py-2">{prop.default}</td>
                  <td className="border border-gray-700 px-3 py-2">{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Usage */}
        <section>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-white">💡 Example Usage</h3>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
            <code>{component.usage}</code>
          </pre>
        </section>

        {/* Dependencies */}
        <section>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-white">🧩 Dependencies</h3>
          <ul className="list-disc list-inside">
            {component.dependencies.map((dep, i) => (
              <li key={i}>{dep}</li>
            ))}
          </ul>
        </section>

        {/* Notes */}
        <section>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-white">📝 Notes</h3>
          <ul className="list-disc list-inside">
            {component.notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ComponentDef;
