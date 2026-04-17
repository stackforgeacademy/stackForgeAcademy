import { motion } from 'motion/react';
import { Code, Layers, Share2, ShieldCheck, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: <Code className="text-white" />,
    title: 'Full Stack Mastery',
    desc: 'Learn MERN stack with modern architecture, clean coding practices, and real-world AI integration in production-ready apps.',
    color: 'bg-green-500/10 border-green-500/20'
  },
  {
    icon: <Layers className="text-white" />,
    title: 'DSA & Algorithms',
    desc: 'Master problem solving with structured patterns, optimized logic building, and real interview-level coding challenges.',
    color: 'bg-amber-500/10 border-amber-500/20'
  },
  {
    icon: <Share2 className="text-white" />,
    title: 'System Design',
    desc: 'Design real-world systems — chat apps, booking platforms, and scalable APIs that handle real users at scale.',
    color: 'bg-purple-500/10 border-purple-500/20'
  },
  {
    icon: <ShieldCheck className="text-white" />,
    title: 'Real-world Deployment',
    desc: 'Deploy applications using Docker, cloud services, and CI/CD pipelines for reliable and production-ready software delivery.',
    color: 'bg-rose-500/10 border-rose-500/20'
  },
  {
    icon: <Sparkles className="text-white" />,
    title: 'Generative AI',
    desc: 'Integrate LLMs, build AI-powered features, and ship production apps using OpenAI, LangChain, and modern GenAI tooling.',
    color: 'bg-cyan-500/10 border-cyan-500/20'
  }
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-[clamp(30px,5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-[var(--text-contrast)]">Why Choose StackForge?</h2>
          <p className="text-slate-400 text-[15px] mt-3 max-w-[500px] mx-auto">We don't just teach coding; we build engineers who can solve complex problems at scale.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-border-indigo rounded-2xl p-7 bg-bg-card relative overflow-hidden shadow-sm flex flex-col"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-bg-card2 border border-white/10 shrink-0">
                {reason.icon}
              </div>
              <h3 className="text-base font-bold mb-2 text-[var(--text-contrast)]">{reason.title}</h3>
              <p className="text-[13px] text-slate-400 leading-[1.65] flex-1">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
