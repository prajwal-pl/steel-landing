import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, ShoppingCart, MapPin, Heart, ChevronRight, Menu, Filter, Grid3X3, LayoutGrid } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const products = [
    {
        id: 1,
        name: "Modern Stainless Steel Gate",
        price: "₹45,000",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop",
        category: "Gates",
    },
    {
        id: 2,
        name: "Premium SS Railing System",
        price: "₹2,500/ft",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop",
        category: "Railings",
    },
    {
        id: 3,
        name: "Industrial Steel Bench",
        price: "₹18,000",
        image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2727&auto=format&fit=crop",
        category: "Benches",
    },
    {
        id: 4,
        name: "Polycarbonate Canopy",
        price: "₹35,000",
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1974&auto=format&fit=crop",
        category: "Canopies",
    },
    {
        id: 5,
        name: "Stainless Steel Coffee Table",
        price: "₹22,000",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
        category: "Furniture",
    },
    {
        id: 6,
        name: "SS Wall Cladding Panel",
        price: "₹850/sqft",
        image: "https://images.unsplash.com/photo-1558618047-f4b511ce5c0b?q=80&w=2000&auto=format&fit=crop",
        category: "Claddings",
    },
    {
        id: 7,
        name: "Automatic Sliding Gate",
        price: "₹85,000",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2000&auto=format&fit=crop",
        category: "Gates",
    },
    {
        id: 8,
        name: "Glass & Steel Balustrade",
        price: "₹4,200/ft",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop",
        category: "Railings",
    },
];

export default function ProductsPage() {
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
                        <span className="text-neutral-900">All Products</span>
                    </div>
                </div>

                {/* Page Header */}
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">All Products</h1>
                    <p className="text-neutral-600 max-w-2xl">
                        Explore our complete collection of premium stainless steel products. From elegant gates to modern railings, find the perfect pieces for your space.
                    </p>
                </div>

                {/* Filters Bar */}
                <div className="container mx-auto px-4 mb-8">
                    <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-neutral-200">
                        <div className="flex items-center gap-4">
                            <Button variant="outline" className="h-10 rounded-none border-neutral-300 gap-2">
                                <Filter className="h-4 w-4" />
                                Filter
                            </Button>
                            <div className="hidden md:flex gap-2">
                                {["Gates", "Railings", "Benches", "Canopies", "Furniture", "Claddings"].map((cat) => (
                                    <Button key={cat} variant="ghost" className="h-9 px-4 rounded-full text-sm hover:bg-neutral-100">
                                        {cat}
                                    </Button>
                                ))}
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
                                </div>
                                <div>
                                    <span className="text-xs text-neutral-500 uppercase tracking-wider">{product.category}</span>
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
