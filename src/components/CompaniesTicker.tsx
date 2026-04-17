export default function CompaniesTicker() {
  const companies = [
    { name: 'Google', domain: 'google.com' },
    { name: 'Clarion Tech', domain: 'clariontech.com' },
    { name: 'Ola', domain: 'olaelectric.com' },
    { name: 'Amazon', domain: 'amazon.com' },
    { name: 'Konstant Info', domain: 'konstantinfo.com' },
    { name: 'BrowserStack', domain: 'browserstack.com' },
    { name: 'LinkedIn', domain: 'linkedin.com' },
    { name: 'Indus Net', domain: 'indusnet.co.in' },
    { name: 'Nykaa', domain: 'nykaa.com' },
    { name: 'Pinterest', domain: 'pinterest.com' },
    { name: 'Debut Infotech', domain: 'debutinfotech.com' },
    { name: 'Groww', domain: 'groww.in' },
    { name: 'CONTUS Tech', domain: 'contus.com' },
    { name: 'Postman', domain: 'postman.com' },
    { name: 'Crest Coder', domain: 'crestcoder.com' },
    { name: 'Zerodha', domain: 'zerodha.com' },
    { name: 'Radiansys', domain: 'radiansys.com' },
    { name: 'Swiggy', domain: 'swiggy.com' },
    { name: 'Net Solutions', domain: 'netsolutions.com' },
    { name: 'Unacademy', domain: 'unacademy.com' },
    { name: '9series', domain: '9series.com' },
    { name: 'Upstox', domain: 'upstox.com' },
    { name: 'Closeloop', domain: 'closeloop.com' },
    { name: 'Meesho', domain: 'meesho.com' },
    { name: 'Zepto', domain: 'zepto.com' },
    { name: 'Blinkit', domain: 'blinkit.com' },
    { name: 'Dream11', domain: 'dream11.com' },
    { name: 'CoinSwitch', domain: 'coinswitch.co' },
    { name: 'InMobi', domain: 'inmobi.com' },
    { name: 'ShareChat', domain: 'sharechat.com' },
    { name: 'Urban Company', domain: 'urbancompany.com' }
  ];

  return (
    <div className="py-14 overflow-hidden bg-bg-card/30 transition-colors">
      <div className="text-center text-[11px] sm:text-xs tracking-[0.2em] text-slate-500 uppercase mb-10 font-heading font-black">
        Our alumni <span className="text-blue-500">thrive</span> at
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-4 w-max animate-[ticker_60s_linear_infinite] items-center">
          {[...companies, ...companies].map((company, i) => (
            <div key={i} className="flex items-center gap-3.5 shrink-0 px-6 py-3 bg-bg-card border border-white/10 rounded-xl opacity-90 hover:opacity-100 transition-all hover:bg-bg-card2 hover:border-blue-500/30 cursor-default group shadow-sm">
              <img 
                src={`https://logo.clearbit.com/${company.domain}`} 
                alt={company.name}
                className="w-6 h-6 object-contain transition-all duration-300 group-hover:scale-110"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to a generic icon if Clearbit fails
                  (e.target as HTMLImageElement).src = `https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`;
                }}
              />
              <span className="text-[15px] font-bold tracking-tight text-slate-200 group-hover:text-white transition-colors whitespace-nowrap">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
