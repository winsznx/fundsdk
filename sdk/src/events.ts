export interface FundotEvent {
  eventId: string;
  contractId: string;
}
export interface PledgeEvent extends FundotEvent {
  type: "PLEDGE";
  amount: number;
  pledger: string;
}
export interface RefundEvent extends FundotEvent {
  type: "REFUND";
  amount: number;
  pledger: string;
}
export interface MilestoneClaimEvent extends FundotEvent {
  type: "MILESTONE_CLAIM";
  index: number;
  amount: number;
}
export interface CampaignCompleteEvent extends FundotEvent {
  type: "COMPLETED";
}
export const isPledgeEvent = (event: FundotEvent): event is PledgeEvent => (event as any).type === "PLEDGE";
export const isRefundEvent = (event: FundotEvent): event is RefundEvent => (event as any).type === "REFUND";
