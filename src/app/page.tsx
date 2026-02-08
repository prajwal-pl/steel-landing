import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, ShoppingCart, MapPin, Heart, ChevronRight, Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Home() {
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
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-[10px] text-white">0</span>
              </div>
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

      {/* Promo Bar */}
      <div className="bg-[#4a4a4a] py-3 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 text-center text-xs sm:text-sm font-medium tracking-wide">
            <div className="flex-1 px-4 md:border-r border-neutral-500">
              1600+ New Industrial Arrivals
              <span className="block text-[10px] font-normal opacity-80 sm:inline sm:ml-2 sm:text-xs">Shop Now ▸</span>
            </div>
            <div className="flex-1 px-4 md:border-r border-neutral-500">
              Up to 35% off Top Stainless Brands
              <span className="block text-[10px] font-normal opacity-80 sm:inline sm:ml-2 sm:text-xs">Le Creuset, De'Longhi and More! ▸</span>
            </div>
            <div className="flex-1 px-4">
              Furniture as Fast as 7 Days
              <span className="block text-[10px] font-normal opacity-80 sm:inline sm:ml-2 sm:text-xs">Shop Now ▸</span>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* Full Screen Hero Section */}
        <section className="relative h-[600px] w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-neutral-200">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2727&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Hero Content Overlay */}
          <div className="relative container mx-auto h-full px-4 flex items-center">
            <div className="max-w-xl space-y-6 text-white pl-4 md:pl-12">
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight drop-shadow-md">
                our bestselling benches, <br />
                now with extra comfort
              </h1>
              <p className="text-lg font-medium drop-shadow-md opacity-90">
                Impeccable finish and sturdy construction for public & private spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="h-12 rounded-full bg-white px-8 text-base font-semibold text-neutral-900 hover:bg-neutral-100 border-none">
                  Shop Benches
                </Button>
                <Button variant="outline" className="h-12 rounded-full bg-white px-8 text-base font-semibold text-neutral-900 hover:bg-neutral-100 border-none">
                  View Catalouge
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section - "new arrivals: in stock" style */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Pill Title */}
            <div className="mb-12 flex justify-center">
              <div className="flex items-center rounded-full bg-neutral-900 px-1 py-1 pr-6 text-white">
                <span className="rounded-full bg-neutral-800 px-4 py-1.5 text-sm font-semibold">Shop Furniture & Decor</span>
                <span className="ml-4 text-sm font-medium">Shop Kitchen & Entertaining</span>
              </div>
            </div>

            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
              new arrivals: in stock & ready to ship
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden bg-neutral-100 aspect-[4/5] relative">
                  <img
                    src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop"
                    alt="Stainless Steel Railing"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-lg">Modern SS Railings</h3>
                  <p className="text-sm text-neutral-600">Starting at 49/ft</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden bg-neutral-100 aspect-[4/5] relative">
                  <img
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                    alt="Stainless Steel Table"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-lg">Bespoke Coffee Tables</h3>
                  <p className="text-sm text-neutral-600">Starting at 99</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden bg-neutral-100 aspect-[4/5] relative">
                  <img
                    src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1974&auto=format&fit=crop"
                    alt="Polycarbonate Sheet Roof"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-lg">Glass & Polycarbonate Canopies</h3>
                  <p className="text-sm text-neutral-600">Starting at 99</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle Banner - "the new coastal cool" style */}
        <section className="relative overflow-hidden">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full bg-neutral-200 relative">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
              alt="Modern Living Room"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/10">
              <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-8">
                the new industrial cool
              </h2>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="h-12 rounded-full bg-white px-10 text-base font-bold text-neutral-900 hover:bg-neutral-100">
                  Shop the Look
                </Button>
                <Button className="h-12 rounded-full bg-white px-10 text-base font-bold text-neutral-900 hover:bg-neutral-100">
                  Shop 1600+ New Arrivals
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Product Split Section - Matches "the new statement bed" */}
        <section className="py-20 bg-[#F5F2F0]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="aspect-[4/5] md:aspect-square bg-white shadow-xl overflow-hidden rounded-sm">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop"
                    alt="Luxury Stainless Steel Gate"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-8 lg:pl-12">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-tight">
                  the new statement<br />gate
                </h2>
                <div className="flex flex-col gap-4">
                  <Link href="/products">
                    <Button variant="outline" className="w-full sm:w-64 h-12 rounded-full border-2 border-neutral-900 bg-transparent text-neutral-900 hover:bg-neutral-900 hover:text-white font-semibold">
                      Shop All Gates
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button variant="outline" className="w-full sm:w-64 h-12 rounded-full border-2 border-neutral-900 bg-transparent text-neutral-900 hover:bg-neutral-900 hover:text-white font-semibold">
                      Shop In-Stock Gates
                    </Button>
                  </Link>
                </div>
                <div className="pt-8">
                  <div className="flex items-start gap-2 max-w-md">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900"></span>
                    <div>
                      <strong className="block font-medium">New! Automatic Sliding Gates</strong>
                      <p className="text-neutral-600 mt-1">
                        All gorgeous, secure curves. Stainless steel certified; ultra-smooth operation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 w-48 mt-8 hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2000&auto=format&fit=crop"
                    className="h-full w-full object-cover shadow-sm"
                    alt="Detail shot of gate hardware"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Text/Content Section */}
        <section className="bg-white py-24 text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif md:text-4xl mb-6">Introducing Stallion Comfort System</h2>
            <div className="h-px w-24 bg-neutral-900 mx-auto mb-8"></div>
            <p className="text-xl leading-relaxed text-neutral-600 mb-8">
              Since 1985, we have been involved in manufacturing and supplying a wide assortment of
              <span className="text-neutral-900 font-semibold"> Stainless Steel Benches, Railings, Claddings</span>, and more.
              Under the astute guidance of Mr. Kamalesh Mehta, we deliver products with impeccable finish and sturdy construction.
            </p>
            <Link href="#about" className="inline-flex items-center border-b border-neutral-900 pb-1 text-sm font-bold uppercase tracking-widest hover:text-neutral-600">
              Read Our Story
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-neutral-200 text-neutral-900 text-sm">
        <div className="container mx-auto px-4">
          {/* Newsletter Top */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="space-y-4">
              <h3 className="text-base font-bold">Contact Us & Store Locator</h3>
              <p>Questions? Text us: <span className="underline cursor-pointer">(123) 456-7890</span></p>
              <p><span className="underline cursor-pointer">Chat With Us</span> &nbsp; <span className="underline cursor-pointer">Email Us</span></p>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-bold">Stallion Trade Program</h3>
              <p>Earn Reward Dollars every time you shop (excluding special financing purchases)*, plus get access to special offers and events.</p>
              <Link href="#" className="underline font-semibold block">Apply Now</Link>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-bold">Our Mobile App</h3>
              <p>Scan to shop exclusive first looks, get personalized alerts and manage your registry faster and easier than ever before.</p>
              <div className="h-10 w-32 bg-black rounded-md flex items-center justify-center text-white text-xs">
                App Store
              </div>
            </div>
          </div>

          <Separator className="mb-12" />

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div>
              <h4 className="font-bold mb-4">Help</h4>
              <ul className="space-y-3 text-neutral-600">
                <li>Customer Service</li>
                <li>Account</li>
                <li>Return Policy</li>
                <li>Shipping Information</li>
                <li>Product Recalls</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-3 text-neutral-600">
                <li>Free Design Services</li>
                <li>Wedding Registry</li>
                <li>Baby Registry</li>
                <li>Gift Cards</li>
                <li>Trade Program</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Our Company</h4>
              <ul className="space-y-3 text-neutral-600">
                <li>About Us</li>
                <li>Careers</li>
                <li>Responsible Design</li>
                <li>Accessibility Statement</li>
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-2">
              <h4 className="font-bold mb-4">Show us your look with:</h4>
              <div className="flex gap-2 mb-8">
                <span className="underline">#StallionStyle</span>
                <span className="underline">#StallionSteel</span>
              </div>
              <h4 className="font-bold mb-4">Our Brands</h4>
              <div className="flex gap-4 font-serif text-xl tracking-tighter">
                <span>StallionStainless</span>
                <span className="font-light">ComfortSystem</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <span className="underline cursor-pointer">Terms of Use</span>
              <span className="underline cursor-pointer">Privacy</span>
              <span className="underline cursor-pointer">Site Index</span>
              <span className="underline cursor-pointer">Ad Choices</span>
              <span className="underline cursor-pointer">Cookie Settings</span>
            </div>
            <p>&copy; {new Date().getFullYear()} Stallion Stainless. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
