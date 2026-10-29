import { toolkit } from "@/lib/portfolio-content";

export default function Toolkit() {
  return (
    <div
      data-reveal
      aria-labelledby="toolkit-title"
      className="
        relative isolate mt-14 overflow-hidden
        rounded-[1.5rem]
        border-[0.0625rem] border-white/15
        bg-[#111111] p-6
        sm:p-8 lg:p-10
      "
    >
      {/* Subtle orange glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-16 -top-24 -z-10
          size-[20rem] rounded-full
          bg-[#ff7137]/10 blur-[5rem]
        "
      />

      <div className="mb-8">
        <p className="mb-4 text-xs tracking-[0.2em] text-[#ff7137]">
          MY TOOLKIT
        </p>

        <h3
          id="toolkit-title"
          className="
            text-3xl font-medium leading-tight
            tracking-tight text-[#f4f1ec]
            sm:text-4xl
          "
        >
          Tools I <span className="text-[#ff7137]">build with.</span>
        </h3>
      </div>

      <ul
        className="
          m-0 grid list-none grid-cols-2
          gap-3 p-0 sm:grid-cols-3
          lg:grid-cols-4 xl:grid-cols-6
        "
      >
        {toolkit.map((tool, index) => (
          <li
            key={tool}
            className="
              group relative flex min-h-[7rem]
              min-w-0 flex-col justify-between gap-4
              rounded-[0.875rem]
              border-[0.0625rem] border-white/10
              bg-black/20 p-4
              transition-colors duration-300
              hover:border-[#ff7137]/50
              hover:bg-[#ff7137]/[0.06]
              sm:p-5
            "
          >
            <span
              aria-hidden="true"
              className="
                text-[0.6875rem] tracking-widest
                text-white/30 transition-colors
                group-hover:text-[#ff7137]
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <span
              className="
                break-words text-base font-medium
                leading-snug text-[#f4f1ec]
                sm:text-lg
              "
            >
              {tool}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}