import React, { useState } from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  Search, 
  ThumbsUp, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Filter
} from 'lucide-react';
import { BLOG_GUIDES, ASK_DENTIST_QUESTIONS, BlogGuideItem, AskDentistQuestion } from '../data/blogGuideData';
import { useClinicConfig } from '../context/ClinicConfigContext';
import { SupportedLanguage } from '../data/translations';

interface AshokaBlogGuidePageProps {
  currentLanguage: SupportedLanguage;
  onNavigate: (path: string) => void;
  onOpenBooking: (serviceSlug?: string) => void;
}

export const AshokaBlogGuidePage: React.FC<AshokaBlogGuidePageProps> = ({
  currentLanguage,
  onNavigate,
  onOpenBooking,
}) => {
  const { config } = useClinicConfig();

  const [activeTab, setActiveTab] = useState<'guides' | 'ask-dentist'>('guides');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGuide, setSelectedGuide] = useState<BlogGuideItem | null>(null);

  // Ask Dentist Form
  const [userQuestion, setUserQuestion] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userQuestionCategory, setUserQuestionCategory] = useState('Root Canal');
  const [questionSubmitted, setQuestionSubmitted] = useState(false);
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({});

  const categories = [
    'All',
    'Root Canal',
    'Dental Implants',
    'Braces & Aligners',
    'Cosmetic Dentistry',
    'Kids Dental Care',
    'Dental Tourism',
    'Oral Hygiene',
  ];

  const filteredGuides = BLOG_GUIDES.filter((guide) => {
    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredQuestions = ASK_DENTIST_QUESTIONS.filter((q) => {
    const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
    const matchesSearch = q.patientQuestion.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.doctorAnswer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleHelpfulClick = (id: string) => {
    setHelpfulCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;
    setQuestionSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fafcfb] text-[#173e3a]">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#edf6f4] via-[#f4f9f7] to-[#fafcfb] py-14 px-4 sm:px-6 border-b border-[#d8e1dd]/70 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/90 border border-teal-200/70 text-teal-800 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-teal-600" />
              <span>Evidence-Based Patient Education & Q&A</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-extrabold text-[#173e3a] tracking-tight leading-tight">
              Dental Knowledge & Doctor Advice You Can Rely On.
            </h1>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Clear, honest explanations on modern dental care, procedures, pain management, recovery timelines, and answers to real patient questions directly from Dr. [Doctor Name].
            </p>

            {/* Sub-tab navigation */}
            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={() => { setActiveTab('guides'); setSelectedGuide(null); }}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'guides'
                    ? 'bg-[#173e3a] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-[#d8e1dd] hover:bg-teal-50/50'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Patient Guides & Articles</span>
              </button>

              <button
                onClick={() => { setActiveTab('ask-dentist'); setSelectedGuide(null); }}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'ask-dentist'
                    ? 'bg-[#173e3a] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-[#d8e1dd] hover:bg-teal-50/50'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>Ask the Dentist Q&A ({ASK_DENTIST_QUESTIONS.length})</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-12 px-4 sm:px-6 max-w-[1280px] mx-auto">
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setSelectedCategory(cat); setSelectedGuide(null); }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-teal-800 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search guides or questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-[#d8e1dd] bg-white text-xs sm:text-sm focus:outline-hidden focus:border-teal-700"
            />
          </div>
        </div>

        {/* Tab 1: Detailed Patient Guides */}
        {activeTab === 'guides' && (
          <div>
            {selectedGuide ? (
              /* Single Guide Full View */
              <div className="bg-white rounded-3xl border border-[#d8e1dd] p-6 sm:p-10 shadow-xs max-w-4xl mx-auto animate-fade-in">
                <button
                  onClick={() => setSelectedGuide(null)}
                  className="text-xs font-semibold text-teal-800 hover:underline mb-6 flex items-center gap-1 cursor-pointer"
                >
                  ← Back to All Guides
                </button>

                <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 mb-3">
                  <span className="bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                    {selectedGuide.category}
                  </span>
                  <span>· {selectedGuide.readTime}</span>
                  <span>· Published {selectedGuide.publishedDate}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-outfit font-extrabold text-[#173e3a] leading-tight">
                  {selectedGuide.title}
                </h1>

                <p className="mt-2 text-xs text-slate-500 font-medium">
                  By {selectedGuide.author}
                </p>

                <div className="my-6 p-4 rounded-2xl bg-[#edf6f4] border border-[#d8e1dd] text-xs sm:text-sm text-teal-950 leading-relaxed font-medium">
                  💡 {selectedGuide.summary}
                </div>

                {/* Sections */}
                <div className="space-y-6 my-8">
                  {selectedGuide.sections.map((sec, idx) => (
                    <div key={idx} className="space-y-2">
                      <h3 className="text-lg font-outfit font-bold text-[#173e3a]">
                        {sec.heading}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {sec.content}
                      </p>
                      {sec.bulletPoints && (
                        <ul className="mt-2 space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-slate-600">
                          {sec.bulletPoints.map((pt, i) => (
                            <li key={i}>{pt}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                {/* Key Takeaways */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-3">
                    Key Clinical Takeaways
                  </h4>
                  <div className="space-y-2">
                    {selectedGuide.takeaways.map((takeaway, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Appointment CTA */}
                <div className="mt-10 p-6 bg-[#f4f9f7] rounded-2xl border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-outfit font-bold text-sm text-[#173e3a]">
                      Have personal questions about this treatment?
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Schedule a comfortable consultation with Dr. [Doctor Name].
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenBooking()}
                    className="bg-[#173e3a] hover:bg-teal-900 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            ) : (
              /* Grid of Guides */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGuides.map((guide) => (
                  <div
                    key={guide.id}
                    onClick={() => setSelectedGuide(guide)}
                    className="bg-white rounded-2xl border border-[#d8e1dd] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer card-hover-effect"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold text-teal-700 mb-3">
                        <span className="bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                          {guide.category}
                        </span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {guide.readTime}
                        </span>
                      </div>

                      <h3 className="font-outfit font-bold text-base text-[#173e3a] group-hover:text-teal-800 transition-colors leading-snug">
                        {guide.title}
                      </h3>

                      <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {guide.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-800">
                      <span>Read Full Guide</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Ask the Dentist Q&A Forum */}
        {activeTab === 'ask-dentist' && (
          <div className="space-y-10">
            {/* Ask Question Form Card */}
            <div className="bg-gradient-to-br from-white to-[#f6faf8] rounded-3xl border border-[#d8e1dd] p-6 sm:p-8 shadow-xs">
              <div className="max-w-2xl mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Direct Doctor Consultation Desk
                </span>
                <h2 className="text-2xl font-outfit font-extrabold text-[#173e3a] mt-1">
                  Ask Dr. [Doctor Name] a Dental Question
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Have a specific symptom, fear, or treatment curiosity? Type your question below. All questions are reviewed and answered with clinical precision.
                </p>
              </div>

              {questionSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center animate-fade-in">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-outfit font-bold text-base text-emerald-900">
                    Question Submitted for Specialist Review!
                  </h4>
                  <p className="text-xs text-emerald-700 mt-1 max-w-md mx-auto">
                    Thank you. Dr. [Doctor Name] reviews patient queries twice daily. If an email was provided, you will receive an in-depth clinical explanation within 12 hours.
                  </p>
                  <button
                    onClick={() => { setQuestionSubmitted(false); setUserQuestion(''); }}
                    className="mt-3 px-3.5 py-1.5 bg-white text-emerald-800 border border-emerald-300 rounded-xl text-xs font-bold hover:bg-emerald-100 transition-colors cursor-pointer"
                  >
                    Ask Another Question
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuestionSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Topic Category
                      </label>
                      <select
                        value={userQuestionCategory}
                        onChange={(e) => setUserQuestionCategory(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8e1dd] text-xs sm:text-sm bg-white focus:outline-hidden focus:border-teal-700"
                      >
                        <option value="Root Canal">Root Canal & Toothache</option>
                        <option value="Dental Implants">Dental Implants</option>
                        <option value="Braces & Aligners">Braces & Aligners</option>
                        <option value="Cosmetic Dentistry">Cosmetic & Whitening</option>
                        <option value="Dental Tourism">Dental Tourism</option>
                        <option value="Oral Hygiene">Oral Hygiene & Gums</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Email or Phone (For Private Response)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. yourname@example.com"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8e1dd] text-xs sm:text-sm bg-white focus:outline-hidden focus:border-teal-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Your Dental Question *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="e.g., Is it safe to get teeth cleaned if my gums bleed? How painful is the root canal?"
                      value={userQuestion}
                      onChange={(e) => setUserQuestion(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8e1dd] text-xs sm:text-sm bg-white focus:outline-hidden focus:border-teal-700"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-slate-500">
                      ⚡ Typical doctor review time: Under 12 hours
                    </span>
                    <button
                      type="submit"
                      className="bg-[#173e3a] hover:bg-teal-900 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5 text-teal-300" />
                      <span>Post Question</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* List of Doctor-Answered Questions */}
            <div className="space-y-4">
              <h3 className="font-outfit font-bold text-lg text-[#173e3a]">
                Recently Answered Questions by Dr. [Doctor Name]
              </h3>

              {filteredQuestions.map((q) => (
                <div
                  key={q.id}
                  className="bg-white rounded-2xl border border-[#d8e1dd] p-6 shadow-xs space-y-4"
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-teal-700 mb-1">
                        <span className="bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                          {q.category}
                        </span>
                        <span className="text-slate-400">Asked from {q.patientLocation} · {q.askedDate}</span>
                      </div>
                      <h4 className="font-outfit font-bold text-base text-[#173e3a]">
                        Q: {q.patientQuestion}
                      </h4>
                    </div>
                  </div>

                  {/* Doctor's Answer */}
                  <div className="p-4 rounded-xl bg-[#edf6f4]/60 border border-[#d8e1dd]/70 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-teal-900">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Clinical Response from {q.answeredBy}:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {q.doctorAnswer}
                    </p>
                  </div>

                  {/* Bottom Helpful button */}
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                    <button
                      onClick={() => handleHelpfulClick(q.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
                    >
                      <ThumbsUp className="w-3.5 h-3.5 text-teal-700" />
                      <span>Helpful ({q.helpfulCount + (helpfulCounts[q.id] || 0)})</span>
                    </button>

                    <button
                      onClick={() => onOpenBooking()}
                      className="text-xs font-semibold text-teal-800 hover:underline cursor-pointer"
                    >
                      Book Consultation for this issue →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
