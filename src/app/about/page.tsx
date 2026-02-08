import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, ShoppingCart, MapPin, Heart, ChevronRight, Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-neutral-900">
            {/* Top Banner */}
            <div className="hidden border-b border-neutral-200 bg-neutral-100 px-4 py-1 text-xs font-medium sm:block">
                <div className="container mx-auto flex justify-between">
                    <div className="flex gap-4">
                        <span>Stallion Stainless</span>
                        <span>Stallion Comfort System</span>
                        <span>Since 1985</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="flex items-center gap-1">Global Shipping <ChevronRight className="h-3 w-3" /></span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="sticky top-0 z-50 w-full bg-white">
                <div className="container mx-auto px-4 py-4 md:py-6">
                    <div className="flex items-center justify-between gap-4">
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
                        <div className="md:hidden">
                            <Menu className="h-6 w-6" />
                        </div>
                        <div className="flex-1 text-center md:flex-none">
                            <Link href="/" className="text-2xl font-bold tracking-tight md:text-3xl font-serif">
                                STALLION<span className="font-light">STAINLESS</span>
                            </Link>
                        </div>
                        <div className="flex w-auto md:w-1/4 justify-end items-center gap-4 sm:gap-6">
                            <div className="hidden flex-col items-center gap-1 sm:flex cursor-pointer hover:text-neutral-600">
                                <div className="flex items-center gap-1 text-xs font-semibold">
                                    Orders & Sign In <User className="h-5 w-5" />
                                </div>
                            </div>
                            <MapPin className="h-6 w-6 cursor-pointer hover:text-neutral-600 hidden sm:block" />
                            <Heart className="h-6 w-6 cursor-pointer hover:text-neutral-600 hidden sm:block" />
                            <Link href="/checkout" className="relative cursor-pointer hover:text-neutral-600">
                                <ShoppingCart className="h-6 w-6" />
                                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-[10px] text-white">0</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Navigation Categories */}
                <nav className="hidden border-b border-neutral-200 md:block">
                    <div className="container mx-auto">
                        <ul className="flex justify-center gap-8 py-4 text-sm font-semibold tracking-wide text-neutral-800">
                            {[
                                { name: "Sofas", href: "/products/sofas" },
                                { name: "Beds", href: "/products/beds" },
                                { name: "Tables", href: "/products/tables" },
                                { name: "Chairs", href: "/products/chairs" },
                                { name: "All Products", href: "/products" },
                                { name: "About Us", href: "/about" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="cursor-pointer hover:underline underline-offset-4 decoration-neutral-400">
                                        {item.name === "About Us" ? <span className="text-red-700 underline underline-offset-4">About Us</span> : item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>

            <main className="pb-20">
                {/* Breadcrumb */}
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <Link href="/" className="hover:text-neutral-900">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-neutral-900">About Us</span>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative h-[400px] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-neutral-200">
                        <img
                            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2000&auto=format&fit=crop"
                            alt="Our Workshop"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative container mx-auto h-full px-4 flex items-center justify-center text-center">
                        <div className="max-w-2xl text-white">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
                            <p className="text-xl opacity-90">Crafting excellence since 1985</p>
                        </div>
                    </div>
                </section>

                {/* About Content */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                                    <p className="text-neutral-600 leading-relaxed mb-4">
                                        Stallion Stainless has been at the forefront of premium furniture manufacturing since 1985.
                                        Under the visionary leadership of Mr. Kamalesh Mehta, we have grown from a small workshop
                                        to one of the most trusted names in stainless steel furniture.
                                    </p>
                                    <p className="text-neutral-600 leading-relaxed">
                                        Our commitment to quality, innovation, and customer satisfaction has remained unwavering
                                        through the decades. Every piece of furniture we create is a testament to our dedication
                                        to excellence.
                                    </p>
                                </div>
                                <div className="aspect-square bg-neutral-100 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop"
                                        alt="Our Craftsmanship"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            <Separator className="my-16" />

                            {/* Values */}
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold mb-12">Our Values</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="p-6">
                                        <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white text-2xl font-bold">Q</span>
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2">Quality</h3>
                                        <p className="text-neutral-600 text-sm">
                                            We use only the finest 304-grade stainless steel and premium materials in all our products.
                                        </p>
                                    </div>
                                    <div className="p-6">
                                        <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white text-2xl font-bold">C</span>
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2">Craftsmanship</h3>
                                        <p className="text-neutral-600 text-sm">
                                            Our skilled artisans bring decades of experience to every piece they create.
                                        </p>
                                    </div>
                                    <div className="p-6">
                                        <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white text-2xl font-bold">S</span>
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2">Service</h3>
                                        <p className="text-neutral-600 text-sm">
                                            From design consultation to after-sales support, we're with you every step of the way.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Separator className="my-16" />

                            {/* Contact */}
                            <div className="text-center">
                                <h2 className="text-3xl font-bold mb-6">Visit Our Showroom</h2>
                                <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
                                    Experience our furniture collection in person. Our design experts are ready to help you
                                    find the perfect pieces for your home.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/products">
                                        <Button className="h-12 px-8 rounded-none bg-neutral-900 text-white hover:bg-neutral-800">
                                            Browse Products
                                        </Button>
                                    </Link>
                                    <Button variant="outline" className="h-12 px-8 rounded-none border-neutral-900">
                                        Contact Us
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white pt-20 pb-10 border-t border-neutral-200 text-neutral-900 text-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <span className="underline cursor-pointer">Terms of Use</span>
                            <span className="underline cursor-pointer">Privacy</span>
                            <span className="underline cursor-pointer">Site Index</span>
                        </div>
                        <p>&copy; {new Date().getFullYear()} Stallion Stainless. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
