"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import {
  ArrowUpRight,
  Home,
  User,
  Code2,
  Briefcase,
  Award,
  Folder,
  Mail,
} from "lucide-react";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Work", href: "#work", icon: Briefcase },
  { name: "Certifications", href: "#certifications", icon: Award },
  { name: "Projects", href: "#projects", icon: Folder },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState("#home");

  /* 🔥 NAVBAR SHOW / HIDE */
  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious() ?? 0;

    if (current < 24) {
      setVisible(true);
      return;
    }

    setVisible(current < prev);
  });

  /* 🔥 ACTIVE SECTION DETECTION */
/* 🔥 PERFECT ACTIVE SECTION DETECTION */
useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;

    const sections = navItems.map((item) => {
      const el = document.querySelector(item.href) as HTMLElement | null;

      if (!el) return null;

      return {
        id: item.href,
        offsetTop: el.offsetTop,
        height: el.offsetHeight,
      };
    }).filter(Boolean) as {
      id: string;
      offsetTop: number;
      height: number;
    }[];

    for (let i = 0; i < sections.length; i++) {
  const section = sections[i];

  const start = section.offsetTop - 120;
  const end = section.offsetTop + section.height - 120;

  if (scrollY >= start && scrollY < end) {
    setActive(section.id);
    break;
  }
}
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll(); // run once

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  /* 🔥 SCROLL FUNCTION */
  const scrollToSection = (href: string) => {
  const section = document.querySelector(href);

  if (section) {
    const yOffset = -80; // navbar height offset
    const y =
      section.getBoundingClientRect().top +
      window.scrollY +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
};

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
      >
        <div
          className="
            flex items-center gap-3 px-3 py-2 rounded-full

            bg-white/80
            dark:bg-black/80

            backdrop-blur-xl

            border border-black/10
            dark:border-white/10

            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
            dark:shadow-[0_8px_40px_rgba(0,0,0,0.7)]
          "
        >

          {/* 🔥 LOGO */}
          <button
            onClick={() => scrollToSection("#home")}
            className="
              flex items-center justify-center

              h-10 w-10 rounded-full

              border border-black/10
              dark:border-white/10

              bg-white
              dark:bg-neutral-900

              text-sm font-black

              text-black
              dark:text-white

              transition
            "
          >
            PK
          </button>

          {/* 🔥 NAV ITEMS */}
          <div
            className="
              flex items-center gap-1

              rounded-full

              bg-black/[0.04]
              dark:bg-white/[0.04]

              px-1 py-1
            "
          >
            {navItems.map((item) => {
              const Icon = item.icon;

              const isActive = active === item.href;

              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    flex items-center gap-1.5

                    rounded-full

                    px-3 py-2

                    text-[14px]
                    font-medium

                    transition-all duration-300

                    ${
                      isActive
                        ? `
                          bg-black
                          text-white

                          dark:bg-white
                          dark:text-black

                          shadow-sm
                        `
                        : `
                          text-neutral-700
                          dark:text-neutral-300

                          hover:text-black
                          dark:hover:text-white
                        `
                    }
                  `}
                >
                  <Icon className="h-4 w-4 opacity-70" />

                  <span className="hidden md:block">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 🔥 RIGHT SIDE */}
          <div className="flex items-center gap-2">

            {/* 🔥 SIMPLE THEME BUTTON */}
            <div
              className="
                flex items-center justify-center

                h-10 w-10 rounded-full

                border border-black/10
                dark:border-white/10

                bg-white
                dark:bg-neutral-900
              "
            >
              <ThemeToggle />
            </div>

            {/* 🔥 RESUME */}
            <a
              href="/Puneet.pdf"
              target="_blank"
              className="
                flex items-center gap-1.5

                rounded-full

                px-4 py-2

                text-sm
                font-semibold

                border border-black/10
                dark:border-white/10

                bg-white
                dark:bg-neutral-900

                text-black
                dark:text-white

                hover:bg-black
                hover:text-white

                dark:hover:bg-white
                dark:hover:text-black

                transition-all duration-300
              "
            >
              Resume

              <ArrowUpRight className="h-4 w-4" />
            </a>

          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}