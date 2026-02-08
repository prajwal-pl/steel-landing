"use client";

import { useState, useRef, useEffect } from "react";

interface IntroVideoProps {
    onComplete: () => void;
}

export function IntroVideo({ onComplete }: IntroVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [progress, setProgress] = useState(0);
    const [isSkipping, setIsSkipping] = useState(false);

    useEffect(() => {
        // Auto-play the video when component mounts
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // If autoplay fails (browser policy), complete immediately
                onComplete();
            });
        }
    }, [onComplete]);

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(currentProgress);
        }
    };

    const handleVideoEnd = () => {
        setIsSkipping(true);
        setTimeout(() => {
            onComplete();
        }, 500); // Small delay for fade out animation
    };

    const handleSkip = () => {
        setIsSkipping(true);
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setTimeout(() => {
            onComplete();
        }, 500);
    };

    return (
        <div
            className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-500 ${isSkipping ? "opacity-0" : "opacity-100"
                }`}
        >
            {/* Video */}
            <video
                ref={videoRef}
                src="/assets/intro.mp4"
                className="w-full h-full object-cover"
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnd}
                playsInline
                muted
            />

            {/* Skip Button */}
            <button
                onClick={handleSkip}
                className="absolute bottom-8 right-8 flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all group"
            >
                <span>Skip Intro</span>
                {/* Progress Ring */}
                <div className="relative w-8 h-8">
                    <svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
                        {/* Background circle */}
                        <circle
                            cx="18"
                            cy="18"
                            r="15.5"
                            fill="none"
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="2"
                        />
                        {/* Progress circle */}
                        <circle
                            cx="18"
                            cy="18"
                            r="15.5"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray={`${progress * 0.97} 97`}
                            className="transition-all duration-100"
                        />
                    </svg>
                    {/* Skip arrow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 5v14l11-7z" />
                            <path d="M19 5v14h-2V5h2z" />
                        </svg>
                    </div>
                </div>
            </button>

            {/* Brand watermark */}
            <div
                className="absolute top-8 left-8 text-white/60 text-lg tracking-wide"
                style={{
                    fontFamily: "var(--font-bebas-neue), 'Bebas Neue', 'Arial Narrow', sans-serif",
                    transform: "skewX(-8deg)",
                }}
            >
                <span className="font-bold">STALLION</span>
                <span className="font-normal opacity-70">STAINLESS</span>
            </div>
        </div>
    );
}
