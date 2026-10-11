import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ClinicConfig {
  clinicName: string;
  doctorName: string;
  doctorQualifications: string;
  doctorExperience: string;
  phoneNumber: string;
  whatsappNumber: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  email: string;
}

export const DEFAULT_BLANK_CONFIG: ClinicConfig = {
  clinicName: 'Ashoka Dental Clinic',
  doctorName: '',
  doctorQualifications: 'BDS, MDS · Oral & Maxillofacial Implantology',
  doctorExperience: '15+ Years Clinical Practice',
  phoneNumber: '',
  whatsappNumber: '',
  addressLine1: 'Ashoka Dental Clinic, Main Road',
  addressLine2: 'Gandhi Nagar, Near Central Circle',
  city: 'Vellore',
  state: 'Tamil Nadu',
  postalCode: '632001',
  email: 'care@ashokadental.com',
};

interface ClinicConfigContextType {
  config: ClinicConfig;
  updateConfig: (newConfig: Partial<ClinicConfig>) => void;
  resetToBlank: () => void;
}

const ClinicConfigContext = createContext<ClinicConfigContextType | undefined>(undefined);

const STORAGE_KEY = 'ashoka_clinic_config_v2';

export const ClinicConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<ClinicConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_BLANK_CONFIG, ...JSON.parse(saved) };
      }
    } catch {
      // ignore
    }
    return DEFAULT_BLANK_CONFIG;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
      // ignore
    }
  }, [config]);

  const updateConfig = (newFields: Partial<ClinicConfig>) => {
    setConfig((prev) => ({ ...prev, ...newFields }));
  };

  const resetToBlank = () => {
    setConfig(DEFAULT_BLANK_CONFIG);
  };

  return (
    <ClinicConfigContext.Provider
      value={{
        config,
        updateConfig,
        resetToBlank,
      }}
    >
      {children}
    </ClinicConfigContext.Provider>
  );
};

export const useClinicConfig = () => {
  const context = useContext(ClinicConfigContext);
  if (!context) {
    throw new Error('useClinicConfig must be used within a ClinicConfigProvider');
  }
  return context;
};
