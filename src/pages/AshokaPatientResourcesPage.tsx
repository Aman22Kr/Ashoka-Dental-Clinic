import React, { useState } from 'react';
import { 
  Users, 
  FileCheck, 
  ShieldCheck, 
  CreditCard, 
  ClipboardList, 
  Download, 
  Printer, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  Sparkles, 
  HeartHandshake, 
  Clock, 
  PhoneCall,
  Calendar,
  Layers,
  Send
} from 'lucide-react';
import { 
  CARE_INSTRUCTION_GUIDES, 
  STERILIZATION_PROTOCOLS, 
  FINANCING_PLANS, 
  NEW_PATIENT_CHECKLIST,
  CareInstructionGuide 
} from '../data/patientResourcesData';
import { useClinicConfig } from '../context/ClinicConfigContext';
import { SupportedLanguage } from '../data/translations';

interface AshokaPatientResourcesPageProps {
  currentLanguage: SupportedLanguage;
  onNavigate: (path: string) => void;
  onOpenBooking: (serviceSlug?: string) => void;
}

export const AshokaPatientResourcesPage: React.FC<AshokaPatientResourcesPageProps> = ({
  currentLanguage,
  onNavigate,
  onOpenBooking,
}) => {
  const { config } = useClinicConfig();

  const [activeTab, setActiveTab] = useState<'care-guides' | 'sterilization' | 'financing' | 'checklist'>('care-guides');
  const [expandedCareId, setExpandedCareId] = useState<string>(CARE_INSTRUCTION_GUIDES[0].id);

  // Quick Health Intake Form
  const [intakeSubmitted, setIntakeSubmitted] = useState(false);
  const [intakeData, setIntakeData] = useState({
    patientName: '',
    phone: '',
    age: '',
    chiefComplaint: '',
    medicalConditions: [] as string[],
    allergies: '',
  });

  const toggleMedicalCondition = (cond: string) => {
    setIntakeData(prev => ({
      ...prev,
      medicalConditions: prev.medicalConditions.includes(cond)
        ? prev.medicalConditions.filter(c => c !== cond)
        : [...prev.medicalConditions, cond]
    }));
  };

  const handlePrintGuide = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#fafcfb] text-[#173e3a]">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#edf6f4] via-[#f4f9f7] to-[#fafcfb] py-14 px-4 sm:px-6 border-b border-[#d8e1dd]/70 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/90 border border-teal-200/70 text-teal-800 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 shadow-xs">
              <Users className="w-3.5 h-3.5 text-teal-600" />
              <span>Comprehensive Patient Resource Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-extrabold text-[#173e3a] tracking-tight leading-tight">
              Everything You Need for a Seamless, Comfortable Visit.
            </h1>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Access pre & post-operative care instructions, hospital-grade sterilization audits, flexible 0% EMI financing plans, and digital new patient onboarding forms.
            </p>

            {/* Quick Navigation Tabs */}
            <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              <button
                onClick={() => setActiveTab('care-guides')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'care-guides'
                    ? 'bg-[#173e3a] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-[#d8e1dd] hover:bg-slate-50'
                }`}
              >
                <FileCheck className="w-4 h-4" />
                <span>Pre & Post-Op Care Guides</span>
              </button>

              <button
                onClick={() => setActiveTab('sterilization')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'sterilization'
                    ? 'bg-[#173e3a] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-[#d8e1dd] hover:bg-slate-50'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>7-Step Sterilization Audit</span>
              </button>

              <button
                onClick={() => setActiveTab('financing')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'financing'
                    ? 'bg-[#173e3a] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-[#d8e1dd] hover:bg-slate-50'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>0% EMI & Financing</span>
              </button>

              <button
                onClick={() => setActiveTab('checklist')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'checklist'
                    ? 'bg-[#173e3a] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-[#d8e1dd] hover:bg-slate-50'
                }`}
              >
                <ClipboardList className="w-4 h-4" />
                <span>New Patient Checklist</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <section className="py-12 px-4 sm:px-6 max-w-[1280px] mx-auto">
        {/* Tab 1: Pre & Post-Op Care Guides */}
        {activeTab === 'care-guides' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Treatment Aftercare Instructions
                </span>
                <h2 className="text-2xl font-outfit font-extrabold text-[#173e3a] mt-1">
                  Follow-Up Care for Swift, Pain-Free Recovery
                </h2>
              </div>

              <button
                onClick={handlePrintGuide}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Instructions</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {CARE_INSTRUCTION_GUIDES.map((guide) => {
                const isExpanded = expandedCareId === guide.id;
                return (
                  <div
                    key={guide.id}
                    className="bg-white rounded-2xl border border-[#d8e1dd] shadow-xs overflow-hidden transition-all"
                  >
                    {/* Header bar */}
                    <button
                      onClick={() => setExpandedCareId(isExpanded ? '' : guide.id)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800">
                          <FileCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-outfit font-bold text-base text-[#173e3a]">
                            {guide.title}
                          </h3>
                          <span className="text-xs text-slate-500">{guide.treatmentName}</span>
                        </div>
                      </div>

                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </button>

                    {/* Expandable Content */}
                    {isExpanded && (
                      <div className="px-5 pb-6 border-t border-slate-100 pt-4 space-y-6 animate-fade-in">
                        {/* Pre-Op */}
                        <div className="bg-[#edf6f4]/60 p-4 rounded-xl border border-[#d8e1dd]/60">
                          <h4 className="text-xs uppercase font-bold text-teal-900 tracking-wider mb-2">
                            Pre-Procedure Preparation
                          </h4>
                          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                            {guide.preOpAdvice.map((adv, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-teal-600 font-bold">•</span>
                                <span>{adv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Post-Op Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl border border-slate-200">
                            <h4 className="text-xs uppercase font-bold text-slate-700 tracking-wider mb-2">
                              First 24 Hours Protocol
                            </h4>
                            <ul className="space-y-1.5 text-xs text-slate-600">
                              {guide.postOpAdvice.immediateFirst24Hours.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-4 rounded-xl border border-slate-200">
                            <h4 className="text-xs uppercase font-bold text-slate-700 tracking-wider mb-2">
                              Days 2 to 7 Healing Phase
                            </h4>
                            <ul className="space-y-1.5 text-xs text-slate-600">
                              {guide.postOpAdvice.days2To7.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* What to avoid & when to call */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80">
                            <h4 className="text-xs uppercase font-bold text-amber-900 tracking-wider mb-2 flex items-center gap-1.5">
                              <AlertCircle className="w-4 h-4 text-amber-600" />
                              <span>Important: What to Avoid</span>
                            </h4>
                            <ul className="space-y-1.5 text-xs text-amber-900/90">
                              {guide.postOpAdvice.whatToAvoid.map((item, i) => (
                                <li key={i}>⚠️ {item}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/80">
                            <h4 className="text-xs uppercase font-bold text-rose-900 tracking-wider mb-2 flex items-center gap-1.5">
                              <PhoneCall className="w-4 h-4 text-rose-600" />
                              <span>When to Call the Clinic Immediately</span>
                            </h4>
                            <ul className="space-y-1.5 text-xs text-rose-900/90">
                              {guide.postOpAdvice.whenToCallUs.map((item, i) => (
                                <li key={i}>🚨 {item}</li>
                              ))}
                            </ul>
                            <div className="mt-3 pt-2 border-t border-rose-200/60 text-xs font-bold text-rose-800">
                              Clinic Emergency Line: {config.phoneNumber}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: 7-Step Sterilization Audit */}
        {activeTab === 'sterilization' && (
          <div className="space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Patient Safety & Infection Control
              </span>
              <h2 className="text-2xl sm:text-3xl font-outfit font-extrabold text-[#173e3a] mt-1">
                Hospital-Grade 7-Step Sterilization Protocol
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                At Ashoka Dental Clinic, every instrument, chair line, and surface follows European Class-B vacuum sterilization standards. We prioritize your health with zero compromises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {STERILIZATION_PROTOCOLS.map((proto) => (
                <div
                  key={proto.stepNumber}
                  className="bg-white rounded-2xl border border-[#d8e1dd] p-6 shadow-xs relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-full bg-teal-100 text-teal-900 font-extrabold text-xs flex items-center justify-center">
                        0{proto.stepNumber}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-teal-800 px-2.5 py-0.5 rounded-full border border-teal-200">
                        {proto.standard}
                      </span>
                    </div>

                    <h3 className="font-outfit font-bold text-base text-[#173e3a]">
                      {proto.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {proto.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-teal-900 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Equipment: {proto.equipment}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: 0% EMI & Financing */}
        {activeTab === 'financing' && (
          <div className="space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Affordable Smile Restorations
              </span>
              <h2 className="text-2xl sm:text-3xl font-outfit font-extrabold text-[#173e3a] mt-1">
                Flexible Payment & 0% Interest EMI Options
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                High-quality dental care should never be delayed due to immediate finances. We partner with top financial institutions for instant, zero-interest payment installments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FINANCING_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-white rounded-3xl border border-[#d8e1dd] p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 mb-3">
                      {plan.interestRate}
                    </span>

                    <h3 className="font-outfit font-bold text-lg text-[#173e3a]">
                      {plan.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-medium">
                      Partner: {plan.partner}
                    </p>

                    <div className="my-4 py-3 border-y border-slate-100 space-y-1 text-xs text-slate-700">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Tenure:</span>
                        <span className="font-bold text-slate-800">{plan.tenure}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Down Payment:</span>
                        <span className="font-bold text-slate-800">{plan.downPayment}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-600">
                      {plan.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => onOpenBooking()}
                      className="w-full py-2.5 bg-[#173e3a] hover:bg-teal-900 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer text-center"
                    >
                      Inquire About EMI Eligibility
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: New Patient Checklist & Digital Intake */}
        {activeTab === 'checklist' && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {NEW_PATIENT_CHECKLIST.map((chk, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-[#d8e1dd] p-6 shadow-xs">
                  <h3 className="font-outfit font-bold text-base text-[#173e3a] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-700" />
                    <span>{chk.title}</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {chk.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Quick Digital Intake Simulation Form */}
            <div className="bg-gradient-to-br from-white to-[#f6faf8] rounded-3xl border border-[#d8e1dd] p-6 sm:p-8 shadow-xs max-w-3xl mx-auto">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Save Time at Front Desk
                </span>
                <h3 className="text-xl font-outfit font-extrabold text-[#173e3a] mt-1">
                  Pre-Register: Fast-Track Digital Medical Intake
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Fill in your basic information before arriving so your clinical chart is ready without paper forms.
                </p>
              </div>

              {intakeSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-fade-in">
                  <CheckCircle2 className="w-9 h-9 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-outfit font-bold text-base text-emerald-900">
                    Pre-Registration Chart Created!
                  </h4>
                  <p className="text-xs text-emerald-700 mt-1">
                    Your details have been pre-registered for your upcoming consultation with Dr. [Doctor Name]. Simply mention your phone number when you walk in.
                  </p>
                  <button
                    onClick={() => setIntakeSubmitted(false)}
                    className="mt-3 px-4 py-1.5 bg-white text-emerald-800 border border-emerald-300 rounded-xl text-xs font-bold hover:bg-emerald-100 transition-colors cursor-pointer"
                  >
                    Edit / Register Another Patient
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setIntakeSubmitted(true); }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Patient Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={intakeData.patientName}
                        onChange={(e) => setIntakeData({ ...intakeData, patientName: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#d8e1dd] text-xs sm:text-sm bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Age
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 34"
                        value={intakeData.age}
                        onChange={(e) => setIntakeData({ ...intakeData, age: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#d8e1dd] text-xs sm:text-sm bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={intakeData.phone}
                      onChange={(e) => setIntakeData({ ...intakeData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-[#d8e1dd] text-xs sm:text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Primary Reason for Visit
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., severe back tooth pain, broken front filling, yellow teeth"
                      value={intakeData.chiefComplaint}
                      onChange={(e) => setIntakeData({ ...intakeData, chiefComplaint: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-[#d8e1dd] text-xs sm:text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Any Existing Medical Conditions? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Diabetes', 'Hypertension (BP)', 'Bleeding Disorders', 'Heart Disease', 'Pregnancy', 'Asthma', 'Thyroid', 'None'].map((cond) => (
                        <button
                          key={cond}
                          type="button"
                          onClick={() => toggleMedicalCondition(cond)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border text-left transition-all cursor-pointer ${
                            intakeData.medicalConditions.includes(cond)
                              ? 'bg-teal-800 text-white border-teal-800'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {cond}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="bg-[#173e3a] hover:bg-teal-900 text-white font-semibold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-xs flex items-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-teal-300" />
                      <span>Submit Pre-Registration</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
