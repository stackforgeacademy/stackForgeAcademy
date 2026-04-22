import { motion } from 'motion/react';

const steps = [
  {
    months: '1–2',
    title: 'Programming Foundations + DSA Basics',
    desc: 'Solidify your CS fundamentals, JavaScript/Python, and crack easy–medium LeetCode patterns with weekly contests.',
    bullets: ['Arrays, strings & hashing', 'Recursion & backtracking', 'Complexity analysis (Big-O)', 'OOP & design principles', 'Python / Java core', 'Weekly LeetCode contests']
  },
  {
    months: '3–4',
    title: 'Core DSA Patterns + Full Stack Development',
    desc: 'Build three production projects — a portfolio app, an e-commerce platform, and an AI-powered SaaS tool.',
    bullets: ['Sliding window, two pointers', 'Trees, graphs, BFS / DFS', 'Dynamic programming', 'Heaps, tries, segment trees', 'MERN stack + GenAI integration', '3 production project builds']
  },
  {
    months: '5–6',
    title: 'Advanced DSA + System Design',
    desc: 'Crack hard-level problems, design distributed systems, and complete your capstone project for your portfolio.',
    bullets: ['System design foundations', 'Databases & SQL mastery', 'REST APIs & microservices', 'Distributed systems basics', 'HLD & LLD deep dives', 'Capstone project build']
  },
  {
    months: '7–8',
    title: 'Interview Sprint + Placement Drive',
    desc: '10+ mock rounds, resume blitz, referrals to 200+ companies, and personalised offer negotiation coaching.',
    bullets: ['Mock interviews with mentors', 'MAANG company-specific prep', 'Resume & GitHub review', 'Scalability & reliability patterns', 'Offer evaluation & negotiation', 'Referrals to 200+ companies']
  }
];

export default function Roadmap() {
  return (
    <section className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-15">
          {/* <div className="text-[11px] tracking-[0.14em] uppercase text-indigo-500 font-semibold mb-3">8-Month Roadmap</div> */}
          <h2 className="text-[clamp(30px,5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-[var(--text-contrast)]">From Zero to <span className="text-blue-600">Offer Letter</span></h2>
          <p className="text-slate-400 text-[15px] mt-3 max-w-[500px] mx-auto">A structured, competitive plan — one coherent journey from foundations to offer-ready engineer.</p>
        </div>
        <div className="relative max-w-[780px] mx-auto">
          <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-blue-500 to-cyan-500 opacity-20 hidden sm:block" />
          <div className="flex flex-col gap-11">
            {steps.map((step, i) => (
              <motion.div
                key={step.months}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col sm:flex-row gap-7 items-start relative"
              >
                <div className="shrink-0 w-18 h-18 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-[15px] font-extrabold text-white shadow-[0_0_30px_rgba(99,102,241,0.25)] z-10 mx-auto sm:mx-0">
                  {step.months}
                </div>
                <div className="flex-1 bg-bg-card border border-border-indigo rounded-2xl p-6 sm:p-7 shadow-sm">
                  <div className="text-[11px] tracking-[0.12em] text-blue-bright uppercase font-semibold mb-1">Month {step.months}</div>
                  <h3 className="text-lg font-bold mb-3.5 text-[var(--text-contrast)]">{step.title}</h3>
                  <p className="text-[13px] text-slate-400 leading-[1.65] mb-3.5">{step.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="text-[12.5px] text-slate-400 flex items-start gap-1.75">
                        <span className="text-blue-600 text-sm leading-[1.4] shrink-0">›</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
