import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiGithubFill, RiStarFill } from 'react-icons/ri';
import { projects } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { ProjectCategory } from '../types';

const filterOptions: ProjectCategory[] = [
  'All',
  'Web',
  'IoT/Embedded',
  'AI/ML',
  'Research',
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const sectionRef = useScrollReveal<HTMLElement>();

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="scroll-reveal py-20 px-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Projects
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-primary-500 dark:bg-primary-400" />
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Things I&apos;ve built and researched
          </p>
        </div>

        {/* Filter bar */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200
                ${
                  activeFilter === opt
                    ? 'bg-primary-500 text-white shadow-md shadow-primary-500/25 dark:bg-primary-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`group relative overflow-hidden rounded-xl border bg-white
                           shadow-sm transition-all duration-300 hover:shadow-lg
                           dark:bg-gray-800
                           ${
                             project.featured
                               ? 'border-primary-300 ring-1 ring-primary-200 dark:border-primary-600 dark:ring-primary-800'
                               : 'border-gray-200 dark:border-gray-700'
                           }`}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full bg-primary-500 px-3 py-1 text-xs font-bold text-white dark:bg-primary-600">
                    <RiStarFill className="h-3 w-3" />
                    Featured
                  </div>
                )}

                <div className="p-6">
                  {/* Header */}
                  <div className="mb-3 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {project.subtitle}
                      </p>
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${project.title}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg
                                   text-gray-400 transition-all duration-200
                                   hover:bg-gray-100 hover:text-gray-700
                                   dark:hover:bg-gray-700 dark:hover:text-gray-200"
                      >
                        <RiGithubFill className="h-5 w-5" />
                      </a>
                    )}
                  </div>

                  {/* Status badge */}
                  <div className="mb-4 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium
                        ${
                          project.status === 'Completed'
                            ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          project.status === 'Completed'
                            ? 'bg-green-500'
                            : 'bg-blue-500 animate-pulse'
                        }`}
                      />
                      {project.status}
                    </span>
                    {project.statusDate && (
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        {project.statusDate}
                      </span>
                    )}
                  </div>

                  {/* Role */}
                  {project.role && (
                    <p className="mb-3 text-xs font-medium text-primary-600 dark:text-primary-400">
                      Role: {project.role}
                    </p>
                  )}

                  {/* Description */}
                  <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700
                                   dark:bg-primary-900/30 dark:text-primary-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
