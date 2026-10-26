/**
 * Site copy taken from Sushan Sapkota's resume.
 * Update this file when the resume changes. Do not add claims that are not on it.
 */

export const siteUrl = "https://sushansapkota.com";

export const resume = {
  href: "/Sushan-Sapkota-Resume.pdf",
  filename: "Sushan-Sapkota-Resume.pdf",
} as const;

export const profile = {
  name: "Sushan Sapkota",
  firstName: "Sushan",
  lastName: "Sapkota",
  role: "Mechanical Engineering Student",
  degree: "Bachelor of Science in Mechanical Engineering",
  graduation: "Expected May 2028",
  school: "Howard University",
  location: "Washington, D.C.",
  status: "Seeking an engineering internship",
  phoneDisplay: "240.926.4543",
  phoneHref: "tel:+12409264543",
  email: "sapkotasushan4019@gmail.com",
  linkedinDisplay: "linkedin.com/in/sushan-sapkota-a501a330a",
  linkedinHref: "https://www.linkedin.com/in/sushan-sapkota-a501a330a",
  portrait: "/sushan-sapkota.jpg",
  portraitAlt: "Sushan Sapkota wearing glasses and a blue Nepal jersey",
  summary:
    "Seeking an internship to apply academic knowledge in dynamics, design analysis, MATLAB, manufacturing, robotics, and optimization to real-world engineering challenges.",
  objective:
    "Motivated and detail-oriented Mechanical Engineering student at Howard University seeking an engineering internship to apply academic knowledge in dynamics, design analysis, MATLAB, manufacturing, robotics, and optimization to real-world engineering challenges. Eager to contribute strong problem-solving skills, hands-on technical aptitude, and collaborative teamwork.",
} as const;

export const focusAreas = [
  "Dynamics",
  "Design analysis",
  "MATLAB",
  "Manufacturing",
  "Robotics",
  "Optimization",
] as const;

export const glance = [
  {
    label: "Graduation",
    value: "May 2028",
    detail: "B.S. Mechanical Engineering, Howard University",
  },
  {
    label: "GPA",
    value: "4.0",
    detail: "College of Southern Maryland",
  },
  {
    label: "Dean's List",
    value: "Fall & Spring 2024",
    detail: "College of Southern Maryland",
  },
  {
    label: "Languages",
    value: "EN · NE",
    detail: "English professional · Nepali native",
  },
] as const;

export const nav = [
  { href: "#about", id: "about", label: "About" },
  { href: "#education", id: "education", label: "Education" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#more", id: "more", label: "More" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

export const education = [
  {
    school: "Howard University",
    location: "Washington, D.C.",
    credential: "Bachelor of Science in Mechanical Engineering",
    status: "Expected May 2028",
    gpa: null,
    honors: null,
    coursework: [
      "Statics",
      "Dynamics",
      "Thermodynamics",
      "Mechanics of Materials",
      "Computer-Aided Design (CAD)",
      "MATLAB",
      "Optimization",
      "Manufacturing",
      "Robotics",
    ],
  },
  {
    school: "College of Southern Maryland",
    location: "La Plata, MD",
    credential: "Associate of Science in Engineering",
    status: "Attended until May 2025",
    gpa: "4.0",
    honors: "Dean's List (Fall 2024, Spring 2024)",
    coursework: [],
  },
  {
    school: "Idaho State University",
    location: "Pocatello, ID",
    credential: "Coursework toward B.S. in Mechanical Engineering",
    status: "Attended until December 2023",
    gpa: null,
    honors: null,
    coursework: [],
  },
] as const;

export const skillGroups = [
  {
    id: "software",
    title: "Software & Design",
    items: ["MATLAB", "AutoCAD", "SolidWorks", "CAD Modeling", "MS Office Suite"],
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Robotics",
    items: [
      "Manufacturing Processes",
      "Robotics Fundamentals",
      "Process Optimization",
      "Design for Manufacturing",
    ],
  },
  {
    id: "analysis",
    title: "Engineering & Analysis",
    items: [
      "Engineering Optimization",
      "Design Analysis",
      "Test Planning",
      "Stress-Strain Analysis",
      "Material Property Evaluation",
    ],
  },
  {
    id: "technical",
    title: "Technical Abilities",
    items: [
      "Troubleshooting",
      "Minor Maintenance & Repair",
      "Hands-on Prototyping",
      "Quality Assurance",
      "Technical Documentation",
    ],
  },
] as const;

export const projects = [
  {
    index: "01",
    title: "Cantilever Beam Deflection",
    course: "Solid Mechanics",
    school: "Howard University",
    when: "Spring 2026",
    bullets: [
      "Conducted experimental cantilever-beam testing using 10-100 g incremental loads and dial-gauge measurements to analyze load-deflection behavior.",
      "Applied beam-deflection and bending-stress theory to determine Young's modulus of 442,694 psi (3.05 GPa) and maximum bending stress of 560.56 psi.",
      "Performed linear regression of experimental data (R² ≈ 0.994) and compared material properties with published values, identifying Balsa wood as the closest match with 10.29% error.",
    ],
    metrics: [
      { label: "Young's modulus", value: "442,694 psi", note: "3.05 GPa" },
      { label: "Max bending stress", value: "560.56 psi", note: "From bending-stress theory" },
      { label: "Linear regression", value: "R² ≈ 0.994", note: "Experimental load-deflection data" },
      { label: "Closest match", value: "Balsa wood", note: "10.29% error vs. published values" },
    ],
    setup: "10-100 g incremental loads, measured with a dial gauge.",
  },
  {
    index: "02",
    title: "Engineering Design Project",
    course: "",
    school: "Howard University",
    when: "Fall 2025",
    bullets: [
      "Collaborated with a 4-member team to design an energy-efficient structural component using SolidWorks.",
      "Applied MATLAB for engineering calculations and validation of design specifications, improving design reliability.",
      "Presented the final design and findings to a faculty panel, demonstrating technical communication and teamwork.",
    ],
    metrics: [
      { label: "Team", value: "4 members", note: "Coursework design team" },
      { label: "CAD", value: "SolidWorks", note: "Energy-efficient structural component" },
      { label: "Calculations", value: "MATLAB", note: "Validation of design specifications" },
      { label: "Review", value: "Faculty panel", note: "Final design and findings" },
    ],
    setup: null,
  },
] as const;

export const experience = [
  {
    role: "Clerk",
    employer: "Jay's Market",
    location: "Waldorf, MD",
    dates: "Jan 2024 – Dec 2024",
    bullets: [
      "Managed inventory and maintained organized workflows to support efficient daily operations.",
      "Delivered customer service and resolved inquiries while balancing multiple tasks in a fast-paced environment.",
    ],
  },
  {
    role: "Custodial Assistant",
    employer: "Idaho State University",
    location: "Pocatello, ID",
    dates: "Aug 2023 – Jan 2024",
    bullets: [
      "Performed minor equipment maintenance and troubleshooting to reduce operational downtime.",
      "Maintained campus safety and cleanliness and responded quickly to emergent operational issues.",
    ],
  },
] as const;

export const languages = [
  { name: "English", level: "Professional Proficiency" },
  { name: "Nepali", level: "Native/Bilingual" },
] as const;

export const interests = ["Technology", "Hands-on Prototyping", "Camping", "Sports"] as const;
