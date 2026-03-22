export default function WalletInput({ value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="font-label text-sm font-bold text-on-surface-variant flex items-center gap-2">
        <span className="material-symbols-outlined text-sm">wallet</span>
        WALLET ADDRESS
      </label>
      <input
        className="w-full bg-surface-container-high border-none rounded-xl px-6 py-4 font-body text-lg focus:ring-2 focus:ring-primary-container transition-all placeholder:text-outline/50 outline-none"
        placeholder="0x... or Whatever"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
