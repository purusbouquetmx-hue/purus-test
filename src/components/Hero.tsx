import Sparkles from './Sparkles';

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
      {/* Fondo cinematográfico */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/img/hero.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bosque-950/80 via-bosque-950/45 to-bosque-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,15,12,0.42)_0%,rgba(5,15,12,0.62)_100%)]" />
      </div>

      <Sparkles density={46} />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-16 text-center">
        <p className="eyebrow mb-6 animate-[heroFade_1.2s_ease_both]">
          Pasión y Arte en Perfume
        </p>
        <h1
          className="font-display text-gold text-5xl font-black uppercase leading-[1.08] tracking-[0.12em] md:text-7xl lg:text-8xl animate-[heroFade_1.2s_ease_0.15s_both]"
        >
          Purus
          <br />
          Bouquet
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg font-light italic text-marfil/90 md:text-xl animate-[heroFade_1.2s_ease_0.3s_both]">
          Donde la tradición mexicana, la naturaleza y el arte en 3D convergen
          en fragancias que son reliquias.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-[heroFade_1.2s_ease_0.45s_both]">
          <a href="#colecciones" className="btn-solid-gold">
            Explorar Colecciones
          </a>
          <a href="#esencia" className="btn-gold">
            Nuestra Esencia
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#colecciones"
        aria-label="Bajar a colecciones"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-oro-500/80 transition-colors hover:text-oro-300"
      >
        <svg
          width="22"
          height="34"
          viewBox="0 0 22 34"
          fill="none"
          aria-hidden="true"
          className="animate-bounce"
        >
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="11" cy="10" r="2.5" fill="currentColor" />
        </svg>
      </a>

      <style>{`
        @keyframes heroFade {
          from { opacity: 0; transform: translateY(26px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}
