import { motion } from "framer-motion";
import { Fragment } from "react";

const draw = {
  hidden: {
    pathLength: 0,
    strokeDashoffset: 100
  },
  visible: (i) => {
    const delay = i * 0.2;
    return {
      pathLength: 1,
      strokeDashoffset: 100,
      transition: { delay, type: "spring", duration: 1.5, bounce: 0 }
    };
  }
};

export default function Background() {
  const lines = [
    { x1: 0, y1: 1, x2: 10, y2: 1 },
    { x1: 1, y1: 0, x2: 1, y2: 1 },
    { x1: 2, y1: 0, x2: 2, y2: 10 },
    { x1: 8, y1: 0, x2: 8, y2: 10 },
    { x1: 9, y1: 1, x2: 9, y2: 9 },
    { x1: 0, y1: 9, x2: 10, y2: 9 },
    { x1: 9, y1: 6, x2: 10, y2: 6 }
  ];
  return (
    <motion.svg
      width="100%"
      height="100%"
      className="absolute top-0 left-0 bg-zinc-950 -z-1"
      initial="hidden"
      animate="visible"
    >
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="100%"
          y2="50%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="25%" stopColor="#fa7e1e" />
          <stop offset="50%" stopColor="#d62976" />
          <stop offset="75%" stopColor="#962fbf" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      {lines.map((line, index) => (
        <Fragment key={index}>
          <motion.line
            x1={`${line.x1 * 10}%`}
            y1={`${line.y1 * 10}%`}
            x2={`${line.x2 * 10}%`}
            y2={`${line.y2 * 10}%`}
            stroke="url(#gradient)"
            strokeWidth="1"
            variants={draw}
            custom={index}
          />
          <line
            x1={`${line.x1 * 10}%`}
            y1={`${line.y1 * 10}%`}
            x2={`${line.x2 * 10}%`}
            y2={`${line.y2 * 10}%`}
            stroke="black"
            strokeWidth="1"
            strokeDasharray="10"
            strokeDashoffset="10"
          />
        </Fragment>
      ))}
    </motion.svg>
  );
}
