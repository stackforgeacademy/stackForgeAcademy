import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import logoSrc from '../assets/Asset 8@4x.png';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 bg-bg-deep">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col items-center gap-8 mb-10">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img
              src={logoSrc}
              alt="StackForge"
              className="h-8 w-auto"
            />
          </Link>

          <nav className="w-full flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:justify-center md:gap-x-8 md:gap-y-3">
            {/* <Link to="/privacy-policy" className="text-sm text-slate-500 hover:text-blue-500 transition-colors py-1 text-center">Privacy Policy</Link> */}
            <Link to="/refund-policy" className="text-sm text-slate-500 hover:text-blue-500 transition-colors py-1 text-center">Refund Policy</Link>
            <Link to="/terms-of-service" className="text-sm text-slate-500 hover:text-blue-500 transition-colors py-1 text-center">Terms of Service</Link>
            <Link to="/scholarship-policy" className="text-sm text-slate-500 hover:text-blue-500 transition-colors py-1 text-center">Scholarship Policy</Link>
            <Link to="/student-success-policy" className="text-sm text-slate-500 hover:text-blue-500 transition-colors py-1 text-center">Student Success Policy</Link>
            <Link to="/instructor-policy" className="text-sm text-slate-500 hover:text-blue-500 transition-colors py-1 text-center">Instructor & Mentor Responsibilities Policy</Link>
            <Link to="/code-of-conduct" className="text-sm text-slate-500 hover:text-blue-500 transition-colors py-1 text-center">Student Code of Conduct & Academic Integrity Policy</Link>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-3 pt-8 border-t border-white/5 text-center">
          <p className="text-[13px] text-slate-500 flex items-center justify-center gap-1.5 flex-wrap">
            © 2026 StackForge Academy. All rights reserved.
            <span className="flex items-center gap-1">
              <Zap size={12} className="text-blue-500 fill-blue-500" />
              Forged in India for the Elite Developers
            </span>
          </p>
          <p className="text-[10px] text-slate-600 leading-relaxed max-w-xs sm:max-w-lg">
            <span className="text-orange-500 font-bold mr-1">#</span>
            Reviewed in a personal capacity, independent of their organizations | Views and endorsements are their own, not those of their employers
          </p>
          <p className="text-[10px] text-slate-600 leading-relaxed max-w-xs sm:max-w-lg">
            <span className="text-blue-500 font-bold mr-1">*</span>
            Each cohort will feature one student eligible for a merit-based scholarship of up to 100%.
          </p>
          <p className="text-[11px] text-slate-700 uppercase tracking-widest font-bold mt-1">
            Stack Forge Academy
          </p>
        </div>
      </div>
    </footer>
  );
}
