import {
  RiCloudLine,
  RiCodeSSlashLine,
  RiGlobalLine,
  RiDatabase2Line,
  RiBrainLine,
  RiToolsLine,
} from 'react-icons/ri';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { JSX } from 'react';

const iconMap: Record<string, JSX.Element> = {
  RiCloudLine: <RiCloudLine className="h-6 w-6" />,
  RiCodeSSlashLine: <RiCodeSSlashLine className="h-6 w-6" />,
  RiGlobalLine: <RiGlobalLine className="h-6 w-6" />,
  RiDatabase2Line: <RiDatabase2Line className="h-6 w-6" />,
  RiBrainLine: <RiBrainLine className="h-6 w-6" />,
  RiToolsLine: <RiToolsLine className="h-6 w-6" />,
};

export default function Skills() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="scroll-reveal py-20 px-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Skills & Technologies
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-primary-500 dark:bg-primary-400" />
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
              className="group rounded-xl border border-gray-200 bg-white p-6
                         transition-all duration-300 hover:border-primary-300 hover:shadow-lg
                         hover:shadow-primary-500/5
                         dark:border-gray-700 dark:bg-gray-800
                         dark:hover:border-primary-600 dark:hover:shadow-primary-500/10"
            >
              {/* Category header */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg
                               bg-primary-50 text-primary-600
                               transition-colors duration-300 group-hover:bg-primary-100
                               dark:bg-primary-900/30 dark:text-primary-400
                               dark:group-hover:bg-primary-900/50">
                  {iconMap[cat.icon]}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {cat.title}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700
                               transition-colors duration-200 hover:bg-primary-50 hover:text-primary-700
                               dark:bg-gray-700 dark:text-gray-300
                               dark:hover:bg-primary-900/30 dark:hover:text-primary-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
