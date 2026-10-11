export interface BlogGuideItem {
  id: string;
  slug: string;
  title: string;
  category: 'Root Canal' | 'Dental Implants' | 'Braces & Aligners' | 'Cosmetic Dentistry' | 'Kids Dental Care' | 'Dental Tourism' | 'Oral Hygiene';
  readTime: string;
  publishedDate: string;
  summary: string;
  author: string;
  sections: {
    heading: string;
    content: string;
    bulletPoints?: string[];
  }[];
  takeaways: string[];
}

export interface AskDentistQuestion {
  id: string;
  patientQuestion: string;
  patientLocation: string;
  askedDate: string;
  category: string;
  doctorAnswer: string;
  answeredBy: string;
  helpfulCount: number;
}

export const BLOG_GUIDES: BlogGuideItem[] = [
  {
    id: 'guide-1',
    slug: 'first-dental-visit-expectations',
    title: 'First Dental Visit Expectations: A Calm, Step-by-Step Guide',
    category: 'Oral Hygiene',
    readTime: '4 min read',
    publishedDate: 'October 2026',
    author: 'Dr. [Doctor Name], Clinical Director',
    summary: 'If you have felt nervous about visiting a dentist, this comprehensive walkthrough explains what actually happens during your first comprehensive exam and how painless modern techniques make the visit stress-free.',
    sections: [
      {
        heading: '1. Welcome & Digital Registration',
        content: 'When you arrive at Ashoka Dental Clinic, you will be warmly welcomed into our climate-controlled reception. There are no crowded waiting rooms. We review your medical history, any sensitivities you have experienced, and your primary dental goals.',
        bulletPoints: [
          'Confidential digital record creation',
          'Discussion of dental anxieties or previous difficult experiences',
          'Identification of high-priority concerns (pain, aesthetic desires, chewing difficulty)'
        ]
      },
      {
        heading: '2. High-Definition 3D Radiographs & Intraoral Imaging',
        content: 'Before recommending any procedure, Dr. [Doctor Name] performs a 100% painless visual scan using an intraoral wand camera and digital low-radiation RVG X-rays. You will be able to see your teeth on our chairside screen in crisp high definition.',
      },
      {
        heading: '3. Transparent Discussion & Tailored Treatment Roadmap',
        content: 'We adhere to a zero-pressure philosophy. Dr. [Doctor Name] will explain whether any intervention is needed, the alternatives available, the timeline, and transparent itemized costs before anything begins.',
      }
    ],
    takeaways: [
      'Modern dental consultations are gentle, conversational, and completely painless.',
      'Chairside digital cameras allow you to see exactly what the doctor sees.',
      'You are always in total control of your appointment pace.'
    ]
  },
  {
    id: 'guide-2',
    slug: 'single-sitting-rct-explained',
    title: 'Single-Sitting Root Canal vs Multi-Visit: Is It Truly Painless?',
    category: 'Root Canal',
    readTime: '5 min read',
    publishedDate: 'September 2026',
    author: 'Dr. [Doctor Name], Endodontic Specialist',
    summary: 'Decades ago, root canals required 3 to 4 appointments with uncomfortable dressings. Today, computer-driven rotary instruments and digital apex locators enable complete treatment in under 60 minutes.',
    sections: [
      {
        heading: 'How Single-Sitting Root Canal Works',
        content: 'Instead of manual files, we use motorized nickel-titanium flexible rotary instruments that conform smoothly to natural root curves. Combined with ultrasonic irrigation, infected pulp tissue is thoroughly sterilized in one appointment.',
        bulletPoints: [
          'Digital apex locator guarantees millimeter-accurate canal measurement',
          'Ultrasonic cavitation eliminates 99.8% of bacterial biofilms',
          'Biocompatible warm gutta-percha seals the canal against reinfection'
        ]
      },
      {
        heading: 'Is It Suitable for Every Tooth?',
        content: 'Over 85% of acute pulpitis and decayed teeth are ideal candidates for single-sitting root canals. Only teeth with extensive periapical swelling or active exudate require a two-visit approach with intermediate antibacterial medication.',
      }
    ],
    takeaways: [
      'Single-sitting RCT saves time, avoids repeated injections, and stops pain immediately.',
      'Placing a protective zirconia or ceramic crown afterwards is essential to prevent tooth fracture.'
    ]
  },
  {
    id: 'guide-3',
    slug: 'dental-implants-cost-and-longevity',
    title: 'How Long Do Dental Implants Last? A Real-World Durability Breakdown',
    category: 'Dental Implants',
    readTime: '6 min read',
    publishedDate: 'August 2026',
    author: 'Dr. [Doctor Name], Implantologist',
    summary: 'Unlike removable dentures or dental bridges that need replacement every 5 to 10 years, titanium dental implants chemically fuse with your jawbone to offer lifetime permanence.',
    sections: [
      {
        heading: 'The Magic of Osseointegration',
        content: 'Titanium is completely biocompatible. Over 8 to 12 weeks following placement, your natural bone cells form a direct mechanical bond with the microscopic textured surface of the implant, creating a solid anchor stronger than natural tooth roots.',
      },
      {
        heading: 'Key Factors for Lifetime Success',
        content: 'Clinical studies show a 98.2% 20-year survival rate for dental implants when patients practice diligent home oral hygiene and attend 6-month preventive checkups.',
        bulletPoints: [
          'Daily flossing around the implant collar',
          'Avoiding smoking during the initial healing phase',
          'High-precision CAD/CAM zirconia crown fit to prevent plaque traps'
        ]
      }
    ],
    takeaways: [
      'Dental implants prevent facial bone loss that causes premature aging.',
      'They do not require damaging adjacent healthy teeth like traditional bridges.'
    ]
  },
  {
    id: 'guide-4',
    slug: 'clear-aligners-vs-traditional-braces',
    title: 'Clear Invisible Aligners vs Metal Braces: Which One Fits Your Lifestyle?',
    category: 'Braces & Aligners',
    readTime: '5 min read',
    publishedDate: 'July 2026',
    author: 'Dr. [Doctor Name], Orthodontic Team',
    summary: 'Compare treatment timelines, comfort levels, dietary freedom, and aesthetic factors between removable clear aligners and traditional orthodontic brackets.',
    sections: [
      {
        heading: 'Aesthetic & Daily Lifestyle Differences',
        content: 'Clear aligners are crafted from transparent medical-grade polymers, making them virtually invisible from speaking distance. Because they are removable, you can enjoy all your favorite foods without restrictions.',
        bulletPoints: [
          'Aligners: Removable for meals, photos, and athletic activities',
          'Braces: Fixed in place, requiring special flossers and dietary care',
          'Aligners: Virtual 3D simulation allows you to see the finished smile before starting'
        ]
      }
    ],
    takeaways: [
      'Aligners require 20-22 hours of daily wear for optimal results.',
      'Routine clinic visits are reduced by up to 50% with digital aligner programs.'
    ]
  },
  {
    id: 'guide-5',
    slug: 'dental-tourism-india-planning-guide',
    title: 'The Ultimate Dental Tourism Checklist: Planning Your Trip to India',
    category: 'Dental Tourism',
    readTime: '7 min read',
    publishedDate: 'June 2026',
    author: 'Ashoka Dental Clinic International Patient Concierge',
    summary: 'Everything international and interstate travelers need to know about flying to South India for world-class dental treatments at 70% to 80% lower costs.',
    sections: [
      {
        heading: 'How to Prepare Before Traveling',
        content: 'Start by sending your panoramic OPG or CBCT scan for a preliminary virtual consultation. Dr. [Doctor Name] will provide a precise clinical proposal with exact visit schedules so you can book flights with confidence.',
        bulletPoints: [
          'Nearest international airports: Chennai (MAA) ~2 hours drive; Bengaluru (BLR) ~3.5 hours drive',
          'Complimentary airport pickup arranged by our clinic concierge',
          'Special corporate tariff partnerships with top hotels in Katpadi / Vellore'
        ]
      }
    ],
    takeaways: [
      'Save thousands of dollars while combining treatment with South Indian cultural tourism.',
      'All materials used are FDA and CE certified with global warranty passports.'
    ]
  }
];

export const ASK_DENTIST_QUESTIONS: AskDentistQuestion[] = [
  {
    id: 'q-1',
    patientQuestion: 'Is it better to pull out a painful tooth or get a root canal treatment done?',
    patientLocation: 'Katpadi',
    askedDate: '2 days ago',
    category: 'Root Canal',
    doctorAnswer: 'Saving your natural tooth is always the superior medical choice whenever possible. A natural tooth root stimulates your jawbone, preserves facial contours, and maintains natural biting force. A modern single-sitting root canal removes only the inflamed nerve while preserving the healthy outer tooth, making it far more conservative and cost-effective than an extraction followed by an implant or bridge.',
    answeredBy: 'Dr. [Doctor Name]',
    helpfulCount: 42,
  },
  {
    id: 'q-2',
    patientQuestion: 'Can I get a dental implant placed immediately on the day of tooth extraction?',
    patientLocation: 'International Patient (UK)',
    askedDate: '5 days ago',
    category: 'Dental Implants',
    doctorAnswer: 'Yes, this is known as Immediate Implant Placement. If your existing bone density is adequate and there is no active acute purulent infection at the site, Dr. [Doctor Name] can extract the compromised tooth and place the titanium implant fixture in the exact same sitting. In aesthetic front areas, we often place an immediate temporary tooth as well.',
    answeredBy: 'Dr. [Doctor Name]',
    helpfulCount: 38,
  },
  {
    id: 'q-3',
    patientQuestion: 'My gums bleed occasionally when I brush my teeth. Should I be worried?',
    patientLocation: 'Gandhi Nagar',
    askedDate: '1 week ago',
    category: 'Oral Hygiene',
    doctorAnswer: 'Bleeding gums are the earliest warning sign of Gingivitis—an inflammation caused by bacterial plaque and hardened tartar (calculus) along the gum margin. Healthy gums never bleed. The great news is that gingivitis is 100% reversible with an ultrasonic scaling (cleaning) and gentle brushing habits. If ignored, it can progress to periodontitis and bone loss.',
    answeredBy: 'Dr. [Doctor Name]',
    helpfulCount: 57,
  },
  {
    id: 'q-4',
    patientQuestion: 'How many days do I need to stay in Vellore for a complete dental makeover?',
    patientLocation: 'Patient from Dubai (UAE)',
    askedDate: '2 weeks ago',
    category: 'Dental Tourism',
    doctorAnswer: 'For veneer smile makeovers or single implants with crowns, a 3 to 5 day trip is usually sufficient. During the 1st day, we complete 3D digital scans and preparations; on days 2 and 3, our digital lab mills your precision zirconia or E-max restorations while you enjoy local heritage sightseeing; on day 4 or 5, we permanently bond your restorations and balance your bite.',
    answeredBy: 'Dr. [Doctor Name]',
    helpfulCount: 64,
  },
  {
    id: 'q-5',
    patientQuestion: 'Are invisible aligners as effective as traditional metal braces for adults?',
    patientLocation: 'Thorapadi',
    askedDate: '3 weeks ago',
    category: 'Braces & Aligners',
    doctorAnswer: 'Modern clear aligners are extraordinarily effective for over 90% of orthodontic malocclusions including gap closures, crowding, rotated teeth, and deep bites. With computerized force prediction, aligners move teeth with gentle, continuous micro-forces that are often more comfortable than manual wire tightening.',
    answeredBy: 'Dr. [Doctor Name]',
    helpfulCount: 31,
  }
];
