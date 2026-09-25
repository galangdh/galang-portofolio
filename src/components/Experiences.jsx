import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const lineVariant = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 1, ease: 'easeInOut' } },
};

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">EXPERIENCE</h1>

      <div className="relative mx-auto max-w-3xl px-4">
        {/* Timeline spine */}
        <motion.div
          variants={lineVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ originY: 0 }}
          className="absolute left-[7px] top-2 h-full w-px bg-neutral-800 sm:left-[27px]"
        />

        <div className="flex flex-col gap-10">
          {EXPERIENCES.map((experience, index) => {
            const isOpen = openIndex === index;
            const isCurrent = experience.year.toLowerCase().includes('present');

            return (
              <div key={index} className="relative pl-6 sm:pl-16">
                {/* Timeline dot */}
                <motion.span
                  animate={{
                    backgroundColor: isCurrent ? '#a855f7' : isOpen ? '#e5e5e5' : '#404040',
                    scale: isOpen ? 1.2 : 1,
                  }}
                  className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full ring-4 ring-neutral-950 sm:left-[20px]"
                />

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-medium text-purple-400">
                      {experience.year}
                    </span>
                    {isCurrent && (
                      <span className="rounded-full bg-purple-900/40 px-2 py-0.5 text-xs text-purple-300">
                        current
                      </span>
                    )}
                  </div>

                  <div className="mt-1 flex items-center justify-between gap-4">
                    <h6 className="font-semibold text-neutral-100">
                      {experience.role}{' '}
                      <span className="font-normal text-neutral-500">
                        @ {experience.company}
                      </span>
                    </h6>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-2xl leading-none text-neutral-500"
                      aria-hidden
                    >
                      +
                    </motion.span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="mb-4 mt-3 max-w-xl text-neutral-400">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ y: -2 }}
                            className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;