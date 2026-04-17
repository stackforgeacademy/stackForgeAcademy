import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  // Set target date to 52 days from now
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 52);
    return date.getTime();
  });

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-3.5 mb-0">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  const digits = value.toString().padStart(2, '0');
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative group">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-orange-500/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative bg-white/[0.03] border border-white/10 rounded-lg px-2 py-1 sm:px-3 sm:py-1.5 backdrop-blur-md shadow-2xl flex items-center justify-center overflow-hidden">
          {/* Subtle top highlight */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <motion.span 
            key={value}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-xl sm:text-2xl font-mono font-bold text-orange-500 tabular-nums tracking-tight"
          >
            {digits}
          </motion.span>
        </div>
      </div>
      
      <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-slate-500 mt-1 font-black font-heading">
        {label}
      </span>
    </div>
  );
}
