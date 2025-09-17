export const masterLoginFlow = [
  {
    id: 1,
    title: "Login & Companies Overview",
    image: "/assets/master-panel/companies-overview.png",
    points: [
      {
        user: "Logs in to the WoNo Master Panel using employee credentials.",
        system:
          "Authenticates the employee against WoNo’s internal system and validates role-based access before granting access to the Master Panel dashboard.",
      },
      {
        user: "Gets redirected to the dashboard after successful login.",
        system:
          "Loads the Master Panel interface with the sidebar, top navigation, and default sections.",
      },
      {
        user: "By default, sees the 'Companies' menu selected in the sidebar.",
        system:
          "Highlights the Companies tab in the sidebar and fetches the latest list of client companies from the database.",
      },
      {
        user: "Views a table displaying all registered client companies.",
        system:
          "Renders a paginated table with company details such as companyName,status, etc ...",
      },
      {
        user: "Observes each company’s website status marked as 'Active' or 'Inactive'.",
        system:
          "Determines the status dynamically by checking whether the company’s website is currently active (deployed and verified) or inactive (draft or suspended).",
      },
    ],
  },
  {
    id: 2,
    title: "Company Data Page",
    image: "/assets/master-panel/company-data.png",
    points: [
      {
        user: "Clicks on the companyName in the companies table.",
        system:
          "Redirects the user to the selected company’s data page and loads relevant information.",
      },
      {
        user: "Views the company-specific page with available menus.",
        system:
          "Renders a layout similar to the Hosts Panel (Entity 3) and displays three menus: Website Builder, Nomad Listings, and POC Details.",
      },
    ],
  },
];

export const masterWebsiteFlow = [
  {
    id: 1,
    title: "Create Website",
    image: "/assets/hosts-panel/website-1.png",
    points: [
      {
        user: "Clicks on Website Builder card and chooses Create Website (For Selected Client).",
        system:
          "Checks if no website exists for the selected client, then renders Website Creation Form.",
      },
      {
        user: "Fills in company details (name, description, services, etc.) (For Selected Client).",
        system:
          "Validates form inputs and prepares draft site structure for the selected client.",
      },
      {
        user: "Submits the Website Creation Form (For Selected Client).",
        system:
          "Creates website at companyName.wono.co (inactive until verification if created during signup).",
      },
    ],
  },
  {
    id: 2,
    title: "Edit Website",
    image: "/assets/hosts-panel/website-2.png",
    points: [
      {
        user: "Clicks on Website Builder card and chooses Edit Website (For Selected Client).",
        system:
          "Loads form pre-filled with existing website details of the selected client.",
      },
      {
        user: "Updates content (text, images, services, contact info, etc.) (For Selected Client).",
        system:
          "Validates changes in real-time for the selected client’s website data.",
      },
      {
        user: "Submits the updated form (For Selected Client).",
        system:
          "Applies changes and updates website content live at companyName.wono.co.",
      },
    ],
  },
  {
    id: 3,
    title: "Leads",
    image: "/assets/hosts-panel/website-3.png",
    points: [
      {
        user: "Clicks on Website Builder card and chooses Leads (For Selected Client).",
        system:
          "Fetches enquiries captured from the Nomad Website (Entity 1) of the selected client.",
      },
      {
        user: "Views list of all leads in a table (For Selected Client).",
        system:
          "Displays details like name, contact info, enquiry message, and timestamp for the selected client’s enquiries.",
      },
    ],
  },
];

export const masterNomadLisitngs = [
      {
    id: 4,
    title: "Manage Listings",
    image: "/assets/hosts-panel/nomad-1.png",
    points: [
      {
        user: "Clicks on Nomad Listings card.",
        system: "Opens a table of all listings created by the host.",
      },
      {
        user: "Chooses 'Add New Listing'.",
        system:
          "Renders form to capture listing details (title, description, location, pricing, amenities, images).",
      },
      {
        user: "Submits the form.",
        system:
          "Creates new listing entry and makes it visible to nomads on the platform (draft if incomplete).",
      },
    //   {
    //     user: "Clicks on an existing listing.",
    //     system:
    //       "Loads form pre-filled with listing details, allowing editing or updating.",
    //   },
    //   {
    //     user: "Deletes a listing.",
    //     system: "Removes listing from the platform after confirmation.",
    //   },
    ],
  },
]

export const pocDetailsSections = [
  {
    id: 5,
    title: "POC Management",
    image: "/assets/hosts-panel/nomad-2.png",
    points: [
      {
        user: "Clicks on POC Details card.",
        system: "Opens a table of all Point of Contact records created by the host.",
      },
      {
        user: "Chooses 'Add New POC'.",
        system:
          "Renders form with fields: name, designation, email, phone, LinkedIn profile, languages, address, profile image, availability time, active status.",
      },
      {
        user: "Fills in details and submits.",
        system:
          "Validates inputs (unique email, proper formats) and saves new POC in the database.",
      },
      {
        user: "Clicks on an existing POC entry.",
        system: "Loads pre-filled form for editing details.",
      },
    //   {
    //     user: "Updates and submits form.",
    //     system:
    //       "Applies changes and updates the POC details in the database.",
    //   },
    //   {
    //     user: "Deletes a POC entry.",
    //     system: "Removes the record after confirmation.",
    //   },
    ],
  },
];

export const servicesSections = [
  {
    id: 6,
    title: "Service Request",
    image: "/assets/master-panel/master-service-request-1.png",
    points: [
      {
        user: "Selects 'Service Requests' from the Master Panel sidebar.",
        system:
          "Highlights the Service Requests tab and fetches pending service requests from client companies.",
      },
      {
        user: "Sees a table listing companyName values of clients that have requested additional services (apps or modules).",
        system:
          "Renders a paginated table with companyName, request date, requested modules, and request status.",
      },
      {
        user: "Clicks on a companyName from the table.",
        system:
          "Loads the detailed request view for that company, showing the selected services sent by the host from the Hosts Panel (Entity 3).",
      },
      {
        user: "Reviews the list of requested services.",
        system:
          "Displays each requested app/module with details such as description, purpose, and requested date.",
      },
      {
        user: "Approves or rejects the requested services.",
        system:
          "Updates the request status in the database. If approved, the selected modules or apps are enabled for the host in their Host Panel (Entity 3). If rejected, the request is closed with rejection status.",
      },
    ],
  },
];

