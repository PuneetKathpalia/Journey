"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Hero() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = () => {
    if (!query.trim()) return;

    const question = query.toLowerCase();

    if (question.includes("project")) {
      setResponse(
        "Modern UI-focused projects built with Next.js, React and animations."
      );
    } else if (question.includes("skill")) {
      setResponse(
        "React, Next.js, TypeScript, Tailwind CSS, Node.js and modern animations."
      );
    } else if (question.includes("experience")) {
      setResponse(
        "Full-stack development, responsive UI systems and backend engineering."
      );
    } else {
      setResponse("Ask about my projects, skills, or experience.");
    }

    setQuery("");
  };

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden

        bg-white
        text-neutral-900

        dark:bg-[#05070a]
        dark:text-white
      "
    >
      {/* =====================================================
          ACETERNITY BACKGROUND LINES
         ===================================================== */}

      <BackgroundLines
        svgOptions={{
          duration: 12,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          min-h-screen
          w-full
          items-center
          justify-center
          bg-transparent
        "
      >
        <div className="h-full w-full" />
      </BackgroundLines>

      {/* =====================================================
          HERO CONTENT
         ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          flex-col
          items-center
          justify-center
          px-6
          py-28
          text-center
        "
      >
        {/* =================================================
            AVATAR
           ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-10"
        >
          <div className="relative">
            {/* Avatar border */}

            <div
              className="
                relative
                z-10
                rounded-full
                p-[2px]

                bg-gradient-to-r
                from-blue-500
                via-cyan-400
                to-indigo-500
              "
            >
              <div
                className="
                  rounded-full
                  bg-white
                  p-1
                  dark:bg-black
                "
              >
                <Image
                  src="/bitmoji2.jpeg"
                  alt="Puneet Kathpalia"
                  width={190}
                  height={190}
                  priority
                  className="
                    rounded-full
                    object-cover
                  "
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            HEADING
           ================================================= */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            relative
            text-4xl
            font-semibold
            leading-tight
            tracking-tight
            md:text-6xl
            lg:text-7xl
          "
        >
          <span className="text-neutral-900 dark:text-white">
            Hi, I'm{" "}
          </span>

          <span
            className="
              bg-gradient-to-r
              from-blue-500
              via-cyan-400
              to-indigo-400
              bg-clip-text
              text-transparent

              dark:from-blue-400
              dark:via-cyan-300
              dark:to-indigo-300
            "
          >
            Puneet Kathpalia
          </span>
        </motion.h1>

        {/* =================================================
            ROLE
           ================================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="
            mt-5
            text-sm
            text-neutral-600
            md:text-lg

            dark:text-neutral-400
          "
        >
          FullStack Developer · Problem Solver · Tech Enthusiast
        </motion.p>

        {/* =================================================
            TAGLINE
           ================================================= */}

        <div
          className="
            relative
            z-20
            mt-4
            text-sm
            text-neutral-600
            md:text-base

            dark:text-neutral-400
          "
        >
          <TextGenerateEffect
            words="Code with purpose. Design with logic."
          />
        </div>

        {/* =================================================
            ASK INPUT
           ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.45,
          }}
          className="
            relative
            z-30
            mt-9
            flex
            w-full
            max-w-md
            items-center
            justify-center
            gap-3
          "
        >
          {/* Input */}

          <div
            className="
              flex
              flex-1
              items-center
              rounded-full

              border
              border-neutral-200

              bg-white/80

              px-4
              py-3

              shadow-sm
              backdrop-blur-xl

              dark:border-white/10
              dark:bg-white/5
              dark:shadow-none
            "
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAsk();
                }
              }}
              placeholder="Ask about skills..."
              className="
                w-full
                bg-transparent
                text-sm
                text-black
                outline-none

                placeholder:text-neutral-400

                dark:text-white
                dark:placeholder:text-neutral-500
              "
            />
          </div>

          {/* Ask button */}

          <button
            onClick={handleAsk}
            className="
              rounded-full

              bg-black
              px-5
              py-3

              text-sm
              font-medium
              text-white

              transition-all
              duration-200

              hover:scale-105
              hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]

              active:scale-95

              dark:bg-white
              dark:text-black
            "
          >
            Ask
          </button>
        </motion.div>

        {/* =================================================
            RESPONSE
           ================================================= */}

        {response && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              relative
              z-30
              mt-5
              max-w-[360px]

              rounded-2xl

              border
              border-neutral-200

              bg-white/80

              px-5
              py-3

              text-xs
              text-neutral-700

              shadow-lg
              backdrop-blur-xl

              dark:border-white/10
              dark:bg-white/5
              dark:text-neutral-300
              dark:shadow-none

              md:text-sm
            "
          >
            {response}
          </motion.div>
        )}
      </div>
    </section>
  );
}