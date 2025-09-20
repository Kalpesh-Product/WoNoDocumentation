import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import WorkflowSection from "./pages/NomadFlow.jsx";
import MajorFlow from "./pages/MajorFlow.jsx";
import HostPanel from "./pages/HostPanel.jsx";
import sections from "./sections.js";
import MasterPanel from "./pages/MasterPanel.jsx";
import ModulesApps from "./pages/ModulesApps.jsx";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] space-y-6">
      <h2 className="text-2xl text-white font-bold">Welcome to Workflow Docs</h2>
      <p className="text-gray-200">Select a flow to view details:</p>
      <a
        href="/nomad"
        className="px-6 py-3 bg-white  text-black cursor-pointer rounded hover:bg-gray-400 transition-all"
      >
        Nomad (B2C)
      </a>
      <a
        href="/major-flow"
        className="px-6 py-3 bg-white  text-black cursor-pointer rounded hover:bg-gray-400 transition-all"
      >
        Major Flow (B2B)
      </a>
      <a
        href="/host-panel"
        className="px-6 py-3 bg-white  text-black cursor-pointer rounded hover:bg-gray-400 transition-all"
      >
        Host Panel
      </a>
      <a
        href="/master-panel"
        className="px-6 py-3 bg-white  text-black cursor-pointer rounded hover:bg-gray-400 transition-all"
      >
        Master Panel
      </a>
      <a
        href="/modules-apps"
        className="px-6 py-3 bg-white  text-black cursor-pointer rounded hover:bg-gray-400 transition-all"
      >
        Modules & Apps
      </a>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ✅ Wrap everything with Layout
    children: [
      { index: true, element: <Home /> }, // default "/" route
      { path: "nomad", element: <WorkflowSection sectionData={sections}/> },
      { path: "major-flow", element: <MajorFlow /> },
      { path: "host-panel", element: <HostPanel /> },
      { path: "master-panel", element: <MasterPanel /> },
      { path: "modules-apps", element: <ModulesApps /> },
    ],
  },
]);

export default router;
