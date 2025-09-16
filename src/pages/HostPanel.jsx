import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react";
import dagre from "dagre";
import SideNode from "../components/SideNode.jsx";
import NomadFlow from "./NomadFlow.jsx";
import { nomadListingSections, hostPanelSections, pocDetailsSections, servicesSections } from "../sections/hostFlow.js";

const nodeTypes = { side: SideNode };

// ---- Steps (Host Panel flow only)
const steps = [
  { id: "1", label: "User logs into Host Panel (Entity 3)", type: "entity" },
  { id: "2", label: "Company data displayed", type: "success" },

  // Website builder branch
  { id: "3", label: "User clicks on Website Builder", type: "process" },
  {
    id: "3a",
    label: "Sees 3 cards: Create Website, Edit Website, Leads",
    type: "process",
  },

  // Create Website flow
  {
    id: "3a1",
    label: "If website not created → Show Create Website card",
    type: "decision",
  },
  { id: "3a2", label: "User fills Website Creation Form", type: "process" },
  {
    id: "3a3",
    label: "Submits form → Website created as companyName.wono.co",
    type: "success",
  },

  // Edit Website flow
  { id: "3b", label: "Clicks Edit Website card", type: "process" },
  {
    id: "3b1",
    label: "Form pre-filled with existing website data",
    type: "process",
  },
  { id: "3b2", label: "User edits content and submits", type: "process" },
  { id: "3b3", label: "Changes reflected on website", type: "success" },

  // Leads flow
  { id: "3c", label: "Clicks Leads card", type: "process" },
  {
    id: "3c1",
    label: "Sees table of leads from Nomad Website (Entity 1)",
    type: "success",
  },

  // POC details flow
  { id: "3d", label: "Clicks POC Details card", type: "process" },
  {
    id: "3d1",
    label: "Existing POC details displayed (from signup)",
    type: "process",
  },
  {
    id: "3d2",
    label: "User adds address, number, known languages",
    type: "process",
  },
  { id: "3d3", label: "Submits updated POC details", type: "success" },
  {
    id: "3d4",
    label: "Updated POC details shown on product page (Entity 1)",
    type: "entity",
  },

  // Nomad listing branch
  { id: "4", label: "User clicks Nomad Listing", type: "process" },
  { id: "4a", label: "Table displayed with products", type: "process" },
  {
    id: "4a1",
    label: "If no products → Show 'No data available'",
    type: "decision",
  },
  {
    id: "4a2",
    label: "If products exist → Show table with company data",
    type: "success",
  },

  // Add product flow
  { id: "4b", label: "User clicks Add Product", type: "process" },
  {
    id: "4b1",
    label: "Product form opens (fields from companySchema)",
    type: "process",
  },
  { id: "4b2", label: "User submits product form", type: "process" },
  { id: "4b3", label: "Product added successfully", type: "success" },

  // Listing visibility
  {
    id: "4c",
    label: "Product shown in Nomads Website (Entity 1)",
    type: "entity",
  },
  { id: "4d", label: "Product shown in companyName.wono.co", type: "entity" },

  // Services branch
  { id: "5", label: "User clicks Services (sidebar menu)", type: "process" },
  {
    id: "5a",
    label: "Services page opens → Free services pre-selected",
    type: "process",
  },
  { id: "5b", label: "User selects additional modules/apps", type: "process" },
  { id: "5c", label: "User submits service request", type: "process" },
  {
    id: "5d",
    label: "Request sent to WoNo Master Panel (Entity 2)",
    type: "entity",
  },
];

// ---- Edges
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },

  // Website builder branch
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-3a", source: "3", target: "3a" },

  // Create Website flow
  { id: "e3a-3a1", source: "3a", target: "3a1" },
  { id: "e3a1-3a2", source: "3a1", target: "3a2" },
  { id: "e3a2-3a3", source: "3a2", target: "3a3" },

  // Edit Website flow
  { id: "e3a-3b", source: "3a", target: "3b" },
  { id: "e3b-3b1", source: "3b", target: "3b1" },
  { id: "e3b1-3b2", source: "3b1", target: "3b2" },
  { id: "e3b2-3b3", source: "3b2", target: "3b3" },

  // Leads flow
  { id: "e3a-3c", source: "3a", target: "3c" },
  { id: "e3c-3c1", source: "3c", target: "3c1" },

  // POC details flow
  { id: "e2-3d", source: "2", target: "3d" },
  { id: "e3d-3d1", source: "3d", target: "3d1" },
  { id: "e3d1-3d2", source: "3d1", target: "3d2" },
  { id: "e3d2-3d3", source: "3d2", target: "3d3" },
  { id: "e3d3-3d4", source: "3d3", target: "3d4" },

  // Nomad listing path
  { id: "e2-4", source: "2", target: "4" },
  { id: "e4-4a", source: "4", target: "4a" },
  { id: "e4a-4a1", source: "4a", target: "4a1" },
  { id: "e4a-4a2", source: "4a", target: "4a2" },

  // Add product flow
  { id: "e4a-4b", source: "4a", target: "4b" },
  { id: "e4b-4b1", source: "4b", target: "4b1" },
  { id: "e4b1-4b2", source: "4b1", target: "4b2" },
  { id: "e4b2-4b3", source: "4b2", target: "4b3" },

  // Product visibility
  { id: "e4b3-4c", source: "4b3", target: "4c" },
  { id: "e4b3-4d", source: "4b3", target: "4d" },

  // Services branch
  { id: "e2-5", source: "2", target: "5" },
  { id: "e5-5a", source: "5", target: "5a" },
  { id: "e5a-5b", source: "5a", target: "5b" },
  { id: "e5b-5c", source: "5b", target: "5c" },
  { id: "e5c-5d", source: "5c", target: "5d" },
];

// ---- Dagre layout
function getLayoutedElements(nodes, edges, direction = "TB") {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: direction, ranksep: 100, nodesep: 120 });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: 220, height: 80 });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const pos = dagreGraph.node(node.id);
    return {
      ...node,
      position: { x: pos.x, y: pos.y },
      targetPosition: "top",
      sourcePosition: "bottom",
    };
  });

  return { nodes: layoutedNodes, edges };
}

// ---- Init with dagre
const initialNodes = steps.map((s) => ({
  id: s.id,
  type: "side",
  data: { label: s.label, type: s.type },
  position: { x: 0, y: 0 },
}));

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges,
  "TB"
);

export default function HostPanel() {
  const [nodes, setNodes] = useState(layoutedNodes);
  const [edges, setEdges] = useState(layoutedEdges);
  const sections = [
    { title: "Website Builder", data: hostPanelSections },
    { title: "Nomads Listings", data: nomadListingSections },
    { title: "POC Details", data: pocDetailsSections },
    { title: "Services", data: servicesSections },
  ];

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="space-y-6">
        {sections.map((section, idx) => (
          <div className="space-y-6" key={idx}>
            <h1 className="text-white text-5xl font-bold">{section.title}</h1>
            <NomadFlow sectionData={section.data} />
          </div>
        ))}
      </div>
       <h1 className="text-white text-5xl font-bold">Overall Summary</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* LEFT COLUMN: Description */}
        <div className="space-y-6 overflow-y-auto max-h-[80vh] pr-4 text-white">
          <h2 className="text-2xl font-bold">Host Panel (Entity 3)</h2>

          {/* Company Data */}
          <div>
            <h3 className="font-semibold underline">Company Data</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                On login, the host sees their <strong>company profile</strong>.
              </li>
              <li>
                The profile includes <strong>services selected</strong> during
                registration.
              </li>
            </ul>
          </div>

          {/* Website Builder */}
          <div>
            <h3 className="font-semibold underline">Website Builder</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Host clicks on <strong>Website Builder</strong> and sees 3
                cards: Create Website, Edit Website, and Leads.
              </li>
              <li>
                If <strong>website not created</strong> at signup, the
                <strong> Create Website</strong> card is visible. Host fills in
                the website creation form, submits, and a draft website is
                created at
                <code> companyName.wono.co </code>.
              </li>
              <li>
                If <strong>website was created during signup</strong>, the
                Create Website card is hidden. Host can edit website details
                instead.
              </li>
              <li>
                The <strong>Edit Website</strong> card allows hosts to update
                content. The form is pre-filled, and changes reflect live after
                submission.
              </li>
              <li>
                The <strong>Leads</strong> card displays enquiries captured from
                the Nomad Website (Entity 1).
              </li>
            </ul>
          </div>

          {/* POC Details */}
          <div>
            <h3 className="font-semibold underline">POC Details</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Shows existing <strong>POC details</strong> provided during
                signup.
              </li>
              <li>
                Host can add extra info such as <strong>address</strong>,{" "}
                <strong>phone number</strong>, and{" "}
                <strong>known languages</strong>.
              </li>
              <li>
                On submission, the updated details are reflected on the{" "}
                <strong>product page (Entity 1)</strong>.
              </li>
            </ul>
          </div>

          {/* Nomad Listing */}
          <div>
            <h3 className="font-semibold underline">Nomad Listing</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Host clicks on <strong>Nomad Listing</strong> to manage
                properties.
              </li>
              <li>
                A table displays all existing listings. If no data,{" "}
                <strong>"No data available"</strong> is shown.
              </li>
              <li>
                Host can click <strong>Add Product</strong> to open a form with
                fields from the <code>companySchema</code>.
              </li>
              <li>
                On submission, the property appears both on the{" "}
                <strong>Nomad Website (Entity 1)</strong> and{" "}
                <strong>companyName.wono.co</strong>.
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold underline">Services</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Accessible from the <strong>sidebar menu</strong>.
              </li>
              <li>
                Opens a page where <strong>free services</strong> are
                pre-selected by default.
              </li>
              <li>
                Host can browse and select{" "}
                <strong>additional modules/apps</strong>.
              </li>
              <li>
                Clicking <strong>Submit</strong> sends the service request to
                the <strong>WoNo Master Panel (Entity 2)</strong> for approval
                and processing.
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN: Diagram */}
        <div className="border border-gray-400 rounded-xl flex justify-center items-center">
          <div style={{ width: "100%", height: "80vh" }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              fitView
              fitViewOptions={{ padding: 0.2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
