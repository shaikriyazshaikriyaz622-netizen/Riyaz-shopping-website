# Shaik Riyaz Shopping — Official E-Commerce Platform

A modern, responsive, and luxury multi-page shopping platform built under the hallmark of **Shaik Riyaz**. Featuring couture menswear, Swiss horology chronographs, studio-grade acoustics, bespoke personal laser engraving, and direct-to-consumer logistics.

---

## 🌟 Key Features & Engines

1. **Brand Universe ("Names with Shaik Riyaz")**:
   - **Shaik Riyaz Signature Luxe**: Italian merino wool blazers, velvet sherwanis, Oxford cotton shirts, and buffalo leather briefcases.
   - **Shaik Riyaz SmartTech**: Hybrid active noise cancellation headphones (ProBeats ANC), AMOLED GPS smartwatches, and 120W Dolby Atmos soundbars.
   - **Shaik Riyaz Chrono Timepieces**: 24-jewel automatic chronographs with exhibition sapphire case backs, vintage dual-time GMTs, and 18K slim gold watches.
   - **Shaik Riyaz Urban Kicks**: CloudBounce running kicks, handcrafted Blake-stitched Italian derby shoes, and retro street court sneakers.
   - **Shaik Riyaz Royal Oud & Fragrance**: Extrait de Parfum (30% concentration) with aged Cambodian agarwood, Mediterranean aquatic parfums, and amber smoke scents.
   - **Shaik Riyaz Heritage Living**: App-controlled 16M RGBIC corner lamps, Turkish bamboo silk rugs, and ultrasonic ceramic stone aromatherapy diffusers.
   - **Personalized Studio**: Free custom name laser engraving on 24K gold bar pens and full-grain RFID wallets.

2. **Dynamic Shopping Bag & Slide-Over Drawer**:
   - Real-time cart calculations with item increments, decrements, and removals.
   - Interactive Free Express Shipping Progress Bar (free over ₹999).
   - Multi-coupon discount engine with instant recalculation:
     - `RIYAZ25`: 25% Flat Discount
     - `RIYAZ500`: Flat ₹500 Off on orders above ₹2,500
     - `WELCOME10`: 10% Welcome Gift
     - `FREESHIP`: 100% Free Express Shipping waiver

3. **Multi-Currency Real-Time Converter**:
   - Seamless conversion between **INR (₹)**, **USD ($)**, **AED (د.إ)**, **EUR (€)**, and **GBP (£)** across all pages and product tags.

4. **Web Audio API Sound Effects Engine**:
   - Pure client-side audio synthesizer generating clean tonal feedback:
     - Soft dual-tone chime on "Add to Bag"
     - Harmonious victory fanfare on successful checkout order placement
     - Tactile click on wishlist toggle
     - Dedicated mute/unmute audio toggle button in the header.

5. **Multi-Step Checkout & Printable Digital Invoice**:
   - Shipping contact details form with instant address validation.
   - Flexible payment gateway options: Instant UPI (Google Pay, PhonePe, Paytm QR simulation), Credit/Debit Cards, Internet Banking, and Cash on Delivery (COD).
   - Instant order creation with unique Order Reference ID (e.g. `SR-783921`).
   - Confetti shower animation on order completion.
   - Official printable digital invoice/receipt with customer details, item breakdown, tax calculation, and print button.

6. **Real-Time Consignment Order Tracker**:
   - 5-stage visual progress tracking: Order Confirmed -> Quality Inspection & Packing -> In Transit -> Out for Delivery -> Delivered.
   - Pre-loaded demo orders for immediate testing:
     - `SR-88491` (Shaik Riyaz Sovereign Automatic Watch - Out for Delivery)
     - `SR-55209` (Shaik Riyaz ProBeats Headphones & Charger - Shipped)
     - `SR-11042` (Shaik Riyaz Imperial Oud Royale - Delivered)
   - Real-time tracking of any order placed during your shopping session (stored in `localStorage`).

7. **Product Quick View Modal & Interactive Filters**:
   - High-resolution photography previews.
   - Colorway and size selectors.
   - Multi-facet sidebar filters on `products.html`: Brand, Category, Price Range Slider, Star Rating, and Custom Engraved items.
   - Grid View vs. List View switchers.

---

## 📁 File Structure

```
Shaik_Riyaz_Shopping/
├── index.html        # Homepage with hero banners, brand universe, flash deals with timer, founder pledge
├── products.html     # Comprehensive catalog with multi-facet filters, sorting, search, grid/list view
├── cart.html         # Full shopping bag page with shipping meter, coupon box, and order summary
├── checkout.html     # Multi-step checkout with address form, UPI/Card payment, and invoice generation
├── deals.html        # Daily flash deals, coupon code vault, and clearance promotions
├── about.html        # Brand story, Founder & CEO Shaik Riyaz biography, milestones, executive portraits
├── contact.html      # 24/7 customer care helpline, store locations (Hyderabad, Mumbai, Bangalore, Dubai), FAQ
├── orders.html       # Order tracking hub, live tracking lookup, past orders history
├── shopping.css      # Luxury glassmorphic styling, animations, custom scrollbars, print invoice CSS
├── shopping.js       # Complete 30+ product dataset, cart state, currency engine, audio synthesizer, tracking
├── shaik_riyaz_shopping_manager.jpg # Official In-Store Portrait of Shaik Riyaz (Shopping Manager)
├── shaik_riyaz_ceo.jpg # High-resolution portrait of Shaik Riyaz (CEO & Founder)
├── riyaz_founder.jpg   # Archival executive portrait of Shaik Riyaz
└── README.md         # Documentation & user manual
```

---

## 🚀 How to Run

1. Open `Shaik_Riyaz_Shopping/index.html` directly in any web browser (Google Chrome, Microsoft Edge, Safari, Firefox, Brave).
2. **Zero backend dependencies, npm packages, or server builds required!** 100% client-side HTML5, CSS3, and Vanilla JavaScript.
