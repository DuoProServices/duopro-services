import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'fr' | 'pt'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'site.title': 'DuoPro Services',
    'site.tagline': 'Professional Tax Preparation in Canada',
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portal': 'Client Portal',
    'nav.contact': 'Contact',
    'hero.title': 'Expert Tax Preparation for Individuals & Small Businesses',
    'hero.subtitle': 'Bilingual service in English, French & Portuguese',
    'cta.getStarted': 'Get Started',
    'cta.learnMore': 'Learn More',
  },
  fr: {
    'site.title': 'DuoPro Services',
    'site.tagline': 'Préparation fiscale professionnelle au Canada',
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.portal': 'Portail Client',
    'nav.contact': 'Contact',
    'hero.title': 'Préparation fiscale experte pour particuliers et petites entreprises',
    'hero.subtitle': 'Service bilingue en anglais, français et portugais',
    'cta.getStarted': 'Commencer',
    'cta.learnMore': 'En savoir plus',
  },
  pt: {
    'site.title': 'DuoPro Services',
    'site.tagline': 'Preparação profissional de impostos no Canadá',
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.portal': 'Portal do Cliente',
    'nav.contact': 'Contato',
    'hero.title': 'Preparação fiscal especializada para indivíduos e pequenas empresas',
    'hero.subtitle': 'Serviço trilíngue em inglês, francês e português',
    'cta.getStarted': 'Começar',
    'cta.learnMore': 'Saiba Mais',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
