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
  id: "may-roar",
  title: "MayRoar",
  category: "Mobile app · Personal project",
  number: "01",
  image:
    "https://images.unsplash.com/photo-1566807387450-b74aea0e727e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  description:
    "A strength and nutrition companion for women who lift. I'm designing and building MayRoar from the ground up, from mobile experiences and Python APIs to food-data validation and AI-assisted nutrition tracking.",
  tags: [
    "React Native",
    "Expo",
    "FastAPI",
    "Supabase",
    "Python",
    "DuckDB",
    "AI",
  ],
  live: "https://mayroar-mobile.expo.app/",
  github: "https://github.com/Maythunguyen/mayroar",
  detail: `MayRoar - Your body has patterns. Learn yours.

WHY I STARTED

I started MayRoar because I wanted to understand how nutrition, strength training, recovery, and the menstrual cycle work together.

I'm building it from the ground up, from product design in Figma to a React Native interface, Python FastAPI backend, and Supabase database.

THE FOOD-DATA PROBLEM

All this engineering work just so I can log my chicken and rice correctly.

At first, I wanted to know how many Australian food products I could obtain.

But I realised the better question was: how many of those products are actually good enough for someone to track their nutrition?

OPEN FOOD FACTS - DATA EXPLORATION

I used DuckDB and Jupyter Notebook to analyse Australian products from a worldwide Parquet dataset of approximately 7.6 GB.

83,378 Australian products identified.
67,339 had complete calorie, protein, carbohydrate, and fat values.
67,182 passed my initial numerical validation rules.
2,418 passed those rules but had large energy discrepancies.
64,764 passed the preliminary checks without a large energy discrepancy.

My checks covered missing values, numerical bounds, macro totals, and whether reported calories were consistent with estimated energy.

These were screening rules, not proof that every product was accurate.

THE PIPELINE CHALLENGE

Working with a large remote dataset introduced new problems: HTTP 429 rate limits, interrupted extraction, and temporary files that could look like completed outputs.

I learned to design for repeatability and failure recovery:

- Query Parquet efficiently with DuckDB.
- Work with local extracts instead of repeatedly downloading data.
- Save intermediate outputs.
- Use retries with exponential backoff for temporary failures.
- Publish final outputs only after successful processing.
- Make notebook operations safe to rerun.

A query succeeding once doesn't mean a pipeline is reliable.

AFCD - CHECKING MY OWN ASSUMPTIONS

I also analysed 1,588 foods from the Australian Food Composition Database.

All 1,588 had the four core nutrition values, with no negative values or individual macros above 100 g per 100 g.

Initially, I found 30 foods with calorie differences above 20 kcal per 100 g.

Then I realised my energy calculation hadn't accounted for alcohol.

Once I corrected the calculation, only two foods remained above that threshold. The mean absolute energy difference was approximately 2.8 kcal per 100 g after accounting for fibre and alcohol.

That was a useful lesson: just because data looks wrong doesn't mean the source is wrong. Sometimes the assumption or calculation needs fixing.

FROM DATA TO PRODUCT

The broader work connects food-data preparation to nutrition search, barcode scanning, custom food entries, meal logging, and AI-assisted photo analysis.

I'm continuing to develop the app and explore training, recovery, wearable integration, and cycle tracking.

WHAT I'VE LEARNED

Good engineering isn't just about getting an API or interface working. It's about questioning assumptions, testing the quality of the underlying data, designing for failures, and making deliberate trade-offs.

MayRoar is still evolving, and that's one of my favourite parts of building it.`,
},
  { 
    id: "may-day",
    title: "May Day",
    category: "Full stack · Personal project",
    number: "02",
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
    number: "03",
    image: "https://plus.unsplash.com/premium_vector-1689096661819-990e68596c8b?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    description:
      "An expressive interface for AI chat. A JavaScript Mastery-inspired project extended with AI chat integration.",
    tags: ["Next.js", "Python", "FastAPI", "GenAI"],
    live: "https://chat-with-brainwave.vercel.app",
    github: "https://github.com/Maythunguyen/chat-with-brainwave",
    detail:
      "An exploration of modern frontend presentation and AI chat. The visual starting point was inspired by JavaScript Mastery; the project extends that learning with an AI chat experience and a Python/FastAPI stack.",
  },
//   {
//     id: "iphone-may",
//     title: "iPhone May",
//     category: "Creative development · Learning project",
//     number: "03",
//     image: "https://images.unsplash.com/photo-1552083940-86877723de7a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//     description:
//       "A study in product storytelling, interactive 3D, and animation. Inspired by JavaScript Mastery.",
//     tags: ["React", "Three.js", "GSAP"],
//     live: "https://i-phone-may.vercel.app/",
//     github: "https://github.com/Maythunguyen/iPhone-May",
//     detail:
//       "A learning project focused on 3D presentation and motion. Built with React, Vite, Tailwind CSS, GSAP, and Three.js to practise turning a product page into an interactive experience.",
//   },
];
export const moreProjects = [
  {
    title: "Calories Counter",
    type: "Next.js / FastAPI / GenAI",
    description: "A photo-based meal calorie estimation experiment.",
    href: "https://may-calories-counter.vercel.app",
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
    role: "Full Stack · AI Developer - Contract",
    label: "BOOKING SYSTEMS · FULL STACK",
    description:
      "Worked on a core sports venue booking feature, implementing feature flow and improving the user interface.",
  },
  {
    company: "PitchUp",
    role: "Full Stack Developer Intern",
    label: "PRODUCT DEVELOPMENT · UI/UX",
    description:
      "Contributed to the sports venue booking experience across feature flow and interface development.",
  },
  {
    company: "CliniScribe",
    role: "Full Stack Developer Intern",
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
  {
    quote:
      "May is an outstanding software engineer and AI expert. Through my time in working at the full-stack platform with May at PitchUp, I was impressed by her technical depth and her critical thinking during team meeting. Additionally, May is a fantastic teammate. Whenever I needed support, May was always there to support me and gave me guidance whenever it was needed. Therefore, I strongly recommend May for her future professional pursuits.",
    name: "Wei Cheng Zhang.",
    role: "Software Engineer at PitchUp",
  },
];
