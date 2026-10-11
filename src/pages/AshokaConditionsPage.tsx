import React from 'react';
import { 
  AlertTriangle, 
  Check, 
  ArrowRight, 
  ChevronRight, 
  ShieldAlert, 
  Phone, 
  Calendar 
} from 'lucide-react';
import { CLINIC_CONDITIONS, ConditionItem } from '../data/clinicData';
import { SupportedLanguage, TRANSLATIONS, TranslationDictionary } from '../data/translations';
import { useClinicConfig } from '../context/ClinicConfigContext';

interface AshokaConditionsPageProps {
  currentConditionSlug?: string;
  currentLanguage: SupportedLanguage;
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const AshokaConditionsPage: React.FC<AshokaConditionsPageProps> = ({
  currentConditionSlug,
  currentLanguage,
  onNavigate,
  onOpenBooking,
}) => {
  const { config } = useClinicConfig();
  const t: TranslationDictionary = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const selectedCondition: ConditionItem | undefined = currentConditionSlug
    ? CLINIC_CONDITIONS.find((c) => c.slug === currentConditionSlug)
    : undefined;

  if (selectedCondition) {
    return (
      <div className="font-outfit bg-[#f8faf9] text-slate-800 min-h-screen py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-teal-800">
              {t.navHome}
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button onClick={() => onNavigate('conditions')} className="hover:text-teal-800">
              {t.navConditions}
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-bold text-slate-800">{selectedCondition.title}</span>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#d8e1dd] shadow-md mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                selectedCondition.urgency === 'Emergency'
                  ? 'bg-rose-100 text-rose-800 border border-rose-200'
                  : 'bg-teal-100 text-teal-800 border border-teal-200'
              }`}>
                Urgency Level: {selectedCondition.urgency}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#173e3a] mb-4">
              {selectedCondition.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {/* Symptoms */}
              <div className="p-6 rounded-2xl bg-[#fdf5f5] border border-rose-100 space-y-3">
                <h3 className="font-bold text-rose-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-rose-700" /> Common Symptoms
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedCondition.symptoms.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Causes */}
              <div className="p-6 rounded-2xl bg-[#f5f7f9] border border-slate-200 space-y-3">
                <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" /> Root Causes
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedCondition.causes.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatments */}
              <div className="p-6 rounded-2xl bg-[#edf6f4] border border-[#cbe0d9] space-y-3">
                <h3 className="font-bold text-teal-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-teal-700" /> Recommended Solutions
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedCondition.treatments.map((tr, i) => (
                    <li key={i} className="flex items-start gap-2 font-medium">
                      <Check className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                      <span>{tr}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-[#173e3a] hover:bg-[#20514c] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>Book Relief Consultation</span>
              </button>

              <a
                href={config.phoneNumber && !config.phoneNumber.includes('[') && !config.phoneNumber.includes('—') ? `tel:${config.phoneNumber}` : '#contact'}
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-200 shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call Emergency Helpline</span>
              </a>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('conditions')}
              className="px-6 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold transition-colors"
            >
              ← Back to All Dental Conditions
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-outfit bg-[#f8faf9] text-slate-800 min-h-screen py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Symptom Checker
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#173e3a]">
            Common Dental Conditions & Solutions
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Understand your symptoms, potential causes, and how our gentle, modern dental care can restore your oral comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_CONDITIONS.map((cond) => (
            <div
              key={cond.id}
              className="bg-white rounded-3xl p-7 border border-[#d8e1dd] shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    cond.urgency === 'Emergency'
                      ? 'bg-rose-100 text-rose-800 border border-rose-200'
                      : 'bg-teal-100 text-teal-800 border border-teal-200'
                  }`}>
                    {cond.urgency}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#173e3a]">
                  {cond.title}
                </h3>

                <div className="mt-4 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Typical Signs:
                  </span>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {cond.symptoms.slice(0, 3).map((sym, i) => (
                      <li key={i} className="line-clamp-1">
                        • {sym}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(`condition/${cond.slug}`)}
                  className="text-xs font-semibold text-teal-800 hover:text-teal-950 flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Care Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenBooking}
                  className="px-3 py-1.5 rounded-lg bg-[#173e3a] text-white text-xs font-semibold hover:bg-teal-900 transition-colors"
                >
                  Book Relief
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
