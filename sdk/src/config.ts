export interface SDKConfig {
  network: "mainnet" | "testnet" | "devnet";
  apiUrl?: string;
}
export const defaultSDKConfig: SDKConfig = { network: "testnet" };
export const resolveConfig = (config: Partial<SDKConfig>) => ({ ...defaultSDKConfig, ...config });
export interface NetworkOptions { timeoutMs: number; retries: number; }
export const defaultNetworkOptions: NetworkOptions = { timeoutMs: 15000, retries: 3 };
