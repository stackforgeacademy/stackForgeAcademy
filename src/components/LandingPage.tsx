import Navbar from './Navbar';
import Hero from './Hero';
import ApplicationForm from './ApplicationForm';
import CompaniesTicker from './CompaniesTicker';
import WhyChoose from './WhyChoose';
import Roadmap from './Roadmap';
import AlumniCarousel from './AlumniCarousel';
import TenUniqueFeatures from './TenUniqueFeatures';
import AdmissionProcess from './AdmissionProcess';
import Pricing from './Pricing';
import Mentors from './Mentors';
import FAQ from './FAQ';
import Footer from './Footer';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-main text-[var(--text-main)] selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="apply">
          <ApplicationForm />
        </section>
        
        {/* Trust Bar */}
        <div className="border-y border-white/5 bg-bg-card/20 backdrop-blur-sm">
          <CompaniesTicker />
        </div>

        <WhyChoose />
        <Roadmap />
        <Mentors />
        <TenUniqueFeatures />
        <AlumniCarousel />
        <AdmissionProcess />
        <Pricing />
        <FAQ />

        {/* Final CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10 text-center px-6">
            <h2 className="text-[clamp(26px,6vw,64px)] font-extrabold leading-[1.1] tracking-tight mb-4 text-[var(--text-contrast)]">
              Ready to Forge Your <span className="text-blue-bright">Future?</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-[420px] mx-auto mb-9">
              Stop settling for average, join the elite 22 today !
            </p>
            <div className="flex gap-3.5 flex-wrap justify-center">
              <a href="#apply" className="inline-flex items-center gap-2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-7 py-3.5 rounded-xl text-[15px] font-bold transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,99,235,0.3)] shadow-[0_4px_20px_rgba(37,99,235,0.2)]">
                <Zap size={18} fill="currentColor" />
                Apply for Selection
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
