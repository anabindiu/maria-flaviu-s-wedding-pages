import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ro' | 'en';

interface Translations {
  liftSeal: string;
  saveTheDate: string;
  allForLove: string;
  theVenue: string;
  venueAddress: string;
  viewOnMaps: string;
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  rsvp: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    attending: string;
    yes: string;
    no: string;
    guests: string;
    dietary: string;
    glutenFree: string;
    vegan: string;
    vegetarian: string;
    none: string;
    message: string;
    submit: string;
    thankYou: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    liftSeal: 'lift the seal to begin',
    saveTheDate: 'Save the Date',
    allForLove: 'All for Love',
    theVenue: 'The Venue',
    venueAddress: 'Sura Slavia, Sinteu, 417550, Bihor, Romania',
    viewOnMaps: 'View on Google Maps',
    countdown: {
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
    },
    rsvp: {
      title: 'Confirm Your Presence',
      subtitle: 'We would be honored to have you celebrate with us',
      name: 'Your Name',
      email: 'Email Address',
      attending: 'Will you be attending?',
      yes: 'Joyfully Accept',
      no: 'Regretfully Decline',
      guests: 'Number of Guests',
      dietary: 'Dietary Requirements',
      glutenFree: 'Gluten Intolerant',
      vegan: 'Vegan',
      vegetarian: 'Vegetarian',
      none: 'None',
      message: 'Leave a message for the couple',
      submit: 'Send RSVP',
      thankYou: 'Thank you! Your response has been recorded.',
    },
  },
  ro: {
    liftSeal: 'ridică sigiliul pentru a începe',
    saveTheDate: 'Rezervă Data',
    allForLove: 'Totul pentru Dragoste',
    theVenue: 'Locația',
    venueAddress: 'Sura Slavia, Sinteu, 417550, Bihor, România',
    viewOnMaps: 'Vezi pe Google Maps',
    countdown: {
      days: 'Zile',
      hours: 'Ore',
      minutes: 'Minute',
      seconds: 'Secunde',
    },
    rsvp: {
      title: 'Confirmă Prezența',
      subtitle: 'Ne-ar onora să sărbătorești alături de noi',
      name: 'Numele Tău',
      email: 'Adresa de Email',
      attending: 'Vei participa?',
      yes: 'Accept cu Bucurie',
      no: 'Regret, Nu Pot',
      guests: 'Numărul de Invitați',
      dietary: 'Preferințe Alimentare',
      glutenFree: 'Intolerant la Gluten',
      vegan: 'Vegan',
      vegetarian: 'Vegetarian',
      none: 'Niciuna',
      message: 'Lasă un mesaj pentru miri',
      submit: 'Trimite Confirmarea',
      thankYou: 'Mulțumim! Răspunsul tău a fost înregistrat.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ro');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
