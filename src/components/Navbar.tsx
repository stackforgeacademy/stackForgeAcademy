import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoSrc from '../assets/Asset 8@4x.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-deep/80 backdrop-blur-md border-b border-white/5 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-2 sm:gap-4">

        {/* Left — Logo */}
        <Link to="/" className="flex flex-col items-start gap-0.5 hover:opacity-90 transition-opacity shrink-0">
          <img
            src={logoSrc}
            alt="StackForge"
            className="h-6 sm:h-8 w-auto max-w-[120px] sm:max-w-none"
          />
          <span className="hidden sm:block text-[9px] tracking-[0.2em] uppercase text-slate-500 font-medium">
            Forging India's Elite Developers
          </span>
        </Link>

        {/* Center — Badge (hidden on xs, visible sm+) */}
        <div className="relative flex-1 hidden sm:flex justify-center min-w-0">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl pointer-events-none" />
          <div className="relative inline-flex items-center gap-1.5 sm:gap-2.5 rounded-full border border-blue-400/25 bg-[linear-gradient(135deg,rgba(37,99,235,0.22),rgba(99,102,241,0.12))] px-2.5 sm:px-4 py-1 sm:py-2 shadow-[0_12px_30px_rgba(37,99,235,0.18)] backdrop-blur-md">
            <div className="relative flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-500/12">
              <span className="absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
              <span className="absolute h-1.5 w-1.5 sm:h-2 sm:w-2 animate-ping rounded-full bg-green-400/60" />
            </div>
            <span className="hidden md:block text-[10px] font-black uppercase tracking-[0.18em] text-blue-200/70 whitespace-nowrap">
              Applications Live
            </span>
            <span className="hidden md:block h-3 w-px bg-blue-400/30" />
            <span className="flex items-center gap-1 text-[10px] sm:text-[13px] font-bold text-blue-100 whitespace-nowrap">
              July 2026 Batch
              <Sparkles size={10} className="text-cyan-300" />
            </span>
          </div>
        </div>

        {/* Right — CTA */}
        <div className="shrink-0">
          <a
            href="/#apply"
            className="bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-sm font-bold hover:bg-blue-700 transition-all whitespace-nowrap"
          >
            <span className="sm:hidden">Apply</span>
            <span className="hidden sm:inline">Apply for Selection</span>
          </a>
        </div>

      </div>
    </nav>
  );
}
