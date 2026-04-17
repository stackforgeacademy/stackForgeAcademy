import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: "Is this just another course with pre-recorded videos and zero help when I'm stuck?",
    a: "No. We've seen the frustration of being stuck on a bug for days. At StackForge, we provide 24/7 real-time doubt support. If you hit a wall at 2 AM, a TA jumps on a call with you within 15 minutes to unblock you. We don't just finish a syllabus; we ensure you never stop moving."
  },
  {
    q: "Are the mentors actually senior engineers, or just recent graduates from previous batches?",
    a: "This is a major industry problem. Unlike other platforms that hire their own students as 'mentors,' every mentor at StackForge is a Senior or Lead Engineer from MAANG or top-tier product startups with at least 5 years of production experience. You learn from people who have actually built what they're teaching."
  },
  {
    q: "I'm working a 9-5. Is the pace so fast that I'll burn out and quit in a month?",
    a: "We understand burnout. Our curriculum is modular and mastery-based. While we have a structured schedule, you can pause or revisit modules without penalty. We focus on deep understanding rather than rushing through topics just to meet a deadline."
  },
  {
    q: "Is the 'Job Guarantee' real, or is it hidden behind 50 pages of fine print?",
    a: "We don't do marketing gimmicks. We offer a transparent Placement Assurance. If you complete the projects and pass our internal quality bar, we provide direct referrals to our 200+ partner companies. We don't just send you LinkedIn links; we get your resume on the right desks."
  },
  {
    q: "Will I actually build something real, or just another 'To-Do List' app?",
    a: "Recruiters are tired of generic portfolios. You will build production-grade systems: a real-time collaborative editor using WebSockets, a high-frequency trading dashboard with D3.js, and a scalable microservices-based engine. These are projects that actually get you noticed."
  },
  {
    q: "I'm from a non-CS background. Will I actually be able to keep up?",
    a: "Absolutely. 35% of our successful alumni come from non-tech backgrounds (Arts, Commerce, MBA). We start from absolute zero-one foundations. We don't assume you know what a 'pointer' or 'middleware' is—we build that intuition from the ground up."
  },
  {
    q: "How is this different from free resources like YouTube or The Odin Project?",
    a: "Free resources are great for information, but they lack three things: Structure, Accountability, and Referrals. StackForge provides a curated path, a peer cohort that keeps you going when things get tough, and a direct pipeline to hiring managers that YouTube simply can't offer."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-[11px] tracking-[0.14em] uppercase text-indigo-500 font-semibold mb-3">FAQ</div>
          <h2 className="text-[clamp(30px,5vw,48px)] font-extrabold leading-[1.1] tracking-tight">Got <span className="text-blue-600">Questions?</span></h2>
        </div>
        <div className="max-w-[700px] mx-auto flex flex-col gap-2.5">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-bg-card border rounded-xl overflow-hidden transition-colors ${openIndex === i ? 'border-indigo-500/40' : 'border-border-indigo'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full bg-none border-none text-[var(--text-main)] font-medium text-left p-5 px-6 flex justify-between items-center cursor-pointer gap-4"
              >
                <span className="text-[15px]">{faq.q}</span>
                <Plus 
                  size={20} 
                  className={`text-slate-400 shrink-0 transition-transform duration-250 ${openIndex === i ? 'rotate-45 text-blue-600' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
