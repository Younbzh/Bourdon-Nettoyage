import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Leaf, Calendar, Droplets, RotateCcw, Cloud } from 'lucide-react';
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

function ValueIcon({ icon }: { icon: string }) {
  const cls = "w-5 h-5 text-maple";
  const sw = 1.5;
  if (icon === 'droplets') return <Droplets className={cls} strokeWidth={sw} />;
  if (icon === 'rotate')   return <RotateCcw className={cls} strokeWidth={sw} />;
  if (icon === 'cloud')    return <Cloud className={cls} strokeWidth={sw} />;
  return <Leaf className={cls} strokeWidth={sw} />;
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [heroIn, setHeroIn] = useState(false);
  const origin   = useReveal();
  const founder  = useReveal(0.1);
  const essences = useReveal();
  const values   = useReveal();
  const events   = useReveal();
  const contact  = useReveal();

  useEffect(() => {
    setTimeout(() => setHeroIn(true), 100);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen font-body text-bark antialiased bg-off-white overflow-x-hidden">

      {/* ── Nav ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-off-white/96 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Leaf className={`w-5 h-5 transition-colors duration-300 ${scrolled ? 'text-maple' : 'text-parchment'}`} strokeWidth={1.5} />
            <span className={`font-heading text-xl tracking-wide transition-colors duration-300 ${scrolled ? 'text-bark' : 'text-parchment'}`}>
              {siteConfig.name}
            </span>
          </div>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className={`flex items-center gap-2 text-sm font-medium transition-all hover:opacity-60 ${scrolled ? 'text-maple' : 'text-parchment/80'}`}
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">{siteConfig.contact.email}</span>
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/erable-du-japon.jpeg)' }}
        />
        <div className="absolute inset-0 bg-bark/55" />

        <div className={`relative z-10 text-center px-4 transition-all duration-1000 ease-out ${heroIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 border border-parchment/25 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-parchment/60" strokeWidth={1.5} />
            <span className="text-parchment/60 text-xs uppercase tracking-[0.2em]">
              Pépinière · Hénansal · Côtes-d'Armor
            </span>
          </div>

          {/* Brand name */}
          <h1
            className="font-heading leading-none tracking-tight mb-4 text-parchment"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 8.5rem)' }}
          >
            Érables du Japon
          </h1>

          {/* Divider */}
          <div className={`mx-auto h-px bg-parchment/30 mb-5 transition-all duration-1000 delay-300 ${heroIn ? 'w-48' : 'w-0'}`} />

          <p className="text-parchment/70 text-sm sm:text-base font-light tracking-[0.18em] uppercase mb-2">
            Victor Diogo · Pépiniériste
          </p>
          <p className="text-parchment/40 text-sm italic font-heading mt-2">
            {siteConfig.slogan}
          </p>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-parchment/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-parchment/30" />
        </div>
      </section>

      {/* ── Ticker ── */}
      <div className="bg-parchment overflow-hidden py-3.5 border-y border-parchment/60">
        <div className="ticker-track whitespace-nowrap text-maple text-xs font-semibold uppercase tracking-[0.25em]">
          {Array(6).fill('Érables du Japon · Ginkgo · Sassafras · Chênes · 200 espèces · Hénansal · Côtes-d\'Armor · De la graine à la vente · ').join('')}
        </div>
      </div>

      {/* ── L'origine ── */}
      <section id="histoire" className="py-24 lg:py-32 bg-off-white">
        <div
          ref={origin.ref}
          className={`max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${origin.on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Quote + story */}
          <div>
            <p className="eyebrow mb-6">L'origine</p>
            <blockquote
              className="font-heading leading-tight text-bark mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              "{siteConfig.about.concept}"
            </blockquote>
            <p className="text-earth text-lg leading-relaxed mb-6">
              {siteConfig.about.story}
            </p>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 text-maple font-semibold text-sm underline underline-offset-4 hover:opacity-60 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.contact.phone}
            </a>
          </div>

          {/* Leaf image */}
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] lg:aspect-auto lg:h-[480px]">
            <img
              src="/feuille-erable-du-japon.jpeg"
              alt="Feuilles d'érable du Japon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Fondateur ── full-width split ── */}
      <div
        ref={founder.ref}
        className={`grid sm:grid-cols-2 transition-all duration-700 ${founder.on ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Portrait */}
        <div
          className="relative min-h-[400px] sm:min-h-[520px] bg-cover bg-center bg-stone"
          style={{ backgroundImage: 'url(/Victor-Diogo.avif)' }}
        />

        {/* Bio */}
        <div className="relative bg-maple px-10 py-20 sm:py-28 flex flex-col justify-center overflow-hidden group">
          <Leaf
            className="absolute -bottom-8 -right-8 w-56 h-56 opacity-[0.08] group-hover:opacity-[0.14] transition-opacity duration-500 text-parchment"
            strokeWidth={0.6}
          />
          <p className="text-parchment/50 text-xs font-semibold uppercase tracking-widest mb-4">Pépiniériste</p>
          <h2
            className="font-heading text-parchment leading-none mb-5"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            Victor Diogo
          </h2>
          <p className="text-parchment/75 text-base max-w-sm leading-relaxed">
            {siteConfig.founder.shortBio}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 bg-parchment/15 hover:bg-parchment/25 text-parchment px-5 py-3 rounded-full text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ── Les essences ── */}
      <section id="essences" className="py-24 lg:py-32 bg-off-white">
        <div
          ref={essences.ref}
          className={`max-w-6xl mx-auto px-5 sm:px-8 transition-all duration-700 ${essences.on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="eyebrow mb-3 text-center">La collection</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-bark text-center mb-14 leading-tight">
            Les essences cultivées
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.essences.map((e) => (
              <div key={e.name} className="p-7 rounded-2xl bg-parchment hover:shadow-md transition-shadow duration-300 flex flex-col">
                <Leaf className="w-6 h-6 text-maple mb-4 flex-shrink-0" strokeWidth={1.5} />
                <h3 className="font-heading text-bark text-xl mb-1">{e.name}</h3>
                <p className="text-maple/50 text-xs italic mb-3 font-body">{e.latin}</p>
                <p className="text-earth text-sm leading-relaxed flex-1">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nos engagements ── */}
      <section className="py-24 bg-parchment">
        <div
          ref={values.ref}
          className={`max-w-6xl mx-auto px-5 sm:px-8 transition-all duration-700 ${values.on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="eyebrow mb-3 text-center">Nos engagements</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-bark text-center mb-14 leading-tight">
            Une culture raisonnée
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {siteConfig.values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-maple/10 flex items-center justify-center mx-auto mb-4">
                  <ValueIcon icon={v.icon} />
                </div>
                <h3 className="font-heading text-bark text-lg mb-2">{v.title}</h3>
                <p className="text-earth text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agenda ── */}
      <section className="py-24 bg-off-white">
        <div
          ref={events.ref}
          className={`max-w-6xl mx-auto px-5 sm:px-8 transition-all duration-700 ${events.on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="eyebrow mb-3 text-center">Agenda</p>
          <h2 className="font-heading text-4xl sm:text-5xl text-bark text-center mb-14 leading-tight">
            Nous retrouver
          </h2>
          <div className="max-w-md mx-auto">
            {siteConfig.events.map((ev) => (
              <div key={ev.name} className="p-8 rounded-2xl bg-maple text-parchment flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-parchment/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Calendar className="w-5 h-5 text-parchment" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-parchment/55 text-xs uppercase tracking-widest mb-2 font-body">Marché de plantes</p>
                  <h3 className="font-heading text-2xl text-parchment mb-2 leading-snug">{ev.name}</h3>
                  <p className="text-parchment font-semibold text-sm">{ev.date}</p>
                  <p className="text-parchment/60 text-sm mt-1">{ev.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact + Carte ── */}
      <section id="contact" className="bg-parchment">
        <div
          ref={contact.ref}
          className={`max-w-6xl mx-auto px-5 sm:px-8 py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start transition-all duration-700 ${contact.on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Infos */}
          <div>
            <p className="eyebrow mb-6">Nous contacter</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-bark mb-10 leading-tight">
              Victor vous accueille<br />à Hénansal
            </h2>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-off-white">
                <MapPin className="w-5 h-5 text-maple flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-bark text-sm">{siteConfig.contact.fullAddress}</p>
                  <p className="text-earth text-xs mt-0.5">{siteConfig.location.detail}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-off-white">
                <Phone className="w-5 h-5 text-maple flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-bark text-sm">{siteConfig.contact.phone}</p>
                  <p className="text-earth text-xs mt-0.5">Visites sur rendez-vous</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-off-white">
                <Mail className="w-5 h-5 text-maple flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-bark text-sm">{siteConfig.contact.email}</p>
                </div>
              </div>
            </div>

            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-3 bg-maple text-parchment px-7 py-4 rounded-full text-sm font-semibold uppercase tracking-wider hover:opacity-85 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              Appeler Victor
            </a>
          </div>

          {/* Carte */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-80 lg:h-full min-h-[320px] border border-parchment/40">
            <iframe
              title="Érables du Japon – Hénansal"
              src="https://maps.google.com/maps?q=H%C3%A9nansal%2C+22400%2C+Bretagne%2C+France&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
      <footer className="bg-bark py-10 px-5 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Leaf className="w-4 h-4 text-parchment/40" strokeWidth={1.5} />
          <p className="font-heading text-xl text-parchment">{siteConfig.fullName}</p>
        </div>
        <p className="text-parchment/30 text-xs tracking-wide">{siteConfig.location.region}</p>
        <p className="text-parchment/20 text-xs mt-6">
          Site réalisé par <span className="text-parchment/35">Avalon Stratège</span>
        </p>
      </footer>

    </div>
  );
}

export default App;
