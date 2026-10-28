// Edit this file to update the portfolio without touching the components.
export const profile = {
  heroImage: "/hero.png", // Replace with '/hero.jpg' after adding your photo to public/.
  heroImageAlt: "", // Add a description when you insert your photo.
  name: "May Thu Nguyen",
  shortName: "May",
  location: "Sydney, Australia",
  email: "maythunguyen65@gmail.com",
  github: "https://github.com/Maythunguyen",
  linkedin: "https://www.linkedin.com/in/may-thu-nguyen/",
  title: "Software Engineer",
  intro:
    "I build thoughtful interfaces and the systems behind them. From a first interaction to an API response, I care about making the whole experience work.",
};
export const projects = [
  {
    id: "may-day",
    title: "May Day",
    category: "Full stack · Personal project",
    number: "01",
    image: "https://plus.unsplash.com/premium_photo-1689518469262-6f9499412ef0?q=80&w=1145&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description:
      "A little space to slow down. A journal website built with a Next.js frontend, a Python API, and generative AI.",
    tags: ["Next.js", "FastAPI", "MongoDB", "GenAI"],
    live: "https://may-day.vercel.app/",
    github: "https://github.com/Maythunguyen/may-day",
    detail:
      "A personal project exploring the full journey from an approachable journal interface to API integration and data storage. Built with Next.js, Tailwind CSS, Python, FastAPI, MongoDB, and Sentry.",
  },
  {
    id: "brainwave",
    title: "BrainWave",
    category: "AI interface · Learning project",
    number: "02",
    image: "https://plus.unsplash.com/premium_vector-1689096661819-990e68596c8b?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description:
      "An expressive interface for AI chat. A JavaScript Mastery-inspired project extended with AI chat integration.",
    tags: ["Next.js", "Python", "FastAPI", "GenAI"],
    live: "https://chat-with-brainwave.vercel.app",
    github: "https://github.com/Maythunguyen/chat-with-brainwave",
    detail:
      "An exploration of modern frontend presentation and AI chat. The visual starting point was inspired by JavaScript Mastery; the project extends that learning with an AI chat experience and a Python/FastAPI stack.",
  },
  {
    id: "iphone-may",
    title: "iPhone May",
    category: "Creative development · Learning project",
    number: "03",
    image: "https://images.unsplash.com/photo-1552083940-86877723de7a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description:
      "A study in product storytelling, interactive 3D, and animation. Inspired by JavaScript Mastery.",
    tags: ["React", "Three.js", "GSAP"],
    live: "https://i-phone-may.vercel.app/",
    github: "https://github.com/Maythunguyen/iPhone-May",
    detail:
      "A learning project focused on 3D presentation and motion. Built with React, Vite, Tailwind CSS, GSAP, and Three.js to practise turning a product page into an interactive experience.",
  },
];
export const moreProjects = [
  {
    title: "Calories Counter",
    type: "Next.js / FastAPI / GenAI",
    description: "A photo-based meal calorie estimation experiment.",
    href: "https://github.com/Maythunguyen/may-calories-counter",
  },
  {
    title: "May Contact List",
    type: "TypeScript / Next.js / REST API",
    description: "A contact management interface using JSONPlaceholder.",
    href: "https://github.com/Maythunguyen/contact-lists",
  },
  {
    title: "Stroke Prediction",
    type: "TensorFlow / Keras / Scikit-learn",
    description:
      "An academic comparison of neural networks, with recall-focused evaluation and a reported ROC AUC of 0.81.",
    href: "https://github.com/Maythunguyen/stroke-prediction-ml",
  },
];
export const experience = [
  {
    company: "Hyperlocalise",
    role: "Software Developer Intern",
    label: "LOCALISATION · AI WORKFLOWS",
    description:
      "Contributed to frontend development in a production codebase with strong typing and automated code review during the fundraising phase.",
  },
  {
    company: "PitchUp",
    role: "Full Stack · AI Engineer — Freelance",
    label: "BOOKING SYSTEMS · FULL STACK",
    description:
      "Worked on a core sports venue booking feature, implementing feature flow and improving the user interface.",
  },
  {
    company: "PitchUp",
    role: "Full Stack Engineer Intern",
    label: "PRODUCT DEVELOPMENT · UI/UX",
    description:
      "Contributed to the sports venue booking experience across feature flow and interface development.",
  },
  {
    company: "CliniScribe",
    role: "Junior Full Stack Engineer Intern",
    label: "HEALTHCARE · AI",
    description:
      "Worked on an NDIS report project and refined the CliniScribe user interface.",
  },
];
export const testimonials = [
  {
    quote:
      "May was an outstanding software engineering intern who consistently demonstrated proactivity, responsibility, and tenacity. Her strong work ethic and determination in solving complex technical challenges made her an invaluable team member.",
    name: "Barry Nguyen",
    role: "CTO at CliniScribe",
  },
  {
    quote:
      "I had the pleasure of working alongside May as a fellow Junior Software Engineer, and I can’t speak highly enough of her professionalism, generosity, and technical skill.",
    name: "Andrew Phan",
    role: "Software Engineer at CliniScribe",
  },
  {
    quote:
      "The attention to detail and innovative features. I believe in her potential and am excited to see her grow.",
    name: "Gull A.",
    role: "Software Engineer Lead at CliniScribe",
  },
];
