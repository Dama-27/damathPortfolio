import {
  RiServerLine,
  RiCodeBoxLine,
  RiCpuLine,
  RiBrainLine,
  RiGitBranchLine,
  RiFileTextLine,
} from 'react-icons/ri';
import { motion } from 'framer-motion';
import { offers } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { JSX } from 'react';

const iconMap: Record<string, JSX.Element> = {
  RiServerLine: <RiServerLine className="h-7 w-7" />,
  RiCodeBoxLine: <RiCodeBoxLine className="h-7 w-7" />,
  RiCpuLine: <RiCpuLine className="h-7 w-7" />,
  RiBrainLine: <RiBrainLine className="h-7 w-7" />,
  RiGitBranchLine: <RiGitBranchLine className="h-7 w-7" />,
  RiFileTextLine: <RiFileTextLine className="h-7 w-7" />,
};

export default function WhatIOffer() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="offers"
      ref={sectionRef}
      className="scroll-reveal bg-gray-50 py-20 px-6 dark:bg-gray-900/50"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            What I Offer
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-primary-500 dark:bg-primary-400" />
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Services and expertise I bring to the table
          </p>
        </div>

        {/* Offer cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
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
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl
                             bg-primary-50 text-primary-600 transition-all duration-300
                             group-hover:bg-primary-100 group-hover:scale-110
                             dark:bg-primary-900/30 dark:text-primary-400
                             dark:group-hover:bg-primary-900/50">
                {iconMap[offer.icon]}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {offer.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {offer.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
