"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search, User, MapPin, Heart, Phone, Menu } from "lucide-react";
import { ContactModal } from "@/components/contact-modal";

export function MainHeader() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <>
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />

            <header className="sticky top-0 z-50 w-full bg-white">
                <div className="container mx-auto px-4 py-4 md:py-6">
                    <div className="flex items-center justify-between gap-4">
                        {/* Search Bar */}
                        <div className="hidden md:block w-1/4">
                            <div className="relative">
                                <Input
                                    type="text"
                                    placeholder="What can we help you find?"
                                    className="h-11 rounded-none border-neutral-300 bg-white pl-4 pr-10 text-sm placeholder:text-neutral-500 focus-visible:ring-1 focus-visible:ring-neutral-900"
                                />
                                <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
                            </div>
                        </div>

                        {/* Mobile Menu Icon */}
                        <div className="md:hidden">
                            <Menu className="h-6 w-6" />
                        </div>

                        {/* Logo */}
                        <div className="flex-1 text-center md:flex-none">
                            <Link href="/" className="text-2xl font-bold tracking-tight md:text-3xl font-serif">
                                STALLION<span className="font-light">STAINLESS</span>
                            </Link>
                        </div>

                        {/* Icons */}
                        <div className="flex w-auto md:w-1/4 justify-end items-center gap-4 sm:gap-6">
                            <div className="hidden flex-col items-center gap-1 sm:flex cursor-pointer hover:text-neutral-600">
                                <div className="flex items-center gap-1 text-xs font-semibold">
                                    Orders & Sign In <User className="h-5 w-5" />
                                </div>
                            </div>
                            <MapPin className="h-6 w-6 cursor-pointer hover:text-neutral-600 hidden sm:block" />
                            <Heart className="h-6 w-6 cursor-pointer hover:text-neutral-600 hidden sm:block" />
                            <button
                                onClick={() => setIsContactModalOpen(true)}
                                className="relative cursor-pointer hover:text-neutral-600"
                            >
                                <Phone className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Categories */}
                <nav className="hidden border-b border-neutral-200 md:block">
                    <div className="container mx-auto">
                        <ul className="flex justify-center gap-8 py-4 text-sm font-semibold tracking-wide text-neutral-800">
                            {[
                                { name: "Sofas", href: "/products/sofas", sale: true },
                                { name: "Beds", href: "/products/beds" },
                                { name: "Tables", href: "/products/tables" },
                                { name: "Chairs", href: "/products/chairs" },
                                { name: "All Products", href: "/products" },
                                { name: "About Us", href: "/about" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="cursor-pointer hover:underline underline-offset-4 decoration-neutral-400">
                                        {item.sale ? <span className="text-red-700">{item.name}</span> : item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
