export interface CareInstructionGuide {
  id: string;
  title: string;
  treatmentName: string;
  iconName: string;
  preOpAdvice: string[];
  postOpAdvice: {
    immediateFirst24Hours: string[];
    days2To7: string[];
    whatToAvoid: string[];
    whenToCallUs: string[];
  };
}

export interface SterilizationProtocolItem {
  stepNumber: number;
  title: string;
  description: string;
  equipment: string;
  standard: string;
}

export interface FinancingPlan {
  id: string;
  title: string;
  partner: string;
  interestRate: string;
  tenure: string;
  downPayment: string;
  benefits: string[];
}

export const CARE_INSTRUCTION_GUIDES: CareInstructionGuide[] = [
  {
    id: 'care-rct',
    title: 'Root Canal Treatment Aftercare Guide',
    treatmentName: 'Root Canal Therapy',
    iconName: 'ShieldAlert',
    preOpAdvice: [
      'Eat a nutritious meal before your appointment, as local anaesthesia will keep your lips and cheeks numb for 2 to 3 hours.',
      'Take any regularly prescribed daily medications as usual unless specifically instructed otherwise.',
      'Wear comfortable, loose-fitting clothing to remain relaxed in the dental chair.'
    ],
    postOpAdvice: {
      immediateFirst24Hours: [
        'Avoid chewing, biting, or drinking hot beverages until local numbness wears off completely to prevent accidental cheek or lip bites.',
        'Take prescribed anti-inflammatory pain medication promptly as advised by Dr. [Doctor Name].',
        'Mild tenderness upon tapping or biting is normal for 48 hours as the surrounding ligament heals.'
      ],
      days2To7: [
        'Brush and floss gently around the treated tooth without aggressive pulling on the temporary filling.',
        'Chew primarily on the opposite side of your mouth until your permanent crown is fabricated and bonded.',
        'Warm salt water rinses (1/2 teaspoon salt in a glass of warm water) 3 times daily soothe surrounding gums.'
      ],
      whatToAvoid: [
        'Do NOT chew sticky candies, hard nuts, ice cubes, or crusty bread on the treated tooth before crown placement.',
        'Do NOT pick at the temporary cement filling with toothpicks or fingers.'
      ],
      whenToCallUs: [
        'Severe throbbing pain not relieved by medication after 48 hours.',
        'Visible facial swelling or temporary restoration coming completely loose.'
      ]
    }
  },
  {
    id: 'care-implant',
    title: 'Dental Implant Surgery Aftercare Guide',
    treatmentName: 'Titanium Dental Implants',
    iconName: 'Sparkles',
    preOpAdvice: [
      'Maintain diligent oral hygiene: brush and use antibacterial chlorhexidine mouth rinse the morning of surgery.',
      'Inform Dr. [Doctor Name] of any blood thinners, bisphosphonates, or diabetic medications in advance.',
      'Arrange for a companion or clinic concierge transport if you feel anxious.'
    ],
    postOpAdvice: {
      immediateFirst24Hours: [
        'Keep firm, gentle bite pressure on the sterile gauze pack for 45 to 60 minutes after leaving the clinic.',
        'Apply an ice pack to the outside of your cheek in intervals of 15 minutes on / 15 minutes off to minimize swelling.',
        'Eat cool, soft foods such as smoothies, yogurt, tender khichdi, or mild purees. Drink plenty of water without using a straw.'
      ],
      days2To7: [
        'Begin gentle warm salt water rinses starting 24 hours post-procedure.',
        'Do not disturb the surgical site with your tongue, fingers, or toothbrush.',
        'Take all prescribed antibiotics and healing supplements exactly according to instructions.'
      ],
      whatToAvoid: [
        'Strictly NO smoking or tobacco consumption for at least 7 to 10 days, as nicotine severely impedes bone healing.',
        'Avoid strenuous gym workouts, heavy lifting, or bending over for the first 3 days.'
      ],
      whenToCallUs: [
        'Persistent bright red bleeding that does not stop with fresh gauze pressure.',
        'High fever or worsening throbbing after day 4.'
      ]
    }
  },
  {
    id: 'care-extraction',
    title: 'Tooth Extraction & Oral Surgery Care',
    treatmentName: 'Tooth Extraction / Wisdom Tooth Removal',
    iconName: 'Shield',
    preOpAdvice: [
      'Have a light meal prior to procedure and take any prescribed premedication.',
      'Notify the clinic if you have a cold, cough, or sinus infection on the day of surgery.'
    ],
    postOpAdvice: {
      immediateFirst24Hours: [
        'Do NOT spit, rinse vigorously, or drink through a straw; sucking pressure dislodges the crucial healing blood clot (leading to dry socket).',
        'Keep your head elevated on an extra pillow while resting to reduce blood pressure in the jaw.',
        'Stick to cool or lukewarm soft foods like ice cream, curd rice, soup, and milkshakes.'
      ],
      days2To7: [
        'Rinse gently with warm salt water after every meal to keep the socket clean.',
        'Gradually transition to normal soft chewing foods as jaw stiffness subsides.'
      ],
      whatToAvoid: [
        'No hot or spicy foods, carbonated sodas, or hard crunchy chips.',
        'No vigorous exercise or physical exertion for 48 hours.'
      ],
      whenToCallUs: [
        'Intense shooting pain radiating to the ear 3 to 4 days post-extraction (sign of dry socket).',
        'Inability to open mouth past one finger width after 5 days.'
      ]
    }
  },
  {
    id: 'care-aligners',
    title: 'Clear Invisible Aligners User Guidelines',
    treatmentName: 'Orthodontic Clear Aligners',
    iconName: 'Smile',
    preOpAdvice: [
      'Ensure complete dental cleaning and cavity fillings are finished before starting aligner sets.',
      'Download your customized digital smile progression schedule.'
    ],
    postOpAdvice: {
      immediateFirst24Hours: [
        'Wear your new aligner trays for at least 22 hours each day, removing them only for meals and brushing.',
        'Use aligner chewies for 5 minutes when inserting a new set to ensure full seating onto teeth.'
      ],
      days2To7: [
        'Clean aligners twice daily with a soft toothbrush and cool running water (never hot water).',
        'Store aligners strictly in their protective magnetic case whenever not in your mouth.'
      ],
      whatToAvoid: [
        'Never drink hot tea, coffee, or turmeric-rich soups with aligners on to prevent heat warping or yellow staining.',
        'Never wrap aligners in paper napkins, where they can be accidentally thrown away!'
      ],
      whenToCallUs: [
        'A lost or broken aligner tray, or an attachment button coming loose from a tooth.'
      ]
    }
  }
];

export const STERILIZATION_PROTOCOLS: SterilizationProtocolItem[] = [
  {
    stepNumber: 1,
    title: 'Pre-Soak & Ultrasonic Enzymatic Decontamination',
    description: 'All surgical instruments undergo automated ultrasonic cavitation bath with medical-grade multi-enzymatic detergents to dissolve biological residues at microscopic levels.',
    equipment: 'Digital Multi-Frequency Ultrasonic Cleaner',
    standard: 'Hospital Grade Standard',
  },
  {
    stepNumber: 2,
    title: 'High-Purity Purified Water Rinse & Inspection',
    description: 'Instruments are rinsed thoroughly with reverse-osmosis demineralized water and examined under high-magnification optical lamps for pristine clean surfaces.',
    equipment: 'Reverse-Osmosis Deionization Filtration',
    standard: 'Zero Mineral Residue',
  },
  {
    stepNumber: 3,
    title: 'Hermetic Medical Pouch Packaging & Heat Sealing',
    description: 'Every tool set is sealed into single-use medical grade pouches equipped with chemical dual-indicator strips that turn color only when full sterilization is achieved.',
    equipment: 'Microprocessor Continuous Medical Heat Sealer',
    standard: 'ISO 11607 Packaging Standards',
  },
  {
    stepNumber: 4,
    title: 'Class-B Vacuum Fractional Autoclaving (134°C)',
    description: 'Pouches undergo high-pressure fractional vacuum steam sterilization at 134°C (273°F) and 2.2 bar pressure, completely eliminating all bacterial spores, fungi, and viruses.',
    equipment: 'European Standard Class-B Vacuum Autoclave',
    standard: 'EN 13060 European Safety Standard',
  },
  {
    stepNumber: 5,
    title: 'Ultraviolet (UV-C) Germicidal Sterile Storage',
    description: 'Sterilized pouches are transferred without contact into germicidal UV-C storage cabinets until opened right in front of the patient at chairside.',
    equipment: 'UV-C Micro-Filter Storage Cabinets',
    standard: 'Continuous Active Disinfection',
  },
  {
    stepNumber: 6,
    title: 'Clinical Operatory Surface Barrier Protection',
    description: 'All operatory surfaces, light handles, dental chair controls, and digital sensor cables are disinfected with hospital-grade virucidal wipes and wrapped in disposable barriers.',
    equipment: 'Non-Alcohol Virucidal Wipes & Disposable Sleeves',
    standard: 'Single-Use Between Every Patient',
  },
  {
    stepNumber: 7,
    title: 'Dental Unit Waterline (DUWL) Purified Filtration',
    description: 'Chairside handpiece spray lines are flushed with bottled distilled water infused with microbial sanitizers and filtered through 0.2-micron in-line filters.',
    equipment: 'Independent Closed Bottle Waterline System',
    standard: 'Drinking-Water Safe Potability',
  },
];

export const FINANCING_PLANS: FinancingPlan[] = [
  {
    id: 'plan-0-emi',
    title: '0% Interest No-Cost EMI Plan',
    partner: 'Bajaj Finserv, Pine Labs & HDFC Health',
    interestRate: '0% Interest',
    tenure: '3, 6, 9 or 12 Months',
    downPayment: 'Zero or Minimal Down Payment',
    benefits: [
      'Instant digital paperless approval within 10 minutes at clinic desk',
      'No hidden processing or cancellation surcharges',
      'Covers Implants, Root Canals, Aligners, and Crowns'
    ]
  },
  {
    id: 'plan-cc-emi',
    title: 'Credit Card Easy EMI Conversion',
    partner: 'All Major Indian & International Banks (Visa, Mastercard, Amex)',
    interestRate: 'Subsidized Bank Rates / Special Offers',
    tenure: '3 to 24 Months Flexible',
    downPayment: 'Zero Down Payment',
    benefits: [
      'Instant swipe conversion at our clinic card terminal',
      'Retain cash flow while starting urgent treatment immediately',
      'Earn reward points on your preferred credit card'
    ]
  },
  {
    id: 'plan-corporate',
    title: 'Corporate & Insurance Reimbursement Support',
    partner: 'Corporate Ties & Cashless Insurance TPA Panels',
    interestRate: 'Direct Reimbursement',
    tenure: 'As per corporate claim',
    downPayment: 'Itemized Invoices Provided',
    benefits: [
      'Comprehensive medical certificate and treatment breakdown for corporate claims',
      'Pre-authorization assistance for hospital dental trauma policies',
      'Full GST invoices and clinical diagnostic documentation'
    ]
  }
];

export const NEW_PATIENT_CHECKLIST = [
  {
    title: 'What to Bring to Your First Visit',
    items: [
      'Any previous dental X-rays, OPG scans, or medical reports (if available)',
      'List of current routine medications or known medical allergies',
      'Government Photo ID / Insurance card for digital registration',
      'List of questions or concerns you would like Dr. [Doctor Name] to answer'
    ]
  },
  {
    title: 'What to Expect in Our Clinic',
    items: [
      'Zero crowded wait times: appointments are scheduled with comfortable buffer periods',
      'Calm, soothing background music and climate-controlled clinical suites',
      'A thorough, unhurried 30-minute clinical examination and 3D digital imaging',
      'A printed or digital itemized roadmap with complete cost clarity before treatment'
    ]
  }
];
