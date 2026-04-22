import { motion } from 'motion/react';
import { ClipboardList, Brain, UserCheck, Video, Trophy } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: <ClipboardList size={28} className="text-blue-600" />,
    title: 'Apply Here',
    desc: 'Submit your profile and background. We look for intent and basic technical exposure.'
  },
  {
    num: '02',
    icon: <Brain size={28} className="text-blue-600" />,
    title: 'Aptitude Test',
    desc: 'A 30-minute challenge focused on logical reasoning, patterns, and problem-solving speed.'
  },
  {
    num: '03',
    icon: <UserCheck size={28} className="text-blue-600" />,
    title: 'Behavioral Test',
    desc: 'We assess your grit, coachability, and alignment with our culture.'
  },
  {
    num: '04',
    icon: <Video size={28} className="text-blue-600" />,
    title: 'Face to Face Interview',
    desc: 'A personal 1-on-1 session with our lead mentors to discuss your goals, background.'
  },
  {
    num: '05',
    icon: <Trophy size={28} className="text-blue-600" />,
    title: 'Final Decision',
    desc: 'Selected candidates receive an invite within 48 hours. Only the top 5% make the cut.'
  }
];

export default function AdmissionProcess() {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          {/* <div className="text-[11px] tracking-[0.14em] uppercase text-indigo-500 font-semibold mb-3">// Selection Process</div> */}
          <h2 className="text-[clamp(30px,5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-[var(--text-contrast)]">Merit-Based <span className="text-blue-600">Admission.</span></h2>
          <p className="text-slate-400 text-[15px] mt-4 max-w-[600px] mx-auto font-medium">
            Entry is strictly competitive. <span className="text-[var(--text-contrast)]">Paying the fee does not guarantee a seat.</span> You must demonstrate the grit and logic required to thrive in our elite cohort.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 opacity-20 hidden xl:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                {i === 0 ? (
                  <a href="#apply" className="block">
                    <div className="w-20 h-20 rounded-full mx-auto mb-5 bg-bg-card border-2 border-blue-500/50 flex flex-col items-center justify-center gap-0.5 transition-all group-hover:border-blue-500 group-hover:shadow-[0_0_28px_rgba(37,99,235,0.25)] relative">
                      <div className="text-[10px] font-bold text-slate-400 tracking-widest">{step.num}</div>
                      {step.icon}
                    </div>
                    <h4 className="text-[15px] font-bold mb-2 text-blue-500 underline underline-offset-4 decoration-blue-500/40 group-hover:decoration-blue-500 transition-all">{step.title}</h4>
                  </a>
                ) : (
                  <>
                    <div className="w-20 h-20 rounded-full mx-auto mb-5 bg-bg-card border-2 border-white/12 flex flex-col items-center justify-center gap-0.5 transition-all group-hover:border-blue-500/50 group-hover:shadow-[0_0_24px_rgba(37,99,235,0.1)] relative">
                      <div className="text-[10px] font-bold text-slate-400 tracking-widest">{step.num}</div>
                      {step.icon}
                    </div>
                    <h4 className="text-[15px] font-bold mb-2 text-(--text-contrast)">{step.title}</h4>
                  </>
                )}
                <p className="text-[13px] text-slate-400 leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
                
                {/* Mobile Connector */}
                {i < steps.length - 1 && (
                  <div className="w-0.5 h-9 bg-gradient-to-b from-indigo-500 to-blue-500 opacity-45 mx-auto my-3 xl:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
