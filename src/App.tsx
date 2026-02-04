import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Users, 
  Target, 
  Heart, 
  MapPin, 
  Mail, 
  Phone,
  Calendar,
  Zap,
  TrendingUp,
  Award,
  Shield,
  Clock,
  ChevronRight
} from 'lucide-react';
import { siteConfig } from './config/siteConfig';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const iconMap: { [key: string]: any } = {
    users: Users,
    target: Target,
    dumbbell: Dumbbell,
    heart: Heart
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center transform -rotate-6">
              <Dumbbell className="w-6 h-6 text-black" strokeWidth={3} />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-yellow-500 uppercase">
                {siteConfig.name}
              </h1>
              <p className="text-xs text-gray-400 tracking-wider">Guingamp • Bretagne</p>
            </div>
          </div>
          
          <a 
            href="#contact" 
            className="hidden sm:flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 font-bold uppercase text-sm tracking-wider hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 shadow-lg"
          >
            Rejoindre
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255, 184, 0, 0.1) 35px, rgba(255, 184, 0, 0.1) 70px)`
          }}></div>
        </div>

        {/* Animated Yellow Accent */}
        <div className={`absolute top-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
        <div className={`absolute bottom-20 left-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-6 px-6 py-2 bg-yellow-500/20 border-2 border-yellow-500 transform -rotate-2">
              <p className="text-yellow-500 font-bold uppercase tracking-widest text-sm">
                {siteConfig.opening.date} • {siteConfig.opening.status}
              </p>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-none">
              <span className="block text-white">CROSSFIT</span>
              <span className="block text-yellow-500 mt-2" style={{ 
                textShadow: '4px 4px 0px rgba(0,0,0,0.8)' 
              }}>GALIAN</span>
            </h1>

            <div className="max-w-3xl mx-auto mb-10">
              <p className="text-xl sm:text-2xl font-bold text-gray-300 mb-4 uppercase tracking-wide">
                {siteConfig.slogan}
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                {siteConfig.tagline} – {siteConfig.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#about" 
                className="w-full sm:w-auto bg-yellow-500 text-black px-10 py-5 font-black uppercase text-lg tracking-wider hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 hover:-rotate-2 shadow-2xl"
              >
                Découvrir
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto border-4 border-white text-white px-10 py-5 font-black uppercase text-lg tracking-wider hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:rotate-2"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-yellow-500 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-yellow-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-950 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255, 184, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 184, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-yellow-500 text-black font-black uppercase text-sm tracking-widest transform -rotate-2">
                Notre Histoire
              </div>
              <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
                Le <span className="text-yellow-500">Guerrier Gaulois</span> au Cœur
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p className="border-l-4 border-yellow-500 pl-6 py-2">
                  <strong className="text-yellow-500">{siteConfig.branding.meaning}</strong>
                </p>
                <p>
                  {siteConfig.about.story}
                </p>
                <p className="font-semibold text-white">
                  {siteConfig.about.mission}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {siteConfig.about.values.map((value, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-black/50 p-4 border-l-2 border-yellow-500">
                    <Shield className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <p className="font-bold text-sm uppercase tracking-wide">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-zinc-900 border-4 border-yellow-500 p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-yellow-500 flex items-center justify-center">
                    <Award className="w-10 h-10 text-black" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-yellow-500">{siteConfig.about.founder.name}</h3>
                    <p className="text-gray-400 font-semibold">Fondateur & Coach</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span>{siteConfig.about.founder.age} ans, athlète CrossFit confirmé</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-yellow-500" />
                    <span>{siteConfig.about.founder.background}</span>
                  </p>
                  <p className="border-t-2 border-yellow-500/30 pt-4 mt-4 italic text-white font-medium">
                    "{siteConfig.about.founder.vision}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4 uppercase">
              Nos <span className="text-yellow-500">Entraînements</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {siteConfig.services.details}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.services.main.map((service, idx) => {
              const Icon = iconMap[service.icon];
              return (
                <div 
                  key={idx} 
                  className="group bg-zinc-950 border-2 border-zinc-800 p-8 hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/10 border-2 border-yellow-500 transform rotate-6 group-hover:rotate-12 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-yellow-500" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-3 uppercase tracking-wide group-hover:text-yellow-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why CrossFit Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 uppercase">
              Pourquoi Le <span className="text-yellow-500">CrossFit</span> ?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Le CrossFit n'est pas qu'un sport. C'est un style de vie qui te transforme physiquement et mentalement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {siteConfig.whyCrossFit.map((reason, idx) => (
              <div 
                key={idx} 
                className="bg-black border-l-4 border-yellow-500 p-8 hover:bg-zinc-900 transition-all duration-300"
              >
                <h3 className="text-2xl font-black mb-3 text-yellow-500 uppercase">
                  {reason.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-yellow-500 text-black px-8 py-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <p className="text-2xl font-black uppercase">
                {siteConfig.competitive.uniqueness}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-yellow-500 text-black font-black uppercase text-sm tracking-widest">
                Contact
              </div>
              <h2 className="text-4xl sm:text-5xl font-black mb-8 leading-tight">
                Prêt à Commencer<br />Ton <span className="text-yellow-500">Aventure</span> ?
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 bg-zinc-950 p-6 border-l-4 border-yellow-500">
                  <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <div>
                    <p className="font-bold text-lg mb-1">Adresse</p>
                    <p className="text-gray-300">{siteConfig.contact.fullAddress}</p>
                    <p className="text-sm text-gray-500 mt-2">{siteConfig.location.context}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-zinc-950 p-6 border-l-4 border-yellow-500">
                  <Calendar className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <div>
                    <p className="font-bold text-lg mb-1">Ouverture</p>
                    <p className="text-gray-300">{siteConfig.opening.date}</p>
                    <p className="text-sm text-yellow-500 mt-2 font-semibold">{siteConfig.opening.message}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-zinc-950 p-6 border-l-4 border-yellow-500">
                  <Phone className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <div>
                    <p className="font-bold text-lg mb-1">Contact</p>
                    <p className="text-gray-400 text-sm">Coordonnées disponibles prochainement</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500 text-black p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <h3 className="text-2xl font-black mb-4 uppercase">Info Concurrence</h3>
                <p className="font-semibold mb-3">Plus proches concurrents :</p>
                <ul className="space-y-2 text-sm">
                  {siteConfig.competitive.competitors.map((comp, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-black"></div>
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-bold text-base">
                  → {siteConfig.competitive.advantage}
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-[500px] lg:h-full border-4 border-yellow-500 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.8!2d${siteConfig.contact.coordinates.lng}!3d${siteConfig.contact.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDMzJzQ0LjMiTiAzwrAwOScwMC43Ilc!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CrossFit Galian - Localisation"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t-4 border-yellow-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center transform -rotate-6">
                <Dumbbell className="w-7 h-7 text-black" strokeWidth={3} />
              </div>
              <div>
                <p className="text-2xl font-black text-yellow-500 uppercase tracking-tight">
                  {siteConfig.name}
                </p>
                <p className="text-sm text-gray-500">Guingamp • Côtes d'Armor • Bretagne</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                © 2025 CrossFit Galian. Tous droits réservés.
              </p>
              <p className="text-xs text-gray-600">
                Site créé par <span className="text-yellow-500 font-semibold">Avalon Stratège</span>
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
            <p className="text-xs text-gray-600 italic">
              CrossFit® est une marque déposée de CrossFit, LLC. CrossFit Galian n'est pas affilié à CrossFit, LLC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;