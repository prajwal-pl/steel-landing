export type ProductRange = "Economic" | "Exclusive" | "Custom";
export type ProductCategory = "Sofas" | "Beds" | "Tables" | "Chairs";

export interface Product {
    id: number;
    name: string;
    price: number;
    priceDisplay: string;
    description: string;
    images: string[];
    category: ProductCategory;
    subcategory: string;
    range: ProductRange;
    features: string[];
    inStock: boolean;
}

// Sofas Products
export const sofasProducts: Product[] = [
    // Straight Sofas
    {
        id: 101,
        name: "Luxury 3-Seater Straight Sofa",
        price: 75000,
        priceDisplay: "₹75,000",
        description: "Experience ultimate comfort with our luxury 3-seater straight sofa. Crafted with premium stainless steel frame and high-density foam cushioning, this sofa combines durability with sophisticated design. Perfect for modern living rooms.",
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Sofas",
        subcategory: "Straight Sofa",
        range: "Exclusive",
        features: ["Premium SS frame", "High-density foam", "Stain-resistant fabric", "5-year warranty", "Free delivery"],
        inStock: true,
    },
    {
        id: 102,
        name: "Compact 2-Seater Sofa",
        price: 35000,
        priceDisplay: "₹35,000",
        description: "Perfect for apartments and small spaces, this compact 2-seater offers comfort without compromising on style. Sturdy stainless steel legs ensure long-lasting durability.",
        images: [
            "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Sofas",
        subcategory: "Straight Sofa",
        range: "Economic",
        features: ["Compact design", "SS legs", "Easy maintenance", "2-year warranty"],
        inStock: true,
    },
    {
        id: 103,
        name: "Budget Single Seater Sofa",
        price: 18000,
        priceDisplay: "₹18,000",
        description: "An affordable single seater that doesn't compromise on quality. Ideal for reading corners or as accent seating.",
        images: [
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Sofas",
        subcategory: "Straight Sofa",
        range: "Economic",
        features: ["Affordable price", "Sturdy construction", "Easy assembly", "1-year warranty"],
        inStock: true,
    },
    {
        id: 104,
        name: "Premium 3-Seater Velvet Sofa",
        price: 95000,
        priceDisplay: "₹95,000",
        description: "Indulge in luxury with this velvet upholstered 3-seater. The brushed stainless steel frame adds a contemporary touch.",
        images: [
            "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Sofas",
        subcategory: "Straight Sofa",
        range: "Exclusive",
        features: ["Velvet upholstery", "Brushed SS frame", "Premium cushioning", "7-year warranty"],
        inStock: true,
    },
    // Corner Sofas
    {
        id: 105,
        name: "Modern L-Shape Corner Sofa",
        price: 95000,
        priceDisplay: "₹95,000",
        description: "Transform your living space with this modern L-shape corner sofa. Designed to maximize seating while adding elegance to any room.",
        images: [
            "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Sofas",
        subcategory: "Corner Sofas",
        range: "Exclusive",
        features: ["L-shape design", "Modular sections", "Premium fabric", "5-year warranty"],
        inStock: true,
    },
    {
        id: 106,
        name: "Custom Designer L-Sofa",
        price: 200000,
        priceDisplay: "₹2,00,000",
        description: "A bespoke L-shaped masterpiece tailored to your specifications. Choose your fabric, dimensions, and configuration.",
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Sofas",
        subcategory: "Corner Sofas",
        range: "Custom",
        features: ["Fully customizable", "Premium materials", "Designer consultation", "10-year warranty"],
        inStock: true,
    },
    {
        id: 107,
        name: "Budget L-Shape Sofa",
        price: 55000,
        priceDisplay: "₹55,000",
        description: "Affordable corner sofa that brings functionality and style to your living room without breaking the bank.",
        images: [
            "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Sofas",
        subcategory: "Corner Sofas",
        range: "Economic",
        features: ["Value for money", "Durable fabric", "Easy maintenance", "3-year warranty"],
        inStock: true,
    },
    // Semi Circular Sofas
    {
        id: 108,
        name: "Premium Semi Circular Sofa",
        price: 125000,
        priceDisplay: "₹1,25,000",
        description: "Make a statement with this elegant semi-circular sofa. Perfect for open-plan living areas and creating conversation zones.",
        images: [
            "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Sofas",
        subcategory: "Semi Circular Sofa",
        range: "Exclusive",
        features: ["Curved design", "Premium foam", "Statement piece", "5-year warranty"],
        inStock: true,
    },
    {
        id: 109,
        name: "Custom Curved Sectional",
        price: 250000,
        priceDisplay: "₹2,50,000",
        description: "A fully customizable curved sectional designed to fit your unique space perfectly.",
        images: [
            "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Sofas",
        subcategory: "Semi Circular Sofa",
        range: "Custom",
        features: ["Custom dimensions", "Choice of materials", "Professional design service", "Lifetime warranty"],
        inStock: true,
    },
    // U-Shape Sofas
    {
        id: 110,
        name: "U-Shape Sectional Sofa",
        price: 150000,
        priceDisplay: "₹1,50,000",
        description: "The ultimate family sofa. This U-shape sectional offers maximum seating and comfort for large gatherings.",
        images: [
            "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Sofas",
        subcategory: "U-Shape Sofa",
        range: "Exclusive",
        features: ["Maximum seating", "Modular design", "Family-friendly fabric", "5-year warranty"],
        inStock: true,
    },
    {
        id: 111,
        name: "Grand U-Shape Custom Sofa",
        price: 350000,
        priceDisplay: "₹3,50,000",
        description: "Our flagship U-shape sofa, fully customizable to create your dream living room centerpiece.",
        images: [
            "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Sofas",
        subcategory: "U-Shape Sofa",
        range: "Custom",
        features: ["Fully bespoke", "Premium leather option", "Heated seating option", "Lifetime warranty"],
        inStock: true,
    },
    // Recliners
    {
        id: 112,
        name: "Electric Recliner Sofa",
        price: 85000,
        priceDisplay: "₹85,000",
        description: "Relax in style with our electric recliner. Features smooth motorized reclining and USB charging ports.",
        images: [
            "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Sofas",
        subcategory: "Recliner",
        range: "Exclusive",
        features: ["Electric reclining", "USB ports", "Cup holders", "5-year warranty"],
        inStock: true,
    },
    {
        id: 113,
        name: "Manual Recliner Chair",
        price: 35000,
        priceDisplay: "₹35,000",
        description: "Classic comfort with a manual reclining mechanism. Perfect blend of value and relaxation.",
        images: [
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Sofas",
        subcategory: "Recliner",
        range: "Economic",
        features: ["Manual reclining", "Sturdy mechanism", "Easy maintenance", "3-year warranty"],
        inStock: true,
    },
    {
        id: 114,
        name: "Massage Recliner Premium",
        price: 175000,
        priceDisplay: "₹1,75,000",
        description: "The ultimate relaxation experience with built-in massage, heating, and zero-gravity positioning.",
        images: [
            "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Sofas",
        subcategory: "Recliner",
        range: "Custom",
        features: ["Massage function", "Heating system", "Zero-gravity mode", "10-year warranty"],
        inStock: true,
    },
];

// Beds Products
export const bedsProducts: Product[] = [
    // Single Beds
    {
        id: 201,
        name: "Modern SS Frame Single Bed",
        price: 28000,
        priceDisplay: "₹28,000",
        description: "Sleek and sturdy single bed with a modern stainless steel frame. Perfect for kids' rooms or guest bedrooms.",
        images: [
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Beds",
        subcategory: "Single Beds",
        range: "Economic",
        features: ["SS frame", "Modern design", "Easy assembly", "2-year warranty"],
        inStock: true,
    },
    {
        id: 202,
        name: "Minimalist Single Bed Frame",
        price: 22000,
        priceDisplay: "₹22,000",
        description: "Simple yet elegant single bed frame that fits any room aesthetic.",
        images: [
            "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Beds",
        subcategory: "Single Beds",
        range: "Economic",
        features: ["Minimalist design", "Durable construction", "Budget-friendly", "1-year warranty"],
        inStock: true,
    },
    {
        id: 203,
        name: "Premium Single Bed with Storage",
        price: 45000,
        priceDisplay: "₹45,000",
        description: "Single bed with integrated storage drawers. Maximizes space in compact rooms.",
        images: [
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Beds",
        subcategory: "Single Beds",
        range: "Exclusive",
        features: ["Built-in storage", "Premium finish", "Space-saving", "5-year warranty"],
        inStock: true,
    },
    // Double Beds
    {
        id: 204,
        name: "Premium Double Bed with Headboard",
        price: 55000,
        priceDisplay: "₹55,000",
        description: "Elegant double bed featuring an upholstered headboard and brushed stainless steel accents.",
        images: [
            "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Beds",
        subcategory: "Double Beds",
        range: "Exclusive",
        features: ["Upholstered headboard", "SS accents", "Premium quality", "5-year warranty"],
        inStock: true,
    },
    {
        id: 205,
        name: "Budget-Friendly Double Bed",
        price: 32000,
        priceDisplay: "₹32,000",
        description: "Affordable double bed that doesn't compromise on quality or comfort.",
        images: [
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Beds",
        subcategory: "Double Beds",
        range: "Economic",
        features: ["Value for money", "Solid construction", "Easy maintenance", "2-year warranty"],
        inStock: true,
    },
    {
        id: 206,
        name: "Custom Designer Double Bed",
        price: 120000,
        priceDisplay: "₹1,20,000",
        description: "Bespoke double bed designed to your exact specifications with premium materials.",
        images: [
            "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Beds",
        subcategory: "Double Beds",
        range: "Custom",
        features: ["Fully customizable", "Premium materials", "Designer service", "10-year warranty"],
        inStock: true,
    },
    // Queen Beds
    {
        id: 207,
        name: "Luxury Queen Size Platform Bed",
        price: 85000,
        priceDisplay: "₹85,000",
        description: "Contemporary platform bed in queen size. Low profile design with floating effect.",
        images: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Beds",
        subcategory: "Queen Beds",
        range: "Exclusive",
        features: ["Platform design", "Floating effect", "Premium finish", "5-year warranty"],
        inStock: true,
    },
    {
        id: 208,
        name: "Smart Storage Queen Bed",
        price: 72000,
        priceDisplay: "₹72,000",
        description: "Queen bed with hydraulic lift storage system. Perfect for maximizing bedroom space.",
        images: [
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Beds",
        subcategory: "Queen Beds",
        range: "Exclusive",
        features: ["Hydraulic storage", "Easy access", "Space-saving", "5-year warranty"],
        inStock: true,
    },
    {
        id: 209,
        name: "Economy Queen Bed",
        price: 45000,
        priceDisplay: "₹45,000",
        description: "Affordable queen size bed with solid construction and classic design.",
        images: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Beds",
        subcategory: "Queen Beds",
        range: "Economic",
        features: ["Classic design", "Sturdy frame", "Budget-friendly", "3-year warranty"],
        inStock: true,
    },
    // King Beds
    {
        id: 210,
        name: "Grand King Size Canopy Bed",
        price: 150000,
        priceDisplay: "₹1,50,000",
        description: "Majestic canopy bed in king size. Make a statement with this stunning centerpiece.",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Beds",
        subcategory: "King Beds",
        range: "Exclusive",
        features: ["Canopy design", "Statement piece", "Premium SS frame", "7-year warranty"],
        inStock: true,
    },
    {
        id: 211,
        name: "Custom Designer King Bed",
        price: 225000,
        priceDisplay: "₹2,25,000",
        description: "Ultimate luxury with a fully customizable king size bed. Choose every detail.",
        images: [
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Beds",
        subcategory: "King Beds",
        range: "Custom",
        features: ["Fully bespoke", "Premium materials", "Designer consultation", "Lifetime warranty"],
        inStock: true,
    },
    {
        id: 212,
        name: "Modern King Platform Bed",
        price: 95000,
        priceDisplay: "₹95,000",
        description: "Sleek king size platform bed with minimalist aesthetic and maximum comfort.",
        images: [
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Beds",
        subcategory: "King Beds",
        range: "Exclusive",
        features: ["Platform design", "Minimalist style", "Premium finish", "5-year warranty"],
        inStock: true,
    },
    // Storage Beds
    {
        id: 213,
        name: "Queen Storage Bed with Drawers",
        price: 68000,
        priceDisplay: "₹68,000",
        description: "Practical storage solution with multiple drawers integrated into the bed frame.",
        images: [
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Beds",
        subcategory: "Storage Beds",
        range: "Exclusive",
        features: ["Multiple drawers", "Easy access", "Space optimization", "5-year warranty"],
        inStock: true,
    },
    {
        id: 214,
        name: "Budget Storage Bed",
        price: 42000,
        priceDisplay: "₹42,000",
        description: "Affordable storage bed with lift-up mechanism for concealed storage.",
        images: [
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Beds",
        subcategory: "Storage Beds",
        range: "Economic",
        features: ["Lift-up storage", "Budget-friendly", "Practical design", "2-year warranty"],
        inStock: true,
    },
];

// Tables Products
export const tablesProducts: Product[] = [
    // Dining Tables
    {
        id: 301,
        name: "6-Seater SS Dining Table",
        price: 65000,
        priceDisplay: "₹65,000",
        description: "Elegant 6-seater dining table with polished stainless steel frame and tempered glass top.",
        images: [
            "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Tables",
        subcategory: "Dining Table",
        range: "Exclusive",
        features: ["Tempered glass top", "SS frame", "Seats 6", "5-year warranty"],
        inStock: true,
    },
    {
        id: 302,
        name: "8-Seater Grand Dining Table",
        price: 120000,
        priceDisplay: "₹1,20,000",
        description: "Impressive 8-seater dining table for large families and entertaining guests.",
        images: [
            "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Tables",
        subcategory: "Dining Table",
        range: "Exclusive",
        features: ["Large capacity", "Premium materials", "Statement piece", "7-year warranty"],
        inStock: true,
    },
    {
        id: 303,
        name: "4-Seater Economy Dining Table",
        price: 35000,
        priceDisplay: "₹35,000",
        description: "Compact and affordable 4-seater dining table perfect for small families.",
        images: [
            "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Tables",
        subcategory: "Dining Table",
        range: "Economic",
        features: ["Compact size", "Budget-friendly", "Easy maintenance", "2-year warranty"],
        inStock: true,
    },
    {
        id: 304,
        name: "Custom Designer Dining Set",
        price: 250000,
        priceDisplay: "₹2,50,000",
        description: "Fully customizable dining table designed to your specifications. Includes matching chairs.",
        images: [
            "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Tables",
        subcategory: "Dining Table",
        range: "Custom",
        features: ["Includes chairs", "Fully bespoke", "Premium materials", "Lifetime warranty"],
        inStock: true,
    },
    // Coffee Tables
    {
        id: 305,
        name: "Modern Glass Coffee Table",
        price: 28000,
        priceDisplay: "₹28,000",
        description: "Contemporary coffee table with tempered glass top and sleek stainless steel legs.",
        images: [
            "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Tables",
        subcategory: "Coffee Table",
        range: "Economic",
        features: ["Glass top", "SS legs", "Modern design", "2-year warranty"],
        inStock: true,
    },
    {
        id: 306,
        name: "Minimalist Coffee Table",
        price: 18000,
        priceDisplay: "₹18,000",
        description: "Simple and elegant coffee table that complements any living room decor.",
        images: [
            "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Tables",
        subcategory: "Coffee Table",
        range: "Economic",
        features: ["Minimalist design", "Affordable", "Easy assembly", "1-year warranty"],
        inStock: true,
    },
    {
        id: 307,
        name: "Premium Marble Coffee Table",
        price: 75000,
        priceDisplay: "₹75,000",
        description: "Luxurious coffee table featuring genuine marble top and polished SS frame.",
        images: [
            "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Tables",
        subcategory: "Coffee Table",
        range: "Exclusive",
        features: ["Marble top", "Premium SS", "Luxury design", "5-year warranty"],
        inStock: true,
    },
    // Corner Tables
    {
        id: 308,
        name: "Compact Corner Table",
        price: 15000,
        priceDisplay: "₹15,000",
        description: "Space-saving corner table perfect for small apartments and tight spaces.",
        images: [
            "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Tables",
        subcategory: "Corner Table",
        range: "Economic",
        features: ["Space-saving", "Compact design", "Versatile", "1-year warranty"],
        inStock: true,
    },
    {
        id: 309,
        name: "Premium Corner Side Table",
        price: 32000,
        priceDisplay: "₹32,000",
        description: "Elegant corner table with premium finish. Perfect beside sofas or beds.",
        images: [
            "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Tables",
        subcategory: "Corner Table",
        range: "Exclusive",
        features: ["Premium finish", "Elegant design", "Versatile placement", "3-year warranty"],
        inStock: true,
    },
    // Console Tables
    {
        id: 310,
        name: "Luxury Console Table with Mirror",
        price: 45000,
        priceDisplay: "₹45,000",
        description: "Stunning console table perfect for entryways. Mirror finish adds elegance.",
        images: [
            "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Tables",
        subcategory: "Console Table",
        range: "Exclusive",
        features: ["Mirror finish", "Elegant design", "Entryway perfect", "5-year warranty"],
        inStock: true,
    },
    {
        id: 311,
        name: "Elegant Marble Console Table",
        price: 58000,
        priceDisplay: "₹58,000",
        description: "Sophisticated console table with marble top and brushed SS legs.",
        images: [
            "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Tables",
        subcategory: "Console Table",
        range: "Exclusive",
        features: ["Marble top", "Brushed SS", "Sophisticated design", "5-year warranty"],
        inStock: true,
    },
    {
        id: 312,
        name: "Budget Console Table",
        price: 22000,
        priceDisplay: "₹22,000",
        description: "Affordable console table that adds style to any entryway or hallway.",
        images: [
            "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Tables",
        subcategory: "Console Table",
        range: "Economic",
        features: ["Budget-friendly", "Classic design", "Easy assembly", "2-year warranty"],
        inStock: true,
    },
];

// Chairs Products
export const chairsProducts: Product[] = [
    // Dining Chairs
    {
        id: 401,
        name: "Modern SS Dining Chair Set (4)",
        price: 32000,
        priceDisplay: "₹32,000",
        description: "Set of 4 modern dining chairs with stainless steel frames and comfortable padding.",
        images: [
            "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551298370-9d3d53e23c16?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Chairs",
        subcategory: "Dining Chair",
        range: "Exclusive",
        features: ["Set of 4", "SS frames", "Comfortable padding", "3-year warranty"],
        inStock: true,
    },
    {
        id: 402,
        name: "Budget Dining Chair Set (2)",
        price: 12000,
        priceDisplay: "₹12,000",
        description: "Affordable set of 2 dining chairs. Great for starting your dining room.",
        images: [
            "https://images.unsplash.com/photo-1551298370-9d3d53e23c16?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Chairs",
        subcategory: "Dining Chair",
        range: "Economic",
        features: ["Set of 2", "Budget-friendly", "Easy assembly", "1-year warranty"],
        inStock: true,
    },
    {
        id: 403,
        name: "Premium Upholstered Dining Chairs (6)",
        price: 65000,
        priceDisplay: "₹65,000",
        description: "Luxurious set of 6 fully upholstered dining chairs with SS legs.",
        images: [
            "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551298370-9d3d53e23c16?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Chairs",
        subcategory: "Dining Chair",
        range: "Exclusive",
        features: ["Set of 6", "Full upholstery", "Premium comfort", "5-year warranty"],
        inStock: true,
    },
    {
        id: 404,
        name: "Custom Bespoke Dining Set (6)",
        price: 120000,
        priceDisplay: "₹1,20,000",
        description: "Fully customizable set of 6 dining chairs. Choose fabric, color, and finish.",
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Chairs",
        subcategory: "Dining Chair",
        range: "Custom",
        features: ["Set of 6", "Fully customizable", "Designer consultation", "10-year warranty"],
        inStock: true,
    },
    // Office Chairs
    {
        id: 405,
        name: "Ergonomic Office Chair",
        price: 28000,
        priceDisplay: "₹28,000",
        description: "Professional ergonomic office chair with lumbar support and adjustable armrests.",
        images: [
            "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1589363460779-cd717d2ed8fa?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Chairs",
        subcategory: "Office Chair",
        range: "Exclusive",
        features: ["Ergonomic design", "Lumbar support", "Adjustable armrests", "3-year warranty"],
        inStock: true,
    },
    {
        id: 406,
        name: "Executive Leather Office Chair",
        price: 45000,
        priceDisplay: "₹45,000",
        description: "Premium executive chair with genuine leather and chrome-plated SS frame.",
        images: [
            "https://images.unsplash.com/photo-1589363460779-cd717d2ed8fa?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Chairs",
        subcategory: "Office Chair",
        range: "Exclusive",
        features: ["Genuine leather", "Chrome SS frame", "Executive style", "5-year warranty"],
        inStock: true,
    },
    {
        id: 407,
        name: "Mesh Back Office Chair",
        price: 18000,
        priceDisplay: "₹18,000",
        description: "Breathable mesh back chair perfect for long work hours. SS base for durability.",
        images: [
            "https://images.unsplash.com/photo-1541558869434-2840d308329a?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Chairs",
        subcategory: "Office Chair",
        range: "Economic",
        features: ["Mesh back", "Breathable", "SS base", "2-year warranty"],
        inStock: true,
    },
    {
        id: 408,
        name: "Budget Task Chair",
        price: 12000,
        priceDisplay: "₹12,000",
        description: "Simple and affordable office chair for home offices and study rooms.",
        images: [
            "https://images.unsplash.com/photo-1541558869434-2840d308329a?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1589363460779-cd717d2ed8fa?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Chairs",
        subcategory: "Office Chair",
        range: "Economic",
        features: ["Budget-friendly", "Compact", "Easy assembly", "1-year warranty"],
        inStock: true,
    },
    // Accent Chairs
    {
        id: 409,
        name: "Velvet Accent Chair",
        price: 22000,
        priceDisplay: "₹22,000",
        description: "Beautiful velvet accent chair that adds a pop of color to any room.",
        images: [
            "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Chairs",
        subcategory: "Accent Chair",
        range: "Economic",
        features: ["Velvet fabric", "Statement piece", "Compact design", "2-year warranty"],
        inStock: true,
    },
    {
        id: 410,
        name: "Designer Accent Lounge Chair",
        price: 65000,
        priceDisplay: "₹65,000",
        description: "Sculptural accent chair that serves as both seating and art piece.",
        images: [
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Chairs",
        subcategory: "Accent Chair",
        range: "Exclusive",
        features: ["Designer piece", "Sculptural design", "Premium materials", "5-year warranty"],
        inStock: true,
    },
    {
        id: 411,
        name: "Custom Accent Armchair",
        price: 95000,
        priceDisplay: "₹95,000",
        description: "Fully customizable accent armchair. Choose your fabric, color, and style.",
        images: [
            "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Chairs",
        subcategory: "Accent Chair",
        range: "Custom",
        features: ["Fully customizable", "Premium quality", "Designer service", "10-year warranty"],
        inStock: true,
    },
    {
        id: 412,
        name: "Wing Back Accent Chair",
        price: 38000,
        priceDisplay: "₹38,000",
        description: "Classic wing back chair with modern SS legs. Timeless elegance.",
        images: [
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2000&auto=format&fit=crop",
        ],
        category: "Chairs",
        subcategory: "Accent Chair",
        range: "Exclusive",
        features: ["Wing back design", "Classic style", "Modern SS legs", "5-year warranty"],
        inStock: true,
    },
];

// All products combined
export const allProducts: Product[] = [
    ...sofasProducts,
    ...bedsProducts,
    ...tablesProducts,
    ...chairsProducts,
];

// Helper functions
export function getProductById(id: number): Product | undefined {
    return allProducts.find((p) => p.id === id);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
    return allProducts.filter((p) => p.category === category);
}

export function getProductsByRange(range: ProductRange): Product[] {
    return allProducts.filter((p) => p.range === range);
}

export function getProductsBySubcategory(subcategory: string): Product[] {
    return allProducts.filter((p) => p.subcategory === subcategory);
}

export function filterProducts(
    products: Product[],
    filters: {
        range?: ProductRange | null;
        subcategory?: string | null;
        minPrice?: number;
        maxPrice?: number;
    }
): Product[] {
    return products.filter((p) => {
        if (filters.range && p.range !== filters.range) return false;
        if (filters.subcategory && p.subcategory !== filters.subcategory) return false;
        if (filters.minPrice && p.price < filters.minPrice) return false;
        if (filters.maxPrice && p.price > filters.maxPrice) return false;
        return true;
    });
}

// Subcategories data
export const sofasSubcategories = [
    { name: "Straight Sofa", slug: "straight", description: "Single, 2 Seater, 3 Seater" },
    { name: "Corner Sofas", slug: "corner", description: "L-Shape designs" },
    { name: "Semi Circular Sofa", slug: "semi-circular", description: "Curved elegance" },
    { name: "U-Shape Sofa", slug: "u-shape", description: "Maximum seating" },
    { name: "Recliner", slug: "recliner", description: "Ultimate comfort" },
];

export const bedsSubcategories = [
    { name: "Single Beds", slug: "single", description: "Compact & cozy" },
    { name: "Double Beds", slug: "double", description: "Classic comfort" },
    { name: "Queen Beds", slug: "queen", description: "Spacious luxury" },
    { name: "King Beds", slug: "king", description: "Ultimate grandeur" },
    { name: "Storage Beds", slug: "storage", description: "Smart solutions" },
];

export const tablesSubcategories = [
    { name: "Dining Table", slug: "dining", description: "Family gatherings" },
    { name: "Corner Table", slug: "corner", description: "Space savers" },
    { name: "Coffee Table", slug: "coffee", description: "Living room essentials" },
    { name: "Console Table", slug: "console", description: "Elegant entryways" },
];

export const chairsSubcategories = [
    { name: "Dining Chair", slug: "dining", description: "Mealtime comfort" },
    { name: "Office Chair", slug: "office", description: "Ergonomic design" },
    { name: "Accent Chair", slug: "accent", description: "Statement pieces" },
];

export const categories = [
    { name: "Sofas", slug: "sofas", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop" },
    { name: "Beds", slug: "beds", image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2000&auto=format&fit=crop" },
    { name: "Tables", slug: "tables", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2000&auto=format&fit=crop" },
    { name: "Chairs", slug: "chairs", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2000&auto=format&fit=crop" },
];
