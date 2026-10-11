

"use client";

import SkillGlobe from "@/components/ui/skill-globe";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative overflow-hidden
        bg-white text-black
        dark:bg-black dark:text-white
      "
    >
      <SkillGlobe />
    </section>
  );
}