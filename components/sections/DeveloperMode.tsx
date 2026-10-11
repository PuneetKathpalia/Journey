"use client";

import { motion } from "framer-motion";

import {
  Backpack,
  Code2,
  Headphones,
  Layers3,
  Lightbulb,
  Smartphone,
  Sparkles,
  Target,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const features = [
  {
    icon: Headphones,
    title: "Focused",
    description: "Deep work",
    tooltip:
      "I enjoy focused problem-solving and building systems carefully, one piece at a time.",
    position:
      "right-[4%] top-[12%] md:right-[8%] md:top-[13%]",
  },
  {
    icon: Backpack,
    title: "Always Learning",
    description: "Keep improving",
    tooltip:
      "I continuously learn new technologies, engineering concepts and better ways to build.",
    position:
      "left-[2%] top-[30%] md:left-[4%] md:top-[31%]",
  },
  {
    icon: Smartphone,
    title: "Connected",
    description: "Modern mindset",
    tooltip:
      "I stay connected with modern tools, technologies and the evolving developer ecosystem.",
    position:
      "right-[0%] top-[42%] md:right-[2%] md:top-[42%]",
  },
  {
    icon: Sparkles,
    title: "Personal Brand",
    description: "Build with identity",
    tooltip:
      "I care about creating products that feel polished, intentional and uniquely mine.",
    position:
      "left-[0%] top-[55%] md:left-[3%] md:top-[57%]",
  },
  {
    icon: Target,
    title: "Execution",
    description: "Turn ideas into products",
    tooltip:
      "I believe ideas matter most when you turn ideas into something people can actually use.",
    position:
      "right-[4%] bottom-[14%] md:right-[7%] md:bottom-[14%]",
  },
];

const focusItems = [
  "Backend Engineering",
  "Enterprise Systems",
  "ServiceNow",
  "Full-stack Applications",
];

export default function DeveloperMode() {
  return (
    <TooltipProvider delayDuration={100}>
      <section
        id="developer-mode"
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
            BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0">
          {/* subtle grid */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
              [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
              [background-size:80px_80px]
              dark:opacity-[0.035]
              dark:[background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
            "
          />

          {/* avatar glow */}
          <div
            className="
              absolute
              right-[8%]
              top-1/2
              h-[420px]
              w-[420px]
              -translate-y-1/2
              rounded-full
              bg-cyan-500/[0.035]
              blur-[110px]
            "
          />

          <div
            className="
              absolute
              left-[-100px]
              top-[30%]
              h-[280px]
              w-[280px]
              rounded-full
              bg-blue-500/[0.02]
              blur-[100px]
            "
          />
        </div>

        {/* =====================================================
            MAIN CONTAINER
        ===================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-6
            py-20
            md:px-10
            md:py-24
            lg:px-12
          "
        >
          <div
            className="
              grid
              items-center
              gap-10
              lg:grid-cols-[0.95fr_1.05fr]
              lg:gap-4
            "
          >
            {/* =================================================
                LEFT — CONTENT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
              }}
              className="relative z-20"
            >
              {/* label */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-cyan-500/20
                  bg-cyan-500/[0.04]
                  px-3.5
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-cyan-500
                "
              >
                <Code2 className="h-3 w-3" />
                Developer Mode
              </div>

              {/* heading */}

              <h2
                className="
                  mt-6
                  max-w-xl
                  text-4xl
                  font-black
                  leading-[1.02]
                  tracking-tight
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Always building.
                <br />

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
                  Always learning.
                </span>
              </h2>

              {/* description */}

              <p
                className="
                  mt-6
                  max-w-lg
                  text-sm
                  leading-7
                  text-neutral-600
                  dark:text-neutral-400
                  md:text-base
                "
              >
                I don't just write code. I build systems, interfaces and
                products that solve real problems and create meaningful
                experiences.
              </p>

              {/* =================================================
                  SKILL PHRASES
              ================================================= */}

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Backend",
                  "Full Stack",
                  "AI",
                  "Problem Solving",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.1 + index * 0.06,
                    }}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-black/[0.08]
                      bg-black/[0.02]
                      px-3.5
                      py-2
                      text-xs
                      font-medium
                      text-neutral-700
                      dark:border-white/[0.08]
                      dark:bg-white/[0.025]
                      dark:text-neutral-300
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-cyan-400
                      "
                    />

                    {item}
                  </motion.div>
                ))}
              </div>

              {/* =================================================
                  CURRENTLY BUILDING CARD
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.25,
                  duration: 0.5,
                }}
                className="
                  relative
                  mt-8
                  max-w-lg
                  overflow-hidden
                  rounded-2xl
                  border
                  border-black/[0.08]
                  bg-white/70
                  p-5
                  shadow-[0_15px_45px_rgba(0,0,0,0.04)]
                  backdrop-blur-xl
                  dark:border-white/[0.08]
                  dark:bg-white/[0.025]
                  dark:shadow-none
                "
              >
                {/* top line */}

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-400
                    to-transparent
                    opacity-70
                  "
                />

                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-cyan-500/[0.08]
                      text-cyan-500
                    "
                  >
                    <Lightbulb className="h-4 w-4" />
                  </div>

                  <div>
                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.22em]
                        text-cyan-500
                      "
                    >
                      Currently Building
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-sm
                        font-semibold
                      "
                    >
                      Turning engineering ideas into production systems.
                    </p>
                  </div>
                </div>

                <div
                  className="
                    mt-5
                    grid
                    grid-cols-1
                    gap-2
                    sm:grid-cols-2
                  "
                >
                  {focusItems.map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        text-neutral-600
                        dark:text-neutral-400
                      "
                    >
                      <span
                        className="
                          h-1
                          w-1
                          rounded-full
                          bg-cyan-400
                        "
                      />

                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* philosophy */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-neutral-400
                "
              >
                <Layers3 className="h-3.5 w-3.5" />

                <span className="text-sm font-medium tracking-wide">
                  Build → Learn → Improve → Repeat
                </span>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT — AVATAR
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="
                relative
                flex
                min-h-[620px]
                items-center
                justify-center
                lg:min-h-[650px]
              "
            >
              {/* avatar glow */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[300px]
                  w-[300px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-cyan-400/[0.06]
                  blur-[90px]
                "
              />

              {/* orbit ring */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[440px]
                  w-[440px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-black/[0.05]
                  dark:border-white/[0.05]
                "
              />

              {/* inner orbit */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[350px]
                  w-[350px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-dashed
                  border-cyan-500/[0.10]
                "
              />

              {/* =================================================
                  AVATAR
              ================================================= */}

              <motion.img
                src="/images/developer-mode-avatar.png"
                alt="Puneet Kathpalia developer avatar"
                initial={{
                  y: 12,
                }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.025,
                }}
                className="
                  relative
                  z-10
                  h-[560px]
                  w-auto
                  max-w-none
                  object-contain
                  drop-shadow-[0_25px_45px_rgba(0,0,0,0.35)]
                  sm:h-[620px]
                  lg:h-[650px]
                "
              />

              {/* =================================================
                  FEATURE CALLOUTS + TOOLTIPS
              ================================================= */}

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.35 + index * 0.08,
                      duration: 0.4,
                    }}
                    className={`
                      absolute
                      ${feature.position}
                      z-50
                      hidden
                      sm:block
                    `}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          type="button"
                          aria-label={`Learn more about ${feature.title}`}
                          className="
                            group
                            flex
                            cursor-help
                            items-center
                            gap-2.5
                            rounded-xl
                            border
                            border-white/[0.08]
                            bg-black/75
                            px-3
                            py-2
                            text-left
                            shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-cyan-400/40
                            hover:bg-black/90
                            hover:shadow-[0_10px_35px_rgba(34,211,238,0.12)]
                            focus:outline-none
                            focus:ring-1
                            focus:ring-cyan-400/50
                          "
                        >
                          {/* icon */}

                          <div
                            className="
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              bg-gradient-to-br
                              from-cyan-400
                              to-blue-500
                              text-white
                              shadow-[0_4px_18px_rgba(34,211,238,0.18)]
                              transition-transform
                              duration-300
                              group-hover:scale-110
                            "
                          >
                            <Icon className="h-4 w-4" />
                          </div>

                          {/* text */}

                          <div>
                            <p
                              className="
                                text-[10px]
                                font-bold
                                text-white
                              "
                            >
                              {feature.title}
                            </p>

                            <p
                              className="
                                mt-0.5
                                text-[8px]
                                text-neutral-500
                              "
                            >
                              {feature.description}
                            </p>
                          </div>
                        </button>
                      </TooltipTrigger>

                      <TooltipContent
                        side="top"
                        align="center"
                        sideOffset={12}
                        className="
                          z-[99999]
                          max-w-[280px]
                          rounded-xl
                          border
                          border-cyan-400/20
                          bg-black/95
                          px-4
                          py-3
                          text-xs
                          leading-relaxed
                          text-white
                          shadow-[0_15px_50px_rgba(0,0,0,0.65)]
                          backdrop-blur-xl
                        "
                      >
                        <div className="flex items-start gap-2">
                          <span
                            className="
                              mt-1
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-cyan-400
                            "
                          />

                          <p>{feature.tooltip}</p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}