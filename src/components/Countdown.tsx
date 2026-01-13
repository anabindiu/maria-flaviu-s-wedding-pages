import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Countdown = () => {
    const { t } = useLanguage();

    // ✅ May 9, 2026 at 15:00 in Romania (EEST = UTC+3)
    // 15:00 EEST == 12:00 UTC
    const weddingDateUTC = Date.UTC(2026, 4, 9, 12, 0, 0); // months are 0-based (May = 4)

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const tick = () => {
            const nowUTC = Date.now(); // always UTC-based timestamp
            const difference = weddingDateUTC - nowUTC;

            if (difference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            });
        };

        tick(); // run immediately so it doesn't wait 1s
        const timer = setInterval(tick, 1000);
        return () => clearInterval(timer);
    }, [weddingDateUTC]);

    const timeUnits = [
        { value: timeLeft.days, label: t.countdown.days },
        { value: timeLeft.hours, label: t.countdown.hours },
        { value: timeLeft.minutes, label: t.countdown.minutes },
        { value: timeLeft.seconds, label: t.countdown.seconds },
    ];

    return (
        <div className="py-16 px-4">
            <div className="flex justify-center gap-6 sm:gap-12 flex-wrap">
                {timeUnits.map((unit, index) => (
                    <div
                        key={unit.label}
                        className="flex flex-col items-center animate-fade-up opacity-0"
                        style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                    >
                        <span className="text-4xl sm:text-5xl md:text-6xl font-display text-primary">
                            {String(unit.value).padStart(2, '0')}
                        </span>
                        <span className="mt-1 text-xs sm:text-sm font-romantic text-muted-foreground uppercase tracking-wider">
                            {unit.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Countdown;
