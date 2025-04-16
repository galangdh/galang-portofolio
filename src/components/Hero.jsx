import { useEffect, useState } from "react";
import { HERO_CONTENT } from "../constants";
import profileFront from "../assets/galangProfile.png";
import profileBack from "../assets/profilepic2.jpg"; // Ganti dengan gambar kedua
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const textVariant = (delay = 0) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const Hero = () => {
  const [flipped, setFlipped] = useState(false);

  // Auto flip every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="border-b border-neutral-900 pb-4 lg:mb-35"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.3 }}
    >
      <div className="flex flex-wrap">
        {/* TEXT SIDE */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={textVariant(0.2)}
              className="pb-16 text-6xl font-bold tracking-tight lg:mt-16 lg:text-8xl"
            >
              Galang Dharma Putra
            </motion.h1>

            <motion.span
              variants={textVariant(0.4)}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              <TypeAnimation
                sequence={[
                  "Photographer Enthusiast",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Tech Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.span>

            <motion.p
              variants={textVariant(0.6)}
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div
            className="flex justify-center perspective"
            onClick={() => setFlipped((prev) => !prev)}
          >
            <motion.div
              className="relative w-[400px] h-[500px] cursor-pointer [transform-style:preserve-3d]"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Front Image */}
              <img
                src={profileFront}
                className="absolute w-full h-full rounded-xl shadow-lg backface-hidden"
                alt="Front"
              />

              {/* Back Image */}
              <img
                src={profileBack}
                className="absolute w-full h-full rounded-xl shadow-lg rotate-y-180 backface-hidden"
                alt="Back"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
