// src/sections.js

const sections = [
  {
    id: 1,
    title: "Section 1: User Enquiry (B2C)",
    image: "/assets/section-1.png", // update with actual export
    points: [
      {
        user: "Visits wono.co homepage",
        system: "Loads landing page, initializes session, logs visit",
      },
      {
        user: "Clicks 'Nomads' button",
        system: "Routes to Nomads module, sets filters",
      },
      {
        user: "Selects Country & City",
        system: "Validates and stores query context",
      },
      {
        user: "Selects Number of People",
        system: "Validates and stores in state",
      },
      {
        user: "Clicks Search",
        system: "Sends query to backend, logs enquiry",
      },
      {
        user: "Gets redirected to search results",
        system: "Renders results and records enquiry in DB",
      },
    ],
  },
  {
    id: 2,
    title: "Section 2: Search Results – List View",
    image: "/assets/section-2.png",
    points: [
      {
        user: "Search results page loads",
        system: "Fetches listings from API using query params",
      },
      {
        user: "Default view = List View",
        system: "Sets `viewMode = list`",
      },
      {
        user: "Sees Popular Co-working Spaces section",
        system: "Shows preview of top listings for vertical",
      },
      {
        user: "Clicks 'View More'",
        system: "Fetches all listings of that vertical and expands UI",
      },
    ],
  },
  {
    id: 3,
    title: "Section 3: Search Results – Map View",
    image: "/assets/section-3.png",
    points: [
      {
        user: "Switches to Map View",
        system: "Updates state to `viewMode = map`",
      },
      {
        user: "Sees listings in side panel",
        system: "Renders unified list of all verticals",
      },
      {
        user: "Sees map with markers",
        system: "Plots pins using lat/lng from API, auto-fits viewport",
      },
      {
        user: "Clicks listing or marker",
        system: "Syncs selection and highlights counterpart",
      },
      {
        user: "Gets redirected to product page",
        system: "Navigates to /product/:id, loads detail API",
      },
    ],
  },
  {
  id: 4,
  title: "Section 4: Category Filters & Pagination",
  image: "/assets/section-4.png",
  points: [
    {
      user: "Sees category filter icons (verticals) above the search bar",
      system: "Loads available verticals from config/DB and renders as clickable filter icons",
    },
    {
      user: "Clicks on a category (e.g., Co-working, Hostel, Workation)",
      system: "Updates filter state with companyType = selectedVertical",
    },
    {
      user: "Sees filtered results",
      system: "Filters listings locally based on companyType and re-renders the list",
    },
    {
      user: "Navigates through listing pages",
      system: "Uses client-side pagination (preloaded data, sliced per page, no backend per-page fetch)",
    },
    {
      user: "Sees next set of results",
      system: "Updates listing state with next slice of data for the selected vertical",
    },
  ],
},
{
  id: 5,
  title: "Section 5: Product Page",
  image: "/assets/section-5.png",
  points: [
    {
      user: "Sees gallery section with top 5 images",
      system: "Loads 5 best images from the listing’s media data",
    },
    {
      user: "Clicks an image in gallery",
      system: "Redirects user to dedicated inside gallery page",
    },
    {
      user: "Clicks an image in inside gallery",
      system: "Opens the image in a modal overlay with navigation controls",
    },
    {
      user: "Sees company logo on page",
      system: "Displays logo asset linked to the company profile",
    },
    {
      user: "Sees ratings and reviews",
      system: "Fetches company ratings & reviews from backend and renders them",
    },
    {
      user: "Reads About section",
      system: "Loads and displays description text from company profile",
    },
    {
      user: "Fills out enquiry form",
      system: "Validates input and submits enquiry payload to backend",
    },
    {
      user: "Sees inclusions",
      system: "Renders list of amenities/features linked to the companyType",
    },
    {
      user: "Reads testimonials",
      system: "Fetches testimonials from backend and displays them in carousel/list format",
    },
    {
      user: "Sees 'Where you'll be' map section",
      system: "Displays embedded map with company geo-location (lat/lng pin)",
    },
  ],
},
{
  id: 6,
  title: "Section 6: Product Page – Enquiry Form",
  image: "/assets/section-6.png",
  points: [
    {
      user: "Fills enquiry form with details (Full Name, No. of People, Mobile Number, Email, Start Date, End Date)",
      system: "Captures and validates input fields for correct format (string, number, email, date)",
    },
    {
      user: "Clicks Submit on enquiry form",
      system: "Submits enquiry payload { fullName, people, mobile, email, startDate, endDate } to backend",
    },
    {
      user: "Sees confirmation on screen",
      system: "Saves enquiry in database and triggers acknowledgement workflow",
    },
    {
      user: "Receives acknowledgement email",
      system: "Sends auto-generated acknowledgement email to user with submitted details",
    },
  ],
},


];

export default sections;
