import aboutimg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

// Animation Variants
const fadeInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const About = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ABOUT <span className="text-neutral-500">ME</span>
      </motion.h2>

      <div className="flex flex-wrap">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          variants={fadeInLeft}
        >
          <div className="flex justify-center">
            <motion.img
              src={aboutimg}
              alt="about"
              className="rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 150 }}
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeInRight}
        >
          <div className="flex justify-center lg:justify-start">
            <motion.p className="my-2 max-w-xl py-6 text-lg leading-relaxed text-gray-300">
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
