import { useMemo, useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { GitPullRequest, Code, ExternalLink, GitBranch } from 'lucide-react';
import { PROJECTS } from '../constants';

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};

const Project = () => {
  const [activeTech, setActiveTech] = useState(null);

  const allTechs = useMemo(() => {
    const set = new Set();
    PROJECTS.forEach((p) => p.technologies?.forEach((t) => set.add(t)));
    return Array.from(set);
  }, []);

  const visibleProjects = activeTech
    ? PROJECTS.filter((p) => p.technologies?.includes(activeTech))
    : PROJECTS;

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">PROJECTS</h1>

      {/* Tech filter bar */}
      {allTechs.length > 0 && (
        <div className="mb-16 flex flex-wrap justify-center gap-2 px-4">
          <button
            onClick={() => setActiveTech(null)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              activeTech === null
                ? 'border-purple-400 text-purple-300'
                : 'border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-neutral-200'
            }`}
          >
            All
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveTech(tech === activeTech ? null : tech)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                activeTech === tech
                  ? 'border-purple-400 text-purple-300'
                  : 'border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-neutral-200'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      )}

      <LayoutGroup>
        <motion.div layout className="flex flex-col gap-2">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => {
              const originalIndex = PROJECTS.indexOf(project);
              return (
                <motion.div
                  key={project.title}
                  layout
                  variants={cardVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ y: -4 }}
                  className="group mb-8 flex flex-wrap items-start gap-6 rounded-xl p-4 transition-colors hover:bg-neutral-900/50 lg:flex-nowrap lg:justify-center"
                >
                  <div className="relative w-full overflow-hidden rounded-lg lg:w-1/4">
                    <span className="absolute left-2 top-2 z-10 text-xs font-medium text-neutral-500">
                      {String(originalIndex + 1).padStart(2, '0')}
                    </span>
                    <motion.img
                      src={project.image}
                      width={150}
                      height={150}
                      alt={project.title}
                      className="h-auto w-full rounded object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="w-full max-w-xl lg:w-3/4">
                    <div className="mb-2 flex items-center gap-3">
                      <h6 className="font-semibold">{project.title}</h6>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-neutral-500 transition-colors hover:text-purple-300"
                          aria-label={`${project.title} source code`}
                        >
                          <GitBranch size={16} />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-neutral-500 transition-colors hover:text-purple-300"
                          aria-label={`${project.title} live site`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech) => (
                        <motion.span
                          key={tech}
                          onClick={() => setActiveTech(tech === activeTech ? null : tech)}
                          whileHover={{ y: -2 }}
                          className={`cursor-pointer rounded px-2 py-1 text-sm font-medium transition-colors ${
                            tech === activeTech
                              ? 'bg-purple-900/60 text-purple-200'
                              : 'bg-neutral-900 text-purple-400 hover:bg-neutral-800'
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {visibleProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-neutral-500"
            >
              No projects use {activeTech} yet.
            </motion.p>
          )}
        </motion.div>
      </LayoutGroup>
    </div>
  );
};

export default Project;