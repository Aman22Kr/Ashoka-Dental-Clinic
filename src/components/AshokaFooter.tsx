import React from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Award, 
  Globe, 
  MessageCircle,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { AshokaLogo } from './AshokaLogo';
import { LANGUAGES, SupportedLanguage, TRANSLATIONS, TranslationDictionary } from '../data/translations';
import { useClinicConfig } from '../context/ClinicConfigContext';
import { CLINIC_CONDITIONS } from '../data/clinicData';
import { getTranslatedClinicServices } from '../data/translatedData';

interface AshokaFooterProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const AshokaFooter: React.FC<AshokaFooterProps> = ({
  currentLanguage,
  onLanguageChange,
  onNavigate,
  onOpenBooking,
}) => {
  const { config } = useClinicConfig();
  const t: TranslationDictionary = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const clinicalServices = getTranslatedClinicServices(currentLanguage);

  const navigateTo = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#102c29] text-teal-100/90 pt-16 pb-12 border-t border-[#1d4642] font-outfit">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1f4a45]">
          {/* Brand & Clinic Summary */}
          <div className="lg:col-span-2 space-y-4">
            <AshokaLogo theme="dark" clinicName={config.clinicName} />

            <p className="text-xs text-teal-200/80 leading-relaxed max-w-sm">
              Patient-centred dental healthcare with unhurried appointments, digital treatment roadmaps, and gentle pain-free clinical dentistry led by <strong>{config.doctorName || 'our experienced surgical team'}</strong>.
            </p>

            {/* Certifications & Badges */}
            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="inline-flex items-center gap-1.5 bg-[#173e3a] border border-[#275a54] px-3 py-1 rounded-full text-teal-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> ISO Hospital Sterilization
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#173e3a] border border-[#275a54] px-3 py-1 rounded-full text-teal-200">
                <Award className="w-3.5 h-3.5 text-amber-400" /> 15+ Years Clinical Practice
              </span>
            </div>

            {/* Direct Contact Items */}
            <div className="pt-2 space-y-2 text-xs text-teal-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{config.addressLine1}, {config.addressLine2}, {config.city}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{t.visitPhoneHeading}: {config.phoneNumber || 'Available upon inquiry'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{t.visitHoursText}</span>
              </div>
            </div>
          </div>

          {/* Specialized Treatments */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-teal-300">
              {t.navServices}
            </h4>
            <ul className="space-y-2 text-xs text-teal-200/80">
              {clinicalServices.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => navigateTo(`service/${s.slug}`)}
                    className="hover:text-white transition-colors text-left flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3 text-teal-500" />
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Dental Conditions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-teal-300">
              {t.navConditions}
            </h4>
            <ul className="space-y-2 text-xs text-teal-200/80">
              {CLINIC_CONDITIONS.map((c) => (
                <li key={c.slug}>
                  <button
                    onClick={() => navigateTo(`condition/${c.slug}`)}
                    className="hover:text-white transition-colors text-left flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3 text-teal-500" />
                    <span>{c.title}</span>
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-[#1f4a45]">
                <button
                  onClick={() => navigateTo('dental-tourism')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1 text-emerald-300 font-semibold"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-400" />
                  <span>Dental Tourism (Save 80%)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('patient-resources')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1 text-teal-300"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>Patient Hub & Aftercare</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('blog')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1 text-teal-300"
                >
                  <ChevronRight className="w-3 h-3 text-teal-400" />
                  <span>Ask the Dentist & Blog</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links & Language Switch */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-teal-300 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Language / மொழி
            </h4>

            {/* Language grid in footer */}
            <div className="grid grid-cols-2 gap-1.5 pt-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code)}
                  className={`text-left px-2 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                    currentLanguage === lang.code
                      ? 'bg-teal-700/80 text-white font-bold'
                      : 'text-teal-200/80 hover:bg-teal-900/60 hover:text-white'
                  }`}
                >
                  <span>{lang.nativeName}</span>
                  <span className="text-[10px] text-teal-400 font-mono">{lang.shortLabel}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-teal-300/70">
          <p>© {new Date().getFullYear()} {config.clinicName}. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4 text-xs">
            <button onClick={() => navigateTo('faq')} className="hover:text-white transition-colors">
              {t.navFaq}
            </button>
            <span>·</span>
            <button onClick={() => navigateTo('doctor')} className="hover:text-white transition-colors">
              {t.navDoctor}
            </button>
            <span>·</span>
            <button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">
              {t.navContact}
            </button>
            <span>·</span>
            <button onClick={() => onOpenBooking()} className="text-teal-200 hover:text-white transition-colors font-semibold">
              {t.btnBookAppointment}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
