import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine, RiDownload2Line, RiArrowRightLine } from 'react-icons/ri';
import { ownerInfo, heroRoles, contactInfo } from '../data/portfolioData';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* ── Typewriter Effect ── */
  const typeSpeed = isDeleting ? 30 : 60;

  const tick = useCallback(() => {
    const fullText = heroRoles[roleIndex];

    if (!isDeleting) {
      setCurrentRole(fullText.substring(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);

      if (charIndex + 1 === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      setCurrentRole(fullText.substring(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);

      if (charIndex - 1 === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % heroRoles.length);
      }
    }
  }, [charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    const timer = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timer);
  }, [tick, typeSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  } as const;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Dot pattern background */}
      <div className="dot-pattern absolute inset-0 -z-10" />

      {/* Gradient orbs */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-400/5" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary-600/10 blur-3xl dark:bg-primary-500/5" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-24 pb-12 lg:grid-cols-2">
        {/* Left: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-2 text-sm font-medium tracking-wider text-primary-500 uppercase dark:text-primary-400"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            {ownerInfo.name}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mb-6 h-8 text-lg font-medium text-gray-600 dark:text-gray-300 sm:text-xl"
          >
            <span>{currentRole}</span>
            <span className="typewriter-cursor" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mb-8 max-w-lg text-base leading-relaxed text-gray-500 dark:text-gray-400"
          >
            {ownerInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector('#projects')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2 rounded-xl bg-primary-500 px-6 py-3
                         text-sm font-semibold text-white shadow-lg shadow-primary-500/25
                         transition-all duration-200 hover:bg-primary-600 hover:shadow-xl
                         hover:shadow-primary-500/30 dark:bg-primary-600 dark:hover:bg-primary-500"
            >
              View my work
              <RiArrowRightLine className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/TDS DE SILVA associate v1.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white
                         px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-200
                         hover:border-gray-400 hover:bg-gray-50
                         dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300
                         dark:hover:border-gray-500 dark:hover:bg-gray-700"
            >
              <RiDownload2Line />
              Download CV
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-4">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full
                         bg-gray-100 text-gray-600 transition-all duration-200
                         hover:bg-gray-200 hover:text-gray-900
                         dark:bg-gray-800 dark:text-gray-400
                         dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <RiGithubFill className="h-5 w-5" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full
                         bg-gray-100 text-gray-600 transition-all duration-200
                         hover:bg-gray-200 hover:text-gray-900
                         dark:bg-gray-800 dark:text-gray-400
                         dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <RiLinkedinBoxFill className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full
                         bg-gray-100 text-gray-600 transition-all duration-200
                         hover:bg-gray-200 hover:text-gray-900
                         dark:bg-gray-800 dark:text-gray-400
                         dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <RiMailLine className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Abstract geometric shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' as const }}
          className="hidden justify-center lg:flex"
        >
          <div className="relative">
            {/* Main hexagon-ish shape */}
            <div className="relative h-80 w-80">
              {/* Rotating ring */}
              <div className="absolute inset-0 animate-spin rounded-full border-2 border-dashed border-primary-300/40 dark:border-primary-500/30"
                   style={{ animationDuration: '20s' }} />

              {/* Gradient blob */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-primary-400 via-primary-500 to-primary-700 opacity-90 shadow-2xl shadow-primary-500/30 dark:from-primary-500 dark:via-primary-600 dark:to-primary-800 dark:shadow-primary-600/20">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent to-white/20 dark:to-white/10" />

                {/* Initials */}
                <div className="flex h-full items-center justify-center">
                  <span className="text-7xl font-black tracking-tighter text-white/90 select-none">
                    DS
                  </span>
                </div>
              </div>

              {/* Floating dots */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' as const }}
                className="absolute -top-4 right-8 h-6 w-6 rounded-full bg-primary-400/60 dark:bg-primary-300/40"
              />
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' as const }}
                className="absolute -bottom-4 left-8 h-4 w-4 rounded-full bg-primary-500/50 dark:bg-primary-400/30"
              />
              <motion.div
                animate={{ x: [-6, 6, -6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' as const }}
                className="absolute top-1/2 -right-6 h-3 w-3 rounded-full bg-primary-300/70 dark:bg-primary-400/40"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
