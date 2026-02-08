import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, ShoppingCart, MapPin, Heart, ChevronRight, Menu, Filter, Grid3X3, LayoutGrid } from "lucide-react";

const subcategories = [
    { name: "Single Beds", slug: "single", description: "Compact & cozy" },
    { name: "Double Beds", slug: "double", description: "Classic comfort" },
    { name: "Queen Beds", slug: "queen", description: "Spacious luxury" },
    { name: "King Beds", slug: "king", description: "Ultimate grandeur" },
    { name: "Storage Beds", slug: "storage", description: "Smart solutions" },
];

const products = [
    {
        id: 201,
        name: "Modern SS Frame Single Bed",
        price: "₹28,000",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
        subcategory: "Single Beds",
        range: "Economic",
    },
    {
        id: 202,
        name: "Premium Double Bed with Headboard",
        price: "₹55,000",
        image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=2000&auto=format&fit=crop",
        subcategory: "Double Beds",
        range: "Exclusive",
    },
    {
        id: 203,
        name: "Luxury Queen Size Platform Bed",
        price: "₹85,000",
        image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2000&auto=format&fit=crop",
        subcategory: "Queen Beds",
        range: "Exclusive",
    },
    {
        id: 204,
        name: "Grand King Size Canopy Bed",
        price: "₹1,50,000",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2000&auto=format&fit=crop",
        subcategory: "King Beds",
        range: "Custom",
    },
    {
        id: 205,
        name: "Smart Storage Queen Bed",
        price: "₹72,000",
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2000&auto=format&fit=crop",
        subcategory: "Storage Beds",
        range: "Exclusive",
    },
    {
        id: 206,
        name: "Budget-Friendly Double Bed",
        price: "₹32,000",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2000&auto=format&fit=crop",
        subcategory: "Double Beds",
        range: "Economic",
    },
    {
        id: 207,
        name: "Custom Designer King Bed",
        price: "₹2,25,000",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2000&auto=format&fit=crop",
        subcategory: "King Beds",
        range: "Custom",
    },
    {
        id: 208,
        name: "Minimalist Single Bed Frame",
        price: "₹22,000",
        image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=2000&auto=format&fit=crop",
        subcategory: "Single Beds",
        range: "Economic",
    },
];

export default function BedsPage() {
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
                                        {item.name === "Beds" ? <span className="text-red-700 underline underline-offset-4">Beds</span> : item.name}
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
                        <Link href="/products" className="hover:text-neutral-900">Products</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-neutral-900">Beds</span>
                    </div>
                </div>

                {/* Page Header */}
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Beds Collection</h1>
                    <p className="text-neutral-600 max-w-2xl">
                        Experience superior comfort with our stainless steel bed frames. Built to last a lifetime with elegant designs that complement any bedroom aesthetic.
                    </p>
                </div>

                {/* Subcategories Grid */}
                <div className="container mx-auto px-4 mb-12">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {subcategories.map((sub) => (
                            <Link
                                href={`/products/beds?type=${sub.slug}`}
                                key={sub.slug}
                                className="group p-4 border border-neutral-200 hover:border-neutral-900 transition-colors text-center"
                            >
                                <h3 className="font-semibold text-sm group-hover:underline">{sub.name}</h3>
                                <p className="text-xs text-neutral-500 mt-1">{sub.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Range Filters */}
                <div className="container mx-auto px-4 mb-8">
                    <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-neutral-200">
                        <div className="flex items-center gap-4">
                            <Button variant="outline" className="h-10 rounded-none border-neutral-300 gap-2">
                                <Filter className="h-4 w-4" />
                                Filter
                            </Button>
                            <div className="hidden md:flex gap-2">
                                <Button variant="ghost" className="h-9 px-4 rounded-full text-sm bg-green-50 text-green-700 hover:bg-green-100">
                                    Economic Range
                                </Button>
                                <Button variant="ghost" className="h-9 px-4 rounded-full text-sm bg-purple-50 text-purple-700 hover:bg-purple-100">
                                    Exclusive Range
                                </Button>
                                <Button variant="ghost" className="h-9 px-4 rounded-full text-sm bg-amber-50 text-amber-700 hover:bg-amber-100">
                                    Custom Range
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-neutral-500">{products.length} Products</span>
                            <div className="flex gap-1">
                                <Button variant="ghost" size="icon" className="h-9 w-9">
                                    <Grid3X3 className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-9 w-9">
                                    <LayoutGrid className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <Link href={`/products/${product.id}`} key={product.id} className="group cursor-pointer">
                                <div className="overflow-hidden bg-neutral-100 aspect-[4/5] relative mb-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Heart className="h-4 w-4" />
                                    </button>
                                    <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded ${product.range === "Economic" ? "bg-green-100 text-green-700" :
                                            product.range === "Exclusive" ? "bg-purple-100 text-purple-700" :
                                                "bg-amber-100 text-amber-700"
                                        }`}>
                                        {product.range}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-xs text-neutral-500 uppercase tracking-wider">{product.subcategory}</span>
                                    <h3 className="font-semibold text-sm mt-1 group-hover:underline">{product.name}</h3>
                                    <p className="text-sm text-neutral-600 mt-1">{product.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Load More */}
                <div className="container mx-auto px-4 mt-12 text-center">
                    <Button variant="outline" className="h-12 px-12 rounded-none border-neutral-900">
                        Load More Products
                    </Button>
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
