import { motion } from 'framer-motion';

export default function About() {
  const features = [
    {
      title: 'Project management end‑to‑end',
      desc: 'Dalla strategia al coordinamento operativo: un unico team che gestisce budget, fornitori e stakeholder.'
    },
    {
      title: 'Esperienze memorabili',
      desc: 'Design scenografico, tecnologie interattive e contenuti premium per elevare il tuo brand.'
    },
    {
      title: 'Precisione e compliance',
      desc: 'Processi certificati, attenzione alla sicurezza e cura del dettaglio per eventi senza imprevisti.'
    }
  ];

  return (
    <section id="servizi" className="relative w-full bg-gradient-to-b from-black to-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-4xl"
        >
          Siamo il partner giusto per i tuoi eventi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 max-w-2xl text-white/70"
        >
          Un team multidisciplinare che unisce creatività e rigore organizzativo per trasformare obiettivi complessi in esperienze d'impatto.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
