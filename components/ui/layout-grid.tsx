"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Card = {
  id: number;
  content: React.ReactNode;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  // ✅ ESC KEY CLOSE (FIXED - only ONE useEffect)
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto">

      {/* GRID */}
      <div className="grid grid-cols-3 gap-6">

        {/* BIG LEFT */}
        <div
          className="col-span-2 h-[260px] cursor-pointer"
          onClick={() => setSelected(cards[0])}
        >
          <img
            src={cards[0].thumbnail}
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>

        {/* SMALL RIGHT */}
        <div
          className="col-span-1 h-[260px] cursor-pointer"
          onClick={() => setSelected(cards[1])}
        >
          <img
            src={cards[1].thumbnail}
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>

        {/* SMALL LEFT */}
        <div
          className="col-span-1 h-[260px] cursor-pointer"
          onClick={() => setSelected(cards[2])}
        >
          <img
            src={cards[2].thumbnail}
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>

        {/* BIG RIGHT */}
        <div
          className="col-span-2 h-[260px] cursor-pointer"
          onClick={() => setSelected(cards[3])}
        >
          <img
            src={cards[3].thumbnail}
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* MODAL */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div
                className="relative max-w-3xl w-full rounded-2xl overflow-hidden bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                {/* ❌ CLOSE BUTTON */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-50 text-white bg-black/60 hover:bg-black rounded-full w-10 h-10 flex items-center justify-center text-xl"
                >
                  ✕
                </button>

                {/* IMAGE */}
                <img
                  src={selected.thumbnail}
                  className="w-full h-[400px] object-cover"
                  alt=""
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/50" />

                {/* TEXT */}
                <div className="absolute bottom-0 p-8 text-white z-10">
                  {selected.content}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
