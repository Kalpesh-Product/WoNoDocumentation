import React from "react";
import NomadFlow from "./NomadFlow";
import {
  adminSections,
  dataUploadSections,
  financeSections,
  frontendSections,
  hrSections,
  inactiveWebsitesSections,
  itSections,
  leadsSections,
  masterLoginFlow,
  masterNomadLisitngs,
  masterWebsiteFlow,
  meetingSections,
  performanceSections,
  pocDetailsSections,
  profileSections,
  salesSections,
  servicesSections,
  tasksSections,
  ticketsSections,
  visitorsSections,
} from "../sections/masterFlow";
import SalesModuleFlow from "../components/ModuleFlow";
import AppFlow from "../components/AppFlow";
import { salesSteps, salesInitialEdges, financeSteps, financeInitialEdges, adminSteps, adminInitialEdges, itSteps, itInitialEdges, maintenanceSteps, maintenanceInitialEdges, hrSteps, hrInitialEdges, meetingSteps, meetingInitialEdges, visitorsSteps, visitorsInitialEdges, tasksSteps, tasksInitialEdges, ticketsSteps, ticketsInitialEdges, performanceSteps, performanceInitialEdges, frontendSteps, frontendInitialEdges } from "../sections/appFlow";  
import sections from "../sections";

const ModulesApps = () => {
  const sections = [
    { id: "sales", title: "Sales", data: salesSections, steps : salesSteps, edges : salesInitialEdges },
    { id: "finance", title: "Finance", data: financeSections, steps : financeSteps, edges : financeInitialEdges },
    { id: "admin", title: "Admin", data: adminSections , steps : adminSteps, edges : adminInitialEdges },
    { id: "it", title: "IT", data: itSections, steps : itSteps, edges : itInitialEdges },
    { id: "maintenance", title: "Maintenance", data: itSections, steps : maintenanceSteps, edges : maintenanceInitialEdges },
    { id: "hr", title: "HR", data: hrSections, steps : hrSteps, edges : hrInitialEdges },
    { id: "frontend", title: "Frontend", data: frontendSections, steps : frontendSteps, edges : frontendInitialEdges },
    { id: "meetings", title: "Meetings", data: meetingSections, steps :meetingSteps, edges : meetingInitialEdges },
    { id: "visitors", title: "Visitors", data: visitorsSections, steps : visitorsSteps, edges : visitorsInitialEdges },
    { id: "tasks", title: "Tasks", data: tasksSections, steps : tasksSteps, edges :tasksInitialEdges },
    { id: "tickets", title: "Tickets", data: ticketsSections, steps : ticketsSteps, edges : ticketsInitialEdges },
    { id: "performance", title: "Performance", data: performanceSections, steps : performanceSteps, edges : performanceInitialEdges },
  ];

  return (
    <div className="grid grid-cols-6 relative max-w-7xl mx-auto text-white gap-8 h-screen overflow-auto">
      <div className="col-span-6">
        
      </div>
      {/* Sidebar */}
      <aside className="sticky col-span-1 top-6 h-fit self-start">
        <h2 className="text-xl font-bold mb-4">Index</h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block px-3 py-2 rounded hover:bg-gray-700 transition"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="space-y-12 col-span-5 p-6">
        {/* Title */}
        <h1 className="text-5xl font-bold">Modules & Apps</h1>

        {/* Description Section */}
        <div className="rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-gray-300 leading-relaxed">
            <span className="font-semibold">WoNo</span> provides a suite of{" "}
            <span className="font-semibold">services</span> that are categorized
            into <span className="font-semibold">Modules</span> and{" "}
            <span className="font-semibold">Apps</span>. These services are
            designed to help client companies streamline operations, enhance
            productivity, and ensure smooth management of both departmental and
            organizational activities.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <span className="font-semibold">Modules</span> represent
            department-specific management systems tailored to meet the unique
            needs of each business function. For example, the{" "}
            <span className="font-semibold">Finance Module</span> provides tools
            for income and expense tracking, budgeting, and financial reporting.
            The <span className="font-semibold">Sales Module</span> enables lead
            management, tracking of sources, and conversion analytics. The{" "}
            <span className="font-semibold">HR Module</span> supports payroll
            processing, employee management, and attendance tracking. Each
            module is built to optimize departmental workflows while maintaining
            integration with the larger organizational ecosystem.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <span className="font-semibold">Apps</span> are specialized
            solutions that extend beyond departmental operations and focus on
            core organizational activities. For instance, the{" "}
            <span className="font-semibold">Meeting Management App</span> helps
            companies schedule and manage meetings, allocate meeting rooms, and
            streamline collaboration. The{" "}
            <span className="font-semibold">Ticket Management App</span>{" "}
            provides a complete helpdesk system for handling internal and
            external service requests efficiently. Similarly, the{" "}
            <span className="font-semibold">Visitor Management App</span>{" "}
            ensures secure and seamless entry management for guests and clients.
            Additional apps cover diverse operational areas, giving businesses
            the flexibility to adopt features as per their requirements.
          </p>
          <p className="text-gray-300 leading-relaxed">
            These modules and apps together form a{" "}
            <span className="font-semibold">
              comprehensive service portfolio
            </span>{" "}
            that client companies (hosts) can selectively enable based on their
            business needs. By choosing relevant services, hosts can create a
            customized ecosystem that empowers their teams, improves efficiency,
            and ensures that WoNo’s technology directly supports their
            organizational growth and success.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx} id={section.id} className="scroll-mt-24">
              <h1 className="text-white text-4xl font-bold mb-6">
                {section.title}
              </h1>
              <SalesModuleFlow sectionFlow={section.flow} sectionData={section.data} steps={section.steps} edges={section.edges} />
              <hr className="mt-10 bg-gray-700 border-dashed border-white" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ModulesApps;
