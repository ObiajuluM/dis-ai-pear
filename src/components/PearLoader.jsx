/**
 * Full-screen pear-themed loading overlay.
 * Spins indefinitely — unmounts when the parent removes it.
 */
import { useEffect, useState } from "react";

const MESSAGES = [
  "Sniffing your wallet…",
  "Judging your life choices…",
  "Consulting the pear oracle…",
  "Calculating your L's…",
  "Preparing the roast…",
];

export default function PearLoader() {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setMsgIndex((i) => (i + 1) % MESSAGES.length),
      520,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-100 bg-background flex flex-col items-center justify-center gap-8 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-container/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Pear SVG */}
      <div className="relative flex items-center justify-center">
        <svg
          width="140"
          height="160"
          viewBox="0 0 140 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce drop-shadow-2xl"
          style={{ animationDuration: "1s" }}
        >
          {/* Body */}
          <ellipse cx="70" cy="105" rx="52" ry="52" fill="#cefc00" />
          {/* Upper bulge */}
          <ellipse cx="70" cy="62" rx="28" ry="32" fill="#c1ed00" />
          {/* Shine */}
          <ellipse cx="56" cy="55" rx="8" ry="11" fill="white" opacity="0.35" />
          <ellipse cx="48" cy="98" rx="11" ry="7" fill="white" opacity="0.2" />
          {/* Stem */}
          <path
            d="M70 30 C70 18, 80 12, 86 8"
            stroke="#455600"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Leaf */}
          <path
            d="M78 22 C88 14, 100 18, 94 28 C88 32, 76 30, 78 22Z"
            fill="#4f6300"
          />
          {/* Drip 1 */}
          <ellipse
            cx="58"
            cy="158"
            rx="5"
            ry="7"
            fill="#cefc00"
            opacity="0.8"
            className="animate-drip1"
          />
          {/* Drip 2 */}
          <ellipse
            cx="82"
            cy="154"
            rx="4"
            ry="6"
            fill="#c1ed00"
            opacity="0.7"
            className="animate-drip2"
          />
        </svg>

        {/* Glow ring */}
        <div className="absolute w-44 h-44 rounded-full border-4 border-primary-container/40 animate-ping" />
      </div>

      {/* App name */}
      <p className="font-headline text-4xl font-black tracking-tighter italic uppercase text-on-surface">
        dis-ai-pear
      </p>

      {/* Cycling status message */}
      <p
        key={msgIndex}
        className="font-body text-lg text-on-surface-variant animate-fade-in"
      >
        {MESSAGES[msgIndex]}
      </p>

      {/* Indeterminate progress bar */}
      <div className="w-64 h-1.5 bg-surface-container rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-container rounded-full"
          style={{ animation: "indeterminate 1.4s ease-in-out infinite" }}
        />
      </div>

      <style>{`
        @keyframes indeterminate {
          0%   { width: 0%;   margin-left: 0%; }
          50%  { width: 60%;  margin-left: 20%; }
          100% { width: 0%;   margin-left: 100%; }
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadein 0.3s ease-out;
        }
        @keyframes drip1 {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50%       { transform: translateY(8px); opacity: 0.4; }
        }
        @keyframes drip2 {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          60%       { transform: translateY(10px); opacity: 0.3; }
        }
        .animate-drip1 { animation: drip1 1s ease-in-out infinite; }
        .animate-drip2 { animation: drip2 1.2s ease-in-out infinite 0.3s; }
      `}</style>
    </div>
  );
}
