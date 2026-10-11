"use client";

import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-32

        bg-white
        text-black

        dark:bg-black
        dark:text-white
      "
    >
      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0">

        {/* LIGHT MODE */}
        <div className="absolute inset-0 block dark:hidden bg-white" />

        {/* DARK MODE */}
        <div className="absolute inset-0 hidden dark:block bg-black" />

        {/* GLOW */}
        <div
          className="
            absolute
            left-1/2
            top-40
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-500/10
            blur-[120px]
          "
        />
      </div>

      {/* 🔥 HEADER */}
      <div className="relative z-10 mx-auto mb-24 max-w-5xl px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mb-4
            text-sm
            font-semibold
            uppercase
            tracking-[0.35em]
            text-cyan-500
          "
        >
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mx-auto
            max-w-5xl

            text-5xl
            font-black
            leading-[1.05]
            tracking-tight

            text-black
            dark:text-white

            md:text-7xl
          "
        >
          Building products that feel{" "}

          <span
            className="
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-indigo-500
              bg-clip-text
              text-transparent
            "
          >
            alive
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="
            mx-auto
            mt-8
            max-w-3xl

            text-lg
            font-medium
            leading-relaxed

            text-neutral-700
            dark:text-neutral-200
          "
        >
          I build modern fullstack applications focused on
          performance, interaction, scalability, and clean UI systems.
          Passionate about creating experiences that feel smooth,
          intuitive, and developer-first.
        </motion.p>

      </div>

      {/* 🔥 TECH STACK */}
      <div
        className="
          relative
          z-10
          mb-24
          flex
          flex-wrap
          items-center
          justify-center
          gap-4
          px-6
        "
      >
        {[
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Tailwind",
          "Framer Motion",
          "MongoDB",
          "Shadcn",
        ].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.08 }}
            className="
              rounded-full
              border

              border-black/10
              dark:border-white/10

              bg-black/[0.03]
              dark:bg-white/[0.04]

              px-5
              py-2

              text-sm
              font-medium

              text-neutral-700
              dark:text-neutral-300

              backdrop-blur-xl
              transition-all

              hover:border-cyan-400/40
              hover:bg-cyan-400/10
              hover:text-cyan-500
            "
          >
            {item}
          </motion.div>
        ))}
      </div>

      {/* 🔥 MACBOOK */}
      <div className="relative z-10">

        <MacbookScroll
          src="/images/portfolio-preview.png"
          showGradient={false}
          title={
            <span
              className="
                font-black
                tracking-tight

                text-black
                dark:text-white
              "
            >
              Engineering interfaces that feel{" "}

              <span
                className="
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-indigo-500
                  bg-clip-text
                  text-transparent
                "
              >
                alive
              </span>
            </span>
          }
          badge={
            <div
              className="
                rounded-full
                border

                border-cyan-400/20

                bg-cyan-400/10
                px-4
                py-2

                text-xs
                font-semibold
                text-cyan-400

                backdrop-blur-xl
              "
            >
              Puneet.dev
            </div>
          }
        />

      </div>

      {/* 🔥 STATS */}
      <div
        className="
          relative
          z-10
          mx-auto
          mt-20
          grid
          max-w-6xl
          grid-cols-2
          gap-8
          px-6

          md:grid-cols-4
        "
      >
        {[
          {
            value: "72+",
            label: "GitHub Repositories",
          },
          {
            value: "350+",
            label: "DSA Problems Solved",
          },
          {
            value: "77K+",
            label: "Revenue Generated",
          },
          {
            value: "2026",
            label: "Graduation Year",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="
  rounded-3xl
  border

  border-black/10
  dark:border-white/10

  bg-white
  dark:bg-white/[0.03]

  p-8
  text-center

  backdrop-blur-xl

  shadow-[0_10px_40px_rgba(0,0,0,0.08)]
  dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
"
          >
            <h3
              className="
                text-4xl
                font-black

                text-black
                dark:text-white
              "
            >
              {item.value}
            </h3>

            <p
              className="
                mt-3
                text-sm
                font-medium

                text-neutral-600
                dark:text-neutral-400
              "
            >
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}