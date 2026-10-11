"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "@/components/theme-toggle";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Work", link: "#work" },
  { name: "Certifications", link: "#certifications" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const FloatingNav = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState("Home");

  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (current < 24) return setVisible(true);
    setVisible(current < prev);
  });

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[5000]"
      >
        <div className="relative flex items-center gap-4 px-4 py-2 rounded-full
          bg-white/70 dark:bg-black/70 backdrop-blur-xl
          border border-black/10 dark:border-white/10
          shadow-[0_10px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.8)]">

          {/* LOGO */}
          <Link href="#home" className="text-sm font-bold text-black dark:text-white">
            PK
          </Link>

          {/* NAV */}
          <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 rounded-full px-2 py-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`px-4 py-2 rounded-full text-sm transition-all
                ${
                  active === item.name
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-black/60 dark:text-white/70 hover:text-black dark:hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};