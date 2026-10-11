"use client";

import Timeline from "@/components/ui/timeline";

export default function Work() {
  const data = [
    {
      title: "2022 🚀",
      content: Card({
        title: "Start Journey",
        desc: "Started my programming journey and entered the world of development, problem-solving and logic building.",
        points: [
          "Learned C, C++, Python",
          "Started DSA & problem solving",
          "Built programming fundamentals",
          "Began solving LeetCode problems",
        ],
        tags: ["C++", "Python", "DSA", "Logic"],
        color: "blue",
      }),
    },

    {
      title: "2023 🌐",
      content: Card({
        title: "Web Development",
        desc: "Entered frontend development and started building modern responsive UI.",
        points: [
          "HTML, CSS, JavaScript",
          "Responsive UI Development",
          "React Ecosystem",
          "Tailwind CSS",
        ],
        tags: ["HTML", "CSS", "React"],
        color: "cyan",
      }),
    },

    {
      title: "2024 ⚡",
      content: Card({
        title: "Full Stack Engineering",
        desc: "Built scalable full-stack applications with APIs and authentication.",
        points: [
          "Node.js & Express",
          "MongoDB",
          "JWT Authentication",
          "Full Stack Projects",
        ],
        tags: ["Node.js", "MongoDB", "Auth"],
        color: "emerald",
      }),
    },

    {
      title: "2025 🏆",
      content: Card({
        title: "Career Breakthrough",
        desc: "Grew through advanced projects, problem-solving and professional opportunities.",
        points: [
          "Offer from L7 Informatics",
          "Offer from MS Square",
          "Advanced Projects",
          "Strong DSA Practice",
        ],
        tags: ["Offers", "DSA"],
        color: "purple",
      }),
    },

    /* =========================================================
       2026 — VISION WAVES
    ========================================================= */

    {
      title: "2026 🎯",
      highlight: true,
      content: Card({
        title: "Vision Waves",
        desc: "Completed an internship in the Software Development Department as a Trainee from June to August 2026.",
        points: [
          "Software Development Department",
          "Trainee Software Developer",
          "Development Tasks",
          "Professional Software Development Environment",
        ],
        tags: [
          "Vision Waves",
          "Software Development",
          "Trainee",
        ],
        color: "cyan",
        highlight: true,
        certificate: true,
      }),
    },

    /* =========================================================
       OCTOBER 2026 — ADVANCE SOLUTION
    ========================================================= */

    // {
    //   title: "Oct 2026 🚀",
    //   highlight: true,
    //   content: Card({
    //     title: "Advance Solution",
    //     desc: "Started working at Advance Solution as a ServiceNow Backend Developer.",
    //     points: [
    //       "ServiceNow Backend Development",
    //       "Backend Development",
    //       "Enterprise Systems",
    //       "Business Logic & Workflows",
    //     ],
    //     tags: [
    //       "Advance Solution",
    //       "ServiceNow",
    //       "Backend",
    //     ],
    //     color: "purple",
    //     highlight: true,
    //   }),
    // },
  ];

  return (
    <section
      id="work"
      className="
        relative
        overflow-hidden
        bg-white
        text-black
        dark:bg-black
        dark:text-white
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="px-6 pt-24 text-center">
        <h2
          className="
            text-5xl
            font-black
            tracking-tight
            md:text-7xl
          "
        >
          Work &{" "}
          <span
            className="
              bg-gradient-to-r
              from-cyan-500
              to-blue-500
              bg-clip-text
              text-transparent
            "
          >
            Growth
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-relaxed
            text-neutral-600
            dark:text-neutral-400
          "
        >
          A journey of learning, building and continuously
          improving through real-world development.
        </p>
      </div>

      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <div className="relative z-10 mt-16">
        <Timeline data={data} />
      </div>
    </section>
  );
}


/* ============================================================
   CARD COMPONENT
============================================================ */

function Card({
  title,
  desc,
  points,
  tags,
  color,
  highlight,
  certificate,
}: {
  title: string;
  desc: string;
  points: string[];
  tags: string[];
  color: "blue" | "cyan" | "emerald" | "purple";
  highlight?: boolean;
  certificate?: boolean;
}) {
  const colorClasses = {
    blue: {
      dot: "bg-blue-500",
      border:
        "border-blue-500/20 dark:border-blue-400/20",
      text:
        "text-blue-600 dark:text-blue-300",
      bg:
        "bg-blue-500/[0.05]",
      hover:
        "hover:border-blue-500/40",
    },

    cyan: {
      dot: "bg-cyan-400",
      border:
        "border-cyan-500/20 dark:border-cyan-400/20",
      text:
        "text-cyan-600 dark:text-cyan-300",
      bg:
        "bg-cyan-500/[0.05]",
      hover:
        "hover:border-cyan-500/40",
    },

    emerald: {
      dot: "bg-emerald-500",
      border:
        "border-emerald-500/20 dark:border-emerald-400/20",
      text:
        "text-emerald-600 dark:text-emerald-300",
      bg:
        "bg-emerald-500/[0.05]",
      hover:
        "hover:border-emerald-500/40",
    },

    purple: {
      dot: "bg-purple-500",
      border:
        "border-purple-500/20 dark:border-purple-400/20",
      text:
        "text-purple-600 dark:text-purple-300",
      bg:
        "bg-purple-500/[0.05]",
      hover:
        "hover:border-purple-500/40",
    },
  };

  const theme = colorClasses[color];

  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        p-8
        backdrop-blur-xl

        border-black/10
        bg-white/70
        shadow-lg

        dark:border-white/10
        dark:bg-white/[0.03]
        dark:shadow-none

        ${
          highlight
            ? `
              border-cyan-500/20
              bg-gradient-to-br
              from-cyan-500/[0.08]
              via-blue-500/[0.04]
              to-transparent

              dark:border-cyan-400/15
              dark:from-cyan-500/[0.10]
              dark:via-blue-500/[0.05]
            `
            : ""
        }

        transition-all
        duration-500
        ${highlight ? "hover:-translate-y-1" : ""}
      `}
    >
      {/* =====================================================
          SUBTLE GLOW
      ===================================================== */}

      {highlight && (
        <>
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-cyan-400/[0.08]
              blur-[80px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-20
              -left-20
              h-40
              w-40
              rounded-full
              bg-blue-500/[0.05]
              blur-[70px]
            "
          />
        </>
      )}

      <div className="relative z-10">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="flex items-start justify-between gap-4">

          <div className="flex items-center gap-3">

            {/* VISION WAVES LOGO */}
            {highlight && title === "Vision Waves" && (
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-cyan-400/20
                  bg-white
                  shadow-[0_0_25px_rgba(14,165,233,0.15)]
                "
              >
                <span
                  className="
                    text-sm
                    font-black
                    tracking-tight
                    text-blue-600
                  "
                >
                  VW
                </span>
              </div>
            )}

            <div>
              <h3
                className="
                  text-3xl
                  font-black
                  tracking-tight
                  text-black
                  dark:text-white
                "
              >
                {title}
              </h3>

              {/* VISION WAVES SUBTITLE */}
              {highlight && title === "Vision Waves" && (
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <span
                    className="
                      text-sm
                      font-medium
                      text-cyan-600
                      dark:text-cyan-400
                    "
                  >
                    Software Development
                  </span>

                  <span className="text-neutral-400">
                    •
                  </span>

                  <span
                    className="
                      text-sm
                      text-neutral-500
                      dark:text-neutral-400
                    "
                  >
                    June – August 2026
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* INTERNSHIP BADGE */}
          {highlight && title === "Vision Waves" && (
            <span
              className="
                hidden
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/[0.06]
                px-3
                py-1.5
                text-xs
                font-semibold
                text-cyan-600
                dark:text-cyan-300
                sm:block
              "
            >
              Internship
            </span>
          )}

          {/* CURRENT ROLE BADGE */}
          {highlight && title === "Advance Solution" && (
            <span
              className="
                hidden
                rounded-full
                border
                border-purple-500/20
                bg-purple-500/[0.06]
                px-3
                py-1.5
                text-xs
                font-semibold
                text-purple-600
                dark:text-purple-300
                sm:block
              "
            >
              Current
            </span>
          )}
        </div>

        {/* ===================================================
            DESCRIPTION
        =================================================== */}

        <p
          className="
            mt-5
            leading-7
            text-neutral-700
            dark:text-neutral-300
          "
        >
          {desc}
        </p>

        {/* ===================================================
            POINTS
        =================================================== */}

        <ul
          className="
            mt-5
            space-y-3
            text-neutral-600
            dark:text-neutral-400
          "
        >
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-3"
            >
              <span
                className={`
                  mt-2
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  ${theme.dot}
                `}
              />

              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* ===================================================
            TAGS
        =================================================== */}

        <div className="mt-6 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`
                rounded-full
                border
                px-4
                py-2
                text-sm
                font-semibold
                ${theme.border}
                ${theme.text}
                ${theme.bg}
                transition-all
                duration-300
                ${theme.hover}
              `}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ===================================================
            CERTIFICATE BUTTON
        =================================================== */}

        {certificate && (
          <div
            className="
              mt-7
              border-t
              border-black/10
              pt-6
              dark:border-white/[0.08]
            "
          >
            <a
              href="/certificates/s-internship-certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-cyan-500/20
                bg-cyan-500/[0.05]
                px-5
                py-3
                text-sm
                font-semibold
                text-cyan-600

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-cyan-500/40
                hover:bg-cyan-500/[0.10]
                hover:shadow-[0_8px_30px_rgba(14,165,233,0.10)]

                dark:text-cyan-300
                dark:hover:text-cyan-200
              "
            >
              <span>📄</span>

              <span>
                View Internship Certificate
              </span>

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-0.5
                "
              >
                ↗
              </span>
            </a>
          </div>
        )}

        {/* ===================================================
            VERIFIED FOOTER FOR VISION WAVES
        =================================================== */}

        {certificate && (
          <div
            className="
              mt-5
              flex
              items-center
              gap-2
              text-xs
              text-neutral-500
              dark:text-neutral-500
            "
          >
            <span
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-cyan-500/10
                font-bold
                text-cyan-500
              "
            >
              ✓
            </span>

            Software Development Internship
          </div>
        )}

      </div>
    </div>
  );
}


