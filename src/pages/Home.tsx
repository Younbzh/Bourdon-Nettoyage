import ColdOpen from '../components/ColdOpen';
import Hero from '../components/Hero';
import TrustSignals from '../components/TrustSignals';
import Section from '../components/Section';
import { siteConfig } from '../config/siteConfig';

function Home() {
  return (
    <div className="space-y-12 md:space-y-16">
      <ColdOpen />
      <Hero />
      <TrustSignals />

      <Section
        eyebrow="Mon parcours"
        title="De l'ingénierie à la terre"
        description="J'étais ingénieur en qualité logiciel dans les Yvelines. Un voyage au Japon a tout changé : les érables — leurs formes, leurs couleurs, leur silence — m'ont littéralement arrêté. Je suis rentré avec une certitude."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold text-white">Le déclic au Japon</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              C'est face aux érables des jardins japonais que j'ai compris ce que je voulais faire. Pas une passion de surface — une évidence.
            </p>
          </div>
          <div className="glass rose-halo p-6">
            <h3 className="text-sm font-semibold text-white">L'apprentissage du métier</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              J'ai appris en pépinière, puis à l'arboretum de Versailles. Cinq ans à comprendre la terre, les saisons et les arbres — avant de m'installer.
            </p>
          </div>
          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold text-white">Installé à Hénansal</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Depuis janvier 2026, je cultive à Hénansal, en Côtes-d'Armor. Le climat breton est idéal pour les érables — doux, humide, sans excès.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Ce que je cultive"
        title="Des arbres choisis pour leur caractère"
        description="Je sélectionne chaque essence pour sa singularité — forme du feuillage, couleurs saisonnières, comportement en pot ou en pleine terre. Rien n'est ici par hasard."
      >
        <div className="glass p-7 md:p-8 rose-halo">
          <ul className="space-y-3 text-sm text-neutral-300 leading-relaxed">
            {siteConfig.essences.map((e) => (
              <li key={e.name}>
                <span className="font-semibold text-white">{e.name}</span>{' '}
                <span className="italic text-neutral-400">({e.latin})</span>{' '}
                — {e.description}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}

export default Home;
