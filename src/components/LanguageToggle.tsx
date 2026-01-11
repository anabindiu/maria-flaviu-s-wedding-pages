import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 font-romantic text-sm">
      <button
        onClick={() => setLanguage('ro')}
        className={`px-3 py-1 rounded-full transition-all duration-300 ${
          language === 'ro'
            ? 'bg-primary text-primary-foreground'
            : 'bg-paper/80 text-romantic hover:bg-primary/20'
        }`}
      >
        RO
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full transition-all duration-300 ${
          language === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'bg-paper/80 text-romantic hover:bg-primary/20'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
