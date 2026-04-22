import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState, type TransitionEvent } from 'react';

const MENTORS = [
  {
    name: 'Arjun Mehta',
    role: 'Senior Software Engineer',
    company: 'Google',
    companyLogo: 'https://logo.clearbit.com/google.com',
    image: 'https://picsum.photos/seed/mentor_arjun/400/400',
    linkedin: 'https://linkedin.com',
    description:
      'Expert in building large-scale distributed systems and cloud-native applications. Passionate about mentoring the next generation of engineers.',
  },
  {
    name: 'Priya Sharma',
    role: 'Lead Frontend Engineer',
    company: 'Meta',
    companyLogo: 'https://logo.clearbit.com/meta.com',
    image: 'https://picsum.photos/seed/mentor_priya/400/400',
    linkedin: 'https://linkedin.com',
    description:
      'Specializes in creating highly performant and accessible user interfaces. Core contributor to several popular open-source React libraries.',
  },
  {
    name: 'Rohan Gupta',
    role: 'Staff Engineer',
    company: 'Netflix',
    companyLogo: 'https://logo.clearbit.com/netflix.com',
    image: 'https://picsum.photos/seed/mentor_rohan/400/400',
    linkedin: 'https://linkedin.com',
    description:
      'Focuses on backend performance optimization and real-time data processing. Experienced in scaling infrastructure for millions of users.',
  },
  {
    name: 'Ananya Iyer',
    role: 'Principal Architect',
    company: 'Amazon',
    companyLogo: 'https://logo.clearbit.com/amazon.com',
    image: 'https://picsum.photos/seed/mentor_ananya/400/400',
    linkedin: 'https://linkedin.com',
    description:
      'Cloud-native specialist with deep expertise in serverless architectures. Dedicated to building resilient and highly available global systems.',
  },
  {
    name: 'Vikram Singh',
    role: 'Senior DevOps Engineer',
    company: 'Atlassian',
    companyLogo: 'https://logo.clearbit.com/atlassian.com',
    image: 'https://picsum.photos/seed/mentor_vikram/400/400',
    linkedin: 'https://linkedin.com',
    description:
      'DevOps veteran focused on developer productivity and automation. Expert in implementing robust CI/CD pipelines for enterprise teams.',
  },
];

type MentorProfile = (typeof MENTORS)[number];

function MentorCard({ mentor }: { mentor: MentorProfile }) {
  return (
    <article className="h-full flex flex-col rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(11,22,38,0.98),rgba(8,16,28,0.96))] p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_20px_45px_rgba(2,6,23,0.38)]">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="h-16 w-16 rounded-[18px] border border-white/8 object-cover shadow-[0_10px_30px_rgba(15,23,42,0.22)]"
            referrerPolicy="no-referrer"
          />
          <div>
            <h3 className="text-[28px] font-black tracking-tight text-white sm:text-[30px] md:text-[22px] lg:text-[26px]">
              {mentor.name}
            </h3>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-400/90 sm:text-[11px]">
              {mentor.role}
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">at</span>
              <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-white">{mentor.company}</span>
            </div>
          </div>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] p-2">
          <img
            src={mentor.companyLogo}
            alt={mentor.company}
            className="h-full w-full object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).parentElement!.style.display = 'none';
            }}
          />
        </div>
      </div>

      <p className="flex-1 line-clamp-4 text-[15px] font-medium leading-[1.7] text-slate-400">
        {mentor.description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-white/6 pt-6">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.45)]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Active Mentor</span>
        </div>

        <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.04] p-1">
          <img
            src={mentor.companyLogo}
            alt={mentor.company}
            className="h-full w-full object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).parentElement!.style.display = 'none';
            }}
          />
        </div>
      </div>
    </article>
  );
}

export default function Mentors() {
  const [index, setIndex] = useState(3);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1100) setItemsPerPage(2);
      else if (window.innerWidth < 1440) setItemsPerPage(3);
      else setItemsPerPage(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsTransitionEnabled(false);
    setIsAnimating(false);
    setIndex(itemsPerPage);
  }, [itemsPerPage]);

  useEffect(() => {
    if (isTransitionEnabled) return;

    const frame = requestAnimationFrame(() => {
      setIsTransitionEnabled(true);
      setIsAnimating(false);
    });

    return () => cancelAnimationFrame(frame);
  }, [isTransitionEnabled]);

  useEffect(() => {
    const updateSlideWidth = () => {
      const firstSlide = viewportRef.current?.querySelector<HTMLElement>('[data-carousel-item]');
      if (!firstSlide) return;
      setSlideWidth(firstSlide.getBoundingClientRect().width);
    };

    updateSlideWidth();

    const resizeObserver =
      typeof ResizeObserver !== 'undefined' && viewportRef.current
        ? new ResizeObserver(updateSlideWidth)
        : null;

    if (resizeObserver && viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    window.addEventListener('resize', updateSlideWidth);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateSlideWidth);
    };
  }, [itemsPerPage]);

  const loopedMentors = [
    ...MENTORS.slice(-itemsPerPage),
    ...MENTORS,
    ...MENTORS.slice(0, itemsPerPage),
  ];

  const next = () => {
    if (!isTransitionEnabled || isAnimating || slideWidth === 0) return;
    setIsAnimating(true);
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (!isTransitionEnabled || isAnimating || slideWidth === 0) return;
    setIsAnimating(true);
    setIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    if (index <= 0) {
      setIsTransitionEnabled(false);
      setIndex(MENTORS.length);
      return;
    }

    if (index >= MENTORS.length + itemsPerPage) {
      setIsTransitionEnabled(false);
      setIndex(itemsPerPage);
      return;
    }

    setIsAnimating(false);
  };

  return (
    <section className="relative overflow-hidden bg-bg-deep/30 py-24">
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="mb-12 max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(32px,5vw,52px)] font-black tracking-tight text-white"
          >
            Mentorship by <span className="text-blue-500 whitespace-nowrap">Active Engineers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-[15px] font-medium text-slate-400 sm:text-lg"
          >
            Skip the academics. Learn the exact patterns and production standards used daily at the world's most innovative tech companies.
          </motion.p>
        </div>

        <div className="sm:hidden">
          <div className="-mx-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex snap-x snap-mandatory">
              {MENTORS.map((mentor, i) => (
                <div key={`${mentor.name}-mobile-${i}`} className="w-screen flex-shrink-0 snap-center px-4">
                  <MentorCard mentor={mentor} />
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Swipe Sideways To Explore
          </p>
        </div>

        <div className="relative hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(12,21,37,0.92),rgba(7,16,30,0.88))] p-3 shadow-[0_28px_70px_rgba(2,6,23,0.32)] sm:block sm:p-4 lg:p-5">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-gradient-to-r from-bg-main via-bg-main/70 to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-gradient-to-l from-bg-main via-bg-main/70 to-transparent sm:block" />

          <div ref={viewportRef} className="overflow-hidden rounded-[24px] px-1 sm:px-2 lg:px-3">
            <div
              className="flex ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                transform: slideWidth ? `translate3d(-${index * slideWidth}px, 0, 0)` : 'translate3d(0, 0, 0)',
                transition:
                  !isTransitionEnabled || slideWidth === 0
                    ? 'none'
                    : 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {loopedMentors.map((mentor, i) => (
                <div
                  key={`${mentor.name}-${i}`}
                  data-carousel-item
                  className="shrink-0 px-1.5 sm:px-2"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <MentorCard mentor={mentor} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-between gap-4 px-1 sm:px-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Meet The Mentors
            </p>

            <div className="flex justify-center gap-3">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-[var(--text-main)] transition-all hover:border-indigo-500/50 hover:bg-indigo-500/20"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-[var(--text-main)] transition-all hover:border-indigo-500/50 hover:bg-indigo-500/20"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
