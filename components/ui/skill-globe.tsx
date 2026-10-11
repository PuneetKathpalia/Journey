// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Globe3D from "@/components/ui/3d-globe";
// import { BackgroundBeams } from "@/components/ui/background-beams";

// const skillsData = {
//   Frontend: [
//     "React",
//     "Next.js",
//     "TypeScript",
//     "Tailwind",
//     "Framer Motion",
//     "Shadcn",
//   ],

//   Backend: [
//     "Node.js",
//     "Express.js",
//     "REST APIs",
//     "JWT Auth",
//     "Socket.io",
//     "API Architecture",
//   ],

//   Databases: [
//     "MongoDB",
//     "MySQL",
//     "PostgreSQL",
//   ],

//   "CS Fundamentals": [
//     "DSA",
//     "DBMS",
//     "OOP",
//     "Operating Systems",
//     "Computer Networks",
//   ],

//   "AI & Modern Tech": [
//     "Prompt Engineering",
//     "LLM Apps",
//     "AI Pipelines",
//     "Vercel AI SDK",
//   ],

//   Architecture: [
//     "System Design",
//     "Clean Architecture",
//     "Scalable UI",
//     "Performance Optimization",
//   ],

//   "Competitive Programming": [
//     "350+ DSA Problems",
//     "Algorithms",
//     "Problem Solving",
//     "Competitive Coding",
//   ],
// };

// const categories = Object.keys(skillsData);

// const globeMarkers = [
//   {
//     lat: 40.7128,
//     lng: -74.006,
//     src: "/icons/frontend.png",
//     label: "Frontend",
//   },
//   {
//     lat: 51.5072,
//     lng: -0.1276,
//     src: "/icons/backend.png",
//     label: "Backend",
//   },
//   {
//     lat: 28.6139,
//     lng: 77.209,
//     src: "/icons/database.png",
//     label: "Databases",
//   },
//   {
//     lat: 35.6762,
//     lng: 139.6503,
//     src: "/icons/cs.png",
//     label: "CS Fundamentals",
//   },
//   {
//     lat: -33.8688,
//     lng: 151.2093,
//     src: "/icons/ai.png",
//     label: "AI & Modern Tech",
//   },
//   {
//     lat: 48.8566,
//     lng: 2.3522,
//     src: "/icons/system.png",
//     label: "Architecture",
//   },
//   {
//     lat: 37.7749,
//     lng: -122.4194,
//     src: "/icons/cp.png",
//     label: "Competitive Programming",
//   },
// ];

// export default function SkillGlobe() {
//   const [active, setActive] = useState("Frontend");

//   return (
//     <section
//       className="
//         relative overflow-hidden py-24

//         bg-white
//         text-black

//         dark:bg-black
//         dark:text-white
//       "
//     >

//       {/* 🔥 BACKGROUND */}
//       <BackgroundBeams className="opacity-30" />

//       {/* 🔥 CYAN GLOW */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
//       </div>

//       <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">

//         {/* 🔥 LEFT SIDE */}
//         <div className="relative flex items-center justify-center">

//           {/* 🔥 FLOATING SKILL BUTTONS */}
//           <div className="absolute inset-0 hidden lg:block">

//             {categories.map((item, i) => (
//               <motion.button
//                 key={item}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: i * 0.08 }}
//                 onClick={() => setActive(item)}
//                 className={`
//                   absolute rounded-full px-4 py-2 text-sm font-medium
//                   backdrop-blur-xl transition-all duration-300

//                   ${
//                     active === item
//                       ? `
//                         bg-cyan-400 text-black
//                         shadow-[0_0_30px_rgba(34,211,238,0.45)]
//                       `
//                       : `
//                         border border-black/10
//                         bg-black/5 text-black

//                         dark:border-white/10
//                         dark:bg-white/5
//                         dark:text-white

//                         hover:bg-cyan-400/20
//                       `
//                   }
//                 `}
//                 style={{
//                   top: `${10 + i * 11}%`,
//                   left: i % 2 === 0 ? "5%" : "72%",
//                 }}
//               >
//                 {item}
//               </motion.button>
//             ))}

//           </div>

//           {/* 🔥 GLOBE */}
//           <div className="relative h-[500px] w-full max-w-[500px]">

//             <Globe3D
//               markers={globeMarkers}
//               onMarkerClick={(marker) => {
//                 if (marker.label) {
//                   setActive(marker.label);
//                 }
//               }}
//               config={{
//                 radius: 2.2,
//                 autoRotateSpeed: 0.4,
//                 atmosphereColor: "#38bdf8",
//                 atmosphereIntensity: 0.4,
//                 showAtmosphere: true,
//                 atmosphereBlur: 3,
//                 enableZoom: false,
//                 showWireframe: true,
//                 wireframeColor: "#38bdf8",
//                 ambientIntensity: 1,
//                 pointLightIntensity: 2,
//               }}
//             />

//           </div>
//         </div>

//         {/* 🔥 RIGHT CARD */}
//         <AnimatePresence mode="wait">

//           <motion.div
//             key={active}
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -40 }}
//             transition={{ duration: 0.35 }}
//             className="
//               rounded-3xl
//               border border-black/10
//               bg-black/[0.03]

//               p-10
//               backdrop-blur-2xl

//               dark:border-white/10
//               dark:bg-white/[0.04]
//             "
//           >

//             {/* 🔥 HEADING */}
//             <h3
//               className="
//                 text-4xl font-black tracking-tight

//                 text-black
//                 dark:text-white
//               "
//             >
//               {active}
//             </h3>

//             {/* 🔥 DESCRIPTION */}
//             <p
//               className="
//                 mt-4 max-w-xl text-lg leading-relaxed

//                 text-neutral-700
//                 dark:text-neutral-300
//               "
//             >
//               Technologies and engineering concepts I actively use
//               to build scalable, interactive and production-ready
//               digital experiences.
//             </p>

//             {/* 🔥 SKILLS */}
//             <div className="mt-10 flex flex-wrap gap-4">

//               {skillsData[active as keyof typeof skillsData].map((skill) => (
//                 <motion.div
//                   key={skill}
//                   whileHover={{ scale: 1.08 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="
//                     rounded-full
//                     border border-cyan-400/20

//                     bg-cyan-400/10
//                     px-5 py-2.5

//                     text-sm font-medium
//                     text-cyan-600

//                     backdrop-blur-xl

//                     dark:text-cyan-300
//                   "
//                 >
//                   {skill}
//                 </motion.div>
//               ))}

//             </div>

//           </motion.div>

//         </AnimatePresence>

//       </div>
//     </section>
//   );
// }


// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Code2,
//   Database,
//   Server,
//   Brain,
//   Trophy,
//   Cpu,
//   Layers3,
// } from "lucide-react";

// const skillsData = {
//   Frontend: {
//     icon: Code2,
//     skills: [
//       "React",
//       "Next.js",
//       "TypeScript",
//       "Tailwind",
//       "Framer Motion",
//       "Shadcn UI",
//     ],
//   },

//   Backend: {
//     icon: Server,
//     skills: [
//       "Node.js",
//       "Express.js",
//       "REST APIs",
//       "JWT Auth",
//       "Socket.io",
//       "API Architecture",
//     ],
//   },

//   Databases: {
//     icon: Database,
//     skills: [
//       "MongoDB",
//       "MySQL",
//       "PostgreSQL",
//       "Redis",
//     ],
//   },

//   "CS Fundamentals": {
//     icon: Cpu,
//     skills: [
//       "DSA",
//       "DBMS",
//       "OOP",
//       "Operating Systems",
//       "Computer Networks",
//     ],
//   },

//   "AI & Modern Tech": {
//     icon: Brain,
//     skills: [
//       "Prompt Engineering",
//       "LLM Apps",
//       "AI Pipelines",
//       "Vercel AI SDK",
//     ],
//   },

//   Architecture: {
//     icon: Layers3,
//     skills: [
//       "System Design",
//       "Clean Architecture",
//       "Scalable UI",
//       "Performance Optimization",
//     ],
//   },

//   "Competitive Programming": {
//     icon: Trophy,
//     skills: [
//       "350+ DSA Problems",
//       "Algorithms",
//       "Problem Solving",
//       "Competitive Coding",
//     ],
//   },
// };

// const tabs = Object.keys(skillsData);

// export default function SkillGlobe() {
//   const [active, setActive] = useState("Frontend");

//   return (
//     <section
//       className="
//         relative overflow-hidden py-28

//         bg-white text-black
//         dark:bg-black dark:text-white
//       "
//     >

//       {/* 🔥 BACKGROUND GLOW */}
//       <div className="absolute inset-0 overflow-hidden">

//         <div
//           className="
//             absolute left-1/2 top-1/2
//             h-[500px] w-[500px]
//             -translate-x-1/2 -translate-y-1/2

//             rounded-full
//             bg-cyan-500/10
//             blur-[120px]
//           "
//         />

//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6">

//         {/* 🔥 TOP TABS */}
//         <div
//           className="
//             mb-14 flex flex-wrap
//             items-center justify-center
//             gap-4
//           "
//         >

//           {tabs.map((tab) => {
//             const Icon =
//               skillsData[tab as keyof typeof skillsData].icon;

//             return (
//               <motion.button
//                 key={tab}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setActive(tab)}
//                 className={`
//                   flex items-center gap-2
//                   rounded-2xl px-5 py-3

//                   text-sm font-semibold
//                   transition-all duration-300

//                   ${
//                     active === tab
//                       ? `
//                         bg-cyan-400
//                         text-black

//                         shadow-[0_0_30px_rgba(34,211,238,0.45)]
//                       `
//                       : `
//                         border border-black/10
//                         bg-black/[0.03]
//                         text-black

//                         hover:border-cyan-400/40
//                         hover:bg-cyan-400/10

//                         dark:border-white/10
//                         dark:bg-white/[0.03]
//                         dark:text-white
//                       `
//                   }
//                 `}
//               >
//                 <Icon className="h-4 w-4" />
//                 {tab}
//               </motion.button>
//             );
//           })}

//         </div>

//         {/* 🔥 MAIN GRID */}
//         <div
//           className="
//             grid items-center gap-12
//             lg:grid-cols-2
//           "
//         >

//           {/* 🔥 LEFT VISUAL */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="
//               relative flex items-center
//               justify-center
//             "
//           >

//             {/* 🔥 ROTATING ORB */}
//             <motion.div
//               animate={{
//                 rotate: 360,
//               }}
//               transition={{
//                 duration: 25,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="
//                 relative flex
//                 h-[340px] w-[340px]
//                 items-center justify-center

//                 rounded-full

//                 border border-cyan-400/20

//                 bg-gradient-to-br
//                 from-cyan-500/20
//                 via-blue-500/10
//                 to-transparent

//                 shadow-[0_0_80px_rgba(34,211,238,0.18)]
//               "
//             >

//               {/* 🔥 INNER */}
//               <div
//                 className="
//                   flex h-[250px] w-[250px]
//                   items-center justify-center

//                   rounded-full

//                   border border-cyan-400/20

//                   bg-black

//                   text-center

//                   dark:bg-neutral-950
//                 "
//               >

//                 <div>

//                   <h3
//                     className="
//                       text-3xl font-black
//                       tracking-tight

//                       text-white
//                     "
//                   >
//                     {active}
//                   </h3>

//                   <p
//                     className="
//                       mt-3 text-sm
//                       leading-relaxed

//                       text-neutral-400
//                     "
//                   >
//                     Modern engineering stack
//                     powering scalable apps.
//                   </p>

//                 </div>

//               </div>

//             </motion.div>

//           </motion.div>

//           {/* 🔥 RIGHT CARD */}
//           <AnimatePresence mode="wait">

//             <motion.div
//               key={active}
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               exit={{
//                 opacity: 0,
//                 y: -20,
//               }}
//               transition={{
//                 duration: 0.35,
//               }}
//               className="
//                 rounded-[32px]

//                 border border-black/10
//                 bg-black/[0.03]

//                 p-10

//                 backdrop-blur-xl

//                 dark:border-white/10
//                 dark:bg-white/[0.03]
//               "
//             >

//               {/* 🔥 HEADING */}
//               <div className="flex items-center gap-4">

//                 <div
//                   className="
//                     flex h-14 w-14
//                     items-center justify-center

//                     rounded-2xl

//                     bg-cyan-400/15
//                     text-cyan-400
//                   "
//                 >
//                   {(() => {
//                     const Icon =
//                       skillsData[
//                         active as keyof typeof skillsData
//                       ].icon;

//                     return <Icon className="h-7 w-7" />;
//                   })()}
//                 </div>

//                 <div>

//                   <h2
//                     className="
//                       text-4xl font-black
//                       tracking-tight

//                       text-black
//                       dark:text-white
//                     "
//                   >
//                     {active}
//                   </h2>

//                   <p
//                     className="
//                       mt-1 text-sm

//                       text-neutral-600
//                       dark:text-neutral-400
//                     "
//                   >
//                     Technologies I use regularly
//                   </p>

//                 </div>

//               </div>

//               {/* 🔥 DESCRIPTION */}
//               <p
//                 className="
//                   mt-8 text-lg
//                   leading-relaxed

//                   text-neutral-700
//                   dark:text-neutral-300
//                 "
//               >
//                 Building scalable, modern and high-performance
//                 digital experiences using production-ready tools,
//                 clean architecture and interactive UI systems.
//               </p>

//               {/* 🔥 SKILLS */}
//               <div
//                 className="
//                   mt-10 flex
//                   flex-wrap gap-4
//                 "
//               >

//                 {skillsData[
//                   active as keyof typeof skillsData
//                 ].skills.map((skill) => (
//                   <motion.div
//                     key={skill}
//                     whileHover={{
//                       scale: 1.08,
//                     }}
//                     className="
//                       rounded-full

//                       border border-cyan-400/20

//                       bg-cyan-400/10

//                       px-5 py-2.5

//                       text-sm font-semibold

//                       text-cyan-600

//                       dark:text-cyan-300
//                     "
//                   >
//                     {skill}
//                   </motion.div>
//                 ))}

//               </div>

//             </motion.div>

//           </AnimatePresence>

//         </div>

//       </div>

//     </section>
//   );
// }











// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Code2,
//   Database,
//   Server,
//   Brain,
//   Trophy,
//   Cpu,
//   Layers3,
//   Sparkles,
// } from "lucide-react";

// const skillsData = {
//   Frontend: {
//     icon: Code2,
//     gradient: "from-cyan-400 to-blue-500",
//     glow: "shadow-cyan-500/30",
//     skills: [
//       "React",
//       "Next.js",
//       "TypeScript",
//       "Tailwind CSS",
//       "Framer Motion",
//       "Shadcn UI",
//       "Aceternity UI",
//     ],
//   },

//   Backend: {
//     icon: Server,
//     gradient: "from-emerald-400 to-green-500",
//     glow: "shadow-emerald-500/30",
//     skills: [
//       "Node.js",
//       "Express.js",
//       "REST APIs",
//       "JWT Auth",
//       "Socket.io",
//       "Scalable APIs",
//     ],
//   },

//   Databases: {
//     icon: Database,
//     gradient: "from-orange-400 to-red-500",
//     glow: "shadow-orange-500/30",
//     skills: [
//       "MongoDB",
//       "MySQL",
//       "PostgreSQL",
//       "Redis",
//     ],
//   },

//   "CS Fundamentals": {
//     icon: Cpu,
//     gradient: "from-violet-400 to-purple-500",
//     glow: "shadow-violet-500/30",
//     skills: [
//       "DSA",
//       "DBMS",
//       "OOP",
//       "Operating Systems",
//       "Computer Networks",
//     ],
//   },

//   "AI & Modern Tech": {
//     icon: Brain,
//     gradient: "from-pink-400 to-rose-500",
//     glow: "shadow-pink-500/30",
//     skills: [
//       "Prompt Engineering",
//       "LLM Apps",
//       "Vercel AI SDK",
//       "AI Pipelines",
//     ],
//   },

//   Architecture: {
//     icon: Layers3,
//     gradient: "from-yellow-400 to-amber-500",
//     glow: "shadow-yellow-500/30",
//     skills: [
//       "System Design",
//       "Clean Architecture",
//       "Performance Optimization",
//       "Scalable UI",
//     ],
//   },

//   "Competitive Programming": {
//     icon: Trophy,
//     gradient: "from-cyan-400 to-sky-500",
//     glow: "shadow-cyan-500/30",
//     skills: [
//       "350+ DSA Problems",
//       "Algorithms",
//       "Problem Solving",
//       "Competitive Coding",
//     ],
//   },
// };

// const tabs = Object.keys(skillsData);

// export default function SkillGlobe() {
//   const [active, setActive] = useState("Frontend");

//   const activeData =
//     skillsData[active as keyof typeof skillsData];

//   const ActiveIcon = activeData.icon;

//   return (
//     <section
//       id="skills"
//       className="
//         relative overflow-hidden

//         bg-white text-black
//         dark:bg-black dark:text-white

//         py-32
//       "
//     >

//       {/* 🔥 MASSIVE BACKGROUND */}
//       <div className="absolute inset-0 overflow-hidden">

//         {/* GRID */}
//         <div
//           className="
//             absolute inset-0

//             opacity-[0.04]
//             dark:opacity-[0.06]

//             [background-image:linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)]
//             [background-size:80px_80px]
//           "
//         />

//         {/* GLOW */}
//         <div
//           className="
//             absolute left-1/2 top-[35%]

//             h-[700px] w-[700px]

//             -translate-x-1/2

//             rounded-full

//             bg-cyan-500/10

//             blur-[140px]
//           "
//         />

//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6">

//         {/* 🔥 HEADER */}
//         <div className="mx-auto max-w-5xl text-center">

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="
//               mb-5 inline-flex items-center gap-2

//               rounded-full

//               border border-cyan-400/20

//               bg-cyan-400/10

//               px-5 py-2

//               text-sm font-semibold

//               text-cyan-500
//             "
//           >
//             <Sparkles className="h-4 w-4" />
//             TECH STACK
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="
//               text-5xl
//               font-black
//               leading-[0.95]
//               tracking-tight

//               md:text-7xl
//             "
//           >
//             Interactive Skill{" "}
//             <span
//               className="
//                 bg-gradient-to-r
//                 from-cyan-400
//                 via-blue-500
//                 to-indigo-500

//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Universe
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="
//               mx-auto mt-8 max-w-3xl

//               text-lg leading-relaxed

//               text-neutral-600
//               dark:text-neutral-300
//             "
//           >
//             Exploring the technologies, systems and engineering
//             principles I use to build scalable, immersive and
//             high-performance digital experiences.
//           </motion.p>

//         </div>

//         {/* 🔥 TABS */}
//         <div
//           className="
//             mt-16 flex flex-wrap
//             items-center justify-center
//             gap-4
//           "
//         >

//           {tabs.map((tab) => {
//             const Icon =
//               skillsData[tab as keyof typeof skillsData].icon;

//             const isActive = active === tab;

//             return (
//               <motion.button
//                 key={tab}
//                 whileHover={{
//                   scale: 1.05,
//                   y: -3,
//                 }}
//                 whileTap={{
//                   scale: 0.96,
//                 }}
//                 onClick={() => setActive(tab)}
//                 className={`
//                   relative overflow-hidden

//                   rounded-2xl

//                   px-6 py-4

//                   text-sm font-bold

//                   transition-all duration-300

//                   ${
//                     isActive
//                       ? `
//                         text-white

//                         bg-gradient-to-r
//                         ${skillsData[tab as keyof typeof skillsData].gradient}

//                         shadow-2xl
//                         ${skillsData[tab as keyof typeof skillsData].glow}
//                       `
//                       : `
//                         border border-black/10
//                         bg-black/[0.03]

//                         text-black

//                         hover:border-cyan-400/40
//                         hover:bg-cyan-400/10

//                         dark:border-white/10
//                         dark:bg-white/[0.03]
//                         dark:text-white
//                       `
//                   }
//                 `}
//               >

//                 <div className="flex items-center gap-2">

//                   <Icon className="h-4 w-4" />

//                   {tab}

//                 </div>

//               </motion.button>
//             );
//           })}

//         </div>

//         {/* 🔥 MAIN CONTENT */}
//         <div
//           className="
//             mt-24 grid items-center
//             gap-20

//             lg:grid-cols-2
//           "
//         >

//           {/* 🔥 LEFT SIDE */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               scale: 0.9,
//             }}
//             whileInView={{
//               opacity: 1,
//               scale: 1,
//             }}
//             transition={{
//               duration: 0.6,
//             }}
//             className="
//               relative flex items-center
//               justify-center
//             "
//           >

//             {/* OUTER GLOW */}
//             <div
//               className={`
//                 absolute

//                 h-[450px] w-[450px]

//                 rounded-full

//                 bg-gradient-to-r
//                 ${activeData.gradient}

//                 opacity-20

//                 blur-[120px]
//               `}
//             />

//             {/* MAIN ORB */}
//             <motion.div
//               animate={{
//                 rotate: 360,
//               }}
//               transition={{
//                 duration: 30,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className={`
//                 relative

//                 flex h-[420px] w-[420px]
//                 items-center justify-center

//                 rounded-full

//                 border border-white/10

//                 bg-gradient-to-br
//                 ${activeData.gradient}

//                 p-[2px]

//                 shadow-2xl
//                 ${activeData.glow}
//               `}
//             >

//               {/* INNER */}
//               <div
//                 className="
//                   flex h-full w-full
//                   items-center justify-center

//                   rounded-full

//                   bg-white

//                   dark:bg-black
//                 "
//               >

//                 {/* CENTER */}
//                 <div className="text-center">

//                   <motion.div
//                     animate={{
//                       y: [0, -8, 0],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                     }}
//                     className={`
//                       mx-auto flex
//                       h-24 w-24
//                       items-center justify-center

//                       rounded-3xl

//                       bg-gradient-to-r
//                       ${activeData.gradient}

//                       text-white

//                       shadow-2xl
//                     `}
//                   >
//                     <ActiveIcon className="h-12 w-12" />
//                   </motion.div>

//                   <h3
//                     className="
//                       mt-8

//                       text-4xl
//                       font-black
//                       tracking-tight
//                     "
//                   >
//                     {active}
//                   </h3>

//                   <p
//                     className="
//                       mx-auto mt-4 max-w-xs

//                       text-base
//                       leading-relaxed

//                       text-neutral-600
//                       dark:text-neutral-400
//                     "
//                   >
//                     Modern engineering stack powering scalable
//                     digital experiences.
//                   </p>

//                 </div>

//               </div>

//             </motion.div>

//           </motion.div>

//           {/* 🔥 RIGHT SIDE */}
//           <AnimatePresence mode="wait">

//             <motion.div
//               key={active}
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               exit={{
//                 opacity: 0,
//                 y: -20,
//               }}
//               transition={{
//                 duration: 0.35,
//               }}
//               className="
//                 relative overflow-hidden

//                 rounded-[40px]

//                 border border-black/10

//                 bg-white/70

//                 p-10

//                 shadow-[0_10px_60px_rgba(0,0,0,0.08)]

//                 backdrop-blur-2xl

//                 dark:border-white/10
//                 dark:bg-white/[0.04]
//               "
//             >

//               {/* CARD GLOW */}
//               <div
//                 className={`
//                   absolute -right-20 -top-20

//                   h-60 w-60

//                   rounded-full

//                   bg-gradient-to-r
//                   ${activeData.gradient}

//                   opacity-10

//                   blur-[80px]
//                 `}
//               />

//               {/* TOP */}
//               <div className="relative z-10">

//                 <div className="flex items-center gap-5">

//                   <div
//                     className={`
//                       flex h-16 w-16
//                       items-center justify-center

//                       rounded-2xl

//                       bg-gradient-to-r
//                       ${activeData.gradient}

//                       text-white

//                       shadow-xl
//                     `}
//                   >
//                     <ActiveIcon className="h-8 w-8" />
//                   </div>

//                   <div>

//                     <h3
//                       className="
//                         text-4xl
//                         font-black
//                         tracking-tight
//                       "
//                     >
//                       {active}
//                     </h3>

//                     <p
//                       className="
//                         mt-1 text-sm

//                         text-neutral-500
//                         dark:text-neutral-400
//                       "
//                     >
//                       Technologies I actively use
//                     </p>

//                   </div>

//                 </div>

//                 <p
//                   className="
//                     mt-10

//                     text-lg
//                     leading-relaxed

//                     text-neutral-700
//                     dark:text-neutral-300
//                   "
//                 >
//                   Building scalable, modern and immersive digital
//                   products using clean architecture, interactive
//                   UI systems and production-ready engineering.
//                 </p>

//                 {/* SKILLS */}
//                 <div
//                   className="
//                     mt-10 flex
//                     flex-wrap gap-4
//                   "
//                 >

//                   {activeData.skills.map((skill) => (
//                     <motion.div
//                       key={skill}
//                       whileHover={{
//                         scale: 1.08,
//                         y: -2,
//                       }}
//                       className={`
//                         rounded-full

//                         border border-white/10

//                         bg-gradient-to-r
//                         ${activeData.gradient}

//                         px-5 py-3

//                         text-sm font-bold

//                         text-white

//                         shadow-lg
//                       `}
//                     >
//                       {skill}
//                     </motion.div>
//                   ))}

//                 </div>

//               </div>

//             </motion.div>

//           </AnimatePresence>

//         </div>

//       </div>

//     </section>
//   );
// }





// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Code2,
//   Database,
//   Server,
//   Brain,
//   Trophy,
//   Cpu,
//   Layers3,
//   Sparkles,
// } from "lucide-react";

// const skillsData = {
//   Frontend: {
//     icon: Code2,
//     gradient: "from-cyan-400 via-blue-500 to-indigo-500",
//     glow: "shadow-cyan-500/30",
//     skills: [
//       "React",
//       "Next.js",
//       "TypeScript",
//       "Tailwind CSS",
//       "Framer Motion",
//       "Shadcn UI",
//       "Aceternity UI",
//     ],
//   },

//   Backend: {
//     icon: Server,
//     gradient: "from-emerald-400 via-green-500 to-teal-500",
//     glow: "shadow-emerald-500/30",
//     skills: [
//       "Node.js",
//       "Express.js",
//       "REST APIs",
//       "JWT Auth",
//       "Socket.io",
//       "Scalable APIs",
//     ],
//   },

//   Databases: {
//     icon: Database,
//     gradient: "from-orange-400 via-red-500 to-pink-500",
//     glow: "shadow-orange-500/30",
//     skills: [
//       "MongoDB",
//       "MySQL",
//       "PostgreSQL",
//       "Redis",
//     ],
//   },

//   "CS Fundamentals": {
//     icon: Cpu,
//     gradient: "from-violet-400 via-purple-500 to-fuchsia-500",
//     glow: "shadow-violet-500/30",
//     skills: [
//       "DSA",
//       "DBMS",
//       "OOP",
//       "Operating Systems",
//       "Computer Networks",
//     ],
//   },

//   "AI & Modern Tech": {
//     icon: Brain,
//     gradient: "from-pink-400 via-rose-500 to-red-500",
//     glow: "shadow-pink-500/30",
//     skills: [
//       "Prompt Engineering",
//       "LLM Apps",
//       "Vercel AI SDK",
//       "AI Pipelines",
//     ],
//   },

//   Architecture: {
//     icon: Layers3,
//     gradient: "from-yellow-400 via-amber-500 to-orange-500",
//     glow: "shadow-yellow-500/30",
//     skills: [
//       "System Design",
//       "Clean Architecture",
//       "Performance Optimization",
//       "Scalable UI",
//     ],
//   },

//   "Competitive Programming": {
//     icon: Trophy,
//     gradient: "from-sky-400 via-cyan-500 to-blue-500",
//     glow: "shadow-sky-500/30",
//     skills: [
//       "350+ DSA Problems",
//       "Algorithms",
//       "Problem Solving",
//       "Competitive Coding",
//     ],
//   },
// };

// const tabs = Object.keys(skillsData);

// export default function SkillGlobe() {
//   const [active, setActive] = useState("Frontend");

//   const activeData =
//     skillsData[active as keyof typeof skillsData];

//   const ActiveIcon = activeData.icon;

//   return (
//     <section
//       id="skills"
//       className="
//         relative overflow-hidden

//         bg-white
//         text-black

//         dark:bg-black
//         dark:text-white

//         py-32
//       "
//     >

//       {/* 🔥 BACKGROUND */}
//       <div className="absolute inset-0 overflow-hidden">

//         {/* GRID */}
//         <div
//           className="
//             absolute inset-0

//             opacity-[0.04]
//             dark:opacity-[0.05]

//             [background-image:linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)]
//             [background-size:90px_90px]
//           "
//         />

//         {/* MAIN GLOW */}
//         <div
//           className="
//             absolute left-1/2 top-[45%]

//             h-[700px] w-[700px]

//             -translate-x-1/2

//             rounded-full

//             bg-cyan-500/10

//             blur-[140px]
//           "
//         />


//       </div>

//       <div
//   className="
//     relative z-10
//     mx-auto
//     max-w-6xl
//     px-4
//     md:px-6
//   "
// >

//         {/* 🔥 HEADER */}
//         <div className="mx-auto max-w-5xl text-center">

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="
//               mb-6 inline-flex items-center gap-2

//               rounded-full

//               border border-cyan-400/20

//               bg-cyan-400/10

//               px-5 py-2

//               text-sm font-bold
//               tracking-[0.2em]

//               text-cyan-500
//             "
//           >
//             <Sparkles className="h-4 w-4" />
//             TECH STACK
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="
//               text-5xl
//               font-black
//               leading-[0.95]
//               tracking-tight

//               md:text-7xl
//             "
//           >
//             Interactive Skill{" "}

//             <span
//               className="
//                 bg-gradient-to-r
//                 from-cyan-400
//                 via-blue-500
//                 to-indigo-500

//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Universe
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="
//               mx-auto mt-8 max-w-3xl

//               text-lg
//               leading-relaxed

//               text-neutral-600
//               dark:text-neutral-300
//             "
//           >
//             Exploring the technologies, systems and engineering
//             principles I use to build scalable, immersive and
//             high-performance digital experiences.
//           </motion.p>

//         </div>

//         {/* 🔥 TABS */}
//         <div
//           className="
//             mt-10 flex flex-wrap
//             items-center justify-center
//             gap-4
//           "
//         >

//           {tabs.map((tab) => {
//             const Icon =
//               skillsData[tab as keyof typeof skillsData].icon;

//             const isActive = active === tab;

//             return (
//               <motion.button
//                 key={tab}
//                 whileHover={{
//                   scale: 1.05,
//                   y: -3,
//                 }}
//                 whileTap={{
//                   scale: 0.95,
//                 }}
//                 onClick={() => setActive(tab)}
//                 className={`
//                   relative overflow-hidden

//                   rounded-2xl

//                   border

//                   px-6 py-4

//                   text-sm font-bold

//                   transition-all duration-300

//                   ${
//                     isActive
//                       ? `
//                         border-transparent
//                         text-white

//                         bg-gradient-to-r
//                         ${activeData.gradient}

//                         shadow-2xl
//                         ${activeData.glow}
//                       `
//                       : `
//                         border-black/10

//                         bg-black/[0.03]

//                         text-black

//                         hover:border-cyan-400/30
//                         hover:bg-cyan-400/10

//                         dark:border-white/10
//                         dark:bg-white/[0.03]
//                         dark:text-white
//                       `
//                   }
//                 `}
//               >

//                 <div className="flex items-center gap-2">

//                   <Icon className="h-4 w-4" />

//                   {tab}

//                 </div>

//               </motion.button>
//             );
//           })}

//         </div>

//         {/* 🔥 MAIN CONTENT */}
//         <div
//   className="
//     grid
//     items-center
//     gap-10
//     lg:grid-cols-[0.9fr_1.1fr]
//   "
// >

//           {/* 🔥 LEFT SIDE */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               scale: 0.9,
//             }}
//             whileInView={{
//               opacity: 1,
//               scale: 1,
//             }}
//             transition={{
//               duration: 0.5,
//             }}
//         //     className="
//         //       relative flex
//         //       items-center justify-center
//         //     "
//         //   >
//         className="
//   relative
//   flex
//   items-center
//   justify-center
//   scale-[0.82]
//   md:scale-90
//   lg:scale-100
// ">

//             {/* BIG GLOW */}
//             <div
//               className={`
//                 absolute

//                 h-[500px] w-[500px]

//                 rounded-full

//                 bg-gradient-to-r
//                 ${activeData.gradient}

//                 opacity-20

//                 blur-[120px]
//               `}
//             />

//             {/* OUTER RING */}
//             <motion.div
//               animate={{
//                 rotate: 360,
//               }}
//               transition={{
//                 duration: 25,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className={`
//                 relative

//                 flex h-[420px] w-[420px]
//                 items-center justify-center

//                 rounded-full

//                 border-[3px]
//                 border-cyan-400/50

//                 bg-black

//                 shadow-[0_0_80px_rgba(34,211,238,0.25)]
//               `}
//             >

//               {/* SMALL FLOATING DOTS */}
//               <div className="absolute left-10 top-24 h-4 w-4 rounded-full bg-cyan-400 blur-[1px]" />
//               <div className="absolute right-12 top-16 h-3 w-3 rounded-full bg-blue-400 blur-[1px]" />
//               <div className="absolute bottom-16 left-20 h-5 w-5 rounded-full bg-indigo-400 blur-[2px]" />

//               {/* INNER CIRCLE */}
//               <div
//                 className="
//                   flex h-[290px] w-[290px]
//                   items-center justify-center

//                   rounded-full

//                   border border-white/10

//                   bg-gradient-to-br
//                   from-neutral-950
//                   to-black

//                   shadow-inner
//                 "
//               >

//                 {/* CONTENT */}
//                 <motion.div
//                   animate={{
//                     rotate: -360,
//                   }}
//                   transition={{
//                     duration: 25,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="text-center"
//                 >

//                   <div
//                     className={`
//                       mx-auto flex
//                       h-24 w-24
//                       items-center justify-center

//                       rounded-3xl

//                       bg-gradient-to-r
//                       ${activeData.gradient}

//                       text-white

//                       shadow-2xl
//                     `}
//                   >
//                     <ActiveIcon className="h-12 w-12" />
//                   </div>

//                   <h3
//                     className="
//                       mt-8

//                       text-4xl
//                       font-black
//                       tracking-tight

//                       text-white
//                     "
//                   >
//                     {active}
//                   </h3>

//                   <p
//                     className="
//                       mx-auto mt-4 max-w-xs

//                       text-sm
//                       leading-relaxed

//                       text-neutral-400
//                     "
//                   >
//                     Modern engineering stack powering scalable
//                     digital experiences.
//                   </p>

//                 </motion.div>

//               </div>

//             </motion.div>

//           </motion.div>

//           {/* 🔥 RIGHT CARD */}
//           <AnimatePresence mode="wait">

//             <motion.div
//               key={active}
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               exit={{
//                 opacity: 0,
//                 y: -20,
//               }}
//               transition={{
//                 duration: 0.35,
//               }}
//              className="
//   relative overflow-hidden
//   rounded-[28px]

//                 border border-black/10

//                 bg-white/70

//                 p-7 md:p-8

//                 shadow-[0_10px_60px_rgba(0,0,0,0.08)]

//                 backdrop-blur-2xl

//                 dark:border-white/10
//                 dark:bg-white/[0.04]
//               "
//             >

//               {/* GLOW */}
//               <div
//                 className={`
//                   absolute -right-20 -top-20

//                   h-60 w-60

//                   rounded-full

//                   bg-gradient-to-r
//                   ${activeData.gradient}

//                   opacity-10

//                   blur-[90px]
//                 `}
//               />

//               <div className="relative z-10">

//                 {/* TOP */}
//                 <div className="flex items-center gap-5">

//                   <div
//                     className={`
//                       flex h-16 w-16
//                       items-center justify-center

//                       rounded-2xl

//                       bg-gradient-to-r
//                       ${activeData.gradient}

//                       text-white

//                       shadow-xl
//                     `}
//                   >
//                     <ActiveIcon className="h-8 w-8" />
//                   </div>

//                   <div>

//                     <h3
//                       className="
//                         text-5xl
//                         font-black
//                         tracking-tight

//                         text-black
//                         dark:text-white
//                       "
//                     >
//                       {active}
//                     </h3>

//                     <p
//                       className="
//                         mt-2 text-sm

//                         text-neutral-500
//                         dark:text-neutral-400
//                       "
//                     >
//                       Technologies I actively use
//                     </p>

//                   </div>

//                 </div>

//                 {/* DESC */}
//                 <p
//                   className="
//                     mt-10

//                     text-xl
//                     leading-relaxed

//                     text-neutral-700
//                     dark:text-neutral-300
//                   "
//                 >
//                   Building scalable, modern and immersive digital
//                   products using clean architecture, interactive
//                   UI systems and production-ready engineering.
//                 </p>

//                 {/* SKILLS */}
//                 <div
//                   className="
//                     mt-10 flex
//                     flex-wrap gap-4
//                   "
//                 >

//                   {activeData.skills.map((skill) => (
//                     <motion.div
//                       key={skill}
//                       whileHover={{
//                         scale: 1.08,
//                         y: -3,
//                       }}
//                       className={`
//                         rounded-full

//                         bg-gradient-to-r
//                         ${activeData.gradient}

//                         px-5 py-3

//                         text-sm font-bold

//                         text-white

//                         shadow-lg
//                       `}
//                     >
//                       {skill}
//                     </motion.div>
//                   ))}

//                 </div>

//               </div>

//             </motion.div>

//           </AnimatePresence>

//         </div>

//       </div>

//     </section>
//   );
// }












// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Code2,
//   Database,
//   Server,
//   Brain,
//   Trophy,
//   Cpu,
//   Layers3,
//   Sparkles,
// } from "lucide-react";

// const skillsData = {
//   Frontend: {
//     icon: Code2,
//     gradient: "from-cyan-400 via-blue-500 to-indigo-500",
//     glow: "shadow-cyan-500/30",
//     skills: [
//       "React",
//       "Next.js",
//       "TypeScript",
//       "Tailwind CSS",
//       "Framer Motion",
//       "Shadcn UI",
//       "Aceternity UI",
//     ],
//   },

//   Backend: {
//     icon: Server,
//     gradient: "from-emerald-400 via-green-500 to-teal-500",
//     glow: "shadow-emerald-500/30",
//     skills: [
//       "Node.js",
//       "Express.js",
//       "REST APIs",
//       "JWT Auth",
//       "Socket.io",
//       "Scalable APIs",
//     ],
//   },

//   Databases: {
//     icon: Database,
//     gradient: "from-orange-400 via-red-500 to-pink-500",
//     glow: "shadow-orange-500/30",
//     skills: [
//       "MongoDB",
//       "MySQL",
//       "PostgreSQL",
//       "Redis",
//     ],
//   },

//   "CS Fundamentals": {
//     icon: Cpu,
//     gradient: "from-violet-400 via-purple-500 to-fuchsia-500",
//     glow: "shadow-violet-500/30",
//     skills: [
//       "DSA",
//       "DBMS",
//       "OOP",
//       "Operating Systems",
//       "Computer Networks",
//     ],
//   },

//   "AI & Modern Tech": {
//     icon: Brain,
//     gradient: "from-pink-400 via-rose-500 to-red-500",
//     glow: "shadow-pink-500/30",
//     skills: [
//       "Prompt Engineering",
//       "LLM Apps",
//       "Vercel AI SDK",
//       "AI Pipelines",
//     ],
//   },

//   Architecture: {
//     icon: Layers3,
//     gradient: "from-yellow-400 via-amber-500 to-orange-500",
//     glow: "shadow-yellow-500/30",
//     skills: [
//       "System Design",
//       "Clean Architecture",
//       "Performance Optimization",
//       "Scalable UI",
//     ],
//   },

//   "Competitive Programming": {
//     icon: Trophy,
//     gradient: "from-sky-400 via-cyan-500 to-blue-500",
//     glow: "shadow-sky-500/30",
//     skills: [
//       "350+ DSA Problems",
//       "Algorithms",
//       "Problem Solving",
//       "Competitive Coding",
//     ],
//   },
// };

// const tabs = Object.keys(skillsData);

// export default function SkillGlobe() {
//   const [active, setActive] = useState("Frontend");

//   const activeData =
//     skillsData[active as keyof typeof skillsData];

//   const ActiveIcon = activeData.icon;

//   return (
//     <section
//       id="skills"
//       className="
//         relative overflow-hidden

//         bg-white
//         text-black

//         dark:bg-black
//         dark:text-white

//         py-24
//       "
//     >

//       {/* BACKGROUND */}
//       <div className="absolute inset-0 overflow-hidden">

//         <div
//           className="
//             absolute inset-0
//             opacity-[0.03]
//             dark:opacity-[0.05]

//             [background-image:linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)]
//             [background-size:80px_80px]
//           "
//         />

//         <div
//           className="
//             absolute left-1/2 top-[45%]

//             h-[500px] w-[500px]

//             -translate-x-1/2

//             rounded-full

//             bg-cyan-500/10

//             blur-[120px]
//           "
//         />

//       </div>

//       <div
//         className="
//           relative z-10
//           mx-auto
//           max-w-6xl
//           px-4
//           md:px-6
//         "
//       >

//         {/* HEADER */}
//         <div className="mx-auto max-w-4xl text-center">

//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="
//               mb-5 inline-flex items-center gap-2

//               rounded-full

//               border border-cyan-400/20

//               bg-cyan-400/10

//               px-4 py-2

//               text-xs font-bold
//               tracking-[0.25em]

//               text-cyan-500
//             "
//           >
//             <Sparkles className="h-3.5 w-3.5" />
//             TECH STACK
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="
//               text-4xl
//               font-black
//               leading-[1]
//               tracking-tight

//               md:text-6xl
//             "
//           >
//             Interactive Skill{" "}

//             <span
//               className="
//                 bg-gradient-to-r
//                 from-cyan-400
//                 via-blue-500
//                 to-indigo-500

//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Universe
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="
//               mx-auto mt-6 max-w-3xl

//               text-base
//               leading-relaxed

//               text-neutral-600
//               dark:text-neutral-300

//               md:text-lg
//             "
//           >
//             Exploring the technologies, systems and engineering
//             principles I use to build scalable, immersive and
//             high-performance digital experiences.
//           </motion.p>

//         </div>

//         {/* TABS */}
//         <div
//           className="
//             mt-10 flex flex-wrap
//             items-center justify-center
//             gap-3
//           "
//         >

//           {tabs.map((tab) => {
//             const Icon =
//               skillsData[tab as keyof typeof skillsData].icon;

//             const isActive = active === tab;

//             return (
//               <motion.button
//                 key={tab}
//                 whileHover={{
//                   scale: 1.04,
//                   y: -2,
//                 }}
//                 whileTap={{
//                   scale: 0.96,
//                 }}
//                 onClick={() => setActive(tab)}
//                 className={`
//                   relative overflow-hidden

//                   rounded-2xl

//                   border

//                   px-5 py-3

//                   text-sm font-semibold

//                   transition-all duration-300

//                   ${
//                     isActive
//                       ? `
//                         border-transparent
//                         text-white

//                         bg-gradient-to-r
//                         ${activeData.gradient}

//                         shadow-xl
//                         ${activeData.glow}
//                       `
//                       : `
//                         border-black/10

//                         bg-black/[0.03]

//                         text-black

//                         hover:border-cyan-400/30
//                         hover:bg-cyan-400/10

//                         dark:border-white/10
//                         dark:bg-white/[0.03]
//                         dark:text-white
//                       `
//                   }
//                 `}
//               >

//                 <div className="flex items-center gap-2">

//                   <Icon className="h-4 w-4" />

//                   {tab}

//                 </div>

//               </motion.button>
//             );
//           })}

//         </div>

//         {/* MAIN */}
//         <div
//           className="
//             mt-12

//             grid
//             items-center
//             gap-8

//             lg:grid-cols-[0.85fr_1fr]
//           "
//         >

//           {/* LEFT */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               scale: 0.9,
//             }}
//             whileInView={{
//               opacity: 1,
//               scale: 1,
//             }}
//             transition={{
//               duration: 0.5,
//             }}
//             className="
//               relative
//               flex
//               items-center
//               justify-center

//               scale-[0.82]
//               md:scale-90
//               lg:scale-100
//             "
//           >

//             <div
//               className={`
//                 absolute

//                 h-[340px] w-[340px]

//                 rounded-full

//                 bg-gradient-to-r
//                 ${activeData.gradient}

//                 opacity-20

//                 blur-[100px]
//               `}
//             />

//             {/* OUTER */}
//             <motion.div
//               animate={{
//                 rotate: 360,
//               }}
//               transition={{
//                 duration: 25,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="
//                 relative

//                 flex
//                 h-[300px] w-[300px]
//                 md:h-[360px] md:w-[360px]

//                 items-center justify-center

//                 rounded-full

//                 border-[2px]
//                 border-cyan-400/50

//                 bg-black

//                 shadow-[0_0_60px_rgba(34,211,238,0.2)]
//               "
//             >

//               {/* FLOATING DOTS */}
//               <div className="absolute left-10 top-20 h-3 w-3 rounded-full bg-cyan-400 blur-[1px]" />
//               <div className="absolute right-10 top-14 h-2.5 w-2.5 rounded-full bg-blue-400 blur-[1px]" />
//               <div className="absolute bottom-14 left-16 h-4 w-4 rounded-full bg-indigo-400 blur-[2px]" />

//               {/* INNER */}
//               <div
//                 className="
//                   flex
//                   h-[220px] w-[220px]
//                   md:h-[280px] md:w-[280px]

//                   items-center justify-center

//                   rounded-full

//                   border border-white/10

//                   bg-gradient-to-br
//                   from-neutral-950
//                   to-black
//                 "
//               >

//                 <motion.div
//                   animate={{
//                     rotate: -360,
//                   }}
//                   transition={{
//                     duration: 25,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="text-center"
//                 >

//                   <div
//                     className={`
//                       mx-auto flex

//                       h-16 w-16
//                       md:h-20 md:w-20

//                       items-center justify-center

//                       rounded-2xl

//                       bg-gradient-to-r
//                       ${activeData.gradient}

//                       text-white
//                     `}
//                   >
//                     <ActiveIcon className="h-8 w-8 md:h-10 md:w-10" />
//                   </div>

//                   <h3
//                     className="
//                       mt-6

//                       text-3xl
//                       md:text-4xl

//                       font-black
//                       tracking-tight

//                       text-white
//                     "
//                   >
//                     {active}
//                   </h3>

//                   <p
//                     className="
//                       mx-auto mt-3 max-w-[220px]

//                       text-xs md:text-sm
//                       leading-relaxed

//                       text-neutral-400
//                     "
//                   >
//                     Modern engineering stack powering scalable
//                     digital experiences.
//                   </p>

//                 </motion.div>

//               </div>

//             </motion.div>

//           </motion.div>

//           {/* RIGHT CARD */}
//           <AnimatePresence mode="wait">

//             <motion.div
//               key={active}
//               initial={{
//                 opacity: 0,
//                 y: 25,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               exit={{
//                 opacity: 0,
//                 y: -20,
//               }}
//               transition={{
//                 duration: 0.3,
//               }}
//               className="
//                 relative overflow-hidden

//                 rounded-[28px]

//                 border border-black/10

//                 bg-white/70

//                 p-6

//                 shadow-[0_10px_60px_rgba(0,0,0,0.08)]

//                 backdrop-blur-2xl

//                 dark:border-white/10
//                 dark:bg-white/[0.04]
//               "
//             >

//               {/* GLOW */}
//               <div
//                 className={`
//                   absolute -right-20 -top-20

//                   h-52 w-52

//                   rounded-full

//                   bg-gradient-to-r
//                   ${activeData.gradient}

//                   opacity-10

//                   blur-[80px]
//                 `}
//               />

//               <div className="relative z-10">

//                 {/* TOP */}
//                 <div className="flex items-center gap-4">

//                   <div
//                     className={`
//                       flex
//                       h-14 w-14

//                       items-center justify-center

//                       rounded-2xl

//                       bg-gradient-to-r
//                       ${activeData.gradient}

//                       text-white
//                     `}
//                   >
//                     <ActiveIcon className="h-7 w-7" />
//                   </div>

//                   <div>

//                     <h3
//                       className="
//                         text-3xl
//                         md:text-4xl

//                         font-black
//                         tracking-tight

//                         text-black
//                         dark:text-white
//                       "
//                     >
//                       {active}
//                     </h3>

//                     <p
//                       className="
//                         mt-1 text-xs md:text-sm

//                         text-neutral-500
//                         dark:text-neutral-400
//                       "
//                     >
//                       Technologies I actively use
//                     </p>

//                   </div>

//                 </div>

//                 {/* DESC */}
//                 <p
//                   className="
//                     mt-8

//                     text-base
//                     md:text-lg

//                     leading-relaxed

//                     text-neutral-700
//                     dark:text-neutral-300
//                   "
//                 >
//                   Building scalable, modern and immersive digital
//                   products using clean architecture, interactive
//                   UI systems and production-ready engineering.
//                 </p>

//                 {/* SKILLS */}
//                 <div
//                   className="
//                     mt-8

//                     flex flex-wrap
//                     gap-3
//                   "
//                 >

//                   {activeData.skills.map((skill) => (
//                     <motion.div
//                       key={skill}
//                       whileHover={{
//                         scale: 1.06,
//                         y: -2,
//                       }}
//                       className={`
//                         rounded-full

//                         bg-gradient-to-r
//                         ${activeData.gradient}

//                         px-4 py-2.5

//                         text-sm font-semibold

//                         text-white

//                         shadow-lg
//                       `}
//                     >
//                       {skill}
//                     </motion.div>
//                   ))}

//                 </div>

//               </div>

//             </motion.div>

//           </AnimatePresence>

//         </div>

//       </div>

//     </section>
//   );
// }

















// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import {
//   Code2,
//   Database,
//   Server,
//   Brain,
//   Trophy,
//   Cpu,
//   Layers3,
//   Sparkles,
// } from "lucide-react";

// const skillsData = {
//   Frontend: {
//     icon: Code2,
//     color: "from-cyan-400 to-blue-500",
//     skills: [
//       "React",
//       "Next.js",
//       "TypeScript",
//       "Tailwind CSS",
//       "Framer Motion",
//       "Shadcn UI",
//       "Aceternity UI",
//     ],
//   },

//   Backend: {
//     icon: Server,
//     color: "from-emerald-400 to-green-500",
//     skills: [
//       "Node.js",
//       "Express.js",
//       "REST APIs",
//       "JWT Auth",
//       "Socket.io",
//       "Scalable APIs",
//     ],
//   },

//   Databases: {
//     icon: Database,
//     color: "from-orange-400 to-red-500",
//     skills: [
//       "MongoDB",
//       "PostgreSQL",
//       "MySQL",
//       "Redis",
//     ],
//   },

//   "CS Fundamentals": {
//     icon: Cpu,
//     color: "from-violet-400 to-purple-500",
//     skills: [
//       "DSA",
//       "DBMS",
//       "OOP",
//       "Operating Systems",
//       "Computer Networks",
//     ],
//   },

//   "AI & Modern Tech": {
//     icon: Brain,
//     color: "from-pink-400 to-rose-500",
//     skills: [
//       "Prompt Engineering",
//       "LLM Apps",
//       "AI Pipelines",
//       "Vercel AI SDK",
//     ],
//   },

//   Architecture: {
//     icon: Layers3,
//     color: "from-yellow-400 to-orange-500",
//     skills: [
//       "System Design",
//       "Scalable Systems",
//       "Performance",
//       "Clean Architecture",
//     ],
//   },

//   "Competitive Programming": {
//     icon: Trophy,
//     color: "from-sky-400 to-cyan-500",
//     skills: [
//       "350+ DSA Problems",
//       "Algorithms",
//       "Competitive Coding",
//       "Problem Solving",
//     ],
//   },
// };

// const tabs = Object.keys(skillsData);

// export default function SkillGlobe() {
//   const [active, setActive] = useState("Frontend");

//   const activeData =
//     skillsData[active as keyof typeof skillsData];

//   const ActiveIcon = activeData.icon;

//   return (
//     <section
//   id="skills"
//   className="
//     scroll-mt-10

//     relative overflow-hidden

//     bg-white text-black
//     dark:bg-black dark:text-white
//   "
// >

//       {/* BACKGROUND */}
//       <div className="absolute inset-0">

//         <div
//           className="
//             absolute inset-0

//             opacity-[0.03]

//             [background-image:linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)]
//             [background-size:70px_70px]
//           "
//         />

//         <div
//           className="
//             absolute left-1/2 top-1/2
//             h-[500px] w-[500px]

//             -translate-x-1/2
//             -translate-y-1/2

//             rounded-full

//             bg-cyan-500/10

//             blur-[120px]
//           "
//         />

//       </div>

//       <div className="relative z-10 mx-auto max-w-6xl px-4">

//         {/* HEADER */}
//         <div className="text-center">

//           <div
//             className="
//               inline-flex items-center gap-2

//               rounded-full

//               border border-cyan-400/20

//               bg-cyan-400/10

//               px-4 py-2

//               text-xs font-bold
//               tracking-[0.25em]

//               text-cyan-400
//             "
//           >
//             <Sparkles className="h-3.5 w-3.5" />
//             TECH STACK
//           </div>

//           <h2
//             className="
//               mt-6

//               text-4xl
//               font-black
//               leading-none

//               md:text-6xl
//             "
//           >
//             Interactive Skill{" "}

//             <span
//               className="
//                 bg-gradient-to-r
//                 from-cyan-400
//                 via-blue-500
//                 to-indigo-500

//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Universe
//             </span>
//           </h2>

//           <p
//             className="
//               mx-auto mt-6 max-w-2xl

//               text-sm leading-relaxed
//               text-neutral-500

//               md:text-base
//             "
//           >
//             Exploring technologies and engineering principles
//             used to build scalable and immersive digital products.
//           </p>

//         </div>

//         {/* TABS */}
//         <div
//   className="
//     mt-12

//     flex flex-wrap

//     items-center
//     justify-center

//     gap-3

//     max-w-5xl
//     mx-auto
//   "
// >

//           {tabs.map((tab) => {
//             const Icon =
//               skillsData[tab as keyof typeof skillsData].icon;

//             const isActive = active === tab;

//             return (
//               <motion.button
//                 key={tab}
//                 whileHover={{
//                   scale: 1.03,
//                   y: -2,
//                 }}
//                 whileTap={{
//                   scale: 0.97,
//                 }}
//                 onClick={() => setActive(tab)}
//                 className={`
//                   flex-shrink-0

//                   rounded-2xl
//                   border

//                   px-5 py-3

//                   text-sm font-semibold

//                   transition-all duration-300

//                   ${
//                     isActive
//                       ? `
//                         border-transparent
//                         text-white

//                         bg-gradient-to-r
//                         ${activeData.color}

//                         shadow-xl
//                       `
//                       : `
//                         border-white/10

//                         bg-white/[0.03]

//                         hover:bg-white/[0.06]
//                       `
//                   }
//                 `}
//               >

//                 <div className="flex items-center gap-2 whitespace-nowrap">

//                   <Icon className="h-4 w-4" />

//                   {tab}

//                 </div>

//               </motion.button>
//             );
//           })}

//         </div>

//         {/* MAIN */}
//         <div
//           className="
//             mt-16

//             grid items-center gap-10

//             lg:grid-cols-2
//           "
//         >

//           {/* LEFT ORB */}
//           <div className="relative flex justify-center">

//             <motion.div
//               animate={{
//                 rotate: 360,
//               }}
//               transition={{
//                 duration: 30,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className={`
//                 relative

//                 flex items-center justify-center

//                 h-[280px] w-[280px]
//                 md:h-[360px] md:w-[360px]

//                 rounded-full

//                 border border-cyan-400/30

//                 bg-black

//                 shadow-[0_0_60px_rgba(34,211,238,0.18)]
//               `}
//             >

//               {/* INNER */}
//               <div
//                 className="
//                   flex items-center justify-center

//                   h-[220px] w-[220px]
//                   md:h-[280px] md:w-[280px]

//                   rounded-full

//                   border border-white/10

//                   bg-neutral-950
//                 "
//               >

//                 <motion.div
//                   animate={{
//                     rotate: -360,
//                   }}
//                   transition={{
//                     duration: 30,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="text-center"
//                 >

//                   <div
//                     className={`
//                       mx-auto

//                       flex items-center justify-center

//                       h-20 w-20

//                       rounded-3xl

//                       bg-gradient-to-r
//                       ${activeData.color}

//                       text-white
//                     `}
//                   >
//                     <ActiveIcon className="h-10 w-10" />
//                   </div>

//                   <h3
//                     className="
//                       mt-6

//                       text-3xl
//                       font-black

//                       text-white
//                     "
//                   >
//                     {active}
//                   </h3>

//                 </motion.div>

//               </div>

//             </motion.div>

//           </div>

//           {/* CARD */}
//           <AnimatePresence mode="wait">

//             <motion.div
//               key={active}
//               initial={{
//                 opacity: 0,
//                 y: 20,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               exit={{
//                 opacity: 0,
//                 y: -20,
//               }}
//               className="
//                 rounded-[32px]

//                 border border-white/10

//                 bg-white/[0.03]

//                 p-7 md:p-9

//                 backdrop-blur-2xl
//               "
//             >

//               <div className="flex items-center gap-4">

//                 <div
//                   className={`
//                     flex items-center justify-center

//                     h-14 w-14

//                     rounded-2xl

//                     bg-gradient-to-r
//                     ${activeData.color}

//                     text-white
//                   `}
//                 >
//                   <ActiveIcon className="h-7 w-7" />
//                 </div>

//                 <div>

//                   <h3
//                     className="
//                       text-3xl
//                       font-black
//                     "
//                   >
//                     {active}
//                   </h3>

//                   <p className="text-sm text-neutral-400 mt-1">
//                     Technologies I actively use
//                   </p>

//                 </div>

//               </div>

//               <p
//                 className="
//                   mt-8

//                   text-base
//                   leading-relaxed

//                   text-neutral-300
//                 "
//               >
//                 Building scalable and immersive digital
//                 products using modern engineering principles,
//                 interactive UI systems and clean architecture.
//               </p>

//               {/* SKILLS */}
//               <div className="mt-8 flex flex-wrap gap-3">

//                 {activeData.skills.map((skill) => (
//                   <motion.div
//                     key={skill}
//                     whileHover={{
//                       scale: 1.05,
//                       y: -2,
//                     }}
//                     className={`
//                       rounded-full

//                       bg-gradient-to-r
//                       ${activeData.color}

//                       px-4 py-2

//                       text-sm font-semibold

//                       text-white
//                     `}
//                   >
//                     {skill}
//                   </motion.div>
//                 ))}

//               </div>

//             </motion.div>

//           </AnimatePresence>

//         </div>

//       </div>

//     </section>
//   );
// }























// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import {
//   Code2,
//   Database,
//   Server,
//   Brain,
//   Trophy,
//   Cpu,
//   Layers3,
//   Sparkles,
// } from "lucide-react";

// const skillsData = {
//   Frontend: {
//     icon: Code2,
//     color: "from-cyan-400 via-blue-500 to-indigo-500",
//     glow: "shadow-cyan-500/20",
//     skills: [
//       "React",
//       "Next.js",
//       "TypeScript",
//       "Tailwind CSS",
//       "Framer Motion",
//       "Shadcn UI",
//       "Aceternity UI",
//     ],
//   },

//   Backend: {
//     icon: Server,
//     color: "from-emerald-400 via-green-500 to-lime-500",
//     glow: "shadow-emerald-500/20",
//     skills: [
//       "Node.js",
//       "Express.js",
//       "REST APIs",
//       "JWT Auth",
//       "Socket.io",
//       "Scalable APIs",
//     ],
//   },

//   Databases: {
//     icon: Database,
//     color: "from-orange-400 via-red-500 to-rose-500",
//     glow: "shadow-orange-500/20",
//     skills: [
//       "MongoDB",
//       "PostgreSQL",
//       "MySQL",
//       "Redis",
//     ],
//   },

//   "CS Fundamentals": {
//     icon: Cpu,
//     color: "from-violet-400 via-purple-500 to-fuchsia-500",
//     glow: "shadow-violet-500/20",
//     skills: [
//       "DSA",
//       "DBMS",
//       "OOP",
//       "Operating Systems",
//       "Computer Networks",
//     ],
//   },

//   "AI & Modern Tech": {
//     icon: Brain,
//     color: "from-pink-400 via-rose-500 to-red-500",
//     glow: "shadow-pink-500/20",
//     skills: [
//       "Prompt Engineering",
//       "LLM Apps",
//       "AI Pipelines",
//       "Vercel AI SDK",
//     ],
//   },

//   Architecture: {
//     icon: Layers3,
//     color: "from-yellow-400 via-orange-500 to-amber-500",
//     glow: "shadow-yellow-500/20",
//     skills: [
//       "System Design",
//       "Scalable Systems",
//       "Performance",
//       "Clean Architecture",
//     ],
//   },

//   "Competitive Programming": {
//     icon: Trophy,
//     color: "from-sky-400 via-cyan-500 to-blue-500",
//     glow: "shadow-sky-500/20",
//     skills: [
//       "350+ DSA Problems",
//       "Algorithms",
//       "Competitive Coding",
//       "Problem Solving",
//     ],
//   },
// };

// const tabs = Object.keys(skillsData);

// export default function SkillGlobe() {
//   const [active, setActive] = useState("Frontend");

//   const activeData =
//     skillsData[active as keyof typeof skillsData];

//   const ActiveIcon = activeData.icon;

//   return (
//     <section
//       id="skills"
//       className="
//         scroll-mt-28

//         relative overflow-hidden

//         bg-white text-black
//         dark:bg-black dark:text-white

//         pt-20 pb-24 md:pt-28
//       "
//     >
//       {/* BACKGROUND */}
//       <div className="absolute inset-0">

//         <div
//           className="
//             absolute inset-0

//             opacity-[0.03]

//             [background-image:linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)]
//             [background-size:70px_70px]
//           "
//         />

//         <div
//           className="
//             absolute left-1/2 top-1/2

//             h-[550px] w-[550px]

//             -translate-x-1/2
//             -translate-y-1/2

//             rounded-full

//             bg-cyan-500/10

//             blur-[140px]
//           "
//         />

//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-5">

//         {/* HEADER */}
//         <div className="text-center">

//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="
//               inline-flex items-center gap-2

//               rounded-full

//               border border-cyan-400/20

//               bg-cyan-400/10

//               px-5 py-2

//               text-xs font-bold

//               tracking-[0.28em]

//               text-cyan-400
//             "
//           >
//             <Sparkles className="h-3.5 w-3.5" />
//             TECH STACK
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="
//               mx-auto mt-7

//               max-w-5xl

//               text-5xl
//               font-black

//               leading-[0.95]
//               tracking-tight

//               md:text-7xl
//             "
//           >
//             Interactive Skill{" "}

//             <span
//               className="
//                 bg-gradient-to-r
//                 from-cyan-400
//                 via-blue-500
//                 to-indigo-500

//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Universe
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="
//               mx-auto mt-7

//               max-w-3xl

//               text-base
//               leading-relaxed

//               text-neutral-500

//               dark:text-neutral-400

//               md:text-lg
//             "
//           >
//             Exploring technologies and engineering principles
//             used to build scalable, immersive and high-performance
//             digital products.
//           </motion.p>

//         </div>

//         {/* TABS */}
//         <div
//           className="
//             mt-12

//             flex items-center justify-center

//             gap-3

//             overflow-x-auto

//             scrollbar-hide

//             pb-2
//           "
//         >

//           {tabs.map((tab) => {
//             const Icon =
//               skillsData[tab as keyof typeof skillsData].icon;

//             const isActive = active === tab;

//             return (
//               <motion.button
//                 key={tab}
//                 whileHover={{
//                   scale: 1.03,
//                   y: -2,
//                 }}
//                 whileTap={{
//                   scale: 0.97,
//                 }}
//                 onClick={() => setActive(tab)}
//                 className={`
//                   group

//                   flex-shrink-0

//                   rounded-2xl

//                   border

//                   px-5 py-3

//                   text-sm font-semibold

//                   transition-all duration-300

//                   ${
//                     isActive
//                       ? `
//                         border-transparent

//                         bg-gradient-to-r
//                         ${activeData.color}

//                         text-white

//                         shadow-2xl
//                         ${activeData.glow}
//                       `
//                      : `
//   border-black/10 dark:border-white/10

//   bg-black/[0.03] dark:bg-white/[0.03]

//   hover:bg-black/[0.06] dark:hover:bg-white/[0.06]

//   text-black dark:text-neutral-300
// `
//                   }
//                 `}
//               >

//                 <div className="flex items-center gap-2 whitespace-nowrap">

//                   <Icon className="h-4 w-4" />

//                   {tab}

//                 </div>

//               </motion.button>
//             );
//           })}

//         </div>

//         {/* MAIN */}
//         <div
//           className="
//             mt-14

//             grid items-center gap-12

//             lg:grid-cols-2
//           "
//         >

//           {/* ORB */}
//           <div className="relative flex justify-center">

//             {/* OUTER GLOW */}
//             <div
//               className={`
//                 absolute

//                 h-[380px]
//                 w-[380px]

//                 rounded-full

//                 bg-gradient-to-r
//                 ${activeData.color}

//                 opacity-10

//                 blur-[100px]
//               `}
//             />

//             <motion.div
//               animate={{
//                 rotate: 360,
//               }}
//               transition={{
//                 duration: 28,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="
//                 relative

//                 flex items-center justify-center

//                 h-[300px] w-[300px]
//                 md:h-[400px] md:w-[400px]

//                 rounded-full

//                 border border-cyan-400/20

//                 bg-white dark:bg-black

//                 shadow-[0_0_80px_rgba(34,211,238,0.15)]
//               "
//             >

//               {/* RING */}
//               <div
//                 className="
//                   absolute

//                   h-[75%]
//                   w-[75%]

//                   rounded-full

//                   border border-black/10 dark:border-white/5
//                 "
//               />

//               {/* FLOATING DOTS */}
//               <motion.div
//                 animate={{
//                   rotate: -360,
//                 }}
//                 transition={{
//                   duration: 10,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute inset-0"
//               >

//                 <div className="absolute left-10 top-20 h-4 w-4 rounded-full bg-cyan-400 blur-[1px]" />

//                 <div className="absolute bottom-16 right-14 h-5 w-5 rounded-full bg-indigo-400 blur-[1px]" />

//                 <div className="absolute right-5 top-1/2 h-3 w-3 rounded-full bg-blue-400 blur-[1px]" />

//               </motion.div>

//               {/* INNER */}
//               <motion.div
//                 animate={{
//                   rotate: -360,
//                 }}
//                 transition={{
//                   duration: 28,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="
//                   text-center
//                 "
//               >

//                 <div
//                   className={`
//                     mx-auto

//                     flex items-center justify-center

//                     h-24 w-24

//                     rounded-[30px]

//                     bg-gradient-to-r
//                     ${activeData.color}

//                     shadow-2xl
//                     ${activeData.glow}
//                   `}
//                 >
//                   <ActiveIcon className="h-12 w-12 text-white" />
//                 </div>

//                 <h3
//                   className="
//                     mt-7

//                     text-4xl
//                     font-black

//                     text-white
//                   "
//                 >
//                   {active}
//                 </h3>

//                 <p
//                   className="
//                     mx-auto mt-4

//                     max-w-[220px]

//                     text-sm
//                     leading-relaxed

//                     text-neutral-700 dark:text-neutral-500
//                   "
//                 >
//                   Modern engineering stack powering scalable
//                   digital experiences.
//                 </p>

//               </motion.div>

//             </motion.div>

//           </div>

//           {/* CARD */}
//           <AnimatePresence mode="wait">

//             <motion.div
//               key={active}
//               initial={{
//                 opacity: 0,
//                 y: 20,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               exit={{
//                 opacity: 0,
//                 y: -20,
//               }}
//               transition={{
//                 duration: 0.3,
//               }}
//               className="
//                 relative overflow-hidden

//                 rounded-[36px]

//                 border border-black/10 dark:border-white/10

//                 bg-gradient-to-br
//                 from-black/[0.03] to-black/[0.01]
// dark:from-white/[0.05]
// dark:to-white/[0.02]

//                 p-8 md:p-10

//                 backdrop-blur-2xl

//                 shadow-[0_20px_80px_rgba(0,0,0,0.45)]
//               "
//             >

//               {/* CARD GLOW */}
//               <div
//                 className={`
//                   absolute -top-24 right-0

//                   h-48 w-48

//                   rounded-full

//                   bg-gradient-to-r
//                   ${activeData.color}

//                   opacity-10

//                   blur-[100px]
//                 `}
//               />

//               <div className="relative z-10">

//                 <div className="flex items-center gap-5">

//                   <div
//                     className={`
//                       flex items-center justify-center

//                       h-16 w-16

//                       rounded-3xl

//                       bg-gradient-to-r
//                       ${activeData.color}

//                       shadow-xl
//                       ${activeData.glow}
//                     `}
//                   >
//                     <ActiveIcon className="h-8 w-8 text-white" />
//                   </div>

//                   <div>

//                     <h3
//                       className="
//                         text-4xl
//                         font-black
//                       "
//                     >
//                       {active}
//                     </h3>

//                     <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
//                       Technologies I actively use
//                     </p>

//                   </div>

//                 </div>

//                 <p
//                   className="
//                     mt-8

//                     text-lg
//                     leading-relaxed

//                     text-neutral-700 dark:text-neutral-300
//                   "
//                 >
//                   Building scalable and immersive digital
//                   products using modern engineering principles,
//                   interactive UI systems and clean architecture.
//                 </p>

//                 {/* SKILLS */}
//                 <div className="mt-8 flex flex-wrap gap-3">

//                   {activeData.skills.map((skill) => (
//                     <motion.div
//                       key={skill}
//                       whileHover={{
//                         scale: 1.05,
//                         y: -2,
//                       }}
//                       className={`
//                         rounded-full

//                         bg-gradient-to-r
//                         ${activeData.color}

//                         px-5 py-2.5

//                         text-sm font-semibold

//                         text-white

//                         shadow-lg
//                       `}
//                     >
//                       {skill}
//                     </motion.div>
//                   ))}

//                 </div>

//               </div>

//             </motion.div>

//           </AnimatePresence>

//         </div>

//       </div>

//     </section>
//   );
// }














// "use client";

// import { useMemo, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// import {
//   Code2,
//   Database,
//   Server,
//   Brain,
//   Trophy,
//   Cpu,
//   Layers3,
//   Sparkles,
//   ArrowUpRight,
//   Check,
// } from "lucide-react";

// /* =========================================================
//    TYPES
// ========================================================= */

// type Skill = {
//   name: string;
//   description: string;
//   use: string;
// };

// type Category = {
//   icon: any;
//   gradient: string;
//   skills: Skill[];
// };

// /* =========================================================
//    DATA
// ========================================================= */

// const skillsData: Record<string, Category> = {
//   Frontend: {
//     icon: Code2,
//     gradient: "from-cyan-400 via-blue-500 to-indigo-500",
//     skills: [
//       {
//         name: "React",
//         description:
//           "Component-driven UI development for scalable web applications.",
//         use: "Interactive interfaces and reusable component systems.",
//       },
//       {
//         name: "Next.js",
//         description:
//           "A production-ready React framework for modern web applications.",
//         use: "Application architecture, routing and optimized experiences.",
//       },
//       {
//         name: "TypeScript",
//         description:
//           "Strong typing for safer and more maintainable applications.",
//         use: "Type-safe frontend and backend development.",
//       },
//       {
//         name: "Tailwind CSS",
//         description:
//           "Utility-first CSS for fast and consistent interface development.",
//         use: "Responsive layouts and modern design systems.",
//       },
//       {
//         name: "Framer Motion",
//         description:
//           "Motion library for smooth and purposeful UI animation.",
//         use: "Transitions, interactions and micro-animations.",
//       },
//       {
//         name: "Shadcn UI",
//         description:
//           "Composable UI primitives for modern React applications.",
//         use: "Reusable interface components and design systems.",
//       },
//       {
//         name: "Aceternity UI",
//         description:
//           "Animated components for immersive modern interfaces.",
//         use: "Advanced visual interactions and portfolio experiences.",
//       },
//     ],
//   },

//   Backend: {
//     icon: Server,
//     gradient: "from-emerald-400 via-green-500 to-teal-500",
//     skills: [
//       {
//         name: "Node.js",
//         description:
//           "JavaScript runtime for backend services and APIs.",
//         use: "REST APIs, backend services and application logic.",
//       },
//       {
//         name: "Express.js",
//         description:
//           "Backend framework for building Node.js APIs.",
//         use: "REST endpoints, middleware and server architecture.",
//       },
//       {
//         name: "REST APIs",
//         description:
//           "Structured APIs for communication between applications.",
//         use: "CRUD operations, authentication and service integration.",
//       },
//       {
//         name: "JWT Auth",
//         description:
//           "Token-based authentication for securing application resources.",
//         use: "Authentication and protected API routes.",
//       },
//       {
//         name: "Socket.io",
//         description:
//           "Real-time communication between clients and servers.",
//         use: "Real-time updates and interactive applications.",
//       },
//       {
//         name: "Scalable APIs",
//         description:
//           "Backend architecture designed for maintainability.",
//         use: "Services, business logic and production systems.",
//       },
//     ],
//   },

//   Databases: {
//     icon: Database,
//     gradient: "from-orange-400 via-red-500 to-rose-500",
//     skills: [
//       {
//         name: "MongoDB",
//         description:
//           "Document-oriented NoSQL database for flexible data models.",
//         use: "MERN applications and document-based systems.",
//       },
//       {
//         name: "PostgreSQL",
//         description:
//           "Relational database for structured application data.",
//         use: "Production applications requiring relational models.",
//       },
//       {
//         name: "MySQL",
//         description:
//           "Relational database used for structured enterprise data.",
//         use: "Backend applications and enterprise systems.",
//       },
//       {
//         name: "Redis",
//         description:
//           "In-memory data store designed for fast access.",
//         use: "Caching and performance-focused backend systems.",
//       },
//     ],
//   },

//   "CS Fundamentals": {
//     icon: Cpu,
//     gradient: "from-violet-400 via-purple-500 to-fuchsia-500",
//     skills: [
//       {
//         name: "DSA",
//         description:
//           "Algorithms and data structures for efficient problem solving.",
//         use: "Technical interviews and algorithmic optimization.",
//       },
//       {
//         name: "DBMS",
//         description:
//           "Database concepts, modeling and query fundamentals.",
//         use: "Designing reliable application data layers.",
//       },
//       {
//         name: "OOP",
//         description:
//           "Object-oriented principles for maintainable software.",
//         use: "Java, C++ and large application codebases.",
//       },
//       {
//         name: "Operating Systems",
//         description:
//           "Processes, memory, concurrency and system fundamentals.",
//         use: "Systems knowledge and engineering fundamentals.",
//       },
//       {
//         name: "Computer Networks",
//         description:
//           "Networking fundamentals behind distributed applications.",
//         use: "HTTP, APIs and service communication.",
//       },
//     ],
//   },

//   "AI & Modern Tech": {
//     icon: Brain,
//     gradient: "from-pink-400 via-rose-500 to-red-500",
//     skills: [
//       {
//         name: "Prompt Engineering",
//         description:
//           "Designing structured prompts for reliable AI workflows.",
//         use: "AI-assisted development and productivity.",
//       },
//       {
//         name: "LLM Apps",
//         description:
//           "Application experiences built around large language models.",
//         use: "AI-powered application features.",
//       },
//       {
//         name: "AI Pipelines",
//         description:
//           "Connecting application data with AI capabilities.",
//         use: "AI-assisted application architecture.",
//       },
//       {
//         name: "Vercel AI SDK",
//         description:
//           "Tools for integrating AI interactions into web applications.",
//         use: "Streaming AI interfaces and integrations.",
//       },
//     ],
//   },

//   Architecture: {
//     icon: Layers3,
//     gradient: "from-yellow-400 via-orange-500 to-amber-500",
//     skills: [
//       {
//         name: "System Design",
//         description:
//           "Breaking applications into scalable components.",
//         use: "Backend architecture and system-level thinking.",
//       },
//       {
//         name: "Scalable Systems",
//         description:
//           "Designing systems that can evolve with requirements.",
//         use: "Production applications and backend architecture.",
//       },
//       {
//         name: "Performance",
//         description:
//           "Improving application efficiency and responsiveness.",
//         use: "Frontend and backend optimization.",
//       },
//       {
//         name: "Clean Architecture",
//         description:
//           "Separating responsibilities for maintainable systems.",
//         use: "Large applications and backend codebases.",
//       },
//     ],
//   },

//   "Competitive Programming": {
//     icon: Trophy,
//     gradient: "from-sky-400 via-cyan-500 to-blue-500",
//     skills: [
//       {
//         name: "350+ DSA Problems",
//         description:
//           "Consistent algorithm and data structure practice.",
//         use: "Technical interviews and competitive problem solving.",
//       },
//       {
//         name: "Algorithms",
//         description:
//           "Understanding common algorithmic patterns.",
//         use: "Optimization and technical problem solving.",
//       },
//       {
//         name: "Competitive Coding",
//         description:
//           "Solving programming problems under constraints.",
//         use: "Speed, logic and algorithmic thinking.",
//       },
//       {
//         name: "Problem Solving",
//         description:
//           "Breaking complex problems into smaller logical steps.",
//         use: "Software engineering and technical interviews.",
//       },
//     ],
//   },
// };

// const categories = Object.keys(skillsData);

// /* =========================================================
//    COMPONENT
// ========================================================= */

// export default function SkillGlobe() {
//   const [active, setActive] = useState("Frontend");
//   const [selected, setSelected] = useState("React");

//   const current = skillsData[active];
//   const ActiveIcon = current.icon;

//   const selectedSkill =
//     current.skills.find((skill) => skill.name === selected) ??
//     current.skills[0];

//   const selectedIndex = useMemo(() => {
//     return current.skills.findIndex(
//       (skill) => skill.name === selectedSkill.name,
//     );
//   }, [current.skills, selectedSkill.name]);

//   function changeCategory(category: string) {
//     setActive(category);
//     setSelected(skillsData[category].skills[0].name);
//   }

//   return (
//     <section
//       id="skills"
//       className="
//         relative
//         overflow-hidden
//         bg-white
//         text-black
//         dark:bg-black
//         dark:text-white
//       "
//     >
//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div className="pointer-events-none absolute inset-0">

//         <div
//           className="
//             absolute
//             inset-0
//             opacity-[0.025]
//             [background-image:linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)]
//             [background-size:80px_80px]
//           "
//         />

//         <motion.div
//           key={active}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.7 }}
//           className={`
//             absolute
//             left-1/2
//             top-[48%]
//             h-[500px]
//             w-[500px]
//             -translate-x-1/2
//             -translate-y-1/2
//             rounded-full
//             bg-gradient-to-r
//             ${current.gradient}
//             opacity-[0.045]
//             blur-[130px]
//           `}
//         />
//       </div>

//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           max-w-7xl
//           px-5
//           pb-28
//           pt-24
//           md:px-8
//           md:pt-32
//         "
//       >

//         {/* ===================================================
//             HEADER
//         =================================================== */}

//         <div className="text-center">

//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="
//               inline-flex
//               items-center
//               gap-2
//               rounded-full
//               border
//               border-cyan-500/20
//               bg-cyan-500/[0.05]
//               px-4
//               py-2
//               text-[11px]
//               font-bold
//               uppercase
//               tracking-[0.28em]
//               text-cyan-600
//               dark:text-cyan-400
//             "
//           >
//             <Sparkles className="h-3.5 w-3.5" />
//             Tech Stack
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.05 }}
//             className="
//               mt-7
//               text-5xl
//               font-black
//               tracking-tight
//               md:text-7xl
//             "
//           >
//             Interactive Skill{" "}
//             <span
//               className="
//                 bg-gradient-to-r
//                 from-cyan-400
//                 via-blue-500
//                 to-indigo-500
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Universe
//             </span>
//           </motion.h2>

//           <p
//             className="
//               mx-auto
//               mt-6
//               max-w-2xl
//               text-sm
//               leading-7
//               text-neutral-500
//               dark:text-neutral-400
//               md:text-base
//             "
//           >
//             Explore the technologies and engineering concepts
//             I use to design, build and ship modern software.
//           </p>
//         </div>

//         {/* ===================================================
//             CATEGORY NAV
//         =================================================== */}

//         <div className="mt-12">
//           <div
//             className="
//               flex
//               flex-wrap
//               justify-center
//               gap-2
//               md:gap-3
//             "
//           >
//             {categories.map((category) => {
//               const Icon = skillsData[category].icon;
//               const activeCategory = category === active;

//               return (
//                 <button
//                   key={category}
//                   type="button"
//                   onClick={() => changeCategory(category)}
//                   className={`
//                     group
//                     relative
//                     flex
//                     items-center
//                     gap-2
//                     rounded-full
//                     border
//                     px-4
//                     py-2.5
//                     text-xs
//                     font-semibold
//                     transition-all
//                     duration-300
//                     md:px-5
//                     md:text-sm

//                     ${
//                       activeCategory
//                         ? `
//                           border-transparent
//                           bg-gradient-to-r
//                           ${current.gradient}
//                           text-white
//                           shadow-lg
//                         `
//                         : `
//                           border-black/10
//                           bg-black/[0.025]
//                           text-neutral-600
//                           hover:-translate-y-0.5
//                           hover:bg-black/[0.05]

//                           dark:border-white/[0.09]
//                           dark:bg-white/[0.025]
//                           dark:text-neutral-400
//                           dark:hover:bg-white/[0.05]
//                         `
//                     }
//                   `}
//                 >
//                   <Icon className="h-4 w-4" />
//                   {category}

//                   <span
//                     className={`
//                       rounded-full
//                       px-1.5
//                       py-0.5
//                       text-[9px]
//                       ${
//                         activeCategory
//                           ? "bg-white/15 text-white"
//                           : "bg-black/[0.05] text-neutral-400 dark:bg-white/[0.05]"
//                       }
//                     `}
//                   >
//                     {skillsData[category].skills.length}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* ===================================================
//             MAIN AREA
//         =================================================== */}

//         <div
//           className="
//             mt-14
//             grid
//             items-center
//             gap-10
//             lg:grid-cols-[0.9fr_1.1fr]
//             lg:gap-16
//           "
//         >

//           {/* =================================================
//               LEFT — CLEAN ORBIT
//           ================================================= */}

//           <div className="flex justify-center">

//             <div
//               className="
//                 relative
//                 h-[340px]
//                 w-[340px]
//                 md:h-[430px]
//                 md:w-[430px]
//               "
//             >

//               {/* outer glow */}
//               <div
//                 className={`
//                   absolute
//                   inset-8
//                   rounded-full
//                   bg-gradient-to-r
//                   ${current.gradient}
//                   opacity-[0.08]
//                   blur-[70px]
//                 `}
//               />

//               {/* outer circle */}
//               <div
//                 className="
//                   absolute
//                   inset-0
//                   rounded-full
//                   border
//                   border-black/[0.08]
//                   dark:border-white/[0.08]
//                 "
//               />

//               {/* orbit */}
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{
//                   duration: 30,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="
//                   absolute
//                   inset-[11%]
//                   rounded-full
//                   border
//                   border-dashed
//                   border-cyan-500/20
//                 "
//               />

//               {/* second ring */}
//               <div
//                 className="
//                   absolute
//                   inset-[23%]
//                   rounded-full
//                   border
//                   border-black/[0.06]
//                   dark:border-white/[0.06]
//                 "
//               />

//               {/* nodes */}
//               {current.skills.map((skill, index) => {

//                 const angle =
//                   (index / current.skills.length) *
//                     Math.PI *
//                     2 -
//                   Math.PI / 2;

//                 const radius = 42;

//                 const x =
//                   50 + Math.cos(angle) * radius;

//                 const y =
//                   50 + Math.sin(angle) * radius;

//                 const isSelected =
//                   selectedSkill.name === skill.name;

//                 return (
//                   <motion.button
//                     key={skill.name}
//                     type="button"
//                     onClick={() => setSelected(skill.name)}
//                     initial={{
//                       opacity: 0,
//                       scale: 0.6,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       scale: isSelected ? 1.08 : 1,
//                     }}
//                     transition={{
//                       delay: index * 0.05,
//                       duration: 0.3,
//                     }}
//                     whileHover={{
//                       scale: 1.12,
//                     }}
//                     className={`
//                       absolute
//                       z-20
//                       flex
//                       h-10
//                       w-10
//                       -translate-x-1/2
//                       -translate-y-1/2
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       text-[8px]
//                       font-bold
//                       transition-all
//                       md:h-12
//                       md:w-12
//                       md:text-[9px]

//                       ${
//                         isSelected
//                           ? `
//                             border-white/30
//                             bg-white
//                             text-black
//                             shadow-[0_0_25px_rgba(255,255,255,0.3)]
//                           `
//                           : `
//                             border-black/10
//                             bg-white/90
//                             text-neutral-600
//                             shadow-sm

//                             dark:border-white/10
//                             dark:bg-black/80
//                             dark:text-neutral-300
//                           `
//                       }
//                     `}
//                     style={{
//                       left: `${x}%`,
//                       top: `${y}%`,
//                     }}
//                     title={skill.name}
//                   >
//                     {skill.name.length > 7
//                       ? `${skill.name.slice(0, 6)}…`
//                       : skill.name}
//                   </motion.button>
//                 );
//               })}

//               {/* center */}
//               <div
//                 className="
//                   absolute
//                   left-1/2
//                   top-1/2
//                   z-10
//                   flex
//                   -translate-x-1/2
//                   -translate-y-1/2
//                   flex-col
//                   items-center
//                   text-center
//                 "
//               >
//                 <motion.div
//                   key={active}
//                   initial={{
//                     scale: 0.8,
//                     opacity: 0,
//                   }}
//                   animate={{
//                     scale: 1,
//                     opacity: 1,
//                   }}
//                   className={`
//                     flex
//                     h-24
//                     w-24
//                     items-center
//                     justify-center
//                     rounded-[28px]
//                     bg-gradient-to-r
//                     ${current.gradient}
//                     shadow-[0_15px_50px_rgba(14,165,233,0.18)]
//                   `}
//                 >
//                   <ActiveIcon className="h-11 w-11 text-white" />
//                 </motion.div>

//                 <motion.h3
//                   key={`heading-${active}`}
//                   initial={{
//                     opacity: 0,
//                     y: 8,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   className="
//                     mt-5
//                     text-2xl
//                     font-black
//                     md:text-3xl
//                   "
//                 >
//                   {active}
//                 </motion.h3>

//                 <p
//                   className="
//                     mt-1
//                     text-xs
//                     text-neutral-500
//                   "
//                 >
//                   {current.skills.length} technologies
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               RIGHT — INFORMATION
//           ================================================= */}

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`${active}-${selectedSkill.name}`}
//               initial={{
//                 opacity: 0,
//                 y: 15,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               exit={{
//                 opacity: 0,
//                 y: -10,
//               }}
//               transition={{
//                 duration: 0.3,
//               }}
//               className="
//                 relative
//                 overflow-hidden
//                 rounded-[30px]
//                 border
//                 border-black/[0.08]
//                 bg-white/70
//                 p-7
//                 shadow-[0_20px_60px_rgba(0,0,0,0.06)]
//                 backdrop-blur-xl

//                 dark:border-white/[0.08]
//                 dark:bg-white/[0.025]
//                 dark:shadow-none

//                 md:p-9
//               "
//             >

//               {/* top accent */}
//               <div
//                 className={`
//                   absolute
//                   left-0
//                   right-0
//                   top-0
//                   h-[2px]
//                   bg-gradient-to-r
//                   ${current.gradient}
//                   opacity-80
//                 `}
//               />

//               {/* header */}
//               <div className="flex items-start justify-between gap-5">

//                 <div className="flex items-center gap-4">

//                   <div
//                     className={`
//                       flex
//                       h-14
//                       w-14
//                       items-center
//                       justify-center
//                       rounded-2xl
//                       bg-gradient-to-r
//                       ${current.gradient}
//                     `}
//                   >
//                     <ActiveIcon className="h-7 w-7 text-white" />
//                   </div>

//                   <div>
//                     <p
//                       className="
//                         text-[10px]
//                         font-bold
//                         uppercase
//                         tracking-[0.25em]
//                         text-cyan-500
//                       "
//                     >
//                       Technology Group
//                     </p>

//                     <h3
//                       className="
//                         mt-1
//                         text-3xl
//                         font-black
//                         tracking-tight
//                       "
//                     >
//                       {active}
//                     </h3>
//                   </div>
//                 </div>

//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-2
//                     rounded-full
//                     border
//                     border-emerald-500/20
//                     bg-emerald-500/[0.05]
//                     px-3
//                     py-1.5
//                     text-[10px]
//                     font-semibold
//                     text-emerald-500
//                   "
//                 >
//                   <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                   Active
//                 </div>
//               </div>

//               {/* description */}
//               <p
//                 className="
//                   mt-7
//                   max-w-2xl
//                   text-sm
//                   leading-7
//                   text-neutral-600
//                   dark:text-neutral-400
//                   md:text-base
//                 "
//               >
//                 Explore the technologies inside this part of
//                 my engineering stack. Select any technology to
//                 see how I use it.
//               </p>

//               {/* selected technology */}
//               <div
//                 className="
//                   mt-7
//                   rounded-2xl
//                   border
//                   border-black/[0.07]
//                   bg-black/[0.02]
//                   p-5

//                   dark:border-white/[0.07]
//                   dark:bg-white/[0.02]
//                 "
//               >

//                 <div className="flex items-center justify-between">

//                   <div>
//                     <p
//                       className="
//                         text-[10px]
//                         font-bold
//                         uppercase
//                         tracking-[0.2em]
//                         text-neutral-500
//                       "
//                     >
//                       Selected
//                     </p>

//                     <h4
//                       className="
//                         mt-1.5
//                         text-xl
//                         font-black
//                       "
//                     >
//                       {selectedSkill.name}
//                     </h4>
//                   </div>

//                   <div
//                     className="
//                       flex
//                       h-9
//                       w-9
//                       items-center
//                       justify-center
//                       rounded-xl
//                       bg-cyan-500/10
//                       text-cyan-500
//                     "
//                   >
//                     <Check className="h-4 w-4" />
//                   </div>
//                 </div>

//                 <p
//                   className="
//                     mt-4
//                     text-sm
//                     leading-6
//                     text-neutral-600
//                     dark:text-neutral-400
//                   "
//                 >
//                   {selectedSkill.description}
//                 </p>

//                 <div className="mt-5">

//                   <p
//                     className="
//                       text-[10px]
//                       font-bold
//                       uppercase
//                       tracking-[0.2em]
//                       text-neutral-500
//                     "
//                   >
//                     How I use it
//                   </p>

//                   <p
//                     className="
//                       mt-2
//                       text-sm
//                       leading-6
//                       text-neutral-700
//                       dark:text-neutral-300
//                     "
//                   >
//                     {selectedSkill.use}
//                   </p>
//                 </div>
//               </div>

//               {/* technologies */}
//               <div className="mt-7">

//                 <div className="flex items-center justify-between">

//                   <p
//                     className="
//                       text-[10px]
//                       font-bold
//                       uppercase
//                       tracking-[0.2em]
//                       text-neutral-500
//                     "
//                   >
//                     Technologies
//                   </p>

//                   <span
//                     className="
//                       text-[10px]
//                       text-neutral-400
//                     "
//                   >
//                     {String(selectedIndex + 1).padStart(2, "0")} /{" "}
//                     {String(current.skills.length).padStart(2, "0")}
//                   </span>
//                 </div>

//                 <div className="mt-3 flex flex-wrap gap-2">

//                   {current.skills.map((skill) => {

//                     const selected =
//                       selectedSkill.name === skill.name;

//                     return (
//                       <button
//                         key={skill.name}
//                         type="button"
//                         onClick={() => setSelected(skill.name)}
//                         className={`
//                           rounded-full
//                           border
//                           px-3.5
//                           py-2
//                           text-xs
//                           font-semibold
//                           transition-all
//                           duration-200

//                           ${
//                             selected
//                               ? `
//                                 border-transparent
//                                 bg-gradient-to-r
//                                 ${current.gradient}
//                                 text-white
//                                 shadow-md
//                               `
//                               : `
//                                 border-black/[0.08]
//                                 bg-black/[0.02]
//                                 text-neutral-600
//                                 hover:-translate-y-0.5
//                                 hover:border-black/20

//                                 dark:border-white/[0.08]
//                                 dark:bg-white/[0.025]
//                                 dark:text-neutral-400
//                                 dark:hover:border-white/20
//                               `
//                           }
//                         `}
//                       >
//                         {skill.name}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* bottom */}
//               <div
//                 className="
//                   mt-7
//                   flex
//                   items-center
//                   justify-between
//                   border-t
//                   border-black/[0.07]
//                   pt-5
//                   dark:border-white/[0.07]
//                 "
//               >
//                 <span
//                   className="
//                     text-xs
//                     text-neutral-400
//                   "
//                 >
//                   Click any technology to explore
//                 </span>

//                 <ArrowUpRight
//                   className="
//                     h-4
//                     w-4
//                     text-neutral-400
//                   "
//                 />
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* ===================================================
//             TECH STRIP
//         =================================================== */}

//         <div className="mt-12">

//           <div
//             className="
//               flex
//               flex-wrap
//               items-center
//               justify-center
//               gap-2
//               text-center
//             "
//           >
//             {current.skills.map((skill) => (
//               <button
//                 key={skill.name}
//                 type="button"
//                 onClick={() => setSelected(skill.name)}
//                 className="
//                   rounded-full
//                   border
//                   border-black/[0.08]
//                   bg-black/[0.02]
//                   px-4
//                   py-2
//                   text-xs
//                   font-medium
//                   text-neutral-500
//                   transition-all
//                   hover:-translate-y-0.5
//                   hover:border-cyan-400/30
//                   hover:text-cyan-500

//                   dark:border-white/[0.08]
//                   dark:bg-white/[0.02]
//                   dark:text-neutral-500
//                   dark:hover:border-cyan-400/30
//                 "
//               >
//                 {skill.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





















// "use client";

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// import {
//   Code2,
//   Database,
//   Server,
//   Brain,
//   Trophy,
//   Cpu,
//   Layers3,
//   Sparkles,
//   ArrowUpRight,
//   Check,
// } from "lucide-react";

// /* =========================================================
//    TYPES
// ========================================================= */

// type Skill = {
//   name: string;
//   description: string;
//   use: string;
// };

// type Category = {
//   icon: any;
//   skills: Skill[];
// };

// /* =========================================================
//    COMMON PORTFOLIO COLOR
//    Keep the entire section consistent.
// ========================================================= */

// const BLUE_GRADIENT =
//   "from-cyan-400 via-blue-500 to-indigo-500";

// /* =========================================================
//    SKILL DATA
// ========================================================= */

// const skillsData: Record<string, Category> = {
//   Frontend: {
//     icon: Code2,
//     skills: [
//       {
//         name: "React",
//         description:
//           "Component-driven UI development for scalable web applications.",
//         use: "Interactive interfaces and reusable component systems.",
//       },
//       {
//         name: "Next.js",
//         description:
//           "Production-ready React framework for modern web applications.",
//         use: "Application architecture, routing and optimized experiences.",
//       },
//       {
//         name: "TypeScript",
//         description:
//           "Strong typing for safer and more maintainable applications.",
//         use: "Type-safe frontend and backend development.",
//       },
//       {
//         name: "Tailwind CSS",
//         description:
//           "Utility-first CSS for fast and consistent interface development.",
//         use: "Responsive layouts and modern design systems.",
//       },
//       {
//         name: "Framer Motion",
//         description:
//           "Motion library for smooth and purposeful interface animation.",
//         use: "Transitions, interactions and micro-animations.",
//       },
//       {
//         name: "Shadcn UI",
//         description:
//           "Composable UI primitives for modern React applications.",
//         use: "Reusable interface components and design systems.",
//       },
//       {
//         name: "Aceternity UI",
//         description:
//           "Animated components for immersive modern interfaces.",
//         use: "Advanced visual interactions and portfolio experiences.",
//       },
//     ],
//   },

//   Backend: {
//     icon: Server,
//     skills: [
//       {
//         name: "Node.js",
//         description:
//           "JavaScript runtime for backend services and APIs.",
//         use: "REST APIs, backend services and application logic.",
//       },
//       {
//         name: "Express.js",
//         description:
//           "Backend framework for building Node.js APIs.",
//         use: "REST endpoints, middleware and server architecture.",
//       },
//       {
//         name: "REST APIs",
//         description:
//           "Structured APIs for communication between applications.",
//         use: "CRUD operations, authentication and service integration.",
//       },
//       {
//         name: "JWT Auth",
//         description:
//           "Token-based authentication for securing application resources.",
//         use: "Authentication and protected API routes.",
//       },
//       {
//         name: "Socket.io",
//         description:
//           "Real-time communication between clients and servers.",
//         use: "Real-time updates and interactive applications.",
//       },
//       {
//         name: "Scalable APIs",
//         description:
//           "Backend architecture designed for maintainability.",
//         use: "Services, business logic and production systems.",
//       },
//     ],
//   },

//   Databases: {
//     icon: Database,
//     skills: [
//       {
//         name: "MongoDB",
//         description:
//           "Document-oriented NoSQL database for flexible data models.",
//         use: "MERN applications and document-based systems.",
//       },
//       {
//         name: "PostgreSQL",
//         description:
//           "Relational database for structured application data.",
//         use: "Production applications requiring relational models.",
//       },
//       {
//         name: "MySQL",
//         description:
//           "Relational database used for structured enterprise data.",
//         use: "Backend applications and enterprise systems.",
//       },
//       {
//         name: "Redis",
//         description:
//           "In-memory data store designed for fast access.",
//         use: "Caching and performance-focused backend systems.",
//       },
//     ],
//   },

//   "CS Fundamentals": {
//     icon: Cpu,
//     skills: [
//       {
//         name: "DSA",
//         description:
//           "Algorithms and data structures for efficient problem solving.",
//         use: "Technical interviews and algorithmic optimization.",
//       },
//       {
//         name: "DBMS",
//         description:
//           "Database concepts, modeling and query fundamentals.",
//         use: "Designing reliable application data layers.",
//       },
//       {
//         name: "OOP",
//         description:
//           "Object-oriented principles for maintainable software.",
//         use: "Java, C++ and large application codebases.",
//       },
//       {
//         name: "Operating Systems",
//         description:
//           "Processes, memory, concurrency and system fundamentals.",
//         use: "Systems knowledge and engineering fundamentals.",
//       },
//       {
//         name: "Computer Networks",
//         description:
//           "Networking fundamentals behind distributed applications.",
//         use: "HTTP, APIs and service communication.",
//       },
//     ],
//   },

//   "AI & Modern Tech": {
//     icon: Brain,
//     skills: [
//       {
//         name: "Prompt Engineering",
//         description:
//           "Designing structured prompts for reliable AI workflows.",
//         use: "AI-assisted development and productivity.",
//       },
//       {
//         name: "LLM Apps",
//         description:
//           "Application experiences built around large language models.",
//         use: "AI-powered application features.",
//       },
//       {
//         name: "AI Pipelines",
//         description:
//           "Connecting application data with AI capabilities.",
//         use: "AI-assisted application architecture.",
//       },
//       {
//         name: "Vercel AI SDK",
//         description:
//           "Tools for integrating AI interactions into web applications.",
//         use: "Streaming AI interfaces and integrations.",
//       },
//     ],
//   },

//   Architecture: {
//     icon: Layers3,
//     skills: [
//       {
//         name: "System Design",
//         description:
//           "Breaking applications into scalable components.",
//         use: "Backend architecture and system-level thinking.",
//       },
//       {
//         name: "Scalable Systems",
//         description:
//           "Designing systems that can evolve with requirements.",
//         use: "Production applications and backend architecture.",
//       },
//       {
//         name: "Performance",
//         description:
//           "Improving application efficiency and responsiveness.",
//         use: "Frontend and backend optimization.",
//       },
//       {
//         name: "Clean Architecture",
//         description:
//           "Separating responsibilities for maintainable systems.",
//         use: "Large applications and backend codebases.",
//       },
//     ],
//   },

//   "Competitive Programming": {
//     icon: Trophy,
//     skills: [
//       {
//         name: "350+ DSA Problems",
//         description:
//           "Consistent algorithm and data structure practice.",
//         use: "Technical interviews and competitive problem solving.",
//       },
//       {
//         name: "Algorithms",
//         description:
//           "Understanding common algorithmic patterns.",
//         use: "Optimization and technical problem solving.",
//       },
//       {
//         name: "Competitive Coding",
//         description:
//           "Solving programming problems under constraints.",
//         use: "Speed, logic and algorithmic thinking.",
//       },
//       {
//         name: "Problem Solving",
//         description:
//           "Breaking complex problems into smaller logical steps.",
//         use: "Software engineering and technical interviews.",
//       },
//     ],
//   },
// };

// const categories = Object.keys(skillsData);

// /* =========================================================
//    COMPONENT
// ========================================================= */

// export default function SkillGlobe() {
//   const [active, setActive] = useState("Frontend");
//   const [selected, setSelected] = useState("React");

//   const current = skillsData[active];
//   const ActiveIcon = current.icon;

//   const selectedSkill =
//     current.skills.find(
//       (skill) => skill.name === selected,
//     ) ?? current.skills[0];

//   const selectedIndex = current.skills.findIndex(
//     (skill) => skill.name === selectedSkill.name,
//   );

//   const changeCategory = (category: string) => {
//     setActive(category);
//     setSelected(skillsData[category].skills[0].name);
//   };

//   return (
//     <section
//       id="skills"
//       className="
//         relative
//         overflow-hidden
//         bg-white
//         text-black
//         dark:bg-black
//         dark:text-white
//       "
//     >
//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div className="pointer-events-none absolute inset-0">

//         {/* very subtle grid */}
//         <div
//           className="
//             absolute
//             inset-0
//             opacity-[0.018]
//             [background-image:linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)]
//             [background-size:80px_80px]
//           "
//         />

//         {/* ONE subtle blue glow */}
//         <div
//           className="
//             absolute
//             left-1/2
//             top-[48%]
//             h-[500px]
//             w-[500px]
//             -translate-x-1/2
//             -translate-y-1/2
//             rounded-full
//             bg-blue-500/[0.035]
//             blur-[140px]
//           "
//         />

//       </div>

//       {/* =====================================================
//           CONTENT
//       ===================================================== */}

//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           max-w-7xl
//           px-5
//           pb-28
//           pt-32
//           md:px-8
//           md:pt-36
//         "
//       >

//         {/* ===================================================
//             HEADER
//         =================================================== */}

//         <div className="text-center">

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 10,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             className="
//               inline-flex
//               items-center
//               gap-2
//               rounded-full
//               border
//               border-cyan-500/20
//               bg-cyan-500/[0.04]
//               px-4
//               py-2
//               text-[11px]
//               font-bold
//               uppercase
//               tracking-[0.28em]
//               text-cyan-600
//               dark:text-cyan-400
//             "
//           >
//             <Sparkles className="h-3.5 w-3.5" />
//             Tech Stack
//           </motion.div>

//           <motion.h2
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             transition={{
//               duration: 0.55,
//             }}
//             className="
//               mt-7
//               text-5xl
//               font-black
//               tracking-tight
//               md:text-7xl
//             "
//           >
//             Interactive Skill{" "}
//             <span
//               className="
//                 bg-gradient-to-r
//                 from-cyan-400
//                 via-blue-500
//                 to-indigo-500
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Universe
//             </span>
//           </motion.h2>

//           <p
//             className="
//               mx-auto
//               mt-6
//               max-w-2xl
//               text-sm
//               leading-7
//               text-neutral-500
//               dark:text-neutral-400
//               md:text-base
//             "
//           >
//             Explore the technologies and engineering concepts
//             I use to design, build and ship modern software.
//           </p>
//         </div>

//         {/* ===================================================
//             CATEGORY BUTTONS
//         =================================================== */}

//         <div
//           className="
//             mx-auto
//             mt-12
//             flex
//             max-w-6xl
//             flex-wrap
//             justify-center
//             gap-2
//             md:gap-3
//           "
//         >
//           {categories.map((category) => {
//             const Icon = skillsData[category].icon;
//             const isActive = active === category;

//             return (
//               <motion.button
//                 key={category}
//                 type="button"
//                 onClick={() => changeCategory(category)}
//                 whileHover={{
//                   y: -2,
//                 }}
//                 whileTap={{
//                   scale: 0.97,
//                 }}
//                 className={`
//                   relative
//                   flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   border
//                   px-4
//                   py-2.5
//                   text-xs
//                   font-semibold
//                   transition-all
//                   duration-300
//                   md:px-5
//                   md:text-sm

//                   ${
//                     isActive
//                       ? `
//                         border-cyan-400/30
//                         bg-gradient-to-r
//                         ${BLUE_GRADIENT}
//                         text-white
//                         shadow-[0_8px_30px_rgba(14,165,233,0.15)]
//                       `
//                       : `
//                         border-black/[0.08]
//                         bg-black/[0.02]
//                         text-neutral-600
//                         hover:border-cyan-500/20
//                         hover:text-neutral-900

//                         dark:border-white/[0.08]
//                         dark:bg-white/[0.025]
//                         dark:text-neutral-400
//                         dark:hover:border-cyan-400/20
//                         dark:hover:text-white
//                       `
//                   }
//                 `}
//               >
//                 <Icon className="h-4 w-4" />

//                 {category}

//                 <span
//                   className={`
//                     rounded-full
//                     px-1.5
//                     py-0.5
//                     text-[9px]
//                     ${
//                       isActive
//                         ? "bg-white/15 text-white"
//                         : "bg-black/[0.04] text-neutral-400 dark:bg-white/[0.05]"
//                     }
//                   `}
//                 >
//                   {skillsData[category].skills.length}
//                 </span>
//               </motion.button>
//             );
//           })}
//         </div>

//         {/* ===================================================
//             MAIN GRID
//         =================================================== */}

//         <div
//           className="
//             mt-14
//             grid
//             items-center
//             gap-12
//             lg:grid-cols-[0.9fr_1.1fr]
//             lg:gap-20
//           "
//         >

//           {/* =================================================
//               LEFT ORBIT
//           ================================================= */}

//           <div className="flex justify-center">

//             <div
//               className="
//                 relative
//                 h-[330px]
//                 w-[330px]
//                 md:h-[430px]
//                 md:w-[430px]
//               "
//             >

//               {/* subtle orbit glow */}
//               <div
//                 className="
//                   absolute
//                   inset-12
//                   rounded-full
//                   bg-cyan-500/[0.035]
//                   blur-[80px]
//                 "
//               />

//               {/* outer ring */}
//               <div
//                 className="
//                   absolute
//                   inset-0
//                   rounded-full
//                   border
//                   border-black/[0.08]
//                   dark:border-white/[0.08]
//                 "
//               />

//               {/* orbit */}
//               <motion.div
//                 animate={{
//                   rotate: 360,
//                 }}
//                 transition={{
//                   duration: 35,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="
//                   absolute
//                   inset-[10%]
//                   rounded-full
//                   border
//                   border-dashed
//                   border-cyan-400/15
//                 "
//               />

//               {/* inner ring */}
//               <div
//                 className="
//                   absolute
//                   inset-[23%]
//                   rounded-full
//                   border
//                   border-black/[0.06]
//                   dark:border-white/[0.06]
//                 "
//               />

//               {/* =================================================
//                   TECHNOLOGY NODES
//               ================================================= */}

//               {current.skills.map((skill, index) => {

//                 const angle =
//                   (index / current.skills.length) *
//                     Math.PI *
//                     2 -
//                   Math.PI / 2;

//                 const radius = 42;

//                 const x =
//                   50 + Math.cos(angle) * radius;

//                 const y =
//                   50 + Math.sin(angle) * radius;

//                 const isSelected =
//                   selectedSkill.name === skill.name;

//                 return (
//                   <motion.button
//                     key={skill.name}
//                     type="button"
//                     onClick={() =>
//                       setSelected(skill.name)
//                     }
//                     initial={{
//                       opacity: 0,
//                       scale: 0.7,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       scale: isSelected ? 1.08 : 1,
//                     }}
//                     transition={{
//                       delay: index * 0.05,
//                       duration: 0.3,
//                     }}
//                     whileHover={{
//                       scale: 1.13,
//                     }}
//                     className={`
//                       absolute
//                       z-20
//                       flex
//                       h-10
//                       w-10
//                       -translate-x-1/2
//                       -translate-y-1/2
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       text-[8px]
//                       font-bold
//                       transition-all
//                       md:h-12
//                       md:w-12
//                       md:text-[9px]

//                       ${
//                         isSelected
//                           ? `
//                             border-cyan-300
//                             bg-gradient-to-r
//                             ${BLUE_GRADIENT}
//                             text-white
//                             shadow-[0_0_25px_rgba(14,165,233,0.35)]
//                           `
//                           : `
//                             border-black/10
//                             bg-white
//                             text-neutral-600
//                             shadow-sm

//                             dark:border-white/10
//                             dark:bg-[#080808]
//                             dark:text-neutral-300
//                           `
//                       }
//                     `}
//                     style={{
//                       left: `${x}%`,
//                       top: `${y}%`,
//                     }}
//                     title={skill.name}
//                   >
//                     {skill.name.length > 7
//                       ? `${skill.name.slice(0, 6)}…`
//                       : skill.name}
//                   </motion.button>
//                 );
//               })}

//               {/* =================================================
//                   CENTER
//               ================================================= */}

//               <div
//                 className="
//                   absolute
//                   left-1/2
//                   top-1/2
//                   z-10
//                   flex
//                   -translate-x-1/2
//                   -translate-y-1/2
//                   flex-col
//                   items-center
//                   text-center
//                 "
//               >

//                 <motion.div
//                   key={active}
//                   initial={{
//                     opacity: 0,
//                     scale: 0.85,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     scale: 1,
//                   }}
//                   className={`
//                     flex
//                     h-24
//                     w-24
//                     items-center
//                     justify-center
//                     rounded-[28px]
//                     bg-gradient-to-r
//                     ${BLUE_GRADIENT}
//                     shadow-[0_15px_50px_rgba(14,165,233,0.18)]
//                   `}
//                 >
//                   <ActiveIcon
//                     className="
//                       h-11
//                       w-11
//                       text-white
//                     "
//                   />
//                 </motion.div>

//                 <h3
//                   className="
//                     mt-5
//                     text-2xl
//                     font-black
//                     md:text-3xl
//                   "
//                 >
//                   {active}
//                 </h3>

//                 <p
//                   className="
//                     mt-1
//                     text-xs
//                     text-neutral-500
//                   "
//                 >
//                   {current.skills.length} technologies
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               RIGHT CARD
//           ================================================= */}

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`${active}-${selectedSkill.name}`}
//               initial={{
//                 opacity: 0,
//                 y: 12,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               exit={{
//                 opacity: 0,
//                 y: -8,
//               }}
//               transition={{
//                 duration: 0.3,
//               }}
//               className="
//                 relative
//                 overflow-hidden
//                 rounded-[30px]
//                 border
//                 border-black/[0.08]
//                 bg-white/70
//                 p-7
//                 shadow-[0_20px_60px_rgba(0,0,0,0.06)]
//                 backdrop-blur-xl

//                 dark:border-white/[0.08]
//                 dark:bg-white/[0.025]
//                 dark:shadow-none

//                 md:p-9
//               "
//             >

//               {/* thin blue line */}
//               <div
//                 className={`
//                   absolute
//                   left-0
//                   right-0
//                   top-0
//                   h-[1px]
//                   bg-gradient-to-r
//                   ${BLUE_GRADIENT}
//                   opacity-70
//                 `}
//               />

//               {/* header */}
//               <div
//                 className="
//                   flex
//                   items-start
//                   justify-between
//                   gap-4
//                 "
//               >

//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-4
//                   "
//                 >

//                   <div
//                     className={`
//                       flex
//                       h-14
//                       w-14
//                       items-center
//                       justify-center
//                       rounded-2xl
//                       bg-gradient-to-r
//                       ${BLUE_GRADIENT}
//                       shadow-[0_10px_30px_rgba(14,165,233,0.15)]
//                     `}
//                   >
//                     <ActiveIcon
//                       className="
//                         h-7
//                         w-7
//                         text-white
//                       "
//                     />
//                   </div>

//                   <div>

//                     <p
//                       className="
//                         text-[10px]
//                         font-bold
//                         uppercase
//                         tracking-[0.25em]
//                         text-cyan-500
//                       "
//                     >
//                       Technology Group
//                     </p>

//                     <h3
//                       className="
//                         mt-1
//                         text-3xl
//                         font-black
//                         tracking-tight
//                       "
//                     >
//                       {active}
//                     </h3>

//                   </div>
//                 </div>

//                 {/* active */}
//                 <div
//                   className="
//                     hidden
//                     items-center
//                     gap-2
//                     rounded-full
//                     border
//                     border-cyan-500/20
//                     bg-cyan-500/[0.04]
//                     px-3
//                     py-1.5
//                     text-[10px]
//                     font-semibold
//                     text-cyan-500
//                     sm:flex
//                   "
//                 >
//                   <span
//                     className="
//                       h-1.5
//                       w-1.5
//                       rounded-full
//                       bg-cyan-400
//                     "
//                   />

//                   Active Stack
//                 </div>
//               </div>

//               {/* description */}
//               <p
//                 className="
//                   mt-7
//                   max-w-2xl
//                   text-sm
//                   leading-7
//                   text-neutral-600
//                   dark:text-neutral-400
//                   md:text-base
//                 "
//               >
//                 Explore the technologies inside this part of
//                 my engineering stack. Select a technology to
//                 see how I use it.
//               </p>

//               {/* selected technology */}
//               <div
//                 className="
//                   mt-7
//                   rounded-2xl
//                   border
//                   border-black/[0.07]
//                   bg-black/[0.02]
//                   p-5

//                   dark:border-white/[0.07]
//                   dark:bg-white/[0.02]
//                 "
//               >

//                 <div
//                   className="
//                     flex
//                     items-center
//                     justify-between
//                   "
//                 >

//                   <div>

//                     <p
//                       className="
//                         text-[10px]
//                         font-bold
//                         uppercase
//                         tracking-[0.2em]
//                         text-neutral-500
//                       "
//                     >
//                       Selected Technology
//                     </p>

//                     <h4
//                       className="
//                         mt-1.5
//                         text-xl
//                         font-black
//                       "
//                     >
//                       {selectedSkill.name}
//                     </h4>

//                   </div>

//                   <div
//                     className="
//                       flex
//                       h-9
//                       w-9
//                       items-center
//                       justify-center
//                       rounded-xl
//                       bg-cyan-500/10
//                       text-cyan-500
//                     "
//                   >
//                     <Check
//                       className="
//                         h-4
//                         w-4
//                       "
//                     />
//                   </div>
//                 </div>

//                 <p
//                   className="
//                     mt-4
//                     text-sm
//                     leading-6
//                     text-neutral-600
//                     dark:text-neutral-400
//                   "
//                 >
//                   {selectedSkill.description}
//                 </p>

//                 <div className="mt-5">

//                   <p
//                     className="
//                       text-[10px]
//                       font-bold
//                       uppercase
//                       tracking-[0.2em]
//                       text-neutral-500
//                     "
//                   >
//                     How I use it
//                   </p>

//                   <p
//                     className="
//                       mt-2
//                       text-sm
//                       leading-6
//                       text-neutral-700
//                       dark:text-neutral-300
//                     "
//                   >
//                     {selectedSkill.use}
//                   </p>

//                 </div>
//               </div>

//               {/* technology selector */}
//               <div className="mt-7">

//                 <div
//                   className="
//                     flex
//                     items-center
//                     justify-between
//                   "
//                 >

//                   <p
//                     className="
//                       text-[10px]
//                       font-bold
//                       uppercase
//                       tracking-[0.2em]
//                       text-neutral-500
//                     "
//                   >
//                     Technologies
//                   </p>

//                   <span
//                     className="
//                       text-[10px]
//                       text-neutral-400
//                     "
//                   >
//                     {String(selectedIndex + 1).padStart(
//                       2,
//                       "0",
//                     )}{" "}
//                     /{" "}
//                     {String(current.skills.length).padStart(
//                       2,
//                       "0",
//                     )}
//                   </span>

//                 </div>

//                 <div
//                   className="
//                     mt-3
//                     flex
//                     flex-wrap
//                     gap-2
//                   "
//                 >
//                   {current.skills.map((skill) => {

//                     const isSelected =
//                       skill.name === selectedSkill.name;

//                     return (
//                       <button
//                         key={skill.name}
//                         type="button"
//                         onClick={() =>
//                           setSelected(skill.name)
//                         }
//                         className={`
//                           rounded-full
//                           border
//                           px-3.5
//                           py-2
//                           text-xs
//                           font-semibold
//                           transition-all
//                           duration-200

//                           ${
//                             isSelected
//                               ? `
//                                 border-cyan-400/30
//                                 bg-gradient-to-r
//                                 ${BLUE_GRADIENT}
//                                 text-white
//                                 shadow-[0_6px_20px_rgba(14,165,233,0.12)]
//                               `
//                               : `
//                                 border-black/[0.08]
//                                 bg-black/[0.02]
//                                 text-neutral-600
//                                 hover:border-cyan-400/30
//                                 hover:text-cyan-500

//                                 dark:border-white/[0.08]
//                                 dark:bg-white/[0.02]
//                                 dark:text-neutral-400
//                                 dark:hover:border-cyan-400/30
//                                 dark:hover:text-cyan-400
//                               `
//                           }
//                         `}
//                       >
//                         {skill.name}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* footer */}
//               <div
//                 className="
//                   mt-7
//                   flex
//                   items-center
//                   justify-between
//                   border-t
//                   border-black/[0.07]
//                   pt-5
//                   dark:border-white/[0.07]
//                 "
//               >

//                 <span
//                   className="
//                     text-xs
//                     text-neutral-400
//                   "
//                 >
//                   Click a technology to explore
//                 </span>

//                 <ArrowUpRight
//                   className="
//                     h-4
//                     w-4
//                     text-neutral-400
//                   "
//                 />

//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* ===================================================
//             BOTTOM TECHNOLOGY STRIP
//         =================================================== */}

//         <div
//           className="
//             mt-12
//             flex
//             flex-wrap
//             justify-center
//             gap-2
//           "
//         >
//           {current.skills.map((skill) => (
//             <button
//               key={skill.name}
//               type="button"
//               onClick={() =>
//                 setSelected(skill.name)
//               }
//               className="
//                 rounded-full
//                 border
//                 border-black/[0.08]
//                 bg-black/[0.02]
//                 px-4
//                 py-2
//                 text-xs
//                 font-medium
//                 text-neutral-500
//                 transition-all

//                 hover:-translate-y-0.5
//                 hover:border-cyan-400/30
//                 hover:text-cyan-500

//                 dark:border-white/[0.08]
//                 dark:bg-white/[0.02]
//                 dark:text-neutral-500
//                 dark:hover:border-cyan-400/30
//                 dark:hover:text-cyan-400
//               "
//             >
//               {skill.name}
//             </button>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }





"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Code2,
  Database,
  Server,
  Brain,
  Trophy,
  Cpu,
  Layers3,
  Sparkles,
  ArrowUpRight,
  Check,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type Skill = {
  name: string;
  description: string;
  use: string;
};

type Category = {
  icon: any;
  skills: Skill[];
};

/* =========================================================
   COMMON PORTFOLIO GRADIENT
========================================================= */

const BLUE_GRADIENT =
  "from-cyan-400 via-blue-500 to-indigo-500";

/* =========================================================
   DATA
========================================================= */

const skillsData: Record<string, Category> = {
  Frontend: {
    icon: Code2,
    skills: [
      {
        name: "React",
        description:
          "Component-driven UI development for scalable web applications.",
        use: "Interactive interfaces and reusable component systems.",
      },
      {
        name: "Next.js",
        description:
          "Production-ready React framework for modern web applications.",
        use: "Application architecture, routing and optimized experiences.",
      },
      {
        name: "TypeScript",
        description:
          "Strong typing for safer and more maintainable applications.",
        use: "Type-safe frontend and backend development.",
      },
      {
        name: "Tailwind CSS",
        description:
          "Utility-first CSS for fast and consistent interface development.",
        use: "Responsive layouts and modern design systems.",
      },
      {
        name: "Framer Motion",
        description:
          "Motion library for smooth and purposeful interface animation.",
        use: "Transitions, interactions and micro-animations.",
      },
      {
        name: "Shadcn UI",
        description:
          "Composable UI primitives for modern React applications.",
        use: "Reusable interface components and design systems.",
      },
      {
        name: "Aceternity UI",
        description:
          "Animated components for immersive modern interfaces.",
        use: "Advanced visual interactions and portfolio experiences.",
      },
    ],
  },

  Backend: {
    icon: Server,
    skills: [
      {
        name: "Node.js",
        description:
          "JavaScript runtime for backend services and APIs.",
        use: "REST APIs, backend services and application logic.",
      },
      {
        name: "Express.js",
        description:
          "Backend framework for building Node.js APIs.",
        use: "REST endpoints, middleware and server architecture.",
      },
      {
        name: "REST APIs",
        description:
          "Structured APIs for communication between applications.",
        use: "CRUD operations, authentication and service integration.",
      },
      {
        name: "JWT Auth",
        description:
          "Token-based authentication for securing application resources.",
        use: "Authentication and protected API routes.",
      },
      {
        name: "Socket.io",
        description:
          "Real-time communication between clients and servers.",
        use: "Real-time updates and interactive applications.",
      },
      {
        name: "Scalable APIs",
        description:
          "Backend architecture designed for maintainability.",
        use: "Services, business logic and production systems.",
      },
    ],
  },

  Databases: {
    icon: Database,
    skills: [
      {
        name: "MongoDB",
        description:
          "Document-oriented NoSQL database for flexible data models.",
        use: "MERN applications and document-based systems.",
      },
      {
        name: "PostgreSQL",
        description:
          "Relational database for structured application data.",
        use: "Production applications requiring relational models.",
      },
      {
        name: "MySQL",
        description:
          "Relational database used for structured enterprise data.",
        use: "Backend applications and enterprise systems.",
      },
      {
        name: "Redis",
        description:
          "In-memory data store designed for fast access.",
        use: "Caching and performance-focused backend systems.",
      },
    ],
  },

  "CS Fundamentals": {
    icon: Cpu,
    skills: [
      {
        name: "DSA",
        description:
          "Algorithms and data structures for efficient problem solving.",
        use: "Technical interviews and algorithmic optimization.",
      },
      {
        name: "DBMS",
        description:
          "Database concepts, modeling and query fundamentals.",
        use: "Designing reliable application data layers.",
      },
      {
        name: "OOP",
        description:
          "Object-oriented principles for maintainable software.",
        use: "Java, C++ and large application codebases.",
      },
      {
        name: "Operating Systems",
        description:
          "Processes, memory, concurrency and system fundamentals.",
        use: "Systems knowledge and engineering fundamentals.",
      },
      {
        name: "Computer Networks",
        description:
          "Networking fundamentals behind distributed applications.",
        use: "HTTP, APIs and service communication.",
      },
    ],
  },

  "AI & Modern Tech": {
    icon: Brain,
    skills: [
      {
        name: "Prompt Engineering",
        description:
          "Designing structured prompts for reliable AI workflows.",
        use: "AI-assisted development and productivity.",
      },
      {
        name: "LLM Apps",
        description:
          "Application experiences built around large language models.",
        use: "AI-powered application features.",
      },
      {
        name: "AI Pipelines",
        description:
          "Connecting application data with AI capabilities.",
        use: "AI-assisted application architecture.",
      },
      {
        name: "Vercel AI SDK",
        description:
          "Tools for integrating AI interactions into web applications.",
        use: "Streaming AI interfaces and integrations.",
      },
    ],
  },

  Architecture: {
    icon: Layers3,
    skills: [
      {
        name: "System Design",
        description:
          "Breaking applications into scalable components.",
        use: "Backend architecture and system-level thinking.",
      },
      {
        name: "Scalable Systems",
        description:
          "Designing systems that can evolve with requirements.",
        use: "Production applications and backend architecture.",
      },
      {
        name: "Performance",
        description:
          "Improving application efficiency and responsiveness.",
        use: "Frontend and backend optimization.",
      },
      {
        name: "Clean Architecture",
        description:
          "Separating responsibilities for maintainable systems.",
        use: "Large applications and backend codebases.",
      },
    ],
  },

  "Competitive Programming": {
    icon: Trophy,
    skills: [
      {
        name: "350+ DSA Problems",
        description:
          "Consistent algorithm and data structure practice.",
        use: "Technical interviews and competitive problem solving.",
      },
      {
        name: "Algorithms",
        description:
          "Understanding common algorithmic patterns.",
        use: "Optimization and technical problem solving.",
      },
      {
        name: "Competitive Coding",
        description:
          "Solving programming problems under constraints.",
        use: "Speed, logic and algorithmic thinking.",
      },
      {
        name: "Problem Solving",
        description:
          "Breaking complex problems into smaller logical steps.",
        use: "Software engineering and technical interviews.",
      },
    ],
  },
};

const categories = Object.keys(skillsData);

/* =========================================================
   COMPONENT
========================================================= */

export default function SkillGlobe() {
  const [active, setActive] = useState("Frontend");
  const [selected, setSelected] = useState("React");

  const current = skillsData[active];
  const ActiveIcon = current.icon;

  const selectedSkill =
    current.skills.find(
      (skill) => skill.name === selected,
    ) ?? current.skills[0];

  const selectedIndex = current.skills.findIndex(
    (skill) => skill.name === selectedSkill.name,
  );

  const changeCategory = (category: string) => {
    setActive(category);
    setSelected(skillsData[category].skills[0].name);
  };

  return (
    <section
      id="skills"
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

        <div
          className="
            absolute
            inset-0
            opacity-[0.015]
            [background-image:linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[48%]
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.025]
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          pb-16
          pt-24
          md:px-8
          md:pb-20
          md:pt-28
        "
      >

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="text-center">

          <motion.div
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
            <Sparkles className="h-3 w-3" />
            Tech Stack
          </motion.div>

          <motion.h2
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
              duration: 0.5,
            }}
            className="
              mt-5
              text-4xl
              font-black
              tracking-tight
              sm:text-5xl
              md:text-6xl
            "
          >
            Interactive Skill{" "}
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
              Universe
            </span>
          </motion.h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-xs
              leading-6
              text-neutral-500
              dark:text-neutral-400
              md:text-sm
            "
          >
            Explore the technologies and engineering concepts
            I use to design, build and ship modern software.
          </p>
        </div>

        {/* ===================================================
            CATEGORY BAR
        =================================================== */}

        <div
          className="
            mx-auto
            mt-8
            grid
            max-w-[1120px]
            grid-cols-4
            gap-2
            sm:grid-cols-7
          "
        >
          {categories.map((category) => {
            const Icon = skillsData[category].icon;
            const isActive = active === category;

            return (
              <motion.button
                key={category}
                type="button"
                onClick={() => changeCategory(category)}
                whileHover={{
                  y: -1,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className={`
                  flex
                  min-w-0
                  items-center
                  justify-center
                  gap-1.5
                  rounded-xl
                  border
                  px-2
                  py-2.5
                  text-[10px]
                  font-semibold
                  transition-all
                  duration-200
                  sm:px-2
                  sm:text-[10px]
                  lg:text-[11px]

                  ${
                    isActive
                      ? `
                        border-cyan-400/30
                        bg-gradient-to-r
                        ${BLUE_GRADIENT}
                        text-white
                        shadow-[0_6px_22px_rgba(14,165,233,0.14)]
                      `
                      : `
                        border-black/[0.08]
                        bg-black/[0.015]
                        text-neutral-600
                        hover:border-cyan-500/20
                        hover:text-black

                        dark:border-white/[0.08]
                        dark:bg-white/[0.02]
                        dark:text-neutral-400
                        dark:hover:border-cyan-400/20
                        dark:hover:text-white
                      `
                  }
                `}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />

                <span className="truncate">
                  {category}
                </span>

                <span
                  className={`
                    hidden
                    rounded-full
                    px-1
                    py-0.5
                    text-[8px]
                    lg:inline
                    ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "bg-black/[0.04] text-neutral-400 dark:bg-white/[0.05]"
                    }
                  `}
                >
                  {skillsData[category].skills.length}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* ===================================================
            MAIN EXPLORER
        =================================================== */}

        <div
          className="
            mx-auto
            mt-9
            grid
            max-w-[1100px]
            items-center
            gap-8
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-12
          "
        >

          {/* =================================================
              ORBIT
          ================================================= */}

          <div className="flex justify-center">

            <div
              className="
                relative
                h-[280px]
                w-[280px]
                sm:h-[320px]
                sm:w-[320px]
                md:h-[350px]
                md:w-[350px]
              "
            >

              {/* subtle glow */}
              <div
                className="
                  absolute
                  inset-10
                  rounded-full
                  bg-cyan-500/[0.025]
                  blur-[60px]
                "
              />

              {/* outer ring */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-black/[0.07]
                  dark:border-white/[0.07]
                "
              />

              {/* orbit */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[10%]
                  rounded-full
                  border
                  border-dashed
                  border-cyan-400/15
                "
              />

              {/* inner ring */}
              <div
                className="
                  absolute
                  inset-[24%]
                  rounded-full
                  border
                  border-black/[0.05]
                  dark:border-white/[0.05]
                "
              />

              {/* =================================================
                  NODES
              ================================================= */}

              {current.skills.map((skill, index) => {

                const angle =
                  (index / current.skills.length) *
                    Math.PI *
                    2 -
                  Math.PI / 2;

                const radius = 42;

                const x =
                  50 + Math.cos(angle) * radius;

                const y =
                  50 + Math.sin(angle) * radius;

                const isSelected =
                  selectedSkill.name === skill.name;

                return (
                  <motion.button
                    key={skill.name}
                    type="button"
                    onClick={() =>
                      setSelected(skill.name)
                    }
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      scale: isSelected ? 1.08 : 1,
                    }}
                    transition={{
                      delay: index * 0.04,
                      duration: 0.25,
                    }}
                    whileHover={{
                      scale: 1.12,
                    }}
                    className={`
                      absolute
                      z-20
                      flex
                      h-9
                      w-9
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      text-[7px]
                      font-bold
                      transition-all
                      md:h-10
                      md:w-10
                      md:text-[8px]

                      ${
                        isSelected
                          ? `
                            border-cyan-300
                            bg-gradient-to-r
                            ${BLUE_GRADIENT}
                            text-white
                            shadow-[0_0_20px_rgba(14,165,233,0.3)]
                          `
                          : `
                            border-black/10
                            bg-white
                            text-neutral-600
                            shadow-sm

                            dark:border-white/10
                            dark:bg-[#080808]
                            dark:text-neutral-300
                          `
                      }
                    `}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                    title={skill.name}
                  >
                    {skill.name.length > 7
                      ? `${skill.name.slice(0, 6)}…`
                      : skill.name}
                  </motion.button>
                );
              })}

              {/* =================================================
                  CENTER
              ================================================= */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-10
                  flex
                  -translate-x-1/2
                  -translate-y-1/2
                  flex-col
                  items-center
                  text-center
                "
              >

                <motion.div
                  key={active}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className={`
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-[22px]
                    bg-gradient-to-r
                    ${BLUE_GRADIENT}
                    shadow-[0_10px_35px_rgba(14,165,233,0.15)]
                    sm:h-22
                    sm:w-22
                  `}
                >
                  <ActiveIcon
                    className="
                      h-9
                      w-9
                      text-white
                    "
                  />
                </motion.div>

                <h3
                  className="
                    mt-4
                    max-w-[180px]
                    text-xl
                    font-black
                    leading-tight
                    md:text-2xl
                  "
                >
                  {active}
                </h3>

                <p
                  className="
                    mt-1
                    text-[10px]
                    text-neutral-500
                  "
                >
                  {current.skills.length} technologies
                </p>

              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT CARD
          ================================================= */}

          <AnimatePresence mode="wait">

            <motion.div
              key={`${active}-${selectedSkill.name}`}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-black/[0.08]
                bg-white/70
                p-5
                shadow-[0_15px_45px_rgba(0,0,0,0.05)]
                backdrop-blur-xl

                dark:border-white/[0.08]
                dark:bg-white/[0.025]
                dark:shadow-none

                sm:p-6
                md:p-7
              "
            >

              {/* accent */}
              <div
                className={`
                  absolute
                  left-0
                  right-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  ${BLUE_GRADIENT}
                  opacity-70
                `}
              />

              {/* header */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-r
                      ${BLUE_GRADIENT}
                    `}
                  >
                    <ActiveIcon
                      className="
                        h-5
                        w-5
                        text-white
                      "
                    />
                  </div>

                  <div>

                    <p
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.22em]
                        text-cyan-500
                      "
                    >
                      Technology Group
                    </p>

                    <h3
                      className="
                        mt-0.5
                        text-xl
                        font-black
                        tracking-tight
                        md:text-2xl
                      "
                    >
                      {active}
                    </h3>

                  </div>
                </div>

                <div
                  className="
                    hidden
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-cyan-500/20
                    bg-cyan-500/[0.04]
                    px-2.5
                    py-1
                    text-[9px]
                    font-semibold
                    text-cyan-500
                    sm:flex
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
                  Active
                </div>
              </div>

              {/* description */}
              <p
                className="
                  mt-5
                  text-xs
                  leading-5
                  text-neutral-600
                  dark:text-neutral-400
                  md:text-sm
                "
              >
                Explore this part of my engineering stack.
                Select a technology to see how I use it.
              </p>

              {/* selected */}
              <div
                className="
                  mt-5
                  rounded-xl
                  border
                  border-black/[0.07]
                  bg-black/[0.02]
                  p-4
                  dark:border-white/[0.07]
                  dark:bg-white/[0.02]
                "
              >

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <div>

                    <p
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-neutral-500
                      "
                    >
                      Selected Technology
                    </p>

                    <h4
                      className="
                        mt-1
                        text-base
                        font-black
                        md:text-lg
                      "
                    >
                      {selectedSkill.name}
                    </h4>

                  </div>

                  <div
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-lg
                      bg-cyan-500/10
                      text-cyan-500
                    "
                  >
                    <Check className="h-3.5 w-3.5" />
                  </div>
                </div>

                <p
                  className="
                    mt-3
                    text-xs
                    leading-5
                    text-neutral-600
                    dark:text-neutral-400
                  "
                >
                  {selectedSkill.description}
                </p>

                <div className="mt-4">

                  <p
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-neutral-500
                    "
                  >
                    How I use it
                  </p>

                  <p
                    className="
                      mt-1.5
                      text-xs
                      leading-5
                      text-neutral-700
                      dark:text-neutral-300
                    "
                  >
                    {selectedSkill.use}
                  </p>

                </div>
              </div>

              {/* technology pills */}
              <div className="mt-5">

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <p
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-neutral-500
                    "
                  >
                    Technologies
                  </p>

                  <span
                    className="
                      text-[9px]
                      text-neutral-400
                    "
                  >
                    {String(selectedIndex + 1).padStart(
                      2,
                      "0",
                    )}{" "}
                    /{" "}
                    {String(current.skills.length).padStart(
                      2,
                      "0",
                    )}
                  </span>
                </div>

                <div
                  className="
                    mt-2.5
                    flex
                    flex-wrap
                    gap-1.5
                  "
                >
                  {current.skills.map((skill) => {

                    const isSelected =
                      skill.name === selectedSkill.name;

                    return (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() =>
                          setSelected(skill.name)
                        }
                        className={`
                          rounded-full
                          border
                          px-3
                          py-1.5
                          text-[10px]
                          font-semibold
                          transition-all

                          ${
                            isSelected
                              ? `
                                border-cyan-400/30
                                bg-gradient-to-r
                                ${BLUE_GRADIENT}
                                text-white
                              `
                              : `
                                border-black/[0.08]
                                bg-black/[0.02]
                                text-neutral-600

                                dark:border-white/[0.08]
                                dark:bg-white/[0.02]
                                dark:text-neutral-400

                                hover:border-cyan-400/30
                                hover:text-cyan-500
                              `
                          }
                        `}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* footer */}
              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-between
                  border-t
                  border-black/[0.07]
                  pt-4
                  dark:border-white/[0.07]
                "
              >

                <span
                  className="
                    text-[10px]
                    text-neutral-400
                  "
                >
                  Click a technology to explore
                </span>

                <ArrowUpRight
                  className="
                    h-3.5
                    w-3.5
                    text-neutral-400
                  "
                />

              </div>
            </motion.div>

          </AnimatePresence>
        </div>

        {/* ===================================================
            SMALL TECHNOLOGY STRIP
        =================================================== */}

        <div
          className="
            mx-auto
            mt-7
            flex
            max-w-[1000px]
            flex-wrap
            justify-center
            gap-1.5
          "
        >
          {current.skills.map((skill) => (
            <button
              key={skill.name}
              type="button"
              onClick={() =>
                setSelected(skill.name)
              }
              className="
                rounded-full
                border
                border-black/[0.07]
                bg-black/[0.015]
                px-3
                py-1.5
                text-[9px]
                font-medium
                text-neutral-500
                transition-all

                hover:border-cyan-400/30
                hover:text-cyan-500

                dark:border-white/[0.07]
                dark:bg-white/[0.015]
                dark:text-neutral-500
                dark:hover:border-cyan-400/30
                dark:hover:text-cyan-400
              "
            >
              {skill.name}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}