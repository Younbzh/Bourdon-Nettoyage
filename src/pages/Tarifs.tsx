import Section from '../components/Section';

function Tarifs() {
  return (
    <div className="space-y-16 md:space-y-20">
      <Section
        eyebrow="Mes arbres"
        title="Ce que je propose à la vente"
        description="Je vends des arbres que j'ai cultivés moi-même, de la graine jusqu'au pot. Les tailles varient selon les espèces et les années de culture. Contactez-moi pour connaître les disponibilités — le stock évolue au fil des saisons."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold text-white">Érables du Japon</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Plus de 200 espèces d'Acer palmatum, en pot, disponibles à la vente directe. Je vous aide à choisir selon votre espace et vos envies — en personne ou par message.
            </p>
          </div>
          <div className="glass rose-halo p-6">
            <h3 className="text-sm font-semibold text-white">Ginkgo & Sassafras</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Des essences rares que je cultive avec les mêmes exigences. Idéales pour les jardins qui cherchent du caractère et de la singularité.
            </p>
          </div>
          <div className="glass gold-halo p-6">
            <h3 className="text-sm font-semibold text-white">Chênes</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Des chênes que je sélectionne pour leur vigueur et leur longévité. Pour ceux qui plantent en pensant aux générations suivantes.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Comment acheter"
        title="Sur place ou lors d'un marché"
        description="Je reçois sur rendez-vous à Hénansal — appelez-moi ou envoyez un message. Je serai aussi présent au marché des plantes de Plurien le jeudi 14 mai 2026."
      />
    </div>
  );
}

export default Tarifs;
