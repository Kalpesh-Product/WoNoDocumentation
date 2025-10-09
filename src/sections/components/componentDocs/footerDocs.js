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
