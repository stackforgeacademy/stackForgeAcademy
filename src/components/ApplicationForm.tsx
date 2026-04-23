import { useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { User, Phone, Mail, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

interface FormData {
  name: string;
  phone: string;
  email: string;
}

type Status = 'idle' | 'submitting' | 'error';

export default function ApplicationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '', email: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let sanitized = value;
    if (name === 'name') sanitized = value.replace(/[^a-zA-Z\s]/g, '');
    if (name === 'phone') sanitized = value.replace(/[^0-9+\s]/g, '');
    setFormData((prev) => ({ ...prev, [name]: sanitized }));
  };

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: '777467ce-32b4-456b-b379-d331d3216c22',
          subject: 'New Application — StackForge July 2026 Cohort',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        }),
      });

      const data = await res.json();

      if (data.success) {
        window.location.href = '/thankyou.html';
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      setStatus('error');
      if (err instanceof Error && err.name === 'AbortError') {
        setErrorMsg('Request timed out. Please check your connection and try again.');
      } else {
        setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      }
    } finally {
      clearTimeout(timeout);
    }
  };

  const inputClass =
    'w-full bg-bg-card2 border border-white/10 rounded-lg p-3 px-3.5 text-(--text-main) text-sm outline-none transition-all focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 placeholder:text-slate-400/50 disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <section className="pt-8 pb-12 sm:py-20 bg-linear-to-b from-transparent via-blue-500/2 to-transparent" id="apply">
      <div className="max-w-275 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-130 mx-auto bg-bg-card border border-white/10 rounded-[20px] p-6 sm:p-10 shadow-[0_0_80px_rgba(37,99,235,0.08)] relative overflow-hidden"
        >
          {/* Subtle top accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />

          <div className="text-center mb-6">
            <h2 className="text-[22px] font-bold mb-1 text-(--text-contrast)">Apply for July 2026 Cohort</h2>
            <p className="text-slate-400 text-sm">Strictly 22 seats per cohort. Applications closing soon.</p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-4 relative overflow-hidden">
            <div className="flex items-center justify-center gap-2 text-blue-500/80 text-[10px] font-extrabold uppercase tracking-[0.2em] mb-2">
              <AlertCircle size={12} />
              Registration Ends In
            </div>
            <CountdownTimer />
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-[13px] text-slate-400 font-medium">
                <User size={14} className="opacity-70" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Rahul Sharma"
                required
                disabled={status === 'submitting'}
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-[13px] text-slate-400 font-medium">
                <Phone size={14} className="opacity-70" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
                disabled={status === 'submitting'}
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-[13px] text-slate-400 font-medium">
                <Mail size={14} className="opacity-70" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="rahul@gmail.com"
                required
                disabled={status === 'submitting'}
                className={inputClass}
              />
            </div>

            {/* Error message */}
            {status === 'error' && (
              <p className="text-[12px] text-red-400 flex items-center gap-1.5">
                <AlertCircle size={12} />
                {errorMsg}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full mt-1.5 inline-flex items-center justify-center gap-2 bg-linear-to-br from-blue-600 to-indigo-700 text-white px-7 py-3.5 rounded-xl text-[15px] font-bold transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,99,235,0.3)] shadow-[0_4px_20px_rgba(37,99,235,0.2)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  Apply for Selection
                  <ArrowRight size={16} strokeWidth={3} />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-[12px] text-slate-400 mt-3">No spam. No sales pressure. Just a straightforward review process.</p>
        </motion.div>
      </div>
    </section>
  );
}
