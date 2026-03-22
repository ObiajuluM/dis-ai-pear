/**
 * The main roast text block with wallet header, headline, body paragraphs,
 * and action buttons.
 *
 * Props:
 *   wallet       {string}   Truncated wallet address label, e.g. "0x71C...4f92"
 *   headline     {string}   Bold roast headline (plain text; italic span goes around `accentWord`)
 *   accentPhrase {string}   The phrase inside the headline that gets the neon gradient
 *   paragraphs   {string[]} Array of roast body paragraphs
 *   onShare      {function}
 *   onRoastAgain {function}
 */
export default function RoastContent({
  wallet = "0x71C...4f92",
  headline = "Your portfolio looks like a",
  accentPhrase = "dumpster fire",
  headlineSuffix = "in a hurricane.",
  paragraphs = [
    "Honestly, I've seen more financial stability in a game of Monopoly played by toddlers. You've got 85% of your net worth in a coin named after a flightless bird, and your \"diversification\" strategy is just buying every rug-pull that mentions 'AI' in the whitepaper.",
    "If your wallet was a person, it would be the guy who tries to pay for a Tesla with expired coupons. Stop checking the charts; they aren't going up. They're just flatlining out of sheer embarrassment.",
  ],
  onShare,
  onScreenshot,
  onRoastAgain,
}) {
  return (
    <div className="bg-surface-container-lowest p-10 md:p-14 rounded-xl roast-card-shadow relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-container/20 blur-3xl rounded-full" />
      {/* Wallet header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-on-surface rounded-full flex items-center justify-center">
          <span
            className="material-symbols-outlined text-primary-fixed"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            local_fire_department
          </span>
        </div>
        <div>
          <p className="text-xs font-black text-outline uppercase tracking-widest leading-none">
            Analysis complete
          </p>
          <p className="text-sm font-bold text-on-surface">Wallet: {wallet}</p>
        </div>
      </div>
      {/* Roast headline */}
      <h1 className="font-headline font-black text-4xl md:text-6xl text-on-surface leading-[0.9] tracking-tighter uppercase mb-8">
        {headline}{" "}
        <span className="neon-gradient-text italic">{accentPhrase}</span>{" "}
        {headlineSuffix}
      </h1>
      {/* Body paragraphs */}
      <div className="space-y-6">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed"
          >
            {p}
          </p>
        ))}
      </div>
      {/* Actions */}
      <div className="mt-12 pt-8 border-t-4 border-surface-container flex flex-col sm:flex-row items-center gap-6">
        <button
          onClick={onShare}
          className="w-full sm:w-auto px-10 py-5 bg-primary-container text-on-primary-container font-headline font-black uppercase tracking-tighter rounded-full text-lg hover:scale-105 transition-all flex items-center justify-center gap-3"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            share
          </span>
          Share on X
        </button>
        <button
          onClick={onScreenshot}
          className="w-full sm:w-auto px-10 py-5 bg-surface-container-high text-on-surface font-headline font-black uppercase tracking-tighter rounded-full text-lg hover:scale-105 transition-all flex items-center justify-center gap-3"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            photo_camera
          </span>
          Save Screenshot
        </button>
        <button
          onClick={onRoastAgain}
          className="w-full sm:w-auto px-10 py-5 bg-surface-container text-on-surface font-headline font-black uppercase tracking-tighter rounded-full text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 cursor-pointer"
        >
          <span className="material-symbols-outlined">refresh</span>
          Roast Another
        </button>
      </div>
    </div>
  );
}
