export interface CostComparisonItem {
  procedure: string;
  indiaPriceINR: string;
  indiaPriceUSD: number;
  usaPriceUSD: number;
  ukPriceGBP: number;
  australiaPriceAUD: number;
  uaePriceAED: number;
  savingsPercent: number;
}

export interface TourismPackage {
  id: string;
  title: string;
  badge: string;
  duration: string;
  idealFor: string;
  includedProcedures: string[];
  conciergePerks: string[];
  startingPriceUSD: number;
  startingPriceINR: string;
}

export interface SightseeingSpot {
  id: string;
  name: string;
  distanceFromClinic: string;
  description: string;
  highlight: string;
  tag: 'Heritage' | 'Spiritual' | 'Nature' | 'Shopping';
  travelTime: string;
}

export const TOURISM_COST_COMPARISONS: CostComparisonItem[] = [
  {
    procedure: 'Single Titanium Dental Implant (with Zirconia Crown)',
    indiaPriceINR: '₹28,000',
    indiaPriceUSD: 335,
    usaPriceUSD: 2800,
    ukPriceGBP: 2100,
    australiaPriceAUD: 3500,
    uaePriceAED: 8500,
    savingsPercent: 78,
  },
  {
    procedure: 'All-on-4 Full Arch Dental Implants (per jaw)',
    indiaPriceINR: '₹1,65,000',
    indiaPriceUSD: 1980,
    usaPriceUSD: 14500,
    ukPriceGBP: 11000,
    australiaPriceAUD: 18000,
    uaePriceAED: 42000,
    savingsPercent: 76,
  },
  {
    procedure: 'Microscopic Single-Sitting Root Canal + Crown',
    indiaPriceINR: '₹6,500',
    indiaPriceUSD: 78,
    usaPriceUSD: 1150,
    ukPriceGBP: 850,
    australiaPriceAUD: 1400,
    uaePriceAED: 3200,
    savingsPercent: 82,
  },
  {
    procedure: 'Clear Invisible Aligners (Complete Course)',
    indiaPriceINR: '₹45,000',
    indiaPriceUSD: 540,
    usaPriceUSD: 4500,
    ukPriceGBP: 3400,
    australiaPriceAUD: 5200,
    uaePriceAED: 13500,
    savingsPercent: 74,
  },
  {
    procedure: 'Porcelain E-Max Veneers (Set of 6 Smile Makeover)',
    indiaPriceINR: '₹48,000',
    indiaPriceUSD: 575,
    usaPriceUSD: 5400,
    ukPriceGBP: 3900,
    australiaPriceAUD: 6200,
    uaePriceAED: 16000,
    savingsPercent: 81,
  },
  {
    procedure: 'In-Office Laser Teeth Whitening (Both Arches)',
    indiaPriceINR: '₹7,000',
    indiaPriceUSD: 84,
    usaPriceUSD: 650,
    ukPriceGBP: 480,
    australiaPriceAUD: 750,
    uaePriceAED: 2100,
    savingsPercent: 79,
  },
];

export const TOURISM_PACKAGES: TourismPackage[] = [
  {
    id: 'fast-track-smile',
    title: '3-Day Rapid Smile Makeover',
    badge: 'Express Package',
    duration: '3 Days / 2 Nights',
    idealFor: 'Visiting tourists & professionals seeking rapid aesthetic transformations',
    includedProcedures: [
      'Digital 3D Smile Design & Photographic Analysis',
      'Ultrasonic Air-Flow Polishing & Scaling',
      'Laser In-Office Teeth Whitening (up to 8 shades lighter)',
      'Direct Composite Aesthetic Bonding or Contouring',
      'Customized Take-Home Whitening Maintenance Kit'
    ],
    conciergePerks: [
      'Complimentary airport pickup from Chennai (MAA) or Bengaluru (BLR)',
      'Pre-arranged luxury hotel stay assistance near Katpadi / Gandhi Nagar',
      'Dedicated English & multi-lingual patient care concierge',
      'Evening heritage stroll around historic Vellore Fort'
    ],
    startingPriceUSD: 299,
    startingPriceINR: '₹24,900',
  },
  {
    id: 'implant-rehab',
    title: '5-Day Restorative Implant & Crown Vacation',
    badge: 'Most Popular',
    duration: '5 Days / 4 Nights',
    idealFor: 'Patients replacing missing teeth or broken dental bridges with Swiss/German titanium fixtures',
    includedProcedures: [
      'High-Resolution 3D CBCT Bone Scan & Virtual Surgical Guide',
      'Titanium Dental Implant Placement with Immediate Provisional Crown',
      'CAD/CAM Monolithic Zirconia Permanent Restorations',
      'Digital Bite Occlusal Balancing & Comprehensive Warranty Certificate'
    ],
    conciergePerks: [
      'Private chauffeured airport transfers',
      'Priority morning clinical slots with zero wait times',
      'Curated relaxing excursion to Sripuram Golden Temple',
      'Complimentary local 5G SIM card with international calling assistance'
    ],
    startingPriceUSD: 599,
    startingPriceINR: '₹49,500',
  },
  {
    id: 'full-mouth-rehab',
    title: '7-Day Comprehensive Full Mouth Rehabilitation',
    badge: 'Complete Transformation',
    duration: '7 Days / 6 Nights',
    idealFor: 'Complex multi-unit dental restorations, All-on-4 implants, and complete bite correction',
    includedProcedures: [
      'Full Digital Arch Intraoral Scanning & Joint Analysis',
      'All-on-4 / All-on-6 Fixed Immediate Restorations or Multiple Implants',
      'Crown & Bridge Aesthetic Integration across upper & lower arches',
      'Full Medical Dossier & Global Lifetime Implant Warranty Passport'
    ],
    conciergePerks: [
      'Executive airport chauffeur & local transport concierge',
      'Dedicated personal liaison for translation, pharmacy & dietary needs',
      'Day trip to Yelagiri Hills retreat during lab processing days',
      'Direct WhatsApp helpline with Dr. [Doctor Name] post-treatment'
    ],
    startingPriceUSD: 1850,
    startingPriceINR: '₹1,55,000',
  },
];

export const SIGHTSEEING_SPOTS: SightseeingSpot[] = [
  {
    id: 'vellore-fort',
    name: 'Vellore Fort & Jalakandeswarar Temple',
    distanceFromClinic: '4.2 km',
    travelTime: '10 mins drive',
    tag: 'Heritage',
    description: 'A 16th-century granite fort surrounded by a wide moat, boasting intricate Vijayanagara stone carvings and monumental ramparts.',
    highlight: 'Majestic Vijayanagara monolith pillars & military architecture',
  },
  {
    id: 'sripuram-temple',
    name: 'Sripuram Golden Temple (Malaikodi)',
    distanceFromClinic: '12 km',
    travelTime: '20 mins drive',
    tag: 'Spiritual',
    description: 'A spiritual wonder covered in over 1,500 kg of pure gold leaf, nestled inside a green star-shaped path with serene gardens.',
    highlight: 'Gleaming 24-karat gold sanctum & tranquil walking meditation',
  },
  {
    id: 'yelagiri-hills',
    name: 'Yelagiri Hills Hill Station',
    distanceFromClinic: '82 km',
    travelTime: '90 mins scenic drive',
    tag: 'Nature',
    description: 'A picturesque hill retreat surrounded by rose gardens, orchards, and cool mountain breezes, perfect for a day outing between dental appointments.',
    highlight: 'Punganoor Lake, mountain viewpoints & gentle nature trails',
  },
  {
    id: 'amirthi-forest',
    name: 'Amirthi Zoological Forest Sanctuary',
    distanceFromClinic: '24 km',
    travelTime: '35 mins drive',
    tag: 'Nature',
    description: 'A lush forest sanctuary with seasonal waterfalls, birdwatching pavilions, and shaded woodland nature trails.',
    highlight: 'Cascading waterfalls and exotic botanical canopy',
  },
  {
    id: 'kanchipuram-silk',
    name: 'Kanchipuram Silk & Temple City Excursion',
    distanceFromClinic: '68 km',
    travelTime: '70 mins drive',
    tag: 'Shopping',
    description: 'World-famous city of 1,000 temples and traditional hand-woven mulberry silk sarees, ideal for cultural souvenir shopping.',
    highlight: 'Authentic handloom silk weavers & ancient Pallava architecture',
  },
];

export const CONCIERGE_STEPS = [
  {
    step: '1',
    title: 'Free Virtual Consultation & Estimate',
    desc: 'Send your dental X-rays, photos, or treatment summary via WhatsApp or email. Receive a transparent quote and customized travel schedule within 24 hours.',
  },
  {
    step: '2',
    title: 'Travel & Accommodation Booking',
    desc: 'Our patient coordinator coordinates airport pickups from Chennai or Bangalore and reserves discounted boutique or star hotels close to the clinic.',
  },
  {
    step: '3',
    title: 'Comfortable In-Clinic Care',
    desc: 'Experience painless treatment with state-of-the-art digital technology in an unhurried, comfortable clinical suite.',
  },
  {
    step: '4',
    title: 'Sightseeing & Post-Op Aftercare',
    desc: 'Enjoy local cultural sights during rest days. Fly home with a radiant smile, digital treatment records, and 12-month follow-up support.',
  },
];
