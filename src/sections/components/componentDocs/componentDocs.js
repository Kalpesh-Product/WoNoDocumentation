export const headerDocs = {
  name: "Header",
  file: "src/components/Header.jsx",
  overview:
    "The Header component serves as the top navigation bar in the BIZNest admin panel. It displays the company logo, sidebar toggle, notifications, mail icon, and user profile options with full responsive support.",
  props: [
    {
      name: "notifications",
      type: "Array",
      default: "[]",
      description: "List of notifications to display in the popover.",
    },
    {
      name: "unseenCount",
      type: "number",
      default: "0",
      description: "Number of unseen notifications shown as a badge.",
    },
    {
      name: "onRefreshNotifications",
      type: "Function",
      default: "undefined",
      description: "Function to refresh or refetch notifications.",
    },
    {
      name: "isRefreshingNotifications",
      type: "boolean",
      default: "false",
      description: "Indicates if notifications are currently refreshing.",
    },
  ],
  usage: `import Header from "@/components/Header";

export default function Dashboard() {
  return (
    <Header
      notifications={[]}
      unseenCount={3}
      onRefreshNotifications={() => {}}
      isRefreshingNotifications={false}
    />
  );
}`,
  dependencies: [
    "@mui/material",
    "react-icons",
    "@tanstack/react-query",
    "dayjs",
    "sonner",
    "react-router-dom",
  ],
  notes: [
    "Requires AuthContext and QueryClientProvider to be wrapped at a higher level.",
    "Fetches logo from /api/company/get-company-logo using React Query.",
    "Integrates with custom hooks useAuth, useLogout, useAxiosPrivate, and useSidebar.",
  ],
};

export const footerDoc = {
  name: "Footer",
  file: "src/components/Footer.jsx",
  overview:
    "The Footer component displays the site’s branding, address, contact email, and quick navigation links. It is responsive, supporting multi-column layouts on larger screens and a stacked layout on mobile. It dynamically disables navigation links when a user is authenticated.",

  props: [
    {
      name: "changeActiveTab",
      type: "Function",
      default: "undefined",
      description:
        "Optional callback to handle tab change actions if needed. Currently unused in this version but reserved for future navigation behavior.",
    },
  ],

  usage: `import Footer from "@/components/Footer";

export default function Example() {
  return (
    <div>
      <Footer />
    </div>
  );
}`,
  dependencies: [
    "React",
    "Tailwind CSS",
    "useAuth (custom hook)",
    "getFiscalYearString (utility function)",
  ],
  notes: [
    "The footer dynamically displays link accessibility based on the authentication state. If a user is logged in (`auth.user` exists), all links are shown in disabled state with reduced opacity.",
    "Uses a responsive grid system with 2–4 columns based on screen size.",
    "Footer content and routes are defined in the `footerLinks` array inside the component.",
    "Company logo image is imported from `wonoLogo` in assets.",
    "The © year section automatically displays the current fiscal year using `getFiscalYearString()`.",
  ],
};

export const widgetSectionDoc = {
  name: "WidgetSection",
  file: "src/components/WidgetSection.jsx",
  overview:
    "The WidgetSection component is a flexible wrapper for displaying dashboard widgets or grouped content in a responsive grid. It supports dynamic layouts, titles, data values, optional buttons, and customizable colors and typography. Commonly used to create visually structured sections in dashboard pages.",

  props: [
    {
      name: "layout",
      type: "number",
      default: "1",
      description:
        "Determines the number of columns in the grid (1–6). Each layout maps to a responsive Tailwind grid configuration.",
    },
    {
      name: "children",
      type: "ReactNode",
      default: "—",
      description: "Content or widgets to be rendered inside the grid layout.",
    },
    {
      name: "title",
      type: "string",
      default: "undefined",
      description:
        "Section heading text displayed at the top of the widget section.",
    },
    {
      name: "titleData",
      type: "string | number",
      default: "undefined",
      description:
        "Additional numeric or text data displayed beside the title.",
    },
    {
      name: "height",
      type: "string",
      default: "undefined",
      description:
        "Applies a custom height class or inline height value to the section.",
    },
    {
      name: "titleDataColor",
      type: "string",
      default: "undefined",
      description:
        "Applies a color (e.g., `#34D399` or `red`) to `titleData` text.",
    },
    {
      name: "padding",
      type: "boolean",
      default: "false",
      description: "Removes default inner padding if true.",
    },
    {
      name: "border",
      type: "boolean",
      default: "false",
      description: "Adds a gray border around the section container.",
    },
    {
      name: "button",
      type: "boolean",
      default: "false",
      description: "Toggles the PrimaryButton in the header section.",
    },
    {
      name: "buttonTitle",
      type: "string",
      default: "undefined",
      description: "Label for the optional PrimaryButton.",
    },
    {
      name: "handleClick",
      type: "Function",
      default: "undefined",
      description:
        "Callback executed when the optional PrimaryButton is clicked.",
    },
    {
      name: "titleFont",
      type: "boolean",
      default: "false",
      description: "Switches between two font-size styles for the title text.",
    },
    {
      name: "TitleAmount",
      type: "string | number",
      default: "undefined",
      description:
        "Displays a numeric value or label beside the title (main metric).",
    },
    {
      name: "TitleAmountGreen",
      type: "string | number",
      default: "undefined",
      description:
        "Displays a green badge with an upward trend or positive value.",
    },
    {
      name: "TitleAmountRed",
      type: "string | number",
      default: "undefined",
      description:
        "Displays a red badge with a downward trend or negative value.",
    },
    {
      name: "greenTitle",
      type: "string",
      default: "undefined",
      description: "Label shown before the green badge value.",
    },
    {
      name: "redTitle",
      type: "string",
      default: "undefined",
      description: "Label shown before the red badge value.",
    },
    {
      name: "titleLabel",
      type: "string",
      default: "undefined",
      description: "Additional label displayed next to the title text.",
    },
    {
      name: "fun",
      type: "Function",
      default: "undefined",
      description:
        "Reserved prop for additional functionality. Not actively used in this version.",
    },
    {
      name: "normalCase",
      type: "boolean",
      default: "false",
      description:
        "When true, prevents title text from being converted to uppercase.",
    },
  ],

  usage: `import WidgetSection from "@/components/WidgetSection";
import WidgetCard from "@/components/WidgetCard";

export default function Example() {
  return (
    <WidgetSection
      title="Revenue Overview"
      titleData="FY 2025"
      TitleAmount="$1.2M"
      TitleAmountGreen="+8%"
      greenTitle="Growth"
      layout={3}
      border
      button
      buttonTitle="View Details"
      handleClick={() => console.log("Button Clicked")}
    >
      <WidgetCard title="Sales" value="$800K" />
      <WidgetCard title="Expenses" value="$400K" />
      <WidgetCard title="Profit" value="$400K" />
    </WidgetSection>
  );
}`,

  dependencies: [
    "React",
    "Tailwind CSS",
    "PrimaryButton (custom component)",
    "@mui/material (Chip)",
    "react-icons (FaArrowTrendUp, FaArrowTrendDown)",
  ],

  notes: [
    "Use the `layout` prop to control grid structure dynamically (1–6 columns).",
    "If `border` is true, the section has a visible outline with no top border.",
    "`TitleAmountGreen` and `TitleAmountRed` are displayed inside color-coded badges.",
    "When `button` is enabled, the component renders a `PrimaryButton` for user actions.",
    "Supports smooth slide-up motion (`motion-preset-slide-up-sm`) for animated mounting.",
  ],
};

export const primaryButtonDoc = {
  name: "PrimaryButton",
  file: "src/components/PrimaryButton.jsx",
  overview:
    "The PrimaryButton component is a reusable motion-enabled button designed for primary user actions. It supports animations, loading states, and full style customization through props. Built with Tailwind CSS, Framer Motion, and MUI's CircularProgress spinner.",

  props: [
    {
      name: "title",
      type: "string",
      default: "undefined",
      description: "Text label displayed inside the button.",
    },
    {
      name: "handleSubmit",
      type: "Function",
      default: "undefined",
      description:
        "Callback function executed when the button is clicked. Commonly used to trigger form submissions or API actions.",
    },
    {
      name: "type",
      type: "string",
      default: "undefined",
      description:
        "Specifies the HTML button type, e.g., 'button', 'submit', or 'reset'.",
    },
    {
      name: "fontSize",
      type: "string",
      default: "'text-content leading-5'",
      description:
        "Tailwind font size classes for customizing button text size and line height.",
    },
    {
      name: "externalStyles",
      type: "string",
      default: "undefined",
      description:
        "Additional Tailwind classes to extend or override default button styling.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description:
        "Disables the button and prevents clicks. Also dims the appearance.",
    },
    {
      name: "padding",
      type: "string",
      default: "'px-8 py-2'",
      description: "Custom padding classes for spacing inside the button.",
    },
    {
      name: "className",
      type: "string",
      default: "undefined",
      description:
        "Additional className string for applying contextual or global styles.",
    },
    {
      name: "isLoading",
      type: "boolean",
      default: "false",
      description:
        "Displays a spinner and disables the button while loading. Useful for async actions or form submissions.",
    },
  ],

  usage: `import PrimaryButton from "@/components/PrimaryButton";

export default function Example() {
  return (
    <PrimaryButton
      title="Submit"
      type="submit"
      handleSubmit={() => console.log("Submitted")}
      isLoading={false}
      fontSize="text-sm"
      externalStyles="bg-blue-600 hover:bg-blue-700"
    />
  );
}`,

  dependencies: [
    "React",
    "Tailwind CSS",
    "motion/react (Framer Motion for hover/tap animation)",
    "@mui/material (CircularProgress spinner)",
  ],

  notes: [
    "Button scales up slightly on hover and compresses on tap for a tactile effect.",
    "When `isLoading` is true, a spinner is shown and the button is disabled.",
    "The button supports full customization through Tailwind classes passed via `externalStyles` or `className`.",
    "Use consistent color tokens (e.g., `bg-primary`) across the app for uniform theming.",
  ],
};

export const secondaryButtonDoc = {
  name: "SecondaryButton",
  file: "src/components/SecondaryButton.jsx",
  overview:
    "The SecondaryButton component provides a lightweight alternative to the PrimaryButton for secondary actions. It supports hover/tap animations, disabled and loading states, and is built using Framer Motion and MUI’s CircularProgress spinner.",

  props: [
    {
      name: "title",
      type: "string",
      default: "undefined",
      description: "The text label displayed inside the button.",
    },
    {
      name: "handleSubmit",
      type: "Function",
      default: "undefined",
      description:
        "Callback function triggered when the button is clicked. Commonly used to handle secondary user actions.",
    },
    {
      name: "type",
      type: "string",
      default: "undefined",
      description:
        "Defines the button type attribute (e.g., 'button', 'submit', 'reset').",
    },
    {
      name: "fontSize",
      type: "string",
      default: "'text-content leading-5'",
      description:
        "Tailwind font classes to control text size and vertical spacing.",
    },
    {
      name: "externalStyles",
      type: "string",
      default: "undefined",
      description:
        "Allows custom Tailwind classes to extend or override the base button styling.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description:
        "Disables the button and prevents user interaction. The button also appears visually muted when disabled.",
    },
    {
      name: "isLoading",
      type: "boolean",
      default: "false",
      description:
        "Displays a spinner and disables the button when set to true. Useful for async actions.",
    },
  ],

  usage: `import SecondaryButton from "@/components/SecondaryButton";

export default function Example() {
  return (
    <SecondaryButton
      title="Cancel"
      handleSubmit={() => console.log("Cancelled")}
      type="button"
      isLoading={false}
      externalStyles="hover:bg-gray-300"
    />
  );
}`,

  dependencies: [
    "React",
    "Tailwind CSS",
    "motion/react (Framer Motion for button animations)",
    "@mui/material (CircularProgress spinner)",
  ],

  notes: [
    "Intended for non-primary or cancel-type actions in your UI.",
    "Includes smooth motion scale effects on hover and tap using Framer Motion.",
    "When `isLoading` is true, a spinner appears and the button text dynamically appends 'ing' (e.g., 'Saving').",
    "Use `externalStyles` for adjusting hover, background, or text styles based on the UI theme.",
    "Maintains consistent sizing and padding with PrimaryButton for visual alignment across actions.",
  ],
};

export const uploadFileInputDoc = {
  name: "UploadFileInput",
  file: "src/components/UploadFileInput.jsx",
  overview:
    "The UploadFileInput component provides a user-friendly file upload interface with validation, preview, and deletion options. It supports image and PDF previews within a modal, customizable allowed file types, and integrates seamlessly with MUI’s TextField and Modal components.",

  props: [
    {
      name: "value",
      type: "File | null",
      default: "null",
      description:
        "The currently selected file. If present, the filename is displayed in the input and preview is enabled.",
    },
    {
      name: "onChange",
      type: "Function",
      default: "undefined",
      description:
        "Callback fired when a new file is selected or cleared. Receives the File object or `null`.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables file selection and prevents user interaction.",
    },
    {
      name: "label",
      type: "string",
      default: '"Upload File"',
      description: "Label text shown in the MUI TextField.",
    },
    {
      name: "allowedExtensions",
      type: "Array<string>",
      default: '["jpg", "jpeg", "png", "pdf"]',
      description:
        "List of permitted file extensions. Validation prevents unsupported file types.",
    },
    {
      name: "previewType",
      type: '"auto" | "image" | "pdf" | "none"',
      default: '"auto"',
      description:
        "Defines how the preview is rendered. In `auto` mode, it detects based on file type.",
    },
    {
      name: "id",
      type: "string",
      default: '"file-upload"',
      description:
        "Optional HTML ID for the file input. Useful when multiple instances are present.",
    },
  ],

  usage: `import UploadFileInput from "@/components/UploadFileInput";
import { useState } from "react";

export default function Example() {
  const [file, setFile] = useState(null);

  return (
    <UploadFileInput
      value={file}
      onChange={(newFile) => setFile(newFile)}
      label="Upload Document"
      allowedExtensions={["jpg", "jpeg", "png", "pdf"]}
      previewType="auto"
    />
  );
}`,

  dependencies: [
    "React",
    "@mui/material (TextField, IconButton, Avatar, Box)",
    "react-icons (LuImageUp, MdDelete)",
    "MuiModal (custom component)",
    "Tailwind CSS (for layout and text styling)",
  ],

  notes: [
    "Automatically detects image or PDF files when `previewType` is set to `auto`.",
    "Unsupported file types trigger an alert message listing allowed extensions.",
    "Uses MUI’s TextField as a styled clickable input trigger.",
    "The modal preview uses the `MuiModal` custom component for consistent styling.",
    "File clearing immediately removes both the file and the preview.",
    "Suitable for upload forms, KYC documents, compliance modules, and profile updates.",
  ],
};

export const breadCrumbComponentDoc = {
  name: "BreadCrumbComponent",
  file: "src/components/BreadCrumbComponent.jsx",
  overview:
    "The BreadCrumbComponent dynamically generates breadcrumb navigation links based on the current route and query parameters. It automatically excludes base routes like 'app' and 'dashboard', supports nested routes, and gracefully formats path segments into human-readable labels.",

  props: [],

  usage: `import BreadCrumbComponent from "@/components/BreadCrumbComponent";

export default function ExamplePage() {
  return (
    <div>
      <BreadCrumbComponent />
      {/* Page Content */}
    </div>
  );
}`,

  dependencies: [
    "React",
    "@mui/material (Breadcrumbs, Typography, Link)",
    "react-router-dom (useLocation, useNavigate)",
    "Tailwind CSS (for layout container styling)",
  ],

  notes: [
    "Automatically parses the current `location.pathname` and removes 'app' and 'dashboard' from the breadcrumb display.",
    "Supports navigation through intermediate segments — each clickable breadcrumb navigates to its respective route.",
    "Query parameters (e.g., `?id=123`) are dynamically added as trailing breadcrumb items.",
    "Uses MUI’s `Breadcrumbs`, `Typography`, and `Link` components for consistent design and accessibility.",
    "Applies inline MUI `sx` styling for color and spacing consistency with the primary theme color `#1E3D73`.",
    "Example: If the route is `/app/finance/invoices?id=2025`, the breadcrumb renders: `Finance › Invoices › 2025`.",
  ],
};
export const agTableDoc = {
  name: "AgTable",
  file: "src/components/AgTable.jsx",
  overview:
    "The AgTable component is a reusable data table built using ag-grid-react, enhanced with features like advanced filtering, searching, data export, row selection, and batch actions. It is designed for flexible usage across dashboards, admin panels, and data-driven modules.",

  props: [
    { name: "data", type: "Array", default: "[]", description: "Array of row data objects displayed in the table." },
    { name: "columns", type: "Array", default: "[]", description: "Array of column definitions for ag-grid." },
    { name: "dropdownColumns", type: "Array<string>", default: "[]", description: "Defines which columns will render dropdown filters." },
    { name: "paginationPageSize", type: "number", default: "undefined", description: "Sets pagination page size if pagination is enabled." },
    { name: "exportData", type: "boolean", default: "false", description: "Shows an Export button to download data as CSV." },
    { name: "hideFilter", type: "boolean", default: "false", description: "Hides the filter drawer toggle icon." },
    { name: "rowSelection", type: "string", default: "'single'", description: "Controls selection mode: 'single' or 'multiple'." },
    { name: "search", type: "boolean", default: "false", description: "Enables the top search bar for filtering rows." },
    { name: "tableTitle", type: "string", default: "undefined", description: "Displays a title above the table." },
    { name: "handleClick", type: "Function", default: "undefined", description: "Callback executed when the main action button is clicked." },
    { name: "buttonTitle", type: "string", default: "undefined", description: "Title for the main table action button." },
    { name: "tableHeight", type: "number", default: "400", description: "Defines the height of the ag-grid container in pixels." },
    { name: "enableCheckbox", type: "boolean", default: "false", description: "Enables checkbox selection for rows." },
    { name: "checkAll", type: "boolean", default: "false", description: "Adds a header checkbox for selecting all rows when true." },
    { name: "getRowStyle", type: "Function", default: "undefined", description: "Applies custom styles dynamically to each row." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables table-level interactive elements when true." },
    { name: "handleBatchAction", type: "Function", default: "undefined", description: "Executes a bulk action on selected rows." },
    { name: "isRowSelectable", type: "Function", default: "undefined", description: "Determines which rows can be selected dynamically." },
    { name: "batchButton", type: "string", default: "undefined", description: "Optional title for a batch action button (currently commented)." },
    { name: "hideTitle", type: "boolean", default: "false", description: "Hides the table title bar when true." },
    { name: "tableRef", type: "React.Ref", default: "undefined", description: "External ref to access ag-grid API methods directly." },
    { name: "onSelectionChange", type: "Function", default: "undefined", description: "Callback fired whenever selected rows change." },
  ],

  usage: `import AgTable from "@/components/AgTable";

const columns = [
  { headerName: "Name", field: "name", sortable: true, filter: true },
  { headerName: "Email", field: "email" },
  { headerName: "Role", field: "role" },
];

const data = [
  { name: "Alice", email: "alice@example.com", role: "Admin" },
  { name: "Bob", email: "bob@example.com", role: "User" },
];

export default function Example() {
  return (
    <AgTable
      data={data}
      columns={columns}
      search
      tableTitle="User Management"
      exportData
      enableCheckbox
      checkAll
      dropdownColumns={["role"]}
      onSelectionChange={(rows) => console.log("Selected Rows:", rows)}
    />
  );
}`,

  dependencies: [
    "React (useState, useEffect, useRef, useMemo, useCallback)",
    "ag-grid-react",
    "ag-grid-community/styles/ag-grid.css",
    "ag-grid-community/styles/ag-theme-quartz.css",
    "@mui/material (TextField, MenuItem, Chip)",
    "react-icons (IoFilter, MdFilterAlt, IoIosSearch, etc.)",
    "MuiAside (custom drawer component)",
    "PrimaryButton & SecondaryButton (custom buttons)",
    "Tailwind CSS for layout and typography",
  ],

  notes: [
    "Supports advanced filtering with both text and dropdown filters in a collapsible drawer (via MuiAside).",
    "The search bar filters results across all fields in real time.",
    "Row selection can be single or multiple, with optional checkbox selection for bulk operations.",
    "Export button allows CSV export via ag-grid’s built-in API.",
    "Dynamic chips display active filters, and users can clear individual filters or all at once.",
    "Customizable layout, table title, and button actions make this component suitable for reusable data management views.",
    "The `tableRef` prop allows parent components to programmatically access ag-grid APIs like `exportDataAsCsv()`.",
    "Designed with responsive spacing and integrated Tailwind classes for consistent design.",
  ],
};
export const cardDoc = {
  name: "Card",
  file: "src/components/Card.jsx",
  overview:
    "The Card component is a reusable, motion-animated UI block designed for dashboards, menus, and feature navigation. It supports icons, custom colors, fonts, hover animations, and automatic routing when clicked.",

  props: [
    {
      name: "title",
      type: "string",
      default: "undefined",
      description: "Title text displayed at the center of the card.",
    },
    {
      name: "icon",
      type: "ReactNode",
      default: "undefined",
      description: "Optional icon displayed above the title, usually a React icon element.",
    },
    {
      name: "bgcolor",
      type: "string",
      default: "'#ffffff'",
      description: "Sets the background color of the card.",
    },
    {
      name: "fontColor",
      type: "string",
      default: "'#111111'",
      description: "Sets the text color of the card’s content.",
    },
    {
      name: "fontFamily",
      type: "string",
      default: "'Poppins', sans-serif",
      description: "Defines the font family for the card text.",
    },
    {
      name: "titleColor",
      type: "string",
      default: "inherit",
      description: "Overrides the default title text color.",
    },
    {
      name: "fullHeight",
      type: "boolean",
      default: "false",
      description: "When true, the card height is set to a fixed 240px (`h-60`).",
    },
    {
      name: "route",
      type: "string",
      default: "undefined",
      description:
        "Path to navigate to when the card is clicked. Uses React Router’s `useNavigate`.",
    },
  ],

  usage: `import Card from "@/components/Card";
import { FaUsers } from "react-icons/fa";

export default function Example() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Card
        title="Users"
        icon={<FaUsers />}
        bgcolor="#F9FAFB"
        fontColor="#1E3D73"
        titleColor="#1E3D73"
        route="/app/users"
      />
      <Card
        title="Reports"
        bgcolor="#EAF2FF"
        route="/app/reports"
      />
    </div>
  );
}`,

  dependencies: [
    "React",
    "framer-motion (for hover and scale animations)",
    "react-icons (FaArrowRight and custom icons)",
    "react-router-dom (useNavigate)",
    "Tailwind CSS (for styling and layout)",
  ],

  notes: [
    "On hover, the card slightly scales up (`scale: 1.03`) and reveals an arrow icon in the corner.",
    "Clicking the card automatically navigates to the route specified via `route`.",
    "The icon container expands slightly on hover for visual feedback.",
    "Fully customizable via background, font, and title color props.",
    "Ideal for dashboard menus, feature cards, and quick navigation layouts.",
    "If no icon is provided, the title adjusts to a larger font size for balance.",
  ],
};
export const dataCardDoc = {
  name: "DataCard",
  file: "src/components/DataCard.jsx",
  overview:
    "The DataCard component displays a key data metric with a title, description, and optional navigation action. It’s ideal for dashboards, analytics summaries, or performance overviews, combining clean design with subtle animations.",

  props: [
    {
      name: "title",
      type: "string",
      default: "undefined",
      description: "The heading text displayed at the top of the card.",
    },
    {
      name: "description",
      type: "string",
      default: "undefined",
      description: "Brief text explaining the data or metric being displayed.",
    },
    {
      name: "data",
      type: "string | number",
      default: "undefined",
      description: "The main numeric or text value displayed prominently in the card.",
    },
    {
      name: "route",
      type: "string",
      default: "undefined",
      description:
        "Optional navigation path. When provided, an arrow icon appears that navigates to the given route on click.",
    },
    {
      name: "onClick",
      type: "Function",
      default: "undefined",
      description:
        "Optional callback function executed when the card or arrow is clicked. Intended for custom click handling.",
    },
  ],

  usage: `import DataCard from "@/components/DataCard";

export default function Example() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <DataCard
        title="Total Users"
        description="Active users this month"
        data="1,245"
        route="/app/users"
      />
      <DataCard
        title="Revenue"
        description="Quarterly revenue in USD"
        data="$48,200"
      />
      <DataCard
        title="Tickets"
        description="Open support tickets"
        data="32"
        onClick={() => console.log("Tickets clicked")}
      />
    </div>
  );
}`,

  dependencies: [
    "React",
    "motion/react (for hover/tap animations)",
    "react-icons (FaArrowRight)",
    "react-router-dom (useNavigate for navigation)",
    "Tailwind CSS (for layout, spacing, and responsive design)",
  ],

  notes: [
    "When a `route` is provided, an arrow icon appears that animates on hover and navigates to the specified route.",
    "If `route` is empty or equals '#', the arrow icon is hidden.",
    "The card is responsive, stacking vertically on smaller screens and aligning horizontally on wider layouts.",
    "Hovering the arrow slightly enlarges it and changes its background color to the theme’s primary color.",
    "You can use this component in dashboards or summary sections to highlight metrics like revenue, users, or leads.",
  ],
};
export const detailsFormattedDoc = {
  name: "DetailsFormatted",
  file: "src/components/DetailsFormatted.jsx",
  overview:
    "The DetailsFormatted component is a lightweight utility used for displaying structured title–value pairs in profile, detail, or summary views. It ensures consistent spacing, alignment, and optional uppercase formatting for clean information display.",

  props: [
    {
      name: "title",
      type: "string",
      default: "undefined",
      description: "Label text displayed before the value (e.g., 'Email', 'Department').",
    },
    {
      name: "detail",
      type: "string | number | ReactNode",
      default: "undefined",
      description:
        "The actual value or detail corresponding to the title. If empty, a placeholder '—' is shown.",
    },
    {
      name: "gap",
      type: "string",
      default: '"w-[50%]"',
      description:
        "Tailwind width class that controls the space allocated for the title column.",
    },
    {
      name: "upperCase",
      type: "boolean",
      default: "false",
      description:
        "When true, converts the `detail` text to uppercase for standardized formatting.",
    },
  ],

  usage: `import DetailsFormatted from "@/components/DetailsFormatted";

export default function Example() {
  return (
    <div className="space-y-3">
      <DetailsFormatted title="Name" detail="John Doe" />
      <DetailsFormatted title="Department" detail="Finance" gap="w-[40%]" />
      <DetailsFormatted title="Status" detail="Active" upperCase />
      <DetailsFormatted title="Email" detail="" />
    </div>
  );
}`,

  dependencies: ["React", "Tailwind CSS (for layout and typography styling)"],

  notes: [
    "Displays title and detail in a horizontally aligned layout using Tailwind’s flex utilities.",
    "If `detail` is null or undefined, a placeholder em dash ('—') is shown for clarity.",
    "The `gap` prop controls how much width the title occupies (default: 50%).",
    "Adding `upperCase` transforms the detail text into uppercase — useful for codes, IDs, or statuses.",
    "Ideal for use inside detail modals, profile pages, or administrative summary views.",
    "Text wraps neatly and remains responsive on smaller screens.",
  ],
};
export const financeCardDoc = {
  name: "FinanceCard",
  file: "src/components/FinanceCard.jsx",
  overview:
    "The FinanceCard component presents financial metrics or summary data in a clean, tabular layout. It supports dynamic coloring for positive and negative values, clickable navigation links, and optional time period display. Designed for dashboards and analytics views in finance modules.",

  props: [
    {
      name: "cardTitle",
      type: "string",
      default: "undefined",
      description: "The title text displayed at the top of the card.",
    },
    {
      name: "timePeriod",
      type: "string",
      default: "undefined",
      description:
        "Optional time period label shown beside the title (e.g., 'Q1 2025' or 'Apr–Jun').",
    },
    {
      name: "descriptionData",
      type: "Array<{ title: string, value: string | number, route?: string, stateData?: object }>",
      default: "[]",
      description:
        "Array of key-value pairs displayed inside the card. Each item can include an optional navigation `route` and state data.",
    },
    {
      name: "highlightNegativePositive",
      type: "boolean",
      default: "false",
      description:
        "When true, numeric values automatically color red for negatives and green for positives.",
    },
    {
      name: "disableColorChange",
      type: "boolean",
      default: "false",
      description:
        "Disables automatic color changes from `highlightNegativePositive` when true.",
    },
    {
      name: "titleCenter",
      type: "boolean",
      default: "false",
      description:
        "Centers the card title and hides the time period display when enabled.",
    },
    {
      name: "stateData",
      type: "object",
      default: "{}",
      description:
        "Optional data object passed via navigation when clicking linked rows.",
    },
  ],

  usage: `import FinanceCard from "@/components/FinanceCard";

export default function Example() {
  const metrics = [
    { title: "Total Revenue", value: "$120,000", route: "/app/finance/revenue" },
    { title: "Expenses", value: "-$45,000", route: "/app/finance/expenses" },
    { title: "Net Profit", value: "$75,000" },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      <FinanceCard
        cardTitle="Q1 Financial Overview"
        timePeriod="Jan–Mar 2025"
        descriptionData={metrics}
        highlightNegativePositive
      />
    </div>
  );
}`,

  dependencies: [
    "React",
    "react-router-dom (useNavigate for route navigation)",
    "Tailwind CSS (for layout, spacing, and typography)",
  ],

  notes: [
    "Each row displays a metric with its title on the left and value on the right.",
    "When `highlightNegativePositive` is enabled, values below zero appear red, and positive ones green.",
    "If `route` is defined for an item, clicking its title navigates to that route, optionally passing `stateData`.",
    "Setting `titleCenter` centers the title and omits the time period column, ideal for standalone cards.",
    "Each item is separated with a dotted horizontal line for readability.",
    "Perfect for displaying financial KPIs, monthly summaries, or comparative statistics in admin dashboards.",
  ],
};

export const permissionsTableDoc = {
  name: "PermissionsTable",
  file: "src/components/PermissionsTable.jsx",
  overview:
    "The PermissionsTable component provides a structured interface to view and manage access permissions across modules and submodules. It uses Material UI tables and checkboxes to toggle 'View' and 'Edit' rights for each submodule, updating the parent component in real time.",

  props: [
    {
      name: "modules",
      type: "Array",
      default: "[]",
      description:
        "An array of permission modules. Each module contains a name and a list of submodules, each with its own grantedActions array.",
    },
    {
      name: "onPermissionChange",
      type: "Function",
      default: "undefined",
      description:
        "Callback function triggered whenever permissions are updated. Receives the updated modules array as an argument.",
    },
  ],

  usage: `import PermissionsTable from "@/components/PermissionsTable";
import { useState } from "react";

export default function Example() {
  const [permissions, setPermissions] = useState([
    {
      name: "Finance",
      submodules: [
        { submoduleName: "Invoices", grantedActions: ["View"] },
        { submoduleName: "Payments", grantedActions: ["View", "Edit"] },
      ],
    },
    {
      name: "HR",
      submodules: [
        { submoduleName: "Attendance", grantedActions: [] },
        { submoduleName: "Payroll", grantedActions: ["View"] },
      ],
    },
  ]);

  return (
    <PermissionsTable
      modules={permissions}
      onPermissionChange={(updated) => setPermissions(updated)}
    />
  );
}`,

  dependencies: [
    "React (useState)",
    "@mui/material (Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper)",
    "Tailwind CSS (for spacing, typography, and grid layout)",
  ],

  notes: [
    "Displays each module in a scrollable table container for easy navigation of large datasets.",
    "Each submodule has 'Read' and 'Write' checkboxes corresponding to 'View' and 'Edit' actions.",
    "The component maintains local state (`permissions`) and syncs updates upward via `onPermissionChange`.",
    "Supports real-time toggling — checking or unchecking a box immediately updates the permission state.",
    "The design scales well for multi-module access control systems, making it ideal for role-based permissions management.",
    "Table containers have fixed height (400px) for consistent scrolling behavior in long lists.",
    "The code can easily be extended to support additional actions like 'Delete' or 'Approve' if needed.",
  ],
};
export const scrollToTopDoc = {
  name: "ScrollToTop",
  file: "src/components/ScrollToTop.jsx",
  overview:
    "The ScrollToTop component automatically resets the scroll position of a specified container to the top whenever the route changes. It's especially useful for maintaining UX consistency in SPAs with scrollable content areas.",

  props: [
    {
      name: "targetId",
      type: "string",
      default: '"scrollable-content"',
      description:
        "The HTML `id` of the scrollable container whose position will reset to the top on navigation. Defaults to 'scrollable-content'.",
    },
  ],

  usage: `import ScrollToTop from "@/components/ScrollToTop";

export default function AppLayout() {
  return (
    <div id="scrollable-content" className="overflow-y-auto h-screen">
      {/* Scroll-to-top utility */}
      <ScrollToTop targetId="scrollable-content" />

      {/* Your routes/components */}
      <Outlet />
    </div>
  );
}`,

  dependencies: [
    "React (useEffect)",
    "react-router-dom (useLocation for detecting route changes)",
  ],

  notes: [
    "Listens for changes in the current `pathname` and scrolls the target container to the top.",
    "If no `targetId` is provided, defaults to scrolling the element with id `scrollable-content`.",
    "Uses `scrollTo({ top: 0, behavior: 'instant' })` for immediate scroll reset.",
    "Improves UX when navigating between pages or components within a scrollable layout.",
    "Can be placed inside layout or route wrapper components to ensure consistent behavior across routes.",
    "If you want smooth scroll transitions, replace `'instant'` with `'smooth'` in the `behavior` property.",
  ],
};

export const statusChipDoc = {
  name: "StatusChip",
  file: "src/components/StatusChip.jsx",
  overview:
    "The StatusChip component provides a color-coded visual representation of an item's status. It uses Material UI’s Chip component and dynamically applies colors based on a predefined status-color mapping. Ideal for use in tables, dashboards, or detail views to quickly convey the state of a record.",

  props: [
    {
      name: "status",
      type: "string",
      default: "undefined",
      description:
        "The status label to display. Determines the chip’s background and text color based on predefined color mappings.",
    },
  ],

  usage: `import StatusChip from "@/components/StatusChip";

export default function Example() {
  return (
    <div className="flex gap-4 flex-wrap">
      <StatusChip status="Pending" />
      <StatusChip status="Active" />
      <StatusChip status="Rejected" />
      <StatusChip status="Completed" />
      <StatusChip status="Revoked" />
    </div>
  );
}`,

  dependencies: ["React", "@mui/material (Chip component)"],

  notes: [
    "Maps each status (e.g., 'Pending', 'Completed', 'Rejected') to a specific background and text color for visual clarity.",
    "If an unrecognized status is passed, the chip defaults to a gray background with white text.",
    "Colors are defined in the `statusColorMap` object for consistency across modules like Tasks, Tickets, Finance, and HR.",
    "Useful in tables, dashboards, and detail cards for status indication.",
    "Supports a wide range of statuses including financial, workflow, and operational ones such as 'Paid', 'Cancelled', 'Occupied', etc.",
    "You can extend `statusColorMap` to add new status types or adjust color themes globally.",
  ],
};
export const threeDotMenuDoc = {
  name: "ThreeDotMenu",
  file: "src/components/ThreeDotMenu.jsx",
  overview:
    "The ThreeDotMenu component provides a compact, reusable contextual action menu triggered by a three-dot icon. It is ideal for tables, cards, or list items where you need to display additional actions like View, Edit, or Delete.",

  props: [
    {
      name: "rowId",
      type: "string | number",
      default: "undefined",
      description:
        "Optional identifier for the row or record associated with the menu actions.",
    },
    {
      name: "menuItems",
      type: "Array<{ label: string, onClick: Function, disabled?: boolean }>",
      default: "[]",
      description:
        "Array of menu item objects. Each item defines a label, click handler, and optional disabled state.",
    },
    {
      name: "isLoading",
      type: "boolean",
      default: "false",
      description:
        "Displays a spinner inside the menu when true, typically during async actions.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description:
        "Disables the three-dot button and prevents the popover from opening.",
    },
  ],

  usage: `import ThreeDotMenu from "@/components/ThreeDotMenu";
import { useState } from "react";

export default function Example() {
  const [loading, setLoading] = useState(false);

  const handleEdit = () => alert("Edit clicked!");
  const handleDelete = () => {
    setLoading(true);
    setTimeout(() => {
      alert("Deleted successfully!");
      setLoading(false);
    }, 1000);
  };

  const menuItems = [
    { label: "View Details", onClick: handleEdit },
    { label: "Edit", onClick: handleEdit },
    { label: "Delete", onClick: handleDelete },
  ];

  return (
    <ThreeDotMenu
      rowId={1}
      menuItems={menuItems}
      isLoading={loading}
    />
  );
}`,

  dependencies: [
    "React (useState)",
    "@mui/material (Popover, IconButton, Button, CircularProgress)",
    "react-icons (MdMoreHoriz for the menu icon)",
    "Tailwind CSS (for styling, hover effects, and spacing)",
  ],

  notes: [
    "Displays a three-dot icon (`MdMoreHoriz`) that opens a contextual popover when clicked.",
    "Each menu item can have a label, click handler, and disabled state.",
    "The `isLoading` prop shows a small spinner to indicate an ongoing operation.",
    "The `Cancel` label is styled differently (red background and text) for destructive actions.",
    "Closes automatically after any enabled menu item is clicked.",
    "Useful for table row actions, dashboard cards, and compact dropdown controls.",
    "Popover anchors automatically below the three-dot button with subtle slide-down motion.",
  ],
};
export const muiModalDoc = {
  name: "MuiModal",
  file: "src/components/MuiModal.jsx",
  overview:
    "The MuiModal component is a reusable modal wrapper built with Material UI’s `Modal` and enhanced using Framer Motion for smooth entry and exit animations. It provides a styled header, close button, and flexible content area for forms, previews, or details.",

  props: [
    {
      name: "open",
      type: "boolean",
      default: "false",
      description: "Controls whether the modal is visible or hidden.",
    },
    {
      name: "onClose",
      type: "Function",
      default: "undefined",
      description:
        "Callback function triggered when the modal’s close icon is clicked or the backdrop is pressed.",
    },
    {
      name: "title",
      type: "string",
      default: "undefined",
      description:
        "Text displayed in the modal’s header section, typically used for titles or headings.",
    },
    {
      name: "children",
      type: "ReactNode",
      default: "undefined",
      description:
        "The modal body content, allowing you to render forms, details, or custom UI components inside.",
    },
    {
      name: "headerBackground",
      type: "string",
      default: "undefined",
      description:
        "Optional prop to set a custom background color for the modal header.",
    },
  ],

  usage: `import MuiModal from "@/components/MuiModal";
import { useState } from "react";
import { Button } from "@mui/material";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <MuiModal
        open={open}
        onClose={() => setOpen(false)}
        title="User Details"
      >
        <p className="text-gray-700">
          This is a sample modal content area. You can add forms, tables, or custom elements here.
        </p>
      </MuiModal>
    </div>
  );
}`,

  dependencies: [
    "React (useRef)",
    "@mui/material (Modal, Box, IconButton)",
    "motion/react (AnimatePresence, motion) for animation",
    "react-icons (IoMdClose for the close icon)",
    "Tailwind CSS (for layout, spacing, and visual consistency)",
  ],

  notes: [
    "Combines MUI’s `Modal` with Framer Motion animations for smooth transitions on open and close.",
    "Includes a fixed-position container centered both vertically and horizontally.",
    "Header includes a close button (`IoMdClose`) and optional background color customization.",
    "Content area supports scroll with a maximum height of 90vh for long content.",
    "Uses Tailwind utility classes for consistent styling and responsive layout.",
    "Ideal for use cases such as adding or viewing details, editing forms, or file previews.",
    "You can customize animation direction or duration by modifying Framer Motion’s `initial`, `animate`, and `exit` properties.",
  ],
};
export const muiAsideDoc = {
  name: "MuiAside",
  file: "src/components/MuiAside.jsx",
  overview:
    "The MuiAside component is a right-anchored side drawer built with Material UI’s `Drawer`. It provides a structured, scrollable container for filters, forms, or secondary content. It includes a styled header with a close button and a customizable title.",

  props: [
    {
      name: "open",
      type: "boolean",
      default: "false",
      description:
        "Controls whether the drawer is open or closed.",
    },
    {
      name: "onClose",
      type: "Function",
      default: "undefined",
      description:
        "Callback function triggered when the close icon is clicked or when the backdrop is pressed.",
    },
    {
      name: "title",
      type: "string",
      default: "undefined",
      description:
        "Title displayed in the drawer header. Commonly used to describe the panel’s purpose (e.g., 'Advanced Filters', 'Add Record').",
    },
    {
      name: "children",
      type: "ReactNode",
      default: "undefined",
      description:
        "The content inside the drawer. Can include forms, filters, or other components.",
    },
  ],

  usage: `import MuiAside from "@/components/MuiAside";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Filter Panel
      </Button>

      <MuiAside open={open} onClose={() => setOpen(false)} title="Advanced Filters">
        <div className="flex flex-col gap-4">
          <TextField label="Name" variant="outlined" size="small" fullWidth />
          <TextField label="Status" variant="outlined" size="small" fullWidth />
          <Button variant="contained">Apply Filters</Button>
        </div>
      </MuiAside>
    </div>
  );
}`,

  dependencies: [
    "React",
    "@mui/material (Drawer, IconButton)",
    "@mui/icons-material (Close)",
    "Tailwind CSS (for spacing, typography, and layout)",
  ],

  notes: [
    "Anchored to the right by default (`anchor='right'`).",
    "Includes a header with a close icon (`CloseIcon`) and title label.",
    "Styled using Tailwind and Material UI for consistent spacing and color balance.",
    "Drawer width is fixed at 600px, adjustable via Tailwind’s `w-[600px]` class.",
    "Content section is vertically scrollable with a max height equal to the viewport.",
    "Ideal for displaying contextual information such as advanced filters, detailed forms, or record previews.",
    "Used within the `AgTable` component for its filter panel implementation.",
  ],
};
export const normalBarGraphDoc = {
  name: "NormalBarGraph",
  file: "src/components/graphs/NormalBarGraph.jsx",
  overview:
    "The NormalBarGraph component is a reusable and configurable bar chart built with ApexCharts. It supports dynamic filtering by department or year, optional legends, and smooth navigation between datasets. Ideal for analytics dashboards or data visualization modules.",

  props: [
    {
      name: "data",
      type: "Array",
      default: "[]",
      description:
        "The dataset passed to ApexCharts, typically an array of series objects (e.g., [{ name: 'Sales', data: [10, 20, 30] }]).",
    },
    {
      name: "options",
      type: "Object",
      default: "{}",
      description:
        "ApexCharts configuration object defining chart style, axes, colors, labels, etc.",
    },
    {
      name: "height",
      type: "number",
      default: "350",
      description: "Defines the chart height in pixels.",
    },
    {
      name: "customLegend",
      type: "boolean",
      default: "false",
      description:
        "Displays a custom dual-color legend section when true, showing key values for comparison.",
    },
    {
      name: "firstParam",
      type: "{ title: string, data: string | number }",
      default: "undefined",
      description:
        "Used in custom legend to display the first metric’s title and value (e.g., 'Revenue: ₹500K').",
    },
    {
      name: "secondParam",
      type: "{ title: string, data: string | number }",
      default: "undefined",
      description:
        "Used in custom legend to display the second metric’s title and value (e.g., 'Profit: ₹300K').",
    },
    {
      name: "year",
      type: "boolean",
      default: "false",
      description:
        "Enables a year selector dropdown when true, allowing the user to switch between predefined financial years.",
    },
    {
      name: "departments",
      type: "Array<string>",
      default: "undefined",
      description:
        "Array of department names used for filtering and navigation (e.g., ['Sales', 'Marketing', 'IT']).",
    },
    {
      name: "singleParam",
      type: "boolean",
      default: "false",
      description:
        "Filters the data array by matching department names against the `name` field of each dataset entry.",
    },
    {
      name: "doubleParam",
      type: "boolean",
      default: "false",
      description:
        "Filters the data array by matching department names against the `group` field of each dataset entry.",
    },
  ],

  usage: `import NormalBarGraph from "@/components/graphs/NormalBarGraph";

const chartOptions = {
  chart: { id: "example-bar", toolbar: { show: false } },
  xaxis: { categories: ["Jan", "Feb", "Mar", "Apr"] },
  dataLabels: { enabled: false },
  colors: ["#1E3D73", "#00A86B"],
};

const chartData = [
  { name: "Revenue", data: [40, 55, 75, 90] },
  { name: "Profit", data: [25, 45, 65, 80] },
];

export default function Example() {
  return (
    <NormalBarGraph
      data={chartData}
      options={chartOptions}
      height={360}
      year
      customLegend
      firstParam={{ title: "Revenue", data: "₹2.5L" }}
      secondParam={{ title: "Profit", data: "₹1.8L" }}
      departments={["Sales", "Marketing", "IT"]}
      singleParam
    />
  );
}`,

  dependencies: [
    "React (useState)",
    "react-apexcharts (Chart)",
    "@mui/material (Select, MenuItem, FormControl, Button)",
    "SecondaryButton (custom navigation buttons)",
    "react-icons (MdNavigateBefore, MdNavigateNext)",
    "Tailwind CSS (for layout, spacing, and style consistency)",
  ],

  notes: [
    "Supports both singleParam and doubleParam modes to match data by `name` or `group` key.",
    "Includes smooth department navigation using Previous/Next buttons.",
    "Custom legend feature helps highlight comparative KPIs in a clean two-column layout.",
    "Year dropdown enables user-controlled financial year filtering.",
    "Chart height and Apex options are fully configurable.",
    "Automatically disables zooming for simpler bar chart visuals.",
    "Best used in dashboards for visualizing trends, metrics, and performance comparisons.",
  ],
};
export const pieChartMuiDoc = {
  name: "PieChartMui",
  file: "src/components/graphs/PieChartMui.jsx",
  overview:
    "The PieChartMui component renders a responsive, animated pie chart using ApexCharts. It supports dynamic resizing through the `useResponsiveChart` hook and allows optional custom legends for displaying contextual labels or metrics below the chart.",

  props: [
    {
      name: "data",
      type: "Array<{ label: string, value: number | string }>",
      default: "[]",
      description:
        "Array of data objects representing each pie segment. Each object should include a label and a numeric or string value.",
    },
    {
      name: "options",
      type: "Object",
      default: "{}",
      description:
        "ApexCharts configuration object defining chart settings such as labels, colors, legend, and responsiveness.",
    },
    {
      name: "width",
      type: "number",
      default: "320",
      description: "Defines the width of the pie chart in pixels.",
    },
    {
      name: "height",
      type: "number",
      default: "320",
      description: "Defines the height of the pie chart container in pixels.",
    },
    {
      name: "customLegend",
      type: "ReactNode",
      default: "undefined",
      description:
        "Optional custom legend component displayed below the chart. Can contain labels, metrics, or styled indicators.",
    },
  ],

  usage: `import PieChartMui from "@/components/graphs/PieChartMui";

const pieData = [
  { label: "Marketing", value: 40 },
  { label: "Sales", value: 30 },
  { label: "IT", value: 20 },
  { label: "HR", value: 10 },
];

const pieOptions = {
  labels: pieData.map((item) => item.label),
  colors: ["#1E3D73", "#00A86B", "#FFD700", "#FF6347"],
  legend: { position: "bottom" },
  dataLabels: { enabled: true },
};

export default function Example() {
  return (
    <PieChartMui
      data={pieData}
      options={pieOptions}
      width={350}
      height={350}
      customLegend={
        <div className="flex justify-around w-full text-sm text-gray-700">
          <div>Marketing - 40%</div>
          <div>Sales - 30%</div>
          <div>IT - 20%</div>
          <div>HR - 10%</div>
        </div>
      }
    />
  );
}`,

  dependencies: [
    "React (useRef, useState)",
    "@mui/material (useMediaQuery)",
    "react-apexcharts (ReactApexChart)",
    "useResponsiveChart (custom hook for adaptive resizing)",
    "Tailwind CSS (for layout and flex utilities)",
  ],

  notes: [
    "Integrates ApexCharts’ pie chart into a responsive React component.",
    "Utilizes a custom `useResponsiveChart` hook to automatically re-render the chart on resize for better responsiveness.",
    "Legend position defaults to bottom but can be customized through `options.legend`.",
    "Disables zooming and chart animations for consistent static visuals in dashboards.",
    "Accepts a `customLegend` prop for creating fully styled, branded legends under the chart.",
    "Ideal for use in dashboard summary cards, percentage breakdowns, and proportional comparisons.",
    "The chart is horizontally scrollable (`overflow-x-scroll`) to handle narrow containers gracefully.",
  ],
};
export const dateBasedGraphDoc = {
  name: "DateBasedGraph",
  file: "src/components/graphs/DateBasedGraph.jsx",
  overview:
    "The DateBasedGraph component aggregates date-based data into fiscal year–wise monthly bar charts. It leverages the YearlyGraph component for visualization and dynamically calculates totals, fiscal year grouping, and month-based categorization using Day.js.",

  props: [
    {
      name: "rawData",
      type: "Array<Object>",
      default: "[]",
      description:
        "Array of data objects containing a date field (and optionally numeric fields) to be visualized. Each entry should include at least the key defined by `dateKey`.",
    },
    {
      name: "instanceTitle",
      type: "string",
      default: '""',
      description:
        "Optional title label displayed alongside the total count or value for the selected fiscal year.",
    },
    {
      name: "dateKey",
      type: "string",
      default: '"date"',
      description:
        "Specifies the key in `rawData` objects that contains the date value. Used for fiscal year and month grouping.",
    },
    {
      name: "name",
      type: "string",
      default: '"Data"',
      description:
        "Label for the data series displayed in the chart (e.g., 'Leads', 'Sales').",
    },
    {
      name: "valueExtractor",
      type: "Function",
      default: "() => 1",
      description:
        "Function that extracts or computes a numeric value from each `rawData` entry. Useful for summing metrics or counts.",
    },
    {
      name: "yAxisTitle",
      type: "string",
      default: '"Count"',
      description: "Text label for the Y-axis, typically representing the metric name.",
    },
    {
      name: "yAxisMax",
      type: "number",
      default: "50",
      description:
        "Sets the maximum Y-axis value to control vertical scaling of the bar chart.",
    },
    {
      name: "chartTitle",
      type: "string",
      default: '"Date Based Graph"',
      description: "Title displayed at the top of the chart.",
    },
  ],

  usage: `import DateBasedGraph from "@/components/graphs/DateBasedGraph";

const sampleData = [
  { date: "2024-04-15", value: 10 },
  { date: "2024-05-20", value: 25 },
  { date: "2024-11-08", value: 18 },
  { date: "2025-02-14", value: 22 },
  { date: "2025-04-07", value: 30 },
];

export default function Example() {
  return (
    <DateBasedGraph
      rawData={sampleData}
      dateKey="date"
      name="Leads Generated"
      instanceTitle="Total Leads"
      yAxisTitle="Count"
      yAxisMax={50}
      chartTitle="Leads Per Fiscal Year"
      valueExtractor={(item) => item.value}
    />
  );
}`,

  dependencies: [
    "React (useMemo, useState)",
    "dayjs (for date parsing and fiscal year grouping)",
    "YearlyGraph (for rendering the final grouped chart)",
    "Tailwind CSS (for layout and styling)",
  ],

  notes: [
    "Automatically detects fiscal year boundaries — months Jan–Mar are grouped under the previous FY.",
    "Groups and sorts data by month labels in `MMM-YY` format.",
    "Calculates fiscal year totals dynamically and updates the display upon selection.",
    "Uses Day.js for efficient and readable date manipulation.",
    "Delegates rendering and interactivity to the `YearlyGraph` component for a consistent chart layout.",
    "Clicking a bar highlights its FY and updates the total label at the top.",
    "Ideal for visualizing metrics such as revenue, leads, or attendance trends over financial years.",
    "Disables tooltips for a clean data display (customizable in the options).",
  ],
};
export const yearlyGraphDoc = {
  name: "YearlyGraph",
  file: "src/components/graphs/YearlyGraph.jsx",
  overview:
    "The YearlyGraph component renders fiscal year–based bar charts using the BarGraph component inside a WidgetSection layout. It provides navigation between financial years, dynamic data filtering, and configurable chart appearance — ideal for dashboards showing yearly metrics or trends.",

  props: [
    {
      name: "options",
      type: "Object",
      default: "{}",
      description:
        "ApexCharts configuration object defining axes, colors, tooltips, and layout properties.",
    },
    {
      name: "data",
      type: "Array<Object>",
      default: "[]",
      description:
        "Array of chart data objects. Each object should include either a `name` or `group` field corresponding to fiscal year identifiers (e.g., 'FY 2024-25').",
    },
    {
      name: "dataPoint",
      type: "string",
      default: '"name"',
      description:
        "Determines which key ('name' or 'group') should be used for year-based filtering in the data array.",
    },
    {
      name: "title",
      type: "string",
      default: '"Title not given"',
      description:
        "Main title displayed at the top of the chart container (via WidgetSection).",
    },
    {
      name: "titleAmount",
      type: "string | number",
      default: '""',
      description:
        "Displays a numeric or text metric next to the title — typically total values or KPIs.",
    },
    {
      name: "TitleAmountGreen",
      type: "string | number",
      default: "undefined",
      description:
        "Optional green-highlighted amount for representing growth or positive data.",
    },
    {
      name: "TitleAmountRed",
      type: "string | number",
      default: "undefined",
      description:
        "Optional red-highlighted amount for representing loss or negative data.",
    },
    {
      name: "chartId",
      type: "string",
      default: '""',
      description: "Unique chart identifier (used by ApexCharts).",
    },
    {
      name: "responsiveResize",
      type: "boolean",
      default: "false",
      description:
        "When true, enables dynamic resizing behavior for the chart when the container changes width.",
    },
    {
      name: "secondParam",
      type: "boolean",
      default: "false",
      description:
        "Optional flag passed to the BarGraph component for rendering dual-series or comparison charts.",
    },
    {
      name: "chartHeight",
      type: "number",
      default: "undefined",
      description: "Defines the height of the bar chart (in pixels).",
    },
    {
      name: "currentYear",
      type: "boolean",
      default: "false",
      description:
        "If true, starts the component at the latest fiscal year instead of the first one.",
    },
    {
      name: "onYearChange",
      type: "Function",
      default: "undefined",
      description:
        "Callback fired whenever the active fiscal year changes — useful for syncing external data or UI.",
    },
    {
      name: "dateKey",
      type: "string",
      default: "undefined",
      description:
        "If provided, helps infer the correct fiscal year based on the first data entry's date field.",
    },
  ],

  usage: `import YearlyGraph from "@/components/graphs/YearlyGraph";

const chartData = [
  {
    group: "FY 2024-25",
    name: "Revenue",
    data: [50, 70, 90, 60, 100, 80, 110, 90, 95, 120, 105, 130],
  },
  {
    group: "FY 2025-26",
    name: "Revenue",
    data: [60, 85, 95, 70, 115, 90, 120, 100, 110, 130, 125, 140],
  },
];

const chartOptions = {
  chart: { id: "revenue-graph", toolbar: { show: false } },
  xaxis: { categories: [] },
  dataLabels: { enabled: false },
  colors: ["#1E3D73"],
};

export default function Example() {
  return (
    <YearlyGraph
      title="Revenue Growth"
      titleAmount="₹2.4 Cr"
      TitleAmountGreen="+15%"
      options={chartOptions}
      data={chartData}
      dataPoint="group"
      chartHeight={360}
      responsiveResize
      onYearChange={(year) => console.log("Changed to:", year)}
    />
  );
}`,

  dependencies: [
    "React (useEffect, useState)",
    "WidgetSection (layout wrapper with title and totals)",
    "BarGraph (ApexCharts-based bar chart component)",
    "SecondaryButton (for navigation between years)",
    "react-icons (MdNavigateBefore, MdNavigateNext)",
    "Tailwind CSS (for spacing and flexbox layout)",
  ],

  notes: [
    "Predefines two fiscal years: FY 2024-25 and FY 2025-26, with automatic month label assignment.",
    "Filters data dynamically based on the active fiscal year and dataPoint key ('name' or 'group').",
    "Supports navigation using Previous and Next buttons powered by `SecondaryButton`.",
    "Integrates seamlessly with `WidgetSection` for consistent dashboard design.",
    "Automatically disables chart zoom for a static, presentation-ready appearance.",
    "Ideal for displaying revenue, lead count, or operational performance across years.",
    "The `onYearChange` callback allows synchronization with parent components or data loaders.",
  ],
};
export const yearWiseTableDoc = {
  name: "YearWiseTable",
  file: "src/components/tables/YearWiseTable.jsx",
  overview:
    "The YearWiseTable component wraps the AgTable component with advanced date range filtering and monthly data summarization. It automatically detects the most relevant date range (current or latest month), highlights available data days in the calendar, and supports CSV export, batch actions, and data formatting.",

  props: [
    {
      name: "data",
      type: "Array<Object>",
      default: "[]",
      description:
        "Table dataset. Each object represents a row in the table. Must include a valid date field defined by `dateColumn`.",
    },
    {
      name: "columns",
      type: "Array<Object>",
      default: "[]",
      description:
        "Column definitions compatible with AgGrid. Date fields are automatically formatted using Day.js based on the `formatDate` or `formatTime` props.",
    },
    {
      name: "dateColumn",
      type: "string",
      default: "undefined",
      description:
        "Specifies the key in `data` used for date filtering and highlighting in the date picker.",
    },
    {
      name: "formatTime",
      type: "boolean",
      default: "false",
      description:
        "If true, formats date columns to show time (e.g., '02:15 PM').",
    },
    {
      name: "formatDate",
      type: "boolean",
      default: "true",
      description:
        "If true, formats date columns in 'DD-MM-YYYY' format for readability.",
    },
    {
      name: "tableHeight",
      type: "number",
      default: "300",
      description: "Sets the height of the AgTable container (in pixels).",
    },
    {
      name: "tableTitle",
      type: "string",
      default: "undefined",
      description: "Displays a title above the table, aligned left.",
    },
    {
      name: "buttonTitle",
      type: "string",
      default: "undefined",
      description:
        "Label for an action button rendered next to the calendar and export buttons.",
    },
    {
      name: "handleSubmit",
      type: "Function",
      default: "undefined",
      description: "Callback function triggered when the primary button is clicked.",
    },
    {
      name: "checkbox",
      type: "boolean",
      default: "false",
      description:
        "If true, enables checkbox selection in the table using AgTable’s checkbox mode.",
    },
    {
      name: "checkAll",
      type: "boolean",
      default: "false",
      description: "If true, allows selecting all rows using a header checkbox.",
    },
    {
      name: "exportData",
      type: "boolean",
      default: "false",
      description:
        "If true, enables CSV export using AgGrid’s built-in export function.",
    },
    {
      name: "dropdownColumns",
      type: "Array<string>",
      default: "[]",
      description:
        "Columns to include as filterable dropdowns inside AgTable’s filter drawer.",
    },
    {
      name: "handleBatchAction",
      type: "Function",
      default: "undefined",
      description:
        "Callback executed with selected rows when a batch action button is triggered.",
    },
    {
      name: "batchButton",
      type: "string",
      default: "undefined",
      description:
        "Label for the batch action button (visible when rows are selected).",
    },
    {
      name: "isRowSelectable",
      type: "Function",
      default: "undefined",
      description:
        "Custom row selection rule — a function returning true/false for each row.",
    },
    {
      name: "hideTitle",
      type: "boolean",
      default: "true",
      description: "Hides the table title when true.",
    },
    {
      name: "search",
      type: "boolean",
      default: "true",
      description: "Enables text search for the table data.",
    },
    {
      name: "onMonthChange",
      type: "Function",
      default: "undefined",
      description:
        "Callback triggered when the user selects a new month or date range. Returns the computed total for that range.",
    },
    {
      name: "totalKey",
      type: "string",
      default: '"actualAmount"',
      description:
        "Specifies the key used to calculate the total amount for the selected range.",
    },
  ],

  usage: `import YearWiseTable from "@/components/tables/YearWiseTable";

const sampleData = [
  { date: "2025-03-02", projectName: "Building A", actualAmount: "12000" },
  { date: "2025-03-14", projectName: "Building B", actualAmount: "8000" },
  { date: "2025-02-21", projectName: "Building C", actualAmount: "6000" },
];

const columns = [
  { headerName: "Project", field: "projectName" },
  { headerName: "Amount", field: "actualAmount" },
  { headerName: "Date", field: "date" },
];

export default function Example() {
  return (
    <YearWiseTable
      data={sampleData}
      columns={columns}
      dateColumn="date"
      tableTitle="Monthly Expenses"
      buttonTitle="Add Record"
      handleSubmit={() => console.log("New Record")}
      exportData
      onMonthChange={(total) => console.log("Month total:", total)}
    />
  );
}`,

  dependencies: [
    "React (useState, useMemo, useEffect, useRef)",
    "@mui/material (Popover, IconButton)",
    "react-date-range (DateRangePicker)",
    "date-fns (addDays, isWithinInterval)",
    "dayjs (for date manipulation and formatting)",
    "AgTable (for tabular rendering and filtering)",
    "PrimaryButton (for UI actions)",
    "react-icons (MdCalendarToday)",
    "humanDate utility for formatted date strings",
    "Tailwind CSS for layout and styling",
  ],

  notes: [
    "Automatically detects the most recent month with available data and sets it as the default range.",
    "Highlights valid data dates inside the calendar for better user guidance.",
    "Provides a modern date picker UI via `react-date-range` with month navigation.",
    "Exports data as CSV using AgGrid’s API with a file name derived from the table title.",
    "Supports optional batch actions and row selection with `checkbox` and `checkAll` modes.",
    "Supports both human-readable date formatting and raw date/time display.",
    "Useful for dashboards summarizing monthly transactions, attendance, or operational metrics.",
  ],
};
export const muiTableDoc = {
  name: "MuiTable",
  file: "src/components/tables/MuiTable.jsx",
  overview:
    "The MuiTable component is a reusable wrapper built on top of Material UI’s Table components. It supports configurable column definitions, optional scrollable layouts, and cell truncation for long text. Ideal for summary views, modal tables, and lightweight data displays.",

  props: [
    {
      name: "Title",
      type: "string",
      default: "undefined",
      description:
        "Displays a header title for the table. Shown above the table with uppercase and styled formatting.",
    },
    {
      name: "columns",
      type: "Array<Object>",
      default: "[]",
      description:
        "Defines table columns. Each column object may contain keys like `id`, `label`, `align`, `minWidth`, `width`, and an optional `renderCell` function for custom cell rendering.",
    },
    {
      name: "rows",
      type: "Array<Object>",
      default: "[]",
      description:
        "Array of data objects representing table rows. Each key should match a column’s `id` or be handled by `renderCell`.",
    },
    {
      name: "rowKey",
      type: "string",
      default: '"id"',
      description:
        "Specifies the unique key in each row used as the React key. Defaults to 'id'.",
    },
    {
      name: "rowsToDisplay",
      type: "number",
      default: "undefined",
      description:
        "Limits the number of rows displayed. If provided, only the first `n` rows are shown.",
    },
    {
      name: "scroll",
      type: "boolean",
      default: "false",
      description:
        "Enables a scrollable table container when true. Combined with `rowsToDisplay`, it fixes table height for vertical scrolling.",
    },
  ],

  usage: `import MuiTable from "@/components/tables/MuiTable";

const columns = [
  { id: "name", label: "Name", minWidth: 150 },
  { id: "email", label: "Email", minWidth: 200 },
  { id: "role", label: "Role", width: 100 },
  {
    id: "status",
    label: "Status",
    renderCell: (row) => (
      <span
        style={{
          color: row.status === "Active" ? "green" : "red",
          fontWeight: 600,
        }}
      >
        {row.status}
      </span>
    ),
  },
];

const rows = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Inactive" },
  { id: 3, name: "Charlie Lee", email: "charlie@example.com", role: "Viewer", status: "Active" },
];

export default function Example() {
  return (
    <MuiTable
      Title="Team Members"
      columns={columns}
      rows={rows}
      rowKey="id"
      rowsToDisplay={5}
      scroll
    />
  );
}`,

  dependencies: [
    "React",
    "@mui/material (Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper)",
    "Tailwind CSS for border, padding, and typography styling",
  ],

  notes: [
    "Supports scrollable tables by setting `scroll` and `rowsToDisplay` together.",
    "Automatically truncates long text values and shows the full text on hover via the `title` attribute.",
    "Allows per-column custom rendering with `renderCell` for flexible UI (e.g., chips, buttons, or icons).",
    "Maintains consistent visual style across dashboards using Tailwind typography and border utilities.",
    "Designed for static or read-only tables — for interactive or filterable tables, use `AgTable` instead.",
    "Ideal for summary sections, modal tables, or simple admin panels.",
  ],
};
export const monthWiseTableDoc = {
  name: "MonthWiseTable",
  file: "src/components/tables/MonthWiseTable.jsx",
  overview:
    "The MonthWiseTable component is a reusable monthly data viewer built around the AgTable component. It automatically detects available months in the dataset, allows navigation between them, and filters data accordingly. It also includes CSV export and optional action buttons, making it ideal for modules such as Finance, HR, or Operations dashboards.",

  props: [
    {
      name: "data",
      type: "Array<Object>",
      default: "[]",
      description:
        "The dataset for the table. Each object represents a row and must include a valid date field specified by `dateColumn`.",
    },
    {
      name: "columns",
      type: "Array<Object>",
      default: "[]",
      description:
        "Array of column definitions compatible with AgGrid. Date columns are automatically formatted using Day.js.",
    },
    {
      name: "dateColumn",
      type: "string",
      default: "undefined",
      description:
        "The field name in `data` containing date values used to determine the month for filtering.",
    },
    {
      name: "formatTime",
      type: "boolean",
      default: "false",
      description:
        "If true, date columns are formatted to display time in `hh:mm A` format instead of date.",
    },
    {
      name: "tableTitle",
      type: "string",
      default: "undefined",
      description: "Displays a title for the table at the top-left corner.",
    },
    {
      name: "buttonTitle",
      type: "string",
      default: "undefined",
      description:
        "Optional title for a primary action button shown in the header (e.g., 'Add Record').",
    },
    {
      name: "handleSubmit",
      type: "Function",
      default: "undefined",
      description:
        "Callback function executed when the primary button (defined by `buttonTitle`) is clicked.",
    },
    {
      name: "checkbox",
      type: "boolean",
      default: "false",
      description:
        "Enables checkbox selection in the AgTable for multi-row selection.",
    },
    {
      name: "checkAll",
      type: "boolean",
      default: "false",
      description:
        "Allows selecting or deselecting all rows using the header checkbox.",
    },
    {
      name: "key",
      type: "string | number",
      default: "undefined",
      description: "Unique React key for table re-render control.",
    },
    {
      name: "onMonthChange",
      type: "Function",
      default: "undefined",
      description:
        "Callback fired when the selected month changes, passing the new month label (e.g., 'Apr-2025').",
    },
    {
      name: "exportData",
      type: "boolean",
      default: "false",
      description:
        "When true, enables CSV export via the Export button, using AgGrid's export functionality.",
    },
  ],

  usage: `import MonthWiseTable from "@/components/tables/MonthWiseTable";

const sampleData = [
  { date: "2025-04-10", projectName: "Building A", actualAmount: 5000 },
  { date: "2025-05-02", projectName: "Building B", actualAmount: 12000 },
  { date: "2025-05-20", projectName: "Building C", actualAmount: 8000 },
  { date: "2025-06-01", projectName: "Building D", actualAmount: 11000 },
];

const columns = [
  { headerName: "Project", field: "projectName" },
  { headerName: "Amount", field: "actualAmount" },
  { headerName: "Date", field: "date" },
];

export default function Example() {
  return (
    <MonthWiseTable
      data={sampleData}
      columns={columns}
      dateColumn="date"
      tableTitle="Monthly Revenue"
      buttonTitle="Add Record"
      handleSubmit={() => console.log("New record added")}
      exportData
      onMonthChange={(month) => console.log("Month changed:", month)}
    />
  );
}`,

  dependencies: [
    "React (useState, useMemo, useRef, useEffect)",
    "dayjs (for date parsing and month extraction)",
    "AgTable (custom wrapper around AgGrid)",
    "PrimaryButton (for UI actions)",
    "react-icons (MdNavigateBefore, MdNavigateNext)",
    "humanDate utility (for formatting readable date values)",
    "Tailwind CSS (for layout and styling)",
  ],

  notes: [
    "Automatically extracts unique months from the dataset using the provided date column.",
    "Defaults to the current month if data is available for it, otherwise uses the first available month.",
    "Provides navigation controls to switch between months using `MdNavigateBefore` and `MdNavigateNext` icons.",
    "Supports exporting filtered monthly data as a CSV file.",
    "Integrates seamlessly with `AgTable` for consistent data visualization and filtering behavior.",
    "Useful for showing month-based data trends such as payments, performance, or inventory records.",
  ],
};
export const dateWiseTableDoc = {
  name: "DateWiseTable",
  file: "src/components/tables/DateWiseTable.jsx",
  overview:
    "The DateWiseTable component displays daily data in a navigable format using AgTable. It automatically extracts available dates from the dataset, defaults to today's or the most recent past date, and allows easy navigation between dates with previous/next controls. It supports CSV export, checkboxes, and time/date formatting.",

  props: [
    {
      name: "data",
      type: "Array<Object>",
      default: "[]",
      description:
        "Dataset for the table. Each object represents a row and must contain a valid date field defined by `dateColumn`.",
    },
    {
      name: "columns",
      type: "Array<Object>",
      default: "[]",
      description:
        "Defines table columns compatible with AgGrid. Automatically applies date or time formatting to date-related fields.",
    },
    {
      name: "dateColumn",
      type: "string",
      default: "undefined",
      description:
        "Specifies the key in the data used to extract date values for daily filtering and navigation.",
    },
    {
      name: "checkbox",
      type: "boolean",
      default: "false",
      description:
        "Enables row selection checkboxes in the table for multi-select operations.",
    },
    {
      name: "tableTitle",
      type: "string",
      default: "undefined",
      description:
        "Title displayed above the table, styled in uppercase and primary color.",
    },
    {
      name: "buttonTitle",
      type: "string",
      default: "undefined",
      description:
        "Optional action button title displayed in the header (e.g., 'Add Entry').",
    },
    {
      name: "handleSubmit",
      type: "Function",
      default: "undefined",
      description:
        "Callback function executed when the primary action button is clicked.",
    },
    {
      name: "checkAll",
      type: "boolean",
      default: "false",
      description:
        "Allows selecting or deselecting all rows via a header checkbox in the table.",
    },
    {
      name: "key",
      type: "string | number",
      default: "undefined",
      description:
        "React key to control re-rendering of the table when needed.",
    },
    {
      name: "formatTime",
      type: "boolean",
      default: "false",
      description:
        "If true, formats the date column to show time (e.g., '10:45 AM') instead of date.",
    },
    {
      name: "exportData",
      type: "boolean",
      default: "false",
      description:
        "If true, enables CSV export functionality using AgGrid’s built-in API.",
    },
  ],

  usage: `import DateWiseTable from "@/components/tables/DateWiseTable";

const sampleData = [
  { date: "2025-10-05", project: "Bridge A", hoursWorked: 5 },
  { date: "2025-10-05", project: "Bridge B", hoursWorked: 8 },
  { date: "2025-10-06", project: "Bridge C", hoursWorked: 6 },
  { date: "2025-10-07", project: "Bridge D", hoursWorked: 7 },
];

const columns = [
  { headerName: "Project", field: "project" },
  { headerName: "Hours Worked", field: "hoursWorked" },
  { headerName: "Date", field: "date" },
];

export default function Example() {
  return (
    <DateWiseTable
      data={sampleData}
      columns={columns}
      dateColumn="date"
      tableTitle="Daily Work Logs"
      buttonTitle="Add Entry"
      handleSubmit={() => console.log("New record added")}
      checkbox
      exportData
    />
  );
}`,

  dependencies: [
    "React (useState, useMemo, useEffect, useRef)",
    "dayjs (for date parsing and daily comparison)",
    "AgTable (custom wrapper for AgGrid rendering)",
    "PrimaryButton (for UI actions and navigation)",
    "react-icons (MdNavigateBefore, MdNavigateNext)",
    "useRefWithInitialRerender (custom hook for initial mount control)",
    "Tailwind CSS for layout and styling consistency",
  ],

  notes: [
    "Automatically extracts unique dates from the dataset and sorts them chronologically.",
    "Defaults to today’s date if data exists for it, or the latest available past date otherwise.",
    "Provides intuitive navigation between days using previous and next arrow buttons.",
    "Integrates seamlessly with AgTable for consistent rendering and export support.",
    "Supports both date and time formatting using `formatTime` prop.",
    "Perfect for daily attendance tracking, task logs, maintenance records, or shift reports.",
    "Exports the currently filtered date’s data as a CSV file using AgGrid API.",
  ],
};
export const tabLayoutDoc = {
  name: "TabLayout",
  file: "src/components/tabs/TabLayout.jsx",
  overview:
    "The TabLayout component provides a responsive, route-synced tab navigation structure using React Router and Material UI Tabs. It supports automatic redirection to a default tab, conditional tab visibility, and seamless integration with nested routes via `<Outlet />`. Ideal for multi-section module dashboards such as HR, Finance, or Admin panels.",

  props: [
    {
      name: "basePath",
      type: "string",
      default: "undefined",
      description:
        "Defines the root path for the tab layout. Each tab path is appended to this basePath when generating navigation routes.",
    },
    {
      name: "tabs",
      type: "Array<{ label: string, path: string }>",
      default: "[]",
      description:
        "Array of tab objects. Each tab requires a `label` (tab title) and a `path` (sub-route appended to basePath).",
    },
    {
      name: "defaultTabPath",
      type: "string",
      default: "undefined",
      description:
        "Specifies which tab path to redirect to automatically when the user visits the base path.",
    },
    {
      name: "hideTabsCondition",
      type: "Function",
      default: "() => false",
      description:
        "Custom condition function that determines whether tabs should be hidden based on the current pathname. Receives `location.pathname` as an argument.",
    },
    {
      name: "hideTabsOnPaths",
      type: "Array<string>",
      default: "[]",
      description:
        "Array of path substrings where the tabs should be hidden. Useful for hiding tabs on detail or sub-pages (e.g., `/profile/:id`).",
    },
  ],

  usage: `import TabLayout from "@/components/tabs/TabLayout";
import { Route, Routes } from "react-router-dom";

const tabs = [
  { label: "Overview", path: "overview" },
  { label: "Team", path: "team" },
  { label: "Reports", path: "reports" },
];

export default function HrModule() {
  return (
    <Routes>
      <Route
        path="/hr"
        element={
          <TabLayout
            basePath="/hr"
            tabs={tabs}
            defaultTabPath="overview"
            hideTabsOnPaths={["/hr/details"]}
          />
        }
      >
        <Route path="overview" element={<div>Overview Content</div>} />
        <Route path="team" element={<div>Team Content</div>} />
        <Route path="reports" element={<div>Reports Content</div>} />
      </Route>
    </Routes>
  );
}`,

  dependencies: [
    "React (useEffect)",
    "react-router-dom (NavLink, Outlet, useLocation, useNavigate)",
    "@mui/material (Tabs)",
    "Tailwind CSS for border, padding, and layout styling",
    "motion/react (for smooth transitions, optional future animation support)",
    "useIsMobile custom hook for responsive behavior",
  ],

  notes: [
    "Automatically redirects users to the `defaultTabPath` when they visit the basePath.",
    "Each tab acts as a `NavLink`, keeping routes and tab states perfectly in sync.",
    "Uses Material UI’s Tabs component with full-width or scrollable behavior depending on screen width (responsive via `useIsMobile`).",
    "Allows hiding tabs dynamically with `hideTabsCondition` or predefined `hideTabsOnPaths`.",
    "Ideal for multi-section modules with nested routes (e.g., Employee Management, Finance Dashboards, etc.).",
    "Tab selection and navigation update automatically via React Router’s location.",
    "Includes Tailwind-based styling with primary-color highlighting for active tabs.",
  ],
};












