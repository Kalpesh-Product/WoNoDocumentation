import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react";
import dagre from "dagre";
import SideNode from "../components/SideNode.jsx";

const nodeTypes = { side: SideNode };

// ---- Steps
const steps = [
  { id: "1", label: "User goes to wono.co (Entity 1)", type: "start" },
  { id: "2", label: "Clicks on Hosts", type: "process" },
  { id: "3", label: "Registers via Signup", type: "process" },

  // Website builder process + decision
  { id: "3a", label: "Provide Website Builder details", type: "process" },
  { id: "3b", label: "Provide details now?", type: "decision" },
  { id: "3c", label: "Yes → Fill details in signup form", type: "process" },
  {
    id: "3c1",
    label: "Website created (inactive until verification)",
    type: "process",
  },
  {
    id: "3d",
    label: "No → Add details later in Hosts Panel (Entity 3)",
    type: "entity",
  },

  { id: "4", label: "Details received by WoNo Team", type: "entity" },
  { id: "5", label: "Registration takes 48 hrs", type: "process" },
  { id: "6", label: "Legitimacy call made by WoNo team", type: "decision" },
  { id: "7", label: "Not Legit → Rejected", type: "reject" },
  {
    id: "8",
    label: "Legit → Entered in Master Panel (Entity 2)",
    type: "entity",
  },
  { id: "9", label: "Company added with free services", type: "success" },
  { id: "10", label: "Email & Password generated", type: "process" },
  { id: "11", label: "Email & Password is sent as email to the user", type: "process" },
  { id: "12", label: "User logs into Hosts Panel (Entity 3)", type: "entity" },
  {
    id: "13",
    label: "User sees company data with selected services",
    type: "success",
  },
];

// ---- Edges
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },

  // Website builder process + decision
  { id: "e3-3a", source: "3", target: "3a" },
  { id: "e3a-3b", source: "3a", target: "3b" },
  { id: "e3b-3c", source: "3b", target: "3c" }, // Yes path
  { id: "e3b-3d", source: "3b", target: "3d" }, // No path

  // Yes path: Website inactive until verification
  { id: "e3c-3c1", source: "3c", target: "3c1" },
  { id: "e3c1-4", source: "3c1", target: "4" },

  // No path goes directly to WoNo team
  { id: "e3d-4", source: "3d", target: "4" },

  { id: "e4-5", source: "4", target: "5" },
  { id: "e5-6", source: "5", target: "6" },

  // Decision branch
  { id: "e6-7", source: "6", target: "7" },
  { id: "e6-8", source: "6", target: "8" },

  // Legit path
  { id: "e8-9", source: "8", target: "9" },
  { id: "e9-10", source: "9", target: "10" },
  { id: "e10-11", source: "10", target: "11" },
  { id: "e11-12", source: "11", target: "12" },
  { id: "e12-13", source: "12", target: "13" },
];

// ---- Dagre layout
function getLayoutedElements(nodes, edges, direction = "LR") {
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
      targetPosition: "left",
      sourcePosition: "right",
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
const firstNode = layoutedNodes.find((n) => n.id === "1");

export default function MajorFlow() {
  const [nodes, setNodes] = useState(layoutedNodes);
  const [edges, setEdges] = useState(layoutedEdges);

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto">
      {/* LEFT COLUMN: Brief points */}
      <div className="space-y-6 overflow-y-auto max-h-[80vh] pr-4 border-dashed border-[0.5px] border-gray-700 border-y-0 px-2">
        <h2 className="text-2xl font-bold text-white">
          Host Registration Flow
        </h2>

        <div>
          <h3 className="font-semibold text-white underline">Step 1: Entry</h3>
          <ul className="list-disc pl-6 text-white space-y-1">
            <li>
              User opens <strong>wono.co</strong>, the main WoNo platform.
            </li>
            <li>
              Chooses the <strong>“Hosts”</strong> option from the homepage.
            </li>
            <li>
              Proceeds to the registration page and signs up with basic details.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white underline">Step 2: Website Builder Option</h3>
          <ul className="list-disc pl-6 text-white space-y-1">
            <li>
              During signup, the host is asked if they want to{" "}
              <strong>provide Website Builder details</strong> right away.
            </li>
            <li>
              If <strong>Yes</strong>, they enter website information directly
              in the signup form.
            </li>
            <li>
              A draft <strong>website is created</strong> automatically but
              remains <strong>inactive</strong> until verification is complete.
            </li>
            <li>
              If <strong>No</strong>, they can later add these details manually
              in the <strong>Hosts Panel</strong> after login.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white underline">Step 3: Verification</h3>
          <ul className="list-disc pl-6 text-white space-y-1">
            <li>
              The registration details are received by the{" "}
              <strong>WoNo Team</strong>.
            </li>
            <li>
              The onboarding process requires <strong>48 hours</strong> for
              review.
            </li>
            <li>
              During this period, a{" "}
              <strong>legitimacy verification call</strong> is made to the
              applicant.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white underline">Step 4: Decision</h3>
          <ul className="list-disc pl-6 text-white space-y-1">
            <li>
              If the applicant is <strong>not legitimate</strong>, the
              registration request is immediately <strong>rejected</strong>.
            </li>
            <li>
              If the applicant is <strong>legitimate</strong>, their details are
              entered into the <strong>WoNo Master Panel</strong> for further
              processing.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white underline">Step 5: Activation</h3>
          <ul className="list-disc pl-6 text-white space-y-1">
            <li>
              The company is <strong>successfully added</strong> to the system
              and gets access to <strong>free services</strong> such as Website
              Builder, Lead Generation, and Automated Google Sheets.
            </li>
            <li>
              A secure <strong>Email & Password</strong> is generated for the
              host to log in and sent to the user via email.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white underline">Step 6: Host Access</h3>
          <ul className="list-disc pl-6 text-white space-y-1">
            <li>
              The registered host <strong>logs into the Hosts Panel</strong>{" "}
              using the provided credentials.
            </li>
            <li>
              Inside the panel, they can view and manage their{" "}
              <strong>company data</strong> and the <strong>services</strong>{" "}
              they have been onboarded with.
            </li>
            <li>
              If website details were provided during signup, the{" "}
              <strong>website becomes active</strong> once verification is
              complete.
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
            defaultViewport={{
              x: -(firstNode?.position?.x || 0) + 100, // offset so node is in frame
              y: -(firstNode?.position?.y || 0) + 100,
              zoom: 1.2,
            }}
          />
        </div>
      </div>
    </div>
  );
}
