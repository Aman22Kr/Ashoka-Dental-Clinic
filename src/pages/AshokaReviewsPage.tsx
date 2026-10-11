import React, { useState } from 'react';
import { Star, CheckCircle2, MessageSquare, Calendar } from 'lucide-react';
import { PATIENT_TESTIMONIALS } from '../data/clinicData';
import { useClinicConfig } from '../context/ClinicConfigContext';
import { SupportedLanguage, TRANSLATIONS, TranslationDictionary } from '../data/translations';

interface AshokaReviewsPageProps {
  currentLanguage: SupportedLanguage;
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const AshokaReviewsPage: React.FC<AshokaReviewsPageProps> = ({
  currentLanguage,
  onNavigate,
  onOpenBooking,
}) => {
  const { config } = useClinicConfig();
  const t: TranslationDictionary = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const [filterRating, setFilterRating] = useState<number | 'all'>('all');

  const filtered = filterRating === 'all' 
    ? PATIENT_TESTIMONIALS 
    : PATIENT_TESTIMONIALS.filter(r => r.rating === filterRating);

  return (
    <div className="font-outfit bg-[#f8faf9] text-slate-800 min-h-screen py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Patient Stories
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#173e3a]">
            {t.testimonialsTitle}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.testimonialsSubtitle}
          </p>

          <div className="pt-2 flex items-center justify-center gap-2">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-slate-800 text-sm">4.9 / 5.0</span>
            <span className="text-xs text-slate-400">· Over 5,000+ happy smiles</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-7 border border-[#d8e1dd] shadow-2xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-bold border border-emerald-200">
                    Verified Patient
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 block">{rev.author}</span>
                  <span className="text-[10px] text-slate-400">{rev.location}</span>
                </div>
                <span className="text-[11px] font-semibold text-teal-700">
                  {rev.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#edf6f4] rounded-3xl p-8 text-center max-w-xl mx-auto border border-[#cbe0d9] space-y-3">
          <h3 className="text-lg font-bold text-[#173e3a]">
            Ready to experience gentle, pain-free dental care?
          </h3>
          <p className="text-xs text-slate-600">
            Book an appointment today with {config.doctorName || 'our dental specialists'} at {config.clinicName}.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-[#173e3a] hover:bg-teal-900 text-white font-bold text-xs shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>Book Your First Visit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
