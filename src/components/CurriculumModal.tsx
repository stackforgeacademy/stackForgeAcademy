import { useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Download, User, Phone, Mail, Loader2 } from 'lucide-react';

interface Props {
  onClose: () => void;
}

export default function CurriculumModal({ onClose }: Props) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let sanitized = value;
    if (name === 'name') sanitized = value.replace(/[^a-zA-Z\s]/g, '');
    if (name === 'phone') sanitized = value.replace(/[^0-9+\s]/g, '');
    setForm((prev) => ({ ...prev, [name]: sanitized }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
          access_key: '9166bd4d-c3a8-4ff2-8f4a-01452a3c13f3',
          subject: 'Curriculum Download Request — StackForge Academy',
          name: form.name,
          phone: form.phone,
          email: form.email,
        }),
      });

      const data = await res.json();

      if (data.success) {
        navigate('/curriculum-thank-you');
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
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-md bg-[#0d1526] border border-white/10 rounded-2xl shadow-2xl p-8">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
            <Download size={16} className="text-blue-400" />
          </div>
          <h2 className="text-lg font-bold text-white">Download Curriculum</h2>
        </div>
        <p className="text-slate-400 text-sm mb-6">Enter your details and we'll start the download instantly.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              <User size={11} /> Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Rahul Sharma"
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              <Phone size={11} /> Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              <Mail size={11} /> Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="rahul@example.com"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {status === 'error' && (
            <p className="text-red-400 text-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-all text-sm"
          >
            {status === 'submitting' ? (
              <><Loader2 size={15} className="animate-spin" /> Submitting...</>
            ) : (
              <><Download size={15} /> Download Curriculum</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
