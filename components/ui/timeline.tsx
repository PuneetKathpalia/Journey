"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  highlight?: boolean;
}

interface TimelineProps {
  data: TimelineEntry[];
}

/* =========================================================
   MODERN TIMELINE POP EFFECT
   ========================================================= */

function TimelinePop() {
  return (
    <div className="relative h-20 w-20 flex items-center justify-center">

      {/* BIG SOFT GLOW */}
      <motion.div
        initial={{ scale: 0.2, opacity: 0 }}
        whileInView={{ scale: [0.2, 1.35, 1], opacity: [0, 0.8, 0.35] }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="
          absolute
          h-16
          w-16
          rounded-full
          bg-cyan-400/20
          blur-xl
        "
      />

      {/* POP RING */}
      <motion.div
        initial={{
          scale: 0.2,
          opacity: 0,
        }}
        whileInView={{
          scale: [0.2, 1.6, 2.2],
          opacity: [0, 0.8, 0],
        }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{
          duration: 1.1,
          ease: "easeOut",
        }}
        className="
          absolute
          h-8
          w-8
          rounded-full
          border
          border-cyan-300
        "
      />

      {/* ORBIT 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[68px]
          w-[68px]
          rounded-full
          border
          border-cyan-400/35
        "
      >
        {/* Orbit particle */}
        <span
          className="
            absolute
            -top-[3px]
            left-1/2
            h-[7px]
            w-[7px]
            -translate-x-1/2
            rounded-full
            bg-cyan-300
            shadow-[0_0_12px_rgba(34,211,238,1)]
          "
        />
      </motion.div>

      {/* ORBIT 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[50px]
          w-[50px]
          rounded-full
          border
          border-blue-500/35
        "
      >
        <span
          className="
            absolute
            -right-[3px]
            top-1/2
            h-[6px]
            w-[6px]
            -translate-y-1/2
            rounded-full
            bg-blue-400
            shadow-[0_0_12px_rgba(59,130,246,1)]
          "
        />
      </motion.div>

      {/* THIRD SMALL ORBIT */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[82px]
          w-[82px]
          rounded-full
          border
          border-purple-500/15
        "
      >
        <span
          className="
            absolute
            bottom-[3px]
            left-1/2
            h-[5px]
            w-[5px]
            -translate-x-1/2
            rounded-full
            bg-purple-400
            shadow-[0_0_10px_rgba(168,85,247,0.9)]
          "
        />
      </motion.div>

      {/* CENTER PULSE */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          boxShadow: [
            "0 0 12px rgba(34,211,238,0.7)",
            "0 0 30px rgba(34,211,238,1)",
            "0 0 12px rgba(34,211,238,0.7)",
          ],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          z-20
          h-5
          w-5
          rounded-full
          bg-gradient-to-br
          from-cyan-200
          via-cyan-400
          to-blue-600
        "
      />

      {/* CENTER WHITE CORE */}
      <div
        className="
          absolute
          z-30
          h-2
          w-2
          rounded-full
          bg-white
          shadow-[0_0_10px_white]
        "
      />
    </div>
  );
}

/* =========================================================
   NORMAL TIMELINE DOT
   ========================================================= */

function NormalDot() {
  return (
    <div
      className="
        relative
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-black/10
        bg-white
        shadow-[0_0_20px_rgba(59,130,246,0.15)]
        dark:border-white/10
        dark:bg-black
        dark:shadow-[0_0_40px_rgba(59,130,246,0.25)]
      "
    >
      <div
        className="
          h-5
          w-5
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          to-blue-500
        "
      />
    </div>
  );
}

/* =========================================================
   TIMELINE
   ========================================================= */

export default function Timeline({ data }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height]
  );

  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.08],
    [0, 1]
  );

  return (
    <div
      ref={containerRef}
      className="
        relative
        w-full
        bg-white
        text-black
        dark:bg-black
        dark:text-white
      "
    >
      <div
        ref={ref}
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          pb-32
          md:px-10
        "
      >
        {data.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="
              flex
              flex-col
              pt-16
              md:flex-row
              md:gap-14
              md:pt-28
            "
          >
            {/* =================================================
                LEFT SIDE
               ================================================= */}

            <div
              className="
                sticky
                top-32
                z-40
                flex
                items-center
                self-start
                md:w-[320px]
              "
            >
              {/* TIMELINE DOT / POP */}
              <div
                className="
                  relative
                  flex
                  h-20
                  w-20
                  shrink-0
                  items-center
                  justify-center
                "
              >
                {item.highlight ? <TimelinePop /> : <NormalDot />}
              </div>

              {/* TITLE */}
              <h3
                className="
                  ml-6
                  text-3xl
                  font-black
                  tracking-tight
                  text-black
                  dark:text-white
                  md:ml-8
                  md:text-5xl
                "
              >
                {item.title}
              </h3>
            </div>

            {/* =================================================
                RIGHT SIDE CARD
               ================================================= */}

            <div
              className="
                relative
                mt-10
                flex-1
                md:mt-0
              "
            >
              {item.content}
            </div>
          </div>
        ))}

        {/* =====================================================
            TIMELINE LINE
           ===================================================== */}

        <div
          style={{ height: height + "px" }}
          className="
            absolute
            left-[39px]
            top-0
            w-[2px]
            overflow-hidden
            bg-gradient-to-b
            from-transparent
            via-black/10
            to-transparent
            dark:via-white/10
            md:left-[40px]
          "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="
              absolute
              inset-x-0
              top-0
              w-[2px]
              rounded-full
              bg-gradient-to-b
              from-cyan-400
              via-blue-500
              to-indigo-500
              shadow-[0_0_20px_rgba(59,130,246,0.4)]
              dark:shadow-[0_0_30px_rgba(59,130,246,0.8)]
            "
          />
        </div>
      </div>
    </div>
  );
}

