// sections.js (for Host Panel)

// Website Builder Sections
export const hostPanelSections = [
  {
    id: 1,
    title: "Create Website",
    image: "/assets/hosts-panel/website-1.png",
    points: [
      {
        user: "Clicks on Website Builder card and chooses Create Website.",
        system: "Checks if no website exists, then renders Website Creation Form.",
      },
      {
        user: "Fills in company details (name, description, services, etc.).",
        system: "Validates form inputs and prepares draft site structure.",
      },
      {
        user: "Submits the Website Creation Form.",
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
        user: "Clicks on Website Builder card and chooses Edit Website.",
        system: "Loads form pre-filled with existing website details.",
      },
      {
        user: "Updates content (text, images, services, contact info, etc.).",
        system: "Validates changes in real-time.",
      },
      {
        user: "Submits the updated form.",
        system:
          "Applies changes, and updates website content live at companyName.wono.co.",
      },
    ],
  },
  {
    id: 3,
    title: "Leads",
    image: "/assets/hosts-panel/website-3.png",
    points: [
      {
        user: "Clicks on Website Builder card and chooses Leads.",
        system: "Fetches enquiries captured from Nomad Website (Entity 1).",
      },
      {
        user: "Views list of all leads in a table.",
        system:
          "Displays details like name, contact info, enquiry message, and timestamp.",
      },
    ],
  },
];

// Nomad Listings Sections
export const nomadListingSections = [
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

// POC Details Sections
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
