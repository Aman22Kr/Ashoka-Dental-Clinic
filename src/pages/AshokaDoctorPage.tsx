import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Check, 
  Calendar, 
  HeartHandshake, 
  Sparkles, 
  BookOpen
} from 'lucide-react';
import { useClinicConfig } from '../context/ClinicConfigContext';
import { SupportedLanguage, TRANSLATIONS, TranslationDictionary } from '../data/translations';

interface AshokaDoctorPageProps {
  currentLanguage: SupportedLanguage;
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const AshokaDoctorPage: React.FC<AshokaDoctorPageProps> = ({
  currentLanguage,
  onNavigate,
  onOpenBooking,
}) => {
  const { config } = useClinicConfig();
  const t: TranslationDictionary = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  return (
    <div className="font-outfit bg-[#f8faf9] text-slate-800 min-h-screen py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Main Profile Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#d8e1dd] shadow-md mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Avatar Column */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-3xl bg-gradient-to-tr from-[#173e3a] via-teal-800 to-[#102c29] text-white flex items-center justify-center shadow-xl ring-8 ring-teal-50 overflow-hidden relative mb-6">
                <svg viewBox="0 0 100 100" className="w-36 h-36 text-teal-200" fill="currentColor">
                  <circle cx="50" cy="35" r="20" opacity="0.9" />
                  <path d="M15 90c0-18 16-26 35-26s35 8 35 26z" opacity="0.9" />
                </svg>
                <span className="absolute bottom-3 bg-teal-950/80 px-3.5 py-1 rounded-full text-xs text-teal-300 font-mono">
                  {config.doctorExperience}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#173e3a]">
                {config.doctorName || 'Chief Dental Surgeon'}
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-teal-700 mt-1">
                {config.doctorQualifications}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Founder & Chief Dental Surgeon · {config.clinicName}
              </p>
            </div>

            {/* Bio & Clinical Stance */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                {t.doctorSectionTitle}
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#173e3a] leading-tight">
                {t.doctorSectionTitle} · {config.doctorName || 'Dr. Ashoka Dental Surgery'}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.doctorBio.replace('[Doctor Name]', config.doctorName || 'Doctor')}
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3.5 rounded-xl bg-[#edf6f4] border border-[#cbe0d9] space-y-1">
                  <span className="font-bold text-[#173e3a] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-teal-700" /> {t.heroBadgeHospital}
                  </span>
                  <p className="text-[11px] text-slate-600">
                    {t.statCareDesc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#edf6f4] border border-[#cbe0d9] space-y-1">
                  <span className="font-bold text-[#173e3a] flex items-center gap-1.5">
                    <HeartHandshake className="w-4 h-4 text-teal-700" /> {t.statTechTitle}
                  </span>
                  <p className="text-[11px] text-slate-600">
                    {t.statTechDesc}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-xl bg-[#173e3a] hover:bg-[#20514c] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-teal-300" />
                  <span>{t.btnBookAppointment}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Memberships & Standards */}
        <div className="bg-white rounded-3xl p-8 border border-[#d8e1dd] shadow-xs">
          <h3 className="text-base font-bold text-[#173e3a] uppercase tracking-wider mb-4">
            Clinical Standards & Professional Affiliations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Indian Dental Association (IDA)</span>
              <p className="text-slate-500">Active member adhering to national ethical guidelines.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">International Congress of Oral Implantologists</span>
              <p className="text-slate-500">Certified protocols for bone-grafted and guided implants.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">ISO 9001:2015 Clinic Certified</span>
              <p className="text-slate-500">Hospital-standard Class-B multi-cycle sterilization.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
