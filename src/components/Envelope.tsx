import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';
import paperTexture from '@/assets/paper-texture.jpg';

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
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${paperTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Paper overlay */}
      <div className="absolute inset-0 bg-paper/70" />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Envelope Container */}
        <div className="relative w-[340px] h-[420px] sm:w-[400px] sm:h-[500px]">
          {/* Envelope back flap (visible part) */}
          <div 
            className="absolute top-0 left-0 right-0 h-[60%]"
            style={{
              background: 'linear-gradient(180deg, hsl(45 35% 92%) 0%, hsl(45 30% 88%) 100%)',
              clipPath: 'polygon(0 40%, 50% 0, 100% 40%, 100% 100%, 0 100%)',
              boxShadow: 'inset 0 0 30px rgba(0,0,0,0.05)',
            }}
          />
          
          {/* Main envelope body */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[70%] rounded-t-sm"
            style={{
              background: 'linear-gradient(180deg, hsl(45 35% 94%) 0%, hsl(45 30% 90%) 100%)',
              boxShadow: '0 -2px 10px rgba(0,0,0,0.05), inset 0 0 20px rgba(0,0,0,0.03)',
            }}
          />
          
          {/* Left fold line */}
          <div 
            className="absolute bottom-0 left-0 h-[70%] w-[50%]"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, hsl(45 25% 85% / 0.3) 100%)',
              clipPath: 'polygon(0 0, 100% 30%, 100% 100%, 0 100%)',
            }}
          />
          
          {/* Right fold line */}
          <div 
            className="absolute bottom-0 right-0 h-[70%] w-[50%]"
            style={{
              background: 'linear-gradient(-135deg, transparent 0%, hsl(45 25% 85% / 0.3) 100%)',
              clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)',
            }}
          />
          
          {/* Opening flap */}
          <div 
            className={`absolute top-0 left-0 right-0 h-[45%] origin-top ${
              isOpening ? 'animate-envelope-open' : ''
            }`}
            style={{ 
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            {/* Front of flap */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, hsl(45 30% 90%) 0%, hsl(45 35% 93%) 100%)',
                clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                backfaceVisibility: 'hidden',
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.05)',
              }}
            />
            {/* Back of flap */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, hsl(45 35% 95%) 0%, hsl(45 30% 92%) 100%)',
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
              className="absolute left-1/2 -translate-x-1/2 top-[38%] z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full cursor-pointer hover:scale-105 transition-transform duration-300 group"
              style={{
                background: 'radial-gradient(circle at 35% 35%, hsl(0 55% 45%) 0%, hsl(0 60% 35%) 50%, hsl(0 65% 28%) 100%)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4), inset 0 2px 10px rgba(255,255,255,0.15), inset 0 -2px 10px rgba(0,0,0,0.2)',
              }}
            >
              <div className="absolute inset-[6px] rounded-full border-2 border-[hsl(0_55%_40%/0.5)]" />
              <img 
                src={logo} 
                alt="Seal" 
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain opacity-80 group-hover:opacity-90 transition-opacity absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ filter: 'brightness(1.2) contrast(0.9)' }}
              />
            </button>
          )}
          
          {isOpening && (
            <div 
              className="absolute left-1/2 -translate-x-1/2 top-[38%] z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full animate-seal-break"
              style={{
                background: 'radial-gradient(circle at 35% 35%, hsl(0 55% 45%) 0%, hsl(0 60% 35%) 50%, hsl(0 65% 28%) 100%)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
              }}
            >
              <img src={logo} alt="Seal" className="w-full h-full object-contain p-5" style={{ filter: 'brightness(1.2) contrast(0.9)' }} />
            </div>
          )}
        </div>
        
        {/* Exclusive invitation text */}
        <p className="mt-8 text-center font-romantic text-muted-foreground text-lg sm:text-xl italic tracking-wide leading-relaxed">
          {t.exclusiveInvitation}
        </p>
        
        {/* Hint text */}
        <p className="mt-6 text-[10px] text-muted-foreground/60 font-romantic tracking-widest uppercase animate-pulse-soft">
          {t.liftSeal}
        </p>
      </div>
    </div>
  );
};

export default Envelope;
