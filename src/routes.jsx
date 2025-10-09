import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import WorkflowSection from "./pages/NomadFlow.jsx";
import MajorFlow from "./pages/MajorFlow.jsx";
import HostPanel from "./pages/HostPanel.jsx";
import sections from "./sections.js";
import MasterPanel from "./pages/MasterPanel.jsx";
import ModulesApps from "./pages/ModulesApps.jsx";
import ReusableComponents from "./pages/ReusableComponents.jsx";
import ComponentDef from "./pages/ComponentDef.jsx";

const menus = [
  { label: "Nomad (B2C)", path: "/nomad" },
  { label: "Major Flow (B2B)", path: "/major-flow" },
  { label: "Host Panel", path: "/host-panel" },
  { label: "Master Panel", path: "/master-panel" },
  { label: "Modules & Apps", path: "/modules-apps" },
  { label: "Components", path: "/components" },
];

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] space-y-6">
      <h2 className="text-2xl text-white font-bold">
        Welcome to Workflow Docs
      </h2>
      <p className="text-gray-200">Select a flow to view details:</p>

      {menus.map((menu, index) => (
        <a
          key={index}
          href={menu.path}
          className="px-6 py-3 bg-white text-black cursor-pointer rounded hover:bg-gray-400 transition-all"
        >
          {menu.label}
        </a>
      ))}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "nomad", element: <WorkflowSection sectionData={sections} /> },
      { path: "major-flow", element: <MajorFlow /> },
      { path: "host-panel", element: <HostPanel /> },
      { path: "master-panel", element: <MasterPanel /> },
      { path: "modules-apps", element: <ModulesApps /> },
      { path: "components", element: <ReusableComponents /> },
      {
        path: "/components/:name",
        element: <ComponentDef />,
      },
    ],
  },
]);

export default router;
