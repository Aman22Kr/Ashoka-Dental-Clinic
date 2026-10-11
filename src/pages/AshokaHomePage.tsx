import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Award, 
  Clock, 
  Check, 
  ChevronRight, 
  MessageCircle, 
  ArrowUpRight, 
  HelpCircle, 
  ChevronDown,
  Building2,
  DollarSign,
  HeartHandshake,
  Plane,
  BookOpen,
  Users
} from 'lucide-react';
import { CLINIC_CONDITIONS, PATIENT_TESTIMONIALS, CLINIC_FAQS } from '../data/clinicData';
import { TRANSLATIONS, SupportedLanguage, TranslationDictionary } from '../data/translations';
import { getTranslatedClinicServices } from '../data/translatedData';
import { useClinicConfig } from '../context/ClinicConfigContext';

interface AshokaHomePageProps {
  currentLanguage: SupportedLanguage;
  onNavigate: (path: string) => void;
  onOpenBooking: (serviceSlug?: string) => void;
}

export const AshokaHomePage: React.FC<AshokaHomePageProps> = ({
  currentLanguage,
  onNavigate,
  onOpenBooking,
}) => {
  const { config } = useClinicConfig();
  const t: TranslationDictionary = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const clinicalServices = getTranslatedClinicServices(currentLanguage);

  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [quickContactName, setQuickContactName] = useState('');
  const [quickContactPhone, setQuickContactPhone] = useState('');
  const [quickContactMsg, setQuickContactMsg] = useState('');
  const [quickContactSubmitted, setQuickContactSubmitted] = useState(false);

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    setQuickContactSubmitted(true);
    setTimeout(() => {
      setQuickContactSubmitted(false);
      setQuickContactName('');
      setQuickContactPhone('');
      setQuickContactMsg('');
    }, 4000);
  };

  return (
    <div className="font-outfit bg-[#f8faf9] text-slate-800">
      {/* Hero Section (Replicating velloredental.com/en Hero) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#edf6f4] via-[#f4f9f7] to-[#f8faf9] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#d8e1dd]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 space-y-5">
              {/* Kicker with Pulse Dot */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#c3d4ce] text-teal-800 text-xs font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
                <span>{config.clinicName} · {config.addressLine1.replace('Ashoka Dental Clinic, ', '')}</span>
              </div>

              {/* Main H1 Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#173e3a] leading-[1.18] tracking-tight">
                {t.heroHeadingPart1}
                <span className="text-teal-600 font-bold block sm:inline">
                  {t.heroHeadingPart2}
                </span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-sm sm:text-base text-[#4a635f] leading-relaxed max-w-xl font-normal">
                {t.heroLead.replace('[Doctor Name]', config.doctorName || 'Dr. Ashoka Dental Specialists')}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3 items-center">
                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/?text=Hi%2C%20I%20would%20like%20to%20book%20a%20dental%20consultation%20at%20Ashoka%20Dental%20Clinic`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide shadow-md shadow-emerald-700/20 hover:shadow-emerald-700/30 transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.btnBookWhatsApp}</span>
                </a>

                {/* Call Button */}
                <a
                  href={config.phoneNumber && !config.phoneNumber.includes('[') && !config.phoneNumber.includes('—') ? `tel:${config.phoneNumber}` : '#contact'}
                  className="px-5 py-3.5 rounded-xl bg-white hover:bg-teal-50 text-[#173e3a] font-semibold text-xs border border-[#c3d4ce] shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-teal-700" />
                  <span>{t.btnCallUs} {config.phoneNumber || '—'}</span>
                </a>

                {/* Book Consultation Modal Trigger */}
                <button
                  onClick={() => onOpenBooking()}
                  className="px-5 py-3.5 rounded-xl bg-[#173e3a] hover:bg-[#23534e] text-white font-semibold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-teal-300" />
                  <span>{t.btnBookAppointment}</span>
                </button>
              </div>

              {/* Assurances Badges (Exact velloredental style pills) */}
              <div className="pt-4 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-800 font-bold shadow-2xs">
                  <Check className="w-3.5 h-3.5 text-teal-700" />
                  <span>{t.heroBadgeLanguages}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-800 font-bold shadow-2xs">
                  <Check className="w-3.5 h-3.5 text-indigo-700" />
                  <span>{t.heroBadgeDigital}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-800 font-bold shadow-2xs">
                  <Check className="w-3.5 h-3.5 text-purple-700" />
                  <span>{t.heroBadgeHospital}</span>
                </span>
              </div>
            </div>

            {/* Right Column: Doctor Portrait Card & Location Card */}
            <div className="lg:col-span-5 space-y-4">
              {/* Doctor Visual Card */}
              <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-[#d8e1dd] overflow-hidden group">
                {/* Background medical graphic decoration */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-teal-50 rounded-full blur-2xl -z-0"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Doctor avatar / silhouette placeholder */}
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-teal-800 to-[#102c29] text-white flex items-center justify-center shadow-lg ring-4 ring-teal-100 overflow-hidden mb-4 relative">
                    <svg viewBox="0 0 100 100" className="w-24 h-24 text-teal-200" fill="currentColor">
                      <circle cx="50" cy="35" r="20" opacity="0.9" />
                      <path d="M15 90c0-18 16-26 35-26s35 8 35 26z" opacity="0.9" />
                    </svg>
                    <span className="absolute bottom-2 text-[10px] font-mono bg-teal-950/80 px-2 py-0.5 rounded-full text-teal-300">
                      Chief Dentist
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#173e3a]">
                    {config.doctorName || 'Chief Dental Surgeon'}
                  </h3>
                  <p className="text-xs text-teal-700 font-medium mt-0.5">
                    {t.heroDoctorRole}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1 max-w-xs">
                    {config.doctorQualifications}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 w-full flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">15+ Yrs Clinical Mastery</span>
                    <button
                      onClick={() => onNavigate('doctor')}
                      className="text-teal-800 font-bold flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span>Read Bio</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Location Card (velloredental style) */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#d8e1dd] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center shrink-0 text-teal-800">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      {t.heroLocationLabel}
                    </span>
                    <p className="text-xs font-bold text-[#173e3a]">
                      {config.addressLine1}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {config.addressLine2}, {config.city}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className="p-2 rounded-xl text-teal-800 hover:bg-teal-50 transition-colors cursor-pointer shrink-0"
                  aria-label="View clinic address"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white border-b border-[#d8e1dd]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/50">
              Clinical Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#173e3a]">
              {t.whyTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {t.whySubtitle}
            </p>
          </div>

          {/* 6 Key Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Experience */}
            <div className="p-6 rounded-2xl bg-[#f1f6f3] border border-[#d8e1dd] space-y-2 transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold text-[#173e3a]">{t.statExperience}</span>
                <Award className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-sm font-bold text-[#173e3a]">{t.statExperienceLabel}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated surgical and conservative dental care with thousands of successful treatments.
              </p>
            </div>

            {/* 2. Rating */}
            <div className="p-6 rounded-2xl bg-[#f5f1e8] border border-[#e2d9c8] space-y-2 transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold text-[#173e3a]">{t.statRating}</span>
                <div className="flex items-center text-amber-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-[#173e3a]">{t.statRatingLabel}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consistently trusted by patients for painless clinical procedures and transparent care.
              </p>
            </div>

            {/* 3. Technology */}
            <div className="p-6 rounded-2xl bg-[#edf6f4] border border-[#cbe0d9] space-y-2 transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <Sparkles className="w-6 h-6 text-teal-700" />
                <span className="text-[11px] font-bold text-teal-800 bg-teal-100/80 px-2.5 py-0.5 rounded-full">Digital 3D</span>
              </div>
              <h3 className="text-sm font-bold text-[#173e3a]">{t.statTechTitle}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.statTechDesc}
              </p>
            </div>

            {/* 4. Timings */}
            <div className="p-6 rounded-2xl bg-[#f1f6f3] border border-[#d8e1dd] space-y-2 transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <Clock className="w-6 h-6 text-teal-700" />
                <span className="text-[11px] font-bold text-teal-800 bg-teal-100/80 px-2.5 py-0.5 rounded-full">Mon-Sat</span>
              </div>
              <h3 className="text-sm font-bold text-[#173e3a]">{t.statTimingTitle}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.statTimingDesc}
              </p>
            </div>

            {/* 5. Patient-Centered Care */}
            <div className="p-6 rounded-2xl bg-[#f1f6f3] border border-[#d8e1dd] space-y-2 transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <HeartHandshake className="w-6 h-6 text-teal-700" />
                <span className="text-[11px] font-bold text-teal-800 bg-teal-100/80 px-2.5 py-0.5 rounded-full">Transparent</span>
              </div>
              <h3 className="text-sm font-bold text-[#173e3a]">{t.statCareTitle}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.statCareDesc}
              </p>
            </div>

            {/* 6. Comprehensive Services */}
            <div className="p-6 rounded-2xl bg-[#edf6f4] border border-[#cbe0d9] space-y-2 transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <Building2 className="w-6 h-6 text-teal-700" />
                <span className="text-[11px] font-bold text-teal-800 bg-teal-100/80 px-2.5 py-0.5 rounded-full">In-House</span>
              </div>
              <h3 className="text-sm font-bold text-[#173e3a]">{t.statServicesTitle}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.statServicesDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-[#f8faf9] border-b border-[#d8e1dd]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
                Clinical Treatments
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#173e3a]">
                {t.servicesTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {t.servicesSubtitle}
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="px-4 py-2 rounded-xl bg-white border border-[#c3d4ce] text-teal-800 font-semibold text-xs hover:bg-teal-50 transition-colors flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
            >
              <span>{t.viewAllServices}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalServices.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-2xl p-6 border border-[#d8e1dd] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/50">
                      {s.duration}
                    </span>
                    <span className="text-xs font-bold text-slate-700">
                      {s.startingPrice}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#173e3a] group-hover:text-teal-700 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {s.shortDesc}
                  </p>

                  {/* 2 key benefits */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    {s.benefits.slice(0, 2).map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onNavigate(`service/${s.slug}`)}
                    className="text-xs font-semibold text-teal-800 hover:text-teal-950 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t.btnExploreServices}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(s.slug)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#173e3a] hover:bg-teal-900 text-white font-medium text-xs transition-colors cursor-pointer"
                  >
                    {t.btnBookAppointment}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guided Treatment Journey Section */}
      <section className="py-16 bg-white border-b border-[#d8e1dd]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/50">
              The Care Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#173e3a]">
              {t.journeyTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {t.journeySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#edf6f4] border border-[#d8e1dd] space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-[#173e3a] text-white flex items-center justify-center font-bold text-xs">
                01
              </span>
              <h3 className="text-sm font-bold text-[#173e3a]">{t.step1Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.step1Desc}</p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#edf6f4] border border-[#d8e1dd] space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-[#173e3a] text-white flex items-center justify-center font-bold text-xs">
                02
              </span>
              <h3 className="text-sm font-bold text-[#173e3a]">{t.step2Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.step2Desc}</p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#edf6f4] border border-[#d8e1dd] space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-[#173e3a] text-white flex items-center justify-center font-bold text-xs">
                03
              </span>
              <h3 className="text-sm font-bold text-[#173e3a]">{t.step3Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.step3Desc}</p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-[#edf6f4] border border-[#d8e1dd] space-y-3 relative">
              <span className="w-8 h-8 rounded-full bg-[#173e3a] text-white flex items-center justify-center font-bold text-xs">
                04
              </span>
              <h3 className="text-sm font-bold text-[#173e3a]">{t.step4Title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{t.step4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Showcase Section */}
      <section className="py-16 bg-[#f1f6f3] border-b border-[#d8e1dd]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#d8e1dd] shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Doctor Avatar / Image */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="w-44 h-44 rounded-2xl bg-gradient-to-tr from-[#173e3a] to-teal-800 text-white flex items-center justify-center shadow-xl ring-4 ring-teal-100 overflow-hidden relative mb-4">
                  <svg viewBox="0 0 100 100" className="w-28 h-28 text-teal-200" fill="currentColor">
                    <circle cx="50" cy="35" r="20" opacity="0.9" />
                    <path d="M15 90c0-18 16-26 35-26s35 8 35 26z" opacity="0.9" />
                  </svg>
                  <span className="absolute bottom-2 bg-teal-950/80 px-3 py-0.5 rounded-full text-[11px] text-teal-300 font-mono">
                    15+ Yrs Experience
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#173e3a]">{config.doctorName || 'Chief Dental Surgeon'}</h3>
                <p className="text-xs text-teal-700 font-semibold mt-0.5">{config.doctorQualifications}</p>
                <p className="text-[11px] text-slate-500 mt-1">{config.clinicName}</p>
              </div>

              {/* Doctor Bio & Specializations */}
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/50">
                  {t.doctorSectionTitle}
                </span>

                <h2 className="text-2xl font-bold text-[#173e3a]">
                  Comprehensive, biologically driven dentistry led by {config.doctorName || 'our dental specialists'}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.doctorBio}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-[#173e3a] uppercase tracking-wider mb-2">
                    {t.doctorSpecializations}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Single-sitting microscopic root canal therapy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Computer-guided titanium dental implants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Invisible orthodontic aligners & clear braces</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Monolithic zirconia & E-max porcelain crowns</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => onOpenBooking()}
                    className="px-5 py-2.5 rounded-xl bg-[#173e3a] hover:bg-[#21514b] text-white text-xs font-semibold shadow-xs flex items-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-teal-300" />
                    <span>{t.btnBookAppointment}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & 0% EMI Financing Section */}
      <section className="py-16 bg-white border-b border-[#d8e1dd]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/50">
              Financial Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#173e3a]">
              {t.pricingTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {t.pricingSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* EMI Banner */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#edf6f4] to-[#e4f1ed] p-8 rounded-3xl border border-[#cbe0d9] space-y-4">
              <span className="text-[11px] font-bold text-teal-800 bg-teal-100 px-3 py-1 rounded-full uppercase tracking-wider">
                {t.emiBadge}
              </span>

              <h3 className="text-xl font-bold text-[#173e3a]">
                {t.emiTitle}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {t.emiDesc}
              </p>

              <div className="pt-2 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero percent interest with flexible 3 to 12 month tenures</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Instant digital paperless approval within 15 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Accepted cards: Credit Cards, Debit Cards, Bajaj Finserv</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-5 py-2.5 bg-teal-800 hover:bg-teal-900 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t.btnBookAppointment}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Popular Procedure Estimates */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#d8e1dd] shadow-xs space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Standard Procedure Cost Estimates
              </h3>

              <div className="divide-y divide-slate-100 text-xs">
                {clinicalServices.map((s) => (
                  <div key={s.id} className="py-3 flex items-center justify-between gap-4">
                    <div>
                      <span className="font-bold text-slate-800 block text-xs">{s.title}</span>
                      <span className="text-[11px] text-slate-500">Includes diagnostics & follow-up</span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-extrabold text-teal-800 text-sm">{s.startingPrice}</span>
                      <span className="text-[10px] text-slate-400 block">approx. fee</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Subfolder Hubs: Treatments, Dental Tourism, Patient Resources & Blog */}
      <section className="py-16 bg-gradient-to-b from-white via-[#f4faf7] to-white border-b border-[#d8e1dd]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/60 inline-flex items-center gap-1.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-teal-600 animate-spin-slow" />
              <span>Explore Our Clinical Center</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#173e3a] tracking-tight">
              Specialized Care & Patient Resources
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Browse clinical treatments, international patient concierge, educational guides, and aftercare protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Treatments Directory */}
            <div 
              onClick={() => onNavigate('treatments')}
              className="bg-white rounded-2xl p-6 border border-[#d8e1dd] shadow-2xs hover:shadow-xl hover:border-teal-400 transition-all cursor-pointer group flex flex-col justify-between transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50/60 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 border border-teal-200/60 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors shadow-2xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-teal-700 tracking-wider">Subfolder · 01</span>
                  <h3 className="text-base font-bold text-[#173e3a] group-hover:text-teal-700 transition-colors">
                    Treatments Directory
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Explore single-sitting RCT, All-on-4 implants, clear aligners, and aesthetic smile design.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-800 group-hover:text-teal-900 mt-4 relative z-10">
                <span>View All Procedures</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Dental Tourism */}
            <div 
              onClick={() => onNavigate('dental-tourism')}
              className="bg-white rounded-2xl p-6 border border-[#d8e1dd] shadow-2xs hover:shadow-xl hover:border-teal-400 transition-all cursor-pointer group flex flex-col justify-between transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-50/60 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 border border-sky-200/60 flex items-center justify-center group-hover:bg-sky-700 group-hover:text-white transition-colors shadow-2xs">
                  <Plane className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-sky-700 tracking-wider">Subfolder · 02</span>
                    <span className="text-[9px] bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full font-bold">Save 75%</span>
                  </div>
                  <h3 className="text-base font-bold text-[#173e3a] group-hover:text-sky-700 transition-colors">
                    Dental Tourism
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    World-class care for NRI & international patients. Airport pickup, hotel stays & cost comparisons.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-800 group-hover:text-sky-900 mt-4 relative z-10">
                <span>Tourism Packages</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Patient Hub */}
            <div 
              onClick={() => onNavigate('patient-hub')}
              className="bg-white rounded-2xl p-6 border border-[#d8e1dd] shadow-2xs hover:shadow-xl hover:border-teal-400 transition-all cursor-pointer group flex flex-col justify-between transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50/60 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors shadow-2xs">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Subfolder · 03</span>
                  <h3 className="text-base font-bold text-[#173e3a] group-hover:text-emerald-700 transition-colors">
                    Patient Hub & Care
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Pre/post-treatment care instructions, hospital sterilization protocols, and digital intake form.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-emerald-900 mt-4 relative z-10">
                <span>Patient Resources</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4: Blog & Guide */}
            <div 
              onClick={() => onNavigate('blog-guide')}
              className="bg-white rounded-2xl p-6 border border-[#d8e1dd] shadow-2xs hover:shadow-xl hover:border-teal-400 transition-all cursor-pointer group flex flex-col justify-between transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50/60 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center group-hover:bg-amber-700 group-hover:text-white transition-colors shadow-2xs">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-700 tracking-wider">Subfolder · 04</span>
                  <h3 className="text-base font-bold text-[#173e3a] group-hover:text-amber-700 transition-colors">
                    Blog & Dental Guides
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Ask the Dentist Q&A forum and clinician-reviewed articles on implants, root canals, and hygiene.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-800 group-hover:text-amber-900 mt-4 relative z-10">
                <span>Read Articles & Q&A</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials Section */}
      <section className="py-16 bg-[#f8faf9] border-b border-[#d8e1dd]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/50">
              Verified Reviews
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#173e3a]">
              {t.testimonialsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {t.testimonialsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PATIENT_TESTIMONIALS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-6 border border-[#d8e1dd] shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-bold border border-emerald-200">
                      Verified Patient
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-800 block">{rev.author}</span>
                    <span className="text-[10px] text-slate-400">{rev.location}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-teal-700">
                    {rev.treatment}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white border-b border-[#d8e1dd]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/50">
              Patient Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#173e3a]">
              {t.faqTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {t.faqSubtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {CLINIC_FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#d8e1dd] rounded-2xl overflow-hidden bg-[#fbfdfc] transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#173e3a] hover:bg-teal-50/50 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-teal-700 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed animate-in fade-in duration-150 border-t border-slate-100/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visit Our Clinic / Contact Section */}
      <section id="contact" className="py-16 bg-[#edf6f4] border-b border-[#d8e1dd]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-white px-3 py-1 rounded-full border border-teal-200">
                  Location & Hours
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#173e3a] mt-2">
                  {t.visitTitle}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {t.visitSubtitle}
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-4 bg-white rounded-2xl border border-[#d8e1dd] flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#173e3a]">{t.visitAddressHeading}</h4>
                    <p className="text-slate-700 mt-0.5 font-medium">{config.addressLine1}</p>
                    <p className="text-slate-500">{config.addressLine2}, {config.city}, {config.state} - {config.postalCode}</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-[#d8e1dd] flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#173e3a]">{t.visitPhoneHeading}</h4>
                    <p className="text-slate-700 mt-0.5 font-medium">{config.phoneNumber || '—'}</p>
                    <p className="text-slate-500">WhatsApp: {config.whatsappNumber || '—'}</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-[#d8e1dd] flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#173e3a]">{t.visitHoursHeading}</h4>
                    <p className="text-slate-700 mt-0.5 font-medium">{t.visitHoursText}</p>
                    <p className="text-slate-500">Emergency trauma care available on-call</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Quick Inquiry Form */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#d8e1dd] shadow-lg">
              <h3 className="text-lg font-bold text-[#173e3a]">
                Send an Inquiry to {config.clinicName}
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-5">
                Have a dental question or need fee information? Send a note to our care desk.
              </p>

              {quickContactSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900">Inquiry Sent Successfully!</h4>
                  <p className="text-xs text-emerald-800">
                    Thank you, {quickContactName}. Our coordination team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickContact} className="space-y-4 text-xs">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={quickContactName}
                      onChange={(e) => setQuickContactName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-teal-600"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={quickContactPhone}
                      onChange={(e) => setQuickContactPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-teal-600"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Message / Question</label>
                    <textarea
                      rows={3}
                      value={quickContactMsg}
                      onChange={(e) => setQuickContactMsg(e.target.value)}
                      placeholder="Ask about treatments, pricing, or tooth pain..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-teal-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#173e3a] hover:bg-[#20514c] text-white font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4 text-teal-300" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
