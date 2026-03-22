const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

/**
 * POST /roast
 * @param {{ walletAddress: string, rpcUrl: string, style: string }} params
 * @returns {Promise<any>} parsed JSON response
 */
export async function postRoast({ walletAddress, rpcUrl, style }) {
    const response = await fetch(`${BASE_URL}/roast`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            wallet_address: walletAddress,
            rpc_url: rpcUrl,
            style: style,
        }),
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Roast request failed (${response.status}): ${text}`);
    }

    return response.json();
}
