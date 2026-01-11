import { useLanguage } from '@/contexts/LanguageContext';
import venueWatercolor from '@/assets/venue-watercolor.png';

const VenueSection = () => {
  const { t } = useLanguage();
  
  const googleMapsUrl = 'https://www.google.com/maps/place/Sura+Slavia/@47.1447222,22.6594444,17z';
  const embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700!2d22.6594444!3d47.1447222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4747c8c2e0000001%3A0x1!2sSura%20Slavia%2C%20Sinteu%2C%20Bihor!5e0!3m2!1sen!2sro!4v1699000000000!5m2!1sen!2sro';

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-display text-center text-primary mb-12 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          {t.theVenue}
        </h2>
        
        {/* Watercolor venue image */}
        <div className="mb-8 animate-fade-up opacity-0 delay-200" style={{ animationFillMode: 'forwards' }}>
          <div className="relative max-w-lg mx-auto">
            <img 
              src={venueWatercolor} 
              alt="Sura Slavia" 
              className="w-full rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none" />
          </div>
        </div>
        
        {/* Venue name and address */}
        <div className="text-center mb-8 animate-fade-up opacity-0 delay-300" style={{ animationFillMode: 'forwards' }}>
          <h3 className="text-2xl sm:text-3xl font-display text-romantic mb-2">
            Sura Slavia
          </h3>
          <p className="text-muted-foreground font-romantic">
            {t.venueAddress}
          </p>
          <p className="text-primary font-romantic text-lg mt-2">
            3:00 PM
          </p>
        </div>
        
        {/* Google Maps embed */}
        <div className="mb-6 rounded-lg overflow-hidden shadow-xl animate-fade-up opacity-0 delay-400" style={{ animationFillMode: 'forwards' }}>
          <iframe
            src={embedUrl}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue Location"
            className="w-full"
          />
        </div>
        
        {/* View on Maps button */}
        <div className="text-center animate-fade-up opacity-0 delay-500" style={{ animationFillMode: 'forwards' }}>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-romantic hover:bg-primary/90 transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t.viewOnMaps}
          </a>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
