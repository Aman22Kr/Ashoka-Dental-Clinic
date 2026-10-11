import React from 'react';
import { 
  CreditCard, 
  Check, 
  HelpCircle, 
  ShieldCheck, 
  Calendar, 
  ArrowRight, 
  Building2 
} from 'lucide-react';
import { CLINIC_SERVICES } from '../data/clinicData';
import { useClinicConfig } from '../context/ClinicConfigContext';
import { SupportedLanguage, TRANSLATIONS, TranslationDictionary } from '../data/translations';
import { getTranslatedClinicServices } from '../data/translatedData';

interface AshokaPricingPageProps {
  currentLanguage: SupportedLanguage;
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const AshokaPricingPage: React.FC<AshokaPricingPageProps> = ({
  currentLanguage,
  onNavigate,
  onOpenBooking,
}) => {
  const { config } = useClinicConfig();
  const t: TranslationDictionary = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const clinicalServices = getTranslatedClinicServices(currentLanguage);

  return (
    <div className="font-outfit bg-[#f8faf9] text-slate-800 min-h-screen py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            {config.clinicName} Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#173e3a]">
            {t.pricingTitle}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.pricingSubtitle}
          </p>
        </div>

        {/* 0% EMI Banner */}
        <div className="bg-gradient-to-r from-[#173e3a] via-[#1b4b45] to-[#123632] text-white rounded-3xl p-8 sm:p-10 mb-12 shadow-xl border border-teal-700/40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <span className="inline-block bg-teal-400/20 text-teal-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                0% Interest EMI Facility
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Quality Dental Healthcare Without Financial Stress
              </h2>
              <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed max-w-xl">
                High-value procedures such as dental implants, clear invisible aligners, and monolithic zirconia crowns can be divided into convenient 3, 6, 9, or 12 monthly payments with zero hidden fees.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-teal-200">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400" /> Instant digital approval</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400" /> All major credit & debit cards</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400" /> Bajaj Finserv accepted</span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-center sm:items-end">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-teal-950 font-bold rounded-xl text-xs shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation & Discuss EMI</span>
              </button>
            </div>
          </div>
        </div>

        {/* Itemized Procedure Fee Table */}
        <div className="bg-white rounded-3xl p-8 border border-[#d8e1dd] shadow-sm mb-12">
          <h2 className="text-lg font-bold text-[#173e3a] uppercase tracking-wider mb-6">
            Transparent Dental Procedure Estimates
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-4 font-semibold">Treatment / Procedure</th>
                  <th className="py-3 px-4 font-semibold">Duration</th>
                  <th className="py-3 px-4 font-semibold">Estimated Fee</th>
                  <th className="py-3 px-4 font-semibold">Warranty / Follow-Up</th>
                  <th className="py-3 px-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {clinicalServices.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-800">
                      {s.title}
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      {s.duration}
                    </td>
                    <td className="py-4 px-4 font-bold text-teal-800 text-sm">
                      {s.startingPrice}
                    </td>
                    <td className="py-4 px-4 text-slate-500 text-[11px]">
                      Complimentary 6-month review
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={onOpenBooking}
                        className="px-3 py-1.5 rounded-lg bg-[#173e3a] text-white hover:bg-teal-900 font-medium text-[11px] transition-colors cursor-pointer"
                      >
                        {t.btnBookAppointment}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
