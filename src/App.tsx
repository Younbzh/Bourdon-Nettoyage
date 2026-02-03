import React, { useState } from 'react';
import { MapPin, Phone, Clock, Star, Sparkles, Flame, Heart, ShoppingBag, Users, ChevronDown, Soup } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section - K-Street Food Vibe */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 via-rose-500 to-orange-500">
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 text-9xl">🌶️</div>
          <div className="absolute top-1/3 right-1/4 text-8xl">🍜</div>
          <div className="absolute bottom-1/4 left-1/3 text-7xl">🥢</div>
          <div className="absolute top-2/3 right-1/3 text-6xl">🥬</div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Logo avec effet néon */}
          <div className="mb-8">
            <div className="inline-block mb-6 px-8 py-3 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/50">
              <span className="text-white font-bold text-lg tracking-wider">NOUVEAU À SAINT-BRIEUC</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black text-white mb-4 drop-shadow-2xl" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
              LE GRIFFON<br/>GLOUTON
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-20 bg-yellow-300"></div>
              <Flame className="w-10 h-10 text-yellow-300 animate-pulse" />
              <div className="h-1 w-20 bg-yellow-300"></div>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-3xl md:text-5xl font-bold text-yellow-200 mb-4 drop-shadow-lg" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            STREET FOOD CORÉENNE
          </p>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium">
            {siteConfig.slogan} 🇰🇷
          </p>

          {/* Key features badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-red-600 font-bold text-lg shadow-xl">
              <span className="mr-2">🥬</span> Kimchi Maison
            </div>
            <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-red-600 font-bold text-lg shadow-xl">
              <span className="mr-2">⚡</span> Authentique
            </div>
            <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-red-600 font-bold text-lg shadow-xl">
              <span className="mr-2">🔥</span> Fait Maison
            </div>
          </div>

          {/* Rating */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-2xl">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-2xl text-gray-800">{siteConfig.rating.score}/5</span>
              <span className="text-gray-600">• Ouvert janvier 2025</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="group bg-white hover:bg-yellow-300 text-red-600 px-12 py-5 font-black text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 rounded-full"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <Soup className="w-6 h-6" />
              Découvrir le Menu
            </a>
            <a
              href="#contact"
              className="group bg-red-700 hover:bg-red-800 text-white px-12 py-5 font-black text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 rounded-full"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <MapPin className="w-6 h-6" />
              Nous Trouver
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-10 h-10 text-white" />
        </div>
      </header>

      {/* Notre Histoire */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-red-100 rounded-full">
              <span className="text-red-600 font-bold">À PROPOS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Notre Histoire
            </h2>
            <div className="w-24 h-2 bg-red-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {siteConfig.about.story}
              </p>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-l-4 border-red-500">
                <p className="text-xl font-bold text-red-700 italic mb-4">
                  "{siteConfig.about.vision}"
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {siteConfig.about.values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-500 to-orange-500 p-6 rounded-xl text-white text-center hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  <p className="font-bold">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              L'Équipe
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {siteConfig.company.team.map((member, index) => (
                <div key={index} className="px-6 py-3 bg-gray-100 rounded-full text-gray-800 font-medium">
                  <Users className="w-5 h-5 inline mr-2 text-red-500" />
                  {member}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spécialité Signature */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-4 px-6 py-2 bg-yellow-200 rounded-full">
            <span className="text-yellow-900 font-bold">NOTRE FIERTÉ</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {siteConfig.specialties.signature.icon} {siteConfig.specialties.signature.name}
          </h2>
          <p className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.specialties.signature.description}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🥬", text: "100% Maison", desc: "Fait chaque jour" },
              { icon: "🌶️", text: "Authentique", desc: "Recette traditionnelle" },
              { icon: "❤️", text: "Avec Amour", desc: "Préparé avec soin" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.text}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu - Les Spécialités */}
      <section className="py-20 px-4 bg-white" id="menu">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-red-100 rounded-full">
              <span className="text-red-600 font-bold">MENU</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Nos Spécialités Coréennes
            </h2>
            <div className="w-24 h-2 bg-red-500 mx-auto"></div>
          </div>

          <div className="space-y-16">
            {siteConfig.specialties.categories.map((category, catIndex) => (
              <div key={catIndex}>
                <div className="mb-8">
                  <h3 className="text-4xl font-black text-red-600 mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {category.name}
                  </h3>
                  <p className="text-lg text-gray-600">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.dishes.map((dish, dishIndex) => (
                    <div
                      key={dishIndex}
                      className={`relative bg-gradient-to-br ${
                        dish.popular ? 'from-red-500 to-orange-500 text-white' : 'from-gray-50 to-gray-100'
                      } p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group`}
                    >
                      {dish.popular && (
                        <div className="absolute -top-3 -right-3 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                          <Sparkles className="w-4 h-4 inline mr-1" />
                          POPULAIRE
                        </div>
                      )}
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {dish.icon}
                      </div>
                      <h4 className={`text-xl font-bold mb-3 ${dish.popular ? 'text-white' : 'text-gray-900'}`}>
                        {dish.name}
                      </h4>
                      <p className={`text-sm leading-relaxed ${dish.popular ? 'text-white/90' : 'text-gray-600'}`}>
                        {dish.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les Saveurs */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-500 via-rose-500 to-orange-500 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-white font-bold">INGRÉDIENTS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              {siteConfig.ingredients.title}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {siteConfig.ingredients.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.ingredients.essentials.map((ingredient, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-3">{ingredient.name}</h3>
                <p className="text-white/80 mb-3">{ingredient.description}</p>
                <div className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                  {ingredient.flavor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Coréenne */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-orange-100 rounded-full">
              <span className="text-orange-600 font-bold">CULTURE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              {siteConfig.culture.title}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {siteConfig.culture.intro}
            </p>
          </div>

          {/* Principles */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {siteConfig.culture.principles.map((principle, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-red-700 mb-3">{principle.name}</h3>
                <p className="text-gray-700 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>

          {/* Fun Facts */}
          <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-12 rounded-3xl">
            <h3 className="text-3xl font-black text-white text-center mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Le Saviez-Vous ? 🇰🇷
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {siteConfig.culture.funFacts.map((fact, index) => (
                <div key={index} className="bg-white/90 p-6 rounded-xl">
                  <Sparkles className="w-6 h-6 text-orange-500 mb-3" />
                  <p className="text-gray-800 font-medium">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Localisation */}
      <section className="py-20 px-4 bg-gray-900 text-white" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-red-600 rounded-full">
              <span className="text-white font-bold">CONTACT</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Venez Nous Voir !
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Adresse */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-red-600 to-orange-600 p-8 rounded-2xl">
                <MapPin className="w-12 h-12 text-white mb-6" />
                <h3 className="text-3xl font-black mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  Adresse
                </h3>
                <p className="text-xl leading-relaxed mb-4">
                  {siteConfig.contact.address.street}<br />
                  {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
                </p>
                <p className="text-white/80 text-sm">
                  {siteConfig.contact.address.details}
                </p>
              </div>

              {/* Nearby */}
              <div className="bg-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">À Proximité</h3>
                <ul className="space-y-3">
                  {siteConfig.location.nearby.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden h-96 lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.5!2d-2.7608!3d48.5138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480e2ba5a6d8e8b9%3A0x5f8e8e8e8e8e8e8e!2s29%20Rue%20Charbonnerie%2C%2022000%20Saint-Brieuc!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Le Griffon Glouton"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 px-4 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-5xl font-black mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            LE GRIFFON GLOUTON
          </h3>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 mb-8">
            Street Food Coréenne • Saint-Brieuc
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#menu"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold transition-colors rounded-full"
            >
              <Soup className="w-5 h-5" />
              Voir le Menu
            </a>
          </div>

          <div className="text-gray-500 text-sm">
            <p className="mb-2">
              {siteConfig.contact.address.street}, {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
            </p>
            <p>
              © {new Date().getFullYear()} Le Griffon Glouton - Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;