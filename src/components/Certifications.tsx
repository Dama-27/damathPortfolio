import {
  RiCheckboxCircleFill,
  RiTimeLine,
  RiAwardLine,
} from 'react-icons/ri';
import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Certifications() {
  const sectionRef = useScrollReveal<HTMLElement>();

  const inProgress = certifications.filter((c) => c.status === 'in-progress');
  const completed = certifications.filter((c) => c.status === 'completed');

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="scroll-reveal py-20 px-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Certifications
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-primary-500 dark:bg-primary-400" />
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Continuous learning and professional development
          </p>
        </div>

        {/* In Progress — Featured */}
        {inProgress.length > 0 && (
          <div className="mb-10">
            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold tracking-wider text-primary-600 uppercase dark:text-primary-400">
              <RiTimeLine className="h-4 w-4" />
              In Progress
            </h3>
            {inProgress.map((cert, index) => {
              if (cert.status !== 'in-progress') return null;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden rounded-xl border-2 border-primary-200 bg-white
                             p-6 shadow-sm sm:p-8
                             dark:border-primary-700 dark:bg-gray-800"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <RiAwardLine className="h-5 w-5 text-primary-500 dark:text-primary-400" />
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {cert.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      Expected: {cert.expectedCompletion}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">
                        Progress
                      </span>
                      <span className="font-semibold text-primary-600 dark:text-primary-400">
                        {cert.progress}%
                      </span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${cert.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-primary-400 to-primary-600 dark:from-primary-500 dark:to-primary-700"
                      />
                    </div>
                  </div>

                  {/* Note */}
                  <p className="mb-4 text-sm text-gray-500 italic dark:text-gray-400">
                    &ldquo;{cert.note}&rdquo;
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700
                                   dark:bg-primary-900/30 dark:text-primary-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Completed */}
        {completed.length > 0 && (
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold tracking-wider text-green-600 uppercase dark:text-green-400">
              <RiCheckboxCircleFill className="h-4 w-4" />
              Completed
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {completed.map((cert, index) => {
                if (cert.status !== 'completed') return null;
                return (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-xl border border-gray-200 bg-white p-6
                               transition-shadow duration-300 hover:shadow-md
                               dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <div className="flex items-start gap-3">
                        <RiCheckboxCircleFill className="mt-0.5 h-5 w-5 shrink-0 text-green-500 dark:text-green-400" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                        {cert.year}
                      </span>
                    </div>
                    <div className="ml-8 flex flex-wrap gap-2">
                      {cert.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600
                                     dark:bg-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
