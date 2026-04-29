import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Instagram, Flower2, Wine, Clock } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

// Scroll reveal hook
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

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [heroIn, setHeroIn] = useState(false);
  const concept = useReveal();
  const founders = useReveal(0.1);
  const activities = useReveal();
  const contact = useReveal();

  useEffect(() => {
    setTimeout(() => setHeroIn(true), 100);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen font-body text-warm-dark antialiased bg-warm-white overflow-x-hidden">

      {/* ── Nav ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-warm-white/96 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/641184492_17852844807674363_5044967481643638759_n.jpg"
              alt="Logo Arrosé"
              className="w-9 h-9 rounded-full object-cover"
            />
            <span className={`font-heading text-xl transition-colors duration-300 ${scrolled ? 'text-burgundy' : 'text-cream'}`}>
              {siteConfig.name}
            </span>
          </div>
          <a
            href={siteConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm font-medium transition-all hover:opacity-60 ${scrolled ? 'text-burgundy' : 'text-cream'}`}
          >
            <Instagram className="w-4 h-4" />
            <span className="hidden sm:inline">{siteConfig.contact.instagramHandle}</span>
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-burgundy overflow-hidden px-4">
        {/* dot grid */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #F2E4C8 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

        {/* large decorative circle */}
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #F2E4C8, transparent 70%)' }} />

        <div className={`relative z-10 text-center transition-all duration-1000 ease-out ${heroIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Opening badge */}
          <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 border border-cream/25 rounded-full">
            <Clock className="w-3.5 h-3.5 text-cream/60" />
            <span className="text-cream/60 text-xs uppercase tracking-[0.2em]">
              {siteConfig.opening.status} · {siteConfig.opening.date}
            </span>
          </div>

          {/* Brand name — oversized */}
          <h1 className="font-heading leading-none tracking-tight mb-4 text-cream"
            style={{ fontSize: 'clamp(5rem, 20vw, 14rem)' }}>
            Arrosé
          </h1>

          {/* Divider line */}
          <div className={`mx-auto h-px bg-cream/30 mb-5 transition-all duration-1000 delay-300 ${heroIn ? 'w-48' : 'w-0'}`} />

          <p className="text-cream/60 text-base sm:text-lg font-light tracking-[0.15em] uppercase mb-2">
            La Cave Fleurie
          </p>
          <p className="text-cream/40 text-sm italic font-body mt-1">
            {siteConfig.slogan}
          </p>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-cream/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-cream/30" />
        </div>
      </section>

      {/* ── Ticker ── */}
      <div className="bg-cream overflow-hidden py-3.5 border-y border-cream">
        <div className="ticker-track whitespace-nowrap text-burgundy text-xs font-semibold uppercase tracking-[0.25em]">
          {Array(6).fill('Fleurs · Vins · Trébeurden · Erell & Tanguy · Ouverture Mi-Mai · ').join('')}
        </div>
      </div>

      {/* ── Concept ── */}
      <section id="concept" className="py-24 lg:py-32 bg-warm-white">
        <div
          ref={concept.ref}
          className={`max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center transition-all duration-700 ${concept.on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Big quote */}
          <div>
            <p className="eyebrow mb-6">Le concept</p>
            <blockquote className="font-heading leading-tight text-warm-dark"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              "{siteConfig.about.concept}"
            </blockquote>
          </div>

          {/* Story */}
          <div className="space-y-6">
            <p className="text-warm-mid text-lg leading-relaxed">
              {siteConfig.about.story}
            </p>
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-burgundy font-semibold text-sm underline underline-offset-4 hover:opacity-60 transition-opacity"
            >
              <Instagram className="w-4 h-4" />
              Suivre l'aventure
            </a>
          </div>
        </div>
      </section>

      {/* ── Founders ── full-width split ── */}
      <div
        ref={founders.ref}
        className={`grid sm:grid-cols-2 transition-all duration-700 ${founders.on ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Erell */}
        <div className="relative bg-cream px-10 py-20 sm:py-28 flex flex-col justify-center overflow-hidden group">
          <Flower2
            className="absolute -bottom-6 -right-6 w-48 h-48 opacity-10 group-hover:opacity-20 transition-opacity duration-500 text-burgundy"
            strokeWidth={0.75}
          />
          <p className="eyebrow mb-4">Fleuriste</p>
          <h2 className="font-heading text-burgundy leading-none"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}>
            Erell
          </h2>
          <p className="text-warm-mid mt-4 text-base max-w-xs leading-relaxed">
            Bouquets, compositions, plantes — selon les saisons et vos envies.
          </p>
        </div>

        {/* Tanguy */}
        <div className="relative bg-burgundy px-10 py-20 sm:py-28 flex flex-col justify-center overflow-hidden group">
          <Wine
            className="absolute -bottom-6 -right-6 w-48 h-48 opacity-10 group-hover:opacity-20 transition-opacity duration-500 text-cream"
            strokeWidth={0.75}
          />
          <p className="text-cream/50 text-xs font-semibold uppercase tracking-widest mb-4">Caviste</p>
          <h2 className="font-heading text-cream leading-none"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}>
            Tanguy
          </h2>
          <p className="text-cream/65 mt-4 text-base max-w-xs leading-relaxed">
            Vins sélectionnés avec soin, conseils personnalisés selon vos goûts.
          </p>
        </div>
      </div>

      {/* ── Localisation + Map ── */}
      <section id="contact" className="bg-warm-white">
        <div
          ref={contact.ref}
          className={`max-w-6xl mx-auto px-5 sm:px-8 py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start transition-all duration-700 ${contact.on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Infos */}
          <div>
            <p className="eyebrow mb-6">Nous trouver</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-warm-dark mb-10 leading-tight">
              On vous attend<br />bientôt !
            </h2>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream">
                <MapPin className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-warm-dark text-sm">{siteConfig.contact.fullAddress}</p>
                  <p className="text-warm-mid text-xs mt-0.5">{siteConfig.location.detail}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream">
                <Clock className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-warm-dark text-sm">Ouverture {siteConfig.opening.date}</p>
                  <p className="text-warm-mid text-xs mt-0.5">{siteConfig.opening.message}</p>
                </div>
              </div>
            </div>

            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-burgundy text-cream px-7 py-4 rounded-full text-sm font-semibold uppercase tracking-wider hover:opacity-85 transition-opacity"
            >
              <Instagram className="w-4 h-4" />
              Suivre sur Instagram
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-80 lg:h-full min-h-[320px] border border-cream">
            <iframe
              title="Arrosé – La Cave Fleurie"
              src="https://maps.google.com/maps?q=31c+rue+des+Plages%2C+22560+Tr%C3%A9beurden%2C+France&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
      <footer className="bg-warm-dark py-10 px-5 text-center">
        <p className="font-heading text-xl text-cream mb-1">{siteConfig.fullName}</p>
        <p className="text-cream/30 text-xs tracking-wide">{siteConfig.location.region}</p>
        <p className="text-cream/20 text-xs mt-6">
          Site réalisé par <span className="text-cream/35">Avalon Stratège</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
