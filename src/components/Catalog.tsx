import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { collections, formatPrice, products } from '@/data/catalog';
import { useCart } from '@/hooks/useCart';
import Reveal, { Ornament } from './Reveal';

export default function Catalog({
  filter,
  onFilter,
}: {
  filter: string;
  onFilter: (id: string) => void;
}) {
  const { add, setOpen } = useCart();
  const [justAdded, setJustAdded] = useState<string | null>(null);

  const visible =
    filter === 'todas' ? products : products.filter((p) => p.collectionId === filter);

  const handleAdd = (id: string) => {
    add(id);
    setJustAdded(id);
    window.setTimeout(() => setJustAdded(null), 1400);
  };

  return (
    <section id="catalogo" className="relative bg-bosque-900/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <Reveal className="text-center">
          <p className="eyebrow mb-4">Tesoros del Taller</p>
          <h2 className="font-display text-gold text-3xl font-bold uppercase tracking-[0.14em] md:text-5xl">
            Fragancias y Reliquias
          </h2>
          <Ornament className="mt-8" />
        </Reveal>

        {/* Filtros */}
        <Reveal className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-3" role="tablist" aria-label="Filtrar por colección">
            {[{ id: 'todas', name: 'Todas' }, ...collections].map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={filter === c.id}
                onClick={() => onFilter(c.id)}
                className={`font-display px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] transition-all duration-300 ${
                  filter === c.id
                    ? 'border border-oro-400 bg-oro-500/15 text-oro-300'
                    : 'border border-oro-500/25 text-marfil/70 hover:border-oro-500/60 hover:text-oro-400'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid de productos */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 90}>
              <article className="card-mystic group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bosque-950/70 via-transparent to-transparent" />
                  {p.badge && (
                    <span className="font-display absolute left-4 top-4 border border-oro-500/50 bg-bosque-950/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-oro-300 backdrop-blur-sm">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  <p className="font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-oro-500/90">
                    {collections.find((c) => c.id === p.collectionId)?.name}
                  </p>
                  <h3 className="font-display text-gold mt-2 text-xl font-bold uppercase tracking-[0.1em]">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-base font-light italic text-marfil/90">
                    {p.notes}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {p.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm font-light text-marfil/70">
                        <span className="text-oro-500" aria-hidden="true">✦</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center justify-between border-t border-oro-500/20 pt-4">
                    <span className="font-display text-lg font-bold tracking-wider text-oro-400">
                      {formatPrice(p.price)}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleAdd(p.id)}
                      className={`font-display inline-flex h-11 items-center gap-2 px-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                        justAdded === p.id
                          ? 'bg-oro-500 text-bosque-950'
                          : 'border border-oro-500/50 text-oro-400 hover:bg-oro-500/15 hover:text-oro-300'
                      }`}
                    >
                      <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                      {justAdded === p.id ? 'Añadido' : 'Añadir'}
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <button type="button" onClick={() => setOpen(true)} className="btn-gold">
            Ver mi Bolsa
          </button>
        </Reveal>
      </div>
    </section>
  );
}
