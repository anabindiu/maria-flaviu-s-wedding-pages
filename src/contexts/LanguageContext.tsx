import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ro' | 'en';

interface Translations {
  liftSeal: string;
  exclusiveInvitation: string;
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
  reception: {
    title: string;
    description: string;
    ceremony: string;
    dinner: string;
  };
  accommodation: {
    title: string;
    description: string;
  };
  dressCode: {
    title: string;
    description: string;
  };
  rsvpInfo: {
    description: string;
  };
  rsvp: {
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    attending: string;
    yes: string;
    no: string;
    guests: string;
    dietary: string;
    dietaryDescription: string;
    glutenFree: string;
    lactoseFree: string;
    vegan: string;
    vegetarian: string;
    nutAllergy: string;
    seafoodAllergy: string;
    otherAllergies: string;
    otherAllergiesPlaceholder: string;
    message: string;
    submit: string;
    thankYou: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    liftSeal: 'lift the seal to begin',
    exclusiveInvitation: 'This invitation is\nexclusive for you',
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
    reception: {
      title: 'Reception',
      description: 'Please join us for an evening of celebration.',
      ceremony: 'The ceremony will begin at',
      dinner: 'followed by dinner at',
    },
    accommodation: {
      title: 'Accommodation',
      description: 'Accommodation options are available near the venue –',
    },
    dressCode: {
      title: 'Dress Code',
      description: "We'd love for you to use our suggested colour palette, though it's completely optional.",
    },
    rsvpInfo: {
      description: 'Kindly confirm your presence by April 15, 2026.',
    },
    rsvp: {
      title: 'Confirm Your Presence',
      subtitle: 'We would be honored to have you celebrate with us',
      name: 'Full Name',
      namePlaceholder: 'Your name',
      email: 'Email (optional)',
      emailPlaceholder: 'your@email.com',
      attending: 'Will you attend?',
      yes: 'Yes, I will attend',
      no: "I won't be able to attend",
      guests: 'Number of guests (including yourself)',
      dietary: 'Allergies and food intolerances',
      dietaryDescription: 'It is very important for us to know about any dietary restrictions. Select all that apply:',
      glutenFree: 'Gluten-free / Celiac',
      lactoseFree: 'Lactose-free',
      vegan: 'Vegan',
      vegetarian: 'Vegetarian',
      nutAllergy: 'Nut allergy',
      seafoodAllergy: 'Seafood allergy',
      otherAllergies: 'Other allergies or restrictions:',
      otherAllergiesPlaceholder: 'E.g., egg allergy, fructose intolerance',
      message: 'Message for the couple (optional)',
      submit: 'Send RSVP',
      thankYou: 'Thank you! Your response has been recorded.',
    },
  },
  ro: {
    liftSeal: 'ridică sigiliul pentru a începe',
    exclusiveInvitation: 'Această invitație este\nexclusiv pentru tine',
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
    reception: {
      title: 'Recepție',
      description: 'Vă invităm să ne fiți alături la o seară de sărbătoare.',
      ceremony: 'Ceremonia va începe la ora',
      dinner: 'urmată de cină la ora',
    },
    accommodation: {
      title: 'Cazare',
      description: 'Opțiuni de cazare sunt disponibile în apropierea locației –',
    },
    dressCode: {
      title: 'Cod Vestimentar',
      description: 'Ne-ar plăcea să folosiți paleta de culori sugerată, deși este complet opțional.',
    },
    rsvpInfo: {
      description: 'Vă rugăm să confirmați prezența până la 15 aprilie 2026.',
    },
    rsvp: {
      title: 'Confirmă Prezența',
      subtitle: 'Ne-ar onora să sărbătorești alături de noi',
      name: 'Nume complet',
      namePlaceholder: 'Numele tău',
      email: 'Email (opțional)',
      emailPlaceholder: 'adresa@email.com',
      attending: 'Vei participa?',
      yes: 'Da, voi participa',
      no: 'Nu voi putea participa',
      guests: 'Numărul de invitați (incluzându-te pe tine)',
      dietary: 'Alergii și intoleranțe alimentare',
      dietaryDescription: 'Este foarte important pentru noi să cunoaștem orice restricție alimentară. Selectează tot ce se aplică:',
      glutenFree: 'Fără gluten / Celiac',
      lactoseFree: 'Fără lactoză',
      vegan: 'Vegan',
      vegetarian: 'Vegetarian',
      nutAllergy: 'Alergie la nuci',
      seafoodAllergy: 'Alergie la fructe de mare',
      otherAllergies: 'Alte alergii sau restricții:',
      otherAllergiesPlaceholder: 'Ex: alergie la ouă, intoleranță la fructoză',
      message: 'Mesaj pentru miri (opțional)',
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
