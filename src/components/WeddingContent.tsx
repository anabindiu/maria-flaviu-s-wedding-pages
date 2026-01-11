import { useLanguage } from '@/contexts/LanguageContext';
import Logo3D from './Logo3D';
import Countdown from './Countdown';
import VenueSection from './VenueSection';
import RSVPForm from './RSVPForm';
import DressCodeSection from './DressCodeSection';
import paperTexture from '@/assets/paper-texture.jpg';

const WeddingContent = () => {
  const { t } = useLanguage();

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${paperTexture})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Paper overlay for texture effect */}
      <div className="absolute inset-0 bg-paper/80 pointer-events-none" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
          <div className="text-center animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
            <p className="text-lg sm:text-xl font-romantic text-muted-foreground mb-4 tracking-widest uppercase">
              {t.allForLove}
            </p>
          </div>
          
          <Logo3D />
          
          <div className="text-center animate-fade-up opacity-0 delay-200" style={{ animationFillMode: 'forwards' }}>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display text-primary mb-4">
              Maria & Flaviu
            </h1>
            <p className="text-xl sm:text-2xl font-romantic text-romantic tracking-wider">
              {t.saveTheDate}
            </p>
          </div>
          
          <div className="mt-8 animate-fade-up opacity-0 delay-300" style={{ animationFillMode: 'forwards' }}>
            <div className="flex items-center justify-center gap-4 text-2xl sm:text-3xl font-display text-primary">
              <span>05</span>
              <span className="text-muted-foreground">·</span>
              <span>09</span>
              <span className="text-muted-foreground">·</span>
              <span>2026</span>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
            <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Countdown Section */}
        <Countdown />

        {/* Decorative divider */}
        <div className="flex items-center justify-center py-8">
          <div className="w-24 h-px bg-border" />
          <div className="mx-4 w-2 h-2 rounded-full bg-primary" />
          <div className="w-24 h-px bg-border" />
        </div>

        {/* Reception Section */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-display text-primary mb-6 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
              {t.reception.title}
            </h2>
            <p className="text-lg font-romantic text-romantic leading-relaxed animate-fade-up opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
              {t.reception.description}
            </p>
            <p className="mt-4 text-lg font-romantic text-romantic animate-fade-up opacity-0 delay-200" style={{ animationFillMode: 'forwards' }}>
              {t.reception.ceremony} <span className="font-semibold text-primary">3:00 PM</span>, {t.reception.dinner} <span className="font-semibold text-primary">4:30 PM</span>.
            </p>
          </div>
        </section>

        {/* Decorative divider */}
        <div className="flex items-center justify-center py-8">
          <div className="w-24 h-px bg-border" />
          <div className="mx-4 w-2 h-2 rounded-full bg-primary" />
          <div className="w-24 h-px bg-border" />
        </div>

        {/* Venue Section */}
        <VenueSection />

        {/* Decorative divider */}
        <div className="flex items-center justify-center py-8">
          <div className="w-24 h-px bg-border" />
          <div className="mx-4 w-2 h-2 rounded-full bg-primary" />
          <div className="w-24 h-px bg-border" />
        </div>

        {/* Accommodation Section */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-display text-primary mb-6 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
              {t.accommodation.title}
            </h2>
            <p className="text-lg font-romantic text-romantic leading-relaxed animate-fade-up opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
              {t.accommodation.description}
            </p>
            <p className="mt-2 font-romantic text-primary font-semibold text-lg animate-fade-up opacity-0 delay-200" style={{ animationFillMode: 'forwards' }}>
              Due Fratelli Village Resort
            </p>
          </div>
        </section>

        {/* Decorative divider */}
        <div className="flex items-center justify-center py-8">
          <div className="w-24 h-px bg-border" />
          <div className="mx-4 w-2 h-2 rounded-full bg-primary" />
          <div className="w-24 h-px bg-border" />
        </div>

        {/* Dress Code Section */}
        <DressCodeSection />

        {/* Decorative divider */}
        <div className="flex items-center justify-center py-8">
          <div className="w-24 h-px bg-border" />
          <div className="mx-4 w-2 h-2 rounded-full bg-primary" />
          <div className="w-24 h-px bg-border" />
        </div>

        {/* RSVP Info Section */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-display text-primary mb-6 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
              RSVP
            </h2>
            <p className="text-lg font-romantic text-romantic leading-relaxed animate-fade-up opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
              {t.rsvpInfo.description}
            </p>
            <div className="mt-6 space-y-2 font-romantic text-muted-foreground animate-fade-up opacity-0 delay-200" style={{ animationFillMode: 'forwards' }}>
              <p>Flaviu: <a href="tel:+40725266568" className="text-primary hover:underline">+40 725 266 568</a></p>
              <p>Maria: <a href="tel:+14034047776" className="text-primary hover:underline">+1 403 404 7776</a></p>
            </div>
          </div>
        </section>

        {/* Decorative divider */}
        <div className="flex items-center justify-center py-8">
          <div className="w-24 h-px bg-border" />
          <div className="mx-4 w-2 h-2 rounded-full bg-primary" />
          <div className="w-24 h-px bg-border" />
        </div>

        {/* RSVP Form Section */}
        <RSVPForm />

        {/* Footer */}
        <footer className="py-12 text-center">
          <p className="text-muted-foreground font-romantic text-sm">
            Maria & Flaviu · 2026
          </p>
        </footer>
      </div>
    </div>
  );
};

export default WeddingContent;
