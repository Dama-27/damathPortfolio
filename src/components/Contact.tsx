import { useState, type FormEvent } from 'react';
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiSendPlaneFill,
  RiCheckLine,
  RiErrorWarningLine,
} from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import { ownerInfo, contactInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const subjectOptions = [
  'Job Opportunity',
  'Collaboration',
  'General',
] as const;

export default function Contact() {
  const sectionRef = useScrollReveal<HTMLElement>();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: subjectOptions[0] as string,
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    // Mailto fallback
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      `[Portfolio] ${formData.subject}: From ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: subjectOptions[0], message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 500);
  };

  const contactDetails = [
    {
      icon: <RiMailLine className="h-5 w-5" />,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: <RiPhoneLine className="h-5 w-5" />,
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
    },
    {
      icon: <RiMapPinLine className="h-5 w-5" />,
      label: 'Location',
      value: contactInfo.location,
    },
    {
      icon: <RiLinkedinBoxFill className="h-5 w-5" />,
      label: 'LinkedIn',
      value: 'Damath De Silva',
      href: contactInfo.linkedin,
      external: true,
    },
    {
      icon: <RiGithubFill className="h-5 w-5" />,
      label: 'GitHub',
      value: 'Dama-27',
      href: contactInfo.github,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="scroll-reveal bg-gray-50 py-20 px-6 dark:bg-gray-900/50"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-primary-500 dark:bg-primary-400" />
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Let&apos;s connect and create something great
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left column: info */}
          <div>
            <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {ownerInfo.contactBlurb}
            </p>

            <div className="space-y-4">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg
                                 bg-primary-50 text-primary-600
                                 dark:bg-primary-900/30 dark:text-primary-400">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase dark:text-gray-500">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.external ? '_blank' : undefined}
                        rel={detail.external ? 'noopener noreferrer' : undefined}
                        className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: form */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-700 dark:bg-gray-800">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-gray-900
                             outline-none transition-colors duration-200
                             focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                             dark:bg-gray-900 dark:text-gray-100
                             ${errors.name ? 'border-red-400 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <RiErrorWarningLine className="h-3 w-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-gray-900
                             outline-none transition-colors duration-200
                             focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                             dark:bg-gray-900 dark:text-gray-100
                             ${errors.email ? 'border-red-400 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <RiErrorWarningLine className="h-3 w-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm
                             text-gray-900 outline-none transition-colors duration-200
                             focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                             dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
                >
                  {subjectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full resize-none rounded-lg border bg-white px-4 py-2.5 text-sm
                             text-gray-900 outline-none transition-colors duration-200
                             focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                             dark:bg-gray-900 dark:text-gray-100
                             ${errors.message ? 'border-red-400 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  placeholder="Tell me about your project or opportunity..."
                />
                {errors.message && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-500">
                    <RiErrorWarningLine className="h-3 w-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl
                           bg-primary-500 px-6 py-3 text-sm font-semibold text-white
                           shadow-lg shadow-primary-500/25 transition-all duration-200
                           hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/30
                           disabled:cursor-not-allowed disabled:opacity-60
                           dark:bg-primary-600 dark:hover:bg-primary-500"
              >
                {status === 'sending' ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <RiSendPlaneFill className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Toast notification */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm
                             text-green-700 dark:bg-green-900/30 dark:text-green-400"
                >
                  <RiCheckLine className="h-4 w-4 shrink-0" />
                  Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm
                             text-red-700 dark:bg-red-900/30 dark:text-red-400"
                >
                  <RiErrorWarningLine className="h-4 w-4 shrink-0" />
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
