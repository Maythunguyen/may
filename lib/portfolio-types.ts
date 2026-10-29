import type { projects, testimonials } from "./content";

export type Project = (typeof projects)[number];
export type Testimonial = (typeof testimonials)[number];
