/**
 * SHAIK RIYAZ SHOPPING — Core E-Commerce JavaScript Engine
 * Products, Cart, Wishlist, Currency, Order Tracker, Audio FX, Checkout & Modals
 */

// ==========================================
// 1. DATASET: PRODUCTS & BRAND UNIVERSE
// ==========================================
const SR_BRANDS = [
  { id: "all", name: "All Riyaz Brands", count: 24 },
  { id: "signature", name: "Shaik Riyaz Signature Luxe", tag: "Couture & Premium", count: 6 },
  { id: "tech", name: "Shaik Riyaz SmartTech", tag: "Electronics & Audio", count: 6 },
  { id: "watches", name: "Shaik Riyaz Chrono Timepieces", tag: "Horology & Luxury", count: 4 },
  { id: "footwear", name: "Shaik Riyaz Urban Kicks", tag: "Sneakers & Leather", count: 4 },
  { id: "fragrance", name: "Shaik Riyaz Royal Oud & Fragrance", tag: "Scents & Parfums", count: 4 },
  { id: "home", name: "Shaik Riyaz Heritage Living", tag: "Smart Decor & Living", count: 4 },
];

const SR_PRODUCTS = [
  // 1. Shaik Riyaz Signature Luxe
  {
    id: "sr-101",
    name: "Shaik Riyaz Signature Italian Tailored Blazer",
    brand: "Shaik Riyaz Signature Luxe",
    category: "fashion",
    brandCode: "signature",
    priceINR: 12999,
    originalPriceINR: 19999,
    rating: 4.9,
    reviewsCount: 342,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    badge: "Shaik Riyaz Choice",
    badgeType: "signature",
    inStock: true,
    stockCount: 14,
    description: "Handcrafted from 100% fine Italian merino wool with custom Shaik Riyaz gold crest inner lining. Cut for a modern silhouette that elevates formal and smart-casual styling.",
    features: ["100% Virgin Super 130s Merino Wool", "Mother-of-pearl buttons with laser logo", "Custom breathable silk jacquard lining", "Complimentary garment cover & wooden hanger"],
    colors: ["Midnight Obsidian", "Royal Navy", "Charcoal Slate"],
    sizes: ["38R", "40R", "42R", "44R"],
    customizable: true
  },
  {
    id: "sr-102",
    name: "Shaik Riyaz Royal Velvet Sherwani & Stole Set",
    brand: "Shaik Riyaz Signature Luxe",
    category: "fashion",
    brandCode: "signature",
    priceINR: 18499,
    originalPriceINR: 28999,
    rating: 5.0,
    reviewsCount: 189,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    badge: "Limited Edition",
    badgeType: "luxury",
    inStock: true,
    stockCount: 8,
    description: "Exquisite hand-zardozi embroidered royal velvet sherwani designed under the Shaik Riyaz Heritage series. Accented with metallic gold resham threads and antique brass buttons.",
    features: ["Intricate royal bullion embroidery", "Plush micro-velvet fabric", "Includes matching jacquard stole & churidar", "Certificate of Master Craftsmanship"],
    colors: ["Deep Emerald Green", "Imperial Wine Red", "Midnight Jet Black"],
    sizes: ["38", "40", "42", "44"],
    customizable: false
  },
  {
    id: "sr-103",
    name: "Shaik Riyaz Egyptian Cotton Luxury Oxford Shirt",
    brand: "Shaik Riyaz Signature Luxe",
    category: "fashion",
    brandCode: "signature",
    priceINR: 3499,
    originalPriceINR: 5999,
    rating: 4.8,
    reviewsCount: 520,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    badge: "Best Seller",
    badgeType: "sale",
    inStock: true,
    stockCount: 35,
    description: "Woven from 2-ply 120s combed Egyptian Giza cotton for exceptional softness, wrinkle-resistance, and enduring luster. Finished with Shaik Riyaz monogrammed buttons.",
    features: ["Wrinkle-resistant easy-iron finish", "Semi-spread structured collar with brass stays", "Reinforced side gussets", "Tailored slim and classic fits"],
    colors: ["Crisp Snow White", "Sky Azure Blue", "Soft Lavender"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    customizable: true
  },
  {
    id: "sr-104",
    name: "Shaik Riyaz Top-Grain Full Leather Briefcase",
    brand: "Shaik Riyaz Signature Luxe",
    category: "fashion",
    brandCode: "signature",
    priceINR: 8999,
    originalPriceINR: 14999,
    rating: 4.9,
    reviewsCount: 278,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    badge: "Handcrafted",
    badgeType: "signature",
    inStock: true,
    stockCount: 19,
    description: "Vegetable-tanned full-grain buffalo hide briefcase engineered to age with rich patina. Fits up to 16-inch laptops with padded shockproof compartments.",
    features: ["Heavy-duty solid brass YKK zippers", "Dedicated 16-inch laptop & tablet sleeves", "Luggage pass-through strap for travel", "Personalized leather monogram tag included"],
    colors: ["Cognac Tan", "Vintage Tobacco Brown", "Obsidian Black"],
    sizes: ["Standard 16-inch"],
    customizable: true
  },

  // 2. Shaik Riyaz SmartTech
  {
    id: "sr-201",
    name: "Shaik Riyaz ProBeats ANC Wireless Headphones",
    brand: "Shaik Riyaz SmartTech",
    category: "tech",
    brandCode: "tech",
    priceINR: 7999,
    originalPriceINR: 12999,
    rating: 4.9,
    reviewsCount: 780,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    badge: "40% OFF",
    badgeType: "sale",
    inStock: true,
    stockCount: 42,
    description: "State-of-the-art hybrid active noise cancellation (up to -42dB) powered by Shaik Riyaz Acoustic Engine. 40mm titanium drivers deliver studio-grade Hi-Res spatial sound.",
    features: ["65-hour playback with fast USB-C charge", "Hybrid Active Noise Cancellation & Transparency Mode", "Quad-beamforming ENC microphones for clear calls", "Custom EQ mobile app integration"],
    colors: ["Midnight Titanium", "Matte Carbon Black", "Silver Cloud"],
    sizes: ["One Size"],
    customizable: false
  },
  {
    id: "sr-202",
    name: "Shaik Riyaz UltraFit AMOLED GPS Smartwatch",
    brand: "Shaik Riyaz SmartTech",
    category: "tech",
    brandCode: "tech",
    priceINR: 6499,
    originalPriceINR: 10999,
    rating: 4.8,
    reviewsCount: 612,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    badge: "Hot Deal",
    badgeType: "sale",
    inStock: true,
    stockCount: 28,
    description: "Featuring a 1.43-inch Always-On Retina AMOLED display (1000 nits brightness), dual-frequency GPS, 24/7 heart rate, SpO2, sleep analytics, and Bluetooth calling.",
    features: ["1.43\" Ultra HD AMOLED Display with sapphire glass", "Built-in Dual GPS & 120+ sports workout modes", "IP68 water resistant up to 50 meters", "Up to 14 days ultra-long battery life"],
    colors: ["Aero Gunmetal", "Stealth Black", "Rose Champagne"],
    sizes: ["44mm Case"],
    customizable: false
  },
  {
    id: "sr-203",
    name: "Shaik Riyaz 3-in-1 Magnetic Fast Charging Stand",
    brand: "Shaik Riyaz SmartTech",
    category: "tech",
    brandCode: "tech",
    priceINR: 2799,
    originalPriceINR: 4499,
    rating: 4.7,
    reviewsCount: 415,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    badgeType: "signature",
    inStock: true,
    stockCount: 50,
    description: "Aerospace aluminum 15W Qi-certified fast charging station for iPhone/Android, Apple Watch/Galaxy Watch, and AirPods simultaneously with smart thermal management.",
    features: ["Simultaneous 3-device high-speed wireless charging", "Foldable travel-friendly hinge design", "Overcharge, temperature, and surge protection", "Includes 30W GaN power adapter & braided cable"],
    colors: ["Space Grey", "Matte White"],
    sizes: ["Universal Qi"],
    customizable: false
  },
  {
    id: "sr-204",
    name: "Shaik Riyaz SoundBar 120W Dolby Atmos Home Theater",
    brand: "Shaik Riyaz SmartTech",
    category: "tech",
    brandCode: "tech",
    priceINR: 11499,
    originalPriceINR: 18999,
    rating: 4.9,
    reviewsCount: 295,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    badge: "Dolby Atmos",
    badgeType: "signature",
    inStock: true,
    stockCount: 15,
    description: "Immersive 3D cinematic audio powered by dual subwoofers and dedicated center channel. Connects seamlessly via HDMI eARC, Optical, AUX, and Bluetooth 5.3.",
    features: ["120W RMS peak room-filling acoustic output", "Dolby Atmos 3D spatial surround sound processing", "Dedicated Bass Boost & Voice Dialogue enhancers", "Wall-mountable sleek brushed metal design"],
    colors: ["Dark Shadow Black"],
    sizes: ["88cm Soundbar"],
    customizable: false
  },

  // 3. Shaik Riyaz Chrono Timepieces
  {
    id: "sr-301",
    name: "Shaik Riyaz Sovereign Automatic Chronograph",
    brand: "Shaik Riyaz Chrono Timepieces",
    category: "watches",
    brandCode: "watches",
    priceINR: 24999,
    originalPriceINR: 39999,
    rating: 5.0,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    badge: "Shaik Riyaz Flagship",
    badgeType: "luxury",
    inStock: true,
    stockCount: 9,
    description: "Mechanical Japanese automatic movement with exhibition sapphire case back. Adorned with hand-polished surgical-grade 316L stainless steel and sunburst dial.",
    features: ["24-jewel automatic self-winding movement (41-hr reserve)", "Anti-reflective scratch-proof sapphire crystal", "10 ATM (100 meters) water resistance", "Hand-stitched genuine Italian leather strap"],
    colors: ["Sunburst Emerald Dial", "Ocean Deep Blue", "Midnight Black & Rose Gold"],
    sizes: ["42mm Dial"],
    customizable: true
  },
  {
    id: "sr-302",
    name: "Shaik Riyaz Aviator Black Edition Dual-Time Watch",
    brand: "Shaik Riyaz Chrono Timepieces",
    category: "watches",
    brandCode: "watches",
    priceINR: 14999,
    originalPriceINR: 22999,
    rating: 4.8,
    reviewsCount: 198,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    badge: "New Arrival",
    badgeType: "signature",
    inStock: true,
    stockCount: 18,
    description: "Inspired by vintage cockpit chronometers. High-precision quartz movement with independent GMT dual-time zone hand and Super-LumiNova luminescence.",
    features: ["Independent 24-hour GMT second timezone bezel", "Swiss Super-LumiNova on hands and hour markers", "Brushed black DLC (Diamond-Like Carbon) coating", "Solid link oyster bracelet with micro-adjustment clasp"],
    colors: ["Stealth Blackout", "Silver & Pepsi Bezel (Blue/Red)"],
    sizes: ["41mm Dial"],
    customizable: true
  },
  {
    id: "sr-303",
    name: "Shaik Riyaz Classic Minimalist Slim Gold Watch",
    brand: "Shaik Riyaz Chrono Timepieces",
    category: "watches",
    brandCode: "watches",
    priceINR: 7499,
    originalPriceINR: 12499,
    rating: 4.8,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=800&q=80",
    badge: "Trending",
    badgeType: "sale",
    inStock: true,
    stockCount: 25,
    description: "An ultra-thin 6.8mm profile that glides effortlessly under your dress shirt cuffs. 18K yellow gold ion-plated casing with clean stick indices and date window.",
    features: ["Ultra-slim 6.8mm casing thickness", "18K Gold PVD coating guaranteed for 5 years", "Supple calfskin leather strap with quick-release spring bars", "Japanese Miyota quartz movement"],
    colors: ["18K Yellow Gold & White", "Rose Gold & Black"],
    sizes: ["40mm Dial"],
    customizable: true
  },

  // 4. Shaik Riyaz Urban Kicks
  {
    id: "sr-401",
    name: "Shaik Riyaz Apex Stealth Comfort Running Kicks",
    brand: "Shaik Riyaz Urban Kicks",
    category: "footwear",
    brandCode: "footwear",
    priceINR: 4999,
    originalPriceINR: 8499,
    rating: 4.9,
    reviewsCount: 560,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    badge: "Top Seller",
    badgeType: "sale",
    inStock: true,
    stockCount: 31,
    description: "Engineered with Shaik Riyaz CloudBounce foam midsoles for explosive energy return and zero-fatigue stride. Breathable mesh knit upper molds naturally to your feet.",
    features: ["CloudBounce energy-return nitrogen infused midsole", "Engineered aerated mesh upper for 360-degree airflow", "Anti-abrasion carbon rubber traction outsole", "Memory foam orthotic insole with arch support"],
    colors: ["Crimson Red & Black", "Triple White", "Phantom Grey"],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    customizable: false
  },
  {
    id: "sr-402",
    name: "Shaik Riyaz Heritage Handcrafted Italian Derby Shoes",
    brand: "Shaik Riyaz Urban Kicks",
    category: "footwear",
    brandCode: "footwear",
    priceINR: 7999,
    originalPriceINR: 13999,
    rating: 4.9,
    reviewsCount: 220,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
    badge: "Shaik Riyaz Choice",
    badgeType: "signature",
    inStock: true,
    stockCount: 16,
    description: "Blake-stitched dress shoes made from hand-burnished calfskin leather. Designed for commanding presence in boardrooms, weddings, and gala evenings.",
    features: ["Blake-stitched construction for superior flexibility", "Hand-patinated vegetable tanned crust leather", "Natural leather sole with rubber heel insert for grip", "Full leather lining with cushioned footbed"],
    colors: ["Burnished Tan Cognac", "Deep Espresso Brown", "Glossy Black"],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
    customizable: false
  },
  {
    id: "sr-403",
    name: "Shaik Riyaz Retro Street Leather Court Sneakers",
    brand: "Shaik Riyaz Urban Kicks",
    category: "footwear",
    brandCode: "footwear",
    priceINR: 3999,
    originalPriceINR: 6999,
    rating: 4.7,
    reviewsCount: 412,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
    badge: "New Arrival",
    badgeType: "signature",
    inStock: true,
    stockCount: 29,
    description: "Classic court sneaker silhouette upgraded with premium nappa leather overlays and Shaik Riyaz signature green pull tab. Perfect for versatile daily casual wear.",
    features: ["Nappa leather upper with suede trim details", "Vulcanized rubber cupsole with reinforced stitching", "Padded ankle collar for all-day comfort", "Antimicrobial treated insoles"],
    colors: ["White & Forest Green", "White & Ocean Blue", "Triple White"],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    customizable: false
  },

  // 5. Shaik Riyaz Royal Oud & Fragrance
  {
    id: "sr-501",
    name: "Shaik Riyaz Imperial Oud Royale Extrait de Parfum",
    brand: "Shaik Riyaz Royal Oud & Fragrance",
    category: "fragrance",
    brandCode: "fragrance",
    priceINR: 6999,
    originalPriceINR: 11999,
    rating: 5.0,
    reviewsCount: 410,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    badge: "Signature Scent",
    badgeType: "luxury",
    inStock: true,
    stockCount: 22,
    description: "A rich, majestic oriental woody fragrance. Opens with spicy cardamom and saffron, revealing a heart of aged Cambodian agarwood (oud) and Damascene rose, settled on amber and ambergris.",
    features: ["Extrait de Parfum concentration (30% perfume oils)", "14+ hours of opulent sillage and projection", "Hand-blown frosted crystal flacon with gold metal cap", "Aged natural Cambodian oud wood extracts"],
    colors: ["100ml Luxury Flacon"],
    sizes: ["100ml / 3.4 fl.oz", "50ml / 1.7 fl.oz"],
    customizable: true
  },
  {
    id: "sr-502",
    name: "Shaik Riyaz Aqua Azure Fresh Eau de Parfum",
    brand: "Shaik Riyaz Royal Oud & Fragrance",
    category: "fragrance",
    brandCode: "fragrance",
    priceINR: 3499,
    originalPriceINR: 5999,
    rating: 4.8,
    reviewsCount: 388,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    badge: "Best Summer Scent",
    badgeType: "sale",
    inStock: true,
    stockCount: 40,
    description: "Invigorating marine breeze infused with Sicilian bergamot, crisp sea salt, rosemary, and white cedarwood. The ultimate uplifting signature fragrance for all-day freshness.",
    features: ["Eau de Parfum formulation with high longevity", "Crisp zesty Mediterranean aquatic notes", "Magnetic closure wooden and aluminum cap", "Cruelty-free & sustainably sourced essences"],
    colors: ["Ocean Blue Glass"],
    sizes: ["100ml / 3.4 fl.oz"],
    customizable: false
  },
  {
    id: "sr-503",
    name: "Shaik Riyaz Velvet Amber & Smoke Parfum",
    brand: "Shaik Riyaz Royal Oud & Fragrance",
    category: "fragrance",
    brandCode: "fragrance",
    priceINR: 4999,
    originalPriceINR: 7999,
    rating: 4.9,
    reviewsCount: 260,
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    badge: "Shaik Riyaz Choice",
    badgeType: "signature",
    inStock: true,
    stockCount: 19,
    description: "Warm, intoxicating blend of roasted tonka bean, Madagascar vanilla, smoked birch wood, and golden amber. Formulated for evening elegance and unforgettable impression.",
    features: ["Deep warm gourmand and woody sillage", "Crafted by master perfumers in Grasse, France", "Solid brass atomizing pump with ultra-fine mist", "Includes luxury velvet presentation pouch"],
    colors: ["Smoked Amber Glass"],
    sizes: ["100ml / 3.4 fl.oz"],
    customizable: false
  },

  // 6. Shaik Riyaz Heritage Living & Smart Decor
  {
    id: "sr-601",
    name: "Shaik Riyaz Smart Ambient LED Corner Floor Lamp",
    brand: "Shaik Riyaz Heritage Living",
    category: "home",
    brandCode: "home",
    priceINR: 4499,
    originalPriceINR: 7999,
    rating: 4.8,
    reviewsCount: 430,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    badge: "Smart Home",
    badgeType: "signature",
    inStock: true,
    stockCount: 27,
    description: "Minimalist Nordic corner lamp with 16 million RGBIC colors, warm/cool white dimming, and music sync mode. Controlled via smartphone app, Alexa, and Google Assistant.",
    features: ["16 Million vibrant dynamic gradient lighting colors", "Syncs lighting pulses to music & game audio", "Sturdy aircraft aluminum pole with weighted anti-tip base", "Smartphone app & voice assistant compatible"],
    colors: ["Matte Anodized Black", "Frosted Arctic White"],
    sizes: ["142cm Height"],
    customizable: false
  },
  {
    id: "sr-602",
    name: "Shaik Riyaz Hand-Woven Turkish Bamboo Silk Rug",
    brand: "Shaik Riyaz Heritage Living",
    category: "home",
    brandCode: "home",
    priceINR: 9999,
    originalPriceINR: 16999,
    rating: 4.9,
    reviewsCount: 175,
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
    badge: "Heritage Craft",
    badgeType: "luxury",
    inStock: true,
    stockCount: 12,
    description: "Woven by artisanal weavers using eco-friendly bamboo silk with a dense 1.2 million knot count. Features a modern geometric distressed motif with silky sheen under lighting.",
    features: ["Eco-friendly organic bamboo silk with plush 10mm pile", "Non-shedding stain-resistant yarn treatment", "Non-slip natural latex backing", "Hypoallergenic and pet-friendly"],
    colors: ["Mineral Silver & Gold", "Navy Indigo Distressed", "Oatmeal Beige"],
    sizes: ["5x7 Feet", "6x9 Feet"],
    customizable: false
  },
  {
    id: "sr-603",
    name: "Shaik Riyaz Ultrasonic Ceramic Aromatherapy Diffuser",
    brand: "Shaik Riyaz Heritage Living",
    category: "home",
    brandCode: "home",
    priceINR: 2499,
    originalPriceINR: 3999,
    rating: 4.7,
    reviewsCount: 315,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    badge: "Wellness",
    badgeType: "sale",
    inStock: true,
    stockCount: 38,
    description: "Handcrafted matte ceramic stone diffuser that whisper-quietly humidifies and disperses pure essential oils throughout up to 500 sq.ft rooms with warm ambient night light.",
    features: ["Whisper-quiet <20dB ultrasonic diffusion", "Automatic waterless safety shut-off sensor", "300ml reservoir runs up to 10 hours continuously", "Includes free organic lavender essential oil bottle"],
    colors: ["Terracotta Stone", "Charcoal Slate", "Pure Ceramic White"],
    sizes: ["300ml Reservoir"],
    customizable: false
  },

  // 7. Shaik Riyaz Personalized Custom Studio Items ("Names with Shaik Riyaz")
  {
    id: "sr-701",
    name: "Shaik Riyaz Custom Name-Engraved 24K Gold Bar Pen",
    brand: "Shaik Riyaz Signature Luxe",
    category: "custom",
    brandCode: "signature",
    priceINR: 1999,
    originalPriceINR: 3499,
    rating: 4.9,
    reviewsCount: 640,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
    badge: "Custom Laser Engraved",
    badgeType: "signature",
    inStock: true,
    stockCount: 80,
    description: "Precision-weighted brass rollerball pen plated in 24K gold with free custom laser engraving of any name or initials alongside the iconic Shaik Riyaz seal.",
    features: ["Complimentary personalized name laser engraving", "Swiss tungsten carbide 0.7mm rollerball tip", "Refillable with universal German Schmidt cartridges", "Housed in a velvet-lined magnetic gift presentation case"],
    colors: ["24K Polished Gold", "Matte Gunmetal with Gold Clip"],
    sizes: ["Standard Executive"],
    customizable: true
  },
  {
    id: "sr-702",
    name: "Shaik Riyaz Personalized RFID Leather Wallet",
    brand: "Shaik Riyaz Signature Luxe",
    category: "custom",
    brandCode: "signature",
    priceINR: 2199,
    originalPriceINR: 3999,
    rating: 4.9,
    reviewsCount: 520,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    badge: "Personalized",
    badgeType: "signature",
    inStock: true,
    stockCount: 45,
    description: "Full-grain bifold wallet equipped with military-grade RFID blocking shields. Have your custom name or initials hot-stamped in gold foil on genuine handcrafted leather.",
    features: ["Custom gold foil hot-stamp personalization", "Tested RFID 13.56 MHz shielding prevents digital theft", "8 dedicated card slots, 2 currency bills slots & ID window", "Comes in handcrafted wooden keepsake box"],
    colors: ["Vintage Cognac", "Saddle Brown", "Midnight Black"],
    sizes: ["Slim Bifold"],
    customizable: true
  }
];

// Demo Preloaded Orders for live tracking
const DEMO_ORDERS = {
  "SR-88491": {
    orderId: "SR-88491",
    customerName: "Mohammad Farhan",
    date: "November 4, 2026",
    status: "Out for Delivery",
    stepIndex: 3, // 0: Placed, 1: Processed, 2: Shipped, 3: Out for Delivery, 4: Delivered
    estimatedDelivery: "Today by 4:00 PM",
    trackingCarrier: "BlueDart Express (AWB: BD-9948210)",
    items: [
      { name: "Shaik Riyaz Sovereign Automatic Chronograph", qty: 1, price: 24999 }
    ],
    total: 24999,
    shippingAddress: "Banjara Hills, Road No. 12, Hyderabad, Telangana - 500034"
  },
  "SR-55209": {
    orderId: "SR-55209",
    customerName: "Kavita Sharma",
    date: "November 3, 2026",
    status: "In Transit (Shipped)",
    stepIndex: 2,
    estimatedDelivery: "Tomorrow by 2:00 PM",
    trackingCarrier: "Delhivery Logistics (AWB: DL-782194)",
    items: [
      { name: "Shaik Riyaz ProBeats ANC Wireless Headphones", qty: 1, price: 7999 },
      { name: "Shaik Riyaz 3-in-1 Fast Charging Stand", qty: 1, price: 2799 }
    ],
    total: 10798,
    shippingAddress: "Indiranagar 100ft Road, Bangalore, Karnataka - 560038"
  },
  "SR-11042": {
    orderId: "SR-11042",
    customerName: "Zaid Ahmed",
    date: "October 30, 2026",
    status: "Delivered",
    stepIndex: 4,
    estimatedDelivery: "Delivered on Nov 02, 2026",
    trackingCarrier: "DTDC Premium Express (AWB: DT-482012)",
    items: [
      { name: "Shaik Riyaz Imperial Oud Royale Extrait", qty: 1, price: 6999 }
    ],
    total: 6999,
    shippingAddress: "Bandra West, Hill Road, Mumbai, Maharashtra - 400050"
  }
};

// ==========================================
// 2. CURRENCY CONVERSION CONFIG
// ==========================================
const CURRENCIES = {
  INR: { symbol: "₹", rate: 1.0, label: "INR (₹)" },
  USD: { symbol: "$", rate: 0.012, label: "USD ($)" },
  AED: { symbol: "AED ", rate: 0.044, label: "AED (د.إ)" },
  EUR: { symbol: "€", rate: 0.011, label: "EUR (€)" },
  GBP: { symbol: "£", rate: 0.0095, label: "GBP (£)" }
};

let currentCurrency = localStorage.getItem("sr_currency") || "INR";

function formatCurrency(amountINR) {
  const curr = CURRENCIES[currentCurrency] || CURRENCIES.INR;
  const converted = Math.round(amountINR * curr.rate);
  return `${curr.symbol}${converted.toLocaleString("en-IN")}`;
}

function setCurrency(currCode) {
  if (CURRENCIES[currCode]) {
    currentCurrency = currCode;
    localStorage.setItem("sr_currency", currCode);
    updateAllPrices();
    updateCartUI();
    showToast(`Currency changed to ${CURRENCIES[currCode].label}`);
  }
}

// ==========================================
// 3. SOUND EFFECTS ENGINE (Web Audio API)
// ==========================================
let audioEnabled = localStorage.getItem("sr_audio") !== "false";
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playAudioTone(type) {
  if (!audioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === "cart-add") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === "success") {
      // Fanfare chord
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.15, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.4);
      });
    } else if (type === "click") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(700, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    }
  } catch (e) {
    // Audio policy graceful ignore
  }
}

// ==========================================
// 4. CART & WISHLIST STATE MANAGEMENT
// ==========================================
let cart = [];
let wishlist = [];
let appliedCoupon = null;

try {
  cart = JSON.parse(localStorage.getItem("sr_cart")) || [];
  wishlist = JSON.parse(localStorage.getItem("sr_wishlist")) || [];
  appliedCoupon = JSON.parse(localStorage.getItem("sr_coupon")) || null;
} catch (e) {
  cart = [];
  wishlist = [];
}

function saveCart() {
  localStorage.setItem("sr_cart", JSON.stringify(cart));
  updateCartUI();
}

function saveWishlist() {
  localStorage.setItem("sr_wishlist", JSON.stringify(wishlist));
  updateWishlistUI();
}

function addToCart(productId, qty = 1, options = {}) {
  const product = SR_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => 
    item.id === productId && 
    item.color === (options.color || (product.colors ? product.colors[0] : null)) &&
    item.size === (options.size || (product.sizes ? product.sizes[0] : null))
  );

  const chosenColor = options.color || (product.colors ? product.colors[0] : "Default");
  const chosenSize = options.size || (product.sizes ? product.sizes[0] : "Standard");
  const customName = options.engraving || "";

  if (existingIndex > -1) {
    cart[existingIndex].quantity += qty;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      brand: product.brand,
      priceINR: product.priceINR,
      image: product.image,
      color: chosenColor,
      size: chosenSize,
      engraving: customName,
      quantity: qty
    });
  }

  saveCart();
  playAudioTone("cart-add");
  showToast(`Added to Bag: ${product.name}`);
  openCartDrawer();
}

function updateCartQty(index, change) {
  if (cart[index]) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
      const removedName = cart[index].name;
      cart.splice(index, 1);
      showToast(`Removed from Bag: ${removedName}`);
    }
    saveCart();
  }
}

function removeFromCart(index) {
  if (cart[index]) {
    const removedName = cart[index].name;
    cart.splice(index, 1);
    saveCart();
    showToast(`Removed ${removedName}`);
  }
}

function clearCart() {
  cart = [];
  appliedCoupon = null;
  localStorage.removeItem("sr_coupon");
  saveCart();
  showToast("Shopping bag cleared.");
}

function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  const product = SR_PRODUCTS.find(p => p.id === productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed from Wishlist`);
  } else {
    wishlist.push(productId);
    showToast(`Added to Wishlist: ${product ? product.name : ''}`);
    playAudioTone("click");
  }
  saveWishlist();
  updateWishlistIcons();
}

function updateWishlistIcons() {
  document.querySelectorAll("[data-wishlist-btn]").forEach(btn => {
    const pid = btn.getAttribute("data-wishlist-btn");
    const isWished = wishlist.includes(pid);
    const icon = btn.querySelector("i, svg");
    if (icon) {
      if (isWished) {
        btn.classList.add("text-rose-500");
        btn.classList.remove("text-slate-400");
        icon.setAttribute("fill", "currentColor");
      } else {
        btn.classList.remove("text-rose-500");
        btn.classList.add("text-slate-400");
        icon.removeAttribute("fill");
      }
    }
  });
}

// ==========================================
// 5. COUPON ENGINE
// ==========================================
const AVAILABLE_COUPONS = {
  "RIYAZ25": { code: "RIYAZ25", discountPct: 25, label: "25% Shaik Riyaz Special Off", minSpend: 1500 },
  "RIYAZ500": { code: "RIYAZ500", flatDiscount: 500, label: "Flat ₹500 Instant Off", minSpend: 2500 },
  "WELCOME10": { code: "WELCOME10", discountPct: 10, label: "10% Welcome Discount", minSpend: 500 },
  "FREESHIP": { code: "FREESHIP", freeShipping: true, label: "100% Free Express Shipping", minSpend: 0 }
};

function applyCoupon(code) {
  const clean = (code || "").trim().toUpperCase();
  if (AVAILABLE_COUPONS[clean]) {
    const coupon = AVAILABLE_COUPONS[clean];
    const subtotal = getCartSubtotal();
    if (subtotal < coupon.minSpend) {
      showToast(`Coupon requires minimum spend of ${formatCurrency(coupon.minSpend)}`, "error");
      return false;
    }
    appliedCoupon = coupon;
    localStorage.setItem("sr_coupon", JSON.stringify(coupon));
    playAudioTone("success");
    showToast(`Coupon applied! ${coupon.label}`);
    updateCartUI();
    return true;
  } else {
    showToast("Invalid coupon code. Try RIYAZ25 or WELCOME10", "error");
    return false;
  }
}

function removeCoupon() {
  appliedCoupon = null;
  localStorage.removeItem("sr_coupon");
  showToast("Coupon removed");
  updateCartUI();
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => sum + (item.priceINR * item.quantity), 0);
}

function getCartCalculations() {
  const subtotal = getCartSubtotal();
  let discount = 0;
  let isFreeShipping = subtotal >= 999;

  if (appliedCoupon) {
    if (appliedCoupon.discountPct) {
      discount = Math.round((subtotal * appliedCoupon.discountPct) / 100);
    } else if (appliedCoupon.flatDiscount) {
      discount = Math.min(subtotal, appliedCoupon.flatDiscount);
    }
    if (appliedCoupon.freeShipping) {
      isFreeShipping = true;
    }
  }

  const shipping = isFreeShipping || subtotal === 0 ? 0 : 99;
  const taxableAmount = Math.max(0, subtotal - discount);
  const tax = Math.round(taxableAmount * 0.05); // 5% GST
  const grandTotal = taxableAmount + shipping + tax;

  return { subtotal, discount, shipping, tax, grandTotal, isFreeShipping };
}

// ==========================================
// 6. UI RENDERERS & CART DRAWER
// ==========================================
function updateCartUI() {
  const countEls = document.querySelectorAll(".cart-count-badge");
  const totalCount = cart.reduce((c, item) => c + item.quantity, 0);
  countEls.forEach(el => {
    el.textContent = totalCount;
    el.classList.toggle("hidden", totalCount === 0);
  });

  const cartDrawerItems = document.getElementById("cartDrawerItems");
  const cartSubtotalEl = document.getElementById("cartDrawerSubtotal");
  const cartGrandTotalEl = document.getElementById("cartDrawerGrandTotal");
  const freeShipBar = document.getElementById("freeShippingProgress");
  const freeShipText = document.getElementById("freeShippingText");
  const couponAppliedBox = document.getElementById("cartCouponAppliedBox");

  const calc = getCartCalculations();

  if (cartDrawerItems) {
    if (cart.length === 0) {
      cartDrawerItems.innerHTML = `
        <div class="py-16 text-center text-slate-400">
          <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-500">
            <i data-lucide="shopping-bag" class="w-10 h-10"></i>
          </div>
          <h4 class="text-base font-semibold text-slate-200 mb-1">Your Shopping Bag is Empty</h4>
          <p class="text-xs text-slate-400 max-w-xs mx-auto mb-5">Explore Shaik Riyaz signature fashion, horology, gadgets, and fragrances.</p>
          <a href="products.html" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition-all">
            Start Shopping Now <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
      `;
    } else {
      cartDrawerItems.innerHTML = cart.map((item, index) => `
        <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/60 mb-2.5 hover:border-slate-600 transition-colors">
          <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg flex-shrink-0">
          <div class="flex-1 min-w-0">
            <h5 class="text-xs font-bold text-white truncate">${item.name}</h5>
            <p class="text-[11px] text-blue-400 font-medium">${item.brand}</p>
            <div class="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
              ${item.color ? `<span>Color: ${item.color}</span>` : ''}
              ${item.size ? `<span>Size: ${item.size}</span>` : ''}
              ${item.engraving ? `<span class="text-amber-400">Engraved: "${item.engraving}"</span>` : ''}
            </div>
            <div class="flex items-center justify-between mt-2">
              <span class="text-xs font-extrabold text-white">${formatCurrency(item.priceINR * item.quantity)}</span>
              <div class="flex items-center border border-slate-700 rounded-lg bg-slate-900/80 overflow-hidden">
                <button onclick="updateCartQty(${index}, -1)" class="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800">-</button>
                <span class="w-6 text-center text-xs font-bold text-white">${item.quantity}</span>
                <button onclick="updateCartQty(${index}, 1)" class="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800">+</button>
              </div>
            </div>
          </div>
          <button onclick="removeFromCart(${index})" class="text-slate-500 hover:text-red-400 p-1">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      `).join("");
    }
  }

  if (cartSubtotalEl) cartSubtotalEl.textContent = formatCurrency(calc.subtotal);
  if (cartGrandTotalEl) cartGrandTotalEl.textContent = formatCurrency(calc.grandTotal);

  if (freeShipBar && freeShipText) {
    const threshold = 999;
    const pct = Math.min(100, Math.round((calc.subtotal / threshold) * 100));
    freeShipBar.style.width = `${pct}%`;
    if (pct >= 100) {
      freeShipText.innerHTML = `<span class="text-emerald-400 font-bold">🎉 Congratulations! You have FREE Express Shipping!</span>`;
    } else {
      const remaining = threshold - calc.subtotal;
      freeShipText.innerHTML = `Add <span class="text-white font-bold">${formatCurrency(remaining)}</span> more to unlock <strong>FREE Express Shipping</strong>!`;
    }
  }

  if (couponAppliedBox) {
    if (appliedCoupon) {
      couponAppliedBox.innerHTML = `
        <div class="flex items-center justify-between p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs mb-3">
          <div class="flex items-center gap-1.5">
            <i data-lucide="tag" class="w-3.5 h-3.5"></i>
            <span>Applied: <strong>${appliedCoupon.code}</strong> (-${formatCurrency(calc.discount)})</span>
          </div>
          <button onclick="removeCoupon()" class="text-slate-400 hover:text-red-400 text-xs underline">Remove</button>
        </div>
      `;
    } else {
      couponAppliedBox.innerHTML = "";
    }
  }

  // Refresh lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function updateWishlistUI() {
  const wishCountEls = document.querySelectorAll(".wishlist-count-badge");
  wishCountEls.forEach(el => {
    el.textContent = wishlist.length;
    el.classList.toggle("hidden", wishlist.length === 0);
  });
}

function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer && overlay) {
    drawer.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer && overlay) {
    drawer.classList.add("translate-x-full");
    overlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

// ==========================================
// 7. PRODUCT CARD BUILDER
// ==========================================
function renderProductCard(p) {
  const isWished = wishlist.includes(p.id);
  const discountPct = Math.round(((p.originalPriceINR - p.priceINR) / p.originalPriceINR) * 100);

  let badgeHtml = "";
  if (p.badge) {
    const badgeClass = p.badgeType === "luxury" ? "badge-luxury" : p.badgeType === "sale" ? "badge-sale" : "badge-signature";
    badgeHtml = `<span class="absolute top-3 left-3 text-[10px] px-2.5 py-1 rounded-full font-bold shadow-md uppercase tracking-wider z-10 ${badgeClass}">${p.badge}</span>`;
  }

  return `
    <div class="product-card glass-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-800 hover:border-blue-500/40 relative">
      ${badgeHtml}
      
      <button data-wishlist-btn="${p.id}" onclick="toggleWishlist('${p.id}')" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-rose-500 hover:scale-110 transition-all z-10 ${isWished ? 'text-rose-500' : ''}" title="Save to Wishlist">
        <i data-lucide="heart" class="w-4 h-4" ${isWished ? 'fill="currentColor"' : ''}></i>
      </button>

      <div class="product-image-container w-full h-56 bg-slate-900 cursor-pointer" onclick="openQuickView('${p.id}')">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3">
          <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-lg">
            <i data-lucide="eye" class="w-3.5 h-3.5"></i> Quick View
          </span>
        </div>
      </div>

      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-[11px] text-blue-400 font-semibold uppercase tracking-wider mb-1">
            <span>${p.brand}</span>
            <div class="flex items-center gap-1 text-amber-400">
              <i data-lucide="star" class="w-3 h-3 fill-amber-400"></i>
              <span class="text-slate-300 font-bold">${p.rating}</span>
              <span class="text-slate-500 text-[10px]">(${p.reviewsCount})</span>
            </div>
          </div>

          <h3 class="text-sm font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug cursor-pointer mb-2" onclick="openQuickView('${p.id}')">
            ${p.name}
          </h3>

          <p class="text-[11px] text-slate-400 line-clamp-2 mb-3 leading-relaxed">
            ${p.description}
          </p>
        </div>

        <div>
          <div class="flex items-baseline gap-2 mb-3">
            <span class="text-base font-extrabold text-white price-val" data-inr="${p.priceINR}">${formatCurrency(p.priceINR)}</span>
            <span class="text-xs text-slate-500 line-through">${formatCurrency(p.originalPriceINR)}</span>
            <span class="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">${discountPct}% OFF</span>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="addToCart('${p.id}', 1)" class="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/20 transition-all">
              <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i> Add to Bag
            </button>
            <button onclick="openQuickView('${p.id}')" class="px-2.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs transition-colors" title="View Details">
              <i data-lucide="info" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// 8. QUICK VIEW MODAL
// ==========================================
let activeQuickViewProduct = null;

function openQuickView(productId) {
  const p = SR_PRODUCTS.find(item => item.id === productId);
  if (!p) return;
  activeQuickViewProduct = p;

  const modal = document.getElementById("quickViewModal");
  const modalContent = document.getElementById("quickViewContent");
  if (!modal || !modalContent) return;

  const discountPct = Math.round(((p.originalPriceINR - p.priceINR) / p.originalPriceINR) * 100);

  modalContent.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <!-- Image Gallery -->
      <div class="space-y-3">
        <div class="w-full h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/60 relative">
          <img id="qvMainImage" src="${p.image}" alt="${p.name}" class="w-full h-full object-cover">
          ${p.badge ? `<span class="absolute top-3 left-3 text-xs px-3 py-1 rounded-full font-bold shadow-md uppercase tracking-wider ${p.badgeType === 'luxury' ? 'badge-luxury' : p.badgeType === 'sale' ? 'badge-sale' : 'badge-signature'}">${p.badge}</span>` : ''}
        </div>
        <div class="flex items-center gap-2 overflow-x-auto pb-1">
          <img src="${p.image}" class="w-16 h-16 rounded-xl object-cover border-2 border-blue-500 cursor-pointer">
          <div class="w-16 h-16 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 text-[10px] text-center p-1">
            Shaik Riyaz Certified
          </div>
        </div>
      </div>

      <!-- Product Details -->
      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">
            <span>${p.brand}</span>
            <span class="text-emerald-400 flex items-center gap-1 font-semibold">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> In Stock (${p.stockCount} left)
            </span>
          </div>

          <h2 class="text-xl font-extrabold text-white mb-2">${p.name}</h2>

          <div class="flex items-center gap-2 mb-4">
            <div class="flex items-center text-amber-400">
              ${Array(5).fill(0).map((_, i) => `<i data-lucide="star" class="w-4 h-4 ${i < Math.floor(p.rating) ? 'fill-amber-400' : ''}"></i>`).join('')}
            </div>
            <span class="text-xs font-bold text-slate-300">${p.rating} / 5.0</span>
            <span class="text-xs text-slate-500">(${p.reviewsCount} verified customer reviews)</span>
          </div>

          <div class="flex items-baseline gap-3 mb-4">
            <span class="text-2xl font-black text-white">${formatCurrency(p.priceINR)}</span>
            <span class="text-sm text-slate-500 line-through">${formatCurrency(p.originalPriceINR)}</span>
            <span class="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">${discountPct}% DISCOUNT</span>
          </div>

          <p class="text-xs text-slate-300 leading-relaxed mb-4">${p.description}</p>

          <!-- Key Features -->
          <div class="space-y-1.5 mb-5 bg-slate-800/40 p-3 rounded-xl border border-slate-700/50">
            ${p.features.map(f => `
              <div class="flex items-center gap-2 text-xs text-slate-300">
                <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-blue-400 flex-shrink-0"></i>
                <span>${f}</span>
              </div>
            `).join('')}
          </div>

          <!-- Color Variants -->
          ${p.colors ? `
            <div class="mb-4">
              <label class="block text-xs font-semibold text-slate-300 mb-1.5">Select Colorway:</label>
              <div class="flex flex-wrap gap-2">
                ${p.colors.map((color, i) => `
                  <button type="button" class="qv-color-btn text-xs px-3 py-1.5 rounded-lg border ${i === 0 ? 'border-blue-500 bg-blue-500/20 text-white font-bold' : 'border-slate-700 bg-slate-800 text-slate-300'} hover:border-blue-400 transition-colors" data-color="${color}" onclick="selectQvOption(this, 'color')">
                    ${color}
                  </button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Size Variants -->
          ${p.sizes ? `
            <div class="mb-4">
              <label class="block text-xs font-semibold text-slate-300 mb-1.5">Select Size / Fit:</label>
              <div class="flex flex-wrap gap-2">
                ${p.sizes.map((size, i) => `
                  <button type="button" class="qv-size-btn text-xs px-3 py-1.5 rounded-lg border ${i === 0 ? 'border-blue-500 bg-blue-500/20 text-white font-bold' : 'border-slate-700 bg-slate-800 text-slate-300'} hover:border-blue-400 transition-colors" data-size="${size}" onclick="selectQvOption(this, 'size')">
                    ${size}
                  </button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Custom Name Engraving if applicable -->
          ${p.customizable ? `
            <div class="mb-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <label class="block text-xs font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Custom Name Engraving (Free):
              </label>
              <input type="text" id="qvEngravingInput" placeholder="e.g. Shaik Riyaz or Your Name" maxlength="24" class="w-full text-xs px-3 py-2 rounded-lg bg-slate-900 border border-amber-500/50 text-white focus:outline-none focus:border-amber-400">
              <p class="text-[10px] text-amber-300/70 mt-1">Personalized with high-precision laser by Shaik Riyaz Master Studio.</p>
            </div>
          ` : ''}
        </div>

        <div class="pt-4 border-t border-slate-700/80 flex items-center gap-4">
          <div class="flex items-center border border-slate-700 rounded-xl bg-slate-900 overflow-hidden">
            <button onclick="changeQvQty(-1)" class="w-9 h-10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 font-bold">-</button>
            <input type="number" id="qvQtyInput" value="1" min="1" max="10" readonly class="w-10 text-center bg-transparent text-white font-bold text-sm focus:outline-none">
            <button onclick="changeQvQty(1)" class="w-9 h-10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 font-bold">+</button>
          </div>

          <button onclick="addQvToBag()" class="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 active:scale-95 transition-all">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i> Add to Bag
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
  if (window.lucide) window.lucide.createIcons();
}

function selectQvOption(btn, type) {
  const container = btn.parentElement;
  container.querySelectorAll("button").forEach(b => {
    b.classList.remove("border-blue-500", "bg-blue-500/20", "text-white", "font-bold");
    b.classList.add("border-slate-700", "bg-slate-800", "text-slate-300");
  });
  btn.classList.add("border-blue-500", "bg-blue-500/20", "text-white", "font-bold");
  btn.classList.remove("border-slate-700", "bg-slate-800", "text-slate-300");
}

function changeQvQty(delta) {
  const input = document.getElementById("qvQtyInput");
  if (input) {
    let val = parseInt(input.value, 10) || 1;
    val = Math.max(1, Math.min(10, val + delta));
    input.value = val;
  }
}

function addQvToBag() {
  if (!activeQuickViewProduct) return;
  const qty = parseInt(document.getElementById("qvQtyInput")?.value, 10) || 1;
  const selectedColor = document.querySelector(".qv-color-btn.border-blue-500")?.getAttribute("data-color") || null;
  const selectedSize = document.querySelector(".qv-size-btn.border-blue-500")?.getAttribute("data-size") || null;
  const engraving = document.getElementById("qvEngravingInput")?.value?.trim() || "";

  addToCart(activeQuickViewProduct.id, qty, {
    color: selectedColor,
    size: selectedSize,
    engraving: engraving
  });

  closeQuickView();
}

function closeQuickView() {
  const modal = document.getElementById("quickViewModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

// ==========================================
// 9. LIVE ORDER TRACKING
// ==========================================
function trackOrder(orderIdInput) {
  const orderId = (orderIdInput || "").trim().toUpperCase();
  const modal = document.getElementById("orderTrackModal");
  const resultContainer = document.getElementById("orderTrackResult");
  if (!modal || !resultContainer) return;

  // Check demo orders or customer stored orders
  let order = DEMO_ORDERS[orderId];
  if (!order) {
    const userOrders = JSON.parse(localStorage.getItem("sr_user_orders")) || {};
    order = userOrders[orderId];
  }

  if (!order) {
    resultContainer.innerHTML = `
      <div class="p-6 text-center text-slate-400">
        <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center">
          <i data-lucide="alert-triangle" class="w-8 h-8"></i>
        </div>
        <h4 class="text-base font-bold text-white mb-1">Order #${orderId} Not Found</h4>
        <p class="text-xs text-slate-400 mb-4">Please verify your order tracking ID. Try demo order: <strong>SR-88491</strong> or <strong>SR-55209</strong>.</p>
      </div>
    `;
  } else {
    const steps = [
      { title: "Order Confirmed", sub: "Payment verified by Shaik Riyaz Group" },
      { title: "Processing & Quality Check", sub: "Hand-inspected & gift packaged" },
      { title: "Dispatched & In Transit", sub: order.trackingCarrier || "Express Courier" },
      { title: "Out for Delivery", sub: "Courier agent arriving today" },
      { title: "Delivered", sub: "Handed over to customer" }
    ];

    resultContainer.innerHTML = `
      <div class="p-6 space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-700/80">
          <div>
            <span class="text-xs text-blue-400 font-bold uppercase tracking-wider">Tracking Reference</span>
            <h3 class="text-xl font-extrabold text-white">${order.orderId}</h3>
            <p class="text-xs text-slate-400">Recipient: <strong class="text-white">${order.customerName}</strong> • Ordered: ${order.date}</p>
          </div>
          <div class="text-right">
            <span class="text-xs text-slate-400">Status</span>
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              ${order.status}
            </div>
            <p class="text-[11px] text-slate-400 mt-1">Est: <strong>${order.estimatedDelivery}</strong></p>
          </div>
        </div>

        <!-- 5-Stage Visual Timeline -->
        <div class="relative pl-6 space-y-6 border-l-2 border-slate-700 my-4">
          ${steps.map((st, idx) => {
            const isDone = idx <= order.stepIndex;
            const isCurrent = idx === order.stepIndex;
            return `
              <div class="relative">
                <div class="absolute -left-[31px] top-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${isDone ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30' : 'bg-slate-800 border border-slate-600 text-slate-500'}">
                  ${isDone ? '✓' : idx + 1}
                </div>
                <div class="${isCurrent ? 'text-white' : isDone ? 'text-slate-300' : 'text-slate-500'}">
                  <h5 class="text-xs font-bold flex items-center gap-2">
                    ${st.title}
                    ${isCurrent ? '<span class="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/30">Active Stage</span>' : ''}
                  </h5>
                  <p class="text-[11px] text-slate-400 mt-0.5">${st.sub}</p>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Order Items Preview -->
        <div class="bg-slate-800/40 p-4 rounded-xl border border-slate-700/60">
          <h5 class="text-xs font-bold text-slate-300 mb-2">Package Contents:</h5>
          <div class="space-y-1.5 text-xs text-slate-400">
            ${order.items.map(item => `
              <div class="flex items-center justify-between">
                <span>${item.qty}x ${item.name}</span>
                <span class="font-bold text-white">${formatCurrency(item.price * item.qty)}</span>
              </div>
            `).join('')}
          </div>
          <div class="mt-3 pt-2 border-t border-slate-700 text-xs flex justify-between font-bold text-white">
            <span>Total Value:</span>
            <span class="text-blue-400">${formatCurrency(order.total)}</span>
          </div>
          <div class="mt-2 text-[11px] text-slate-400">
            <span>Destination: </span><span class="text-slate-200">${order.shippingAddress}</span>
          </div>
        </div>
      </div>
    `;
  }

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
  if (window.lucide) window.lucide.createIcons();
}

function closeOrderTrackModal() {
  const modal = document.getElementById("orderTrackModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

// ==========================================
// 10. CHECKOUT & ORDER CONFIRMATION ENGINE
// ==========================================
function processCheckoutOrder(formData) {
  if (cart.length === 0) {
    showToast("Your cart is empty!", "error");
    return;
  }

  const orderId = `SR-${Math.floor(100000 + Math.random() * 900000)}`;
  const calc = getCartCalculations();
  const dateStr = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  const newOrder = {
    orderId: orderId,
    customerName: formData.fullName || "Valued Patron",
    email: formData.email || "customer@example.com",
    phone: formData.phone || "+91 98765 43210",
    date: dateStr,
    status: "Confirmed & Packing",
    stepIndex: 1,
    estimatedDelivery: "Delivery in 2-3 business days",
    trackingCarrier: "Shaik Riyaz Express Dispatch",
    shippingAddress: `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`,
    paymentMethod: formData.paymentMethod || "UPI / Instant Pay",
    items: [...cart],
    subtotal: calc.subtotal,
    discount: calc.discount,
    shipping: calc.shipping,
    tax: calc.tax,
    total: calc.grandTotal
  };

  // Persist order in local storage
  const userOrders = JSON.parse(localStorage.getItem("sr_user_orders")) || {};
  userOrders[orderId] = newOrder;
  localStorage.setItem("sr_user_orders", JSON.stringify(userOrders));

  // Audio & confetti
  playAudioTone("success");
  spawnConfetti();

  // Clear cart
  clearCart();

  // Show Confirmation Receipt Modal
  showOrderSuccessModal(newOrder);
}

function showOrderSuccessModal(order) {
  const modal = document.getElementById("orderSuccessModal");
  const content = document.getElementById("orderSuccessContent");
  if (!modal || !content) return;

  content.innerHTML = `
    <div id="printableInvoice" class="p-6 md:p-8 space-y-6 bg-slate-900 rounded-3xl text-slate-100">
      <div class="text-center pb-6 border-b border-slate-800">
        <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <i data-lucide="check" class="w-8 h-8"></i>
        </div>
        <span class="text-xs font-bold text-emerald-400 tracking-wider uppercase">Order Successfully Placed</span>
        <h2 class="text-2xl font-black text-white mt-1">Thank You For Shopping with Shaik Riyaz!</h2>
        <p class="text-xs text-slate-400 mt-1">Your official invoice and digital receipt has been generated.</p>
        <div class="mt-3 inline-block px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sm font-mono text-blue-400 font-bold">
          Order ID: ${order.orderId}
        </div>
      </div>

      <!-- Receipt Information Details -->
      <div class="grid grid-cols-2 gap-4 text-xs">
        <div>
          <span class="text-slate-400">Shipped To:</span>
          <p class="font-bold text-white mt-0.5">${order.customerName}</p>
          <p class="text-slate-300 text-[11px] leading-tight">${order.shippingAddress}</p>
          <p class="text-slate-400 text-[11px] mt-1">${order.phone} • ${order.email}</p>
        </div>
        <div class="text-right">
          <span class="text-slate-400">Payment Details:</span>
          <p class="font-bold text-white mt-0.5">${order.paymentMethod}</p>
          <p class="text-emerald-400 font-semibold text-[11px]">Payment Status: PAID</p>
          <p class="text-slate-400 text-[11px] mt-1">Date: ${order.date}</p>
        </div>
      </div>

      <!-- Items Table -->
      <div class="border border-slate-800 rounded-2xl overflow-hidden">
        <table class="w-full text-xs text-left">
          <thead class="bg-slate-800/80 text-slate-400 font-semibold">
            <tr>
              <th class="p-3">Product Description</th>
              <th class="p-3 text-center">Qty</th>
              <th class="p-3 text-right">Amount</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            ${order.items.map(item => `
              <tr>
                <td class="p-3">
                  <div class="font-bold text-white">${item.name}</div>
                  <div class="text-[10px] text-blue-400">${item.brand} ${item.color ? `• ${item.color}` : ''} ${item.size ? `• ${item.size}` : ''}</div>
                  ${item.engraving ? `<div class="text-[10px] text-amber-400">Personalized: "${item.engraving}"</div>` : ''}
                </td>
                <td class="p-3 text-center text-slate-300 font-bold">${item.quantity}</td>
                <td class="p-3 text-right font-bold text-white">${formatCurrency(item.priceINR * item.quantity)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Financial Totals -->
      <div class="space-y-1.5 text-xs text-slate-300 border-t border-slate-800 pt-3">
        <div class="flex justify-between">
          <span class="text-slate-400">Subtotal:</span>
          <span>${formatCurrency(order.subtotal)}</span>
        </div>
        ${order.discount > 0 ? `
          <div class="flex justify-between text-emerald-400">
            <span>Special Promotional Discount:</span>
            <span>-${formatCurrency(order.discount)}</span>
          </div>
        ` : ''}
        <div class="flex justify-between">
          <span class="text-slate-400">Express Delivery:</span>
          <span>${order.shipping === 0 ? '<strong class="text-emerald-400">FREE</strong>' : formatCurrency(order.shipping)}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-400">GST / Taxes (5%):</span>
          <span>${formatCurrency(order.tax)}</span>
        </div>
        <div class="flex justify-between text-sm font-black text-white pt-2 border-t border-slate-700">
          <span>Grand Total Paid:</span>
          <span class="text-blue-400">${formatCurrency(order.total)}</span>
        </div>
      </div>

      <div class="no-print pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <button onclick="window.print()" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-2 transition-colors">
          <i data-lucide="printer" class="w-4 h-4"></i> Print Official Receipt
        </button>
        <div class="flex items-center gap-2">
          <button onclick="trackOrder('${order.orderId}')" class="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 transition-colors">
            <i data-lucide="map-pin" class="w-4 h-4"></i> Track Delivery
          </button>
          <button onclick="closeOrderSuccessModal()" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
  if (window.lucide) window.lucide.createIcons();
}

function closeOrderSuccessModal() {
  const modal = document.getElementById("orderSuccessModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

// Confetti Spawner
function spawnConfetti() {
  const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6", "#f97316"];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.top = `${Math.random() * 20}vh`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.animationDuration = `${1.5 + Math.random() * 2}s`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3500);
  }
}

// ==========================================
// 11. TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(message, type = "info") {
  const container = document.getElementById("srToastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  const isError = type === "error";
  toast.className = `flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-md text-xs font-semibold text-white transition-all transform translate-y-2 opacity-0 ${
    isError ? 'bg-red-600/90 border border-red-400/40' : 'bg-slate-900/95 border border-slate-700/80 shadow-blue-500/10'
  }`;

  toast.innerHTML = `
    <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${isError ? 'bg-white/20' : 'bg-blue-500/20 text-blue-400'}">
      <i data-lucide="${isError ? 'alert-circle' : 'check-circle'}" class="w-3.5 h-3.5"></i>
    </div>
    <span class="flex-1">${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-2", "opacity-0");
  });

  setTimeout(() => {
    toast.classList.add("translate-y-2", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// 12. PRICE RE-RENDER ON CURRENCY CHANGE
// ==========================================
function updateAllPrices() {
  document.querySelectorAll(".price-val").forEach(el => {
    const inr = parseInt(el.getAttribute("data-inr"), 10);
    if (!isNaN(inr)) {
      el.textContent = formatCurrency(inr);
    }
  });
}

// ==========================================
// 13. GLOBAL SEARCH & AUTOCOMPLETE
// ==========================================
function setupGlobalSearch() {
  const searchInputs = document.querySelectorAll(".global-search-input");
  const searchResults = document.getElementById("searchDropdown");

  searchInputs.forEach(input => {
    input.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!searchResults) return;

      if (q.length < 2) {
        searchResults.classList.add("hidden");
        return;
      }

      const matches = SR_PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      ).slice(0, 5);

      if (matches.length === 0) {
        searchResults.innerHTML = `
          <div class="p-4 text-xs text-slate-400 text-center">
            No products matching "<strong class="text-white">${q}</strong>" found.
          </div>
        `;
      } else {
        searchResults.innerHTML = matches.map(m => `
          <div class="flex items-center gap-3 p-2.5 hover:bg-slate-800/80 cursor-pointer transition-colors border-b border-slate-800 last:border-b-0" onclick="openQuickView('${m.id}')">
            <img src="${m.image}" alt="${m.name}" class="w-10 h-10 rounded-lg object-cover flex-shrink-0">
            <div class="flex-1 min-w-0">
              <h5 class="text-xs font-bold text-white truncate">${m.name}</h5>
              <p class="text-[10px] text-blue-400 font-semibold">${m.brand}</p>
            </div>
            <span class="text-xs font-extrabold text-white">${formatCurrency(m.priceINR)}</span>
          </div>
        `).join('') + `
          <div class="p-2 bg-slate-900 text-center">
            <a href="products.html?q=${encodeURIComponent(q)}" class="text-[11px] text-blue-400 font-bold hover:underline">
              View all results (${matches.length}) →
            </a>
          </div>
        `;
      }

      searchResults.classList.remove("hidden");
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!input.contains(e.target) && searchResults && !searchResults.contains(e.target)) {
        searchResults.classList.add("hidden");
      }
    });
  });
}

// ==========================================
// 14. FLASH DEALS COUNTDOWN TIMER
// ==========================================
function startFlashSaleTimer() {
  const hoursEl = document.getElementById("saleHours");
  const minsEl = document.getElementById("saleMins");
  const secsEl = document.getElementById("saleSecs");
  if (!hoursEl || !minsEl || !secsEl) return;

  // 12-hour recurring countdown
  function tick() {
    const now = new Date();
    const target = new Date();
    target.setHours(23, 59, 59, 999);
    const diff = Math.max(0, target - now);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent = String(mins).padStart(2, "0");
    secsEl.textContent = String(secs).padStart(2, "0");
  }

  tick();
  setInterval(tick, 1000);
}

// ==========================================
// 15. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  updateCartUI();
  updateWishlistUI();
  updateWishlistIcons();
  setupGlobalSearch();
  startFlashSaleTimer();

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Currency select handler
  const currencySelect = document.getElementById("currencySelector");
  if (currencySelect) {
    currencySelect.value = currentCurrency;
    currencySelect.addEventListener("change", (e) => {
      setCurrency(e.target.value);
    });
  }

  // Audio Mute toggle
  const audioToggleBtn = document.getElementById("audioToggleBtn");
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener("click", () => {
      audioEnabled = !audioEnabled;
      localStorage.setItem("sr_audio", audioEnabled ? "true" : "false");
      showToast(audioEnabled ? "Sound Effects Enabled 🔊" : "Sound Effects Muted 🔇");
      audioToggleBtn.innerHTML = `<i data-lucide="${audioEnabled ? 'volume-2' : 'volume-x'}" class="w-4 h-4"></i>`;
      if (window.lucide) window.lucide.createIcons();
    });
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
});
