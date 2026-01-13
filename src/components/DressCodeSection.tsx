import { useLanguage } from '@/contexts/LanguageContext';
import paletteImg from '@/assets/pallet.png';

const DressCodeSection = () => {
    const { t } = useLanguage();

    return (
        <section className="py-12 px-4">
            <div className="max-w-2xl mx-auto text-center">
                <h2
                    className="text-3xl sm:text-4xl font-display text-primary mb-6 animate-fade-up opacity-0"
                    style={{ animationFillMode: 'forwards' }}
                >
                    {t.dressCode.title}
                </h2>

                <p
                    className="text-lg font-romantic text-romantic leading-relaxed mb-8 animate-fade-up opacity-0 delay-100"
                    style={{ animationFillMode: 'forwards' }}
                >
                    {t.dressCode.description}
                </p>

                {/* Palette image */}
                <div
                    className="mx-auto -mt-2 w-full max-w-[430px] animate-fade-up opacity-0 delay-200"
                    style={{ animationFillMode: 'forwards' }}
                >
                    <img
                        src={paletteImg}
                        alt="Dress code color palette"
                        className="w-full h-auto block"
                        draggable={false}
                    />
                </div>

            </div>
        </section>
    );
};

export default DressCodeSection;
