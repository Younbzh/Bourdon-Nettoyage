import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock, Phone, Instagram, Swords, Flame, Shield, Star } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-amber-50 text-amber-950" style={{
      fontFamily: '"Cinzel", serif'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
        
        .font-serif { font-family: 'Cinzel', serif; }
        .font-body { font-family: 'Lora', serif; }
        
        .parchment {
          background: linear-gradient(rgba(245, 222, 179, 0.95), rgba(222, 184, 135, 0.95)),
            url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
        }
        
        .torch-glow { animation: torchFlicker 3s ease-in-out infinite; }
        @keyframes torchFlicker { 0%, 100% { opacity: 1; } 50% { opacity: 0.85; } }
        
        .float { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        
        .fade-up { animation: fadeUp 0.8s ease-out forwards; opacity: 0; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Nav */}
      <nav className={`fixed w-full z-50 transition-all ${
        scrolled ? 'bg-amber-900/95 backdrop-blur' : 'bg-gradient-to-b from-amber-900/90 to-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center torch-glow">
                <Flame className="w-7 h-7 text-amber-200" />
              </div>
              <div>
                <h1 className="font-serif text-xl font-bold text-amber-100">{siteConfig.name}</h1>
                <p className="text-xs text-amber-300 font-semibold uppercase tracking-widest">Plénée-Jugon</p>
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-8">
              {['concept', 'horaires', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm font-semibold text-amber-200 hover:text-amber-100 transition uppercase tracking-wider"
                >
                  {item}
                </button>
              ))}
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="px-6 py-3 bg-amber-600 text-white rounded font-bold hover:bg-amber-700 transition uppercase text-sm tracking-wider"
              >
                Réserver
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-amber-200">
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-amber-700/30">
              <div className="flex flex-col gap-4">
                {['concept', 'horaires', 'contact'].map(item => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left py-2 text-amber-200 hover:text-amber-100 font-semibold uppercase tracking-wider"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZyIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-amber-700/80 backdrop-blur rounded-full mb-8 fade-up">
            <Swords className="w-5 h-5 text-amber-200" />
            <span className="text-sm font-bold text-amber-100 uppercase tracking-widest">{siteConfig.tagline}</span>
          </div>

          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 text-amber-100 fade-up" style={{
            textShadow: '0 4px 20px rgba(0,0,0,0.5)', animationDelay: '0.2s'
          }}>
            {siteConfig.name}
          </h1>

          <p className="font-serif text-3xl sm:text-4xl text-amber-200 mb-6 fade-up" style={{ animationDelay: '0.4s' }}>
            {siteConfig.hero.subtitle}
          </p>

          <p className="font-body text-xl text-amber-100/90 max-w-3xl mx-auto mb-12 leading-relaxed fade-up" style={{ animationDelay: '0.6s' }}>
            {siteConfig.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center fade-up" style={{ animationDelay: '0.8s' }}>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="px-10 py-5 bg-amber-600 text-white rounded-lg font-bold text-lg hover:bg-amber-700 transition uppercase tracking-wider flex items-center justify-center gap-3 shadow-2xl"
            >
              <Phone className="w-6 h-6" />
              Réserver
            </a>
            <button
              onClick={() => scrollToSection('concept')}
              className="px-10 py-5 border-2 border-amber-400 text-amber-100 rounded-lg font-bold text-lg hover:bg-amber-400/20 transition uppercase tracking-wider"
            >
              Découvrir
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto fade-up" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <p className="text-5xl mb-2">🏰</p>
              <p className="text-sm text-amber-200 uppercase tracking-wider">Médiéval</p>
            </div>
            <div className="text-center">
              <p className="text-5xl mb-2">🧙‍♂️</p>
              <p className="text-sm text-amber-200 uppercase tracking-wider">Fantastique</p>
            </div>
            <div className="text-center">
              <p className="text-5xl mb-2">⚔️</p>
              <p className="text-sm text-amber-200 uppercase tracking-wider">Aventure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section id="concept" className="py-24 parchment relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <Shield className="w-16 h-16 mx-auto mb-6 text-amber-800" />
            <h2 className="font-serif text-5xl sm:text-6xl font-bold mb-6 text-amber-900">
              Notre Univers
            </h2>
            <p className="font-body text-xl text-amber-800 max-w-3xl mx-auto">
              Un lieu authentique où se mêlent Moyen-Âge et fantastique, avec de nombreux clins d'œil à l'univers de Tolkien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.concept.activities.map((act, i) => (
              <div key={i} className="bg-amber-100 border-2 border-amber-800 rounded-lg p-8 hover:shadow-2xl transition float" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="text-6xl mb-6 text-center">{act.icon}</div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-amber-900 text-center">{act.title}</h3>
                <p className="font-body text-amber-800 text-center leading-relaxed">{act.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horaires */}
      <section id="horaires" className="py-24 bg-gradient-to-br from-amber-900 to-stone-900 text-amber-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <Clock className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h2 className="font-serif text-5xl font-bold mb-4">{siteConfig.schedule.title}</h2>
          </div>

          <div className="max-w-3xl mx-auto bg-amber-950/50 backdrop-blur border-2 border-amber-700 rounded-lg overflow-hidden">
            {siteConfig.schedule.hours.map((h, i) => (
              <div key={i} className={`flex justify-between items-center p-6 ${i !== siteConfig.schedule.hours.length - 1 ? 'border-b border-amber-800/30' : ''} ${h.hours === 'Fermé' ? 'opacity-50' : ''}`}>
                <span className="font-serif text-xl font-bold text-amber-200">{h.day}</span>
                <span className="font-body text-lg text-amber-100">{h.hours}</span>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 font-body text-amber-300 italic">Réservation conseillée pour les groupes</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 parchment">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="bg-amber-100 border-4 border-amber-800 rounded-lg p-12 shadow-2xl">
            <MapPin className="w-16 h-16 mx-auto mb-6 text-amber-800" />
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-8 text-amber-900">
              Venez nous rendre visite
            </h2>

            <div className="space-y-6 mb-12">
              <div>
                <p className="font-serif text-2xl font-bold text-amber-900 mb-2">{siteConfig.location.address}</p>
                <p className="font-body text-xl text-amber-800">{siteConfig.location.postalCode} {siteConfig.location.city}</p>
              </div>
              <p className="font-body text-lg text-amber-700 italic">{siteConfig.location.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 px-10 py-5 bg-amber-700 text-white rounded-lg font-bold text-lg hover:bg-amber-800 transition uppercase tracking-wider shadow-xl justify-center"
              >
                <Phone className="w-6 h-6" />
                {siteConfig.contact.phone}
              </a>
              <a
                href={`https://www.instagram.com/${siteConfig.contact.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-10 py-5 border-2 border-amber-800 text-amber-900 rounded-lg font-bold text-lg hover:bg-amber-800 hover:text-white transition uppercase tracking-wider justify-center"
              >
                <Instagram className="w-6 h-6" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-900 text-amber-200 border-t-4 border-amber-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold mb-2">{siteConfig.name}</h3>
              <p className="font-body text-amber-400">{siteConfig.tagline}</p>
              <p className="text-sm text-amber-500 mt-2">Inaugurée le 25 novembre 2023</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-amber-400">© {new Date().getFullYear()} {siteConfig.name}</p>
              <p className="text-xs text-amber-500 mt-1">{siteConfig.location.city}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}