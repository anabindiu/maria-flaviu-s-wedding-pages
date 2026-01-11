import { useLanguage } from '@/contexts/LanguageContext';

const DressCodeSection = () => {
  const { t } = useLanguage();
  
  // Color palette from the invitation image
  const colors = [
    'hsl(25 60% 55%)',    // Copper/rust
    'hsl(25 70% 45%)',    // Darker rust
    'hsl(15 65% 35%)',    // Brown rust
    'hsl(50 45% 40%)',    // Olive gold
    'hsl(140 35% 25%)',   // Dark forest green
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-display text-primary mb-6 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          {t.dressCode.title}
        </h2>
        <p className="text-lg font-romantic text-romantic leading-relaxed mb-8 animate-fade-up opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
          {t.dressCode.description}
        </p>
        
        {/* Color palette swatches */}
        <div className="inline-flex gap-2 sm:gap-3 p-4 rounded-full border border-primary/30 animate-fade-up opacity-0 delay-200" style={{ animationFillMode: 'forwards' }}>
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-md"
              style={{
                background: `linear-gradient(135deg, ${color} 0%, ${color} 100%)`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;
