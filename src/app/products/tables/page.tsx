"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, ChevronRight, Filter, Grid3X3, LayoutGrid, X } from "lucide-react";
import { tablesProducts, tablesSubcategories, filterProducts, ProductRange } from "@/lib/products";

export default function TablesPage() {
    const [selectedRange, setSelectedRange] = useState<ProductRange | null>(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

    const filteredProducts = useMemo(() => {
        return filterProducts(tablesProducts, {
            range: selectedRange,
            subcategory: selectedSubcategory,
        });
    }, [selectedRange, selectedSubcategory]);

    const clearFilters = () => {
        setSelectedRange(null);
        setSelectedSubcategory(null);
    };

    const hasActiveFilters = selectedRange || selectedSubcategory;

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-2xl font-bold text-neutral-900">
                            Stallion Stainless
                        </Link>
                        <nav className="hidden md:flex items-center gap-8">
                            <Link href="/products/sofas" className="text-sm text-neutral-600 hover:text-neutral-900">Sofas</Link>
                            <Link href="/products/beds" className="text-sm text-neutral-600 hover:text-neutral-900">Beds</Link>
                            <Link href="/products/tables" className="text-sm text-neutral-900 font-medium">Tables</Link>
                            <Link href="/products/chairs" className="text-sm text-neutral-600 hover:text-neutral-900">Chairs</Link>
                            <Link href="/products" className="text-sm text-neutral-600 hover:text-neutral-900">All Products</Link>
                            <Link href="/about" className="text-sm text-neutral-600 hover:text-neutral-900">About Us</Link>
                        </nav>
                        <div className="flex items-center gap-4">
                            <button className="p-2 hover:bg-neutral-100 rounded-full">
                                <Heart className="w-5 h-5" />
                            </button>
                            <Link href="/checkout" className="p-2 hover:bg-neutral-100 rounded-full">
                                <ShoppingCart className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="pt-20 pb-20">
                {/* Breadcrumb */}
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <Link href="/" className="hover:text-neutral-900">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/products" className="hover:text-neutral-900">Products</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-neutral-900">Tables</span>
                    </div>
                </div>

                {/* Page Header */}
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Tables Collection</h1>
                    <p className="text-neutral-600 max-w-2xl">
                        Explore our range of premium tables with stainless steel construction. From dining tables to coffee tables, find the perfect piece for every room.
                    </p>
                </div>

                {/* Subcategories Grid */}
                <div className="container mx-auto px-4 mb-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {tablesSubcategories.map((sub) => (
                            <button
                                key={sub.slug}
                                onClick={() => setSelectedSubcategory(selectedSubcategory === sub.name ? null : sub.name)}
                                className={`group p-4 border transition-colors text-center ${
                                    selectedSubcategory === sub.name 
                                        ? "border-neutral-900 bg-neutral-50" 
                                        : "border-neutral-200 hover:border-neutral-900"
                                }`}
                            >
                                <h3 className="font-semibold text-sm group-hover:underline">{sub.name}</h3>
                                <p className="text-xs text-neutral-500 mt-1">{sub.description}</p>
                            </button>
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
                                <Button 
                                    variant="ghost" 
                                    onClick={() => setSelectedRange(selectedRange === "Economic" ? null : "Economic")}
                                    className={`h-9 px-4 rounded-full text-sm ${
                                        selectedRange === "Economic"
                                            ? "bg-green-200 text-green-800 hover:bg-green-300"
                                            : "bg-green-50 text-green-700 hover:bg-green-100"
                                    }`}
                                >
                                    Economic Range
                                </Button>
                                <Button 
                                    variant="ghost" 
                                    onClick={() => setSelectedRange(selectedRange === "Exclusive" ? null : "Exclusive")}
                                    className={`h-9 px-4 rounded-full text-sm ${
                                        selectedRange === "Exclusive"
                                            ? "bg-purple-200 text-purple-800 hover:bg-purple-300"
                                            : "bg-purple-50 text-purple-700 hover:bg-purple-100"
                                    }`}
                                >
                                    Exclusive Range
                                </Button>
                                <Button 
                                    variant="ghost" 
                                    onClick={() => setSelectedRange(selectedRange === "Custom" ? null : "Custom")}
                                    className={`h-9 px-4 rounded-full text-sm ${
                                        selectedRange === "Custom"
                                            ? "bg-amber-200 text-amber-800 hover:bg-amber-300"
                                            : "bg-amber-50 text-amber-700 hover:bg-amber-100"
                                    }`}
                                >
                                    Custom Range
                                </Button>
                            </div>
                            {hasActiveFilters && (
                                <Button 
                                    variant="ghost" 
                                    onClick={clearFilters}
                                    className="h-9 px-3 text-sm text-neutral-500 hover:text-neutral-900"
                                >
                                    <X className="h-4 w-4 mr-1" />
                                    Clear Filters
                                </Button>
                            )}
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-neutral-500">{filteredProducts.length} Products</span>
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

                {/* Active Filters Display */}
                {hasActiveFilters && (
                    <div className="container mx-auto px-4 mb-6">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm text-neutral-500">Active filters:</span>
                            {selectedSubcategory && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-100 rounded-full text-sm">
                                    {selectedSubcategory}
                                    <button onClick={() => setSelectedSubcategory(null)}>
                                        <X className="h-3 w-3" />
                                    </button>
                                </span>
                            )}
                            {selectedRange && (
                                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                                    selectedRange === "Economic" ? "bg-green-100 text-green-700" :
                                    selectedRange === "Exclusive" ? "bg-purple-100 text-purple-700" :
                                    "bg-amber-100 text-amber-700"
                                }`}>
                                    {selectedRange}
                                    <button onClick={() => setSelectedRange(null)}>
                                        <X className="h-3 w-3" />
                                    </button>
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Products Grid */}
                <div className="container mx-auto px-4">
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredProducts.map((product) => (
                                <Link href={`/products/${product.id}`} key={product.id} className="group cursor-pointer">
                                    <div className="overflow-hidden bg-neutral-100 aspect-[4/5] relative mb-4 rounded-lg">
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Heart className="h-4 w-4" />
                                        </button>
                                        <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded ${
                                            product.range === "Economic" ? "bg-green-100 text-green-700" :
                                            product.range === "Exclusive" ? "bg-purple-100 text-purple-700" :
                                            "bg-amber-100 text-amber-700"
                                        }`}>
                                            {product.range}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-xs text-neutral-500 uppercase tracking-wider">{product.subcategory}</span>
                                        <h3 className="font-semibold text-sm mt-1 group-hover:underline">{product.name}</h3>
                                        <p className="text-sm text-neutral-600 mt-1">{product.priceDisplay}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-neutral-500 mb-4">No products found matching your filters.</p>
                            <Button variant="outline" onClick={clearFilters}>
                                Clear all filters
                            </Button>
                        </div>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-neutral-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-bold mb-4">Stallion Stainless</h3>
                            <p className="text-neutral-400 text-sm">
                                Premium stainless steel furniture for modern living spaces.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Categories</h4>
                            <ul className="space-y-2 text-sm text-neutral-400">
                                <li><Link href="/products/sofas" className="hover:text-white">Sofas</Link></li>
                                <li><Link href="/products/beds" className="hover:text-white">Beds</Link></li>
                                <li><Link href="/products/tables" className="hover:text-white">Tables</Link></li>
                                <li><Link href="/products/chairs" className="hover:text-white">Chairs</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Customer Service</h4>
                            <ul className="space-y-2 text-sm text-neutral-400">
                                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                                <li><Link href="#" className="hover:text-white">Contact</Link></li>
                                <li><Link href="#" className="hover:text-white">Shipping</Link></li>
                                <li><Link href="#" className="hover:text-white">Returns</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Contact</h4>
                            <ul className="space-y-2 text-sm text-neutral-400">
                                <li>contact@stallionstainless.com</li>
                                <li>+91 98765 43210</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-400">
                        © 2024 Stallion Stainless. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
