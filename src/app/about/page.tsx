import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { MainHeader } from "@/components/main-header";

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
            <MainHeader />

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

                            {/* Video Section */}
                            <div className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-center">Watch Our Story</h2>
                                <p className="text-neutral-600 mb-8 text-center max-w-xl mx-auto">
                                    Take a look inside our workshop and see how we craft premium stainless steel furniture.
                                </p>
                                <div className="aspect-video w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/mIcC1v0kciw?si=fGQoDeYbAYo5SBQ5"
                                        title="Stallion Stainless - Our Story"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        className="w-full h-full"
                                    />
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
