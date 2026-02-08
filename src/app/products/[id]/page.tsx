import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, ShoppingCart, MapPin, Heart, ChevronRight, Menu, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const product = {
    id: 1,
    name: "Modern Stainless Steel Gate",
    price: "₹45,000",
    description: "Crafted with precision from premium 304-grade stainless steel, this modern gate combines elegance with durability. Perfect for residential entrances, it features a sleek design that complements contemporary architecture while providing robust security.",
    images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558618047-f4b511ce5c0b?q=80&w=2000&auto=format&fit=crop",
    ],
    category: "Gates",
    features: [
        "304-grade stainless steel construction",
        "Weather-resistant finish",
        "Custom sizing available",
        "10-year warranty",
        "Professional installation included",
    ],
};

export default function ProductDetailPage() {
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
                            {["Furniture", "Benches", "Railings", "Claddings", "Gates", "Canopies", "Fabrication", "About Us"].map((item) => (
                                <li key={item} className="cursor-pointer hover:underline underline-offset-4 decoration-neutral-400">
                                    {item === "Furniture" ? <span className="text-red-700">Sale</span> : item}
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
                        <Link href="/products" className="hover:text-neutral-900">Products</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-neutral-900">{product.name}</span>
                    </div>
                </div>

                {/* Product Detail */}
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-neutral-100 overflow-hidden">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {product.images.map((img, idx) => (
                                    <div key={idx} className="aspect-square bg-neutral-100 overflow-hidden cursor-pointer border-2 border-transparent hover:border-neutral-900">
                                        <img
                                            src={img}
                                            alt={`${product.name} ${idx + 1}`}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            <div>
                                <span className="text-sm text-neutral-500 uppercase tracking-wider">{product.category}</span>
                                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">{product.name}</h1>
                            </div>

                            <p className="text-2xl font-semibold">{product.price}</p>

                            <p className="text-neutral-600 leading-relaxed">{product.description}</p>

                            <Separator />

                            {/* Quantity Selector */}
                            <div className="space-y-3">
                                <label className="text-sm font-semibold">Quantity</label>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center border border-neutral-300">
                                        <button className="h-12 w-12 flex items-center justify-center hover:bg-neutral-100">
                                            <Minus className="h-4 w-4" />
                                        </button>
                                        <span className="h-12 w-16 flex items-center justify-center border-x border-neutral-300 font-semibold">1</span>
                                        <button className="h-12 w-12 flex items-center justify-center hover:bg-neutral-100">
                                            <Plus className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Add to Cart */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="flex-1 h-14 rounded-none bg-neutral-900 text-white hover:bg-neutral-800 text-base font-semibold">
                                    Add to Cart
                                </Button>
                                <Button variant="outline" className="h-14 w-14 rounded-none border-neutral-300">
                                    <Heart className="h-5 w-5" />
                                </Button>
                            </div>

                            <Separator />

                            {/* Features */}
                            <div className="space-y-4">
                                <h3 className="font-semibold">Key Features</h3>
                                <ul className="space-y-2">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-neutral-600">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Separator />

                            {/* Shipping Info */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="flex items-center gap-3">
                                    <Truck className="h-5 w-5 text-neutral-600" />
                                    <span className="text-sm">Free Shipping</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Shield className="h-5 w-5 text-neutral-600" />
                                    <span className="text-sm">10-Year Warranty</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RotateCcw className="h-5 w-5 text-neutral-600" />
                                    <span className="text-sm">Easy Returns</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
