import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Clock, 
  DollarSign, 
  Calendar, 
  ShieldCheck, 
  ChevronRight, 
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { CLINIC_SERVICES, ServiceItem } from '../data/clinicData';
import { SupportedLanguage, TRANSLATIONS, TranslationDictionary } from '../data/translations';
import { getTranslatedClinicServices } from '../data/translatedData';
import { useClinicConfig } from '../context/ClinicConfigContext';

interface AshokaServicesPageProps {
  currentServiceSlug?: string;
  currentLanguage: SupportedLanguage;
  onNavigate: (path: string) => void;
  onOpenBooking: (serviceSlug?: string) => void;
}

export const AshokaServicesPage: React.FC<AshokaServicesPageProps> = ({
  currentServiceSlug,
  currentLanguage,
  onNavigate,
  onOpenBooking,
}) => {
  const { config } = useClinicConfig();
  const t: TranslationDictionary = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const allServices = getTranslatedClinicServices(currentLanguage);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // If a specific service slug is provided, show the dedicated detailed page
  const selectedService: ServiceItem | undefined = currentServiceSlug
    ? allServices.find((s) => s.slug === currentServiceSlug)
    : undefined;

  if (selectedService) {
    return (
      <div className="font-outfit bg-[#f8faf9] text-slate-800 min-h-screen py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-teal-800">
              {t.navHome}
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button onClick={() => onNavigate('services')} className="hover:text-teal-800">
              {t.navServices}
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-bold text-slate-800">{selectedService.title}</span>
          </div>

          {/* Hero Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#d8e1dd] shadow-md mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold">
                  <span>{config.clinicName} Speciality</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#173e3a]">
                  {selectedService.title}
                </h1>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {selectedService.longDesc}
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                  <span className="inline-flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-xl">
                    <Clock className="w-4 h-4 text-teal-700" />
                    <span>Duration: {selectedService.duration}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl border border-emerald-200">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    <span>Starting Fee: {selectedService.startingPrice}</span>
                  </span>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => onOpenBooking(selectedService.slug)}
                    className="px-6 py-3 rounded-xl bg-[#173e3a] hover:bg-[#20514c] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-teal-300" />
                    <span>{t.btnBookAppointment}</span>
                  </button>

                  <a
                    href={`https://wa.me/?text=Hi%2C%20I%20have%20questions%20about%20${encodeURIComponent(selectedService.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Consult on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Quick Info Box */}
              <div className="lg:col-span-4 bg-[#edf6f4] p-6 rounded-2xl border border-[#cbe0d9] space-y-4">
                <h3 className="font-bold text-[#173e3a] text-sm uppercase tracking-wider">
                  Key Treatment Benefits
                </h3>
                <div className="space-y-2.5 text-xs text-slate-700">
                  {selectedService.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#cbe0d9] text-[11px] text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  <span>Hospital-standard Class-B autoclave sterilization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Procedure Steps */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#d8e1dd] shadow-xs mb-10 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
                Clinical Workflow
              </span>
              <h2 className="text-2xl font-bold text-[#173e3a]">
                Step-by-Step Procedure Guide
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {selectedService.steps.map((step, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#f1f6f3] border border-[#d8e1dd] space-y-2">
                  <span className="w-7 h-7 rounded-full bg-[#173e3a] text-white flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed pt-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Service FAQs */}
          {selectedService.faqs.length > 0 && (
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#d8e1dd] shadow-xs mb-10 space-y-4">
              <h2 className="text-xl font-bold text-[#173e3a]">
                Frequently Asked Questions about {selectedService.title}
              </h2>

              <div className="space-y-3">
                {selectedService.faqs.map((faq, i) => (
                  <div key={i} className="border border-[#d8e1dd] rounded-2xl p-4 sm:p-5 bg-[#fbfdfc]">
                    <h3 className="font-bold text-xs sm:text-sm text-[#173e3a] mb-2 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-teal-700 shrink-0" />
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Back Button */}
          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold transition-colors"
            >
              ← Back to All Dental Treatments
            </button>
          </div>
        </div>
      </div>
    );
  }

  // All Services Overview Page
  return (
    <div className="font-outfit bg-[#f8faf9] text-slate-800 min-h-screen py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            {config.clinicName}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#173e3a]">
            Comprehensive Dental Services
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Delivering advanced, comfortable dental care from conservative root canal preservation to permanent digital implant rehabilitation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-3xl p-7 border border-[#d8e1dd] shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                    {s.duration}
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    {s.startingPrice}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#173e3a] group-hover:text-teal-700 transition-colors">
                  {s.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {s.shortDesc}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  {s.benefits.slice(0, 3).map((b, i) => (
                    <div key={i} className="flex items-start gap-2">
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
                  className="px-4 py-2 rounded-xl bg-[#173e3a] hover:bg-teal-900 text-white font-medium text-xs transition-colors cursor-pointer"
                >
                  {t.btnBookAppointment}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
