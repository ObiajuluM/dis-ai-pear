export default function RoastButton({ onClick }) {
  return (
    <div className="pt-4">
      <button
        onClick={onClick}
        className="w-full bg-linear-to-br from-primary to-primary-container py-6 rounded-full text-on-primary font-headline text-2xl font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary-container/20 flex items-center justify-center gap-3 cursor-pointer"
      >
        ROAST ME
        <span className="material-symbols-outlined text-3xl font-bold">
          local_fire_department
        </span>
      </button>
    </div>
  );
}
