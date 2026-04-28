import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoSrc from '../assets/Asset 8@4x.png';

export default function CurriculumThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    const triggerDownload = async () => {
      const { generateCurriculum } = await import('../lib/generateCurriculum');
      generateCurriculum();
    };
    triggerDownload();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .cty-root *, .cty-root *::before, .cty-root *::after { box-sizing: border-box; }

        .cty-root {
          --navy: #0B1120;
          --navy2: #1A2640;
          --cream: #F7F4EE;
          --text: #0B1120;
          --muted: #64748B;
          --border: #DDE3ED;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          background: var(--navy);
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          position: relative;
          overflow: hidden;
        }

        .cty-root::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .cty-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 520px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 48px 44px;
          text-align: center;
          opacity: 0;
          animation: cty-fadeUp 0.6s ease forwards 0.1s;
        }

        .cty-logo {
          display: flex;
          justify-content: center;
          margin-bottom: 32px;
          cursor: pointer;
          opacity: 0;
          animation: cty-fadeUp 0.5s ease forwards 0.2s;
        }

        .cty-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(37,99,235,0.18);
          border: 1px solid rgba(96,165,250,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          opacity: 0;
          animation: cty-fadeUp 0.5s ease forwards 0.3s;
        }

        .cty-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.25);
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 11px;
          font-weight: 600;
          color: #4ADE80;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 20px;
          opacity: 0;
          animation: cty-fadeUp 0.5s ease forwards 0.4s;
        }

        .cty-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4ADE80;
          box-shadow: 0 0 6px #4ADE80;
          animation: cty-pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        .cty-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(26px, 4vw, 38px);
          font-weight: 900;
          line-height: 1.15;
          color: #fff;
          margin-bottom: 14px;
          opacity: 0;
          animation: cty-fadeUp 0.6s ease forwards 0.5s;
        }

        .cty-title em { font-style: italic; color: #60A5FA; }

        .cty-desc {
          font-size: 14px;
          line-height: 1.75;
          color: rgba(255,255,255,0.52);
          margin-bottom: 32px;
          opacity: 0;
          animation: cty-fadeUp 0.6s ease forwards 0.6s;
        }

        .cty-desc strong { color: rgba(255,255,255,0.85); font-weight: 500; }

        .cty-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.08);
          margin-bottom: 28px;
          opacity: 0;
          animation: cty-fadeUp 0.5s ease forwards 0.65s;
        }

        .cty-steps {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
          text-align: left;
          opacity: 0;
          animation: cty-fadeUp 0.5s ease forwards 0.7s;
        }

        .cty-step-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
        }

        .cty-step-num {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: rgba(37,99,235,0.25);
          border: 1px solid rgba(96,165,250,0.3);
          color: #60A5FA;
          font-size: 11px;
          font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .cty-step-text {
          font-size: 12.5px;
          color: rgba(255,255,255,0.6);
          line-height: 1.55;
        }

        .cty-step-text strong { color: rgba(255,255,255,0.9); font-weight: 500; }

        .cty-btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 13px 24px;
          background: #2563EB;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.18s, transform 0.18s;
          margin-bottom: 10px;
          opacity: 0;
          animation: cty-fadeUp 0.5s ease forwards 0.8s;
        }

        .cty-btn-primary:hover { background: #1d4ed8; transform: translateY(-1px); }

        .cty-btn-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 12px 24px;
          background: transparent;
          color: rgba(255,255,255,0.45);
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          cursor: pointer;
          transition: color 0.18s, border-color 0.18s;
          opacity: 0;
          animation: cty-fadeUp 0.5s ease forwards 0.9s;
        }

        .cty-btn-secondary:hover { color: #fff; border-color: rgba(255,255,255,0.3); }

        .cty-footer {
          margin-top: 20px;
          font-size: 11px;
          color: rgba(255,255,255,0.2);
          opacity: 0;
          animation: cty-fadeUp 0.5s ease forwards 1s;
        }

        @keyframes cty-fadeUp {
          0%   { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes cty-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.6); }
        }

        @media (max-width: 540px) {
          .cty-card { padding: 36px 24px; }
        }
      `}</style>

      <div className="cty-root">
        <div className="cty-card">

          <div className="cty-logo" onClick={() => navigate('/')}>
            <img src={logoSrc} alt="StackForge" style={{ height: '28px', width: 'auto' }} />
          </div>

          <div className="cty-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </div>

          <div className="cty-badge">
            <div className="cty-badge-dot" />
            Download Started
          </div>

          <h1 className="cty-title">Your curriculum is<br/>on its way, <em>good luck.</em></h1>

          <p className="cty-desc">
            The curriculum PDF should download automatically. If it doesn't,{' '}
            <strong>check your downloads folder</strong> or refresh the page.
          </p>

          <div className="cty-divider" />

          <div className="cty-steps">
            {[
              { title: 'Review the Curriculum', desc: 'Go through each module and understand the full 8-month roadmap.' },
              { title: 'Apply for Selection', desc: 'Ready to commit? Apply now — only 22 seats per cohort.' },
              { title: 'Expect a Call Within 48hrs', desc: 'Our team personally reviews every application before reaching out.' },
            ].map((s, i) => (
              <div key={i} className="cty-step-item">
                <div className="cty-step-num">{i + 1}</div>
                <div className="cty-step-text"><strong>{s.title} — </strong>{s.desc}</div>
              </div>
            ))}
          </div>

          <a href="/#apply" className="cty-btn-primary">
            Apply for Selection →
          </a>

          <button className="cty-btn-secondary" onClick={() => navigate('/')}>
            ← Back to Home
          </button>

          <p className="cty-footer">© 2026 StackForge Academy · questions? hello@stackforgeacademy.in</p>
        </div>
      </div>
    </>
  );
}
