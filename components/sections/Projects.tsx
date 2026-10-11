

"use client";

import { useRef, useState } from "react";
import ThreeDMarquee from "@/components/ui/3d-marquee";
import ProjectTerminal, {
  type ProjectTerminalProject,
} from "@/components/ui/project-terminal";

const projects: ProjectTerminalProject[] = [
  {
    title: "EzzGrow - Social Media App",
    description: "Social media growth platform",
    liveUrl: "https://ezzgrow.vercel.app/",
  },
  {
    title: "CRM - Customer Relationship Management",
    description: "Customer relationship dashboard",
    liveUrl: "https://crm-frontendd.vercel.app/",
  },
  {
    title: "Seasonal Wardrobe",
    description: "Wardrobe planning experience",
    liveUrl: "https://seasonal-wardrobe.onrender.com/",
  },
];

const imageProjectMap: Record<string, ProjectTerminalProject> = {
  p1: projects[0],
  p2: projects[0],
  p3: projects[0],
  p4: projects[1],
  p5: projects[1],
  p6: projects[1],
  p7: projects[2],
  p8: projects[2],
  p9: projects[2],
};

function buildLoadingPage(project: ProjectTerminalProject) {
  const safeTitle = project.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Launching ${safeTitle}</title>
      </head>
      <body style="margin:0; background:#05070a; color:#22d3ee; font-family:Arial, Helvetica, sans-serif; min-height:100vh; display:flex; align-items:center; justify-content:center;">
        <div style="text-align:center; padding:32px;">
          <div style="font-size:42px; line-height:1; margin-bottom:16px;">🚀</div>
          <div style="font-size:24px; color:#e5f7ff; font-weight:600; margin-bottom:8px;">Launching project...</div>
          <div style="font-size:14px; color:#94a3b8; letter-spacing:0.04em; margin-bottom:8px;">${safeTitle}</div>
          <div style="font-size:12px; color:#67e8f9;">Preparing development environment...</div>
        </div>
      </body>
    </html>`;
}

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectTerminalProject | null>(null);
  const [popupBlocked, setPopupBlocked] = useState(false);
  const projectWindowRef = useRef<Window | null>(null);
  const projectWindowNavigatedRef = useRef(false);

  const images = [
    "/images/p1.png",
    "/images/p2.png",
    "/images/p3.png",
    "/images/p4.png",
    "/images/p5.png",
    "/images/p6.png",
    "/images/p7.png",
    "/images/p8.png",
    "/images/p9.png",
  ];

  const handleClick = (img: string) => {
    const imageKey = img.match(/p\d+/)?.[0] ?? "p1";
    const selectedProject = imageProjectMap[imageKey] ?? projects[0];

    const newWindow = window.open("", "_blank");

    if (!newWindow) {
      setPopupBlocked(true);
      setActiveProject(selectedProject);
      setOpen(true);
      return;
    }

    projectWindowRef.current = newWindow;
    projectWindowNavigatedRef.current = false;
    newWindow.document.write(buildLoadingPage(selectedProject));
    newWindow.document.close();

    setPopupBlocked(false);
    setActiveProject(selectedProject);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveProject(null);
    setPopupBlocked(false);

    const projectWindow = projectWindowRef.current;
    if (projectWindow && !projectWindow.closed && !projectWindowNavigatedRef.current) {
      projectWindow.close();
    }

    projectWindowRef.current = null;
    projectWindowNavigatedRef.current = false;
  };

  return (
    <section className="relative py-8 md:py-16">
      <ThreeDMarquee images={images} onImageClick={handleClick} />

      <ProjectTerminal
        open={open}
        onClose={handleClose}
        project={activeProject}
        projectWindowRef={projectWindowRef}
        projectWindowNavigatedRef={projectWindowNavigatedRef}
        popupBlocked={popupBlocked}
      />
    </section>
  );
}