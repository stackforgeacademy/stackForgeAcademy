import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-deep/80 backdrop-blur-md border-b border-white/5 px-4 sm:px-6 py-3 sm:py-4">
      <div className="max-w-[1280px] mx-auto grid grid-cols-3 items-center">
        {/* Left — Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex flex-col items-start gap-0.5 hover:opacity-90 transition-opacity group shrink-0">
            <img
              src="/logo.png"
              alt="StackForge"
              className="h-6 sm:h-8 w-auto"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                const fallback = (e.target as HTMLImageElement).nextElementSibling as HTMLElement | null;
                if (fallback) { fallback.classList.remove('hidden'); fallback.classList.add('flex'); }
              }}
            />
            <div className="hidden items-baseline">
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-white uppercase italic">
                Stack
                <span className="text-transparent [text-stroke:1px_white] [-webkit-text-stroke:1px_white]">Forge</span>
              </span>
            </div>
            <span className="text-[9px] tracking-[0.2em] uppercase text-slate-500 font-medium">
              Forging India's Elite Developers
            </span>
          </Link>
        </div>

        {/* Center — Badge */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl" />
            <div className="relative inline-flex items-center gap-2.5 rounded-full border border-blue-400/25 bg-[linear-gradient(135deg,rgba(37,99,235,0.22),rgba(99,102,241,0.12))] px-4 py-2 shadow-[0_12px_30px_rgba(37,99,235,0.18)] backdrop-blur-md whitespace-nowrap">
              <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-green-500/12 shrink-0">
                <span className="absolute h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-green-400/60" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-200/70">
                Applications Live
              </span>
              <span className="h-3 w-px bg-blue-400/30" />
              <span className="flex items-center gap-1 text-[13px] font-bold text-blue-100">
                July 2026 Batch
                <Sparkles size={12} className="text-cyan-300" />
              </span>
            </div>
          </div>
        </div>

        {/* Right — CTA */}
        <div className="flex items-center justify-end">
          <a href="/#apply" className="bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold hover:bg-blue-700 transition-all">
            Apply for Selection
          </a>
        </div>
      </div>
    </nav>
  );
}
