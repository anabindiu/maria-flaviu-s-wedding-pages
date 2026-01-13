import { useMemo, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import envelopeImg from '@/assets/envelope4.webp';
import animatedMp4 from '@/assets/animated.mp4';

interface EnvelopeProps {
    onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
    const { t } = useLanguage();

    const [isOpening, setIsOpening] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [videoReady, setVideoReady] = useState(false);

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const bgTransform = useMemo(() => 'translateY(-5%) scale(1.15)', []);

    const handleOpen = () => {
        if (isOpening) return;
        setIsOpening(true);
        setShowVideo(true);
        setVideoReady(false);
    };

    return (
        <div className="fixed inset-0 overflow-hidden bg-black">
            {/* Keep image visible until video is actually playing/ready */}
            {(!showVideo || !videoReady) && (
                <img
                    src={envelopeImg}
                    alt="Envelope"
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover select-none"
                    style={{
                        transform: bgTransform,
                        transformOrigin: 'center',
                    }}
                />
            )}

            {/* Full-screen opening animation */}
            {showVideo && (
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        transform: bgTransform,
                        transformOrigin: 'center',
                    }}
                    src={animatedMp4}
                    autoPlay
                    playsInline
                    muted
                    preload="auto"
                    onPlaying={() => setVideoReady(true)}
                    onCanPlay={() => setVideoReady(true)}
                    onEnded={() => onOpen()}
                />
            )}

            {/* ✅ ONE liftSeal text only (and it's clickable before opening) */}
            {!isOpening ? (
                <button
                    onClick={handleOpen}
                    className="absolute inset-0 z-40"
                    aria-label="Open invitation"
                    style={{ background: 'transparent' }}
                >
                    <div className="absolute left-1/2 top-[60%] -translate-x-1/2 px-4 text-center">
                        <p className="font-coalhand text-base sm:text-lg tracking-widest leading-tight text-white/45 whitespace-pre-line">
                            {t.liftSeal}
                        </p>
                    </div>
                </button>
            ) : (
                <div className="absolute inset-0 z-30 pointer-events-none">
                    <div className="absolute left-1/2 top-[60%] -translate-x-1/2 px-4 text-center">
                        <p className="font-coalhand text-base sm:text-lg tracking-widest leading-tight text-white/45 whitespace-pre-line">
                            {t.liftSeal}
                        </p>
                    </div>
                </div>
            )}

            {/* Invisible clickable seal (only before opening) */}
            {!isOpening && (
                <button
                    onClick={handleOpen}
                    aria-label="Open invitation"
                    className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 rounded-full z-50 cursor-pointer"
                    style={{ background: 'transparent' }}
                />
            )}
        </div>
    );
};

export default Envelope;
