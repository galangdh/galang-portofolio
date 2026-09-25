import { useMemo, useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa6";
import { DiCodeigniter } from "react-icons/di";
import { SiTailwindcss, SiBootstrap, SiPhp, SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const STACK = [
  { name: "React", Icon: RiReactjsLine, color: "#22d3ee", category: "Frontend" },
  { name: "JavaScript", Icon: IoLogoJavascript, color: "#facc15", category: "Frontend" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#22d3ee", category: "Frontend" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "#a855f7", category: "Frontend" },
  { name: "HTML5", Icon: FaHtml5, color: "#ea580c", category: "Frontend" },
  { name: "Flutter", Icon: FaFlutter, color: "#22d3ee", category: "Mobile" },
  { name: "Laravel", Icon: FaLaravel, color: "#ef4444", category: "Backend" },
  { name: "CodeIgniter", Icon: DiCodeigniter, color: "#b91c1c", category: "Backend" },
  { name: "PHP", Icon: SiPhp, color: "#22d3ee", category: "Backend" },
  { name: "MySQL", Icon: SiMysql, color: "#22d3ee", category: "Database" },
];

const CATEGORIES = ["All", ...new Set(STACK.map((s) => s.category))];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.4, type: "spring", stiffness: 120 },
  }),
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.15 } },
};

const TechCard = ({ tech, index }) => {
  const [hovered, setHovered] = useState(false);
  const { name, Icon, color } = tech;

  return (
    <motion.div
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative"
    >
      {/* Continuous float — kept on its own layer so it never fights the entrance animation */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 2 + (index % 5) * 0.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: (index % 5) * 0.15,
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1, borderColor: color }}
          animate={{ boxShadow: hovered ? `0 0 24px -6px ${color}` : "0 0 0px 0px transparent" }}
          className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-neutral-800 bg-neutral-950/40 transition-colors"
        >
          <Icon className="text-5xl" style={{ color }} />
        </motion.div>
      </motion.div>

      <motion.span
        initial={{ opacity: 0, y: -4 }}
        animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -4 }}
        transition={{ duration: 0.15 }}
        className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-neutral-800 px-2 py-1 text-xs text-neutral-200 shadow"
      >
        {name}
      </motion.span>
    </motion.div>
  );
};

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleStack = useMemo(
    () => (activeCategory === "All" ? STACK : STACK.filter((t) => t.category === activeCategory)),
    [activeCategory]
  );

  return (
    <motion.div
      className="border-b border-neutral-800 pb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h1
        className="mb-10 mt-20 text-center text-4xl"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        TECHNOLOGIES
      </motion.h1>

      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              activeCategory === category
                ? "border-purple-400 text-purple-300"
                : "border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-neutral-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="flex flex-wrap items-center justify-center gap-8 pt-4">
        <AnimatePresence mode="popLayout">
          {visibleStack.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Technologies;