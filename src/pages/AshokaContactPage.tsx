import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  MessageCircle, 
  CheckCircle2, 
  Car, 
  ShieldCheck, 
  Send 
} from 'lucide-react';
import { useClinicConfig } from '../context/ClinicConfigContext';
import { SupportedLanguage, TRANSLATIONS, TranslationDictionary } from '../data/translations';

interface AshokaContactPageProps {
  currentLanguage: SupportedLanguage;
  onOpenBooking: () => void;
}

export const AshokaContactPage: React.FC<AshokaContactPageProps> = ({
  currentLanguage,
  onOpenBooking,
}) => {
  const { config } = useClinicConfig();
  const t: TranslationDictionary = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setInquiryName('');
      setInquiryPhone('');
      setInquiryMessage('');
    }, 4000);
  };

  return (
    <div className="font-outfit bg-[#f8faf9] text-slate-800 min-h-screen py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            {config.clinicName}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#173e3a]">
            {t.visitTitle}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.visitSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#d8e1dd] shadow-xs space-y-6">
              <h2 className="text-base font-bold text-[#173e3a] uppercase tracking-wider">
                Direct Clinic Coordinates
              </h2>

              <div className="space-y-4 text-xs">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0 text-teal-800">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#173e3a]">{t.visitAddressHeading}</h4>
                    <p className="text-slate-700 mt-0.5">{config.addressLine1}</p>
                    <p className="text-slate-500">{config.addressLine2}, {config.city}, {config.state} - {config.postalCode}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0 text-teal-800">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#173e3a]">{t.visitPhoneHeading}</h4>
                    <p className="text-slate-700 mt-0.5 font-semibold">{config.phoneNumber || '—'}</p>
                    <p className="text-slate-500">WhatsApp: {config.whatsappNumber || '—'}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0 text-teal-800">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#173e3a]">Email Address</h4>
                    <p className="text-slate-700 mt-0.5">{config.email}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0 text-teal-800">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#173e3a]">{t.visitHoursHeading}</h4>
                    <p className="text-slate-700 mt-0.5">{t.visitHoursText}</p>
                    <p className="text-slate-500">Emergency support available on-call</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking & Accessibility */}
            <div className="bg-[#edf6f4] rounded-3xl p-6 border border-[#cbe0d9] space-y-2 text-xs">
              <span className="font-bold text-[#173e3a] flex items-center gap-1.5">
                <Car className="w-4 h-4 text-teal-700" /> {t.visitDirectionsHeading}
              </span>
              <p className="text-slate-600 leading-relaxed">
                Dedicated visitor car parking available directly at clinic premises. Fully wheelchair accessible with ground floor elevator connectivity.
              </p>
            </div>
          </div>

          {/* Right: Simulated Inquiry & Map Card */}
          <div className="lg:col-span-7 space-y-6">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 border border-[#d8e1dd] shadow-md">
              <h3 className="text-xl font-bold text-[#173e3a] mb-1">
                Send a Message or Consultation Inquiry
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Our front desk team will contact you within 15 minutes during clinical hours.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900">Message Received!</h4>
                  <p className="text-xs text-emerald-800">
                    Thank you, {inquiryName}. {config.clinicName} coordination desk will call you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Patient Name *</label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="e.g. Anand Sharma"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-teal-600"
                      />
                    </div>

                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Mobile / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-teal-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Your Dental Concern or Inquiry</label>
                    <textarea
                      rows={4}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder="Describe your toothache, required treatment, or preferred appointment slot..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-teal-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#173e3a] hover:bg-[#20514c] text-white font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-teal-300" />
                    <span>Send Message to {config.clinicName}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Map Placeholder Card (Vellore Dental Style) */}
            <div className="bg-white rounded-3xl p-6 border border-[#d8e1dd] shadow-xs overflow-hidden">
              <div className="h-48 sm:h-60 rounded-2xl bg-[#edf6f4] border border-[#cbe0d9] flex flex-col items-center justify-center text-center p-6 space-y-2 relative">
                <div className="w-12 h-12 rounded-full bg-[#173e3a] text-white flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-teal-300" />
                </div>
                <h4 className="font-bold text-sm text-[#173e3a]">
                  {config.clinicName} Location Map
                </h4>
                <p className="text-xs text-slate-600 max-w-sm">
                  {config.addressLine1}, {config.addressLine2}, {config.city}
                </p>
                <span className="text-[10px] bg-white px-3 py-1 rounded-full text-teal-800 font-bold border border-teal-200 shadow-2xs">
                  Easy Landmark Access · Near Main Transit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
