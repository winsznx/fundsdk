export enum PostConditionMode { Allow = 1, Deny = 2 }
export interface StandardPostCondition {
  type: "stx";
  amount: number;
  condition: "eq" | "gt" | "gte" | "lt" | "lte";
}
export interface FungiblePostCondition {
  type: "ft";
  amount: number;
  assetInfo: string;
}
export interface NonFungiblePostCondition {
  type: "nft";
  assetInfo: string;
  assetName: string;
}
export const createStxPc = (amount: number) => ({ type: "stx", amount, condition: "eq" });
