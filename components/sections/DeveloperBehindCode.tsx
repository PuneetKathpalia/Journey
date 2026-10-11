"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BookOpen,
  Coffee,
  Code2,
  Headphones,
  Rocket,
} from "lucide-react";

const interests = [
  {
    icon: Headphones,
    title: "Music",
    description: "Keeps me focused and creative",
  },
  {
    icon: Coffee,
    title: "Coffee",
    description: "My fuel for building",
  },
  {
    icon: BookOpen,
    title: "Learning",
    description: "Always exploring new things",
  },
  {
    icon: Rocket,
    title: "Building",
    description: "Turning ideas into real products",
  },
];

export default function DeveloperBehindCode() {
  return (
    <section
      id="developer-behind-code"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        transition-colors
        duration-300
        dark:bg-black
        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Very subtle center glow */}
        <div
          className="
            absolute
            left-[35%]
            top-[35%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-neutral-200/30
            blur-[140px]
            dark:bg-white/[0.015]
          "
        />

        {/* Very subtle grid - LIGHT */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
            [background-size:72px_72px]
            dark:hidden
          "
        />

        {/* Very subtle grid - DARK */}
        <div
          className="
            absolute
            inset-0
            hidden
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
            [background-size:72px_72px]
            dark:block
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-20
          "
        >
          {/* =================================================
              LEFT — AVATAR
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              min-h-[500px]
              items-center
              justify-center
              lg:min-h-[590px]
            "
          >
            {/* Outer circle */}
            <div
              className="
                absolute
                h-[330px]
                w-[330px]
                rounded-full
                border
                border-neutral-200
                dark:border-white/[0.045]
              "
            />

            {/* Inner circle */}
            <div
              className="
                absolute
                h-[410px]
                w-[410px]
                rounded-full
                border
                border-neutral-100
                dark:border-white/[0.02]
              "
            />

            {/* Ground shadow */}
            <div
              className="
                absolute
                bottom-10
                h-20
                w-56
                rounded-full
                bg-neutral-300/40
                blur-[45px]
                dark:bg-white/[0.035]
              "
            />

            {/* Avatar */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <Image
                src="/images/developer-behind-code.png"
                alt="Puneet Kathpalia"
                width={500}
                height={700}
                className="
                  h-auto
                  w-[285px]
                  object-contain
                  drop-shadow-[0_25px_35px_rgba(0,0,0,0.25)]
                  dark:drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)]
                  sm:w-[325px]
                  lg:w-[365px]
                "
              />
            </motion.div>

            {/* =================================================
                CODE BADGE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.35,
              }}
              className="
                absolute
                left-0
                top-[18%]
                z-20
                hidden
                rounded-xl
                border
                border-neutral-200
                bg-white/90
                px-3
                py-2.5
                shadow-sm
                backdrop-blur-md
                dark:border-white/[0.08]
                dark:bg-[#080808]
                dark:shadow-none
                sm:block
              "
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-neutral-200
                    bg-neutral-50
                    dark:border-white/[0.07]
                    dark:bg-white/[0.025]
                  "
                >
                  <Code2 className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                </div>

                <div>
                  <p className="text-xs font-medium text-neutral-900 dark:text-white">
                    Code
                  </p>

                  <p className="text-[10px] text-neutral-500 dark:text-neutral-600">
                    Build · Improve
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                LEARN BADGE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="
                absolute
                bottom-[18%]
                left-3
                z-20
                hidden
                rounded-xl
                border
                border-neutral-200
                bg-white/90
                px-3
                py-2.5
                shadow-sm
                backdrop-blur-md
                dark:border-white/[0.08]
                dark:bg-[#080808]
                dark:shadow-none
                sm:block
              "
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-neutral-200
                    bg-neutral-50
                    dark:border-white/[0.07]
                    dark:bg-white/[0.025]
                  "
                >
                  <BookOpen className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                </div>

                <div>
                  <p className="text-xs font-medium text-neutral-900 dark:text-white">
                    Learn
                  </p>

                  <p className="text-[10px] text-neutral-500 dark:text-neutral-600">
                    Always curious
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                BUILD BADGE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.65,
              }}
              className="
                absolute
                bottom-[10%]
                right-0
                z-20
                hidden
                rounded-xl
                border
                border-neutral-200
                bg-white/90
                px-3
                py-2.5
                shadow-sm
                backdrop-blur-md
                dark:border-white/[0.08]
                dark:bg-[#080808]
                dark:shadow-none
                sm:block
              "
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-neutral-200
                    bg-neutral-50
                    dark:border-white/[0.07]
                    dark:bg-white/[0.025]
                  "
                >
                  <Rocket className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                </div>

                <div>
                  <p className="text-xs font-medium text-neutral-900 dark:text-white">
                    Build
                  </p>

                  <p className="text-[10px] text-neutral-500 dark:text-neutral-600">
                    Ship ideas
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT — CONTENT
          ================================================== */}

          <div className="max-w-2xl">
            {/* Section label */}
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 0.55,
              }}
              className="mb-6 flex items-center gap-3"
            >
              <span
                className="
                  h-px
                  w-8
                  bg-neutral-400
                  dark:bg-neutral-600
                "
              />

              <span
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-neutral-600
                  dark:text-neutral-500
                "
              >
                The Developer
              </span>
            </motion.div>

            {/* Heading */}
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
                margin: "-100px",
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <h2
                className="
                  text-4xl
                  font-semibold
                  leading-[1.05]
                  tracking-tight
                  text-neutral-900
                  dark:text-white
                  sm:text-5xl
                  lg:text-[58px]
                "
              >
                The Developer
              </h2>

             <h2
  className="
    mt-2
    text-4xl
    font-semibold
    leading-[1.05]
    tracking-tight
    bg-gradient-to-r
    from-cyan-400
    via-blue-500
    to-indigo-500
    bg-clip-text
    text-transparent
    sm:text-5xl
    lg:text-[58px]
  "
>
  Behind The Code
</h2>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="mt-8"
            >
              <p
                className="
                  text-lg
                  leading-8
                  text-neutral-700
                  dark:text-neutral-300
                  sm:text-xl
                "
              >
                &quot;Code is what I build.
                <br />
                Curiosity is what drives me.&quot;
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="
                mt-6
                max-w-xl
                text-sm
                leading-7
                text-neutral-600
                dark:text-neutral-500
                sm:text-base
              "
            >
              I&apos;m Puneet Kathpalia — a full stack developer who enjoys
              turning ideas into real products, solving meaningful problems,
              and constantly learning new things along the way.
            </motion.p>

            {/* =================================================
                INTEREST CARDS
            ================================================== */}

            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {interests.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.2 + index * 0.07,
                    }}
                    whileHover={{
                      y: -2,
                    }}
                    className="
                      group
                      rounded-xl
                      border
                      border-neutral-200
                      bg-white
                      p-4
                      shadow-sm
                      transition-all
                      hover:border-neutral-300
                      hover:bg-neutral-50
                      dark:border-white/[0.07]
                      dark:bg-white/[0.015]
                      dark:shadow-none
                      dark:hover:border-white/[0.13]
                      dark:hover:bg-white/[0.025]
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-neutral-200
                          bg-neutral-50
                          text-neutral-600
                          transition-colors
                          group-hover:text-neutral-900
                          dark:border-white/[0.07]
                          dark:bg-white/[0.025]
                          dark:text-neutral-400
                          dark:group-hover:text-white
                        "
                      >
                        <Icon className="h-4 w-4" />
                      </div>

                      <div>
                        <h3
                          className="
                            text-sm
                            font-medium
                            text-neutral-900
                            dark:text-white
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            mt-0.5
                            text-[11px]
                            leading-4
                            text-neutral-500
                            dark:text-neutral-600
                          "
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                FINAL STATEMENT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-10"
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    h-px
                    flex-1
                    bg-neutral-200
                    dark:bg-white/[0.07]
                  "
                />

                <span className="text-neutral-400 dark:text-neutral-600">
                  ✦
                </span>

                <div
                  className="
                    h-px
                    flex-1
                    bg-neutral-200
                    dark:bg-white/[0.07]
                  "
                />
              </div>

              <p
                className="
                  mt-4
                  text-center
                  text-xl
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-neutral-800
                  dark:text-white
                  sm:text-2xl
                "
              >
                Building a better tomorrow, one commit at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
