import { useState } from "react";
import TopAppBar from "../components/TopAppBar";
import BackgroundOrbs from "../components/BackgroundOrbs";
import WalletInput from "../components/WalletInput";
import NetworkSelect from "../components/NetworkSelect";
import PersonalitySelector from "../components/PersonalitySelector";
import RoastButton from "../components/RoastButton";
import PearLoader from "../components/PearLoader";
import { postRoast } from "../api/roast";

export default function Home({ onNavigateToResult, onNavigateHome }) {
  const [walletAddress, setWalletAddress] = useState("");
  const [network, setNetwork] = useState("https://dream-rpc.somnia.network/");
  const [personality, setPersonality] = useState("gen z baddie");
  const [loading, setLoading] = useState(false);

  async function handleRoast() {
    if (!walletAddress.trim()) return;
    setLoading(true);
    try {
      const data = await postRoast({
        walletAddress,
        rpcUrl: network,
        style: personality,
      });
      console.log("roast response:", {
        ...data,
        wallet_address: walletAddress,
      });
      onNavigateToResult({ ...data, wallet_address: walletAddress });
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <div className="bg-background font-body text-on-surface min-h-screen flex flex-col">
      {loading && <PearLoader />}
      <TopAppBar onLogoClick={onNavigateHome} />
      <main className="grow flex items-center justify-center px-6 pt-32 pb-24 relative overflow-hidden">
        <BackgroundOrbs />
        {/* Main Roast Card */}
        <div className="w-full max-w-2xl bg-surface-container-lowest rounded-lg p-8 md:p-12 neon-glow relative overflow-hidden border border-outline-variant/10">
          {/* Tonal corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/10 rounded-bl-[100px] z-0" />
          <div className="relative z-10">
            {/* Label Tag */}
            <div className="mb-6">
              <span className="font-label text-xs font-bold tracking-widest uppercase text-secondary bg-secondary-container/30 px-3 py-1 rounded-full">
                SAY HI 👋
              </span>
            </div>
            {/* Headline */}
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-on-surface mb-8 leading-[0.9]">
              Let's See How Shitty Your Finances Are.
            </h1>
            {/* Form */}
            <div className="space-y-8">
              <WalletInput value={walletAddress} onChange={setWalletAddress} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <NetworkSelect value={network} onChange={setNetwork} />
              </div>
              <PersonalitySelector
                value={personality}
                onChange={setPersonality}
              />
              <RoastButton onClick={handleRoast} />
            </div>
            <p className="mt-8 text-center font-body text-sm text-outline italic">
              The creator is jobless, please hire him :D
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
