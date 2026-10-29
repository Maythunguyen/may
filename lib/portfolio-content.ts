// Lists extracted from the original component. Existing content.ts stays intact.
export const navigation = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
] as const;

export const toolkit = [
  "TypeScript", "JavaScript", "React", "Next.js", "Python", "FastAPI", "Node.js", "AL/ML",
  "Ruby on Rails", "PostgreSQL", "Supabase", "MongoDB",
];

export const principles = [
  {
    title: "Keep it simple.",
    body:
      "Find the simplest solution that solves the problem well. Keep the code readable and give every feature a clear purpose.",
  },
  {
    title: "Put users first.",
    body:
      "Understand the person behind the request. Start with their problem, question assumptions, and build something that makes their day easier.",
  },
  {
    title: "Own the details.",
    body:
      "Follow the work from idea to implementation. Check the data, handle the edge cases, and take responsibility for what happens after it ships.",
  },
  {
    title: "Communicate clearly.",
    body:
      "Explain the reasoning, ask questions early, and make blockers visible. Listen to feedback and help the team move forward together.",
  },
];
