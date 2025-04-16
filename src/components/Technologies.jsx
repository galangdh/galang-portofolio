import { RiReactjsLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa6";
import { DiCodeigniter } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const getFloatingAnimation = (index) => ({
  y: [0, -10, 0],
  transition: {
    duration: 2 + index * 0.2, // tempo berbeda tiap icon
    repeat: Infinity,
    ease: "easeInOut",
    delay: index * 0.15, // biar ngambangnya nggak barengan
  },
});

const Technologies = () => {
  const icons = [
    <RiReactjsLine className="text-7xl text-cyan-400" />,
    <FaLaravel className="text-7xl text-red-500" />,
    <DiCodeigniter className="text-7xl text-red-700" />,
    <SiTailwindcss className="text-7xl text-cyan-400" />,
    <SiBootstrap className="text-7xl text-purple-700" />,
    <IoLogoJavascript className="text-7xl text-yellow-400" />,
    <SiPhp className="text-7xl text-cyan-400" />,
    <SiMysql className="text-7xl text-cyan-400" />,
    <FaHtml5 className="text-7xl text-orange-600" />,
    <FaFlutter className="text-7xl text-cyan-400" />,
  ];

  return (
    <motion.div
      className="border-b border-neutral-800 pb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h1
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        TECHNOLOGIES
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={iconVariants}
            animate={getFloatingAnimation(index)}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
