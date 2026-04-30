import Section from '../components/Section';
import { siteConfig } from '../config/siteConfig';

function Contact() {
  return (
    <div className="space-y-16 md:space-y-20">
      <Section
        eyebrow="Me contacter"
        title="Je réponds personnellement"
        description="Vous avez une question sur un érable, une commande à préparer, ou vous voulez simplement visiter la pépinière ? Contactez-moi directement — je réponds à tous les messages."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass rose-halo p-7">
            <h3 className="text-base font-semibold text-white">Envoyer un message</h3>
            <div className="mt-5 space-y-4">
              <div>
                <label className="block text-xs text-neutral-300 mb-1">Votre nom</label>
                <input className="w-full rounded-2xl bg-black/40 border border-white/10 px-3 py-2 text-sm text-neutral-100" />
              </div>
              <div>
                <label className="block text-xs text-neutral-300 mb-1">Votre email</label>
                <input
                  type="email"
                  className="w-full rounded-2xl bg-black/40 border border-white/10 px-3 py-2 text-sm text-neutral-100"
                />
              </div>
              <div>
                <label className="block text-xs text-neutral-300 mb-1">Votre message</label>
                <textarea
                  rows={4}
                  className="w-full rounded-2xl bg-black/40 border border-white/10 px-3 py-2 text-sm text-neutral-100"
                />
              </div>
              <button className="btn-primary w-full">Envoyer</button>
            </div>
          </div>

          <div className="glass gold-halo p-7">
            <h3 className="text-base font-semibold text-white">Mes coordonnées</h3>
            <div className="mt-5 space-y-3 text-sm text-neutral-300">
              <div>📍 {siteConfig.contact.fullAddress}</div>
              <div>
                📞{' '}
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div>
                ✉️{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
            <p className="mt-6 text-xs text-neutral-400 leading-relaxed">
              Je reçois sur rendez-vous à Hénansal. N'hésitez pas à appeler directement — c'est souvent plus rapide qu'un message.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Contact;
