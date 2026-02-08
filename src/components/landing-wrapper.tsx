"use client";

import { useState, useEffect } from "react";
import { IntroVideo } from "@/components/intro-video";

interface LandingWrapperProps {
    children: React.ReactNode;
}

export function LandingWrapper({ children }: LandingWrapperProps) {
    const [showIntro, setShowIntro] = useState(true);
    const [hasCheckedSession, setHasCheckedSession] = useState(false);

    useEffect(() => {
        // Check if user has already seen the intro in this session
        const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
        if (hasSeenIntro) {
            setShowIntro(false);
        }
        setHasCheckedSession(true);
    }, []);

    const handleIntroComplete = () => {
        setShowIntro(false);
        // Mark that user has seen the intro for this session
        sessionStorage.setItem("hasSeenIntro", "true");
    };

    // Don't render anything until we've checked session storage
    // This prevents flash of content before intro
    if (!hasCheckedSession) {
        return (
            <div className="fixed inset-0 bg-black z-[100]" />
        );
    }

    return (
        <>
            {showIntro && <IntroVideo onComplete={handleIntroComplete} />}
            <div
                className={`transition-opacity duration-500 ${showIntro ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
            >
                {children}
            </div>
        </>
    );
}
