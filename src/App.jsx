import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import News from './components/News';

function Footer() {
  return (
    <footer className="w-full bg-black py-10 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Orion Events. Tutti i diritti riservati.</p>
          <nav className="flex gap-4 text-sm text-white/60">
            <a href="#servizi" className="hover:text-white">Servizi</a>
            <a href="#news" className="hover:text-white">News</a>
            <a href="#contatti" className="hover:text-white">Contatti</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black antialiased">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
          <a href="#home" className="font-semibold">Orion Events</a>
          <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
            <a href="#servizi" className="hover:text-white">Servizi</a>
            <a href="#stats" className="hover:text-white">Numeri</a>
            <a href="#news" className="hover:text-white">News</a>
          </nav>
          <a href="#contatti" className="rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500">Richiedi preventivo</a>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <Stats />
        <About />
        <News />
      </main>

      <Footer />
    </div>
  );
}
