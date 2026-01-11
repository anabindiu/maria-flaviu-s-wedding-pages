import logo from '@/assets/logo.png';

const Logo3D = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div 
        className="relative w-48 h-48 sm:w-64 sm:h-64"
        style={{ perspective: '1000px' }}
      >
        <div 
          className="w-full h-full animate-logo-rotate"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front face */}
          <img 
            src={logo} 
            alt="Maria & Flaviu" 
            className="absolute inset-0 w-full h-full object-contain"
            style={{ 
              backfaceVisibility: 'hidden',
            }}
          />
          {/* Back face */}
          <img 
            src={logo} 
            alt="Maria & Flaviu" 
            className="absolute inset-0 w-full h-full object-contain"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Logo3D;
