import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin, Phone, Mail, Sparkles, Droplets, Sun,
  Building2, Layers, Home, BadgeCheck, Clock, Star,
  Percent,
} from 'lucide-react';
import { siteConfig } from './config/siteConfig';

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setOn(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, on };
}

function ServiceIcon({ icon }: { icon: string }) {
  const cls = 'w-6 h-6 text-bee-dark';
  const sw = 1.5;
  if (icon === 'droplets') return <Droplets  className={cls} strokeWidth={sw} />;
  if (icon === 'sun')      return <Sun       className={cls} strokeWidth={sw} />;
  if (icon === 'building') return <Building2 className={cls} strokeWidth={sw} />;
  if (icon === 'layers')   return <Layers    className={cls} strokeWidth={sw} />;
  if (icon === 'home')     return <Home      className={cls} strokeWidth={sw} />;
  return <Sparkles className={cls} strokeWidth={sw} />;
}

function ValueIcon({ icon }: { icon: string }) {
  const cls = 'w-5 h-5 text-bee-dark';
  const sw = 1.5;
  if (icon === 'badge') return <BadgeCheck className={cls} strokeWidth={sw} />;
  if (icon === 'map')   return <MapPin     className={cls} strokeWidth={sw} />;
  if (icon === 'clock') return <Clock      className={cls} strokeWidth={sw} />;
  return <Star className={cls} strokeWidth={sw} />;
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [heroIn, setHeroIn]     = useState(false);
  const about    = useReveal();
  const services = useReveal();
  const avantAp  = useReveal();
  const values   = useReveal();
  const contact  = useReveal();

  useEffect(() => {
    setTimeout(() => setHeroIn(true), 100);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen font-body text-slate antialiased bg-off-white overflow-x-hidden">

      {/* ── Nav ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/96 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            {/* Bande abeille : carré jaune + carré noir */}
            <div className="flex gap-0.5">
              <span className="w-2.5 h-5 rounded-sm bg-bee block" />
              <span className="w-2.5 h-5 rounded-sm bg-coal block" />
            </div>
            <span className={`font-heading text-xl tracking-wide transition-colors duration-300 ${scrolled ? 'text-coal' : 'text-white'}`}>
              {siteConfig.name}
            </span>
          </div>
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            className={`flex items-center gap-2 text-sm font-semibold transition-all hover:opacity-60 ${scrolled ? 'text-bee-dark' : 'text-white/90'}`}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{siteConfig.contact.phone}</span>
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/vitre-apres-nettoyae.jpeg)' }}
        />
        {/* Gradient sombre sans étouffer la photo */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(17,24,39,0.85) 0%, rgba(17,24,39,0.55) 55%, rgba(17,24,39,0.80) 100%)' }}
        />

        <div className={`relative z-10 text-center px-4 transition-all duration-1000 ease-out ${heroIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 border border-white/25 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-white/60" strokeWidth={1.5} />
            <span className="text-white/60 text-xs uppercase tracking-[0.2em]">
              Auto-entrepreneur · Crédin · Morbihan
            </span>
          </div>

          <h1
            className="font-heading leading-none tracking-tight mb-4 text-white"
            style={{ fontSize: 'clamp(2.8rem, 10vw, 7rem)' }}
          >
            Bourdon Nettoyage
          </h1>

          <div className={`mx-auto h-px mb-5 transition-all duration-1000 delay-300 ${heroIn ? 'w-48' : 'w-0'}`}
            style={{ background: 'linear-gradient(to right, transparent, #F59E0B, transparent)' }}
          />

          <p className="text-white/70 text-sm sm:text-base font-light tracking-[0.18em] uppercase mb-2">
            Nettoyage professionnel · 10 ans d'expérience
          </p>
          <p className="text-white/50 text-base font-body mt-2 mb-10 italic">
            {siteConfig.slogan}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="btn-bee">
              <Phone className="w-4 h-4" />
              Appeler maintenant
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="btn-outline">
              <Mail className="w-4 h-4" />
              Écrire un message
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-bee/60" />
        </div>
      </section>

      {/* ── Ticker ── */}
      <div className="bg-coal overflow-hidden py-3.5 border-y border-bee/30">
        <div className="ticker-track whitespace-nowrap text-bee text-xs font-semibold uppercase tracking-[0.25em]">
          {Array(6).fill("Vitres · Terrasses · Bureaux · Moquettes · Canapés · Matelas · Gîtes · Airbnb · 10 ans d'expérience · -50% SAP · 🐝 Crédin · Morbihan · ").join('')}
        </div>
      </div>

      {/* ── À votre service + SAP ── */}
      <section id="about" className="py-24 lg:py-32 bg-off-white">
        <div
          ref={about.ref}
          className={`max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start transition-all duration-700 ${about.on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Texte */}
          <div>
            <p className="eyebrow mb-6">À votre service</p>
            <blockquote
              className="font-heading leading-tight text-coal mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              "{siteConfig.about.concept}"
            </blockquote>
            <p className="text-slate text-lg leading-relaxed mb-8">
              {siteConfig.about.story}
            </p>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 text-bee-dark font-semibold text-sm underline underline-offset-4 hover:opacity-60 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.contact.phone}
            </a>
          </div>

          {/* Callout SAP -50% — jaune abeille */}
          <div className="bg-bee rounded-2xl p-10 text-coal relative overflow-hidden">
            <Percent
              className="absolute -right-6 -top-6 w-44 h-44 opacity-[0.10] text-coal"
              strokeWidth={0.5}
            />
            <p className="text-coal/60 text-xs font-semibold uppercase tracking-widest mb-4">
              Avantage particuliers
            </p>
            <p
              className="font-heading text-coal leading-none mb-3"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 5.5rem)' }}
            >
              -50%
            </p>
            <h3 className="font-heading text-xl text-coal mb-5 leading-snug">
              {siteConfig.sap.subtitle}
            </h3>
            <p className="text-coal/80 text-sm leading-relaxed mb-5">
              {siteConfig.sap.description}
            </p>
            <p className="text-coal/50 text-xs italic">
              {siteConfig.sap.note}
            </p>
          </div>
        </div>
      </section>

      {/* ── Mes prestations ── */}
      <section id="services" className="py-24 lg:py-32 bg-honey">
        <div
          ref={services.ref}
          className={`max-w-6xl mx-auto px-5 sm:px-8 transition-all duration-700 ${services.on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="eyebrow mb-3 text-center">Ce que je fais</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-coal text-center mb-14 leading-tight">
            Mes prestations
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((s) => (
              <div key={s.name} className="p-7 rounded-2xl bg-white hover:shadow-md transition-shadow duration-300 flex flex-col group">
                <div className="w-11 h-11 rounded-xl bg-wax flex items-center justify-center mb-5 flex-shrink-0 group-hover:bg-bee/20 transition-colors">
                  <ServiceIcon icon={s.icon} />
                </div>
                <h3 className="font-heading text-coal text-xl mb-2">{s.name}</h3>
                <p className="text-slate text-sm leading-relaxed flex-1">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Avant / Après ── */}
      <section id="realisations" className="py-24 bg-off-white">
        <div
          ref={avantAp.ref}
          className={`max-w-6xl mx-auto px-5 sm:px-8 transition-all duration-700 ${avantAp.on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="eyebrow mb-3 text-center">Mes réalisations</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-coal text-center mb-14 leading-tight">
            Avant · Après
          </h2>
          <div className="grid sm:grid-cols-2 gap-10">
            {/* Vitres */}
            <div>
              <h3 className="font-heading text-coal text-lg mb-4 text-center tracking-wide">
                Nettoyage de vitres
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <img
                    src="/vitre-avant-nettoyage.jpeg"
                    alt="Vitre avant nettoyage"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-coal/80 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    Avant
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <img
                    src="/vitre-apres-nettoyae.jpeg"
                    alt="Vitre après nettoyage"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-bee text-coal text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Après
                  </div>
                </div>
              </div>
            </div>

            {/* Matelas */}
            <div>
              <h3 className="font-heading text-coal text-lg mb-4 text-center tracking-wide">
                Nettoyage de matelas
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <img
                    src="/matelas-avant-nettoyage.jpeg"
                    alt="Matelas avant nettoyage"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-coal/80 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    Avant
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <img
                    src="/matelas-apres-nettoyage.jpeg"
                    alt="Matelas après nettoyage"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-bee text-coal text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Après
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pourquoi me choisir ── */}
      <section className="py-24 bg-honey">
        <div
          ref={values.ref}
          className={`max-w-6xl mx-auto px-5 sm:px-8 transition-all duration-700 ${values.on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="eyebrow mb-3 text-center">Mes engagements</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-coal text-center mb-14 leading-tight">
            Pourquoi me choisir
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {siteConfig.values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-bee/15 flex items-center justify-center mx-auto mb-4">
                  <ValueIcon icon={v.icon} />
                </div>
                <h3 className="font-heading text-coal text-lg mb-2">{v.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact + Carte ── */}
      <section id="contact" className="bg-off-white">
        <div
          ref={contact.ref}
          className={`max-w-6xl mx-auto px-5 sm:px-8 py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start transition-all duration-700 ${contact.on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Infos */}
          <div>
            <p className="eyebrow mb-6">Me contacter</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-coal mb-10 leading-tight">
              Demandez votre<br />devis gratuit
            </h2>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-wax border border-bee/20">
                <Phone className="w-5 h-5 text-bee-dark flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-coal text-sm">{siteConfig.contact.phone}</p>
                  <p className="text-fog text-xs mt-0.5">Disponible 7j/7 — réponse rapide</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-wax border border-bee/20">
                <Mail className="w-5 h-5 text-bee-dark flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-coal text-sm">{siteConfig.contact.email}</p>
                  <p className="text-fog text-xs mt-0.5">Devis par e-mail sous 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-wax border border-bee/20">
                <MapPin className="w-5 h-5 text-bee-dark flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-coal text-sm">{siteConfig.contact.fullAddress}</p>
                  <p className="text-fog text-xs mt-0.5">{siteConfig.location.detail}</p>
                </div>
              </div>
            </div>

            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="btn-bee"
            >
              <Phone className="w-4 h-4" />
              Appeler maintenant
            </a>
          </div>

          {/* Carte */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-80 lg:h-full min-h-[320px] border-2 border-bee/25">
            <iframe
              title="Bourdon Nettoyage – Crédin, Morbihan"
              src="https://maps.google.com/maps?q=Cr%C3%A9din%2C+56580%2C+Morbihan%2C+France&t=&z=11&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-coal py-10 px-5 text-center">
        {/* Bande rayures abeille */}
        <div className="flex justify-center gap-1 mb-6">
          {Array(12).fill(null).map((_, i) => (
            <span key={i} className={`w-3 h-1.5 rounded-sm ${i % 2 === 0 ? 'bg-bee' : 'bg-white/10'}`} />
          ))}
        </div>

        <p className="font-heading text-2xl text-white mb-1">{siteConfig.fullName}</p>
        <p className="text-white/30 text-xs tracking-wide mb-4">{siteConfig.location.region}</p>

        <p className="text-white/40 text-xs italic mb-6">
          Selon les lois de l'aérodynamique, le bourdon ne devrait pas pouvoir voler.<br />
          Il nettoie quand même vos vitres.
        </p>

        <div className="flex justify-center gap-5 text-xs text-white/30 mb-6">
          <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="hover:text-bee transition-colors">
            {siteConfig.contact.phone}
          </a>
          <span>·</span>
          <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-bee transition-colors">
            {siteConfig.contact.email}
          </a>
        </div>

        <p className="text-white/20 text-xs">
          Site réalisé par <span className="text-white/35">Avalon Stratège</span>
        </p>
      </footer>

    </div>
  );
}

export default App;
