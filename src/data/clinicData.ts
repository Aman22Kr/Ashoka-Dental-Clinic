export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  duration: string;
  startingPrice: string;
  benefits: string[];
  steps: string[];
  faqs: { question: string; answer: string }[];
}

export interface ConditionItem {
  id: string;
  slug: string;
  title: string;
  symptoms: string[];
  causes: string[];
  treatments: string[];
  urgency: 'Routine' | 'Prompt' | 'Emergency';
}

export interface TestimonialItem {
  id: string;
  author: string;
  rating: number;
  treatment: string;
  comment: string;
  location: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'treatments' | 'pricing' | 'comfort';
}

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'rct',
    slug: 'root-canal-treatment',
    title: 'Root Canal Treatment (Single-Sitting RCT)',
    shortDesc: 'Painless microscopic root canal therapy designed to relieve acute toothache and preserve your natural tooth.',
    longDesc: 'Our computer-guided rotary endodontic technique cleans, disinfects, and hermetically seals infected pulp canals in a single relaxed sitting. Utilizing digital RVG sensors and apex locators, we ensure minimal discomfort and maximum clinical precision.',
    iconName: 'ShieldAlert',
    duration: '45 - 60 Minutes',
    startingPrice: '₹3,500 / $45',
    benefits: [
      'Immediate relief from severe toothache and sensitivity',
      'Preserves your natural tooth root and jawbone structure',
      'Advanced digital apex locator for 100% canal disinfection',
      'Single-sitting completion in most non-abscess cases'
    ],
    steps: [
      'Digital 3D radiography and precise pulp evaluation',
      'Gentle computer-delivered local anaesthesia for zero pain',
      'Rotary nickel-titanium instrumentation and ultrasonic irrigation',
      'Biocompatible gutta-percha obturation and protective restoration'
    ],
    faqs: [
      {
        question: 'Is root canal treatment painful?',
        answer: 'No. With contemporary local anaesthetics and rotary instrumentation, modern root canal therapy is as comfortable as receiving a simple dental filling.'
      },
      {
        question: 'Will I need a crown after the root canal?',
        answer: 'Yes, a custom ceramic or zirconia crown is strongly recommended after RCT to restore the tooth’s structural strength and prevent accidental fractures during chewing.'
      }
    ]
  },
  {
    id: 'implants',
    slug: 'dental-implants',
    title: 'Dental Implants & All-on-4 Restorations',
    shortDesc: 'Permanent, lifelike tooth replacements anchored by medical-grade titanium and customized zirconia crowns.',
    longDesc: 'Dental implants represent the gold standard for missing teeth replacement. Using surgical computer guides and biocompatible Swiss and German titanium fixtures, we restore complete chewing ability and natural facial aesthetics.',
    iconName: 'Sparkles',
    duration: '2 - 3 Sittings',
    startingPrice: '₹22,000 / $260',
    benefits: [
      'Permanent replacement that looks, feels, and functions like a natural tooth',
      'Prevents bone resorption and sagging of facial muscles',
      'No trimming or damage to adjacent healthy teeth',
      'Lifetime warranty options with global passport certification'
    ],
    steps: [
      '3D CBCT digital scan to evaluate bone volume and nerve paths',
      'Minimally invasive computer-guided implant fixture placement',
      'Osseointegration healing period for strong bone integration',
      'Custom CAD/CAM zirconia crown placement and bite calibration'
    ],
    faqs: [
      {
        question: 'How long do dental implants last?',
        answer: 'With proper daily oral hygiene and regular 6-month checkups, high-quality titanium dental implants can comfortably last a lifetime.'
      },
      {
        question: 'Can all missing teeth be replaced in one day?',
        answer: 'Yes! For full-arch rehabilitation, we offer All-on-4 and All-on-6 protocols with immediate provisional fixed teeth on the same day.'
      }
    ]
  },
  {
    id: 'ortho',
    slug: 'orthodontics-invisalign',
    title: 'Braces & Invisible Clear Aligners',
    shortDesc: 'Discreet orthodontic correction for crowded, spaced, or misaligned teeth using cutting-edge clear aligners.',
    longDesc: 'Achieve a harmoniously aligned smile with our customized orthodontic solutions. We offer virtually invisible removable clear aligners, aesthetic ceramic brackets, and self-ligating metal braces for adults and teens.',
    iconName: 'Smile',
    duration: '6 - 18 Months',
    startingPrice: '₹28,000 / $340',
    benefits: [
      'Removable, transparent trays for unrestricted eating and brushing',
      '3D digital simulation of your entire smile transformation before starting',
      'Significantly reduced clinic visits and no painful wire pokes',
      'Corrects deep bites, crossbites, gap spaces, and severe crowding'
    ],
    steps: [
      'High-resolution iTero 3D intraoral digital impression scan',
      'Customized digital aligner treatment plan and milestone review',
      'Delivery of precision medical-grade polyurethane aligner sets',
      'Routine progress tracking and final invisible retainers'
    ],
    faqs: [
      {
        question: 'How many hours a day must I wear clear aligners?',
        answer: 'Clear aligners must be worn for 20 to 22 hours daily, removing them only when eating, drinking hot beverages, or brushing.'
      }
    ]
  },
  {
    id: 'cosmetic',
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry & Smile Design',
    shortDesc: 'Porcelain veneers, cosmetic bonding, and laser teeth whitening for an enchanting, confident smile.',
    longDesc: 'From single-tooth color correction to complete Digital Smile Design (DSD), our cosmetic procedures refine tooth proportions, correct chipped enamel, and deliver bright, camera-ready smiles.',
    iconName: 'Sun',
    duration: '1 - 2 Sittings',
    startingPrice: '₹6,500 / $80',
    benefits: [
      'Ultra-thin E-max porcelain veneers tailored to your facial contours',
      'Safe laser teeth whitening lifting stains by up to 6–8 shades',
      'Minimally invasive composite bonding for chips and gaps',
      'Long-lasting stain-resistant aesthetics'
    ],
    steps: [
      'Facial aesthetics photographic analysis and mock-up trial',
      'Minimal preparation of enamel surface',
      'In-house CAD/CAM precision milling of porcelain veneers',
      'Permanent resin adhesive bonding with bite verification'
    ],
    faqs: [
      {
        question: 'Does teeth whitening damage tooth enamel?',
        answer: 'No. Professional in-clinic whitening uses pH-balanced hydrogen peroxide gels activated by cool LED light that safely break down stains without harming enamel.'
      }
    ]
  },
  {
    id: 'crowns',
    slug: 'dental-crowns',
    title: 'Dental Crowns & Zirconia Restorations',
    shortDesc: 'High-strength monolithic zirconia and ceramic crowns crafted with computer-aided precision.',
    longDesc: 'Protect weak or fractured teeth with our durable dental crowns. Milled from multilayered monolithic zirconia and lithium disilicate, our crowns duplicate the exact translucency and strength of natural teeth.',
    iconName: 'Award',
    duration: '2 Sittings',
    startingPrice: '₹4,500 / $55',
    benefits: [
      '100% metal-free with zero black gum line discoloration',
      'Exceptional bite resistance matching natural chewing forces',
      'Biocompatible material gentle on opposing natural enamel',
      'Warranty cards up to 15 years against chipping or fracture'
    ],
    steps: [
      'Conservative tooth preparation and 3D digital scanning',
      'Temporary aesthetic crown placement for immediate comfort',
      'Sub-millimeter CAD/CAM robot milling in dental laboratory',
      'Permanent cementation and occlusion adjustment'
    ],
    faqs: [
      {
        question: 'How do I care for my dental crown?',
        answer: 'Care for a crowned tooth just like your natural teeth: brush twice daily, floss around the margin, and visit for routine bi-annual cleanings.'
      }
    ]
  },
  {
    id: 'pediatric',
    slug: 'pediatric-dentistry',
    title: 'Pediatric Dentistry (Kids Dental Care)',
    shortDesc: 'Gentle, playful, and anxiety-free dental care designed especially for infants, children, and teenagers.',
    longDesc: 'We believe childhood dental experiences should be joyful. Our pediatric specialists emphasize preventive sealants, gentle cavity restorations, habit-breaking appliances, and friendly oral hygiene education.',
    iconName: 'Heart',
    duration: '30 - 45 Minutes',
    startingPrice: '₹1,200 / $15',
    benefits: [
      'Warm, friendly environment designed to eliminate dental fear',
      'Fluoride varnish applications and pit & fissure sealants',
      'Painless tooth-colored fillings and space maintainers',
      'Habit correction for thumb-sucking and mouth-breathing'
    ],
    steps: [
      'Friendly welcome and playful chairside familiarization',
      'Gentle visual examination and dietary counseling',
      'Preventive fluoride or gentle ultrasonic cleaning',
      'Stickers, positive reinforcement, and home-care plan'
    ],
    faqs: [
      {
        question: 'At what age should my child first visit the dentist?',
        answer: 'The Indian Dental Association and AAPD recommend a child’s first dental visit when their first milk tooth erupts or by their first birthday.'
      }
    ]
  }
];

export const CLINIC_CONDITIONS: ConditionItem[] = [
  {
    id: 'toothache',
    slug: 'toothache',
    title: 'Severe Toothache & Throbbing Pain',
    symptoms: ['Constant sharp or throbbing pain', 'Sensitivity to temperature', 'Pain when biting down', 'Headache or earache'],
    causes: ['Deep dental caries reaching nerve', 'Dental pulp abscess', 'Cracked tooth syndrome', 'Failing old restoration'],
    treatments: ['Single-Sitting Root Canal Therapy', 'Digital radiography', 'Pain-relieving medication'],
    urgency: 'Emergency'
  },
  {
    id: 'cavities',
    slug: 'cavities-tooth-decay',
    title: 'Tooth Cavities & Enamel Decay',
    symptoms: ['Visible black/brown spots on teeth', 'Food getting stuck between teeth', 'Mild sensitivity to sweets'],
    causes: ['Plaque acid dissolution', 'High dietary sugar intake', 'Inadequate brushing or flossing'],
    treatments: ['Tooth-colored composite fillings', 'Fluoride treatment', 'Ceramic inlays/onlays'],
    urgency: 'Prompt'
  },
  {
    id: 'bleeding-gums',
    slug: 'bleeding-gums',
    title: 'Bleeding & Swollen Gums (Gingivitis)',
    symptoms: ['Gums bleeding during brushing', 'Red, swollen, or tender gums', 'Persistent bad breath (halitosis)'],
    causes: ['Bacterial calculus buildup below gumline', 'Hormonal fluctuations', 'Tobacco or smoking'],
    treatments: ['Ultrasonic deep scaling', 'Laser gingival therapy', 'Antimicrobial mouth rinses'],
    urgency: 'Prompt'
  },
  {
    id: 'sensitive-teeth',
    slug: 'sensitive-teeth',
    title: 'Tooth Sensitivity (Cold, Hot & Sweet)',
    symptoms: ['Brief sharp jolt of pain with ice water or hot coffee', 'Discomfort with cold winter air'],
    causes: ['Enamel wear from aggressive brushing', 'Receding gums exposing root dentin', 'Teeth grinding (bruxism)'],
    treatments: ['Desensitizing fluoride varnish', 'Composite bonding over exposed roots', 'Custom night guard'],
    urgency: 'Routine'
  },
  {
    id: 'wisdom-teeth',
    slug: 'wisdom-teeth-issues',
    title: 'Impacted Wisdom Teeth Pain',
    symptoms: ['Swelling at back of jaw', 'Difficulty opening mouth wide', 'Repeated gum inflammation (pericoronitis)'],
    causes: ['Insufficient jaw space for third molars', 'Horizontal impaction against second molar'],
    treatments: ['Minimally invasive surgical removal', 'Digital panoramic OPG X-ray', 'Antibacterial irrigation'],
    urgency: 'Prompt'
  }
];

export const PATIENT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'rev-1',
    author: 'Priya Sharma',
    rating: 5,
    treatment: 'Single-Sitting Root Canal',
    comment: 'I was extremely terrified of dentists due to a bad childhood experience. Dr. [Doctor Name] was remarkably gentle, explaining every single step. The root canal was completely painless, and I was back at work the next morning!',
    location: 'Katpadi Main Road',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Rajesh Kumar',
    rating: 5,
    treatment: 'Dental Implants',
    comment: 'Got two dental implants done at Ashoka Dental Clinic. From the 3D scan to the final zirconia crowns, the precision was astounding. Fair pricing and no hidden costs whatsoever. Highly recommended!',
    location: 'Gandhi Nagar',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Meera Devi',
    rating: 5,
    treatment: 'Invisible Clear Aligners',
    comment: 'My smile transformation with clear aligners was smooth and completed in just 8 months. Clean clinic environment, prompt appointment timing, and courteous staff.',
    location: 'Suthanthira Ponvizha Nagar',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Vikram Singh',
    rating: 5,
    treatment: 'Crown & Bridge Restoration',
    comment: 'The team accommodated my urgent visit immediately when my old tooth cracked. The replacement monolithic zirconia crown matches my natural teeth perfectly. Genuine hospital-standard care.',
    location: 'Sathuvachari',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Sunita Reddy',
    rating: 5,
    treatment: 'Pediatric Dental Care',
    comment: 'Brought my 6-year-old daughter for cavity treatment. The doctor was so patient and friendly with her that she didn’t cry for a single second. Very thankful to Ashoka Dental Clinic!',
    location: 'Bagayam',
    verified: true
  }
];

export const CLINIC_FAQS: FaqItem[] = [
  {
    question: 'How quickly can I get an appointment at Ashoka Dental Clinic?',
    answer: 'We provide same-day appointments for urgent cases and dental emergencies. For routine consultations and dental checkups, you can conveniently book 24 to 48 hours in advance via WhatsApp or phone.',
    category: 'general'
  },
  {
    question: 'Do you provide customised treatment plans for complex cases?',
    answer: 'Absolutely. Using high-definition intraoral 3D scanners and digital radiography, we prepare a transparent, step-by-step digital roadmap with itemized costs before commencing any clinical procedure.',
    category: 'treatments'
  },
  {
    question: 'What precautions do you take for painless dentistry?',
    answer: 'We utilize computerized topical numbing gels, ultra-fine gauge micro-needles, and vibration techniques so you barely feel local anaesthesia. We also maintain an unhurried pace tailored to anxious patients.',
    category: 'comfort'
  },
  {
    question: 'What payment and 0% EMI options are available?',
    answer: 'We accept UPI (GPay, PhonePe, Paytm), all major credit/debit cards, and net banking. For high-value procedures like implants and aligners, we offer 0% interest EMI options through leading finance partners.',
    category: 'pricing'
  },
  {
    question: 'Are dental X-rays safe for children and pregnant women?',
    answer: 'Yes. Our clinic is equipped with advanced digital RVG sensors that reduce radiation exposure by up to 90% compared to traditional dental film. We also use protective lead aprons and thyroid collars for safety.',
    category: 'general'
  },
  {
    question: 'How long do monolithic zirconia crowns last?',
    answer: 'Monolithic zirconia is virtually unbreakable under human chewing forces. With regular brushing and bi-annual dental cleanings, our crowns typically last 15 to 25+ years and come with warranty cards.',
    category: 'treatments'
  }
];
