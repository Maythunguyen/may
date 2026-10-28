import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/500-italic.css";
import "./globals.css";
export const metadata: Metadata = {
  title: "May Thu Nguyen — Software Engineer",
  description:
    "Sydney-based software engineer building thoughtful interfaces, full stack applications, and AI-powered experiences.",
  openGraph: {
    title: "May Thu Nguyen — Software Engineer",
    description: "Thoughtful interfaces. Dependable systems. Explore my work.",
    type: "website",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
