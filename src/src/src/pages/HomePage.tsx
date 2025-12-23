import { useLanguage } from '../contexts/LanguageContext'
import { FileText, Users, Globe, CheckCircle } from 'lucide-react'

export default function HomePage() {
  const { t, language, setLanguage } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl">{t('site.title')}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#services" className="text-gray-700 hover:text-blue-600">{t('nav.services')}</a>
            <a href="/client-portal" className="text-gray-700 hover:text-blue-600">{t('nav.portal')}</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">{t('nav.contact')}</a>
            
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded ${language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 rounded ${language === 'fr' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`px-2 py-1 rounded ${language === 'pt' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
              >
                PT
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/client-portal"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {t('cta.getStarted')}
            </a>
            <a
              href="#services"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              {t('cta.learnMore')}
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Personal Tax Returns</h3>
              <p className="text-gray-600">Expert preparation for individuals and families</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Small Business</h3>
              <p className="text-gray-600">Comprehensive tax solutions for entrepreneurs</p>
            </div>
            <div className="text-center p-6">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Trilingual Support</h3>
              <p className="text-gray-600">Service in English, French & Portuguese</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 DuoPro Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
