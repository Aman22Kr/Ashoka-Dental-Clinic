import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { useClinicConfig } from '../context/ClinicConfigContext';
import { CLINIC_SERVICES } from '../data/clinicData';
import { SupportedLanguage, TRANSLATIONS, TranslationDictionary } from '../data/translations';
import { getTranslatedClinicServices } from '../data/translatedData';

interface AshokaBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceSlug?: string;
  currentLanguage: SupportedLanguage;
}

export const AshokaBookingModal: React.FC<AshokaBookingModalProps> = ({
  isOpen,
  onClose,
  defaultServiceSlug,
  currentLanguage,
}) => {
  const { config } = useClinicConfig();
  const t: TranslationDictionary = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const clinicalServices = getTranslatedClinicServices(currentLanguage);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState(defaultServiceSlug || 'root-canal-treatment');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('morning');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200 font-outfit">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#173e3a] p-6 text-white flex items-center justify-between">
          <div>
            <span className="text-[11px] text-teal-300 font-semibold uppercase tracking-wider block">
              {config.clinicName}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-white mt-0.5">
              {t.btnBookAppointment}
            </h3>
            <p className="text-xs text-teal-200/80 mt-1">
              Complimentary consultation & digital diagnostic evaluation
            </p>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-xl text-teal-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center mx-auto ring-8 ring-teal-50/50">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Appointment Requested!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{fullName || 'Patient'}</strong>. Our clinical coordination desk at {config.clinicName} has received your request.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">Clinic:</span>
                  <span className="font-semibold text-slate-800">{config.clinicName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-semibold text-slate-800 capitalize">{selectedService.replace(/-/g, ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Timing:</span>
                  <span className="font-semibold text-slate-800">{preferredDate || 'Preferred Date'} ({preferredTime})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Helpline:</span>
                  <span className="font-semibold text-teal-700">{config.phoneNumber || 'Available upon inquiry'}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold transition-all shadow-md"
                >
                  Close & Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Service Selection */}
              <div className="space-y-1">
                <label className="font-semibold text-slate-700 block">
                  Select Treatment / Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-teal-600"
                >
                  {clinicalServices.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">
                    Patient Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Anand Sharma"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-teal-600"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">
                    Phone / Mobile *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-teal-600"
                    />
                  </div>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-teal-600"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 block">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-teal-600"
                    >
                      <option value="morning">Morning (9:30 AM - 1:00 PM)</option>
                      <option value="afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
                      <option value="evening">Evening (5:00 PM - 8:30 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="font-semibold text-slate-700 block">
                  Dental Symptoms / Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about any toothache, sensitivity, or previous treatment..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-teal-600"
                />
              </div>

              {/* Trust badge */}
              <div className="p-3 bg-teal-50/70 border border-teal-100 rounded-xl flex items-center gap-2 text-[11px] text-teal-800">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Zero wait time with prior slot reservation · All hospital sterilization protocols observed</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3 bg-[#173e3a] hover:bg-[#20514c] text-white font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 text-xs"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>Confirm Consultation Request</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
