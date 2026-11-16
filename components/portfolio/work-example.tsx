import Link from "next/link";

const highlights = [
  {
    title: "Investigate",
    description:
      "Use the data to understand where the booking journey breaks.",
  },
  {
    title: "Connect",
    description:
      "Give venue owners a clear way to receive and respond to interest.",
  },
  {
    title: "Build for failure",
    description:
      "Handle missing contacts and delivery failures without losing the lead.",
  },
];

export default function WorkExample() {
  return (
    <section
      aria-labelledby="work-example-title"
      className="w-full min-w-0"
    >
      <article className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.025]">
        <div className="grid items-start gap-8 p-6 sm:gap-10 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
          <div className="min-w-0">
            <p className="m-0 text-xs uppercase tracking-[0.18em] text-[#ff7137]">
              How I work in practice
            </p>

            <p className="mb-0 mt-4 text-xs leading-6 text-white/45">
              Company work · Sports venue marketplace
            </p>

            <h3
              id="work-example-title"
              className="mb-0 mt-3 max-w-lg text-[1.75rem] font-medium leading-[1.2] tracking-tight text-[#f4f1ec] sm:text-3xl lg:text-4xl"
            >
              Connecting booking interest to venue owners.
            </h3>

            <p className="mb-0 mt-5 max-w-lg text-sm leading-7 text-white/65">
              Coaches were expressing interest, but venue owners weren’t
              automatically hearing about it. I investigated the data and
              built a notification flow with tracked replies and failure
              handling.
            </p>

            <Link
              href="/work/marketplace-notifications"
              className="group mt-6 inline-flex min-h-11 items-center gap-3 rounded-full bg-[#ff7137] px-5 py-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-[#ff8857] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff7137]"
            >
              Read the case study
              <span
                aria-hidden="true"
                className="transition-transform motion-safe:group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          <ol className="m-0 min-w-0 list-none divide-y divide-white/10 border-t border-white/10 p-0 lg:border-t-0">
            {highlights.map((item, index) => (
              <li
                key={item.title}
                className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-3 py-5 last:pb-0 lg:first:pt-0"
              >
                <span
                  aria-hidden="true"
                  className="pt-1 text-xs leading-6 tabular-nums text-[#ff7137]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h4 className="m-0 text-lg font-medium leading-7 text-[#f4f1ec]">
                    {item.title}
                  </h4>

                  <p className="mb-0 mt-2 max-w-md text-sm leading-7 text-white/60">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <footer className="border-t border-white/10 px-6 py-4 sm:px-8 lg:px-10">
          <p className="m-0 text-xs leading-6 text-white/45">
            Product thinking · Data investigation · Full-stack development
          </p>
        </footer>
      </article>
    </section>
  );
}