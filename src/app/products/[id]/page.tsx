"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    ShoppingCart,
    Heart,
    ArrowLeft,
    Truck,
    Shield,
    Package,
    Star,
    Check,
} from "lucide-react";
import { useState } from "react";
import { getProductById } from "@/lib/products";

export default function ProductDetailPage() {
    const params = useParams();
    const productId = Number(params.id);
    const product = getProductById(productId);

    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    if (!product) {
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
                                <Link href="/products/tables" className="text-sm text-neutral-600 hover:text-neutral-900">Tables</Link>
                                <Link href="/products/chairs" className="text-sm text-neutral-600 hover:text-neutral-900">Chairs</Link>
                                <Link href="/products" className="text-sm text-neutral-600 hover:text-neutral-900">All Products</Link>
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

                <main className="pt-24 pb-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center py-20">
                            <h1 className="text-3xl font-bold text-neutral-900 mb-4">Product Not Found</h1>
                            <p className="text-neutral-600 mb-8">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                            <Link href="/products">
                                <Button className="bg-neutral-900 text-white hover:bg-neutral-800">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Products
                                </Button>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

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
                            <Link href="/products/tables" className="text-sm text-neutral-600 hover:text-neutral-900">Tables</Link>
                            <Link href="/products/chairs" className="text-sm text-neutral-600 hover:text-neutral-900">Chairs</Link>
                            <Link href="/products" className="text-sm text-neutral-600 hover:text-neutral-900">All Products</Link>
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

            <main className="pt-24 pb-20">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <nav className="flex items-center gap-2 text-sm text-neutral-500">
                            <Link href="/" className="hover:text-neutral-900">Home</Link>
                            <span>/</span>
                            <Link href="/products" className="hover:text-neutral-900">Products</Link>
                            <span>/</span>
                            <Link href={`/products/${product.category.toLowerCase()}`} className="hover:text-neutral-900">{product.category}</Link>
                            <span>/</span>
                            <span className="text-neutral-900">{product.name}</span>
                        </nav>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Image Gallery */}
                        <div className="space-y-4">
                            <div className="relative aspect-square bg-neutral-100 rounded-lg overflow-hidden">
                                <Image
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Range Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${product.range === "Economic"
                                            ? "bg-green-100 text-green-700"
                                            : product.range === "Exclusive"
                                                ? "bg-purple-100 text-purple-700"
                                                : "bg-amber-100 text-amber-700"
                                        }`}>
                                        {product.range}
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative aspect-square bg-neutral-100 rounded-lg overflow-hidden ${selectedImage === index ? "ring-2 ring-neutral-900" : ""
                                            }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${product.name} view ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-sm text-neutral-500">{product.category}</span>
                                    <span className="text-sm text-neutral-300">•</span>
                                    <span className="text-sm text-neutral-500">{product.subcategory}</span>
                                </div>
                                <h1 className="text-3xl font-bold text-neutral-900 mb-4">
                                    {product.name}
                                </h1>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-neutral-500">(24 reviews)</span>
                                </div>
                                <p className="text-3xl font-bold text-neutral-900">{product.priceDisplay}</p>
                                <p className="text-sm text-neutral-500 mt-1">Inclusive of all taxes</p>
                            </div>

                            <Separator />

                            <div>
                                <h3 className="font-semibold text-neutral-900 mb-3">Description</h3>
                                <p className="text-neutral-600 leading-relaxed">{product.description}</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-neutral-900 mb-3">Features</h3>
                                <ul className="space-y-2">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2 text-neutral-600">
                                            <Check className="w-4 h-4 text-green-600" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Separator />

                            {/* Quantity Selector */}
                            <div>
                                <h3 className="font-semibold text-neutral-900 mb-3">Quantity</h3>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center border rounded-lg">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="px-4 py-2 text-neutral-600 hover:text-neutral-900"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 py-2 border-x">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="px-4 py-2 text-neutral-600 hover:text-neutral-900"
                                        >
                                            +
                                        </button>
                                    </div>
                                    {product.inStock ? (
                                        <span className="text-sm text-green-600 font-medium">In Stock</span>
                                    ) : (
                                        <span className="text-sm text-red-600 font-medium">Out of Stock</span>
                                    )}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <Button className="flex-1 bg-neutral-900 text-white hover:bg-neutral-800 h-12">
                                    <ShoppingCart className="w-5 h-5 mr-2" />
                                    Add to Cart
                                </Button>
                                <Button variant="outline" className="h-12 px-4">
                                    <Heart className="w-5 h-5" />
                                </Button>
                            </div>

                            {/* Shipping Info */}
                            <div className="bg-neutral-50 rounded-lg p-4 space-y-3">
                                <div className="flex items-center gap-3">
                                    <Truck className="w-5 h-5 text-neutral-600" />
                                    <div>
                                        <p className="font-medium text-neutral-900">Free Delivery</p>
                                        <p className="text-sm text-neutral-500">Delivery within 7-10 business days</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Shield className="w-5 h-5 text-neutral-600" />
                                    <div>
                                        <p className="font-medium text-neutral-900">Warranty Included</p>
                                        <p className="text-sm text-neutral-500">Comprehensive warranty coverage</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Package className="w-5 h-5 text-neutral-600" />
                                    <div>
                                        <p className="font-medium text-neutral-900">Professional Installation</p>
                                        <p className="text-sm text-neutral-500">Free assembly service included</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
