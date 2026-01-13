import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ro' | 'en';

interface Translations {
  liftSeal: string;
  saveTheDate: string;
  weddingDate: string;
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
    [x: string]: string;
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
    vegan: string;
    vegetarian: string;
    nutAllergy: string;
    otherAllergies: string;
    otherAllergiesPlaceholder: string;
    message: string;
    submit: string;
    thankYou: string;
    };
    contactUs: string;
}

const translations: Record<Language, Translations> = {
  en: {
    liftSeal: 'Lift the seal \nto begin',
    saveTheDate: 'SAVE THE DATE',
    weddingDate: '09 May 2026',
    theVenue: 'THE VENUE',
    venueAddress: 'SURA SLAVIA, SINTEU, 417550, BIHOR, ROMANIA',
    viewOnMaps: 'VIEW ON GOOGLE MAPS',
    countdown: {
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
    },
    reception: {
      title: 'RECEPTION',
      description: 'PLEASE JOIN US FOR AN EVENING OF CELEBRATION.',
      ceremony: 'THE CEREMONY WILL BEGIN AT',
      dinner: 'FOLLOWED BY DINNER AT',
    },
    accommodation: {
      title: 'ACCOMMODATION',
      description: 'ACCOMMODATION OPTIONS ARE AVAILABLE NEAR THE VENUE –',
    },
    dressCode: {
      title: 'DRESS CODE',
      description: "WE'D LOVE FOR YOU TO USE OUR SUGGESTED COLOUR PALETTE, THOUGH IT'S COMPLETELY OPTIONAL.",
    },
    rsvpInfo: {
      description: 'KINDLY CONFIRM YOUR PRESENCE BY APRIL 15, 2026.',
    },
    rsvp: {
      title: 'CONFIRM YOUR PRESENCE',
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
      vegan: 'Vegan',
      vegetarian: 'Vegetarian',
      nutAllergy: 'Nut allergy',
      otherAllergies: 'Other allergies or restrictions:',
      otherAllergiesPlaceholder: 'E.g., egg allergy, fructose intolerance',
      message: 'Message for the couple (optional)',
      submit: 'Send RSVP',
      thankYou: 'Thank you! Your response has been recorded.',
        },
      contactUs: 'If you have any questions, please contact us.',

  },
  ro: {
    liftSeal: 'Ridică sigiliul\n pentru a începe',
    saveTheDate: 'SAVE THE DATE',
    weddingDate: '09 Mai 2026',
    theVenue: 'LOCAȚIA',
    venueAddress: 'SURA SLAVIA, SINTEU, 417550, BIHOR, ROMÂNIA',
    viewOnMaps: 'VEZI PE GOOGLE MAPS',
    countdown: {
      days: 'Zile',
      hours: 'Ore',
      minutes: 'Minute',
      seconds: 'Secunde',
    },
    reception: {
      title: 'RECEPȚIE',
      description: 'VĂ INVITĂM SĂ NE FIȚI ALĂTURI LA O SEARĂ DE SĂRBĂTOARE.',
      ceremony: 'CEREMONIA VA ÎNCEPE LA ORA',
      dinner: 'URMATĂ DE CINĂ LA ORA',
    },
    accommodation: {
      title: 'CAZARE',
      description: 'OPȚIUNI DE CAZARE SUNT DISPONIBILE ÎN APROPIEREA LOCAȚIEI –',
    },
    dressCode: {
      title: 'COD VESTIMENTAR',
      description: 'NE-AR PLĂCEA SĂ FOLOSIȚI PALETA DE CULORI SUGERATĂ, DEȘI ESTE COMPLET OPȚIONAL.',
    },
    rsvpInfo: {
      description: 'VĂ RUGĂM SĂ CONFIRMAȚI PREZENȚA PÂNĂ LA 15 APRILIE 2026.',
    },
    rsvp: {
      title: 'CONFIRMĂ PREZENȚA',
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
      vegan: 'Vegan',
      vegetarian: 'Vegetarian',
      nutAllergy: 'Alergie la nuci',
      otherAllergies: 'Alte alergii sau restricții:',
      otherAllergiesPlaceholder: 'Ex: alergie la ouă, intoleranță la fructoză',
      message: 'Mesaj pentru miri (opțional)',
      submit: 'Trimite Confirmarea',
      thankYou: 'Mulțumim! Răspunsul tău a fost înregistrat.',
      },
      contactUs: 'Dacă aveți întrebări, vă rugăm să ne contactați.',

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
