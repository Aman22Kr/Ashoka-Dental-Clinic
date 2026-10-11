/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ClinicConfigProvider } from './context/ClinicConfigContext';
import { SupportedLanguage } from './data/translations';

// Ashoka Dental Clinic Components
import { AshokaHeader } from './components/AshokaHeader';
import { AshokaFooter } from './components/AshokaFooter';
import { FloatingQuickMenu } from './components/FloatingQuickMenu';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { AshokaBookingModal } from './components/AshokaBookingModal';

// Ashoka Dental Clinic Pages
import { AshokaHomePage } from './pages/AshokaHomePage';
import { AshokaTreatmentsPage } from './pages/AshokaTreatmentsPage';
import { AshokaTourismPage } from './pages/AshokaTourismPage';
import { AshokaBlogGuidePage } from './pages/AshokaBlogGuidePage';
import { AshokaPatientResourcesPage } from './pages/AshokaPatientResourcesPage';
import { AshokaServicesPage } from './pages/AshokaServicesPage';
import { AshokaConditionsPage } from './pages/AshokaConditionsPage';
import { AshokaDoctorPage } from './pages/AshokaDoctorPage';
import { AshokaPricingPage } from './pages/AshokaPricingPage';
import { AshokaReviewsPage } from './pages/AshokaReviewsPage';
import { AshokaContactPage } from './pages/AshokaContactPage';

export default function App() {
  // Multi-Language state for Ashoka Dental Clinic
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(() => {
    try {
      const rawHash = window.location.hash.replace(/^#\/?/, '');
      const firstPart = rawHash.split('/')[0] as SupportedLanguage;
      const validLangs: SupportedLanguage[] = ['en', 'ta', 'hi', 'te', 'kn', 'ml', 'es', 'ar', 'fr'];
      if (validLangs.includes(firstPart)) return firstPart;
      const saved = localStorage.getItem('ashoka_language') as SupportedLanguage;
      if (saved && validLangs.includes(saved)) return saved;
    } catch {
      // ignore
    }
    return 'en';
  });

  // Ashoka route path state
  const [currentPath, setCurrentPath] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSlug, setBookingSlug] = useState<string | undefined>(undefined);

  // Synchronize route with hash
  useEffect(() => {
    const handleHashChange = () => {
      let rawHash = window.location.hash.replace(/^#\/?/, '');
      if (!rawHash) {
        setCurrentPath('home');
        return;
      }

      // Check if hash contains language prefix like "ta" or "en/services"
      const parts = rawHash.split('/');
      const possibleLang = parts[0] as SupportedLanguage;
      const validLangs: SupportedLanguage[] = ['en', 'ta', 'hi', 'te', 'kn', 'ml', 'es', 'ar', 'fr'];
      
      if (validLangs.includes(possibleLang)) {
        setCurrentLanguage(possibleLang);
        try {
          localStorage.setItem('ashoka_language', possibleLang);
        } catch {
          // ignore
        }
        rawHash = parts.slice(1).join('/') || 'home';
      }

      setCurrentPath(rawHash || 'home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.location.hash = `#/${currentLanguage}/${path}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (lang: SupportedLanguage) => {
    setCurrentLanguage(lang);
    try {
      localStorage.setItem('ashoka_language', lang);
    } catch {
      // ignore
    }
    window.location.hash = `#/${lang}/${currentPath}`;
  };

  const handleOpenBooking = (slug?: string) => {
    setBookingSlug(slug);
    setIsBookingOpen(true);
  };

  // Render active page for Ashoka Dental Clinic
  const renderPage = () => {
    if (currentPath.startsWith('service/')) {
      const slug = currentPath.replace('service/', '');
      return (
        <AshokaServicesPage
          currentServiceSlug={slug}
          currentLanguage={currentLanguage}
          onNavigate={handleNavigate}
          onOpenBooking={handleOpenBooking}
        />
      );
    }

    if (currentPath.startsWith('services')) {
      return (
        <AshokaServicesPage
          currentLanguage={currentLanguage}
          onNavigate={handleNavigate}
          onOpenBooking={handleOpenBooking}
        />
      );
    }

    if (currentPath.startsWith('condition/')) {
      const slug = currentPath.replace('condition/', '');
      return (
        <AshokaConditionsPage
          currentConditionSlug={slug}
          currentLanguage={currentLanguage}
          onNavigate={handleNavigate}
          onOpenBooking={() => handleOpenBooking()}
        />
      );
    }

    if (currentPath.startsWith('conditions')) {
      return (
        <AshokaConditionsPage
          currentLanguage={currentLanguage}
          onNavigate={handleNavigate}
          onOpenBooking={() => handleOpenBooking()}
        />
      );
    }

    if (currentPath.startsWith('treatments') || currentPath.startsWith('treatment/')) {
      const selectedSlug = currentPath.includes('/') ? currentPath.split('/')[1] : undefined;
      return (
        <AshokaTreatmentsPage
          currentLanguage={currentLanguage}
          initialTreatmentSlug={selectedSlug}
          onNavigate={handleNavigate}
          onOpenBooking={handleOpenBooking}
        />
      );
    }

    if (currentPath.startsWith('dental-tourism') || currentPath.startsWith('tourism')) {
      return (
        <AshokaTourismPage
          currentLanguage={currentLanguage}
          onNavigate={handleNavigate}
          onOpenBooking={handleOpenBooking}
        />
      );
    }

    if (currentPath.startsWith('blog-guide') || currentPath.startsWith('blog') || currentPath.startsWith('guide')) {
      return (
        <AshokaBlogGuidePage
          currentLanguage={currentLanguage}
          onNavigate={handleNavigate}
          onOpenBooking={handleOpenBooking}
        />
      );
    }

    if (currentPath.startsWith('patient-hub') || currentPath.startsWith('patient-resources') || currentPath.startsWith('patients')) {
      return (
        <AshokaPatientResourcesPage
          currentLanguage={currentLanguage}
          onNavigate={handleNavigate}
          onOpenBooking={handleOpenBooking}
        />
      );
    }

    switch (currentPath.split('#')[0]) {
      case 'why-us':
      case 'about':
        return (
          <AshokaHomePage
            currentLanguage={currentLanguage}
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        );
      case 'doctor':
      case 'team':
        return (
          <AshokaDoctorPage
            currentLanguage={currentLanguage}
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        );
      case 'pricing':
      case 'costs':
        return (
          <AshokaPricingPage
            currentLanguage={currentLanguage}
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        );
      case 'reviews':
      case 'testimonials':
        return (
          <AshokaReviewsPage
            currentLanguage={currentLanguage}
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        );
      case 'contact':
      case 'location':
        return (
          <AshokaContactPage
            currentLanguage={currentLanguage}
            onOpenBooking={() => handleOpenBooking()}
          />
        );
      case 'home':
      default:
        return (
          <AshokaHomePage
            currentLanguage={currentLanguage}
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        );
    }
  };

  return (
    <ClinicConfigProvider>
      <div className="min-h-screen flex flex-col font-outfit bg-[#f8faf9] text-slate-800 antialiased selection:bg-teal-600 selection:text-white">
        <AshokaHeader
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
          currentPath={currentPath}
          onNavigate={handleNavigate}
          onOpenBooking={handleOpenBooking}
        />

        <main className="flex-1">
          {renderPage()}
        </main>

        <AshokaFooter
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
          onNavigate={handleNavigate}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Semi-transparent icon that smoothly scrolls user to top of website */}
        <ScrollToTopButton />

        {/* Floating Quick Action Bar */}
        <FloatingQuickMenu
          currentLanguage={currentLanguage}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Ashoka Consultation Booking Modal */}
        <AshokaBookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          defaultServiceSlug={bookingSlug}
          currentLanguage={currentLanguage}
        />
      </div>
    </ClinicConfigProvider>
  );
}
