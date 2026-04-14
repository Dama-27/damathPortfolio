import { useScrollReveal } from '../hooks/useScrollReveal';
import { ownerInfo } from '../data/portfolioData';

export default function About() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="scroll-reveal py-20 px-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-primary-500 dark:bg-primary-400" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left — bio */}
          <div>
            <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {ownerInfo.bio}
            </p>

            {/* Interest tags */}
            <div className="flex flex-wrap gap-2">
              {ownerInfo.interestTags.map((tag) => (
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

          {/* Right — pull quote */}
          <div className="flex items-center">
            <blockquote className="relative rounded-2xl border-l-4 border-primary-500 bg-gray-50 p-8 dark:border-primary-400 dark:bg-gray-800/50">
              <svg
                className="absolute top-4 right-4 h-10 w-10 text-primary-200 dark:text-primary-800"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <p className="text-xl font-semibold leading-relaxed text-gray-800 italic dark:text-gray-200">
                {ownerInfo.pullQuote}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
