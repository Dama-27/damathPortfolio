import { RiBriefcaseLine, RiExternalLinkLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="scroll-reveal bg-gray-50 py-20 px-6 dark:bg-gray-900/50"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Experience
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-primary-500 dark:bg-primary-400" />
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Where I&apos;ve put my skills to work
          </p>
        </div>

        {/* Experience cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white
                         shadow-sm transition-shadow duration-300 hover:shadow-md
                         dark:border-gray-700 dark:bg-gray-800"
            >
              {/* Left accent border */}
              <div className="flex">
                <div className="w-1.5 shrink-0 bg-primary-500 dark:bg-primary-400" />

                <div className="flex-1 p-6 sm:p-8">
                  {/* Header */}
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <RiBriefcaseLine className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                          >
                            {exp.company}
                            <RiExternalLinkLine className="h-3.5 w-3.5" />
                          </a>
                        ) : (
                          <span className="font-medium">{exp.company}</span>
                        )}
                        <span>·</span>
                        <span>{exp.type}</span>
                      </div>
                    </div>
                    <span className="rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="mb-5 space-y-2.5">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li
                        key={bIndex}
                        className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400 dark:bg-primary-500" />
                        {bullet.text}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
