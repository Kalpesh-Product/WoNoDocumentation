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
    image: "/assets/master-panel/master-all-poc-contact.png",
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


