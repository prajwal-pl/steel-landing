"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Heart, Phone } from "lucide-react";
import { ContactModal } from "@/components/contact-modal";

interface CategoryHeaderProps {
    activeCategory?: "sofas" | "beds" | "tables" | "chairs" | "all";
}

export function CategoryHeader({ activeCategory }: CategoryHeaderProps) {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    const navItems = [
        { name: "Sofas", href: "/products/sofas", key: "sofas" },
        { name: "Beds", href: "/products/beds", key: "beds" },
        { name: "Tables", href: "/products/tables", key: "tables" },
        { name: "Chairs", href: "/products/chairs", key: "chairs" },
        { name: "All Products", href: "/products", key: "all" },
        { name: "About Us", href: "/about", key: "about" },
    ];

    return (
        <>
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />

            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative h-10 w-10 shrink-0">
                                <Image
                                    src="/logo-stallion.png"
                                    alt="Stallion Logo"
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                            {isHomePage && (
                                <div className="flex flex-col items-start text-left">
                                    <span className="text-xl md:text-2xl font-bold tracking-tight font-serif leading-none text-neutral-900">
                                        STALLION
                                    </span>
                                    <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium text-neutral-500 mt-1">
                                        Shaping the future
                                    </span>
                                </div>
                            )}
                        </Link>

                        <nav className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.key}
                                    href={item.href}
                                    className={`text-sm ${activeCategory === item.key
                                        ? "text-neutral-900 font-medium"
                                        : "text-neutral-600 hover:text-neutral-900"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="flex items-center gap-4">
                            <button className="p-2 hover:bg-neutral-100 rounded-full">
                                <Heart className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setIsContactModalOpen(true)}
                                className="p-2 hover:bg-neutral-100 rounded-full"
                            >
                                <Phone className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
