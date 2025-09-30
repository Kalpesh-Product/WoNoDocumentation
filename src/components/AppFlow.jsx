import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react";
import dagre from "dagre";
import SideNode from "./SideNode.jsx";

const nodeTypes = { side: SideNode };

// ---- Dagre layout
function getLayoutedElements(nodes, edges, direction = "TB") {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: direction, ranksep: 80, nodesep: 100 });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: 220, height: 60 });
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

export default function AppFlow({ steps, initialEdges }) {
  // ---- Init
  const initialNodes = steps.map((s) => ({
    id: s.id,
    type: "side",
    data: { label: s.label, type: s.type },
    position: { x: 0, y: 0 },
  }));
  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    initialNodes,
    initialEdges
  );

  const [nodes, setNodes] = useState(layoutedNodes);
  const [edges, setEdges] = useState(layoutedEdges);
  const [isOpen, setIsOpen] = useState(false);

  const firstNode = layoutedNodes.find((n) => n.id === "1");

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
    <div>
      {/* Compact view */}
      <div className="border border-gray-400 rounded-xl flex justify-center items-center">
        <div style={{ width: "100%", height: "50vh" }} className="overflow-hidden">
          <div className="p-2 text-right">
            <button
              onClick={() => setIsOpen(true)}
              className="text-sm text-blue-400 hover:underline"
            >
              Expand
            </button>
          </div>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            defaultViewport={{
              x: -(firstNode?.position?.x || 0) + 100,
              y: -(firstNode?.position?.y || 0) + 100,
              zoom: 1.1,
            }}
          />
        </div>
      </div>

      {/* Modal with full flow */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-900 rounded-lg shadow-lg w-11/12 h-[90vh] relative overflow-hidden">
            <div className="p-4 flex justify-between items-center border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">Full Flow</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-red-400 hover:text-red-500"
              >
                ✕
              </button>
            </div>
            <div className="w-full h-full">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                defaultViewport={{
                  x: -(firstNode?.position?.x || 0) + 200,
                  y: -(firstNode?.position?.y || 0) + 200,
                  zoom: 1,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
