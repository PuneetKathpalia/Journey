"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Download,
  Home,
  Mail,
} from "lucide-react";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function Contact() {
  const socialLinks = [
    {
      icon: <IconBrandGithub size={19} />,
      label: "GitHub",
      link: "https://github.com/PuneetKathpalia",
    },
    {
      icon: <IconBrandLinkedin size={19} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/puneetkathpalia/",
    },
    {
      icon: <IconBrandInstagram size={19} />,
      label: "Instagram",
      link: "https://instagram.com/puneetkathpalia",
    },
    {
      icon: <Mail size={19} />,
      label: "Email",
      link: "mailto:puneetkathpalia99@gmail.com",
    },
  ];

  const dockLinks = [
    {
      icon: <Home size={18} />,
      label: "Home",
      link: "#home",
    },
    {
      icon: <Mail size={18} />,
      label: "Email",
      link: "mailto:puneetkathpalia99@gmail.com",
    },
    {
      icon: <IconBrandLinkedin size={18} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/puneetkathpalia/",
    },
    {
      icon: <IconBrandInstagram size={18} />,
      label: "Instagram",
      link: "https://instagram.com/puneetkathpalia",
    },
    {
      icon: <IconBrandGithub size={18} />,
      label: "GitHub",
      link: "https://github.com/PuneetKathpalia",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        text-black
        dark:bg-black
        dark:text-white
        md:py-20
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[380px]
            w-[380px]
            -translate-x-1/2
            rounded-full
            bg-cyan-400/[0.018]
            blur-[120px]
            dark:bg-cyan-400/[0.025]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-[280px]
            w-[280px]
            rounded-full
            bg-blue-500/[0.015]
            blur-[110px]
            dark:bg-blue-500/[0.02]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="
              mb-3
              text-xs
              font-medium
              uppercase
              tracking-[0.36em]
              text-neutral-500
              dark:text-neutral-400
            "
          >
            CONTACT
          </p>

          <h2
            className="
              text-4xl
              font-extrabold
              leading-tight
              tracking-tight
              md:text-6xl
            "
          >
            Let&apos;s Build{" "}
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
              Something
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-neutral-600
              dark:text-neutral-400
              md:text-base
            "
          >
            Open to software engineering, fullstack, AI-focused opportunities
            and futuristic product building.
          </p>
        </motion.div>

        {/* =========================================================
            MAIN CARD
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            relative
            mt-10
            overflow-hidden
            rounded-[36px]
            border
            border-neutral-200/80
            bg-white/70
            p-6
            shadow-[0_20px_70px_rgba(0,0,0,0.05)]
            backdrop-blur-xl
            dark:border-white/[0.08]
            dark:bg-white/[0.025]
            dark:shadow-none
            md:p-10
          "
        >
          {/* TOP ACCENT */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-px
              w-2/3
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-neutral-300
              to-transparent
              dark:via-white/20
            "
          />

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">

            {/* =====================================================
                LEFT
            ===================================================== */}

            <div>
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-neutral-500
                  dark:text-neutral-500
                "
              >
                Start a conversation
              </p>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-extrabold
                  leading-tight
                  tracking-tight
                  md:text-4xl
                "
              >
                Have a project idea?
              </h3>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-neutral-600
                  dark:text-neutral-400
                  md:text-base
                "
              >
                Let&apos;s create scalable products with premium UI,
                immersive experiences and modern engineering.
              </p>

              {/* ===================================================
                  ACTION BUTTONS
              =================================================== */}

              <div className="mt-8 flex flex-wrap items-center gap-4">


<HoverBorderGradient
  as="a"
  href="/Puneet.pdf"
  target="_blank"
  rel="noopener noreferrer"
  duration={2}
  clockwise={true}
  containerClassName="
    rounded-full
    bg-neutral-200
    dark:bg-white/10
  "
  className="
    gap-2
    px-5
    py-3
    text-sm
    font-semibold
    whitespace-nowrap
  "
>
  <Download className="h-4 w-4" />
  Download Resume
</HoverBorderGradient>









              </div>

              {/* ===================================================
                  SOCIALS
              =================================================== */}

              <div className="mt-9">
                <p
                  className="
                    mb-3
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-neutral-500
                  "
                >
                  Find me online
                </p>

                <div className="flex items-center gap-2">
                  {socialLinks.map((item) => (
                    <motion.a
                      key={item.label}
                      href={item.link}
                      target={
                        item.link.startsWith("mailto:")
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        item.link.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      aria-label={item.label}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.96 }}
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-neutral-200
                        bg-white
                        text-neutral-700
                        shadow-sm
                        transition-all
                        duration-200
                        hover:border-neutral-300
                        hover:text-black
                        dark:border-white/[0.08]
                        dark:bg-white/[0.025]
                        dark:text-neutral-300
                        dark:hover:border-white/20
                        dark:hover:text-white
                      "
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* =====================================================
                RIGHT — FORM
            ===================================================== */}

            <form className="space-y-4">

              {/* NAME */}

              <div>
                <label
                  htmlFor="contact-name"
                  className="sr-only"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-neutral-200
                    bg-white
                    px-5
                    text-sm
                    text-black
                    outline-none
                    transition-all
                    placeholder:text-neutral-400
                    focus:border-neutral-400
                    focus:ring-2
                    focus:ring-neutral-200
                    dark:border-white/[0.08]
                    dark:bg-black/40
                    dark:text-white
                    dark:placeholder:text-neutral-600
                    dark:focus:border-white/20
                    dark:focus:ring-white/[0.04]
                  "
                />
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="contact-email"
                  className="sr-only"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  placeholder="Your Email"
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-neutral-200
                    bg-white
                    px-5
                    text-sm
                    text-black
                    outline-none
                    transition-all
                    placeholder:text-neutral-400
                    focus:border-neutral-400
                    focus:ring-2
                    focus:ring-neutral-200
                    dark:border-white/[0.08]
                    dark:bg-black/40
                    dark:text-white
                    dark:placeholder:text-neutral-600
                    dark:focus:border-white/20
                    dark:focus:ring-white/[0.04]
                  "
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="contact-message"
                  className="sr-only"
                >
                  Tell me about your project
                </label>

                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-neutral-200
                    bg-white
                    px-5
                    py-4
                    text-sm
                    leading-6
                    text-black
                    outline-none
                    transition-all
                    placeholder:text-neutral-400
                    focus:border-neutral-400
                    focus:ring-2
                    focus:ring-neutral-200
                    dark:border-white/[0.08]
                    dark:bg-black/40
                    dark:text-white
                    dark:placeholder:text-neutral-600
                    dark:focus:border-white/20
                    dark:focus:ring-white/[0.04]
                  "
                />
              </div>

<HoverBorderGradient
  type="submit"
  duration={2.5}
  clockwise={true}
  containerClassName="
    w-full
    rounded-2xl
    bg-neutral-200
    dark:bg-white/10
  "
  className="
    h-12
    w-full
    gap-2
    rounded-[calc(1rem-1.5px)]
    text-sm
    font-semibold
  "
>
  <span className="flex items-center justify-center gap-2">
    Send Message
    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
  </span>
</HoverBorderGradient>






            </form>
          </div>
        </motion.div>

        {/* =========================================================
            FLOATING DOCK
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <div
            className="
              flex
              items-center
              gap-1
              rounded-full
              border
              border-neutral-200
              bg-white/80
              px-3
              py-2
              shadow-sm
              backdrop-blur-xl
              dark:border-white/[0.08]
              dark:bg-black/40
            "
          >
            {dockLinks.map((item) => (
              <Link
                key={item.label}
                href={item.link}
                aria-label={item.label}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  text-neutral-600
                  transition-all
                  duration-200
                  hover:bg-neutral-100
                  hover:text-black
                  dark:text-neutral-400
                  dark:hover:bg-white/[0.06]
                  dark:hover:text-white
                "
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}