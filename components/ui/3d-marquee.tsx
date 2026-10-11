


"use client";

import { motion } from "framer-motion";

export default function ThreeDMarquee({
  images,
  onImageClick,
}: {
  images: string[];
  onImageClick?: (img: string) => void;
}) {
  const chunkSize = Math.ceil(images.length / 3); // 🔥 better distribution

  const chunks = Array.from({ length: 3 }, (_, i) =>
    images.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

  return (
    <div className="h-[650px] overflow-hidden rounded-3xl">
      <div className="flex justify-center items-center h-full">
        <div className="scale-90 lg:scale-110">
          <div
            style={{
              transform: "rotateX(50deg) rotateZ(-45deg)",
            }}
            className="grid grid-cols-3 gap-8"
          >
            {chunks.map((col, colIndex) => (
              <motion.div
                key={colIndex}
                animate={{ y: colIndex % 2 === 0 ? 120 : -120 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 14,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex flex-col gap-8"
              >
                {col.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    onClick={() => onImageClick?.(img)}
                    whileHover={{ scale: 1.1 }}
                    className="
                      rounded-2xl cursor-pointer
                      object-cover
                      w-[300px] h-[200px]
                      shadow-2xl
                      hover:shadow-cyan-500/30
                      transition
                    "
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}