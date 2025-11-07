import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

function Counter({ to }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * to);
      if (ref.current) ref.current.textContent = value.toLocaleString('it-IT');
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  }, [isInView, to, controls]);

  return (
    <motion.span ref={ref} initial={{ opacity: 0, y: 10 }} animate={controls} className="tabular-nums" />
  );
}

export default function Stats() {
  const items = [
    { label: 'Eventi realizzati', value: 320 },
    { label: 'Congressi scientifici', value: 95 },
    { label: 'Partecipanti coinvolti', value: 48000 },
    { label: 'Città raggiunte', value: 27 },
  ];

  return (
    <section id="stats" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="text-3xl font-semibold md:text-4xl">
              <Counter to={item.value} />
              {item.label === 'Partecipanti coinvolti' ? '+' : ''}
            </div>
            <p className="mt-2 text-sm text-white/70">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
