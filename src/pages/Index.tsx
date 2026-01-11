import { useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import Envelope from '@/components/Envelope';
import WeddingContent from '@/components/WeddingContent';

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <LanguageToggle />
        
        {!isEnvelopeOpen ? (
          <Envelope onOpen={() => setIsEnvelopeOpen(true)} />
        ) : (
          <div className="animate-fade-up">
            <WeddingContent />
          </div>
        )}
      </div>
    </LanguageProvider>
  );
};

export default Index;
