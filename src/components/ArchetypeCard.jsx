/**
 * Archetype label card displayed below the score ring.
 *
 * Props:
 *   archetype  {string}  e.g. "The Degenerate Moon-Shooter"
 */
export default function ArchetypeCard({
  archetype = "The Degenerate Moon-Shooter",
}) {
  return (
    <div className="bg-secondary-container p-8 rounded-xl flex flex-col justify-between">
      <span className="font-label text-xs font-black uppercase tracking-widest text-on-secondary-container mb-2 block">
        Archetype
      </span>
      <h2 className="font-headline font-black text-3xl text-on-secondary-container leading-tight uppercase italic">
        {archetype}
      </h2>
    </div>
  );
}
