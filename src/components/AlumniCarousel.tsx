import { useEffect, useRef, useState, type TransitionEvent } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const alumni = [
  {
    image: 'https://picsum.photos/seed/shriram/200/200',
    name: 'Shriram Bhat',
    role: 'SDE III @ PayPal',
    before: 'HCL',
    after: 'PayPal',
    hike: '↑170%',
    linkedin: '#',
    review: 'The DSA patterns taught at StackForge clicked within just a few weeks of joining. Before this, I was struggling with complex graph algorithms and dynamic programming, but the way the mentors break down problems into reusable patterns is truly unique. I was able to clear the technical rounds at PayPal with confidence, something I couldn\'t have imagined a year ago. The curriculum is intense but rewarding, and the support from the community is unparalleled. Got my PayPal offer in month 8 of the program, and the 170% hike has completely changed my financial trajectory.'
  },
  {
    image: 'https://picsum.photos/seed/ananya/200/200',
    name: 'Ananya Sharma',
    role: 'SDE-2 @ Zomato',
    before: 'TCS',
    after: 'Zomato',
    hike: '↑145%',
    linkedin: '#',
    review: 'Moving from a service-based company like TCS to a fast-paced product giant like Zomato seemed like a distant dream. However, the system design module at StackForge was a total game changer for me. It wasn\'t just about learning theory; we built real-world scalable systems that gave me the practical knowledge needed for senior-level interviews. The mentors provide deep insights into how large-scale distributed systems actually work in production. I\'m now working as an SDE-2 at Zomato, and I owe a huge part of this success to the structured learning path provided here.'
  },
  {
    image: 'https://picsum.photos/seed/rahul/200/200',
    name: 'Rahul Verma',
    role: 'SDE @ Razorpay',
    before: 'Wipro',
    after: 'Razorpay',
    hike: '↑190%',
    linkedin: '#',
    review: 'Cracking a top fintech like Razorpay was my ultimate goal, but after three rejections at different stages, I was starting to lose hope. StackForge helped me identify the subtle gaps in my problem-solving approach. The mock interviews with industry experts made all the difference—they provided brutal but necessary feedback that helped me refine my communication and technical skills. The focus on clean code and optimized logic is what sets this program apart. I finally secured an offer from Razorpay, and the journey from Wipro has been nothing short of extraordinary.'
  },
  {
    image: 'https://picsum.photos/seed/arjun/200/200',
    name: 'Arjun Mehta',
    role: 'Senior SDE @ Freshworks',
    before: 'Cognizant',
    after: 'Freshworks',
    hike: '↑155%',
    linkedin: '#',
    review: 'The transition from a legacy service role at Cognizant to a Senior SDE position at Freshworks was only possible due to the deep technical immersion at StackForge. The focus on high-level architecture and scalable backend design was exactly what I needed to level up. The mentors are industry veterans who don\'t just teach code; they teach engineering mindset. I learned how to approach ambiguous problems and break them down into manageable microservices. This program bridged the gap between being a coder and being a true software architect.'
  },
  {
    image: 'https://picsum.photos/seed/kavita/200/200',
    name: 'Kavita Iyer',
    role: 'Backend Eng @ Cred',
    before: 'Infosys',
    after: 'Cred',
    hike: '↑180%',
    linkedin: '#',
    review: 'Joining StackForge was the best career decision I\'ve ever made. As a backend engineer, I often felt my understanding of distributed databases was lacking, but the deep-dive sessions here helped me bridge that gap effectively. The peer cohort kept me accountable throughout the 8 months, and the collaborative environment pushed me to learn faster. We worked on production-grade projects that are now a highlight of my portfolio. I\'ve now transitioned to Cred with a massive 180% hike, and I feel much more confident in my ability to handle complex financial systems.'
  },
  {
    image: 'https://picsum.photos/seed/sameer/200/200',
    name: 'Sameer Deshmukh',
    role: 'SDE-2 @ Ola Electric',
    before: 'Mindtree',
    after: 'Ola Electric',
    hike: '↑135%',
    linkedin: '#',
    review: 'The curriculum at StackForge is genuinely world-class, covering everything from low-level design to advanced data structures in great depth. What I appreciated most was the focus on the "why" behind every concept rather than just the "how". This deep understanding helped me navigate even the toughest interview questions at Ola Electric. The placement support and resume reviews were also top-notch, ensuring I was well-prepared for the big leagues. I went from Mindtree to a core engineering role in the EV space, and the growth has been phenomenal.'
  },
  {
    image: 'https://picsum.photos/seed/tanvi/200/200',
    name: 'Tanvi Kulkarni',
    role: 'Platform Eng @ BrowserStack',
    before: 'LTI',
    after: 'BrowserStack',
    hike: '↑150%',
    linkedin: '#',
    review: 'I finally understood infrastructure and platform engineering end-to-end after joining this program. Before StackForge, my knowledge of cloud-native technologies was fragmented, but the structured modules on Docker, Kubernetes, and CI/CD provided the clarity I needed. The BrowserStack interview felt surprisingly easy because we had already covered much more complex scenarios in our weekly deep-dive sessions. The mentors are always available to clear doubts, and the real-world deployment projects gave me hands-on experience that is hard to find elsewhere. Truly a life-changing experience.'
  },
  {
    image: 'https://picsum.photos/seed/rohan/200/200',
    name: 'Rohan Gupta',
    role: 'SDE @ Nykaa',
    before: 'Capgemini',
    after: 'Nykaa',
    hike: '↑140%',
    linkedin: '#',
    review: 'The transition from Capgemini to a high-growth e-commerce platform like Nykaa was a dream come true. StackForge provided the perfect environment to unlearn old habits and adopt modern engineering practices. The focus on test-driven development and clean architecture was instrumental in my success. I learned how to build resilient systems that can handle millions of requests. The community here is amazing—I made friends who are now working at top startups across the country. If you\'re serious about your engineering career, this is the place to be.'
  },
  {
    image: 'https://picsum.photos/seed/meera/200/200',
    name: 'Meera Reddy',
    role: 'SDE-2 @ Groww',
    before: 'Tech Mahindra',
    after: 'Groww',
    hike: '↑165%',
    linkedin: '#',
    review: 'Cracking Groww was a significant milestone for me. The fintech space is highly competitive, and StackForge gave me the edge I needed. The modules on concurrency and high-performance computing were particularly helpful. I learned how to optimize code for low latency, which is crucial for trading platforms. The mentors are incredibly patient and go out of their way to ensure you understand the core concepts. The journey from Tech Mahindra to Groww has been a steep learning curve, but I felt well-prepared every step of the way thanks to this program.'
  },
  {
    image: 'https://picsum.photos/seed/vikram/200/200',
    name: 'Vikram Singh',
    role: 'SDE @ Postman',
    before: 'Accenture',
    after: 'Postman',
    hike: '↑175%',
    linkedin: '#',
    review: 'Postman is known for its high engineering standards, and StackForge prepared me perfectly for their rigorous interview process. The focus on API design and protocol-level understanding was exactly what I needed. I learned how to build developer-centric tools and scalable platforms. The mock interviews were a simulation of the real thing, which helped me stay calm and focused during the actual rounds. I\'ve seen a 175% jump in my CTC, but more importantly, I\'ve seen a 10x jump in my technical capabilities. This is not just a course; it\'s an engineering transformation.'
  },
  {
    image: 'https://picsum.photos/seed/sneha/200/200',
    name: 'Sneha Kapoor',
    role: 'Backend Eng @ Zerodha',
    before: 'HCL',
    after: 'Zerodha',
    hike: '↑160%',
    linkedin: '#',
    review: 'Zerodha\'s engineering culture is legendary, and I always wanted to be a part of it. StackForge helped me master the fundamentals of systems programming and database internals that Zerodha looks for. The emphasis on simplicity and performance in our projects mirrored the philosophy at Zerodha. I learned how to write efficient, maintainable code that scales. The mentors provided personalized guidance that helped me navigate my specific career challenges. Transitioning from HCL to Zerodha has been the highlight of my career, and I owe it to the solid foundation built here.'
  },
  {
    image: 'https://picsum.photos/seed/aditya/200/200',
    name: 'Aditya Joshi',
    role: 'SDE-2 @ Swiggy',
    before: 'TCS',
    after: 'Swiggy',
    hike: '↑145%',
    linkedin: '#',
    review: 'The scale at Swiggy is massive, and StackForge taught me how to think in terms of that scale. The modules on load balancing, sharding, and message queues were incredibly relevant to the problems I now solve every day. I went from a service-based role at TCS to a core SDE-2 position at Swiggy in just 9 months. The program is demanding, but the results speak for themselves. The focus on building real, deployable systems rather than just solving toy problems is what makes this curriculum so effective. It\'s the best investment I\'ve ever made in myself.'
  }
];

type AlumniProfile = (typeof alumni)[number];

function AlumniCard({ person, className = '' }: { person: AlumniProfile; className?: string }) {
  return (
    <article className={`h-full rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(11,22,38,0.98),rgba(8,16,28,0.96))] p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_20px_45px_rgba(2,6,23,0.38)] ${className}`}>
      <div className="flex items-start justify-between gap-3 pb-4">
        <div className="flex items-center gap-3">
          <img
            src={person.image}
            alt={person.name}
            className="w-11 h-11 rounded-full shrink-0 object-cover border border-white/10 shadow-[0_8px_24px_rgba(15,23,42,0.24)]"
            referrerPolicy="no-referrer"
          />
          <div>
            <div className="text-base font-semibold leading-tight text-[var(--text-contrast)]">{person.name}</div>
            <div className="text-[13px] text-slate-400 mt-1 font-normal">{person.role}</div>
          </div>
        </div>
      </div>

      <div className="mb-5 flex items-center justify-between gap-3 rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-3">
        <div className="flex items-center gap-2 text-[13px]">
          <span className="text-slate-500 font-medium">{person.before}</span>
          <ArrowRight size={12} className="text-slate-400" />
          <span className="text-[var(--text-contrast)] font-bold">{person.after}</span>
        </div>
        <div className="shrink-0 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-[11px] font-bold text-green-400">
          {person.hike} Hike
        </div>
      </div>

      <p className="text-[13px] text-slate-300 leading-[1.8] font-medium">
        "{person.review}"
      </p>
    </article>
  );
}

export default function AlumniCarousel() {
  const [index, setIndex] = useState(3);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
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

  const loopedAlumni = [
    ...alumni.slice(-itemsPerPage),
    ...alumni,
    ...alumni.slice(0, itemsPerPage),
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
      setIndex(alumni.length);
      return;
    }

    if (index >= alumni.length + itemsPerPage) {
      setIsTransitionEnabled(false);
      setIndex(itemsPerPage);
      return;
    }

    setIsAnimating(false);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-transparent via-indigo-500/4 to-transparent overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-[clamp(30px,5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-[var(--text-contrast)]">Our Alumni Work At</h2>
          <p className="text-slate-400 text-[15px] mt-2.5 mx-auto max-w-xl">
            Real engineers, real placements, and real salary jumps from people who made the leap.
          </p>
        </div>

        <div className="sm:hidden">
          <div className="-mx-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex snap-x snap-mandatory">
              {alumni.map((person, i) => (
                <div key={`${person.name}-mobile-${i}`} className="w-screen shrink-0 snap-center px-4">
                  <AlumniCard person={person} />
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Swipe Sideways To Explore
          </p>
        </div>

        <div className="relative hidden sm:block rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(12,21,37,0.92),rgba(7,16,30,0.88))] p-3 sm:p-4 lg:p-5 shadow-[0_28px_70px_rgba(2,6,23,0.32)]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-gradient-to-r from-bg-main via-bg-main/70 to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-gradient-to-l from-bg-main via-bg-main/70 to-transparent sm:block" />

          <div ref={viewportRef} className="overflow-hidden rounded-[24px] px-1 sm:px-2 lg:px-3">
            <div
              className="flex ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                transform: slideWidth ? `translate3d(-${index * slideWidth}px, 0, 0)` : 'translate3d(0, 0, 0)',
                transition: !isTransitionEnabled || slideWidth === 0 ? 'none' : 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {loopedAlumni.map((person, i) => (
                <div
                  key={`${person.name}-${i}`}
                  data-carousel-item
                  className="shrink-0 px-1.5 sm:px-2"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <AlumniCard person={person} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-between gap-4 px-1 sm:px-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Alumni Stories
            </p>

            <div className="flex justify-center gap-3">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/12 bg-white/[0.03] text-[var(--text-main)] flex items-center justify-center transition-all hover:bg-indigo-500/20 hover:border-indigo-500/50 disabled:opacity-25 disabled:cursor-default"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/12 bg-white/[0.03] text-[var(--text-main)] flex items-center justify-center transition-all hover:bg-indigo-500/20 hover:border-indigo-500/50 disabled:opacity-25 disabled:cursor-default"
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
