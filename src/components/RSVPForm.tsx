import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const RSVPForm = () => {
    const { t } = useLanguage();
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        attending: '',
        guests: '1',
        dietary: [] as string[],
        otherAllergies: '',
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);

        try {
            const endpoint = import.meta.env.VITE_RSVP_ENDPOINT as string | undefined;
            if (!endpoint) {
                alert('RSVP endpoint is not configured.');
                return;
            }

            const payload = {
                ...formData,
                guests: Number(formData.guests),
                submittedAt: new Date().toISOString(),
            };

            await fetch(endpoint, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(payload),
            });

            setSubmitted(true);
        } catch (err) {
            console.error(err);
            alert('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
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

    const dietaryOptions = [
        { key: 'glutenFree', label: t.rsvp.glutenFree },
        { key: 'vegetarian', label: t.rsvp.vegetarian },
        { key: 'vegan', label: t.rsvp.vegan },
        { key: 'nutAllergy', label: t.rsvp.nutAllergy },
    ];

    return (
        <section className="py-2 sm:py-5 px-4">
            <div className="max-w-lg mx-auto">
                <p
                    className="text-center text-muted-foreground font-romantic mb-4 sm:mb-5 animate-fade-up opacity-0 delay-100"
                    style={{ animationFillMode: 'forwards' }}
                >
                    {t.rsvp.subtitle}
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="bg-card/50 rounded-xl p-6 sm:p-8 shadow-lg border border-border animate-fade-up opacity-0 delay-200"
                    style={{ animationFillMode: 'forwards' }}
                >
                    <div className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-romantic text-romantic mb-2">
                                {t.rsvp.name} *
                            </label>
                            <input
                                type="text"
                                required
                                placeholder={t.rsvp.namePlaceholder}
                                value={formData.name}
                                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-romantic"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-romantic text-romantic mb-2">
                                {t.rsvp.email}
                            </label>
                            <input
                                type="email"
                                placeholder={t.rsvp.emailPlaceholder}
                                value={formData.email}
                                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-romantic"
                            />
                        </div>

                        {/* Attending */}
                        <div>
                            <label className="block text-sm font-romantic text-romantic mb-3">
                                {t.rsvp.attending} *
                            </label>
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="attending"
                                        value="yes"
                                        checked={formData.attending === 'yes'}
                                        onChange={e => setFormData(prev => ({ ...prev, attending: e.target.value }))}
                                        className="w-5 h-5 text-primary border-border focus:ring-primary"
                                        required
                                    />
                                    <span className="font-romantic text-romantic">{t.rsvp.yes}</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="attending"
                                        value="no"
                                        checked={formData.attending === 'no'}
                                        onChange={e => setFormData(prev => ({ ...prev, attending: e.target.value }))}
                                        className="w-5 h-5 text-primary border-border focus:ring-primary"
                                        required
                                    />
                                    <span className="font-romantic text-romantic">{t.rsvp.no}</span>
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
                                    <input
                                        type="number"
                                        min="1"
                                        max="10"
                                        value={formData.guests}
                                        onChange={e => setFormData(prev => ({ ...prev, guests: e.target.value }))}
                                        className="w-24 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-romantic"
                                    />
                                </div>

                                {/* Dietary Requirements */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <label className="text-base font-romantic text-romantic font-medium">
                                            {t.rsvp.dietary}
                                        </label>
                                    </div>

                                    <p className="text-sm text-muted-foreground font-romantic mb-4">
                                        {t.rsvp.dietaryDescription}
                                    </p>

                                    <div className="grid grid-cols-2 gap-3">
                                        {dietaryOptions.map(option => (
                                            <label key={option.key} className="flex items-center gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.dietary.includes(option.key)}
                                                    onChange={() => handleDietaryChange(option.key)}
                                                    className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                                                />
                                                <span className="font-romantic text-romantic text-sm">{option.label}</span>
                                            </label>
                                        ))}
                                    </div>

                                    {/* Other allergies */}
                                    <div className="mt-4">
                                        <label className="block text-sm font-romantic text-muted-foreground mb-2">
                                            {t.rsvp.otherAllergies}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder={t.rsvp.otherAllergiesPlaceholder}
                                            value={formData.otherAllergies}
                                            onChange={e => setFormData(prev => ({ ...prev, otherAllergies: e.target.value }))}
                                            className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-romantic text-sm"
                                        />
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
                                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-romantic resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={[
                                "w-full py-4 bg-primary text-primary-foreground rounded-lg font-romantic text-lg transition-colors shadow-lg",
                                isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:bg-primary/90",
                            ].join(" ")}
                        >
                            {isSubmitting ? (t.rsvp.submitting ?? "Submitting...") : t.rsvp.submit}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default RSVPForm;
