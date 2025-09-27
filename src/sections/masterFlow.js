export const masterLoginFlow = [
  {
    id: 1,
    title: "Login & Companies Overview",
    image: "/assets/master-panel/master-login.png",
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
    image: "/assets/master-panel/master-panel-companies.png",
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
];

export const pocDetailsSections = [
  {
    id: 5,
    title: "POC Management",
    image: "/assets/hosts-panel/nomad-2.png",
    points: [
      {
        user: "Clicks on POC Details card.",
        system:
          "Opens a table of all Point of Contact records created by the host.",
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

export const leadsSections = [
  {
    id: 7,
    title: "All Leads",
    image: "/assets/master-panel/master-all-leads.png",
    points: [
      {
        user: "Selects 'All Leads' from the Master Panel sidebar.",
        system:
          "Highlights the All Leads tab and loads the leads management interface.",
      },
      {
        user: "Views five tabs: All Enquiry, All POC Contact, Connect With Us and Job Applications.",
        system:
          "Renders a tabbed interface where each tab corresponds to a form available on the Nomad Website (Entity 1).",
      },
      {
        user: "Opens any of the tabs to see submitted form entries.",
        system:
          "Displays a table of records with details such as name, email, phone, submission date, and other form-specific fields.",
      },
      {
        user: "Reviews the submitted data for each lead.",
        system:
          "Ensures that every submission from Entity 1 (Nomad Website) is captured, stored, and displayed in the relevant tab.",
      },
      {
        user: "Navigates between different tabs (e.g., Job Applications, Sign Up) to manage lead-specific data.",
        system:
          "Fetches and renders the respective dataset dynamically when a tab is selected.",
      },
    ],
  },
  {
    id: 8,
    title: "All Enquiry",
    image: "/assets/master-panel/master-all-enquiry.png",
    points: [
      {
        user: "Clicks on the 'All Enquiry' tab inside the All Leads menu.",
        system:
          "Highlights the All Enquiry tab and fetches all enquiry records submitted across client companies.",
      },
      {
        user: "Sees a table listing all leads that were submitted to client companies via Nomad Websites.",
        system:
          "Renders a paginated table with fields such as companyName, lead name, email, phone, enquiry details, and submission date.",
      },
      {
        user: "Observes that the leads shown are shared with WoNo as per agreements with client companies.",
        system:
          "Ensures that every enquiry submitted through a client’s product page is also duplicated and stored in WoNo’s database.",
      },
      {
        user: "Reviews enquiry data for record-keeping.",
        system:
          "Displays the enquiry information in read-only format. WoNo employees cannot edit or manipulate the data.",
      },
      {
        user: "Uses the table to track historical enquiries across all companies.",
        system:
          "Maintains the enquiries strictly for data records and transparency purposes, without allowing modifications.",
      },
    ],
  },
  {
    id: 9,
    title: "All POC Contact",
    image: "/assets/master-panel/master-poc-contact.png",
    points: [
      {
        user: "Clicks on the 'All POC Contact' tab inside the All Leads menu.",
        system:
          "Highlights the All POC Contact tab and fetches all Point of Contact (POC) records.",
      },
      {
        user: "Views a table listing all POC details added from the Hosts Panel (Entity 3) or from the Master Panel (Entity 2) as per host request.",
        system:
          "Renders a paginated table with POC information such as name, designation, email, phone, LinkedIn profile, languages, address, and availability.",
      },
      {
        user: "Reviews the listed POC details.",
        system:
          "Displays POC records in read-only format by default to ensure data consistency and prevent unauthorized changes.",
      },
      {
        user: "Requests an update to specific POC information.",
        system:
          "Allows editing of the requested POC details only if the change request is validated and approved.",
      },
      {
        user: "Confirms updated POC details if changes are applied.",
        system:
          "Applies the modifications in the database and updates the POC record across both Master Panel (Entity 2) and Host Panel (Entity 3).",
      },
    ],
  },
  {
    id: 10,
    title: "Connect With Us",
    image: "/assets/master-panel/master-connect-with-us.png",
    points: [
      {
        user: "Clicks on the 'Connect With Us' tab inside the All Leads menu.",
        system:
          "Highlights the Connect With Us tab and fetches all submissions made through the Connect With Us form on the Nomad Website (Entity 1).",
      },
      {
        user: "Views a table displaying entries from individuals who want to connect with WoNo without signing up.",
        system:
          "Renders a paginated table with fields: Name, Email, Phone, Type of Partnership, and Message.",
      },
      {
        user: "Reviews the enquiries submitted through the form.",
        system:
          "Ensures all enquiries are captured from the Nomad Website form and stored in the database for WoNo team access.",
      },
      {
        user: "Identifies potential clients from the collected data.",
        system:
          "Provides WoNo employees with read-only access to use this data for outreach and client acquisition.",
      },
      {
        user: "Navigates through multiple records if the list is large.",
        system:
          "Supports pagination and filtering to manage and locate relevant enquiries efficiently.",
      },
    ],
  },
  {
    id: 11,
    title: "Job Applications",
    image: "/assets/master-panel/master-job-applications.png",
    points: [
      {
        user: "Clicks on the 'Job Applications' tab inside the All Leads menu.",
        system:
          "Highlights the Job Applications tab and fetches all job application records submitted from the Careers section of the Nomad Website (Entity 1).",
      },
      {
        user: "Views a table showing job application details.",
        system:
          "Renders a paginated table with columns: Job Position, Name, Email, Date of Birth, Mobile Number, and Location.",
      },
      {
        user: "Understands that the data is pulled directly from submitted career application forms.",
        system:
          "Ensures every form submission from Entity 1 (department and role selected by applicants) is captured and stored in the database.",
      },
      {
        user: "Reviews the applications for different positions and roles.",
        system:
          "Provides a structured view of applicants mapped to the respective departments and roles chosen.",
      },
      {
        user: "Uses the collected application data for onboarding processes.",
        system:
          "WoNo team analyzes and leverages this information for potential employee hiring and recruitment workflows.",
      },
    ],
  },
];
export const inactiveWebsitesSections = [
  {
    id: 12,
    title: "Inactive Websites",
    image: "/assets/master-panel/master-inactive-websites.png",
    points: [
      {
        user: "Clicks on the 'Inactive Websites' menu from the Master Panel sidebar.",
        system:
          "Highlights the Inactive Websites tab and fetches all company records where website details were submitted during signup.",
      },
      {
        user: "Views a table listing inactive websites.",
        system:
          "Renders a paginated table with fields such as companyName, signup date, website details, and status (default: Inactive).",
      },
      {
        user: "Observes that entries are automatically marked as 'Inactive' by default.",
        system:
          "Assigns the Inactive status until the 48-hour verification process is completed and the customer is validated.",
      },
      {
        user: "Confirms that the customer has passed verification.",
        system:
          "Validates the company as legitimate once the verification process is successful.",
      },
      {
        user: "Clicks on the three-dot menu from the Actions column and selects 'Mark As Active'.",
        system:
          "Updates the status of the company’s website from Inactive to Active, deploying it at companyName.wono.co.",
      },
    ],
  },
  {
    id: 13,
    title: "Edit Website Details",
    image: "/assets/master-panel/master-edit-website.png",
    points: [
      {
        user: "Clicks on the three-dot menu in the Inactive Websites table and selects 'Edit'.",
        system:
          "Opens the website details form with all fields pre-filled from the data submitted during signup.",
      },
      {
        user: "Reviews the pre-filled details in the form.",
        system:
          "Displays companyName, website URL, and other signup information in read-only mode unless an edit is requested.",
      },
      {
        user: "Requests a change in the entered data (only if needed).",
        system:
          "Allows modification of specific fields once the change request is validated and approved.",
      },
      {
        user: "Updates the required details in the form.",
        system:
          "Applies edits to the data and ensures consistency before submission.",
      },
      {
        user: "Submits the updated form.",
        system:
          "Validates the inputs and updates the company’s website details in the database with the new information.",
      },
    ],
  },
];

export const dataUploadSections = [
  {
    id: 14,
    title: "Data Upload",
    image: "/assets/master-panel/master-data-upload.png",
    points: [
      {
        user: "Clicks on the 'Data Upload' menu from the Master Panel sidebar.",
        system:
          "Highlights the Data Upload tab and loads the page with the default tab selected as 'Company Upload'.",
      },
      {
        user: "Views a drag-and-drop zone for uploading company files.",
        system:
          "Renders a file input area allowing the user to drag and drop or browse to select a file.",
      },
      {
        user: "Selects the company file containing the list of companies to be uploaded.",
        system:
          "Prepares the selected file for processing and validates its format.",
      },
      {
        user: "Confirms the file upload.",
        system:
          "Uploads the file to the server using the endpoint `/api/company/bulk-insert-companies` with file key `companies`.",
      },
      {
        user: "Sees the uploaded companies reflected in the Companies menu.",
        system:
          "Updates the Companies table in the Master Panel sidebar with the newly added company records from the uploaded file.",
      },
    ],
  },
  {
    id: 15,
    title: "Product Image Upload",
    image: "/assets/master-panel/master-product-image-upload.png",
    points: [
      {
        user: "Selects the 'Product Image Upload' tab under the Data Upload menu.",
        system:
          "Highlights the Product Image Upload tab and loads a form for uploading company-specific images.",
      },
      {
        user: "Views the form with required fields: Country, Company Type, Company, and Company Images.",
        system:
          "Renders a structured form with dropdowns for Country, Company Type, and Company, along with a file input field for Company Images.",
      },
      {
        user: "Fills in the Country, selects the Company Type and Company name, and chooses the images to upload.",
        system:
          "Validates the entered details and prepares the selected images for upload.",
      },
      {
        user: "Clicks on the 'Submit' button after filling the form.",
        system:
          "Uploads the company images and associates them with the selected company record in the database.",
      },
      {
        user: "Sees the uploaded images reflected on the Nomad Website (Entity 1) for the selected company.",
        system:
          "Ensures that the uploaded product images are displayed in the company’s profile whenever the company is viewed on the Nomad Website.",
      },
    ],
  },
];

export const profileSections = [
  {
    id: 16,
    title: "Profile",
    image: "/assets/master-panel/master-profile.png",
    points: [
      {
        user: "Selects the 'Profile' menu from the Master Panel sidebar.",
        system:
          "Highlights the Profile menu and loads the Profile page with the default tab selected as 'Profile'.",
      },
      {
        user: "Views personal details such as name, email, phone, and other profile information.",
        system:
          "Displays the logged-in user's personal information in a read-only format with disabled textboxes.",
      },
      {
        user: "Clicks on the 'Edit' button to update details.",
        system:
          "Enables all previously disabled textboxes, allowing the user to edit their profile information.",
      },
      {
        user: "Makes necessary changes and clicks 'Save'.",
        system:
          "Validates and saves the updated information to the database for the logged-in user.",
      },
      {
        user: "Clicks on the 'Update Profile Picture' button.",
        system:
          "Opens a file selector dialog for the user to choose a new profile picture.",
      },
      {
        user: "Selects an image and clicks 'Save'.",
        system:
          "Uploads the selected image and updates the profile picture for the logged-in user.",
      },
    ],
  },
  {
    id: 17,
    title: "Change Password",
    image: "/assets/master-panel/master-change-password.png",
    points: [
      {
        user: "Selects the 'Change Password' tab from the Profile page.",
        system:
          "Highlights the Change Password tab and loads the password change interface.",
      },
      {
        user: "Enters the current password and clicks on 'Verify'.",
        system:
          "Validates the entered current password against the database. If incorrect, alerts the user that the password is wrong.",
      },
      {
        user: "Waits for verification result.",
        system:
          "If verification is successful, enables the 'New Password' and 'Confirm New Password' textboxes for input.",
      },
      {
        user: "Enters a new password in the 'New Password' textbox and re-enters the same in the 'Confirm New Password' textbox.",
        system:
          "Ensures both entries match and checks compliance with password security rules shown below the textboxes.",
      },
      {
        user: "Clicks on 'Submit' after entering the new password.",
        system:
          "Updates the password in the database for the logged-in user and confirms the successful password change.",
      },
    ],
  },
];

//-----------------------Descriptive section-----------------------//
export const frontendSections = [
  {
    id: 28,
    title: "Frontend Module",
    content: [
      {
        heading: "Dashboard",
        description:
          "The Frontend Dashboard displays the available menus within the Tech Department. These options allow companies to manage their digital presence and related details.\n\n" +
          "**Website Builder**  A static website builder that enables companies to create and host their own websites.\n" +
          "**Nomad Listings**  Provides functionality to list products that will be showcased on the Nomads website.\n" +
          "**POC Details**  Displays the company’s Point of Contact (POC) information, which is the data provided during the signup process on wono.co.",
      },
      {
        heading: "Website Builder",
        description:
          "The Website Builder allows companies to create and manage their hosted websites.\n\n" +
          "**Create Website**  Allows a company to fill out a form with all required details to generate the hosted website. This option is available only if the company has not already hosted a website. Once submitted, the company website is hosted on a subdomain of wono.co (e.g., companyName.wono.co).\n" +
          "**Edit Website**  Provides a form pre-filled with existing website data. Users can modify content, and upon submission, changes are immediately reflected on the hosted site.\n" +
          "**Leads**  Displays all leads generated from the hosted website. Any visitor who submits a form on the company’s hosted website will appear here, providing lead data for follow-up.",
      },
    ],
  },
];


export const salesSections = [
  {
    id: 18,
    title: "Sales Module",
    content: [
      {
        heading: "Dashboard",
        description:
          "The Sales Dashboard serves as the central view when users access the Sales Module. It provides multiple interactive graph widgets that deliver real-time insights into departmental performance. These widgets cover a wide range of areas, including revenue trends, average revenue per client, lead conversion metrics, occupancy utilization, and client-related data. The dashboard is designed for quick analysis and decision-making, offering a comprehensive overview of the Sales Department at a glance.",
      },
      {
        heading: "Sales Department Revenues",
        description:
          "This section highlights department revenue trends over time. Data is presented in monthly, quarterly, and annual breakdowns to help employees and managers track growth, identify high-performing periods, and make informed financial decisions.",
      },
      {
        heading: "Average Revenue",
        description:
          "The Average Revenue widget summarizes profitability by presenting revenue per client, product, or deal. It allows employees to quickly assess sales efficiency and identify which client segments or offerings contribute most to overall revenue.",
      },
      {
        heading: "Leads Data",
        description:
          "The Leads Data widget focuses on lead generation and conversion metrics. It breaks down leads by source, shows their progress through different stages of the sales funnel, and highlights conversion success rates to guide sales strategies.",
      },
      {
        heading: "Occupancy Widgets Collection",
        description:
          "A collection of widgets that provide insights into occupancy and resource usage. These widgets include seat occupancy rates, department-wide utilization statistics, and availability trends. By combining these metrics, the Sales Department can measure operational efficiency and evaluate the impact of occupancy on sales outcomes.",
      },
      {
        heading: "Client Data Widgets Collection",
        description:
          "A comprehensive set of widgets that summarize client information. These include company profiles, active projects, revenue contribution per client, and overall engagement levels. Together, they provide a complete 360-degree view of client relationships and their business value.",
      },
      {
        heading: "Client Member Data Widgets Collection",
        description:
          "Widgets dedicated to individuals associated with client organizations. This includes primary points of contact, their roles and responsibilities, engagement activity, and communication history. These insights help employees manage client relationships more effectively and build stronger connections.",
      },
      {
        heading: "Turnover",
        description:
          "The Turnover section provides detailed breakdowns of sales turnover, comparing year-over-year performance and highlighting significant patterns. It helps the department evaluate financial stability and long-term sustainability.",
      },
      {
        heading: "Finance (Department Budget)",
        description:
          "The Finance section is dedicated to managing the Sales Department’s budget. It includes budget allocation, actual spending, and forecasting tools, all displayed in structured tables and graphs. This ensures financial discipline while supporting growth.",
      },
      {
        heading: "Mix Bag",
        description:
          "The Mix Bag section lists additional tools and features designed to support sales operations. These include value-added utilities that may not fall under core financial or client-related activities but enhance overall productivity and flexibility.",
      },
      {
        heading: "Data",
        description:
          "The Data section provides access to critical business datasets. Employees can view and manage Asset Data, Invoice Data, and Vendor records. Each dataset is displayed in structured, searchable, and filterable tables for efficient management.",
      },
      {
        heading: "Settings",
        description:
          "The Settings section allows employees to configure and manage departmental policies. It includes features such as uploading or updating Standard Operating Procedures (SOPs), bulk uploading of documents, and reviewing department-specific policies.",
      },
    ],
  },
];
export const financeSections = [
  {
    id: 19,
    title: "Finance Module",
    content: [
      {
        heading: "Finance Dashboard",
        description:
          "The Finance Dashboard serves as the central overview when accessing the Finance Module. It provides multiple graph-based widgets displaying critical financial insights. These include income versus expense comparisons, payment and payout trends, as well as collection tracking. The dashboard is designed to give the Finance Department a quick yet comprehensive understanding of the organization’s financial health at a glance.",
      },
      {
        heading: "Cashflow",
        description:
          "The Cashflow section focuses on managing and analyzing the movement of funds across the organization. It includes multiple tabs for deeper analysis.\n\n" +
          "**Projections** Displays financial projections year-wise, helping the department plan future revenues, expenses, and resource allocations.\n" +
          "**Historical P&L** Presents historical Profit and Loss statements derived from income and expense data stored in the system. This allows financial managers to evaluate past performance and identify trends.",
      },
      {
        heading: "Finance (Department Budget)",
        description:
          "The Department Budget section provides full visibility and control over departmental financial planning.\n\n" +
          "**Budget** Displays year-wise departmental budgets, ensuring transparency and financial accountability.\n" +
          "**Department Wise Budget** Allows the Finance Department to review and analyze budgets from all other departments within the company.\n" +
          "**Voucher** Provides a voucher request form where departments can request allocation of funds for specific needs.\n" +
          "**Payment Schedule** Lists all upcoming payments in a calendar view, helping financial teams stay on top of due dates.\n" +
          "**Statutory Payments** Shows all compliance-related statutory payments in a structured table format.\n" +
          "**Landlord Payments** Displays landlord-related payments organized by location, ensuring property-related expenses are properly tracked.",
      },
      {
        heading: "Billing",
        description:
          "The Billing section manages invoices and payment approvals across clients and departments.\n\n" +
          "**Client Invoice** Displays all client invoices raised by the company, providing detailed payment and status tracking.\n" +
          "**Department Invoice** Shows invoices generated for different departments for their budget-related expenditures.\n" +
          "**Pending Approvals** Lists all pending budget requests from departments, with options to approve or reject after review.\n" +
          "**Voucher History** Maintains a complete record of vouchers submitted, whether from the Finance Department or other departments.",
      },
      {
        heading: "Mix Bag",
        description:
          "The Mix Bag section serves as a repository of critical documents related to company leadership and management. Employees can access key documents and also upload new ones, ensuring that all essential files are securely stored and easily retrievable within the Finance Module.",
      },
      {
        heading: "Data",
        description:
          "The Data section provides access to critical business datasets. Employees can view and manage Asset Data, Invoice Data, and Vendor records. Each dataset is displayed in structured, searchable, and filterable tables for efficient management.",
      },
      {
        heading: "Settings",
        description:
          "The Settings section allows employees to configure and manage departmental policies. It includes features such as uploading or updating Standard Operating Procedures (SOPs), bulk uploading of documents, and reviewing department-specific policies.",
      },
    ],
  },
];

export const adminSections = [
  {
    id: 20,
    title: "Admin Module",
    content: [
      {
        heading: "Dashboard",
        description:
          "The Admin Dashboard provides a financial year–wise view of department expenses. It also includes multiple data widgets that help monitor operations and resources.\n\n" +
          "**Offices Data**  Shows occupied and free office space details once navigated into inside pages.\n" +
          "**Monthly Tasks Data**  Displays the list of monthly tasks assigned within the department.\n" +
          "**Expense per Sqft**  Provides insights into expenses incurred per square foot of space usage.\n" +
          "**Electricity Expense**  Highlights electricity-related expenses as part of departmental costs.\n" +
          "**Executive Details**  Summarizes executive-level staff details including role and responsibilities.\n" +
          "**Shift Details**  Displays employee shift allocations and schedules.\n" +
          "**Client Member Birthdays**  Highlights upcoming birthdays of client members for relationship management.\n" +
          "**Client Anniversaries**  Displays client company anniversaries to support client engagement activities.\n" +
          "**Housekeeping Data**  Provides operational data related to housekeeping resources and allocation.",
      },
      {
        heading: "Annual Expenses",
        description:
          "The Annual Expenses section presents the financial year–wise budget data of the Admin Department, helping managers track overall resource utilization and cost efficiency.",
      },
      {
        heading: "Inventory",
        description:
          "The Inventory section maintains a tabular view of all items managed by the Admin Department. It allows department heads to add new items or edit existing entries, ensuring inventory is always updated and accurate.",
      },
      {
        heading: "Finance (Department Budget)",
        description:
          "The Department Budget section provides full visibility and control over departmental financial planning.\n\n" +
          "**Budget** Displays year-wise departmental budgets, ensuring transparency and financial accountability.\n" +
          "**Voucher** Provides a voucher request form where departments can request allocation of funds for specific needs.\n" +
          "**Payment Schedule** Lists all upcoming payments in a calendar view, helping financial teams stay on top of due dates.\n",
      },
      {
        heading: "Data",
        description:
          "The Data section filters electricity-related consumption from the overall departmental budget. It highlights electricity expenses separately, making it easier to monitor and analyze energy costs." +
          "The Data section provides access to critical business datasets. Employees can view and manage Asset Data, Invoice Data, and Vendor records. Each dataset is displayed in structured, searchable, and filterable tables for efficient management.",
      },
      {
        heading: "Mix Bag",
        description:
          "The Mix Bag section contains a set of tools that assist the Admin Department in managing personnel and events.\n\n" +
          "**Team Members Schedule**  Enables the Admin Head to assign, unassign, or substitute shifts for team members by selecting the desired unit.\n" +
          "**Housekeeping Members**  Allows the Admin Head to assign, unassign, or substitute shifts for housekeeping staff across different units.\n" +
          "**Holidays & Events**  Currently unavailable, reserved for future enhancements.\n" +
          "**Client Member Onboarding**  Allows the Admin Head to onboard client members into the system with minimum required details, including associated biometric data for secure authentication.",
      },
      {
        heading: "Settings",
        description:
          "The Settings section allows employees to configure and manage departmental policies. It includes features such as uploading or updating Standard Operating Procedures (SOPs), bulk uploading of documents, and reviewing department-specific policies.",
      },
    ],
  },
];

export const itSections = [
  {
    id: 21,
    title: "IT Module",
    content: [
      {
        heading: "Dashboard",
        description:
          "The IT Dashboard provides a financial year–wise overview of departmental expenses. It also includes operational widgets that help monitor IT resources, performance, and utilization.\n\n" +
          "**Offices Data** Shows occupied and free office space details once navigated into inside pages.\n" +
          "**Monthly Tasks Data** Displays a list of monthly IT-related tasks for monitoring progress and accountability.\n" +
          "**Expense per Sqft** Provides insights into IT-related costs incurred per square foot of office usage.\n" +
          "**Internet Expense** Highlights internet-related expenses within the department’s budget.\n" +
          "**Monthly KPA** Summarizes key performance areas (KPAs) tracked monthly to measure IT team efficiency and delivery.\n" +
          "**Shift Details** Displays employee shift allocations and working schedules within the IT Department.",
      },
      {
        heading: "Annual Expenses",
        description:
          "The Annual Expenses section presents the financial year–wise budget data of the IT Department. This view enables department managers to monitor cost distribution, identify spending patterns, and ensure financial accountability.",
      },
      {
        heading: "Inventory",
        description:
          "The Inventory section provides a tabular overview of all IT-related assets and items. Department heads can add new inventory records or edit existing entries, ensuring all IT hardware, software licenses, and resources are accurately tracked.",
      },
      {
        heading: "Finance (Department Budget)",
        description:
          "The Department Budget section provides full visibility and control over departmental financial planning.\n\n" +
          "**Budget** Displays year-wise departmental budgets, ensuring transparency and financial accountability.\n" +
          "**Voucher** Provides a voucher request form where departments can request allocation of funds for specific needs.\n" +
          "**Payment Schedule** Lists all upcoming payments in a calendar view, helping financial teams stay on top of due dates.\n",
      },
      {
        heading: "Data",
        description:
          "The Data section isolates internet-related expenses from the overall departmental budget. This view highlights internet consumption and costs separately, helping managers track network usage and optimize related spending." +
          "The Data section provides access to critical business datasets. Employees can view and manage Asset Data, Invoice Data, and Vendor records. Each dataset is displayed in structured, searchable, and filterable tables for efficient management.",
      },
      {
        heading: "Mix Bag",
        description:
          "The Mix Bag section provides operational tools for managing IT personnel and schedules.\n\n" +
          "**Team Members Schedule**  Enables the IT Head to assign, unassign, or substitute shifts for IT team members by selecting the desired unit. This ensures proper coverage of IT services across all departments and operational units.",
      },
      {
        heading: "Settings",
        description:
          "The Settings section allows employees to configure and manage departmental policies. It includes features such as uploading or updating Standard Operating Procedures (SOPs), bulk uploading of documents, and reviewing department-specific policies.",
      },
    ],
  },
];

export const maintenanceSections = [
  {
    id: 22,
    title: "Maintenance Module",
    content: [
      {
        heading: "Dashboard",
        description:
          "The Maintenance Dashboard provides a financial year–wise overview of departmental expenses. It includes several widgets that track operational efficiency, resource usage, and performance.\n\n" +
          "**Offices Data**  Shows occupied and free office space details once navigated into inside pages.\n" +
          "**Monthly Tasks Data**  Displays a list of monthly tasks and their completion status, ensuring accountability.\n" +
          "**Expense per Sqft**  Provides insights into maintenance-related costs incurred per square foot of usage.\n" +
          "**Assets Under Management**  Highlights assets currently under the department’s management, including their status and upkeep records.\n" +
          "**Monthly KPA**  Summarizes key performance areas (KPAs) tracked monthly to measure the effectiveness of the maintenance team.\n" +
          "**Shift Details**  Displays employee shift allocations and scheduling within the Maintenance Department.",
      },
      {
        heading: "Annual Expenses",
        description:
          "The Annual Expenses section shows the financial year–wise budget data of the Maintenance Department. This helps department heads evaluate total expenditure, track trends, and align budgets with operational needs.",
      },
      {
        heading: "Inventory",
        description:
          "The Inventory section provides a structured table of all maintenance-related items and equipment. Department managers can add new entries or edit existing records, ensuring updated and accurate inventory tracking.",
      },
      {
        heading: "Finance (Department Budget)",
        description:
          "The Department Budget section provides full visibility and control over departmental financial planning.\n\n" +
          "**Budget** Displays year-wise departmental budgets, ensuring transparency and financial accountability.\n" +
          "**Voucher** Provides a voucher request form where departments can request allocation of funds for specific needs.\n" +
          "**Payment Schedule** Lists all upcoming payments in a calendar view, helping financial teams stay on top of due dates.\n",
      },
      {
        heading: "Data",
        description:
          "The Data section provides visibility into **AMC Records**  comprehensive details of Annual Maintenance Contracts (AMC) for equipment and services. This helps in monitoring compliance, renewal dates, and cost tracking." +
          "This section provides access to critical business datasets. Employees can view and manage Asset Data, Invoice Data, and Vendor records. Each dataset is displayed in structured, searchable, and filterable tables for efficient management.",
      },
      {
        heading: "Mix Bag",
        description:
          "The Mix Bag section includes operational tools for staff scheduling and management.\n\n" +
          "**Team Members Schedule**  Enables the Maintenance Head to assign, unassign, or substitute shifts for maintenance team members by selecting the desired unit. This ensures consistent coverage and uninterrupted service across facilities.",
      },
      {
        heading: "Settings",
        description:
          "The Settings section allows employees to configure and manage departmental policies. It includes features such as uploading or updating Standard Operating Procedures (SOPs), bulk uploading of documents, and reviewing department-specific policies.",
      },
    ],
  },
];

export const hrSections = [
  {
    id: 23,
    title: "HR Module",
    content: [
      {
        heading: "Dashboard",
        description:
          "The HR Dashboard provides a financial year–wise view of departmental expenses and acts as the central hub for managing employees and company-level details. It contains two main sections: Employee and Company.\n\n",
      },
      {
        heading: "Employee",
        description:
          "Employee  Displays all employee-related data organized in tabs:\n" +
          "**Employee List**  Shows the complete employee directory with department and role details. Selecting an employee reveals additional data such as editable employee details, employee-specific attendance, leaves, agreements, and payslip history.\n" +
          "**Past Employees**  Lists all inactive employees who have exited the company.\n" +
          "**Attendance**  Tracks daily attendance for all employees in hours. Users can switch between monthly and financial year views.\n" +
          "**Leaves**  Displays leave data for employees, showing presence/absence. Data can be filtered by month and financial year.\n" +
          "**Employee Onboarding**  Provides a form to onboard new employees with all necessary details.\n\n",
      },
      {
        heading: "Company",
        description:
          "**Company** - Displays company-specific data in multiple tabs:\n" +
          "    **Company Logo**  Allows the HR team to update the company logo.\n" +
          "    **Company Handbook**  Contains a description of the company, organizational chart, and company-wide SOPs and policies, including department-specific SOPs and policies.\n" +
          "    **Departments**  Shows a table listing all departments with managers and their active status.\n" +
          "    **Work Locations**  Displays all company work locations (buildings). HR can add new locations via a form.\n" +
          "    **Holidays**  Lists all company holidays. HR can add ad-hoc holidays via the Add Holiday form.\n" +
          "    **Events**  Displays all company events in a table, with an option to add new events.\n" +
          "    **Company Policies**  Shows all company policies in a table, with the ability to add new ones.\n" +
          "    **Company SOPs**  Lists all SOPs with the ability to add new ones.\n" +
          "    **Employee Type**  Shows categories of employment (Intern, Full Time, Part Time, etc.), with the ability to add new types.\n" +
          "    **Shifts**  Displays available shifts (General Shift, Load Shift, etc.) with an option to add new shifts.\n" +
          "    **Templates**  Contains document templates that HR can download or add for company use.",
      },
      {
        heading: "Finance (Department Budget)",
        description:
          "**Payroll**  Provides tools for managing employee payroll. HR can bulk-generate payslips for multiple employees or generate them individually by selecting an employee and reviewing all necessary details.\n" +
          "**Budget** Displays year-wise departmental budgets, ensuring transparency and financial accountability.\n" +
          "**Voucher** Provides a voucher request form where departments can request allocation of funds for specific needs.\n" +
          "**Payment Schedule** Lists all upcoming payments in a calendar view, helping financial teams stay on top of due dates.\n",
      },
      {
        heading: "Mix Bag",
        description:
          "The Mix Bag section includes additional HR functionalities:\n\n" +
          "**Attendance Requests**  Displays all attendance correction requests submitted by employees, with options to approve or reject.\n" +
          "**Leave Requests**  Lists all employee leave requests for HR to review, approve, or reject.",
      },
      {
        heading: "Data",
        description:
          "The Data section contains HR-related datasets for reporting and analysis:\n\n" +
          "**Job Application List**  Displays all job applications received by the company.\n" +
          "**Payroll Reports**  Shows payroll reports for all employees, providing financial insights and tracking.\n" +
          "This section provides access to critical business datasets. Employees can view and manage Asset Data, Invoice Data, and Vendor records. Each dataset is displayed in structured, searchable, and filterable tables for efficient management.",
      },
      {
        heading: "Settings",
        description:
          "The Settings section allows employees to configure and manage departmental policies. It includes features such as uploading or updating Standard Operating Procedures (SOPs), bulk uploading of documents, and reviewing department-specific policies.",
      },
    ],
  },
];

// --------------- Apps in descrptive --------------------------//

export const meetingSections = [
  {
    id: 24,
    title: "Meeting Module",
    content: [
      {
        heading: "Dashboard",
        description:
          "The Meeting Dashboard provides a comprehensive overview of meeting-related insights to help monitor room usage, booking activity, and overall efficiency.\n\n" +
          "**Average Meeting Room Utilization**  Shows the percentage of average utilization of all meeting rooms, helping assess how effectively resources are being used.\n" +
          "**Unique Bookings**  Displays the number of unique meetings booked, ensuring visibility of usage patterns.\n" +
          "**Total Hours Booked**  Summarizes the total hours for which meeting rooms have been reserved.\n" +
          "**Guest Bookings**  Highlights the number of meetings booked that include external participants or guests.\n" +
          "**Cancelled Hours**  Shows the number of meeting hours cancelled, giving insights into cancellation trends.\n" +
          "**Ongoing Meetings**  Displays details of meetings that are currently in progress.\n" +
          "**Monthwise Occupancy Details**  Presents occupancy metrics for meeting rooms on a monthly basis, useful for long-term analysis.\n" +
          "**Room Availability**  Indicates which meeting rooms are currently available for booking.\n" +
          "**Hygiene Status**  Provides hygiene and cleanliness status of meeting rooms, ensuring readiness for usage.",
      },
      {
        heading: "Book a Meeting",
        description:
          "The Book a Meeting feature allows users to schedule a meeting by selecting a location and unit, choosing the desired time slots, and filling in additional details such as participants and agenda. Once submitted, the system reserves the room and logs the meeting in the dashboard and calendar.",
      },
      {
        heading: "Manage Meetings",
        description:
          "The Manage Meetings section enables admin employees or department heads to oversee both internal and external meetings.\n\n" +
          "**Monitor Meetings**  Track ongoing internal and external meetings in real time.\n" +
          "**Change Meeting Status & Housekeeping Status**  Update the status of meetings and mark housekeeping requirements for room readiness.\n" +
          "**Cancel Meetings**  Provides the option to cancel meetings if necessary, ensuring scheduling conflicts are resolved efficiently.",
      },
      {
        heading: "Calendar (Meetings Only)",
        description:
          "The Calendar view provides admin department employees with a complete schedule of all booked meetings. It allows quick navigation across dates, helping to visualize room utilization and availability in a calendar format.",
      },
      {
        heading: "Reports (Meetings Only)",
        description:
          "The Reports section enables admin employees to view detailed reports of all meetings conducted. Reports can be filtered by date, room, or other criteria and exported to CSV format for further analysis or record-keeping.",
      },
      {
        heading: "Reviews",
        description:
          "The Reviews section provides visibility into feedback received from employees and guests regarding meetings or meeting rooms.\n\n" +
          "**View Reviews**  Admin employees can see all reviews submitted for meetings and services.\n" +
          "**Reply to Reviews**  Employees can respond to feedback when necessary to improve service quality and maintain engagement.",
      },
      {
        heading: "Settings",
        description:
          "The Settings section allows the Admin Head to view all available meeting rooms within the system. New rooms can also be added by filling out a form with details such as room capacity, location, and available amenities.",
      },
    ],
  },
];

export const visitorsSections = [
  {
    id: 25,
    title: "Visitors Module",
    content: [
      {
        heading: "Dashboard",
        description:
          "The Visitors Dashboard provides an overview of visitor activity and insights into trends related to company and client interactions.\n\n" +
          "**Monthly Total Visitors**  Shows the total number of visitors recorded each month, giving insights into traffic volume.\n" +
          "**Visitor Check-in**  Tracks visitors as they check in, displaying real-time data for arrivals.\n" +
          "**Checkout**  Displays details of visitors who have completed their visits and checked out.\n" +
          "**Types of Visits**  Categorizes visits into internal and external, providing a breakdown of the purpose of each visit.\n" +
          "**Visitor Categories**  Segments visitors into different categories (such as clients, vendors, partners, or guests) to analyze visitor demographics.",
      },
      {
        heading: "Add Visitor",
        description:
          "Admin employees can register a new visitor by filling out a form with relevant details. A visitor can be:\n\n" +
          "**Internal Visitor**  Visiting someone within the same company.\n" +
          "**External Visitor**  Visiting someone from client companies.",
      },
      {
        heading: "Add Client",
        description:
          "Admin employees can register a client in the system. Adding a client here refers to an external meeting client, which is directly linked to the Meeting Module.\n\n" +
          "Once added, the client’s name becomes available in the dropdown list when booking an external meeting, ensuring smooth integration between visitor management and meeting scheduling.",
      },
      {
        heading: "Manage Visitors",
        description:
          "The Manage Visitors section allows Admin employees or Department Heads to oversee all visitor activity.\n\n" +
          "**Monitor Visitors**  Track both internal and external visitors in real time.\n" +
          "**Change Visitor Status**  Update visitor status such as checked-in or checked-out to maintain accurate records.",
      },
      {
        heading: "Team Members",
        description:
          "The Team Members section displays details of all employees managing the Visitor Module. It provides clarity on responsibilities and roles within the department.",
      },
      {
        heading: "Reports",
        description:
          "The Reports section provides detailed visitor reports that include visit history, categories, and activity logs.\n\n" +
          "Admin employees can also export this data into CSV format for record-keeping, analysis, or compliance purposes.",
      },
    ],
  },
];

export const tasksSections = [
  {
    id: 26,
    title: "Tasks Module",
    content: [
      {
        heading: "Dashboard",
        description:
          "The Tasks Dashboard provides insights into task completion trends and meeting-specific tasks for users.\n\n" +
          "**Overall Average Tasks Completion**  Displays the average rate of tasks completed across the department, offering insights into team productivity.\n" +
          "**Overall Pending vs Completed Tasks**  Shows a comparative view of pending and completed tasks, helping track progress and workload balance.\n" +
          "**Meetings (User Specific)**  Displays tasks related to specific meetings for each user, ensuring individual accountability.",
      },
      {
        heading: "My Tasks",
        description:
          "The My Tasks section allows users to create and manage their personal tasks. These tasks are private and not visible to department admins.\n\n" +
          "Users can:\n" +
          "**Add Tasks**  Create new personal tasks to track individual responsibilities.\n" +
          "**Manage Tasks**  Monitor ongoing tasks and mark them as complete when finished.\n\n" +
          "This feature ensures that users have a dedicated space to manage their own workload independently of departmental activities.",
      },
      {
        heading: "Department Tasks",
        description:
          "The Department Tasks section focuses on collaborative work managed by the department admin.\n\n" +
          "**Task Creation**  Department admins can create and assign department-level tasks.\n" +
          "**Assignment**  Team members are assigned tasks (often communicated verbally by the admin).\n" +
          "**Completion**  Once completed, members mark the task as finished, and it appears in the completed section with the responsible member’s name.\n\n" +
          "This section ensures accountability and visibility for department-wide responsibilities.",
      },
      {
        heading: "Team Members",
        description:
          "The Team Members section provides details of all employees associated with the Tasks Module. It ensures clarity on team roles and helps in tracking assigned tasks.",
      },
      {
        heading: "Reports",
        description:
          "The Reports section consolidates task-related data for analysis and export.\n\n" +
          "**My Tasks Reports**  Displays reports for personally created tasks, with the option to export to CSV for record-keeping.\n" +
          "**Assigned Tasks Reports**  Shows tasks assigned by top management to the department, providing visibility into organizational priorities.",
      },
    ],
  },
];

export const ticketsSections = [
  {
    id: 27,
    title: "Tickets Module",
    content: [
      {
        heading: "Dashboard",
        description:
          "The Tickets Dashboard provides insights into ticket activity and department-level performance.\n\n" +
          "**Overall Department Raised Tickets**  Displays the number of tickets raised across the department, helping track workload and request frequency.\n" +
          "**Total Tickets**  Shows the cumulative number of tickets handled by the system, including raised, open, and closed tickets.\n" +
          "**Department Tickets**  Breaks down ticket data department-wise, highlighting which departments raise and resolve the most tickets.\n" +
          "**Types of Tickets**  Categorizes tickets by issue type (e.g., technical, administrative, operational), providing clarity into recurring problems.",
      },
      {
        heading: "Raise Ticket",
        description:
          "The Raise Ticket feature allows users to log an issue or request to a specific department by filling out a form. Users can also attach supporting files, such as screenshots or images, to provide additional context.\n\n" +
          "All raised tickets are automatically displayed in a table below the form for easy tracking, ensuring users have visibility into their submissions.",
      },
      {
        heading: "Manage Tickets",
        description:
          "The Manage Tickets section gives a complete overview of ticket statuses, enabling department admins and members to track and process requests efficiently.\n\n" +
          "**Received Tickets**  Displays all tickets received by the department. From here, the department head can assign tickets to team members, or members can self-assign.\n" +
          "**Accepted Tickets**  Shows tickets that have been accepted by a team member. Tickets can be closed once resolved, or pushed back to 'Open' if further support is needed. Admins also have the option to escalate tickets to another department if the issue is irrelevant to their own.\n" +
          "**Support Tickets**  Contains tickets that were pushed for support. The admin can reassign these tickets to another member or take them up directly.\n" +
          "**Escalated Tickets**  Shows tickets escalated from other departments, ensuring that cross-department issues are addressed properly.\n" +
          "**Closed Tickets**  Displays all tickets closed by the team, providing a record of resolved issues.",
      },
      {
        heading: "Reports",
        description:
          "The Reports section lists all tickets raised and closed within the user’s department. Reports can be filtered, analyzed, and exported to CSV format for compliance, auditing, or performance evaluation purposes.",
      },
      {
        heading: "Team Members",
        description:
          "The Team Members section provides details of all employees working within the Tickets Module. This helps in understanding roles, responsibilities, and ticket assignment distribution.",
      },
      {
        heading: "Ticket Settings",
        description:
          "The Ticket Settings section helps reduce clutter caused by duplicate or misclassified issues.\n\n" +
          "**Unmapped Issues**  Tickets raised with issues marked as 'Other' appear here. Department admins can map these tickets to existing issue categories if they are found to be duplicates or closely related to already listed problems.\n\n" +
          "This ensures standardized issue classification and avoids the creation of redundant categories.",
      },
    ],
  },
];

export const performanceSections = [
  {
    id: 29,
    title: "Performance Module",
    content: [
      {
        heading: "Department Overview",
        description:
          "When a user is part of multiple departments or belongs to top management, the Performance Module initially displays a consolidated table. This table lists all the departments along with their **Daily KRA** (Key Result Areas) and **Monthly KPA** (Key Performance Areas). This gives management-level users a clear snapshot of departmental performance metrics at a glance.",
      },
      {
        heading: "Daily KRA",
        description:
          "The Daily KRA section provides a detailed view of daily Key Result Areas assigned to the user.\n\n" +
          "**Table View**  Shows all daily KRAs refreshed every day.\n" +
          "**Adding KRAs**  New KRAs can be added by users with sufficient access rights.\n" +
          "**Completion Tracking**  Users can select a KRA and mark it as completed. Once marked, the entry is moved into the completed table along with the user’s name for accountability.\n\n" +
          "This ensures that daily activities are continuously tracked, updated, and tied to individual responsibility.",
      },
      {
        heading: "Monthly KPA",
        description:
          "The Monthly KPA section provides a broader performance overview at the monthly level.\n\n" +
          "**Table View**  Displays monthly KPAs that are refreshed at the start of each month.\n" +
          "**Adding KPAs**  Users with proper access can add new KPAs to the table.\n" +
          "**Completion Tracking**  KPAs can be marked as completed by the assigned user. Once completed, the entry is logged into the completed table with the user’s name.\n\n" +
          "This system ensures long-term performance goals are tracked and completed within the designated time frame.",
      },
    ],
  },
];





