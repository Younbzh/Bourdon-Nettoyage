import Section from '../components/Section';
import { siteConfig } from '../config/siteConfig';

function Infos() {
  return (
    <div className="space-y-16 md:space-y-20">
      <Section
        eyebrow="Ma philosophie"
        title="Cultiver autrement, depuis la graine"
        description="Je ne rachète pas d'arbres pour les revendre. Tout ce que je propose, je l'ai semé, greffé ou bouturé ici, à Hénansal. C'est ce que j'appelle le circuit fermé — et c'est non négociable."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {siteConfig.values.slice(0, 2).map((v) => (
            <div key={v.title} className="glass gold-halo p-6">
              <h3 className="text-sm font-semibold text-white">{v.title}</h3>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{v.description}</p>
            </div>
          ))}
          {siteConfig.values.slice(2).map((v) => (
            <div key={v.title} className="glass rose-halo p-6">
              <h3 className="text-sm font-semibold text-white">{v.title}</h3>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="À venir"
        title="Marchés & rencontres"
        description="Je participe à des marchés de plantes pour vous rencontrer, répondre à vos questions et vous présenter mes arbres directement. C'est toujours plus simple de choisir un érable en le voyant."
      >
        <div className="grid gap-6 md:grid-cols-1">
          {siteConfig.events.map((event) => (
            <div key={event.name} className="glass gold-halo p-6">
              <h3 className="text-sm font-semibold text-white">{event.name}</h3>
              <p className="mt-2 text-sm text-neutral-300">{event.date} · {event.location}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default Infos;
