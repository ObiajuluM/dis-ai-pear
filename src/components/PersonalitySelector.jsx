const PERSONALITIES = [
  { label: "Gen Z Baddie", value: "gen z baddie" },
  { label: "Savage", value: "savage" },
  { label: "Corporate VC", value: "corporate" },
  { label: "Shakespearean", value: "shakespearean" },
  { label: "Supportive Coach", value: "supportive coach" },
  { label: "LinkedIn Bro", value: "linkedin" },
  { label: "Disappointed Parent", value: "disappointed parent" },
];

export default function PersonalitySelector({ value, onChange }) {
  return (
    <div className="space-y-4">
      <label className="font-label text-sm font-bold text-on-surface-variant">
        ROAST PERSONALITY / STYLE
      </label>
      <div className="flex flex-wrap gap-3">
        {PERSONALITIES.map(({ label, value: val }) => (
          <label key={val} className="group relative cursor-pointer">
            <input
              className="peer sr-only"
              name="personality"
              type="radio"
              checked={value === val}
              onChange={() => onChange(val)}
            />
            <div className="px-6 py-3 rounded-full bg-surface-container border border-outline-variant/20 peer-checked:bg-primary-container peer-checked:text-on-primary-container transition-all group-hover:scale-105">
              <span className="font-label text-sm font-bold">{label}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
