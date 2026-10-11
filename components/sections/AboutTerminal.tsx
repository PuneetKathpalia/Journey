"use client";

import { Terminal } from "@/components/ui/terminal";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutTerminal() {
  const [command, setCommand] = useState("");

  const runCommand = (value: string) => {
    const cmd = value.toLowerCase().trim();

    if (cmd === "github") {
      window.open("https://github.com/puneetkathpalia", "_blank");
    } else if (cmd === "linkedin") {
      window.open("https://linkedin.com/in/puneetkathpalia", "_blank");
    } else if (cmd === "resume") {
      window.open("/Puneet.pdf", "_blank");
    }
  };

  return (
    <section
      className="
        relative py-28 px-6
        flex flex-col items-center justify-center
        bg-white dark:bg-black
        transition-colors duration-300
      "
    >
      {/* 🔥 HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h2
          className="
            text-2xl md:text-3xl font-semibold
            text-black dark:text-white
          "
        >
          About Me — in Terminal
        </h2>

        <p
          className="
            text-sm mt-2
            text-neutral-600 dark:text-neutral-400
          "
        >
          Interactive. Minimal. Developer-first.
        </p>
      </motion.div>

      {/* 🔥 TERMINAL */}
      <Terminal
        username="puneet"
        enableSound={true}
        typingSpeed={30}
        delayBetweenCommands={800}
        initialDelay={300}
        className="w-full max-w-3xl"
        commands={[
          "whoami",
          "cat profile.json",
          "skills",
          "projects",
          "contact",
          "resume",
        ]}
        outputs={{
          // 0: ["Puneet Kathpalia — Software Engineer"],

          // 1: [
          //   "{",
          //   '  "company": "Advance Solution 🚀",',
          //   '  "role": "ServiceNow Backend Developer",',
          //   '  "location": "India",',
          //   '  "focus": "ServiceNow + Backend Development",',
          //   '  "status": "Currently Working",',
          //   "}",
          // ],


            0: ["Puneet Kathpalia — Software Engineer"],

          1: [
            "{",
            '  "company": "Vision Waves (Joining June 🚀)",',
            '  "role": "Software Engineer",',
            '  "location": "India",',
            '  "focus": "Modern UI + Performance",',
            "}",
          ],

          2: [
            "Frontend: React, Next.js",
            "Backend: Node.js, Express, Spring Boot",
            "ServiceNow: Backend Development",
            "Database: MongoDB, MySQL, PostgreSQL",
            "Styling: Tailwind, Shadcn",
            "Animation: Framer Motion",
          ],

          3: [
            "72+ GitHub repositories",
            "CRM Platform, E-commerce, Fleet System",
            "UI Systems, Animations, Fullstack Apps",
          ],

          4: [
            "Email: puneetkathpalia99@gmail.com",
            "GitHub: https://github.com/puneetkathpalia",
            "LinkedIn: https://linkedin.com/in/puneetkathpalia",
          ],

          5: [
            "Resume ready → opening...",
          ],
        }}
      />

      {/* 🔥 TERMINAL INPUT */}
      <div className="mt-14 flex flex-col items-center gap-4 w-full max-w-md">
        <div
          className="
            w-full flex items-center gap-2
            rounded-lg px-3 py-2
            backdrop-blur-md shadow-lg
            border

            bg-black/80 border-white/10
            dark:bg-black/80 dark:border-white/10
            light:bg-white light:border-black/10
          "
        >
          <span className="text-cyan-400 font-mono text-sm">
            $
          </span>

          <input
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                runCommand(command);
                setCommand("");
              }
            }}
            placeholder="type github / linkedin / resume"
            className="
              flex-1 bg-transparent outline-none text-sm font-mono

              text-white placeholder:text-neutral-500
              dark:text-white dark:placeholder:text-neutral-500

              light:text-black light:placeholder:text-neutral-400
            "
          />
        </div>

        {/* 🔥 HINT */}
        <p
          className="
            text-xs font-mono
            text-neutral-600 dark:text-neutral-500
          "
        >
          try →{" "}
          <span className="text-cyan-500">github</span> ·{" "}
          <span className="text-blue-500">linkedin</span> ·{" "}
          <span className="text-indigo-500">resume</span>
        </p>
      </div>

      {/* 🔥 STATUS LINE */}
      <div
        className="
          mt-8 flex gap-6 text-xs font-mono
          text-neutral-600 dark:text-neutral-500
          flex-wrap justify-center
        "
      >
        {/* <span className="flex items-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Currently working at Advance Solution
        </span> */}

        <span>
          ⚡ Building backend systems with ServiceNow
        </span>
      </div>
    </section>
  );
}