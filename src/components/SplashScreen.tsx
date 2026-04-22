import { useEffect, useState } from 'react';
import logoSrc from '../assets/Asset 8@4x.png';

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'visible' | 'zoom' | 'done'>('visible');

  useEffect(() => {
    // Hold logo for 1.2s, then trigger zoom-in
    const zoomTimer = setTimeout(() => setPhase('zoom'), 1200);
    // After zoom animation (600ms), call onDone to unmount splash
    const doneTimer = setTimeout(() => {
      setPhase('done');
      onDone();
    }, 1800);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  if (phase === 'done') return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#080f1e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '16px',
        transition: 'opacity 400ms ease',
        opacity: phase === 'zoom' ? 0 : 1,
      }}
    >
      {/* Glow backdrop — responsive size */}
      <div
        style={{
          position: 'absolute',
          width: 'min(400px, 90vw)',
          height: 'min(400px, 90vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
          transform: phase === 'zoom' ? 'scale(3)' : 'scale(1)',
          transition: 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          pointerEvents: 'none',
        }}
      />

      {/* Logo */}
      <div
        style={{
          position: 'relative',
          transform: phase === 'zoom' ? 'scale(2.5)' : 'scale(1)',
          opacity: phase === 'zoom' ? 0 : 1,
          transition: 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease',
        }}
      >
        <img
          src={logoSrc}
          alt="StackForge"
          style={{ height: 'clamp(36px, 10vw, 52px)', width: 'auto', maxWidth: '70vw' }}
        />
      </div>

      {/* Tagline */}
      <p
        style={{
          fontSize: 'clamp(8px, 2.5vw, 10px)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#475569',
          fontWeight: 500,
          textAlign: 'center',
          padding: '0 24px',
          opacity: phase === 'zoom' ? 0 : 1,
          transition: 'opacity 300ms ease',
        }}
      >
        Forging India's Elite Developers
      </p>

      {/* Loading bar */}
      <div
        style={{
          marginTop: '32px',
          width: 'min(140px, 38vw)',
          height: '2px',
          borderRadius: '9999px',
          background: 'rgba(255,255,255,0.06)',
          overflow: 'hidden',
          opacity: phase === 'zoom' ? 0 : 1,
          transition: 'opacity 300ms ease',
        }}
      >
        <div
          style={{
            height: '100%',
            borderRadius: '9999px',
            background: 'linear-gradient(90deg, #2563eb, #818cf8)',
            animation: 'sfLoad 1.2s ease forwards',
          }}
        />
      </div>

      <style>{`
        @keyframes sfLoad {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
