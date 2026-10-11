"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  AnimatePresence,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  className,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
  }[];

  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        `
          flex
          w-fit
          max-w-full
          items-center
          gap-3

          rounded-full

          border border-black/5
          dark:border-white/10

          bg-white/75
          dark:bg-slate-950/55

          px-4
          py-3
          sm:px-5
          sm:py-4

          backdrop-blur-3xl

          shadow-[0_18px_60px_rgba(15,23,42,0.14),0_0_30px_rgba(34,211,238,0.08)]

          ring-1 ring-inset ring-white/25 dark:ring-white/5
        `,
        className
      )}
    >
      {items.map((item) => (
        <DockIcon mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function DockIcon({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue<number>;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };

    return val - bounds.x - bounds.width / 2;
  });

  const size = useTransform(distance, [-180, -90, 0, 90, 180], [48, 56, 74, 56, 48]);
  const iconSize = useTransform(distance, [-180, -90, 0, 90, 180], [20, 22, 26, 22, 20]);
  const yOffset = useTransform(distance, [-180, 0, 180], [0, -6, 0]);
  const lift = useTransform(distance, [-180, -90, 0, 90, 180], [1, 1.02, 1.08, 1.02, 1]);

  const width = useSpring(size, {
    mass: 0.18,
    stiffness: 220,
    damping: 18,
  });

  const height = useSpring(size, {
    mass: 0.18,
    stiffness: 220,
    damping: 18,
  });

  const iconWidth = useSpring(iconSize, {
    mass: 0.16,
    stiffness: 240,
    damping: 20,
  });

  const iconHeight = useSpring(iconSize, {
    mass: 0.16,
    stiffness: 240,
    damping: 20,
  });

  const y = useSpring(yOffset, {
    mass: 0.18,
    stiffness: 220,
    damping: 18,
  });

  const scale = useSpring(lift, {
    mass: 0.18,
    stiffness: 220,
    damping: 18,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width,
        height,
        y,
        scale,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{
        y: -4,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="
        group
        relative

        flex
        items-center
        justify-center

        rounded-[18px]

        border border-black/5
        dark:border-white/10

        bg-white/70
        dark:bg-white/5

        text-slate-700
        dark:text-slate-100

        backdrop-blur-2xl

        shadow-[0_8px_24px_rgba(15,23,42,0.08)]

        transition-colors
        duration-300

        hover:border-cyan-400/35
        hover:bg-white/90
        dark:hover:bg-white/10
        hover:shadow-[0_14px_40px_rgba(34,211,238,0.12)]
      "
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 24,
            }}
            className="
              pointer-events-none
              absolute
              bottom-full
              left-1/2
              z-20
              mb-3
              -translate-x-1/2

              whitespace-nowrap

              rounded-full

              border border-black/5
              dark:border-white/10

              bg-white/90
              px-3
              py-1.5

              text-[11px]
              font-medium
              tracking-wide
              text-slate-800
              shadow-[0_10px_25px_rgba(15,23,42,0.12)]

              backdrop-blur-2xl

              dark:bg-slate-950/90
              dark:text-white
            "
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        style={{
          width: iconWidth,
          height: iconHeight,
        }}
        className="flex items-center justify-center"
      >
        {icon}
      </motion.div>
    </motion.a>
  );
}