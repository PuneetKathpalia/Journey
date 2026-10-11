"use client";

import { LayoutGrid } from "@/components/ui/layout-grid";

export default function Certifications() {

  const cards = [
    {
      id: 1,
      thumbnail: "/images/oracle-cert.png",
      content: (
        <>
          <h2 className="text-3xl font-bold">Oracle Certification</h2>
          <p>Oracle AI Foundations Associate certified.</p>
        </>
      ),
    },

    {
      id: 2,
      thumbnail: "/images/devops.jpg",
      content: (
        <>
          <h2 className="text-3xl font-bold">IBM DevOps</h2>
          <p>Docker, Kubernetes, CI/CD pipelines.</p>
        </>
      ),
    },

    {
      id: 3,
      thumbnail: "/images/dsa.jpg",
      content: (
        <>
          <h2 className="text-3xl font-bold">LearnYard DSA</h2>
          <p>Strong problem-solving & DSA skills.</p>
        </>
      ),
    },

    {
      id: 4,
      thumbnail: "/images/hackathon.jpg",
      content: (
        <>
          <h2 className="text-3xl font-bold">Hackathon</h2>
          <p>Real-world coding + innovation experience.</p>
        </>
      ),
    },
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-black">

      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black">
          Certifications{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            & Achievements
          </span>
        </h2>

        <p className="mt-6 text-neutral-600 dark:text-neutral-400">
          Verified skills and real-world certifications.
        </p>
      </div>

      <LayoutGrid cards={cards} />
    </section>
  );
}