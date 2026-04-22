import { motion } from 'motion/react';

const features = [
  {
    num: '01',
    title: 'Dual-Track Learning',
    desc: 'Full Stack & DSA run simultaneously from Day 1. No more starting DSA from scratch after your bootcamp.'
  },
  {
    num: '02',
    title: 'Pattern-Over-Problems',
    desc: 'Master 85+ core patterns instead of memorizing 175+ problems. Solve any variation with confidence.'
  },
  {
    num: '03',
    title: 'Company Playbooks',
    desc: 'Dedicated interview guides for Google, Amazon, and Meta. Learn their specific patterns and hiring bars.'
  },
  {
    num: '04',
    title: 'ATS Resume & LinkedIn',
    desc: 'Get past the filters with verified templates and 1-on-1 live profile reviews by top recruiters.'
  },
  {
    num: '05',
    title: 'Industry Demo Day',
    desc: 'Present your capstone project to active engineers and hiring partners from top tech firms.'
  },
  {
    num: '06',
    title: 'Production-Ready Stack',
    desc: 'Master interview-efficient Python while deploying real infrastructure with Docker, AWS, and CI/CD.'
  }
];

export default function TenUniqueFeatures() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 mb-4">
              {/* <div className="h-[1px] w-8 bg-blue-500/50" /> */}
              {/* <span className="text-[10px] font-heading tracking-[0.3em] uppercase text-blue-500/80 font-bold">
                System Architecture / Edge Case Handling
              </span> */}
              {/* <div className="h-[1px] w-8 bg-blue-500/50" /> */}
            </div>
            <h2 className="text-[clamp(32px,6vw,52px)] font-heading font-extrabold leading-[1.05] tracking-tight text-[var(--text-contrast)]">
              6 Core Pillars of <br />
              <span className="text-blue-600">Technical Excellence</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Feature 01 - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 bg-bg-card/30 border border-white/5 rounded-2xl p-8 relative group overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <span className="text-xs font-heading font-bold">01</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-[var(--text-contrast)] mb-4">Dual-Track Learning</h3>
              <p className="text-slate-400 text-base leading-relaxed max-w-md">
                Full Stack & DSA run simultaneously from Day 1. No more starting DSA from scratch after your bootcamp. You build and solve in parallel.
              </p>
            </div>
          </motion.div>

          {/* Feature 02 - Medium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-12 md:col-span-4 bg-bg-card/30 border border-white/5 rounded-2xl p-8 relative group"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
              <span className="text-xs font-heading font-bold">02</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-[var(--text-contrast)] mb-3">Pattern-Over-Problems</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Master 85+ core patterns instead of memorizing 175+ problems. Solve any variation with absolute confidence.
            </p>
          </motion.div>

          {/* Feature 03 - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-12 md:col-span-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl p-8 relative group"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-6">
              <span className="text-xs font-heading font-bold">03</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-amber-500 mb-3">Company Playbooks</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Dedicated interview guides for Google, Amazon, and Meta. Learn their specific patterns and hiring bars.
            </p>
          </motion.div>

          {/* Feature 04 - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-12 md:col-span-4 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-8 relative group"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
              <span className="text-xs font-heading font-bold">04</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-indigo-400 mb-3">ATS Resume & LinkedIn</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Get past the filters with verified templates and 1-on-1 live profile reviews by top MAANG recruiters.
            </p>
          </motion.div>

          {/* Feature 05 - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-12 md:col-span-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8 relative group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
              <span className="text-xs font-heading font-bold">05</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-blue-400 mb-3">Industry Demo Day</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Present your capstone project to active engineers and hiring partners from top tech firms.
            </p>
          </motion.div>

          {/* Feature 06 - Full Width Technical */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="col-span-12 bg-bg-card/30 border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-heading font-bold text-blue-400 uppercase tracking-widest mb-6">
                Production Ready
              </div>
              <h3 className="text-3xl font-heading font-bold text-[var(--text-contrast)] mb-4">Production-Ready Stack</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                Master interview-efficient Python while deploying real infrastructure with Docker, AWS, and CI/CD. Graduate with production-ready infrastructure, not just localhost apps.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Docker', color: 'bg-blue-500/10 border-blue-500/20 text-blue-400' },
                  { name: 'AWS', color: 'bg-amber-500/10 border-amber-500/20 text-amber-400' },
                  { name: 'CI/CD', color: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' },
                  { name: 'Python', color: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' }
                ].map(tech => (
                  <div key={tech.name} className={`px-4 py-2 border rounded-lg text-xs font-heading flex items-center justify-center transition-all hover:scale-105 ${tech.color}`}>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
