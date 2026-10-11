import React, { useState } from 'react';
import { 
  Plane, 
  Globe2, 
  DollarSign, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Hotel, 
  Car, 
  Send, 
  FileText,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { 
  TOURISM_COST_COMPARISONS, 
  TOURISM_PACKAGES, 
  SIGHTSEEING_SPOTS, 
  CONCIERGE_STEPS,
  CostComparisonItem 
} from '../data/tourismData';
import { useClinicConfig } from '../context/ClinicConfigContext';
import { SupportedLanguage } from '../data/translations';

interface AshokaTourismPageProps {
  currentLanguage: SupportedLanguage;
  onNavigate: (path: string) => void;
  onOpenBooking: (serviceSlug?: string) => void;
}

type CurrencyCode = 'USD' | 'GBP' | 'EUR' | 'AUD' | 'AED' | 'INR';

export const AshokaTourismPage: React.FC<AshokaTourismPageProps> = ({
  currentLanguage,
  onNavigate,
  onOpenBooking,
}) => {
  const { config } = useClinicConfig();
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>('USD');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    fullName: '',
    emailOrPhone: '',
    country: '',
    treatmentsNeeded: 'Dental Implants & Crowns',
    preferredDays: '5-7 Days',
    message: '',
  });

  const getForeignPrice = (item: CostComparisonItem) => {
    switch (selectedCurrency) {
      case 'GBP':
        return `£${item.ukPriceGBP.toLocaleString()}`;
      case 'EUR':
        return `€${Math.round(item.usaPriceUSD * 0.92).toLocaleString()}`;
      case 'AUD':
        return `A$${item.australiaPriceAUD.toLocaleString()}`;
      case 'AED':
        return `AED ${item.uaePriceAED.toLocaleString()}`;
      case 'INR':
        return item.indiaPriceINR;
      case 'USD':
      default:
        return `$${item.usaPriceUSD.toLocaleString()}`;
    }
  };

  const getIndiaEquivalentPrice = (item: CostComparisonItem) => {
    switch (selectedCurrency) {
      case 'GBP':
        return `£${Math.round(item.indiaPriceUSD * 0.77)}`;
      case 'EUR':
        return `€${Math.round(item.indiaPriceUSD * 0.92)}`;
      case 'AUD':
        return `A$${Math.round(item.indiaPriceUSD * 1.5)}`;
      case 'AED':
        return `AED ${Math.round(item.indiaPriceUSD * 3.67)}`;
      case 'INR':
        return item.indiaPriceINR;
      case 'USD':
      default:
        return `$${item.indiaPriceUSD}`;
    }
  };

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fafcfb] text-[#173e3a]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#edf6f4] via-[#f3f8f6] to-[#fafcfb] py-14 sm:py-18 px-4 sm:px-6 border-b border-[#d8e1dd]/70 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-teal-200/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/90 border border-teal-200/70 text-teal-800 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 shadow-xs">
              <Plane className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
              <span>International & Interstate Patient Program</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-extrabold text-[#173e3a] tracking-tight leading-tight">
              World-Class Dental Care in India with Up to 80% Cost Savings.
            </h1>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Combine cutting-edge restorative dental treatments—Swiss & German implants, single-sitting root canals, and invisible aligners—with an unforgettable cultural vacation in South India. Enjoy seamless airport pickups, boutique hotel arrangements, and personal concierge care.
            </p>

            {/* Quick Metrics */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white/90 rounded-2xl p-4 border border-[#d8e1dd]/80 shadow-xs">
                <span className="text-2xl font-outfit font-black text-teal-800">70-80%</span>
                <span className="block text-[11px] text-slate-500 font-medium mt-0.5">Average Cost Savings</span>
              </div>
              <div className="bg-white/90 rounded-2xl p-4 border border-[#d8e1dd]/80 shadow-xs">
                <span className="text-2xl font-outfit font-black text-teal-800">3-7 Days</span>
                <span className="block text-[11px] text-slate-500 font-medium mt-0.5">Fast-Track Turnaround</span>
              </div>
              <div className="bg-white/90 rounded-2xl p-4 border border-[#d8e1dd]/80 shadow-xs">
                <span className="text-2xl font-outfit font-black text-teal-800">100%</span>
                <span className="block text-[11px] text-slate-500 font-medium mt-0.5">FDA & CE Materials</span>
              </div>
              <div className="bg-white/90 rounded-2xl p-4 border border-[#d8e1dd]/80 shadow-xs">
                <span className="text-2xl font-outfit font-black text-teal-800">Free</span>
                <span className="block text-[11px] text-slate-500 font-medium mt-0.5">Airport Pickup Assistance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Cost Comparison Calculator */}
      <section className="py-14 px-4 sm:px-6 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Transparent Global Price Benchmarks
            </span>
            <h2 className="text-2xl sm:text-3xl font-outfit font-extrabold text-[#173e3a] mt-1">
              Compare Treatment Costs Worldwide
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Switch currency to see what patients in the US, UK, Australia, and UAE typically pay versus Ashoka Dental Clinic.
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200/80 shadow-xs">
            {(['USD', 'GBP', 'EUR', 'AUD', 'AED', 'INR'] as CurrencyCode[]).map((cur) => (
              <button
                key={cur}
                onClick={() => setSelectedCurrency(cur)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCurrency === cur
                    ? 'bg-teal-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-teal-900 hover:bg-slate-100'
                }`}
              >
                {cur}
              </button>
            ))}
          </div>
        </div>

        {/* Cost Comparison Table */}
        <div className="bg-white rounded-2xl border border-[#d8e1dd] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#edf6f4]/60 border-b border-[#d8e1dd] text-xs font-bold text-teal-900 uppercase tracking-wider">
                  <th className="py-4 px-5">Dental Procedure</th>
                  <th className="py-4 px-5">Standard Cost in {selectedCurrency === 'INR' ? 'International Clinics' : selectedCurrency}</th>
                  <th className="py-4 px-5 bg-teal-50/50 text-teal-900">Ashoka Dental Clinic</th>
                  <th className="py-4 px-5 text-right">You Save</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {TOURISM_COST_COMPARISONS.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-5 font-semibold text-slate-800">
                      {item.procedure}
                    </td>
                    <td className="py-4 px-5 text-slate-500 line-through">
                      {getForeignPrice(item)}
                    </td>
                    <td className="py-4 px-5 font-bold text-teal-900 bg-teal-50/30">
                      {getIndiaEquivalentPrice(item)}
                    </td>
                    <td className="py-4 px-5 text-right">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800">
                        Save {item.savingsPercent}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-200/60 text-[11px] text-slate-500 flex items-center justify-between">
            <span>* Prices include clinical consultations, digital diagnostics, and genuine CE/FDA certified materials.</span>
            <span className="font-semibold text-teal-800">Zero Hidden Taxes or Unexpected Charges</span>
          </div>
        </div>
      </section>

      {/* Curated Fast-Track Dental Tourism Packages */}
      <section className="py-12 px-4 sm:px-6 bg-[#f4f9f7] border-y border-[#d8e1dd]/70">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Turnkey Dental Vacation Packages
            </span>
            <h2 className="text-2xl sm:text-3xl font-outfit font-extrabold text-[#173e3a] mt-1">
              Popular All-Inclusive Travel Packages
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Designed for travelers seeking streamlined appointments, priority dental lab turnaround, and local concierge support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOURISM_PACKAGES.map((pkg) => (
              <div 
                key={pkg.id}
                className="bg-white rounded-3xl border border-[#d8e1dd] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                      {pkg.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {pkg.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-outfit font-bold text-[#173e3a]">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {pkg.idealFor}
                  </p>

                  {/* Procedures */}
                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                      Included Dental Care
                    </span>
                    {pkg.includedProcedures.map((proc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{proc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Concierge Perks */}
                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-teal-700 block">
                      Concierge Travel Benefits
                    </span>
                    {pkg.conciergePerks.map((perk, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">Starting From</span>
                    <span className="text-base font-extrabold text-teal-900">
                      ${pkg.startingPriceUSD} / {pkg.startingPriceINR}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(pkg.id)}
                    className="bg-[#173e3a] hover:bg-teal-900 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Patient Journey */}
      <section className="py-14 px-4 sm:px-6 max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
            How Your Trip Works
          </span>
          <h2 className="text-2xl sm:text-3xl font-outfit font-extrabold text-[#173e3a] mt-1">
            4 Simple Steps from Virtual Quote to Flying Home
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONCIERGE_STEPS.map((step) => (
            <div key={step.step} className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs relative">
              <div className="w-9 h-9 rounded-full bg-teal-800 text-white font-extrabold text-sm flex items-center justify-center mb-4">
                0{step.step}
              </div>
              <h3 className="font-outfit font-bold text-base text-[#173e3a]">
                {step.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Vellore: Local Sightseeing */}
      <section className="py-14 px-4 sm:px-6 bg-[#edf6f4]/60 border-t border-[#d8e1dd]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Explore While You Heal
              </span>
              <h2 className="text-2xl sm:text-3xl font-outfit font-extrabold text-[#173e3a] mt-1">
                Sightseeing Around Vellore & Tamil Nadu
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Take advantage of your rest days to visit world-renowned architectural, spiritual, and nature landmarks.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SIGHTSEEING_SPOTS.slice(0, 3).map((spot) => (
              <div key={spot.id} className="bg-white rounded-2xl border border-[#d8e1dd] p-5 shadow-xs">
                <div className="flex items-center justify-between text-xs font-semibold text-teal-700 mb-2">
                  <span className="bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                    {spot.tag}
                  </span>
                  <span className="text-slate-500">{spot.distanceFromClinic} · {spot.travelTime}</span>
                </div>
                <h3 className="font-outfit font-bold text-base text-[#173e3a] mt-2">
                  {spot.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {spot.description}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-teal-900 font-medium">
                  ✨ Highlight: {spot.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Virtual Consultation & Estimate Form */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl border border-[#d8e1dd] p-8 sm:p-10 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              No Obligation Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-outfit font-extrabold text-[#173e3a] mt-1">
              Get Your Free Treatment & Travel Estimate
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Send us your dental details or photos. Dr. [Doctor Name] will review your case and deliver an itemized roadmap within 24 hours.
            </p>
          </div>

          {quoteSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-fade-in">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              <h3 className="font-outfit font-bold text-lg text-emerald-900">
                Inquiry Received Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-emerald-700 mt-1 max-w-md mx-auto">
                Thank you! Our international patient coordinator and Dr. [Doctor Name] will analyze your requirements and connect with you via email/WhatsApp within 24 hours.
              </p>
              <button
                onClick={() => setQuoteSubmitted(false)}
                className="mt-4 px-4 py-2 bg-white text-emerald-800 border border-emerald-300 rounded-xl text-xs font-bold hover:bg-emerald-100 transition-colors cursor-pointer"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitQuote} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Miller"
                    value={quoteForm.fullName}
                    onChange={(e) => setQuoteForm({ ...quoteForm, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8e1dd] text-xs sm:text-sm bg-[#fafcfb] focus:bg-white focus:outline-hidden focus:border-teal-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Email or WhatsApp Number *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. +1 555-0199 or email"
                    value={quoteForm.emailOrPhone}
                    onChange={(e) => setQuoteForm({ ...quoteForm, emailOrPhone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8e1dd] text-xs sm:text-sm bg-[#fafcfb] focus:bg-white focus:outline-hidden focus:border-teal-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Home Country / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. London, United Kingdom"
                    value={quoteForm.country}
                    onChange={(e) => setQuoteForm({ ...quoteForm, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8e1dd] text-xs sm:text-sm bg-[#fafcfb] focus:bg-white focus:outline-hidden focus:border-teal-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Primary Treatment Desired
                  </label>
                  <select
                    value={quoteForm.treatmentsNeeded}
                    onChange={(e) => setQuoteForm({ ...quoteForm, treatmentsNeeded: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8e1dd] text-xs sm:text-sm bg-[#fafcfb] focus:bg-white focus:outline-hidden focus:border-teal-700"
                  >
                    <option value="Dental Implants & Crowns">Dental Implants & Crowns</option>
                    <option value="Single-Sitting Root Canal">Single-Sitting Root Canal</option>
                    <option value="Clear Invisible Aligners">Clear Invisible Aligners</option>
                    <option value="Porcelain Veneers / Smile Design">Porcelain Veneers / Smile Design</option>
                    <option value="Full Mouth Rehabilitation">Full Mouth Rehabilitation</option>
                    <option value="General Checkup & Cleaning">General Checkup & Cleaning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Describe Your Symptoms / Preferred Travel Dates
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details about your teeth condition, prior dental work, or dates you plan to visit..."
                  value={quoteForm.message}
                  onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8e1dd] text-xs sm:text-sm bg-[#fafcfb] focus:bg-white focus:outline-hidden focus:border-teal-700"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-slate-500">
                  🔒 We respect your privacy. Medical information is treated with strict confidentiality.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#173e3a] hover:bg-teal-900 text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-teal-300" />
                  <span>Request Free Digital Quote</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
