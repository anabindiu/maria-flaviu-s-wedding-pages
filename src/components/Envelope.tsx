import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const { t } = useLanguage();

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-muted">
      <div className="relative">
        {/* Envelope Container */}
        <div className="relative w-80 h-56 sm:w-96 sm:h-64">
          {/* Envelope Back */}
          <div className="absolute inset-0 bg-envelope rounded-lg shadow-2xl" />
          
          {/* Envelope Inner */}
          <div className="absolute inset-2 bg-envelope-inner rounded" />
          
          {/* Letter peeking out */}
          <div 
            className={`absolute left-1/2 -translate-x-1/2 bottom-4 w-3/4 h-40 bg-paper rounded shadow-md flex items-center justify-center transition-all duration-1000 ${
              isOpening ? 'animate-letter-rise' : ''
            }`}
          >
            <img 
              src={logo} 
              alt="M&F" 
              className="w-20 h-20 object-contain opacity-60"
            />
          </div>
          
          {/* Envelope Flap */}
          <div 
            className={`absolute -top-0 left-0 right-0 h-32 origin-top ${
              isOpening ? 'animate-envelope-open' : ''
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front of flap */}
            <div 
              className="absolute inset-0 bg-envelope"
              style={{
                clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                backfaceVisibility: 'hidden',
              }}
            />
            {/* Back of flap */}
            <div 
              className="absolute inset-0 bg-envelope-inner"
              style={{
                clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                transform: 'rotateX(180deg)',
                backfaceVisibility: 'hidden',
              }}
            />
          </div>
          
          {/* Wax Seal */}
          {!isOpening && (
            <button
              onClick={handleOpen}
              className="absolute left-1/2 -translate-x-1/2 top-16 z-10 w-20 h-20 rounded-full bg-seal shadow-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 group"
              style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.2)',
              }}
            >
              <img 
                src={logo} 
                alt="Seal" 
                className="w-12 h-12 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </button>
          )}
          
          {isOpening && (
            <div 
              className="absolute left-1/2 -translate-x-1/2 top-16 z-10 w-20 h-20 rounded-full bg-seal animate-seal-break"
              style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              <img src={logo} alt="Seal" className="w-full h-full object-contain p-4" />
            </div>
          )}
        </div>
        
        {/* Hint text */}
        <p className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-romantic tracking-wider animate-pulse-soft whitespace-nowrap">
          {t.liftSeal}
        </p>
      </div>
    </div>
  );
};

export default Envelope;
