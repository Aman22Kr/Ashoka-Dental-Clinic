import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Calendar, 
  ChevronRight, 
  Smile, 
  Search, 
  Filter,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { CLINIC_SERVICES, ServiceItem } from '../data/clinicData';
import { useClinicConfig } from '../context/ClinicConfigContext';
import { SupportedLanguage, TRANSLATIONS } from '../data/translations';
import { getTranslatedClinicServices } from '../data/translatedData';

interface AshokaTreatmentsPageProps {
  currentLanguage: SupportedLanguage;
  initialTreatmentSlug?: string;
  onNavigate: (path: string) => void;
  onOpenBooking: (serviceSlug?: string) => void;
}

export const AshokaTreatmentsPage: React.FC<AshokaTreatmentsPageProps> = ({
  currentLanguage,
  initialTreatmentSlug,
  onNavigate,
  onOpenBooking,
}) => {
  const { config } = useClinicConfig();
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const allServices = getTranslatedClinicServices(currentLanguage);

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedService, setSelectedService] = useState<ServiceItem>(() => {
    if (initialTreatmentSlug) {
      const match = allServices.find(s => s.slug === initialTreatmentSlug);
      if (match) return match;
    }
    return allServices[0];
  });

  const categories = [
    { id: 'all', label: t.viewAllServices || 'All Treatments' },
    { id: 'implants', label: 'Implants & Surgery' },
    { id: 'root-canal', label: 'Root Canal & Restorative' },
    { id: 'ortho', label: 'Braces & Clear Aligners' },
    { id: 'cosmetic', label: 'Cosmetic & Whitening' },
    { id: 'pediatric', label: 'Kids & Preventive' },
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeCategory === 'all') return matchesSearch;
    if (activeCategory === 'implants') return matchesSearch && (service.id === 'implants');
    if (activeCategory === 'root-canal') return matchesSearch && (service.id === 'rct' || service.id === 'crowns');
    if (activeCategory === 'ortho') return matchesSearch && (service.id === 'ortho');
    if (activeCategory === 'cosmetic') return matchesSearch && (service.id === 'cosmetic');
    if (activeCategory === 'pediatric') return matchesSearch && (service.id === 'pediatric');
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fafcfb] text-[#173e3a]">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#edf6f4] via-[#f4f9f7] to-[#fafcfb] py-14 px-4 sm:px-6 border-b border-[#d8e1dd]/70 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/90 border border-teal-200/70 text-teal-800 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Full Clinical Treatment Directory</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-extrabold text-[#173e3a] tracking-tight leading-tight">
              Gentle, Evidence-Based Treatments Planned Around Your Comfort.
            </h1>
            
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore our complete spectrum of multi-speciality dental treatments. From single-sitting root canals and Swiss-grade dental implants to invisible aligners, every treatment is explained with itemized transparency before any work begins.
            </p>

            {/* Quick search and stats */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search treatments (e.g., Root Canal, Implants, Aligners)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#d8e1dd] bg-white text-xs sm:text-sm focus:outline-hidden focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all shadow-xs"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="bg-[#173e3a] hover:bg-teal-900 text-white font-medium px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-teal-300" />
                  <span>Book Evaluation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Interactive Explorer */}
      <section className="py-12 px-4 sm:px-6 max-w-[1280px] mx-auto">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-200/80 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-teal-800 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-teal-900 hover:bg-teal-50/60 border border-slate-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Treatments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-[#d8e1dd]/80 p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group card-hover-effect"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100/80 flex items-center justify-center text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors duration-200">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/50">
                    Est. {service.duration}
                  </span>
                </div>

                <h3 className="text-lg font-outfit font-bold text-[#173e3a] group-hover:text-teal-800 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>

                {/* Key Benefits */}
                <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400">
                    Clinical Highlights
                  </span>
                  {service.benefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Starting From</span>
                  <span className="text-sm font-bold text-teal-900">{service.startingPrice}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      setSelectedService(service);
                      window.scrollTo({ top: 750, behavior: 'smooth' });
                    }}
                    className="text-xs text-slate-600 hover:text-teal-800 font-medium px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    View Steps
                  </button>
                  <button
                    onClick={() => onOpenBooking(service.slug)}
                    className="bg-[#173e3a] hover:bg-teal-900 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Procedure Walkthrough Drawer / Card */}
        {selectedService && (
          <div className="mt-14 bg-gradient-to-br from-white to-[#f6faf8] rounded-3xl border border-[#d8e1dd] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  Step-by-Step Procedure Protocol
                </span>
                <h2 className="text-2xl sm:text-3xl font-outfit font-extrabold text-[#173e3a] mt-1">
                  How We Perform {selectedService.title}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenBooking(selectedService.slug)}
                  className="bg-[#173e3a] hover:bg-teal-900 text-white font-medium px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-teal-300" />
                  <span>Schedule Consultation</span>
                </button>
              </div>
            </div>

            {/* Steps Timeline */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
              {selectedService.steps.map((step, idx) => (
                <div key={idx} className="relative bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-900 font-extrabold text-xs flex items-center justify-center mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    Phase {idx + 1}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Common Patient Questions about this treatment */}
            {selectedService.faqs && selectedService.faqs.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Frequently Asked Questions
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.faqs.map((faq, i) => (
                    <div key={i} className="bg-white/80 rounded-xl p-4 border border-slate-200/60">
                      <p className="text-xs sm:text-sm font-bold text-slate-800">
                        Q: {faq.question}
                      </p>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Hospital Sterilization Assurance Banner */}
        <div className="mt-12 bg-[#edf6f4] rounded-2xl border border-[#d8e1dd] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-outfit font-bold text-lg text-[#173e3a]">
                100% Hospital-Standard Autoclave Sterilization
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                All treatment instruments are sealed in individual pouches and autoclaved using European Class-B vacuum cycles at 134°C.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('patient-resources')}
            className="whitespace-nowrap px-4 py-2.5 bg-white hover:bg-slate-50 text-teal-900 border border-teal-200 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer"
          >
            Read Sterilization Protocol
          </button>
        </div>
      </section>
    </div>
  );
};
