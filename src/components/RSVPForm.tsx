import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const RSVPForm = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: '',
    guests: '1',
    dietary: [] as string[],
    message: '',
  });

  const handleDietaryChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      dietary: prev.dietary.includes(option)
        ? prev.dietary.filter(d => d !== option)
        : [...prev.dietary, option],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('RSVP submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto text-center animate-fade-up">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-lg font-romantic text-romantic">{t.rsvp.thankYou}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-4xl sm:text-5xl font-display text-center text-primary mb-4 animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          {t.rsvp.title}
        </h2>
        <p className="text-center text-muted-foreground font-romantic mb-8 animate-fade-up opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
          {t.rsvp.subtitle}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up opacity-0 delay-200" style={{ animationFillMode: 'forwards' }}>
          {/* Name */}
          <div>
            <label className="block text-sm font-romantic text-romantic mb-2">
              {t.rsvp.name}
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg bg-paper/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-romantic"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-romantic text-romantic mb-2">
              {t.rsvp.email}
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg bg-paper/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-romantic"
            />
          </div>

          {/* Attending */}
          <div>
            <label className="block text-sm font-romantic text-romantic mb-2">
              {t.rsvp.attending}
            </label>
            <div className="flex gap-4">
              <label className="flex-1">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={formData.attending === 'yes'}
                  onChange={e => setFormData(prev => ({ ...prev, attending: e.target.value }))}
                  className="sr-only peer"
                />
                <div className="px-4 py-3 rounded-lg border border-border text-center cursor-pointer peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:border-primary transition-all font-romantic">
                  {t.rsvp.yes}
                </div>
              </label>
              <label className="flex-1">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formData.attending === 'no'}
                  onChange={e => setFormData(prev => ({ ...prev, attending: e.target.value }))}
                  className="sr-only peer"
                />
                <div className="px-4 py-3 rounded-lg border border-border text-center cursor-pointer peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:border-primary transition-all font-romantic">
                  {t.rsvp.no}
                </div>
              </label>
            </div>
          </div>

          {formData.attending === 'yes' && (
            <>
              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-romantic text-romantic mb-2">
                  {t.rsvp.guests}
                </label>
                <select
                  value={formData.guests}
                  onChange={e => setFormData(prev => ({ ...prev, guests: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-paper/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-romantic"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              {/* Dietary Requirements */}
              <div>
                <label className="block text-sm font-romantic text-romantic mb-2">
                  {t.rsvp.dietary}
                </label>
                <div className="space-y-2">
                  {[
                    { key: 'glutenFree', label: t.rsvp.glutenFree },
                    { key: 'vegan', label: t.rsvp.vegan },
                    { key: 'vegetarian', label: t.rsvp.vegetarian },
                    { key: 'none', label: t.rsvp.none },
                  ].map(option => (
                    <label key={option.key} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.dietary.includes(option.key)}
                        onChange={() => handleDietaryChange(option.key)}
                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                      />
                      <span className="font-romantic text-romantic">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Message */}
          <div>
            <label className="block text-sm font-romantic text-romantic mb-2">
              {t.rsvp.message}
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg bg-paper/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-romantic resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-romantic text-lg hover:bg-primary/90 transition-colors shadow-lg"
          >
            {t.rsvp.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;
