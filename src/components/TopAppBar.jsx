export default function TopAppBar({ onLogoClick }) {
  return (
    <header className="fixed top-0 w-full z-50 px-6 py-4 bg-white/80 backdrop-blur-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <button
          onClick={onLogoClick}
          className="text-2xl font-black text-zinc-900 tracking-tighter italic font-headline uppercase cursor-pointer hover:opacity-70 transition-opacity"
        >
          dis-ai-pear
        </button>
      </div>
      <div className="bg-zinc-100 h-px w-full absolute bottom-0" />
    </header>
  );
}
