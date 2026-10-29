// Lists extracted from the original component. Existing content.ts stays intact.
export const navigation = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
] as const;

export const toolkit = [
  "TypeScript", "JavaScript", "React", "Next.js", "Python", "FastAPI",
  "Ruby on Rails", "PostgreSQL", "Supabase", "MongoDB", "Three.js", "GSAP",
];

export const principles = [
  {
    title: "Make it useful.",
    body: "Start with the person using it. Understand their problem before choosing a tool.",
  },
  {
    title: "Keep it clear.",
    body: "Readable code, deliberate interfaces, and communication that makes the next step obvious.",
  },
  {
    title: "Own the details.",
    body: "Follow the data flow. Consider loading states, failure cases, and what happens after the happy path.",
  },
];
