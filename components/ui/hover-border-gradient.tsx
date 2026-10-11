// "use client";


// import type { ElementType } from "react";

// // Inside your component:

// import * as React from "react";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";


// const Component: ElementType = "div";
// type HoverBorderGradientProps = {
//   children: React.ReactNode;
//   containerClassName?: string;
//   className?: string;
//   as?: React.ElementType;
//   duration?: number;
//   clockwise?: boolean;
//   [key: string]: any;
// };

// export function HoverBorderGradient({
//   children,
//   containerClassName,
//   className,
//   as: Component = "button",
//   duration = 1.5,
//   clockwise = true,
//   ...props
// }: HoverBorderGradientProps) {
//  return (
//   <Component
//     className={cn(
//       "group relative isolate flex overflow-hidden rounded-full p-[1.5px]",
//       "bg-neutral-200 dark:bg-white/[0.12]",
//       "transition-colors duration-200",
//       "active:scale-[0.98]",
//       "focus:outline-none",
//       containerClassName
//     )}
//     {...props}
//   >
//       {/* =========================================
//           HOVER GRADIENT
//           Hidden normally → visible on hover
//       ========================================== */}
//       <span
//         aria-hidden="true"
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           rounded-[inherit]
//           opacity-0
//           transition-opacity
//           duration-200
//           group-hover:opacity-100
//         "
//         style={{
//           background:
//             "linear-gradient(90deg, #22d3ee 0%, #3b82f6 50%, #6366f1 100%)",
//         }}
//       />

//       {/* =========================================
//           CONTINUOUS MOVING BORDER
          
//           DARK MODE  → WHITE
//           LIGHT MODE → BLACK
          
//           Always visible, even without hover.
//       ========================================== */}
//       <motion.svg
//         aria-hidden="true"
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           z-[5]
//           h-full
//           w-full
//           overflow-visible
//         "
//         viewBox="0 0 100 100"
//         preserveAspectRatio="none"
//       >
//         <motion.rect
//           x="1.5"
//           y="1.5"
//           width="97"
//           height="97"
//           rx="12"
//           ry="12"
//           fill="none"
//           stroke="white"
//           className="stroke-black dark:stroke-white"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           pathLength="100"
//           strokeDasharray="14 86"
//           initial={{
//             strokeDashoffset: clockwise ? 0 : -100,
//           }}
//           animate={{
//             strokeDashoffset: clockwise ? -100 : 0,
//           }}
//           transition={{
//             duration,
//             ease: "linear",
//             repeat: Infinity,
//           }}
//         />
//       </motion.svg>

//       {/* =========================================
//           SUBTLE GLOW FOR MOVING LIGHT
//       ========================================== */}
//       <motion.svg
//         aria-hidden="true"
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           z-[4]
//           h-full
//           w-full
//           overflow-visible
//           opacity-30
//           blur-[2px]
//           dark:opacity-40
//         "
//         viewBox="0 0 100 100"
//         preserveAspectRatio="none"
//       >
//         <motion.rect
//           x="1.5"
//           y="1.5"
//           width="97"
//           height="97"
//           rx="12"
//           ry="12"
//           fill="none"
//           stroke="white"
//           className="stroke-black dark:stroke-white"
//           strokeWidth="2"
//           strokeLinecap="round"
//           pathLength="100"
//           strokeDasharray="14 86"
//           initial={{
//             strokeDashoffset: clockwise ? 0 : -100,
//           }}
//           animate={{
//             strokeDashoffset: clockwise ? -100 : 0,
//           }}
//           transition={{
//             duration,
//             ease: "linear",
//             repeat: Infinity,
//           }}
//         />
//       </motion.svg>

//       {/* =========================================
//           BUTTON CONTENT
//       ========================================== */}
//       <span
//         className={cn(
//           "relative z-10 flex h-full w-full items-center justify-center",
//           "rounded-[inherit]",
//           "bg-white text-neutral-900",
//           "dark:bg-[#09090b] dark:text-white",
//           className
//         )}
//       >
//         {children}
//       </span>
//     </Component>
//   );
// }

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type HoverBorderGradientProps = {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  duration?: number;
  clockwise?: boolean;
  [key: string]: any;
};

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Component = "button",
  duration = 1.5,
  clockwise = true,
  ...props
}: HoverBorderGradientProps) {
  const Wrapper = motion.create(Component);

return (
  <Wrapper
      className={cn(
        "group relative isolate flex overflow-hidden rounded-full p-[1.5px]",
        "bg-neutral-200 dark:bg-white/[0.12]",
        "transition-colors duration-200",
        "active:scale-[0.98]",
        "focus:outline-none",
        containerClassName
      )}
      {...props}
    >
      {/* Hover gradient */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 rounded-[inherit]
          opacity-0 transition-opacity duration-200
          group-hover:opacity-100
        "
        style={{
          background:
            "linear-gradient(90deg, #22d3ee 0%, #3b82f6 50%, #6366f1 100%)",
        }}
      />

      {/* Continuous moving border */}
      <motion.svg
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-[5]
          h-full w-full overflow-visible
        "
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.rect
          x="1.5"
          y="1.5"
          width="97"
          height="97"
          rx="12"
          ry="12"
          fill="none"
          stroke="currentColor"
          className="text-black dark:text-white"
          strokeWidth="1.5"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="14 86"
          initial={{
            strokeDashoffset: clockwise ? 0 : -100,
          }}
          animate={{
            strokeDashoffset: clockwise ? -100 : 0,
          }}
          transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </motion.svg>

      {/* Subtle moving glow */}
      <motion.svg
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-[4]
          h-full w-full overflow-visible
          opacity-30 blur-[2px] dark:opacity-40
        "
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.rect
          x="1.5"
          y="1.5"
          width="97"
          height="97"
          rx="12"
          ry="12"
          fill="none"
          stroke="currentColor"
          className="text-black dark:text-white"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="14 86"
          initial={{
            strokeDashoffset: clockwise ? 0 : -100,
          }}
          animate={{
            strokeDashoffset: clockwise ? -100 : 0,
          }}
          transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </motion.svg>

      {/* Button content */}
      <span
        className={cn(
          "relative z-10 flex h-full w-full items-center justify-center",
          "rounded-[inherit]",
          "bg-white text-neutral-900",
          "dark:bg-[#09090b] dark:text-white",
          className
        )}
      >
        {children}
      </span>
    </Wrapper>
  );
}