import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailLine,
  RiArrowUpLine,
} from 'react-icons/ri';
import { contactInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200 bg-white py-10 px-6 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full
                         bg-gray-100 text-gray-500 transition-all duration-200
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
                         bg-gray-100 text-gray-500 transition-all duration-200
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
                         bg-gray-100 text-gray-500 transition-all duration-200
                         hover:bg-gray-200 hover:text-gray-900
                         dark:bg-gray-800 dark:text-gray-400
                         dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <RiMailLine className="h-5 w-5" />
            </a>
          </div>

          {/* Footer text */}
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Damath De Silva · Built with React + AWS · {new Date().getFullYear()}
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 text-sm font-medium text-gray-400
                       transition-colors duration-200 hover:text-primary-500
                       dark:text-gray-500 dark:hover:text-primary-400"
          >
            <RiArrowUpLine className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
