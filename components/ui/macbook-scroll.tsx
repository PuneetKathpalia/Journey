"use client";

import React, { useEffect, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.15, isMobile ? 1 : 1.45]
  );

  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.65, isMobile ? 1 : 1.45]
  );

  const translate = useTransform(scrollYProgress, [0, 1], [0, 1200]);

  const rotate = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.3],
    [-26, -26, 0]
  );

  const textTransform = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, 120]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.15],
    [1, 0]
  );

  return (
    <div
      ref={ref}
      className="
        flex min-h-[220vh]
        shrink-0
        scale-[0.38]
        transform
        flex-col
        items-center
        justify-start
        py-0
        [perspective:1200px]
        sm:scale-50
        md:scale-100
        md:py-72
      "
    >
      {/* 🔥 TITLE */}
<motion.div
  style={{
    translateY: textTransform,
  }}
  className="mb-24 text-center px-6 relative z-50"
>

  <h2
    className="
      mx-auto
      max-w-6xl

      text-5xl
      md:text-7xl

      font-black
      leading-[1.05]
      tracking-tight

      text-black
      dark:text-white

      drop-shadow-[0_0_30px_rgba(255,255,255,0.12)]
    "
  >
    {title || (
      <>
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
      </>
    )}
  </h2>

  <p
    className="
      mx-auto
      mt-8
      max-w-3xl

      text-lg
      md:text-xl

      font-semibold
      leading-relaxed

      text-neutral-800
      dark:text-neutral-100
    "
  >
    Modern fullstack experiences focused on interaction,
    performance, scalability and beautiful UI systems.
  </p>

</motion.div>

      {/* 🔥 MACBOOK */}
      <Lid
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
      />

      {/* 🔥 BOTTOM BASE */}
      <div
        className="
          relative
          -z-10
          h-[26rem]
          w-[38rem]
          overflow-hidden
          rounded-b-3xl
          border
          border-black/10
          dark:border-white/10
          bg-[#c9c9c9]
          dark:bg-[#1a1a1d]
          shadow-[0_20px_120px_rgba(0,0,0,0.6)]
        "
      >
        {/* TOP STRIP */}
        <div className="relative h-10 w-full">
          <div
            className="
              absolute inset-x-0 mx-auto
              h-4
              w-[82%]
              rounded-b-2xl
              bg-black
            "
          />
        </div>

        {/* KEYBOARD */}
        <div className="relative flex px-4 pt-2">
          <div className="w-[12%]">
            <SpeakerGrid />
          </div>

          <div className="w-[76%]">
            <Keyboard />
          </div>

          <div className="w-[12%]">
            <SpeakerGrid />
          </div>
        </div>

        {/* TRACKPAD */}
        <Trackpad />

        {/* BADGE */}
        {badge && (
          <div className="absolute bottom-5 left-5">
            {badge}
          </div>
        )}

        {/* OPTIONAL GRADIENT */}
        {showGradient && (
          <div
            className="
              absolute inset-x-0 bottom-0
              z-50
              h-40
              w-full
              bg-gradient-to-t
              from-black via-black to-transparent
            "
          />
        )}
      </div>
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}: {
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  src?: string;
}) => {
  return (
    <div className="relative [perspective:1200px]">

      {/* 🔥 LAPTOP LID */}
      <div
        style={{
          transform:
            "perspective(1200px) rotateX(-24deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="
          relative
          h-[20rem]
          w-[38rem]
          rounded-t-[28px]
          bg-[#0a0a0a]
          p-2
          shadow-[0_20px_80px_rgba(0,0,0,0.8)]
        "
      >
        {/* SCREEN BACK */}
        <div
          className="
            absolute inset-0
            rounded-t-[28px]
            border border-white/10
            bg-[#050505]
          "
        >
          {/* CAMERA */}
          <div
            className="
              absolute
              left-1/2
              top-3
              h-2
              w-2
              -translate-x-1/2
              rounded-full
              bg-cyan-400
              shadow-[0_0_20px_#22d3ee]
            "
          />

          {/* BRAND */}
          <div className="flex h-full flex-col items-center justify-center">
            <div
              className="
                mb-5
                h-5
                w-5
                rounded-full
                bg-cyan-400
                shadow-[0_0_35px_#22d3ee]
              "
            />

            <h3
              className="
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-indigo-500
                bg-clip-text
                text-3xl
                font-semibold
                text-transparent
              "
            >
              Puneet.dev
            </h3>

            <p
              className="
                mt-3
                text-sm
                uppercase
                tracking-[0.4em]
                text-neutral-400
              "
            >
              Fullstack Engineer
            </p>
          </div>
        </div>
      </div>

      {/* 🔥 SCREEN */}
      <motion.div
        style={{
          scaleX,
          scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="
          absolute
          inset-0
          h-[30rem]
          w-[38rem]
          overflow-hidden
          rounded-[28px]
          border
          border-black/20
          dark:border-white/10
          bg-black
          p-3
          shadow-[0_30px_120px_rgba(0,0,0,0.9)]
        "
      >
        {/* BG */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-br
            from-[#07111f]
            via-[#050816]
            to-black
          "
        />

        {/* GLOW */}
        <div
          className="
            absolute inset-0
            bg-cyan-500/5
            mix-blend-screen
            pointer-events-none
          "
        />

        {/* IMAGE */}
        <img
          src={src || "/images/portfolio-preview.png"}
          alt="preview"
          className="
            relative z-20
            h-full
            w-full
            rounded-2xl
            object-cover
            object-top
          "
        />
      </motion.div>
    </div>
  );
};

export const Keyboard = () => {
  return (
    <div
      className="
        grid
        grid-cols-12
        gap-[5px]
        rounded-2xl
        border
        border-black/10
        dark:border-white/5
        bg-[#0e0e10]
        p-4
      "
    >
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={i}
          className="
            h-5
            rounded-[4px]
            bg-[#1f1f22]
            shadow-[inset_0px_1px_1px_rgba(255,255,255,0.04)]
          "
        />
      ))}
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="
        mx-auto
        mt-6
        h-32
        w-[42%]
        rounded-2xl
        border
        border-black/10
        dark:border-white/5
        bg-[#bcbcbc]
        dark:bg-[#121214]
      "
      style={{
        boxShadow:
          "0px 0px 2px 1px rgba(255,255,255,0.03) inset",
      }}
    />
  );
};

export const SpeakerGrid = () => {
  return (
    <div
      className="
        mt-2
        h-48
        rounded-xl
      "
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.12) 0.8px, transparent 0.8px)",
        backgroundSize: "4px 4px",
      }}
    />
  );
};

export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-[4px] p-[0.5px]",
        backlit && "bg-white/[0.2]"
      )}
    >
      <div
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]",
          className
        )}
      >
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center text-[5px] text-neutral-200",
            childrenClassName,
            backlit && "text-white"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};