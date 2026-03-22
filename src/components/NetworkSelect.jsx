const NETWORKS = [
  { name: "SOMNIA TESTNET", rpc: "https://dream-rpc.somnia.network/" },
  { name: "MONAD TESTNET", rpc: "https://testnet-rpc.monad.xyz/" },
  { name: "MEGAETH TESTNET", rpc: "https://carrot.megaeth.com/rpc/" },
  { name: "FLOW TESTNET", rpc: "https://testnet.evm.nodes.onflow.org/" },
  { name: "ASSETCHAIN TESTNET", rpc: "https://enugu-rpc.assetchain.org/" },
  {
    name: "IOTA EVM TESTNET",
    rpc: "https://json-rpc.evm.testnet.iotaledger.net/",
  },
  { name: "XRPL EVM TESTNET", rpc: "https://rpc.testnet.xrplevm.org/" },
  { name: "CELO TESTNET", rpc: "https://forno.celo-sepolia.celo-testnet.org/" },
  { name: "BASE TESTNET", rpc: "https://sepolia.base.org/" },
  { name: "ARC TESTNET", rpc: "https://rpc.testnet.arc.network" },
];

export default function NetworkSelect({ value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="font-label text-sm font-bold text-on-surface-variant">
        NETWORK SELECTION
      </label>
      <div className="relative">
        <select
          className="w-full appearance-none bg-surface-container-high border-none rounded-xl px-6 py-4 font-body focus:ring-2 focus:ring-primary-container outline-none cursor-pointer"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {NETWORKS.map(({ name, rpc }) => (
            <option key={rpc} value={rpc}>
              {name}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </div>
    </div>
  );
}
