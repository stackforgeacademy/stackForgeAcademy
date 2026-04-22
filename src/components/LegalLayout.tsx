import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
  lastUpdated: string;
}

export default function LegalLayout({ title, children, lastUpdated }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-bg-main text-[var(--text-main)] selection:bg-blue-500/30">
      <main className="pt-16 pb-24">
        <div className="max-w-[800px] mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12">
              <h1 className="text-[clamp(32px,6vw,56px)] font-extrabold tracking-tight text-[var(--text-contrast)] mb-4">
                {title}
              </h1>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">
                Last Updated: {lastUpdated}
              </p>
            </div>

            <div className="prose prose-invert max-w-none prose-headings:text-[var(--text-contrast)] prose-headings:font-bold prose-p:text-slate-400 prose-p:leading-relaxed prose-li:text-slate-400 prose-strong:text-white">
              {children}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
