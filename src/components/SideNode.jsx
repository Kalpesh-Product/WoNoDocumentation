import React from "react";
import { Handle, Position } from "@xyflow/react";

export default function SideNode({ data }) {
  const { label, type = "process" } = data; // default to process

  // 🎨 Standardized color scheme
  const typeStyles = {
    start: "bg-green-600 text-white rounded-full", // Start / Entry point
    process: "bg-blue-500 text-white rounded-md", // Normal process step
    decision:
      "bg-yellow-400 text-black rounded-md border-2 border-yellow-600", // Decision point
    reject: "bg-red-500 text-white rounded-md", // Failure / Rejection
    success: "bg-emerald-500 text-white rounded-md", // Success / Completed
    entity: "bg-purple-500 text-white rounded-md", // External entity (system/panel)
    pending: "bg-orange-400 text-black rounded-md", // Pending/In-progress (like inactive website)
  };

  return (
    <div
      className={`px-4 py-2 shadow-md border border-gray-300 min-w-[200px] max-w-[300px] text-center break-words ${
        typeStyles[type] || typeStyles.process
      }`}
    >
      {/* Top connector (incoming) */}
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-gray-700 w-2 h-2"
      />

      {/* Label */}
      <div className="whitespace-normal break-words">{label}</div>

      {/* Bottom connector (outgoing) */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-gray-700 w-2 h-2"
      />
    </div>
  );
}
