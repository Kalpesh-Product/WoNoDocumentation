import React from "react";
import NomadFlow from "./NomadFlow";
import {
  dataUploadSections,
  inactiveWebsitesSections,
  leadsSections,
  masterLoginFlow,
  masterNomadLisitngs,
  masterWebsiteFlow,
  pocDetailsSections,
  profileSections,
  servicesSections,
} from "../sections/masterFlow";

const MasterPanel = () => {
  const sections = [
    { id: "login", title: "Login", data: masterLoginFlow },
    { id: "website", title: "Website Builder", data: masterWebsiteFlow },
    { id: "nomads", title: "Nomads Listings", data: masterNomadLisitngs },
    { id: "poc", title: "POC Details", data: pocDetailsSections },
    { id: "services", title: "Service Requests", data: servicesSections },
    { id: "leads", title: "All Leads", data: leadsSections },
    { id: "inactiveWebsites", title: "Inactive Websites", data: inactiveWebsitesSections },
    { id: "dataUpload", title: "Data Upload", data: dataUploadSections },
    { id: "profile", title: "Profile", data: profileSections },
  ];

  return (
    <div className="grid grid-cols-6 relative max-w-7xl mx-auto text-white gap-8 h-screen overflow-auto">
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
        <h1 className="text-5xl font-bold">WoNo Master Panel (Entity 2)</h1>

        {/* Description Section */}
        <div className="rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-gray-300 leading-relaxed">
            The <span className="font-semibold">WoNo Master Panel</span> is an
            exclusive platform available only to WoNo employees. Its core
            purpose is to give employees complete control and visibility over
            client companies, enabling them to manage operational data, perform
            administrative actions, and ensure smooth collaboration between WoNo
            and its clients. This panel is designed as the central hub where all
            employee-facing activities converge.
          </p>
          <p className="text-gray-300 leading-relaxed">
            One of the primary responsibilities within this panel is to handle{" "}
            <span className="font-semibold">
              client company data management
            </span>
            . Employees can securely view, edit, and authorize changes to
            company information, including leads, points of contact (POCs), and
            other critical business records. Access to these operations is
            strictly governed by authorization rules to ensure data integrity
            and compliance with company policies.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The panel also provides employees with tools to manage{" "}
            <span className="font-semibold">actions</span> such as creating and
            editing websites for client companies. These actions help set up and
            maintain the digital presence of clients, ensuring their websites
            are always up-to-date and aligned with business goals. Alongside
            website operations, the panel extends to broader{" "}
            <span className="font-semibold">data actions</span>, where employees
            can intervene in business workflows, update records, and resolve
            data discrepancies on behalf of clients.
          </p>
          <p className="text-gray-300 leading-relaxed">
            In addition to company and data management, the panel functions as a{" "}
            <span className="font-semibold">customer support interface</span>.
            Employees can directly communicate with client representatives to
            resolve any technical difficulties, panel-related issues, or general
            queries raised by users. This ensures that WoNo’s support system is
            proactive, personalized, and always accessible for client needs.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Another critical aspect of the Master Panel is handling{" "}
            <span className="font-semibold">service requests</span> submitted by
            clients. These requests may range from technical changes to new
            feature requirements. Employees can review each request, verify its
            authenticity, and either approve or reject it based on company
            policies and client agreements. This structured approval process
            ensures that all service activities remain transparent, traceable,
            and aligned with organizational standards.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Overall, the WoNo Master Panel serves as the backbone of internal
            operations, giving employees a unified platform to manage client
            data, execute actions, provide support, and oversee service
            workflows. It empowers the WoNo team to maintain strong client
            relationships while ensuring operational efficiency and reliability.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx} id={section.id} className="scroll-mt-24">
              <h1 className="text-white text-4xl font-bold mb-6">
                {section.title}
              </h1>
              <NomadFlow sectionData={section.data} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MasterPanel;
