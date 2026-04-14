import { useEffect, useRef } from 'react';
import { journeyEvents } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

function TimelineEntry({
  event,
  index,
}: {
  event: (typeof journeyEvents)[number];
  index: number;
}) {
  const entryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = entryRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={entryRef}
      className={`${isLeft ? 'scroll-reveal-left' : 'scroll-reveal-right'} relative flex w-full items-start`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Desktop layout: alternating sides */}
      <div
        className={`hidden w-full md:flex ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
      >
        {/* Content */}
        <div className="flex w-5/12 justify-end">
          <div
            className={`w-full max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-sm
                        transition-all duration-300 hover:shadow-md
                        dark:border-gray-700 dark:bg-gray-800 ${isLeft ? 'text-right' : 'text-left'}`}
          >
            <span className="mb-2 inline-block rounded-full bg-primary-500 px-3 py-1 text-xs font-bold text-white dark:bg-primary-600">
              {event.year}
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {event.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {event.description}
            </p>
          </div>
        </div>

        {/* Center line + dot */}
        <div className="flex w-2/12 flex-col items-center">
          <div className="relative flex h-6 w-6 items-center justify-center">
            <div className="absolute h-4 w-4 rounded-full bg-primary-500 dark:bg-primary-400" />
            <div className="absolute h-6 w-6 animate-ping rounded-full bg-primary-400/30 dark:bg-primary-300/20" />
          </div>
          {index < journeyEvents.length - 1 && (
            <div className="h-full w-0.5 bg-gradient-to-b from-primary-300 to-primary-100 dark:from-primary-600 dark:to-primary-900" />
          )}
        </div>

        {/* Spacer */}
        <div className="w-5/12" />
      </div>

      {/* Mobile layout: single column */}
      <div className="flex w-full md:hidden">
        {/* Line + dot */}
        <div className="mr-4 flex flex-col items-center">
          <div className="relative flex h-5 w-5 items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-primary-500 dark:bg-primary-400" />
          </div>
          {index < journeyEvents.length - 1 && (
            <div className="h-full w-0.5 bg-gradient-to-b from-primary-300 to-primary-100 dark:from-primary-600 dark:to-primary-900" />
          )}
        </div>

        {/* Content */}
        <div className="mb-8 flex-1 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <span className="mb-2 inline-block rounded-full bg-primary-500 px-3 py-1 text-xs font-bold text-white dark:bg-primary-600">
            {event.year}
          </span>
          <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
            {event.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Journey() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="scroll-reveal bg-gray-50 py-20 px-6 dark:bg-gray-900/50"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            My Journey
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-primary-500 dark:bg-primary-400" />
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            The milestones that shaped my engineering path
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col">
          {journeyEvents.map((event, index) => (
            <TimelineEntry key={event.year} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
