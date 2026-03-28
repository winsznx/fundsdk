export interface SDKConfig {
  network: "mainnet" | "testnet" | "devnet";
  apiUrl?: string;
}
export const defaultSDKConfig: SDKConfig = { network: "testnet" };
export const resolveConfig = (config: Partial<SDKConfig>) => ({ ...defaultSDKConfig, ...config });
