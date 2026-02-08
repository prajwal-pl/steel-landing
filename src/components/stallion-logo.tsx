"use client";

import Link from "next/link";

interface StallionLogoProps {
    className?: string;
    size?: "sm" | "md" | "lg";
    linkToHome?: boolean;
}

export function StallionLogo({
    className = "",
    size = "md",
    linkToHome = true
}: StallionLogoProps) {
    const sizeClasses = {
        sm: "text-xl",
        md: "text-2xl md:text-3xl",
        lg: "text-3xl md:text-4xl",
    };

    const logoContent = (
        <span className={`inline-flex items-baseline tracking-tight ${sizeClasses[size]} ${className}`}>
            <span
                className="font-bebas font-bold"
                style={{
                    fontFamily: "var(--font-bebas-neue), 'Bebas Neue', 'Arial Narrow', sans-serif",
                    transform: "skewX(-8deg)",
                    display: "inline-block",
                    letterSpacing: "0.02em"
                }}
            >
                STALLION
            </span>
            <span
                className="font-bebas font-normal opacity-70"
                style={{
                    fontFamily: "var(--font-bebas-neue), 'Bebas Neue', 'Arial Narrow', sans-serif",
                    transform: "skewX(-8deg)",
                    display: "inline-block",
                    letterSpacing: "0.02em"
                }}
            >
                STAINLESS
            </span>
        </span>
    );

    if (linkToHome) {
        return (
            <Link href="/" className="hover:opacity-80 transition-opacity">
                {logoContent}
            </Link>
        );
    }

    return logoContent;
}
