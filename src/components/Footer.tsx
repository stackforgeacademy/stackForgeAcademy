import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 bg-bg-deep">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img 
              src="/logo.png" 
              alt="StackForge" 
              className="h-6 w-auto"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback to text if image fails to load
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden text-xl font-black tracking-tighter text-white uppercase italic">
              Stack
              <span className="text-transparent [text-stroke:1px_white] [-webkit-text-stroke:1px_white]">Forge</span>
            </span>
          </Link>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link to="/privacy-policy" className="text-sm text-slate-500 hover:text-blue-500 transition-colors">Privacy Policy</Link>
            <Link to="/refund-policy" className="text-sm text-slate-500 hover:text-blue-500 transition-colors">Refund Policy</Link>
            <Link to="/terms-of-service" className="text-sm text-slate-500 hover:text-blue-500 transition-colors">Terms of Service</Link>
            <a href="mailto:admissions@stackforge.academy" className="text-sm text-slate-500 hover:text-blue-500 transition-colors">Contact Us</a>
          </nav>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
          <div className="flex flex-col gap-2">
            <p className="text-[13px] text-slate-500 flex items-center gap-1.5 flex-wrap">
              © 2026 StackForge Academy. All rights reserved. 
              <span className="flex items-center gap-1">
                <Zap size={12} className="text-blue-500 fill-blue-500" />
                Forged in India for the Elite Developers
              </span>
            </p>
            <p className="text-[10px] text-slate-600 leading-relaxed max-w-2xl">
              <span className="text-orange-500 font-bold mr-1">#</span>
              Reviewed in a personal capacity, independent of their organizations | Views and endorsements are their own, not those of their employers
            </p>
            <p className="text-[10px] text-slate-600 leading-relaxed max-w-2xl">
              <span className="text-blue-500 font-bold mr-1">*</span>
              Each cohort will feature one student eligible for a merit-based scholarship of up to 100%.
            </p>
          </div>
          <p className="text-[11px] text-slate-600 uppercase tracking-widest font-bold">
            Stack Forge Academy
          </p>
        </div>
      </div>
    </footer>
  );
}
