import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { useClinicConfig } from '../context/ClinicConfigContext';
import { TRANSLATIONS, SupportedLanguage, TranslationDictionary } from '../data/translations';

interface FloatingQuickMenuProps {
  currentLanguage: SupportedLanguage;
  onOpenBooking: () => void;
}

export const FloatingQuickMenu: React.FC<FloatingQuickMenuProps> = ({
  currentLanguage,
  onOpenBooking,
}) => {
  const { config } = useClinicConfig();
  const t: TranslationDictionary = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 w-[95%] max-w-md md:max-w-lg bg-[#173e3a]/95 backdrop-blur-md text-white p-2 sm:p-2.5 rounded-2xl shadow-2xl border border-teal-600/40 flex items-center justify-between gap-2 font-outfit animate-in slide-in-from-bottom-4 duration-300">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/?text=Hi%2C%20I%20would%20like%20to%20consult%20at%20Ashoka%20Dental%20Clinic`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2 px-2 sm:px-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-all text-center"
      >
        <MessageCircle className="w-4 h-4 shrink-0" />
        <span className="truncate">{t.quickMenuWhatsApp}</span>
      </a>

      {/* Call Button */}
      <a
        href={config.phoneNumber && !config.phoneNumber.includes('[') && !config.phoneNumber.includes('—') ? `tel:${config.phoneNumber}` : '#contact'}
        className="flex-1 py-2 px-2 sm:px-3 bg-teal-800/80 hover:bg-teal-700 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-all text-center border border-teal-600/30"
      >
        <Phone className="w-4 h-4 text-teal-300 shrink-0" />
        <span className="truncate">{t.quickMenuCall}</span>
      </a>

      {/* Book Consultation Button */}
      <button
        onClick={onOpenBooking}
        className="flex-1 py-2 px-2 sm:px-3 bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-teal-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
      >
        <Calendar className="w-4 h-4 shrink-0 text-teal-950" />
        <span className="truncate">{t.quickMenuBook}</span>
      </button>
    </div>
  );
};
