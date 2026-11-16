type ProjectStoryProps = {
  detail: string;
};

const sectionTitles = new Set([
  "WHY I STARTED",
  "THE FOOD-DATA PROBLEM",
  "OPEN FOOD FACTS - DATA EXPLORATION",
  "THE PIPELINE CHALLENGE",
  "AFCD - CHECKING MY OWN ASSUMPTIONS",
  "FROM DATA TO PRODUCT",
  "WHAT I'VE LEARNED",
]);

type StorySection = {
  title: string;
  lines: string[];
};

function splitIntoSections(detail: string) {
  const introduction: string[] = [];
  const sections: StorySection[] = [];
  let currentSection: StorySection | undefined;

  for (const rawLine of detail.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (sectionTitles.has(line)) {
      currentSection = { title: line, lines: [] };
      sections.push(currentSection);
      continue;
    }

    if (currentSection) {
      currentSection.lines.push(line);
    } else {
      introduction.push(line);
    }
  }

  return {
    introduction: introduction.join("\n").trim(),
    sections,
  };
}

function StoryParagraphs({ text }: { text: string }) {
  const blocks = text
    .trim()
    .split(/\n\s*\n/)
    .filter(Boolean);

  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        const lines = block
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);

        const isBulletList = lines.every((line) =>
          line.startsWith("- "),
        );

        const isResultsList =
          lines.length > 1 &&
          lines.every((line) => /^\d/.test(line));

        if (isBulletList || isResultsList) {
          return (
            <ul
              key={index}
              className="
                m-0 list-disc space-y-3 pl-5
                text-sm leading-7 text-white/70
                marker:text-[#ff7137]
                sm:text-base
              "
            >
              {lines.map((line, lineIndex) => (
                <li key={lineIndex} className="pl-1">
                  {line.replace(/^- /, "")}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={index}
            className="
              m-0 whitespace-pre-line text-sm
              leading-7 text-white/65 sm:text-base sm:leading-8
            "
          >
            {block}
          </p>
        );
      })}
    </div>
  );
}

export default function ProjectStory({
  detail,
}: ProjectStoryProps) {
  const { introduction, sections } = splitIntoSections(detail);

  // Other projects still display their ordinary descriptions.
  if (sections.length === 0) {
    return <StoryParagraphs text={detail} />;
  }

  return (
    <div className="mx-auto w-full max-w-[42rem]">
      {introduction && (
        <p
          className="
            m-0 border-l-2 border-[#ff7137] pl-5
            text-lg font-medium leading-8
            text-[#f4f1ec] sm:text-xl
          "
        >
          {introduction}
        </p>
      )}

      <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
        {sections.map((section, index) => (
          <section
            key={section.title}
            className="border-t border-white/10 pt-6 sm:pt-8"
          >
            <div className="mb-5 flex items-start gap-3">
              <span
                aria-hidden="true"
                className="
                  pt-1 text-xs font-medium
                  tabular-nums text-[#ff7137]
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3
                className="
                  m-0 text-base font-medium leading-7
                  tracking-wide text-[#f4f1ec] sm:text-lg
                "
              >
                {section.title}
              </h3>
            </div>

            <StoryParagraphs text={section.lines.join("\n")} />
          </section>
        ))}
      </div>
    </div>
  );
}