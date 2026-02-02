import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, MapPin, Calendar, CheckCircle, Heart, Leaf, MessageCircle, ChevronDown, ArrowRight, Star, TrendingUp } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const faqData = [
    {
      q: "Comment passer commande ?",
      a: "Chaque lundi, nous publions la composition du panier sur notre page Facebook. Envoyez-nous un message privé pour réserver. Une ligne téléphonique sera bientôt disponible !"
    },
    {
      q: "Où récupérer mon panier ?",
      a: "Nous avons une trentaine de points de retrait répartis dans les Côtes-d'Armor : Saint-Brieuc, Plérin, Guingamp, Dinan, Loudéac, Pontivy et bien d'autres !"
    },
    {
      q: "Quel est le prix ?",
      a: `Le panier est à ${siteConfig.panier.price}, prix unique. Paiement en espèces ou chèque le jour du retrait. Un terminal de paiement sera bientôt disponible.`
    },
    {
      q: "Puis-je choisir le contenu ?",
      a: "Non, le panier est composé selon les récoltes de la semaine. C'est le principe du panier de saison ! Mais notre communauté partage plein de recettes pour vous inspirer."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{
      fontFamily: '"DM Sans", -apple-system, sans-serif'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&family=Playfair+Display:wght@400;600;700&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <span className="text-2xl">🥕</span>
              </div>
              <div className="text-left">
                <h1 className="font-serif text-xl font-bold text-gray-900">
                  {siteConfig.name}
                </h1>
                <p className="text-xs text-emerald-600 font-semibold">Côtes-d'Armor</p>
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-8">
              {['concept', 'histoire', 'zones'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setShowOrderModal(true)}
                className="px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-200"
              >
                Commander
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                {['concept', 'histoire', 'zones'].map(item => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left py-2 text-gray-600 hover:text-emerald-600 transition-colors capitalize font-medium"
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() => setShowOrderModal(true)}
                  className="px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold text-center"
                >
                  Commander
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-bold text-emerald-700">Du champ à votre table</span>
              </div>
              
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-[1.1]">
                Des légumes<br />
                <span className="text-emerald-600">frais & locaux</span><br />
                livrés chez vous
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Chaque semaine, un panier de fruits et légumes de saison,<br className="hidden sm:block" />
                cultivés par nos producteurs des <strong>Côtes-d'Armor</strong>. 
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => setShowOrderModal(true)}
                  className="group px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-emerald-200"
                >
                  Commander mon panier
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('concept')}
                  className="px-8 py-4 border-2 border-gray-300 rounded-full font-bold text-lg hover:border-emerald-600 hover:text-emerald-600 transition-all"
                >
                  Comment ça marche
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <p className="text-3xl sm:text-4xl font-black text-emerald-600">{siteConfig.panier.price}</p>
                  <p className="text-sm text-gray-500 font-medium">Prix unique</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-black text-emerald-600">{siteConfig.stats.producteurs}</p>
                  <p className="text-sm text-gray-500 font-medium">Producteurs</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-black text-emerald-600">{siteConfig.stats.ordersPerWeek}</p>
                  <p className="text-sm text-gray-500 font-medium">Paniers/sem</p>
                </div>
              </div>
            </div>

            <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="relative aspect-square bg-gradient-to-br from-emerald-100 via-white to-orange-100 rounded-[3rem] p-12 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_60%)]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] animate-float">
                  🥬
                </div>
                <div className="absolute top-12 right-12 text-7xl animate-float" style={{ animationDelay: '1s' }}>
                  🥕
                </div>
                <div className="absolute bottom-16 left-16 text-6xl animate-float" style={{ animationDelay: '2s' }}>
                  🍅
                </div>
                <div className="absolute top-1/4 left-12 text-5xl animate-float" style={{ animationDelay: '1.5s' }}>
                  🥔
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section id="concept" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
              Notre engagement
            </h2>
            <p className="text-xl text-gray-600">
              Circuit ultra-court, fraîcheur garantie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.values.map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-emerald-50 to-orange-50 rounded-3xl hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600">
              Simple, rapide et pratique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {siteConfig.howItWorks.map((step, index) => (
              <div key={index} className="relative">
                {index < 3 && (
                  <div className="hidden lg:block absolute top-14 left-full w-full h-1 bg-gradient-to-r from-emerald-200 to-transparent -translate-y-1/2 z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-lg shadow-emerald-200">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto p-8 bg-white rounded-3xl shadow-lg border-2 border-emerald-100">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">
                  Panier type à {siteConfig.panier.price}
                </h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {siteConfig.panier.description}
                </p>
                <p className="text-sm text-gray-500 italic">
                  Exemple : carottes, poireaux, endives, oignons, navets, pommes, champignons, œufs, clémentines et oranges corses...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'histoire de Brice */}
      <section id="histoire" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
                <Star className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-bold text-emerald-700">L'histoire</span>
              </div>
              
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                De la chambre<br />à l'entrepôt de 300m²
              </h2>

              <div className="space-y-6 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {siteConfig.story.beginning}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {siteConfig.story.growth}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {siteConfig.story.evolution}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  {siteConfig.story.today}
                </p>
              </div>

              <div className="p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-100">
                <p className="text-lg italic text-emerald-900 mb-2">
                  "{siteConfig.testimonials[0].text}"
                </p>
                <p className="text-sm font-bold text-emerald-700">
                  — {siteConfig.testimonials[0].author}, fondateur
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] bg-gradient-to-br from-emerald-100 to-orange-100 rounded-3xl shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-9xl mb-4">👨‍🌾</div>
                    <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-2xl mx-8">
                      <p className="font-serif text-2xl font-bold text-gray-900">{siteConfig.founder.name}</p>
                      <p className="text-gray-600 font-medium">Fondateur • {siteConfig.founder.age} ans</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones de livraison */}
      <section id="zones" className="py-24 bg-gradient-to-br from-white via-emerald-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6">
              <MapPin className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
              {siteConfig.stats.pointsRetrait} points de retrait
            </h2>
            <p className="text-xl text-gray-600">
              Dans toutes les Côtes-d'Armor
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {siteConfig.zones.map((zone, index) => (
              <div key={index} className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{zone.name}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {zone.cities.map((city, i) => (
                    <div key={i} className="px-4 py-2 bg-emerald-50 rounded-xl text-center font-medium text-gray-700">
                      {city}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6 text-lg">
              Et bien d'autres communes dans les Côtes-d'Armor !
            </p>
            <button
              onClick={() => setShowOrderModal(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 transition-all hover:shadow-xl hover:shadow-emerald-200"
            >
              <MapPin className="w-5 h-5" />
              Trouver mon point de retrait
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center text-gray-900">
            Questions fréquentes
          </h2>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-emerald-200 transition-all"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between"
                >
                  <span className="font-bold text-lg pr-6 text-gray-900">{item.q}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-emerald-600 flex-shrink-0 transition-transform ${
                      activeAccordion === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-8 py-6 bg-emerald-50 border-t-2 border-emerald-100">
                    <p className="text-gray-700 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <Heart className="w-16 h-16 mx-auto mb-6 text-white/90" />
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Rejoignez la communauté !
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Plus de {siteConfig.stats.facebook} personnes nous suivent déjà sur Facebook.<br />
            Découvrez chaque lundi le panier de la semaine !
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.facebook.com/search/top?q=mon%20panier%20d'armor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-600 rounded-full font-bold hover:bg-gray-50 transition-all hover:shadow-2xl"
            >
              <Facebook className="w-5 h-5" />
              Suivre sur Facebook
            </a>
            <button
              onClick={() => setShowOrderModal(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-800 text-white rounded-full font-bold hover:bg-emerald-900 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Commander
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold mb-2">{siteConfig.name}</h3>
              <p className="text-gray-400">{siteConfig.tagline}</p>
              <p className="text-gray-500 text-sm mt-2">
                {siteConfig.contact.address.street}, {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} {siteConfig.name}</p>
              <p className="text-gray-500 text-xs mt-1">Créé en {siteConfig.stats.created}</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Commander */}
      {showOrderModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
          onClick={() => setShowOrderModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-3xl font-bold text-gray-900">Commander votre panier</h3>
              <button
                onClick={() => setShowOrderModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-2xl">
              <p className="text-blue-900 font-bold mb-2 text-lg flex items-center gap-2">
                <Facebook className="w-5 h-5" />
                Comment commander ?
              </p>
              <p className="text-blue-800 leading-relaxed">
                Chaque <strong>lundi</strong>, nous publions la composition du panier de la semaine sur notre page Facebook. 
                Envoyez-nous un <strong>message privé</strong> pour réserver votre panier !
              </p>
            </div>

            <a
              href="https://www.facebook.com/search/top?q=mon%20panier%20d'armor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 transition-all mb-6 hover:shadow-lg"
            >
              <Facebook className="w-6 h-6" />
              Commander sur Facebook
            </a>

            <div className="space-y-4 p-6 bg-gray-50 rounded-2xl">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900">Prix : {siteConfig.panier.price}</p>
                  <p className="text-sm text-gray-600">Panier unique, composition variable selon saison</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900">Paiement : Espèces ou chèque</p>
                  <p className="text-sm text-gray-600">Sur place le jour du retrait</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900">Retrait : {siteConfig.stats.pointsRetrait} points</p>
                  <p className="text-sm text-gray-600">Dans toutes les Côtes-d'Armor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}