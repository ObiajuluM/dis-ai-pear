/**
 * Circular score ring + final verdict label.
 *
 * Props:
 *   score       {number}  0-100
 *   verdict     {string}  e.g. "Financial Disaster"
 */
const CIRCUMFERENCE = 2 * Math.PI * 88; // r=88

export default function WalletScoreCard({
  score = 82,
  verdict = "Financial Disaster",
}) {
  const offset = CIRCUMFERENCE - (score / 100) * CIRCUMFERENCE;

  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl roast-card-shadow flex flex-col items-center justify-center text-center border border-outline-variant/10 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className="material-symbols-outlined text-9xl">analytics</span>
      </div>
      <span className="font-label text-xs font-black uppercase tracking-widest text-secondary mb-4">
        Final Verdict
      </span>
      <div className="relative">
        <svg className="w-48 h-48 transform -rotate-90">
          <circle
            className="text-surface-container"
            cx="96"
            cy="96"
            r="88"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="12"
          />
          <circle
            className="text-primary-container"
            cx="96"
            cy="96"
            r="88"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="12"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-7xl font-headline font-black text-on-surface">
            {score}
          </span>
          <span className="text-sm font-bold text-outline uppercase tracking-tighter">
            / 100
          </span>
        </div>
      </div>
      <p className="mt-6 font-headline font-bold text-xl text-primary uppercase">
        {verdict}
      </p>
    </div>
  );
}
