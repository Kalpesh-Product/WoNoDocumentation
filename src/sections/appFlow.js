//Sales
export const salesSteps = [
  { id: "1", label: "User arrives in Sales Dashboard", type: "start" },

  // Top menus
  { id: "2", label: "Turnover", type: "entity" },
  { id: "3", label: "Finance", type: "entity" },
  { id: "4", label: "Mix Bag", type: "entity" },
  { id: "5", label: "Data", type: "entity" },
  { id: "6", label: "Settings", type: "entity" },

  // Turnover children
  { id: "2a", label: "Company Turnover Details", type: "process" },

  // Finance children
  { id: "3a", label: "Budget", type: "process" },
  { id: "3b", label: "Payment Schedule", type: "process" },
  { id: "3c", label: "Voucher", type: "process" },

  // Mix Bag children
  { id: "4a", label: "Inventory", type: "process" },
  { id: "4b", label: "Revenue", type: "process" },
  { id: "4c", label: "Clients", type: "process" },
  { id: "4d", label: "Desks", type: "entity" },

  // Desks children
  { id: "4d1", label: "Check Availability", type: "process" },
  { id: "4d2", label: "Occupied & Clear Layout", type: "process" },

  // Data children
  { id: "5a", label: "Asset List", type: "process" },
  { id: "5b", label: "Monthly Invoice Reports", type: "process" },
  { id: "5c", label: "Vendor", type: "process" },

  // Settings children
  { id: "6a", label: "Bulk Upload", type: "process" },
  { id: "6b", label: "SOPs", type: "process" },
  { id: "6c", label: "Policies", type: "process" },
];

export const salesInitialEdges = [
  // Main branches
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e1-5", source: "1", target: "5" },
  { id: "e1-6", source: "1", target: "6" },

  // Turnover
  { id: "e2-2a", source: "2", target: "2a" },

  // Finance
  { id: "e3-3a", source: "3", target: "3a" },
  { id: "e3-3b", source: "3", target: "3b" },
  { id: "e3-3c", source: "3", target: "3c" },

  // Mix Bag
  { id: "e4-4a", source: "4", target: "4a" },
  { id: "e4-4b", source: "4", target: "4b" },
  { id: "e4-4c", source: "4", target: "4c" },
  { id: "e4-4d", source: "4", target: "4d" },

  // Desks
  { id: "e4d-4d1", source: "4d", target: "4d1" },
  { id: "e4d-4d2", source: "4d", target: "4d2" },

  // Data
  { id: "e5-5a", source: "5", target: "5a" },
  { id: "e5-5b", source: "5", target: "5b" },
  { id: "e5-5c", source: "5", target: "5c" },

  // Settings
  { id: "e6-6a", source: "6", target: "6a" },
  { id: "e6-6b", source: "6", target: "6b" },
  { id: "e6-6c", source: "6", target: "6c" },
];

// Finance
export const financeSteps = [
  { id: "1", label: "User arrives in Finance Dashboard", type: "start" },

  // Top menus
  { id: "2", label: "Cashflow", type: "entity" },
  { id: "3", label: "Finance", type: "entity" },
  { id: "4", label: "Billing", type: "entity" },
  { id: "5", label: "Mix Bag", type: "entity" },
  { id: "6", label: "Data", type: "entity" },
  { id: "7", label: "Settings", type: "entity" },

  // Cashflow children
  { id: "2a", label: "Projections", type: "process" },
  { id: "2b", label: "Historical P&L", type: "process" },

  // Finance children
  { id: "3a", label: "Budget", type: "process" },
  { id: "3b", label: "Payment Schedule", type: "process" },
  { id: "3c", label: "Voucher", type: "process" },
  { id: "3d", label: "Dept. Wise Budget", type: "process" },
  { id: "3e", label: "Collections", type: "process" },
  { id: "3f", label: "Statutory Payments", type: "process" },
  { id: "3g", label: "Landlord Payments", type: "process" },

  // Billing children
  { id: "4a", label: "Client Invoice", type: "process" },
  { id: "4b", label: "Department Invoice", type: "process" },
  { id: "4c", label: "Pending Approvals", type: "process" },
  { id: "4d", label: "Voucher History", type: "process" },

  // Mix Bag children
  { id: "5a", label: "Directors KYC", type: "process" },
  { id: "5b", label: "Compliance Documents", type: "process" },
  { id: "5c", label: "Landlord Agreements", type: "process" },
  { id: "5d", label: "Client Agreements", type: "process" },

  // Data children
  { id: "6a", label: "Asset List", type: "process" },
  { id: "6b", label: "Monthly Invoice Reports", type: "process" },
  { id: "6c", label: "Vendor", type: "process" },

  // Settings children
  { id: "7a", label: "Bulk Upload", type: "process" },
  { id: "7b", label: "SOPs", type: "process" },
  { id: "7c", label: "Policies", type: "process" },
];

export const financeInitialEdges = [
  // Main branches
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e1-5", source: "1", target: "5" },
  { id: "e1-6", source: "1", target: "6" },
  { id: "e1-7", source: "1", target: "7" },

  // Cashflow
  { id: "e2-2a", source: "2", target: "2a" },
  { id: "e2-2b", source: "2", target: "2b" },

  // Finance
  { id: "e3-3a", source: "3", target: "3a" },
  { id: "e3-3b", source: "3", target: "3b" },
  { id: "e3-3c", source: "3", target: "3c" },
  { id: "e3-3d", source: "3", target: "3d" },
  { id: "e3-3e", source: "3", target: "3e" },
  { id: "e3-3f", source: "3", target: "3f" },
  { id: "e3-3g", source: "3", target: "3g" },

  // Billing
  { id: "e4-4a", source: "4", target: "4a" },
  { id: "e4-4b", source: "4", target: "4b" },
  { id: "e4-4c", source: "4", target: "4c" },
  { id: "e4-4d", source: "4", target: "4d" },

  // Mix Bag
  { id: "e5-5a", source: "5", target: "5a" },
  { id: "e5-5b", source: "5", target: "5b" },
  { id: "e5-5c", source: "5", target: "5c" },
  { id: "e5-5d", source: "5", target: "5d" },

  // Data
  { id: "e6-6a", source: "6", target: "6a" },
  { id: "e6-6b", source: "6", target: "6b" },
  { id: "e6-6c", source: "6", target: "6c" },

  // Settings
  { id: "e7-7a", source: "7", target: "7a" },
  { id: "e7-7b", source: "7", target: "7b" },
  { id: "e7-7c", source: "7", target: "7c" },
];

// Admin
export const adminSteps = [
  { id: "1", label: "User arrives in Admin Dashboard", type: "start" },

  // Top menus
  { id: "2", label: "Annual Expenses", type: "entity" },
  { id: "3", label: "Inventory", type: "entity" },
  { id: "4", label: "Finance", type: "entity" },
  { id: "5", label: "Mix Bag", type: "entity" },
  { id: "6", label: "Data", type: "entity" },
  { id: "7", label: "Settings", type: "entity" },

  // Annual Expenses children
  { id: "2a", label: "Company Annual Expenses", type: "process" },

  // Inventory children
  { id: "3a", label: "List of Inventory", type: "process" },

  // Finance children
  { id: "4a", label: "Budget", type: "process" },
  { id: "4b", label: "Payment Schedule", type: "process" },
  { id: "4c", label: "Voucher", type: "process" },

  // Mix Bag children
  { id: "5a", label: "Team Members Schedule", type: "entity" },
  { id: "5a1", label: "Team Member Calendar", type: "process" },

  { id: "5b", label: "Housekeeping Members", type: "entity" },
  { id: "5b1", label: "Housekeeping Members List", type: "process" },
  { id: "5b2", label: "Housekeeping Onboard", type: "process" },
  { id: "5b3", label: "Housekeeping Assign Rotation", type: "process" },

  { id: "5c", label: "Holidays & Events", type: "process" },

  { id: "5d", label: "Clients", type: "entity" },
  { id: "5d1", label: "Clients", type: "process" },
  { id: "5d2", label: "Client Member Onboarding", type: "process" },

  // Data children
  { id: "6a", label: "Electricity Consumption & Expenses", type: "process" },
  { id: "6b", label: "Asset List", type: "process" },
  { id: "6c", label: "Monthly Invoice Reports", type: "process" },
  { id: "6d", label: "Vendor", type: "process" },

  // Settings children
  { id: "7a", label: "Bulk Upload", type: "process" },
  { id: "7b", label: "SOPs", type: "process" },
  { id: "7c", label: "Policies", type: "process" },
];

export const adminInitialEdges = [
  // Main branches
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e1-5", source: "1", target: "5" },
  { id: "e1-6", source: "1", target: "6" },
  { id: "e1-7", source: "1", target: "7" },

  // Annual Expenses
  { id: "e2-2a", source: "2", target: "2a" },

  // Inventory
  { id: "e3-3a", source: "3", target: "3a" },

  // Finance
  { id: "e4-4a", source: "4", target: "4a" },
  { id: "e4-4b", source: "4", target: "4b" },
  { id: "e4-4c", source: "4", target: "4c" },

  // Mix Bag
  { id: "e5-5a", source: "5", target: "5a" },
  { id: "e5a-5a1", source: "5a", target: "5a1" },

  { id: "e5-5b", source: "5", target: "5b" },
  { id: "e5b-5b1", source: "5b", target: "5b1" },
  { id: "e5b-5b2", source: "5b", target: "5b2" },
  { id: "e5b-5b3", source: "5b", target: "5b3" },

  { id: "e5-5c", source: "5", target: "5c" },

  { id: "e5-5d", source: "5", target: "5d" },
  { id: "e5d-5d1", source: "5d", target: "5d1" },
  { id: "e5d-5d2", source: "5d", target: "5d2" },

  // Data
  { id: "e6-6a", source: "6", target: "6a" },
  { id: "e6-6b", source: "6", target: "6b" },
  { id: "e6-6c", source: "6", target: "6c" },
  { id: "e6-6d", source: "6", target: "6d" },

  // Settings
  { id: "e7-7a", source: "7", target: "7a" },
  { id: "e7-7b", source: "7", target: "7b" },
  { id: "e7-7c", source: "7", target: "7c" },
];

// IT
export const itSteps = [
  { id: "1", label: "User arrives in IT Dashboard", type: "start" },

  // Top menus
  { id: "2", label: "Annual Expenses", type: "entity" },
  { id: "3", label: "Inventory", type: "entity" },
  { id: "4", label: "Finance", type: "entity" },
  { id: "5", label: "Mix Bag", type: "entity" },
  { id: "6", label: "Data", type: "entity" },
  { id: "7", label: "Settings", type: "entity" },

  // Annual Expenses children
  { id: "2a", label: "Company Annual Expenses", type: "process" },

  // Inventory children
  { id: "3a", label: "List of Inventory", type: "process" },

  // Finance children
  { id: "4a", label: "Budget", type: "process" },
  { id: "4b", label: "Payment Schedule", type: "process" },
  { id: "4c", label: "Voucher", type: "process" },

  // Mix Bag children
  { id: "5a", label: "Team Members Schedule", type: "entity" },
  { id: "5a1", label: "Team Member Calendar", type: "process" },

  // Data children
  { id: "6a", label: "AMC Records", type: "process" },
  { id: "6b", label: "Asset List", type: "process" },
  { id: "6c", label: "Monthly Invoice Reports", type: "process" },
  { id: "6d", label: "Vendor", type: "process" },

  // Settings children
  { id: "7a", label: "Bulk Upload", type: "process" },
  { id: "7b", label: "SOPs", type: "process" },
  { id: "7c", label: "Policies", type: "process" },
];

export const itInitialEdges = [
  // Main branches
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e1-5", source: "1", target: "5" },
  { id: "e1-6", source: "1", target: "6" },
  { id: "e1-7", source: "1", target: "7" },

  // Annual Expenses
  { id: "e2-2a", source: "2", target: "2a" },

  // Inventory
  { id: "e3-3a", source: "3", target: "3a" },

  // Finance
  { id: "e4-4a", source: "4", target: "4a" },
  { id: "e4-4b", source: "4", target: "4b" },
  { id: "e4-4c", source: "4", target: "4c" },

  // Mix Bag
  { id: "e5-5a", source: "5", target: "5a" },
  { id: "e5a-5a1", source: "5a", target: "5a1" },

  // Data
  { id: "e6-6a", source: "6", target: "6a" },
  { id: "e6-6b", source: "6", target: "6b" },
  { id: "e6-6c", source: "6", target: "6c" },
  { id: "e6-6d", source: "6", target: "6d" },

  // Settings
  { id: "e7-7a", source: "7", target: "7a" },
  { id: "e7-7b", source: "7", target: "7b" },
  { id: "e7-7c", source: "7", target: "7c" },
];

// Maintenance
export const maintenanceSteps = [
  { id: "1", label: "User arrives in Maintenance Dashboard", type: "start" },

  // Top menus
  { id: "2", label: "Annual Expenses", type: "entity" },
  { id: "3", label: "Inventory", type: "entity" },
  { id: "4", label: "Finance", type: "entity" },
  { id: "5", label: "Mix Bag", type: "entity" },
  { id: "6", label: "Data", type: "entity" },
  { id: "7", label: "Settings", type: "entity" },

  // Annual Expenses children
  { id: "2a", label: "Company Annual Expenses", type: "process" },

  // Inventory children
  { id: "3a", label: "List of Inventory", type: "process" },

  // Finance children
  { id: "4a", label: "Budget", type: "process" },
  { id: "4b", label: "Payment Schedule", type: "process" },
  { id: "4c", label: "Voucher", type: "process" },

  // Mix Bag children
  { id: "5a", label: "Team Members Schedule", type: "entity" },
  { id: "5a1", label: "Team Member Calendar", type: "process" },

  // Data children
  { id: "6a", label: "AMC Records", type: "process" },
  { id: "6b", label: "Asset List", type: "process" },
  { id: "6c", label: "Monthly Invoice Reports", type: "process" },
  { id: "6d", label: "Vendor", type: "process" },

  // Settings children
  { id: "7a", label: "Bulk Upload", type: "process" },
  { id: "7b", label: "SOPs", type: "process" },
  { id: "7c", label: "Policies", type: "process" },
];

export const maintenanceInitialEdges = [
  // Main branches
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e1-5", source: "1", target: "5" },
  { id: "e1-6", source: "1", target: "6" },
  { id: "e1-7", source: "1", target: "7" },

  // Annual Expenses
  { id: "e2-2a", source: "2", target: "2a" },

  // Inventory
  { id: "e3-3a", source: "3", target: "3a" },

  // Finance
  { id: "e4-4a", source: "4", target: "4a" },
  { id: "e4-4b", source: "4", target: "4b" },
  { id: "e4-4c", source: "4", target: "4c" },

  // Mix Bag
  { id: "e5-5a", source: "5", target: "5a" },
  { id: "e5a-5a1", source: "5a", target: "5a1" },

  // Data
  { id: "e6-6a", source: "6", target: "6a" },
  { id: "e6-6b", source: "6", target: "6b" },
  { id: "e6-6c", source: "6", target: "6c" },
  { id: "e6-6d", source: "6", target: "6d" },

  // Settings
  { id: "e7-7a", source: "7", target: "7a" },
  { id: "e7-7b", source: "7", target: "7b" },
  { id: "e7-7c", source: "7", target: "7c" },
];

// HR
export const hrSteps = [
  { id: "1", label: "User arrives in HR Dashboard", type: "start" },

  // Top menus
  { id: "2", label: "Employee", type: "entity" },
  { id: "3", label: "Company", type: "entity" },
  { id: "4", label: "Finance", type: "entity" },
  { id: "5", label: "Mix Bag", type: "entity" },
  { id: "6", label: "Data", type: "entity" },
  { id: "7", label: "Settings", type: "entity" },

  // Employee children
  { id: "2a", label: "Employee List", type: "entity" },
  { id: "2a1", label: "Edit Details", type: "process" },
  { id: "2a2", label: "Attendance", type: "process" },
  { id: "2a3", label: "Leaves", type: "process" },
  { id: "2a4", label: "Agreements", type: "process" },
  { id: "2a5", label: "Payslip", type: "process" },
  { id: "2b", label: "Past Employees", type: "process" },
  { id: "2c", label: "Attendance", type: "process" },
  { id: "2d", label: "Leaves", type: "process" },
  { id: "2e", label: "Employee On-boarding", type: "process" },

  // Company children
  { id: "3a", label: "Company Logo", type: "process" },
  { id: "3b", label: "Company Handbook", type: "process" },
  { id: "3c", label: "Departments", type: "process" },
  { id: "3d", label: "Work Locations", type: "process" },
  { id: "3e", label: "Holidays", type: "process" },
  { id: "3f", label: "Events", type: "process" },
  { id: "3g", label: "Company Policies", type: "process" },
  { id: "3h", label: "Company SOPs", type: "process" },
  { id: "3i", label: "Employee Types", type: "process" },
  { id: "3j", label: "Shifts", type: "process" },
  { id: "3k", label: "Templates", type: "process" },

  // Finance children
  { id: "4a", label: "Budget", type: "process" },
  { id: "4b", label: "Payment Schedule", type: "process" },
  { id: "4c", label: "Voucher", type: "process" },
  { id: "4d", label: "Payroll", type: "entity" },
  { id: "4d1", label: "Employee's Salary Breakup", type: "process" },

  // Mix Bag children
  { id: "5a", label: "Attendance Requests", type: "process" },
  { id: "5b", label: "Leave Requests", type: "process" },

  // Data children
  { id: "6a", label: "Job Application List", type: "process" },
  { id: "6b", label: "Payroll Reports", type: "process" },
  { id: "6c", label: "Asset List", type: "process" },
  { id: "6d", label: "Monthly Invoice Reports", type: "process" },
  { id: "6e", label: "Vendor", type: "process" },

  // Settings children
  { id: "7a", label: "Bulk Upload", type: "process" },
  { id: "7b", label: "SOPs", type: "process" },
  { id: "7c", label: "Policies", type: "process" },
];

export const hrInitialEdges = [
  // Main branches
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e1-5", source: "1", target: "5" },
  { id: "e1-6", source: "1", target: "6" },
  { id: "e1-7", source: "1", target: "7" },

  // Employee
  { id: "e2-2a", source: "2", target: "2a" },
  { id: "e2a-2a1", source: "2a", target: "2a1" },
  { id: "e2a-2a2", source: "2a", target: "2a2" },
  { id: "e2a-2a3", source: "2a", target: "2a3" },
  { id: "e2a-2a4", source: "2a", target: "2a4" },
  { id: "e2a-2a5", source: "2a", target: "2a5" },
  { id: "e2-2b", source: "2", target: "2b" },
  { id: "e2-2c", source: "2", target: "2c" },
  { id: "e2-2d", source: "2", target: "2d" },
  { id: "e2-2e", source: "2", target: "2e" },

  // Company
  { id: "e3-3a", source: "3", target: "3a" },
  { id: "e3-3b", source: "3", target: "3b" },
  { id: "e3-3c", source: "3", target: "3c" },
  { id: "e3-3d", source: "3", target: "3d" },
  { id: "e3-3e", source: "3", target: "3e" },
  { id: "e3-3f", source: "3", target: "3f" },
  { id: "e3-3g", source: "3", target: "3g" },
  { id: "e3-3h", source: "3", target: "3h" },
  { id: "e3-3i", source: "3", target: "3i" },
  { id: "e3-3j", source: "3", target: "3j" },
  { id: "e3-3k", source: "3", target: "3k" },

  // Finance
  { id: "e4-4a", source: "4", target: "4a" },
  { id: "e4-4b", source: "4", target: "4b" },
  { id: "e4-4c", source: "4", target: "4c" },
  { id: "e4-4d", source: "4", target: "4d" },
  { id: "e4d-4d1", source: "4d", target: "4d1" },

  // Mix Bag
  { id: "e5-5a", source: "5", target: "5a" },
  { id: "e5-5b", source: "5", target: "5b" },

  // Data
  { id: "e6-6a", source: "6", target: "6a" },
  { id: "e6-6b", source: "6", target: "6b" },
  { id: "e6-6c", source: "6", target: "6c" },
  { id: "e6-6d", source: "6", target: "6d" },
  { id: "e6-6e", source: "6", target: "6e" },

  // Settings
  { id: "e7-7a", source: "7", target: "7a" },
  { id: "e7-7b", source: "7", target: "7b" },
  { id: "e7-7c", source: "7", target: "7c" },
];

// Meetings
export const meetingSteps = [
  { id: "1", label: "User arrives in Meeting Dashboard", type: "start" },

  // Top menus
  { id: "2", label: "Book a Meeting", type: "entity" },
  { id: "3", label: "Manage Meeting", type: "entity" },
  { id: "4", label: "Calendar", type: "entity" },
  { id: "5", label: "Reports", type: "entity" },
  { id: "6", label: "Reviews", type: "entity" },
  { id: "7", label: "Settings", type: "entity" },

  // Book a meeting children
  { id: "2a", label: "Booking Form Page", type: "process" },
  { id: "2b", label: "Booking Calendar", type: "process" },

  // Manage Meeting children
  { id: "3a", label: "Internal Meetings", type: "process" },
  { id: "3b", label: "External Meetings", type: "process" },

  // Calendar children
  { id: "4a", label: "Overall Booking Calendar", type: "process" },

  // Settings children
  { id: "7a", label: "Meeting Rooms Listings Page", type: "process" },
];

export const meetingInitialEdges = [
  // Main branches
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e1-5", source: "1", target: "5" },
  { id: "e1-6", source: "1", target: "6" },
  { id: "e1-7", source: "1", target: "7" },

  // Book a meeting
  { id: "e2-2a", source: "2", target: "2a" },
  { id: "e2-2b", source: "2", target: "2b" },

  // Manage Meeting
  { id: "e3-3a", source: "3", target: "3a" },
  { id: "e3-3b", source: "3", target: "3b" },

  // Calendar
  { id: "e4-4a", source: "4", target: "4a" },

  // Settings
  { id: "e7-7a", source: "7", target: "7a" },
];

// Visitors
export const visitorsSteps = [
  { id: "1", label: "User arrives in Visitors Dashboard", type: "start" },

  // Top menus
  { id: "2", label: "Add Visitors", type: "entity" },
  { id: "3", label: "Add Client", type: "entity" },
  { id: "4", label: "Manage Visitors", type: "entity" },
  { id: "5", label: "Team Members", type: "entity" },
  { id: "6", label: "Reports", type: "entity" },

  // Manage Visitors children
  { id: "4a", label: "Internal Visitors", type: "process" },
  { id: "4b", label: "External Visitors", type: "process" },
];

export const visitorsInitialEdges = [
  // Main branches
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e1-5", source: "1", target: "5" },
  { id: "e1-6", source: "1", target: "6" },

  // Manage Visitors
  { id: "e4-4a", source: "4", target: "4a" },
  { id: "e4-4b", source: "4", target: "4b" },
];

// Tasks
export const tasksSteps = [
  { id: "1", label: "User arrives in Tasks Dashboard", type: "start" },

  // Top menus
  { id: "2", label: "My Tasks", type: "entity" },
  { id: "3", label: "Department Tasks", type: "entity" },
  { id: "4", label: "Team Members", type: "entity" },
  { id: "5", label: "Reports", type: "entity" },

  // Reports children
  { id: "5a", label: "My Task Reports", type: "process" },
  { id: "5b", label: "Assigned Task Reports", type: "process" },
];

export const tasksInitialEdges = [
  // Main branches
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e1-5", source: "1", target: "5" },

  // Reports
  { id: "e5-5a", source: "5", target: "5a" },
  { id: "e5-5b", source: "5", target: "5b" },
];

// Tickets
export const ticketsSteps = [
  { id: "1", label: "User arrives in Tickets Dashboard", type: "start" },

  // Top menus
  { id: "2", label: "Raise a Ticket", type: "entity" },
  { id: "3", label: "Manage Tickets", type: "entity" },
  { id: "4", label: "Reports", type: "entity" },
  { id: "5", label: "Team Members", type: "entity" },
  { id: "6", label: "Ticket Settings", type: "entity" },

  // Manage Tickets children
  { id: "3a", label: "Received Tickets", type: "process" },
  { id: "3b", label: "Accepted Tickets", type: "process" },
  { id: "3c", label: "Support Tickets", type: "process" },
  { id: "3d", label: "Escalated Tickets", type: "process" },
  { id: "3e", label: "Closed Tickets", type: "process" },
];

export const ticketsInitialEdges = [
  // Main branches
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e1-5", source: "1", target: "5" },
  { id: "e1-6", source: "1", target: "6" },

  // Manage Tickets
  { id: "e3-3a", source: "3", target: "3a" },
  { id: "e3-3b", source: "3", target: "3b" },
  { id: "e3-3c", source: "3", target: "3c" },
  { id: "e3-3d", source: "3", target: "3d" },
  { id: "e3-3e", source: "3", target: "3e" },
];

// Performance
export const performanceSteps = [
  { id: "1", label: "User arrives in Performance Page", type: "start" },

  // Top menus
  { id: "2", label: "Daily KRA", type: "entity" },
  { id: "3", label: "Monthly KPA", type: "entity" },
];

export const performanceInitialEdges = [
  // Main branches
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
];

// Frontend
export const frontendSteps = [
  { id: "1", label: "User arrives in Frontend Dashboard", type: "start" },

  // Top menus
  { id: "2", label: "Website Builder", type: "entity" },
  { id: "3", label: "Nomad Listing", type: "entity" },
  { id: "4", label: "POC Details", type: "entity" },

  // Website Builder children
  { id: "2a", label: "Edit Website", type: "process" },
  { id: "2b", label: "Leads", type: "process" },
];

export const frontendInitialEdges = [
  // Main branches
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },

  // Website Builder
  { id: "e2-2a", source: "2", target: "2a" },
  { id: "e2-2b", source: "2", target: "2b" },
];








