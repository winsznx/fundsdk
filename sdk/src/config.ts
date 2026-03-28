export interface SDKConfig {
  network: "mainnet" | "testnet" | "devnet";
  apiUrl?: string;
}
export const defaultSDKConfig: SDKConfig = { network: "testnet" };
