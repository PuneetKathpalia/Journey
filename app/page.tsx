// import About from "@/components/sections/About";
// import AboutTerminal from "@/components/sections/AboutTerminal";
// import Hero from "@/components/sections/hero";
// import Navbar from "@/components/sections/navbar";
// import Skills from "@/components/sections/Skills";
// import Work from "@/components/sections/Work";
// import Certifications from "@/components/sections/Certifications";
// import Projects from "@/components/sections/Projects";

// export default function Home() {
//   return (
//     <main className="overflow-x-hidden bg-white text-black dark:bg-black dark:text-white">

//       {/* 🔥 NAVBAR */}
//       <Navbar />

//       {/* 🔥 HERO */}
//       <section id="home">
//         <Hero />
//       </section>

//       {/* 🔥 TERMINAL ABOUT */}
//       <section id="terminal">
//         <AboutTerminal />
//       </section>

//       {/* 🔥 MAIN ABOUT */}
//       <section id="about">
//         <About />
//       </section>

//       {/* 🔥 SKILLS */}
//       <section
//         id="skills"
//         className="
//           relative
//           overflow-hidden

//           bg-white
//           text-black

//           dark:bg-black
//           dark:text-white
//         "
//       >
//         <Skills />
//       </section>

//       {/* 🔥 WORK EXPERIENCE */}
//       <section
//         id="work"
//         className="
//           relative
//           overflow-hidden

//           bg-black
//           dark:bg-black
//         "
//       >
//         <Work />
//       </section>

//       {/* 🔥 CERTIFICATIONS */}
// <section id="certifications">
//   <Certifications />
// </section>

//    {/* 🔥 PROJECTS */}
// <section
//   id="projects"
//   className="
//     relative
//     py-24

//     bg-white
//     text-black

//     dark:bg-black
//     dark:text-white
//   "
// >
//   <div className="max-w-7xl mx-auto px-6">

//     {/* HEADER */}
//     <div className="text-center mb-16">
//       <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-500">
//         Portfolio
//       </p>

//       <h2 className="text-5xl font-black tracking-tight md:text-7xl">
//         Featured
//         <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//           {" "}Projects
//         </span>
//       </h2>

//       <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
//         Production-ready projects focused on scalable systems,
//         immersive UI and modern engineering.
//       </p>
//     </div>

//     {/* 🔥 REAL PROJECT COMPONENT */}
//     <Projects />

//   </div>
// </section>



// {/* 🔥 CONTACT */}
// <section
//   id="contact"
//   className="
//     relative
//     py-24

//     bg-neutral-100
//     text-black

//     dark:bg-neutral-950
//     dark:text-white
//   "
// >
//   <div className="max-w-4xl mx-auto px-6 text-center">

//     <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-500">
//       Contact
//     </p>

//     <h2 className="text-5xl font-black tracking-tight md:text-7xl">
//       Let’s Build
//       <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//         {" "}Something
//       </span>
//     </h2>

//     <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
//       Open to software engineering, fullstack and AI-focused opportunities.
//     </p>

//     <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

//       <a
//         href="mailto:your@email.com"
//         className="
//           px-6 py-3 rounded-full

//           bg-black text-white

//           dark:bg-white dark:text-black

//           font-semibold

//           hover:scale-105 transition
//         "
//       >
//         Email Me
//       </a>

//       <a
//         href="https://github.com/yourusername"
//         target="_blank"
//         className="
//           px-6 py-3 rounded-full

//           border border-neutral-300 dark:border-neutral-700

//           hover:bg-black hover:text-white
//           dark:hover:bg-white dark:hover:text-black

//           transition
//         "
//       >
//         GitHub
//       </a>

//     </div>

//   </div>
// </section>
//     </main>
//   );
// }

import About from "@/components/sections/About";
import AboutTerminal from "@/components/sections/AboutTerminal";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import Skills from "@/components/sections/Skills";
import Work from "@/components/sections/Work";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import DeveloperMode from "@/components/sections/DeveloperMode";
import DeveloperBehindCode from "@/components/sections/DeveloperBehindCode";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-black dark:bg-black dark:text-white">

      {/* 🔥 NAVBAR */}
      <Navbar />

      {/* 🔥 HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* 🔥 TERMINAL ABOUT */}
      <section id="terminal">
        <AboutTerminal />
      </section>

      {/* 🔥 ABOUT */}
      <section id="about">
        <About />
      </section>

<DeveloperMode />

      {/* 🔥 SKILLS */}
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
        <Skills />
      </section>

      {/* 🔥 WORK */}
      <section
        id="work"
        className="
          relative
          overflow-hidden

          bg-black
          dark:bg-black
        "
      >
        <Work />
      </section>

      {/* 🔥 CERTIFICATIONS */}
      <section
        id="certifications"
        className="
          relative
          overflow-hidden

          bg-white
          dark:bg-black
        "
      >
        <Certifications />
      </section>

      {/* 🔥 PROJECTS */}
      <section
        id="projects"
        className="
          relative
          overflow-hidden

          py-24

          bg-white
          text-black

          dark:bg-black
          dark:text-white
        "
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 overflow-hidden">

          <div
            className="
              absolute
              left-1/2
              top-20

              h-[500px]
              w-[500px]

              -translate-x-1/2

              rounded-full
              bg-cyan-500/10

              blur-[140px]
            "
          />

          <div
            className="
              absolute
              bottom-0
              right-0

              h-[300px]
              w-[300px]

              rounded-full
              bg-blue-500/10

              blur-[120px]
            "
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-16">

            <p
              className="
                mb-4
                text-sm
                uppercase
                tracking-[0.4em]

                text-cyan-500
              "
            >
              Portfolio
            </p>

            <h2
              className="
                text-5xl
                md:text-7xl
                font-black
                tracking-tight
              "
            >
              Featured

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
                {" "}Projects
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl

                text-lg
                leading-relaxed

                text-neutral-600
                dark:text-neutral-400
              "
            >
              Production-ready projects focused on scalable systems,
              immersive UI and modern engineering.
            </p>
          </div>

          {/* 🔥 PROJECT COMPONENT */}
          <Projects />

        </div>
      </section>


<DeveloperBehindCode />

      {/* 🔥 CONTACT */}
      <section
        id="contact"
        className="
          relative
          overflow-hidden

          bg-black
          dark:bg-black
        "
      >
        <Contact />
      </section>

    </main>
  );
}