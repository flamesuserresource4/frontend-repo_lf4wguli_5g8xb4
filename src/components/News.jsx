import { motion } from 'framer-motion';

const newsItems = [
  {
    title: 'Summit Innovazione 2025: aperte le iscrizioni',
    date: '02 Ott 2025',
    excerpt: 'Un format ibrido con keynote internazionali, expo tecnologica e workshop verticali su AI e sostenibilità.'
  },
  {
    title: 'Nuovo polo congressuale partner',
    date: '15 Set 2025',
    excerpt: 'Firmata la partnership con il Centro Congressi Aurora: 5.000 posti, sale modulari e regia broadcast 4K.'
  },
  {
    title: 'Case study: convention retail da 2.000 ospiti',
    date: '28 Lug 2025',
    excerpt: 'Progettazione, produzione e gestione completa con app dedicata per networking e Q&A live.'
  }
];

export default function News() {
  return (
    <section id="news" className="relative w-full bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-semibold md:text-4xl">Ultime news</h2>
          <a href="#" className="text-sm text-violet-400 hover:text-violet-300">Tutte le news</a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {newsItems.map((n, i) => (
            <motion.article
              key={n.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="h-40 w-full bg-gradient-to-br from-violet-600/40 via-fuchsia-500/30 to-indigo-500/30" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-white/60">{n.date}</p>
                <h3 className="mt-2 text-lg font-medium group-hover:text-violet-300">{n.title}</h3>
                <p className="mt-2 text-sm text-white/70">{n.excerpt}</p>
                <a href="#" className="mt-4 inline-block text-sm text-violet-400 hover:text-violet-300">Leggi di più</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
