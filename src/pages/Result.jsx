import { useRef } from "react";
import { toPng } from "html-to-image";
import TopAppBar from "../components/TopAppBar";
import WalletScoreCard from "../components/WalletScoreCard";
import ArchetypeCard from "../components/ArchetypeCard";
import RoastContent from "../components/RoastContent";

/** Split a title string into headline / accentPhrase / headlineSuffix by word thirds. */
function splitTitle(title = "") {
  const words = title.split(" ");
  const n = words.length;
  if (n <= 2) return { headline: title, accentPhrase: "", headlineSuffix: "" };
  const a = Math.floor(n / 3);
  const b = Math.floor((n * 2) / 3);
  return {
    headline: words.slice(0, a).join(" "),
    accentPhrase: words.slice(a, b).join(" "),
    headlineSuffix: words.slice(b).join(" "),
  };
}

/** Shorten a wallet address: 0xABCD...1234 */
function shortWallet(addr = "") {
  if (addr.length <= 10) return addr;
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
}

export default function Result({ roastData, onNavigateHome }) {
  const { headline, accentPhrase, headlineSuffix } = splitTitle(
    roastData?.title,
  );
  const roastRef = useRef(null);

  async function handleShare() {
    const promoText =
      `🔥 My wallet just got roasted by dis-ai-pear!\n` +
      `"${[headline, accentPhrase, headlineSuffix].filter(Boolean).join(" ")}"\n` +
      `Score: ${roastData?.rating ?? "?"}/10 — ${roastData?.rating_title ?? ""}\n\n` +
      `Get your own wallet roasted 👉 https://dis-ai-pear.vercel.app`;
    navigator.clipboard.writeText(promoText).catch(() => {});
    if (!roastRef.current) return;
    const dataUrl = await toPng(roastRef.current, { cacheBust: true });
    const link = document.createElement("a");
    link.download = `dis-ai-pear-roast-${shortWallet(roastData?.wallet_address ?? "wallet")}.png`;
    link.href = dataUrl;
    link.click();
  }

  function handleRoastAgain() {
    onNavigateHome?.();
  }

  return (
    <div
      ref={roastRef}
      className="bg-background font-body text-on-background selection:bg-primary-container min-h-screen"
    >
      <TopAppBar onLogoClick={onNavigateHome} />

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left column — score + archetype */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <WalletScoreCard
              score={roastData?.rating ?? 0}
              verdict={roastData?.rating_title ?? ""}
            />
            <ArchetypeCard archetype={roastData?.wallet_archetype ?? ""} />
          </div>

          {/* Right column — roast text */}
          <div className="md:col-span-8">
            <RoastContent
              wallet={shortWallet(roastData?.wallet_address)}
              headline={headline}
              accentPhrase={accentPhrase}
              headlineSuffix={headlineSuffix}
              paragraphs={[roastData?.body ?? ""]}
              onShare={handleShare}
              onRoastAgain={handleRoastAgain}
            />
          </div>
        </div>
      </main>

      {/* Decorative fixed background blobs */}
      <div className="fixed top-0 left-0 -z-10 opacity-20 pointer-events-none">
        <div className="w-200 h-200 bg-primary-container rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="fixed bottom-0 right-0 -z-10 opacity-10 pointer-events-none">
        <div className="w-150 h-150 bg-secondary-container rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
}
