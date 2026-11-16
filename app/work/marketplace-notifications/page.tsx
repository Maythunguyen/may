import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketplace Notifications | May Thu Nguyen",
  description:
    "How I investigated a gap in a sports venue marketplace and built a notification flow connecting booking interest to venue owners.",
};

const sections = [
  { id: "problem", label: "The problem" },
  { id: "investigation", label: "The investigation" },
  { id: "decision", label: "The decision" },
  { id: "implementation", label: "The build" },
  { id: "failures", label: "Failure handling" },
  { id: "reflection", label: "What I learned" },
];

const notificationSteps = [
  {
    title: "Coach expresses interest",
    description: "The platform records the booking enquiry.",
  },
  {
    title: "Venue contact is checked",
    description: "The system looks for a valid contact email.",
  },
  {
    title: "Notification is sent",
    description:
      "The venue receives the enquiry without the coach’s direct contact details.",
  },
  {
    title: "Reply is connected to the lead",
    description:
      "A platform-controlled reply address routes the response back to the enquiry.",
  },
  {
    title: "Coach is updated",
    description: "The response is recorded and the coach is notified.",
  },
];

const failureCases = [
  {
    title: "No contact email",
    description:
      "Skip the notification and log why it could not be sent.",
  },
  {
    title: "Email delivery fails",
    description:
      "Record the failure without breaking the main interest submission.",
  },
  {
    title: "No external venue ID",
    description:
      "Skip the external venue notification when the required reference is missing.",
  },
  {
    title: "Personal contact details",
    description:
      "Keep the coach’s direct contact information out of the venue notification.",
  },
];

function StorySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 border-t border-white/10 py-10 sm:py-14"
    >
      <p className="m-0 text-xs tracking-[0.18em] text-[#ff7137]">
        {number}
      </p>

      <h2
        id={`${id}-title`}
        className="mb-6 mt-3 text-2xl font-medium tracking-tight text-[#f4f1ec] sm:text-3xl"
      >
        {title}
      </h2>

      <div className="space-y-5 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
        {children}
      </div>
    </section>
  );
}

function KeyPoint({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-[#ff7137] py-1 pl-5">
      <p className="m-0 text-lg font-medium leading-8 text-[#f4f1ec]">
        {children}
      </p>
    </div>
  );
}

export default function MarketplaceNotificationsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f4f1ec]">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-white/60 transition-colors hover:text-[#ff7137] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff7137]"
        >
          <span aria-hidden="true">←</span>
          Back to portfolio
        </Link>

        <header className="pb-12 pt-10 sm:pb-16">
          <p className="m-0 text-xs uppercase tracking-[0.2em] text-[#ff7137]">
            How I work in practice
          </p>

          <h1 className="mb-0 mt-6 max-w-4xl text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            Connecting booking interest to venue owners.
          </h1>

          <p className="mb-0 mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            A look at how I investigated a marketplace problem, used data
            to challenge the initial direction, and built a notification
            flow across the application.
          </p>

          <dl className="mt-9 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-3">
            {[
              ["Context", "Sports venue marketplace"],
              ["My role", "Freelance software engineer"],
              ["Focus", "Investigation, design & implementation"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs uppercase tracking-widest text-white/40">
                  {label}
                </dt>
                <dd className="ml-0 mt-2 text-sm leading-6 text-white/80">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="grid items-start gap-10 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16">
          <nav
            aria-label="Case study sections"
            className="lg:sticky lg:top-24"
          >
            <p className="mb-4 mt-0 text-xs uppercase tracking-widest text-white/40">
              In this story
            </p>

            <ol className="m-0 grid list-none grid-cols-2 gap-2 p-0 lg:grid-cols-1">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex min-h-11 items-center gap-3 rounded-lg px-2 py-2 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-[#ff7137] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ff7137]"
                  >
                    <span className="text-xs text-[#ff7137]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="min-w-0">
            <StorySection
              id="problem"
              number="01"
              title="The interest was there. The connection was missing."
            >
              <p>
                The platform connected coaches and clubs with sports venues.
                Venue owners had available time slots, while coaches were
                still searching online and calling around for suitable space.
              </p>
              <p>
                The team was manually bridging that gap. When a coach
                expressed interest in an external venue, the enquiry could
                depend on someone forwarding it rather than the product
                connecting the two sides.
              </p>
              <KeyPoint>
                A coach could express interest without the venue ever
                receiving that signal.
              </KeyPoint>
            </StorySection>

            <StorySection
              id="investigation"
              number="02"
              title="I checked what the data actually supported."
            >
              <p>
                I queried the existing venue data to understand how much of
                the listed supply could support a real booking journey.
                Many records had a URL, but lacked useful booking details
                such as pricing or opening hours.
              </p>
              <p>
                Some links pointed to council websites or map listings
                rather than booking pages. Comparing the listings with
                actual booking activity highlighted a mismatch between
                the data being collected and the demand the platform
                needed to serve.
              </p>
              <KeyPoint>
                More listings did not automatically mean more bookable venues.
              </KeyPoint>
            </StorySection>

            <StorySection
              id="decision"
              number="03"
              title="Connect existing demand before adding more complexity."
            >
              <p>
                I focused on the gap between a coach expressing interest
                and a venue receiving it. The aim was to automate that
                handoff while keeping replies and lead tracking within
                the platform.
              </p>
              <p>
                Before implementation, I mapped the users, data flow,
                changes across the application, and likely failure cases.
                I sketched the logic in plain language to make missing
                assumptions easier to spot.
              </p>
            </StorySection>

            <StorySection
              id="implementation"
              number="04"
              title="One enquiry, followed through the system."
            >
              <p>
                I built a notification flow that checks the venue’s contact
                information, sends the enquiry, and connects a venue’s
                response to the original lead.
              </p>

              <ol className="m-0 list-none divide-y divide-white/10 rounded-2xl border border-white/15 bg-white/[0.025] px-5 py-1 sm:px-6">
                {notificationSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4 py-5">
                    <span
                      aria-hidden="true"
                      className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#ff7137]/10 text-xs text-[#ff7137]"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="m-0 text-sm font-medium leading-7 text-[#f4f1ec] sm:text-base">
                        {step.title}
                      </h3>
                      <p className="mb-0 mt-1 text-sm leading-6 text-white/55">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <p>
                The work crossed several parts of the application: lead
                statuses, a table for replies, backend services, API
                endpoints, an inbound email webhook, and frontend
                confirmation and status views.
              </p>
            </StorySection>

            <StorySection
              id="failures"
              number="05"
              title="Design for the cases where something is missing."
            >
              <p>
                An email service failing should not cause the main request
                to fail. I designed the notification step to record
                problems and keep failures contained.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {failureCases.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                  >
                    <h3 className="m-0 text-base font-medium text-[#f4f1ec]">
                      {item.title}
                    </h3>
                    <p className="mb-0 mt-3 text-sm leading-7 text-white/60">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </StorySection>

            <StorySection
              id="reflection"
              number="06"
              title="Build the connection. Then measure what changes."
            >
              <p>
                The implementation creates a trackable path from booking
                interest to venue response. I’m not claiming a measured
                increase in bookings or revenue here.
              </p>
              <p>
                To assess its impact, I would track notification delivery,
                venue response rates, time to reply, and how often an
                enquiry becomes a booking.
              </p>
              <p>
                Future work could use repeated enquiries to show venues
                where demand exists. More complex automation would come
                after understanding those signals.
              </p>
              <KeyPoint>
                The most useful work started with questioning what needed
                to be built.
              </KeyPoint>
            </StorySection>

            <footer className="border-t border-white/10 pt-6">
              <p className="m-0 text-xs leading-6 text-white/40">
                Company-specific details and sensitive metrics have been
                generalised.
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-[#ff7137] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff7137]"
              >
                <span aria-hidden="true">←</span>
                Back to portfolio
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}