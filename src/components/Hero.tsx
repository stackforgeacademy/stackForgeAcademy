import { useState } from 'react';
import { motion } from 'motion/react';
import { Zap, Download } from 'lucide-react';
import { trackPixelEvent } from '../lib/utils';
import CurriculumModal from './CurriculumModal';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <CurriculumModal onClose={() => setShowModal(false)} />}

      <section className="relative sm:min-h-screen flex flex-col items-center sm:justify-center text-center px-5 sm:px-6 pt-20 sm:pt-32 pb-4 sm:pb-10 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.22)_0%,rgba(59,130,246,0.1)_40%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(28px,5vw,68px)] font-extrabold leading-[1.12] tracking-tight max-w-[900px] text-[var(--text-contrast)]"
        >
          <span className="block">Get Hired as a</span>
          <span className="block text-blue-600">Software Engineer</span>
          <span className="block">in Top-Tech Companies.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-3 sm:mt-4 text-[clamp(12px,1.6vw,17px)] text-slate-400 max-w-[580px]"
        >
          India's only program to help you crack <strong className="text-[var(--text-contrast)]">Google, Amazon & Meta</strong>-level interviews in <strong className="text-[var(--text-contrast)]">8 months</strong> — verified by active SWE's at <strong className="text-[var(--text-contrast)]">Google & Atlassian<span className="relative inline-block">.<span className="absolute top-0 left-0 text-[10px] opacity-60 text-orange-500 font-bold">#</span></span></strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex gap-2 flex-wrap justify-center mt-4 sm:mt-5"
        >
          {['Full Stack Dev with GenAI', 'DSA', 'System Design', 'Deployment'].map((label) => (
            <span
              key={label}
              className="border rounded-full px-3 sm:px-4 py-1 text-[11px] sm:text-[12px] font-semibold backdrop-blur-md transition-transform hover:scale-105 cursor-default text-cyan-400 border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
            >
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center mt-6 sm:mt-9"
        >
          <a
            href="#apply"
            onClick={() => trackPixelEvent('InitiateCheckout')}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#2f3080] to-[#2a65c5] text-white px-7 py-3 sm:py-3.5 rounded-xl text-[14px] sm:text-[15px] font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(99,102,241,0.55)] shadow-[0_4px_30px_rgba(99,102,241,0.4)]"
          >
            <Zap size={15} strokeWidth={2.5} />
            Apply for Selection
          </a>
          <button
            onClick={() => {
              trackPixelEvent('Download');
              setShowModal(true);
            }}
            className="inline-flex items-center justify-center gap-2 bg-transparent text-slate-400 border border-white/75 px-6 py-3 sm:py-3.5 rounded-xl text-[13px] sm:text-sm font-medium transition-colors hover:border-blue-600 hover:text-white"
          >
            <Download size={15} strokeWidth={2} />
            Download Curriculum
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid grid-cols-2 gap-x-8 gap-y-4 sm:gap-x-12 sm:gap-y-0 md:flex md:flex-row md:gap-16 mt-8 sm:mt-12 max-w-fit mx-auto"
        >
          {[
            { num: '82+', label: 'DSA Patterns' },
            { num: '₹18L', label: 'Avg. Package', color: 'text-amber-500' },
            { num: 'IIT', label: 'Standard Curriculum' },
            { num: '100%*', label: 'scholarship (UPTO*)' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-[clamp(20px,3vw,36px)] font-extrabold ${stat.color || 'text-blue-bright'}`}>
                {stat.num.includes('*') ? (
                  <>
                    {stat.num.replace('*', '')}
                    <span className="text-[0.5em] align-top ml-0.5 font-bold">*</span>
                  </>
                ) : stat.num}
              </div>
              <div className="text-[10px] sm:text-[12px] text-slate-400 mt-0.5 tracking-widest uppercase">
                {stat.label.includes('*') ? (
                  <>
                    {stat.label.split('*').map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && <span className="text-[0.7em] align-top">*</span>}
                      </span>
                    ))}
                  </>
                ) : stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
