"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, type MutableRefObject } from "react";

export type ProjectTerminalProject = {
  title: string;
  description?: string;
  liveUrl?: string;
  githubUrl?: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  project: ProjectTerminalProject | null;
  projectWindowRef?: MutableRefObject<Window | null>;
  projectWindowNavigatedRef?: MutableRefObject<boolean>;
  popupBlocked?: boolean;
};

export default function ProjectTerminal({
  open,
  onClose,
  project,
  projectWindowRef,
  projectWindowNavigatedRef,
  popupBlocked = false,
}: Props) {
  const [lines, setLines] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);
  const timerRef = useRef<number[]>([]);
  const closeTimerRef = useRef<number | null>(null);
  const cancelRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const clearTimers = () => {
    timerRef.current.forEach((timer) => window.clearInterval(timer));
    timerRef.current = [];

    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio("/sounds/type.mp3");
      audio.volume = 0.2;
      audioRef.current = audio;
    }
  }, []);

  useEffect(() => {
    if (!open || !project) {
      setLines([]);
      setIsReady(false);
      return;
    }

    cancelRef.current = false;
    setLines([]);
    setIsReady(false);

    const terminalLines = [
      "✓ installing dependencies...",
      "✓ packages installed successfully",
      "$ npm run dev",
      "🚀 starting development server...",
      "🌐 project starting...",
    ];

    let index = 0;
    const interval = window.setInterval(() => {
      if (index >= terminalLines.length) {
        window.clearInterval(interval);
        timerRef.current = timerRef.current.filter((timer) => timer !== interval);
        setIsReady(true);
        return;
      }

      setLines((prev) => [...prev, terminalLines[index]]);

      if (audioRef.current) {
        try {
          audioRef.current.currentTime = 0;
          void audioRef.current.play().catch(() => {});
        } catch {
          // Ignore browser autoplay restrictions.
        }
      }

      index += 1;
    }, 700);

    timerRef.current.push(interval);

    return () => {
      window.clearInterval(interval);
      timerRef.current = timerRef.current.filter((timer) => timer !== interval);
    };
  }, [open, project]);

  useEffect(() => {
    if (!open || !project || !isReady) return;

    const target = projectWindowRef?.current;
    if (target && !target.closed && project.liveUrl) {
      if (projectWindowNavigatedRef) {
        projectWindowNavigatedRef.current = true;
      }
      target.location.href = project.liveUrl;

      closeTimerRef.current = window.setTimeout(() => {
        if (!cancelRef.current) {
          onClose();
        }
      }, 400);
    }
  }, [open, project, isReady, projectWindowRef, projectWindowNavigatedRef, onClose]);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        cancelRef.current = true;
        clearTimers();

        const target = projectWindowRef?.current;
        if (target && !target.closed && !projectWindowNavigatedRef?.current) {
          target.close();
        }

        if (projectWindowRef) {
          projectWindowRef.current = null;
        }
        if (projectWindowNavigatedRef) {
          projectWindowNavigatedRef.current = false;
        }

        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose, projectWindowRef, projectWindowNavigatedRef]);

  useEffect(() => {
    return () => {
      cancelRef.current = true;
      clearTimers();

      const target = projectWindowRef?.current;
      if (target && !target.closed && !projectWindowNavigatedRef?.current) {
        target.close();
      }

      if (projectWindowRef) {
        projectWindowRef.current = null;
      }
      if (projectWindowNavigatedRef) {
        projectWindowNavigatedRef.current = false;
      }
    };
  }, [projectWindowRef, projectWindowNavigatedRef]);

  const handleClose = () => {
    cancelRef.current = true;
    clearTimers();

    const target = projectWindowRef?.current;
    if (target && !target.closed && !projectWindowNavigatedRef?.current) {
      target.close();
    }

    if (projectWindowRef) {
      projectWindowRef.current = null;
    }
    if (projectWindowNavigatedRef) {
      projectWindowNavigatedRef.current = false;
    }

    setLines([]);
    setIsReady(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && project && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-5xl overflow-hidden rounded-3xl border border-cyan-500/20 bg-black shadow-[0_0_100px_rgba(0,255,255,0.08)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <h2 className="text-xl text-neutral-300">{project.title}</h2>

              <button
                type="button"
                onClick={handleClose}
                className="text-4xl text-red-500 transition hover:scale-110"
                aria-label="Close project terminal"
              >
                ×
              </button>
            </div>

            <div className="min-h-[420px] p-10 font-mono text-[22px]">
              {lines.map((line, index) => {
                if (!line) return null;

                return (
                  <motion.p
                    key={`${line}-${index}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`mb-6 ${
                      line.startsWith("$")
                        ? "text-cyan-400"
                        : line.startsWith("✓")
                          ? "text-green-400"
                          : line.startsWith("🚀")
                            ? "text-yellow-400"
                            : line.startsWith("🌐")
                              ? "text-blue-400"
                              : "text-white"
                    }`}
                  >
                    {line}
                  </motion.p>
                );
              })}

              {isReady && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-0 text-blue-400"
                >
                  🌐 project ready...
                </motion.p>
              )}

              {!isReady && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="text-2xl text-cyan-400"
                >
                  █
                </motion.span>
              )}

              {popupBlocked && project.liveUrl && (
                <div className="mt-6 max-w-lg rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4 text-sm text-yellow-200">
                  <p className="mb-3 font-medium">⚠ Popup blocked</p>
                  <p className="mb-3 text-yellow-100/90">Please allow pop-ups for this portfolio to launch projects automatically.</p>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-300 transition hover:text-cyan-200"
                  >
                    Launch project ↗
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}