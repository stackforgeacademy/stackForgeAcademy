import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 text-[var(--text-main)] overflow-hidden relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-bg-card rounded-3xl p-8 md:p-16 border border-white/5 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading tracking-tight text-[var(--text-contrast)]">From Zero to Offer Letter</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                A structured, competitive plan — one coherent journey from foundations to offer-ready engineer.
              </p>
              <ul className="space-y-4 mb-8">
                {["8 Months Intensive Training", "Live Mentor-Led Sessions", "Real-world Project Portfolio"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-blue-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-bg-card2 text-[var(--text-main)] p-8 rounded-2xl shadow-xl border border-white/5">
              <div className="mb-6">
                <div className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-2">Full Program</div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-slate-400 line-through font-medium">₹1,25,000</span>
                    <span className="bg-green-500/10 text-green-500 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider border border-green-500/20">Save 32%</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold font-heading tracking-tighter text-[var(--text-contrast)]">₹85,000</span>
                  </div>
                  <div className="mt-3 p-4 bg-orange-500/5 rounded-xl border border-orange-500/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-orange-500 text-[9px] font-black text-white px-2 py-0.5 rounded-bl-lg uppercase tracking-widest">Limited Offer</div>
                    <div className="text-[11px] text-orange-500 uppercase tracking-wider font-bold mt-1.5 mb-0.5">Easy EMI Option</div>
                    <div className="space-y-2">
                      <p className="text-sm text-slate-300 font-medium leading-tight">
                        Pay <span className="text-[var(--text-contrast)] font-bold text-base">₹10,625/mo</span> for 7 months.
                      </p>
                      <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[11px] font-bold">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
                        8th Month is on StackForge
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[1px] w-full bg-white/10 my-6" />
              <div className="space-y-4">
                <a
                  href="#apply"
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/20 flex items-center justify-center"
                >
                  Apply for Selection
                </a>
                <div className="space-y-3">
                  <p className="text-center text-[11px] text-slate-400 leading-relaxed italic px-2">
                    "We're not here just to collect tuition. We're here to build engineers. Covering your final month is our way of putting skin in the game—proving we're as committed to your offer letter as you are."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
