import { useRef, useState } from 'react';
import aboutimg from '../assets/about3.jpg';
import { ABOUT_TEXT } from '../constants';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';

// Split the bio into sentences so it can reveal one clause at a time.
const sentences = ABOUT_TEXT.match(/[^.!?]+[.!?]+/g) || [ABOUT_TEXT];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const sentenceVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const letters = 'ABOUT ME'.split('');

const TiltImage = ({ src }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), springConfig);

  const spotlightX = useTransform(x, (v) => `${v * 100}%`);
  const spotlightY = useTransform(y, (v) => `${v * 100}%`);

  const handleMove = (e) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        transformPerspective: 800,
      }}
      className="relative w-72 sm:w-96 md:w-[28rem] rounded-2xl"
    >
      {/* Cursor-tracked glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([sx, sy]) =>
              `radial-gradient(220px circle at ${sx} ${sy}, rgba(168,85,247,0.35), transparent 70%)`
          ),
        }}
      />

      <img
        src={src}
        alt="about"
        className="relative h-auto w-full rounded-2xl object-cover shadow-lg shadow-black/40"
      />

      {/* Rim highlight that appears with the tilt */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"
      />
    </motion.div>
  );
};

const InteractiveHeading = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <h2 className="my-20 flex justify-center text-4xl">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          onHoverStart={() => setHoveredIndex(i)}
          onHoverEnd={() => setHoveredIndex(null)}
          animate={{
            y: hoveredIndex === i ? -10 : 0,
            color: i >= 6 ? '#737373' : hoveredIndex === i ? '#a855f7' : '#ffffff',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 12 }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </h2>
  );
};

const MagneticButton = ({ children, targetId = 'contact' }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.3);
    y.set(relY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={handleClick}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.94 }}
      className="mt-4 w-fit rounded-full border border-neutral-700 px-6 py-3 text-sm tracking-wide text-neutral-200 transition-colors hover:border-purple-400 hover:text-purple-300"
    >
      {children}
    </motion.button>
  );
};

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <InteractiveHeading />

      <div className="flex flex-wrap items-center">
        {/* Image Section */}
        <motion.div
          className="group w-full lg:w-1/2 lg:p-8"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex justify-center">
            <TiltImage src={aboutimg} />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex justify-center lg:justify-start">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="my-2 max-w-xl py-6"
            >
              {sentences.map((sentence, i) => (
                <motion.span
                  key={i}
                  variants={sentenceVariant}
                  className="mr-1 text-lg leading-relaxed text-gray-300"
                >
                  {sentence.trim()}
                </motion.span>
              ))}

              <div className="flex">
                <MagneticButton>Let's talk →</MagneticButton>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;