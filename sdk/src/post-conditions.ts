export enum PostConditionMode { Allow = 1, Deny = 2 }
export interface StandardPostCondition {
  type: "stx";
  amount: number;
  condition: "eq" | "gt" | "gte" | "lt" | "lte";
}
