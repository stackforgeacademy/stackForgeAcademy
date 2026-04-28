import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoSrc from '../assets/Asset 8@4x.png';

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ty-root *, .ty-root *::before, .ty-root *::after { box-sizing: border-box; }

        .ty-root {
          height: 100vh;
          max-height: 100vh;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          background: #080f1e;
          color: #fff;
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
        }

        .ty-root::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 25%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── LEFT ── */
        .ty-left {
          background: #0b1220;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 36px 44px;
          overflow: hidden;
          border-right: 1px solid rgba(255,255,255,0.05);
        }

        .ty-left::before {
          content: '✓';
          position: absolute;
          bottom: -60px;
          right: -30px;
          font-size: 340px;
          font-family: 'Playfair Display', serif;
          color: rgba(255,255,255,0.02);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .ty-left::after {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(180deg, #2563EB 0%, transparent 100%);
        }

        .ty-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          opacity: 0;
          animation: ty-fadeUp 0.5s ease forwards 0.1s;
          flex-shrink: 0;
          cursor: pointer;
          width: fit-content;
        }

        .ty-hero { position: relative; z-index: 1; flex: 1; display: flex; flex-direction: column; justify-content: center; }

        .ty-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(37,99,235,0.15);
          border: 1px solid rgba(96,165,250,0.25);
          border-radius: 100px;
          padding: 4px 12px;
          font-size: 10px;
          font-weight: 600;
          color: #93C5FD;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 18px;
          opacity: 0;
          animation: ty-fadeUp 0.5s ease forwards 0.3s;
          width: fit-content;
        }

        .ty-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #22C55E;
          box-shadow: 0 0 6px #22C55E;
          animation: ty-pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        .ty-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 2.8vw, 46px);
          font-weight: 900;
          line-height: 1.1;
          color: #fff;
          margin-bottom: 14px;
          opacity: 0;
          animation: ty-fadeUp 0.6s ease forwards 0.45s;
        }

        .ty-hero h1 em { font-style: italic; color: #60A5FA; }

        .ty-hero-body {
          font-size: 13.5px;
          line-height: 1.75;
          color: rgba(255,255,255,0.45);
          max-width: 360px;
          opacity: 0;
          animation: ty-fadeUp 0.6s ease forwards 0.6s;
        }

        .ty-hero-body strong { color: rgba(255,255,255,0.8); font-weight: 500; }

        .ty-callout {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-left: 2px solid #2563EB;
          border-radius: 0 8px 8px 0;
          padding: 12px 16px;
          margin-top: 18px;
          opacity: 0;
          animation: ty-fadeUp 0.6s ease forwards 0.75s;
        }

        .ty-callout .ty-emoji { font-size: 18px; flex-shrink: 0; line-height: 1.6; }

        .ty-callout p {
          font-size: 12px;
          line-height: 1.65;
          color: rgba(255,255,255,0.45);
          margin: 0;
        }

        .ty-callout p strong { color: rgba(255,255,255,0.85); }

        .ty-left-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
          opacity: 0;
          animation: ty-fadeUp 0.5s ease forwards 0.9s;
        }

        .ty-cohort-tag {
          font-size: 11px;
          color: rgba(255,255,255,0.2);
        }

        .ty-seats-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(22,163,74,0.1);
          border: 1px solid rgba(34,197,94,0.2);
          border-radius: 100px;
          padding: 4px 10px;
          font-size: 11px;
          font-weight: 600;
          color: #4ADE80;
        }

        .ty-seats-pill::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #4ADE80;
          animation: ty-pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        /* ── RIGHT ── */
        .ty-right {
          background: #080f1e;
          padding: 32px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }

        .ty-right-header {
          margin-bottom: 20px;
          flex-shrink: 0;
          opacity: 0;
          animation: ty-fadeUp 0.5s ease forwards 0.5s;
        }

        .ty-right-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: 21px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }

        .ty-right-header p {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          margin: 0;
        }

        .ty-stepper { display: flex; flex-direction: column; margin-bottom: 20px; flex-shrink: 0; }

        .ty-step {
          display: flex;
          gap: 16px;
          opacity: 0;
        }

        .ty-step:nth-child(1) { animation: ty-fadeUp 0.45s ease forwards 0.6s; }
        .ty-step:nth-child(2) { animation: ty-fadeUp 0.45s ease forwards 0.72s; }
        .ty-step:nth-child(3) { animation: ty-fadeUp 0.45s ease forwards 0.84s; }
        .ty-step:nth-child(4) { animation: ty-fadeUp 0.45s ease forwards 0.96s; }
        .ty-step:nth-child(5) { animation: ty-fadeUp 0.45s ease forwards 1.08s; }

        .ty-step-track {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 30px;
          flex-shrink: 0;
        }

        .ty-step-num {
          width: 30px; height: 30px;
          border-radius: 50%;
          background: rgba(37,99,235,0.2);
          border: 1px solid rgba(96,165,250,0.25);
          color: #60A5FA;
          font-family: 'Playfair Display', serif;
          font-size: 12px;
          font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        .ty-step-line {
          width: 1px;
          flex: 1;
          min-height: 8px;
          background: rgba(255,255,255,0.06);
          margin: 3px 0;
        }

        .ty-step:last-child .ty-step-line { display: none; }

        .ty-step-body {
          padding-top: 5px;
          padding-bottom: 12px;
        }

        .ty-step:last-child .ty-step-body { padding-bottom: 0; }

        .ty-step-title {
          font-size: 12.5px;
          font-weight: 600;
          color: rgba(255,255,255,0.9);
          margin-bottom: 2px;
        }

        .ty-step-desc {
          font-size: 11.5px;
          color: rgba(255,255,255,0.35);
          line-height: 1.5;
        }

        .ty-cta-block {
          flex-shrink: 0;
          opacity: 0;
          animation: ty-fadeUp 0.5s ease forwards 1.2s;
        }

        .ty-back-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 10px;
          padding: 10px 20px;
          background: transparent;
          color: rgba(255,255,255,0.3);
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 500;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          cursor: pointer;
          width: 100%;
          justify-content: center;
          transition: color 0.18s, border-color 0.18s;
          opacity: 0;
          animation: ty-fadeUp 0.5s ease forwards 1.3s;
        }

        .ty-back-btn:hover { color: #fff; border-color: rgba(255,255,255,0.2); }

        .ty-footer-note {
          margin-top: 12px;
          font-size: 10.5px;
          color: rgba(255,255,255,0.18);
          flex-shrink: 0;
          opacity: 0;
          animation: ty-fadeUp 0.5s ease forwards 1.4s;
        }

        @keyframes ty-fadeUp {
          0%   { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes ty-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.6); }
        }

        @media (max-width: 780px) {
          .ty-root {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
            height: auto;
            max-height: none;
            overflow: auto;
          }
          .ty-left { padding: 24px 22px 20px; height: auto; }
          .ty-left::before { font-size: 160px; }
          .ty-callout { display: none; }
          .ty-hero h1 { font-size: clamp(22px, 6vw, 30px); margin-bottom: 8px; }
          .ty-hero-body { font-size: 12px; }
          .ty-right { padding: 20px 22px; overflow-y: auto; }
          .ty-right-header { margin-bottom: 14px; }
          .ty-stepper { margin-bottom: 14px; }
        }
      `}</style>

      <div className="ty-root">

        {/* ── LEFT ── */}
        <div className="ty-left">

          <div className="ty-logo" onClick={() => navigate('/')}>
            <img src={logoSrc} alt="StackForge" style={{ height: '28px', width: 'auto' }} />
          </div>

          <div className="ty-hero">
            <div className="ty-badge">
              <div className="ty-badge-dot" />
              Application Received
            </div>

            <h1>You're on your<br/>way to <em>Big Tech.</em></h1>

            <p className="ty-hero-body">
              Your application for the <strong>July 2026 cohort</strong> is safely with us. Our team reviews each profile personally — expect to hear back within <strong>48 hours.</strong>
            </p>

            <div className="ty-callout">
              <span className="ty-emoji">🎉</span>
              <p>
                <strong>Look at you — actually doing it.</strong> Most people think about applying for months. You just filled the form and took the first real step. That already puts you ahead of 90% of people.
              </p>
            </div>
          </div>

          <div className="ty-left-footer">
            <div className="ty-cohort-tag">July 2026 · StackForge Academy</div>
            <div className="ty-seats-pill">17 of 22 seats filled · 5 left</div>
          </div>

        </div>

        {/* ── RIGHT ── */}
        <div className="ty-right">

          <div className="ty-right-header">
            <h2>What happens next</h2>
            <p>Here's your journey from application to acceptance.</p>
          </div>

          <div className="ty-stepper">
            {[
              { title: 'Application Review', desc: 'Our team reviews your profile and background within 48 hours of submission.' },
              { title: 'Aptitude Test', desc: 'An online assessment covering logical reasoning and coding fundamentals — sent to shortlisted applicants.' },
              { title: 'Behaviour Test', desc: 'A structured evaluation of your learning mindset, consistency, and problem-solving approach.' },
              { title: 'Face to Face Interview', desc: 'A personal interview with our team about your goals, commitment, and fit for the programme.' },
              { title: 'Final Decision', desc: 'Selected candidates receive their official offer and full onboarding kit. Only 22 seats per cohort.' },
            ].map((step, i) => (
              <div key={step.title} className="ty-step">
                <div className="ty-step-track">
                  <div className="ty-step-num">{i + 1}</div>
                  <div className="ty-step-line" />
                </div>
                <div className="ty-step-body">
                  <div className="ty-step-title">{step.title}</div>
                  <div className="ty-step-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="ty-cta-block">
            <button className="ty-back-btn" onClick={() => navigate('/')}>
              ← Back to Home
            </button>
          </div>

          <p className="ty-footer-note">© 2026 StackForge Academy &nbsp;·&nbsp; questions? hello@stackforgeacademy.in</p>

        </div>
      </div>
    </>
  );
}
