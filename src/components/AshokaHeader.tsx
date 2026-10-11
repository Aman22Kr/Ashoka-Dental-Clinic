import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, 
  ChevronDown, 
  Phone, 
  Clock, 
  MapPin, 
  MessageCircle, 
  Calendar, 
  Check, 
  ShieldCheck,
  Plane,
  Sparkles,
  FileCheck,
  CreditCard
} from 'lucide-react';
import { AshokaLogo } from './AshokaLogo';
import { 
  LANGUAGES, 
  SupportedLanguage, 
  TRANSLATIONS, 
  TranslationDictionary,
  getNavLabels 
} from '../data/translations';
import { useClinicConfig } from '../context/ClinicConfigContext';
import { getTranslatedClinicServices } from '../data/translatedData';

interface AshokaHeaderProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: (serviceSlug?: string) => void;
}

export const AshokaHeader: React.FC<AshokaHeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  currentPath,
  onNavigate,
  onOpenBooking,
}) => {
  const { config } = useClinicConfig();
  const t: TranslationDictionary = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const navLabels = getNavLabels(currentLanguage);
  const clinicalServices = getTranslatedClinicServices(currentLanguage);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isTourismOpen, setIsTourismOpen] = useState(false);
  const [isPatientOpen, setIsPatientOpen] = useState(false);

  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigateTo = (path: string) => {
    onNavigate(path);
    setIsTreatmentsOpen(false);
    setIsTourismOpen(false);
    setIsPatientOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentLangObj = LANGUAGES.find(l => l.code === currentLanguage) || LANGUAGES[0];

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* Top Banner (Vellore Dental Style Clinical Bar) */}
      <div className="bg-[#173e3a] text-teal-100 text-[11px] sm:text-xs py-1.5 px-4 border-b border-[#20514c]">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-2">
          {/* Left helpline & hours */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-medium">
              <Phone className="w-3.5 h-3.5 text-teal-300" />
              <span>{t.btnCallUs}: {config.phoneNumber || 'Helpline Active'}</span>
            </span>
            <span className="hidden md:inline text-teal-500">·</span>
            <span className="hidden md:flex items-center gap-1.5 text-teal-200">
              <Clock className="w-3.5 h-3.5 text-teal-300" />
              <span>Mon-Sat: 9:30 AM - 8:30 PM | Sun: By Appt</span>
            </span>
            <span className="hidden lg:inline text-teal-500">·</span>
            <span className="hidden lg:flex items-center gap-1.5 text-teal-200">
              <MapPin className="w-3.5 h-3.5 text-teal-300" />
              <span>{config.addressLine1}</span>
            </span>
          </div>

          {/* Right quick actions */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-teal-900/60 text-teal-300 px-2 py-0.5 rounded-full text-[10px] border border-teal-700/50">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> ISO Hospital Sterilization
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar with #edf6f4 background */}
      <div className={`bg-[#edf6f4] border-b border-[#d8e1dd] transition-all duration-200 ${
        isScrolled ? 'py-2 shadow-md' : 'py-2.5'
      }`}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => navigateTo('home')} 
            className="text-left group cursor-pointer focus:outline-hidden shrink-0"
          >
            <AshokaLogo clinicName={config.clinicName} />
          </button>



          {/* Desktop Navigation Menu Links with Dropdown Panels */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 font-outfit font-medium text-xs text-[#173e3a]">
            {/* Home */}
            <button
              onClick={() => navigateTo('home')}
              className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${
                currentPath === 'home' 
                  ? 'text-teal-950 font-bold bg-teal-100/70 shadow-2xs' 
                  : 'hover:text-teal-900 hover:bg-teal-100/40 text-slate-700'
              }`}
            >
              {t.navHome}
            </button>

            {/* Treatments Subfolder Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsTreatmentsOpen(true)}
              onMouseLeave={() => setIsTreatmentsOpen(false)}
            >
              <button
                onClick={() => navigateTo('treatments')}
                className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1 cursor-pointer ${
                  currentPath.startsWith('treatments') || currentPath.startsWith('service')
                    ? 'text-teal-950 font-bold bg-teal-100/70 shadow-2xs' 
                    : 'hover:text-teal-900 hover:bg-teal-100/40 text-slate-700'
                }`}
              >
                <span>{navLabels.treatments}</span>
                <ChevronDown className={`w-3 h-3 opacity-70 transition-transform ${isTreatmentsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isTreatmentsOpen && (
                <div className="absolute top-full left-0 w-80 bg-white/98 backdrop-blur-md rounded-2xl shadow-xl border border-teal-600/20 p-2.5 pt-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="px-3 py-1.5 mb-1 text-[10px] font-bold text-teal-800 uppercase tracking-wider border-b border-slate-100 flex justify-between items-center">
                    <span>Clinical Treatments</span>
                    <button 
                      onClick={() => navigateTo('treatments')} 
                      className="text-teal-700 hover:underline capitalize font-bold"
                    >
                      View All →
                    </button>
                  </div>
                  <div className="max-h-64 overflow-y-auto space-y-0.5 scrollbar-thin">
                    {clinicalServices.map((s) => (
                      <button
                        key={s.slug}
                        onClick={() => navigateTo(`service/${s.slug}`)}
                        className="w-full text-left px-2.5 py-1.5 rounded-xl hover:bg-teal-50 transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div className="truncate mr-2">
                          <div className="text-xs font-semibold text-slate-800 group-hover:text-teal-900 truncate">
                            {s.title}
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            {s.shortDesc}
                          </div>
                        </div>
                        <span className="text-[10px] text-teal-700 font-semibold bg-teal-50 px-1.5 py-0.5 rounded-md shrink-0">
                          {s.duration}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dental Tourism Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsTourismOpen(true)}
              onMouseLeave={() => setIsTourismOpen(false)}
            >
              <button
                onClick={() => navigateTo('dental-tourism')}
                className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentPath.startsWith('dental-tourism') || currentPath.startsWith('tourism')
                    ? 'text-teal-950 font-bold bg-teal-100/70 shadow-2xs' 
                    : 'hover:text-teal-900 hover:bg-teal-100/40 text-slate-700'
                }`}
              >
                <Plane className="w-3.5 h-3.5 text-teal-700" />
                <span>{navLabels.tourism}</span>
                <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded-full">
                  80%
                </span>
                <ChevronDown className={`w-3 h-3 opacity-70 transition-transform ${isTourismOpen ? 'rotate-180' : ''}`} />
              </button>

              {isTourismOpen && (
                <div className="absolute top-full left-0 w-76 bg-white/98 backdrop-blur-md rounded-2xl shadow-xl border border-teal-600/20 p-2.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="px-3 py-1 mb-1 text-[10px] font-bold text-teal-800 uppercase tracking-wider border-b border-slate-100 flex justify-between items-center">
                    <span>Global Concierge</span>
                    <button 
                      onClick={() => navigateTo('dental-tourism')} 
                      className="text-teal-700 hover:underline capitalize font-bold"
                    >
                      Tourism Hub →
                    </button>
                  </div>
                  <div className="space-y-1">
                    <button
                      onClick={() => navigateTo('dental-tourism')}
                      className="w-full text-left px-2.5 py-1.5 rounded-xl hover:bg-teal-50 transition-colors flex items-center gap-2 text-xs text-slate-800 group cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <div>
                        <div className="font-semibold group-hover:text-teal-900">Compare Costs</div>
                        <div className="text-[10px] text-slate-500">Save up to 80% vs US & UK</div>
                      </div>
                    </button>
                    <button
                      onClick={() => navigateTo('dental-tourism')}
                      className="w-full text-left px-2.5 py-1.5 rounded-xl hover:bg-teal-50 transition-colors flex items-center gap-2 text-xs text-slate-800 group cursor-pointer"
                    >
                      <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <div>
                        <div className="font-semibold group-hover:text-teal-900">Vellore Fort & Stay</div>
                        <div className="text-[10px] text-slate-500">Accommodation & pickup assistance</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Patient Hub */}
            <div 
              className="relative"
              onMouseEnter={() => setIsPatientOpen(true)}
              onMouseLeave={() => setIsPatientOpen(false)}
            >
              <button
                onClick={() => navigateTo('patient-resources')}
                className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1 cursor-pointer ${
                  currentPath.startsWith('patient-resources')
                    ? 'text-teal-950 font-bold bg-teal-100/70 shadow-2xs' 
                    : 'hover:text-teal-900 hover:bg-teal-100/40 text-slate-700'
                }`}
              >
                <span>{navLabels.patient}</span>
                <ChevronDown className={`w-3 h-3 opacity-70 transition-transform ${isPatientOpen ? 'rotate-180' : ''}`} />
              </button>

              {isPatientOpen && (
                <div className="absolute top-full left-0 w-72 bg-white/98 backdrop-blur-md rounded-2xl shadow-xl border border-teal-600/20 p-2.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="px-3 py-1 mb-1 text-[10px] font-bold text-teal-800 uppercase tracking-wider border-b border-slate-100 flex justify-between items-center">
                    <span>Patient Resources</span>
                    <button 
                      onClick={() => navigateTo('patient-resources')} 
                      className="text-teal-700 hover:underline capitalize font-bold"
                    >
                      Overview →
                    </button>
                  </div>
                  <div className="space-y-1">
                    <button
                      onClick={() => navigateTo('patient-resources')}
                      className="w-full text-left px-2.5 py-1.5 rounded-xl hover:bg-teal-50 transition-colors flex items-center gap-2 text-xs text-slate-800 group cursor-pointer"
                    >
                      <FileCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <div>
                        <div className="font-semibold group-hover:text-teal-900">Pre & Post-Op Guides</div>
                        <div className="text-[10px] text-slate-500">Recovery care instructions</div>
                      </div>
                    </button>
                    <button
                      onClick={() => navigateTo('patient-resources')}
                      className="w-full text-left px-2.5 py-1.5 rounded-xl hover:bg-teal-50 transition-colors flex items-center gap-2 text-xs text-slate-800 group cursor-pointer"
                    >
                      <CreditCard className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <div>
                        <div className="font-semibold group-hover:text-teal-900">0% EMI Plans</div>
                        <div className="text-[10px] text-slate-500">Interest-free installments</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Blog & Guides */}
            <button
              onClick={() => navigateTo('blog')}
              className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${
                currentPath.startsWith('blog') 
                  ? 'text-teal-950 font-bold bg-teal-100/70 shadow-2xs' 
                  : 'hover:text-teal-900 hover:bg-teal-100/40 text-slate-700'
              }`}
            >
              {navLabels.blog}
            </button>

            {/* Conditions */}
            <button
              onClick={() => navigateTo('conditions')}
              className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${
                currentPath === 'conditions' 
                  ? 'text-teal-950 font-bold bg-teal-100/70 shadow-2xs' 
                  : 'hover:text-teal-900 hover:bg-teal-100/40 text-slate-700'
              }`}
            >
              {t.navConditions}
            </button>

            {/* Pricing */}
            <button
              onClick={() => navigateTo('pricing')}
              className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${
                currentPath === 'pricing' 
                  ? 'text-teal-950 font-bold bg-teal-100/70 shadow-2xs' 
                  : 'hover:text-teal-900 hover:bg-teal-100/40 text-slate-700'
              }`}
            >
              {t.navPricing}
            </button>

            {/* Doctor */}
            <button
              onClick={() => navigateTo('doctor')}
              className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${
                currentPath === 'doctor' 
                  ? 'text-teal-950 font-bold bg-teal-100/70 shadow-2xs' 
                  : 'hover:text-teal-900 hover:bg-teal-100/40 text-slate-700'
              }`}
            >
              {t.navDoctor}
            </button>

            {/* Reviews */}
            <button
              onClick={() => navigateTo('reviews')}
              className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${
                currentPath === 'reviews' 
                  ? 'text-teal-950 font-bold bg-teal-100/70 shadow-2xs' 
                  : 'hover:text-teal-900 hover:bg-teal-100/40 text-slate-700'
              }`}
            >
              {t.navReviews}
            </button>

            {/* Contact */}
            <button
              onClick={() => navigateTo('contact')}
              className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${
                currentPath === 'contact' 
                  ? 'text-teal-950 font-bold bg-teal-100/70 shadow-2xs' 
                  : 'hover:text-teal-900 hover:bg-teal-100/40 text-slate-700'
              }`}
            >
              {t.navContact}
            </button>
          </nav>

          {/* Right Tools: Language Switcher + Booking CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Multi-Language Dropdown (All 9 Languages) with Small Language Icon */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white border border-[#d8e1dd] text-[#173e3a] hover:bg-teal-50 transition-all font-outfit text-xs font-semibold shadow-2xs cursor-pointer group hover:border-teal-500/50"
                aria-label="Select Language"
              >
                {/* Small Language Icon & Flag */}
                <div className="flex items-center gap-1 text-teal-800">
                  <Globe className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
                  {currentLangObj.flag && (
                    <span className="text-xs leading-none" role="img" aria-label={currentLangObj.name}>
                      {currentLangObj.flag}
                    </span>
                  )}
                </div>
                <span className="font-medium text-slate-800">{currentLangObj.name}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${isLangOpen ? 'rotate-180 text-teal-700' : ''}`} />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-56 bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl border border-teal-600/20 p-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-2.5 py-1 text-[10px] font-bold text-teal-800 uppercase tracking-wider border-b border-slate-100 mb-1 flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Globe className="w-3 h-3 text-teal-600" /> Language / மொழி
                    </span>
                    <span className="text-[9px] text-slate-400 font-normal">9 Languages</span>
                  </div>
                  <div className="max-h-64 overflow-y-auto space-y-0.5 scrollbar-thin">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-1.5 rounded-xl flex items-center justify-between text-xs transition-colors cursor-pointer ${
                          currentLanguage === lang.code
                            ? 'bg-teal-50 text-teal-900 font-bold'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm leading-none">{lang.flag}</span>
                          <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded-sm font-mono text-slate-600">
                            {lang.shortLabel}
                          </span>
                          <span className="truncate">{lang.nativeName}</span>
                        </div>
                        {currentLanguage === lang.code && (
                          <Check className="w-3.5 h-3.5 text-teal-700 shrink-0 ml-1" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Upper Menu (Always visible on mobile & tablet) */}
        <div className="lg:hidden w-full border-t border-[#d8e1dd] bg-[#f4f9f7] px-3 py-1.5 overflow-x-auto scrollbar-none flex items-center gap-1.5 text-xs font-outfit whitespace-nowrap shadow-2xs">
          <button
            onClick={() => navigateTo('home')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 ${
              currentPath === 'home'
                ? 'bg-[#173e3a] text-white font-bold shadow-xs'
                : 'bg-white/90 text-slate-700 hover:bg-teal-50 hover:text-teal-900 border border-[#d8e1dd]'
            }`}
          >
            {t.navHome}
          </button>

          <button
            onClick={() => navigateTo('treatments')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 ${
              currentPath.startsWith('treatments') || currentPath.startsWith('service')
                ? 'bg-[#173e3a] text-white font-bold shadow-xs'
                : 'bg-white/90 text-slate-700 hover:bg-teal-50 hover:text-teal-900 border border-[#d8e1dd]'
            }`}
          >
            {navLabels.treatments}
          </button>

          <button
            onClick={() => navigateTo('dental-tourism')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 flex items-center gap-1 ${
              currentPath.startsWith('dental-tourism') || currentPath.startsWith('tourism')
                ? 'bg-[#173e3a] text-white font-bold shadow-xs'
                : 'bg-white/90 text-slate-700 hover:bg-teal-50 hover:text-teal-900 border border-[#d8e1dd]'
            }`}
          >
            <span>{navLabels.tourism}</span>
            <span className={`text-[9px] px-1 py-0.2 rounded-full font-bold ${
              currentPath.startsWith('dental-tourism') || currentPath.startsWith('tourism')
                ? 'bg-teal-700 text-teal-100'
                : 'bg-emerald-100 text-emerald-800'
            }`}>
              80%
            </span>
          </button>

          <button
            onClick={() => navigateTo('patient-resources')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 ${
              currentPath.startsWith('patient-resources')
                ? 'bg-[#173e3a] text-white font-bold shadow-xs'
                : 'bg-white/90 text-slate-700 hover:bg-teal-50 hover:text-teal-900 border border-[#d8e1dd]'
            }`}
          >
            {navLabels.patient}
          </button>

          <button
            onClick={() => navigateTo('blog')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 ${
              currentPath.startsWith('blog')
                ? 'bg-[#173e3a] text-white font-bold shadow-xs'
                : 'bg-white/90 text-slate-700 hover:bg-teal-50 hover:text-teal-900 border border-[#d8e1dd]'
            }`}
          >
            {navLabels.blog}
          </button>

          <button
            onClick={() => navigateTo('conditions')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 ${
              currentPath === 'conditions'
                ? 'bg-[#173e3a] text-white font-bold shadow-xs'
                : 'bg-white/90 text-slate-700 hover:bg-teal-50 hover:text-teal-900 border border-[#d8e1dd]'
            }`}
          >
            {t.navConditions}
          </button>

          <button
            onClick={() => navigateTo('pricing')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 ${
              currentPath === 'pricing'
                ? 'bg-[#173e3a] text-white font-bold shadow-xs'
                : 'bg-white/90 text-slate-700 hover:bg-teal-50 hover:text-teal-900 border border-[#d8e1dd]'
            }`}
          >
            {t.navPricing}
          </button>

          <button
            onClick={() => navigateTo('doctor')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 ${
              currentPath === 'doctor'
                ? 'bg-[#173e3a] text-white font-bold shadow-xs'
                : 'bg-white/90 text-slate-700 hover:bg-teal-50 hover:text-teal-900 border border-[#d8e1dd]'
            }`}
          >
            {t.navDoctor}
          </button>

          <button
            onClick={() => navigateTo('reviews')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 ${
              currentPath === 'reviews'
                ? 'bg-[#173e3a] text-white font-bold shadow-xs'
                : 'bg-white/90 text-slate-700 hover:bg-teal-50 hover:text-teal-900 border border-[#d8e1dd]'
            }`}
          >
            {t.navReviews}
          </button>

          <button
            onClick={() => navigateTo('contact')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 ${
              currentPath === 'contact'
                ? 'bg-[#173e3a] text-white font-bold shadow-xs'
                : 'bg-white/90 text-slate-700 hover:bg-teal-50 hover:text-teal-900 border border-[#d8e1dd]'
            }`}
          >
            {t.navContact}
          </button>
        </div>
      </div>

    </header>
  );
};
