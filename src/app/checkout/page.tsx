import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, ShoppingCart, MapPin, Heart, ChevronRight, Menu, Minus, Plus, Trash2, Lock, CreditCard, Truck } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const cartItems = [
    {
        id: 1,
        name: "Modern Stainless Steel Gate",
        price: 45000,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Premium SS Railing System",
        price: 12500,
        quantity: 5,
        unit: "ft",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop",
    },
];

export default function CheckoutPage() {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 0;
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + shipping + tax;

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
                            <div className="relative cursor-pointer hover:text-neutral-600">
                                <ShoppingCart className="h-6 w-6" />
                                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-[10px] text-white">{cartItems.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="pb-20">
                {/* Breadcrumb */}
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <Link href="/" className="hover:text-neutral-900">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-neutral-900">Checkout</span>
                    </div>
                </div>

                {/* Checkout Header */}
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Checkout</h1>
                    <p className="text-neutral-600">Review your order and proceed to payment</p>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="border border-neutral-200 p-6">
                                <h2 className="text-lg font-semibold mb-6">Shopping Cart ({cartItems.length} items)</h2>

                                <div className="space-y-6">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex gap-4 pb-6 border-b border-neutral-100 last:border-0 last:pb-0">
                                            <div className="w-24 h-24 bg-neutral-100 shrink-0 overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold truncate">{item.name}</h3>
                                                <p className="text-sm text-neutral-500 mt-1">
                                                    ₹{item.price.toLocaleString()}{item.unit ? `/${item.unit}` : ""}
                                                </p>
                                                <div className="flex items-center justify-between mt-4">
                                                    <div className="flex items-center border border-neutral-300">
                                                        <button className="h-8 w-8 flex items-center justify-center hover:bg-neutral-100">
                                                            <Minus className="h-3 w-3" />
                                                        </button>
                                                        <span className="h-8 w-10 flex items-center justify-center border-x border-neutral-300 text-sm">
                                                            {item.quantity}
                                                        </span>
                                                        <button className="h-8 w-8 flex items-center justify-center hover:bg-neutral-100">
                                                            <Plus className="h-3 w-3" />
                                                        </button>
                                                    </div>
                                                    <button className="text-neutral-500 hover:text-red-600">
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-semibold">₹{(item.price * item.quantity).toLocaleString()}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Shipping Information - Placeholder */}
                            <div className="border border-neutral-200 p-6">
                                <h2 className="text-lg font-semibold mb-6">Shipping Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">First Name</label>
                                        <Input className="rounded-none border-neutral-300" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Last Name</label>
                                        <Input className="rounded-none border-neutral-300" placeholder="Doe" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium mb-2">Address</label>
                                        <Input className="rounded-none border-neutral-300" placeholder="123 Main Street" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">City</label>
                                        <Input className="rounded-none border-neutral-300" placeholder="Mumbai" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Pincode</label>
                                        <Input className="rounded-none border-neutral-300" placeholder="400001" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium mb-2">Phone</label>
                                        <Input className="rounded-none border-neutral-300" placeholder="+91 98765 43210" />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method - Placeholder */}
                            <div className="border border-neutral-200 p-6">
                                <h2 className="text-lg font-semibold mb-6">Payment Method</h2>
                                <div className="space-y-4">
                                    <label className="flex items-center gap-3 p-4 border border-neutral-900 cursor-pointer">
                                        <input type="radio" name="payment" defaultChecked className="h-4 w-4" />
                                        <CreditCard className="h-5 w-5" />
                                        <span className="font-medium">Credit / Debit Card</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-4 border border-neutral-200 cursor-pointer hover:border-neutral-400">
                                        <input type="radio" name="payment" className="h-4 w-4" />
                                        <span className="font-medium">UPI</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-4 border border-neutral-200 cursor-pointer hover:border-neutral-400">
                                        <input type="radio" name="payment" className="h-4 w-4" />
                                        <span className="font-medium">Net Banking</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-4 border border-neutral-200 cursor-pointer hover:border-neutral-400">
                                        <input type="radio" name="payment" className="h-4 w-4" />
                                        <Truck className="h-5 w-5" />
                                        <span className="font-medium">Cash on Delivery</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="border border-neutral-200 p-6 sticky top-32">
                                <h2 className="text-lg font-semibold mb-6">Order Summary</h2>

                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">Subtotal</span>
                                        <span>₹{subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">Shipping</span>
                                        <span className="text-green-600">Free</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">Tax (18% GST)</span>
                                        <span>₹{tax.toLocaleString()}</span>
                                    </div>
                                    <Separator className="my-4" />
                                    <div className="flex justify-between text-lg font-semibold">
                                        <span>Total</span>
                                        <span>₹{total.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-4">
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder="Promo code"
                                            className="rounded-none border-neutral-300 flex-1"
                                        />
                                        <Button variant="outline" className="rounded-none border-neutral-900">
                                            Apply
                                        </Button>
                                    </div>

                                    <Button className="w-full h-14 rounded-none bg-neutral-900 text-white hover:bg-neutral-800 text-base font-semibold">
                                        <Lock className="h-4 w-4 mr-2" />
                                        Place Order
                                    </Button>

                                    <p className="text-xs text-neutral-500 text-center">
                                        By placing your order, you agree to our Terms of Service and Privacy Policy
                                    </p>
                                </div>

                                <Separator className="my-6" />

                                <div className="space-y-3 text-xs text-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <Lock className="h-4 w-4" />
                                        <span>Secure checkout with 256-bit SSL encryption</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Truck className="h-4 w-4" />
                                        <span>Free shipping on all orders</span>
                                    </div>
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
